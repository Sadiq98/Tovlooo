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
const CatalogScreen = lazy(() => import("./screens/CatalogScreen"));
const SingleProductScreen = lazy(() => import("./screens/SingleProductScreen"));
const StarterPackScreen = lazy(() => import("./screens/StarterPackScreen"));
const IngredientScreen = lazy(() => import("./screens/IngredientScreen"));
const AllBlogsScreen = lazy(() => import("./screens/AllBlogsScreen"));
const BlogScreen = lazy(() => import("./screens/BlogScreen"));
const JerkyScreen = lazy(() => import("./screens/JerkyScreen"));
const SupplementScreen = lazy(() => import("./screens/SupplementScreen"));
const MyAccountScreen = lazy(() => import("./screens/MyAccountScreen"));
const AmbassadorScreen = lazy(() => import("./screens/AmbassadorScreen"));
const AmbassadorRegistrationScreen = lazy(
  () => import("./screens/AmbassadorRegistrationScreen"),
);
const AmbassadorLoginScreen = lazy(
  () => import("./screens/AmbassadorLoginScreen"),
);
const AmbassadorPortalLayout = lazy(
  () => import("./screens/AmbassadorPortalLayout"),
);
const AmbassadorGeneralInformationScreen = lazy(
  () => import("./screens/AmbassadorGeneralInformationScreen"),
);
const AmbassadorMyInformationScreen = lazy(
  () => import("./screens/AmbassadorMyInformationScreen"),
);
const AmbassadorSocialAccountsScreen = lazy(
  () => import("./screens/AmbassadorSocialAccountsScreen"),
);
const AmbassadorDashboardScreen = lazy(
  () => import("./screens/AmbassadorDashboardScreen"),
);
const AmbassadorOrdersScreen = lazy(
  () => import("./screens/AmbassadorOrdersScreen"),
);
const AmbassadorMediaLibraryScreen = lazy(
  () => import("./screens/AmbassadorMediaLibraryScreen"),
);
const ContactScreen = lazy(() => import("./screens/ContactScreen"));
const RegistrationScreen = lazy(() => import("./screens/RegistrationScreen"));
const QuizScreen = lazy(() => import("./screens/QuizScreen"));
const BagScreen = lazy(() => import("./screens/BagScreen"));
const PaymentScreen = lazy(() => import("./screens/PaymentScreen"));
const PersonalAccountScreen = lazy(
  () => import("./screens/PersonalAccountScreen"),
);
const OrdersScreen = lazy(() => import("./screens/OrdersScreen"));

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
          <Route path="/catalog" element={<CatalogScreen />} />
          <Route path="/catalog/:id" element={<SingleProductScreen />} />
          <Route path="/starterpack" element={<StarterPackScreen />} />
          <Route path="/blog" element={<AllBlogsScreen />} />
          <Route path="/blog/:title" element={<BlogScreen />} />
          <Route path="/ingredients" element={<IngredientScreen />} />
          <Route path="/jerky" element={<JerkyScreen />} />
          <Route path="/supplements" element={<SupplementScreen />} />
          <Route path="/account" element={<MyAccountScreen />} />
          <Route path="/my-account/my-info" element={<PersonalAccountScreen />} />
          <Route path="/my-account/orders" element={<OrdersScreen />} />
          <Route path="/register" element={<RegistrationScreen />} />
          <Route path="/quiz" element={<QuizScreen />} />
          {/* Product screens link to both /cart and /cart/:id?qty= */}
          <Route path="/cart/:id?" element={<BagScreen />} />
          <Route path="/payment" element={<PaymentScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/ambassador" element={<AmbassadorScreen />} />
          <Route
            path="/ambassador/register"
            element={<AmbassadorRegistrationScreen />}
          />
          <Route path="/ambassador/login" element={<AmbassadorLoginScreen />} />
          {/* Ambassador portal: shared section nav + nested screens */}
          <Route path="/ambassador" element={<AmbassadorPortalLayout />}>
            <Route
              path="general-information"
              element={<AmbassadorGeneralInformationScreen />}
            />
            <Route
              path="my-information"
              element={<AmbassadorMyInformationScreen />}
            />
            <Route
              path="social-accounts"
              element={<AmbassadorSocialAccountsScreen />}
            />
            <Route path="dashboard" element={<AmbassadorDashboardScreen />} />
            <Route path="orders" element={<AmbassadorOrdersScreen />} />
            <Route
              path="media-library"
              element={<AmbassadorMediaLibraryScreen />}
            />
          </Route>
        </Routes>
        {/* <ScrollToTop /> */}
      </Flex>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
