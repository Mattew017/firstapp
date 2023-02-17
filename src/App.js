import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Header from './Components/Header';
import CarouselBox from './Components/CarouselBox';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
function App() {
  return (
    <div>
      <Header/>
      <CarouselBox/>
      <Container className='mt-5'>
        <h1 className='text-center mb-5'>Проекты</h1>
        <Projects/>
        </Container>
        <Footer/>
      
    </div>
    
  );
}

export default App;

