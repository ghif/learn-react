import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Box from './Box.js';
import Link from './Link.js';
import Button from './Button.js';
import Input from './Input.js';

import Home from './Home.js';
import Login from './Login.js';

import {useEffect, useState}  from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="React logo" />
//         <Box>
//           <Link href="https://react-tutorial.app">Shop online</Link>
//           <br/>
//           <Input type="email" placeholder="Email" />
//           <Button>Buy</Button>
//         </Box>
//       </header>
      
//     </div>
//   );
// }

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home loggedIn={loggedIn} email={email} />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
