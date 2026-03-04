import About from "../components/About/About";
import Benefits from "../components/Benefits/Benefits";
import Contact from "../components/Contact/Contact";
import Culture from "../components/Culture/Culture";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Message from "../components/Message/Message";


const Home = () => {
  return (
    <>
<Header />
<Hero />
<Message />
<About />
<Culture />
<Benefits />
<FAQ />
<Contact />
<Footer />
    </>
  );
};

export default Home;