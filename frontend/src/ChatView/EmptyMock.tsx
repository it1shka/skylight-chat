import * as Styled from './styles'
import { Link } from 'react-router-dom'

const EmptyMock = () => {
  return (
    <Styled.MockContainer>
      <h1>Whoopsie! 🤯</h1>
      <p>
        It seems that access to your geolocation has been denied. 
        Geolocation is an essential feature for the 
        optimal usability of this application. To fully 
        enjoy our services, please follow the link, 
        <b>reload the page</b> and try again: 
      </p>
      <Link to='/'>Main page</Link>
    </Styled.MockContainer>
  )
}

export default EmptyMock