import styled from "styled-components";
import bg from './img/bg.png';
import { MainLayout } from "./styles/layout";
import Orb from "./Components/Orb/Orb";


function App() {
  return (
    <AppStyled bg = {bg} classname="App"> 
      <Orb />
      <MainLayout>
        <h1>Jerry</h1> 
      </MainLayout>

    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
`;


export default App;
 