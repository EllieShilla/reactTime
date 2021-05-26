import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [curDate, setTime] = useState(new Date);
  useEffect(()=>{
    var handlerOfTimer = setInterval(() => updateTime(new Date()), 1000);
    return () => clearInterval(handlerOfTimer);
  });

  const updateTime = value => {
    setTime(value);
  }
  
  return ( 
    <div className="App">
              <h1>{curDate.toLocaleTimeString()}</h1>
    </div>
  );
}

export default App;

