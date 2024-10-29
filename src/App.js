import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/home';
import SignUp from './components/signup';
import LogIn from './components/login';
import Products from './components/products';
import NotFound from './components/notfound';

// fix the not found component!

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/LogIn' element={<LogIn/>}/>
          <Route path='/Products' element={<Products/>}/>
          {/* <Route element={<NotFound/>}/> DOES NOT WORK FOR NOW! */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
