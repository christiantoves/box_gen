import {useState} from 'react';
import Form from './components/Form';
import Results from './components/Results';
import './App.css';


function App() {
  const [loggedBox, setLoggedBox] = useState([])
  
  return (
    <div className="App">
      <Form setLoggedBox = {setLoggedBox} loggedBox = {loggedBox} />
      {
      loggedBox.map((box, i) => <Results key = {i} box = {box}/>)
      }
    </div>
  );
}


export default App;