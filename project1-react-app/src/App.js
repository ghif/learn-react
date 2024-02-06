import logo from './logo.svg';
import './App.css';

import Container from './Container.js';
import Link from './Link.js';
import Button from './Button.js';
import Input from './Input.js';

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="React logo" />
        <Container>
          <Link href="https://react-tutorial.app">Shop online</Link>
          <br/>
          <Input type="email" placeholder="Email" />
          <Button>Buy</Button>
        </Container>
      </header>
      
    </div>
  );
}

export default App;