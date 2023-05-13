import "./App.css";
import IntroductionCard from "./components/IntroductionCard/IntroductionCard";
import AboutMe from "./components/AboutMe/AboutMe";
import MyProjects from "./components/MyProjects/MyProjects";
import ContactMe from "./components/ContactMe/ContactMe";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NavProvider from "./context/NavContext";

function App() {
  return (
    <div className="container">
      <NavProvider>
        <Header></Header>
        <IntroductionCard></IntroductionCard>
        <AboutMe></AboutMe>
        <MyProjects></MyProjects>
        <ContactMe></ContactMe>
        <Footer></Footer>
      </NavProvider>
    </div>
  );
}

export default App;
