import logo from './Images/ErenYeager.jpg';
import './App.css';

function App() {
    const list = [
        { title: 'Эрен Йегер', description: 'Главный герой', img: logo },
        { title: 'Эрен Йегер 2', description: 'Главный герой 2', img: logo },
        { title: 'Эрен Йегер 3', description: 'Главный герой 3', img: logo }
    ]

  return (
      <div className="root-container">
          <Card title={'Эрен Йегер'} description={'Главный герой'} img={logo} />
      </div>
  );
}

const Card = ({ title, description, img }) => {
    return (
        <div className="card">
            <img src={img} alt={`Avatar-${title}`} style={{ width: '100%' }}/>
            <div className="container">
                <h4><b>{title}</b></h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default App;
