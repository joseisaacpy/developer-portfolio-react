// Components
import Header from "../../Components/Header";
import Home from "../../Components/Home";
import Sobre from "../../Components/Sobre";
import Projetos from "../../Components/Projetos";
import Contato from "../../Components/Contato";
import Footer from "../../Components/Footer";
import { Element } from "react-scroll";

const SinglePage = () => {
  return (
    <>
      <Header />
      {/* Home */}
      <Element name="home" id="home">
        <Home />
      </Element>
      {/* Sobre */}
      <Element name="sobre" id="sobre">
        <Sobre />
      </Element>
      {/* Projetos */}
      <Element name="projetos" id="projetos">
        <Projetos />
      </Element>
      {/* Contato */}
      <Element name="contato" id="contato">
        <Contato />
      </Element>

      <Footer />
    </>
  );
};

export default SinglePage;
