import { GlobalStyle } from "GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { BrowserRouter as Router } from "react-router-dom";
import { Header, Hero, About, Explore, Popular, Footer } from "components";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Hero />
        <About />
        <Popular />
        <Explore />
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
