import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Quote from '../components/Quote/Quote';
import Projects from '../components/Projects/Projects';
import CompetitiveProgramming from '../components/CompetitiveProgramming/CompetitiveProgramming';
import Skills from '../components/Skills/Skills';
import About from '../components/About/About';
import Contacts from '../components/Contacts/Contacts';
import Footer from '../components/Footer/Footer';
import ChatBot from '../components/ChatBot/ChatBot';

export default function Home() {
  return (
    <>
      <div className="container">
        <Header />
        <main>
          <Hero />
          <Quote />
          <Projects />
          <CompetitiveProgramming />
          <Skills />
          <About />
          <Contacts />
        </main>
      </div>
      <Footer />
      <ChatBot />
    </>
  );
}
