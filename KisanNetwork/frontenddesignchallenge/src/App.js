import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Box from "@mui/material/Box";

function App() {
  return (
    <Box>
      <NavBar />
      <Header />
      <Landing />
      <Articles />
      <Footer />
    </Box>
  );
}

export default App;
