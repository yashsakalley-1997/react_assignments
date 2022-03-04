import {Counter} from "./components/Counter";

import './App.css';

function App() {
  const initial_value = 10;
  const cars = ['Endeavour 3.2','Endeavour 2.0 (2020)','Endeavour 2 litre Bi Turbo Diesel (2022)'];
  return (
    <div className="content">
      <Counter value={initial_value} list={cars} flag={false}></Counter>
    </div>
  );
}

export default App;
