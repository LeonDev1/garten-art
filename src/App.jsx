import Header from "./sections/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Why from "./sections/Why.jsx";
import OurSevices from "./sections/OurServices.jsx";
import BeforeAfter from "./sections/BeforeAfter.jsx";
import Feedback from "./sections/Feedback.jsx";
import Imprint from "./sections/Imprint.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Why></Why>
      <OurSevices></OurSevices>
      <BeforeAfter></BeforeAfter>
      <Feedback></Feedback>
      <Imprint></Imprint>
    </>
  );
}

export default App;
