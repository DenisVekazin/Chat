import logo1 from './Images/ErenYeager.jpg';
import logo2 from './Images/ArminArlert.jpg';
import logo3 from './Images/Levi.jpg';
import './App.css';

function App() {
    const list = [
        { title: 'Эрен Йегер', description: 'Главный герой', age: 15, img: logo1 },
        { title: 'Армин Арлерт', description: 'Главный герой 2', age: 15, img: logo2 },
        { title: 'Леви Аккерман', description: 'Главный герой 3', age: 30, img: logo3 }
    ]
const listitems = list.map((item, index) =>
<Card title={item.title} description={item.description} age={item.age} img={item.img} index={index}/>
)
  return (
    <div>
      <div className="header">
        Атака ебланов
      </div>
      <div className="root-container">
          {listitems}
      </div>
    </div>
      
  );
}

const Card = ({ title, description, age, img, index }) => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Ты тыкнул на карточку');
  }
  return (
        <div className={`card card_${index}`} onClick={handleSubmit}>
            <img src={img} alt={`Avatar-${title}`} style={{ width: '100%', height: '300px' }}/>
            <div className="container">
                <h4><b>{title}</b></h4>
                <p>{description}</p>
                <p>Возраст {age}</p>
            </div>
        </div>
    )
}

export default App;
