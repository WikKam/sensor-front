import '../styles/globals.css';
import Head from 'next/head'
import { Navbar, Footer } from '../components';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function MyApp({ Component, pageProps }) {
  
  return (
    <ThemeProvider theme={theme}>
    <div className="main">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Component {...pageProps} />
    </div>
    <Footer/>
    </ThemeProvider>
  )
}

export default MyApp
