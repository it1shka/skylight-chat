import * as Styled from './styles'
import { Link, useNavigate } from 'react-router-dom'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { nameState, randomName } from './state'
import { locationState } from '../ChatView/state'

const MainView = () => {
  const [name, setName] = useRecoilState(nameState)
  const setLocation = useSetRecoilState(locationState)
  const navigate = useNavigate()

  type AnchorEvent = React.MouseEvent<HTMLAnchorElement>
  const determineMyLocation = (event: AnchorEvent) => {
    event.preventDefault()
    if (!("geolocation" in navigator)) return
    navigator.geolocation.getCurrentPosition(
      position => { // success
        const lng = position.coords.longitude
        const lat = position.coords.latitude
        setLocation({ lng, lat })
      },
      () => { // failure
        console.log('Failed to get your position')
        setLocation(null)
      },
      { // options
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000
      }
    )
    navigate('/chat')
  }

  return (
    <Styled.MainContainer>
      <Styled.NameInputContainer>
        <label htmlFor='name-input'>Your nickname: </label>
        <input 
          value={name}
          onChange={event => setName(event.target.value)}
          onDoubleClick={() => setName(randomName())}
          id='name-input'
          placeholder='Be creative!'
        />
      </Styled.NameInputContainer>
      <Link to='/chat' onClick={determineMyLocation}>Use my location</Link>
      <Link to='/map'>Choose on map</Link>
    </Styled.MainContainer>
  )
}

export default MainView