import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Main from './components/Main';
import { 
Routes,
Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
<Login/>
<Routes>
  <Route path='/' element = {<Main/>}/>
</Routes>
    </div>

  );
}

export default App;
