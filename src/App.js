import './App.css';
import {useEffect, useState} from 'react';

const iller = [
  'Adana',
  'Adıyaman',
  'Afyonkarahisar',
  'Ağrı',
  'Amasya',
  'Ankara',
  'Antalya',
  'Artvin',
  'Aydın',
  'Balıkesir',
  'Bilecik',
  'Bingöl',
  'Bitlis',
  'Bolu',
  'Burdur',
  'Bursa',
  'Çanakkale',
  'Çankırı',
  'Çorum',
  'Denizli',
  'Diyarbakır',
  'Edirne',
  'Elazığ',
  'Erzincan',
  'Erzurum',
  'Eskişehir',
  'Gaziantep',
  'Giresun',
  'Gümüşhane',
  'Hakkari',
  'Hatay',
  'Isparta',
  'Mersin',
  'İstanbul',
  'İzmir',
  'Kars',
  'Kastamonu',
  'Kayseri',
  'Kırklareli',
  'Kırşehir',
  'Kocaeli',
  'Konya',
  'Kütahya',
  'Malatya',
  'Manisa',
  'Kahramanmaraş',
  'Mardin',
  'Muğla',
  'Muş',
  'Nevşehir',
  'Niğde',
  'Ordu',
  'Rize',
  'Sakarya',
  'Samsun',
  'Siirt',
  'Sinop',
  'Sivas',
  'Tekirdağ',
  'Tokat',
  'Trabzon',
  'Tunceli',
  'Şanlıurfa',
  'Uşak',
  'Van',
  'Yozgat',
  'Zonguldak',
  'Aksaray',
  'Bayburt',
  'Karaman',
  'Kırıkkale',
  'Batman',
  'Şırnak',
  'Bartın',
  'Ardahan',
  'Iğdır',
  'Yalova',
  'Karabük',
  'Kilis',
  'Osmaniye',
  'Düzce'
];

const App = () => {
  const [selected, setSelected] = useState(iller[0]);

  const [weather, setWeather] = useState({});

  const API_KEY = "518c7a8bc9a9039b7e3f68b5965a1734";


  // https://samples.openweathermap.org/data/2.5/forecast?q=giresun&appid=518c7a8bc9a9039b7e3f68b5965a1734

  const getWeather = async (e) => {
    const api_call = await fetch("http://api.openweathermap.org/data/2.5/weather?q=" + selected +"&lang=tr&units=standard&appid=" + API_KEY);
    const data = await api_call.json();
    console.log(data);
    setWeather(data);
  }
  
  useEffect(() => {
    getWeather();
  } , [selected]);

  const onSubmit = async e => {
    e.preventDefault();
    getWeather();
  }

  return (
    <div className="App">

      <div className="container" style={{padding:10, backgroundColor:'#DEDEDE'}}>

        <h3>React ile Hava Durumu Uygulaması</h3>

      <form onSubmit={onSubmit} >

        <select name="city" value={selected} onChange={(e) => {
          setSelected(e.target.value);
        } }>
          {iller.map((il, index) => {
            return <option key={index} value={il}>{il}</option>
          } )}
        </select>
        <button>Get Weather</button>
      </form>
      </div>

      <div style={{width:200, border: 1, backgroundColor:'#fefefe'}}>
        <table>
          <tr>
            <td>Sıcaklık</td>
            <td>{weather.main?.temp}</td>
            </tr>
        </table>     
      </div>


    </div>
  );
}

export default App;
