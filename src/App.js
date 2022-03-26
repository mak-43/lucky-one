
import './App.css';
import Shop from './Components/Shop/Shop';
import HowReactWorks from './Components/Theory/HowReactWorks';
import HowUseStateWorks from './Components/Theory/HowUseStateWorks';
import PropsVsState from './Components/Theory/PropsVsState';


function App() {
  return (
    <div className="App">
      <Shop></Shop>
      <HowReactWorks></HowReactWorks>
      <HowUseStateWorks></HowUseStateWorks>
      <PropsVsState></PropsVsState>
    </div>
  );
}

export default App;
