import logo from './logo.svg';
import './App.css';
import Atomfunc from './components/atoms/Atomfunc';
import { AtomClass } from './components/atoms/AtomClass';
import Comp1 from './components/Day-3/Comp1';
import Comp2 from './components/Day-3/Comp2';
import Props from './components/Day-3/Props';
import Counter from './components/atoms/Usestate/Counter/Counter';
import Increment from './components/atoms/Increment';
import Decrement from './components/atoms/Decrement';
import CounterIncDec from './components/molecules/CounterIncDec';


function App() {
  return (
    <div className="App">
      {/* <Atomfunc/>
      <AtomClass/>  */}
      {/* <Comp1/>
      <Comp2/>
      <Props authName='Shaan'/> */}
      {/* <Counter/> */}
      {/* <Increment/>
      <Decrement/> */}
      <CounterIncDec/>
    </div>
  );
}

export default App;
