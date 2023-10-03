import logo from './Images/ErenYeager.jpg';
import './App.css';

function App() {
  return (
    <div className="card">
  <img src={logo} alt="Avatar" style={{width: '100%'}}/>
  <div class="container">
    <h4><b>Эрен Йегер</b></h4>
    <p>Главный герой</p>
  </div>
  </div>
  );
}

export default App;
