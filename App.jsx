import { Routes, Route, Link } from 'react-router-dom';
import  { Link } from 'react-router-dom';
import  Server from './.server.js';
import './App.css'


const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/flavors' element={<ul><li>Icecream Flavors</li></ul>} />
        <Route path='/flavors:id' element={<ul><li>Icecream Flavor</li></ul>} />    
      </Routes>
    </>
  )
}

export default App;