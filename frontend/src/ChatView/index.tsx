import { useRecoilValue, useRecoilState } from 'recoil'
import { idState, locationState } from './state'
import * as Styled from './styles'
import EmptyMock from './EmptyMock'
import { FormEvent, useEffect, useRef, useState } from 'react'
import API, { Message } from '../API'
import { nameState } from '../MainView/state'

const ChatView = () => {
  const name = useRecoilValue(nameState)
  const location = useRecoilValue(locationState)
  const [messages, setMessages] = useState<Message[]>([])
  const [userPrompt, setUserPrompt] = useState("")
  const [id, setId] = useRecoilState(idState)
  const mock = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (id != null) return
    API.getId().then(newId => {
      setId(newId)
    })
  }, [id])

  useEffect(() => {
    const interval = setInterval(() => {
      if (location === null) return
      API.getMessages(location.lat, location.lng).then(messages => {
        if (!messages) return
        setMessages(messages)
      })
      // scrollToBottom()
    }, 250)
    return () => clearInterval(interval)
  }, [location])

  const submitMessage = (event: FormEvent) => {
    event.preventDefault()
    if (location === null || id === null) return
    API.newMessage(name, id, location.lat, location.lng, userPrompt)
    setUserPrompt("")
  }

  return location ? (
    <Styled.ChatOuterContainer>
      <Styled.Chat>
        {
          messages.map((message, idx) => {
            return <MessageElement 
              key={idx} 
              selfId={id}
              {...message} 
            />
          })
        }
        <div ref={mock}></div>
      </Styled.Chat>
      <Styled.ChatForm onSubmit={submitMessage}>
        <input required
          value={userPrompt}
          onChange={event => setUserPrompt(event.target.value)}
          placeholder='Write your message here...'
        />
        <button type='submit'>Send</button>
      </Styled.ChatForm>
    </Styled.ChatOuterContainer>
  ) : <EmptyMock />
}

const MessageElement = (props: Message & { selfId: number | null }) => {
  const self = props.authorId === props.selfId
  return (
    <Styled.MessageContainer $self={self}>
      <small>{self ? 'Me' : (props.authorName || 'Unknown')}</small>
      <p>{props.content}</p>
    </Styled.MessageContainer>
  )
}

export default ChatView