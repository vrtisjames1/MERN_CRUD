import {useState, useEffect} from 'react';
import axios from 'axios';


//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';  
// import {Card} from 'react-bootstrap';  
// import css
import IndexCSS from './index.module.css';

//Display
import Display from './components/display';

const App = () => {

  const [locations, setLocations] = useState([]);
  const [newCountry, setNewCountry] = useState('');
  const [newMajorCities, setNewMajorCities] = useState('');
  const [newPhotos, setNewPhotos] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newRecommend, setNewRecommend] = useState(true);




//////// CRUD HANDLERS
  
const handleNewLocationFormSubmit = (event)=>{
  event.preventDefault();
  axios.post('http://localhost:3000/travel',
      {
          country: newCountry,
          majorCities: newMajorCities,
          photos: newPhotos,
          date: newDate,
          recommend: newRecommend

      }).then(()=>{axios.get('http://localhost:3000/travel')
          .then((response)=>{
              setLocations(response.data)
          })
      })
  };

  const handleEdit = (event, travelData)=>{
    event.preventDefault();
    axios.put(`http://localhost:3000/travel/${travelData._id}`,
        {
          country: newCountry,
          majorCities: newMajorCities,
          photos: newPhotos,
          date: newDate,
          recommend: newRecommend

      }).then(()=>{
            axios.get('http://localhost:3000/travel').then((response)=>{
                    setLocations(response.data)
                })
        })
  };

  const handleDelete = (travelData)=>{
    axios.delete(`http://localhost:3000/travel/${travelData._id}`).then(()=>{
            axios.get('http://localhost:3000/travel').then((response)=>{
                    setLocations(response.data)
                })
        })
  };

  useEffect(()=>{
    axios.get('http://localhost:3000/travel').then((response)=>{
          setLocations(response.data)
        })
      },[]);

return (
  <main>
    <h1>Travel Tracker</h1>

      <div>

        <div className={IndexCSS.container}>
          {locations.map((locationParam)=>{
            return (
                <div>
                  <Display location={locationParam}/>
                </div>
                    )
          })}
        </div>
      </div>

  </main>

)


};

export default App;
