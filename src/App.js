import './App.css';
import Nav from './collections/Nav'
import Footer from './collections/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './collections/signup'
import PrivateComponent from './collections/privateComponent'
import Login from './collections/login'
import AddProduct from './collections/AddProduct' 

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent/>}>
            <Route path='/' element={<h1>This is home page</h1>} />
            <Route path='/addproduct' element={<AddProduct/>} />
            <Route path='/update' element={<h1>This is update page</h1>} />
            <Route path='/logout' element={<h1>This is logout page</h1>} />
            <Route path='/profile' element={<h1>This is profile page</h1>} />

          </Route>

          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
