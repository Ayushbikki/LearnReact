//import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import MyNotes from './screens/MyNotes/MyNotes';

function App() {
  return (
    <BrowserRouter>
     <Header />
    {/* <main style={{minHeight: "93vh"}}></main> */}
    <main>
    <Routes>
    <Route path='/' element={<LandingPage />}/>
   <Route path='/mynotes' element={<MyNotes/>}/>
    </Routes>
   
   </main>
    <Footer />
   </BrowserRouter> 
   
  );
}

export default App;
