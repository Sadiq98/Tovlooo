import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "./components/custom/Header";
import Footer from "./components/custom/Footer";
import HomeScreen from "./screens/HomeScreen";
import { Flex } from "@chakra-ui/react";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      mirror: true,
      easing: "linear",
      offset: 200,
    });
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Flex direction="column" as="main" pt="24" color="text.primary">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
        {/* <ScrollToTop /> */}
      </Flex>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
