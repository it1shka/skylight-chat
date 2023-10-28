export interface Message {
  id: number
  authorName: string
  authorId: number
  lng: number
  lat: number
  content: string
}

class API {
  private readonly baseUrl = 'http://localhost:3005'

  getMessages = async (lat: number, lng: number) => {
    try {
      const answer = await fetch( `${this.baseUrl}/get-messages?lat=${lat}&lng=${lng}` )
      const json = await answer.json()
      return json as Array<Message>  
    } catch {
      console.log('Failed to get messages')
      return []
    }
  }

  newMessage = async (authorName: string, authorId: number, lat: number, lng: number, content: string) => {
    try {
      const answer = await fetch( `${this.baseUrl}/new-message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          authorName,
          authorId,
          lat,
          lng,
          content
        })
      })
      const json = await answer.json()
      return json
    } catch {
      console.log('Failed to create message')
      return null
    }
  }

  getId = async () => {
    try {
      const result = await fetch(`${this.baseUrl}/get-id`)
      const value = await result.json() as { id : number }
      return value.id
    } catch {
      console.log('Failed to get an id')
      return null
    }
  }
}

export default new API()
