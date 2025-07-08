import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, lazy } from "react";
import Header from "./components/custom/Header";
import Footer from "./components/custom/Footer";
import { Flex } from "@chakra-ui/react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const HomeScreen = lazy(() => import("./screens/HomeScreen"));
const AboutScreen = lazy(() => import("./screens/AboutScreen"));

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
      <FloatingWhatsApp
        accountName="Tovlo"
        phoneNumber="919152832898"
        statusMessage="Online"
        allowClickAway={true}
        allowEsc={true}
        chatboxStyle={{ color: "#017D65" }}
        // buttonStyle={{ background: "#FBFFDC" }}
      />

      <Header />
      <Flex direction="column" as="main" color="text.primary">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
        </Routes>
        {/* <ScrollToTop /> */}
      </Flex>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
