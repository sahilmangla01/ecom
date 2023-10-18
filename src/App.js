
import { ThemeProvider } from 'styled-components';
import RouterComponent from './Router/RouterComponent';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { PayPalScriptProvider} from "@paypal/react-paypal-js";



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

  const initialOptions = {
    clientId: "AeVQMWRo280pb6qUcUyDzvreC9jfBk-ucSgI_6GTXX_KixPk3aTRtTP7s6OHo-SqxeyVLpqKBPO0iMf1",
    currency: "USD",
    intent: "capture",
};
  return (
    <PayPalScriptProvider options={initialOptions}>
      <ThemeProvider theme={theme}>  
          <GlobalStyle/>
          <Header/>
          <RouterComponent/>
          
          <Footer/>
          
     </ThemeProvider>
    </PayPalScriptProvider>

  );
}

export default App;
