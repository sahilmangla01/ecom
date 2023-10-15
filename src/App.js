
import { ThemeProvider } from 'styled-components';
import RouterComponent from './Router/RouterComponent';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';


function App() {
  const theme = {
    colors: {
      bg: "#F0F0F0", 
      black:'#001524',
      help:'#614BC3',
      btn: "rgb(98 84 243)"
    },
    media:{
      mobile:"540px",
      tab: "990px"
    }
  }
  return (
    <ThemeProvider theme={theme}>  
          <GlobalStyle/>
          <Header/>
          <RouterComponent/>
          <Footer/>
          
     </ThemeProvider>

  );
}

export default App;
