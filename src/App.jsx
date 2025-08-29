import Header from './components/Header';
import CoursesSection from './components/CoursesSection';
import NewsSection from './components/NewsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './styles.css'
function App() {
  return (
    <>
      <Header/>
      <main>
        <CoursesSection/>
        <NewsSection/>
        <ContactForm/>
      </main>
      <Footer/>
    </>
  )
}

export default App;
