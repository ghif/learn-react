import logo from './logo.svg';
import './App.css';

import Welcome from './components/Welcome';
import Form from './components/Form';

// import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import CounterTwo from './components/CounterTwo';
import ObjectState from './components/ObjectState';
import CounterFour from './components/CounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import EffectCounterOne from './components/EffectCounterOne';
import ClassMouse from './components/ClassMouse';
import EffectMouse from './components/EffectMouse';
import MouseContainer from './components/MouseContainer';

import { useContext } from 'react';

function App() {
  const username = useContext("ghifary")
  return (

    <div className="App">
      {/* <Form></Form> */}
      {/* Hello Rumi */}
      <Welcome />
      {/* <ClassCounter /> */}
      <Counter />
      <CounterTwo />
      <ObjectState />
      <CounterFour />
      {/* <ClassCounterOne /> */}
      <EffectCounterOne />
      {/* <ClassMouse /> */}
      {/* <EffectMouse /> */}
      <MouseContainer />
    </div>
  );
}

export default App;
