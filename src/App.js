import logo from './logo.svg';
import styled from 'styled-components';
import {photos} from './photos'

const Title = styled.h1`
  color: greenyellow;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 305px 305px 305px 305px;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  width: 300px;
  height: auto;
  margin-bottom: 5px;
`

function App() {
  const images = photos.map(element=>{
    return (
      
      <Image src={element.url}></Image>
      
    )
  })

  return (
    <>
      <Title>My Random Photography</Title>
      <Container>
        {images}
      </Container>
      
    </>
  );
}

export default App;
