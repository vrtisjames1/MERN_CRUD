import {useState, useEffect} from 'react';
import axios from 'axios';


//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';  
// import {Card} from 'react-bootstrap';  
// import css
import IndexCSS from './index.module.css';

//Display
import Display from './components/display';
import Create from './components/create';

const App = () => {

  const [locations, setLocations] = useState([]);
  const [newCountry, setNewCountry] = useState('');
  const [newMajorCities, setNewMajorCities] = useState('');
  const [newPhotos, setNewPhotos] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newRecommend, setNewRecommend] = useState(true);
  const [editMajorCities, setUpdatedCities] = useState('');

//// HANDLERS

  const handleNewCountryChange = (event)=>{
    setNewCountry(event.target.value);
  };

  const handleNewMajorCitiesChange = (event)=>{
    setNewMajorCities(event.target.value.split(","));
  };

  const handleNewPhotosChange = (event)=>{
    setNewPhotos(event.target.value);
  };

  const handleNewDateChange = (event)=>{
    setNewDate(event.target.value);
  };

  const handleNewRecommendChange = (event)=>{
    { (event.target.checked === true) ? setNewRecommend(true) : setNewRecommend(false)}
  };

  const handleUpdatedCitiesChange = (event) => {
    setUpdatedCities(event.target.value.split(","))
  }


//////// CRUD HANDLERS

const handleUpdateCities = (list)=>{
	axios.put(`http://localhost:3000/travel/${list._id}`,
			{
        country: list.country,
        majorCities: editMajorCities,
        photos: list.photos,
        date: list.date,
        recommend: list.recommend
			}
		).then((response) => {axios.get('http://localhost:3000/travel').then((response) => {
					setLocations(response.data);
				})
	})
}
  
const handleNewLocationFormSubmit = (event, travelData)=>{
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
        <div>
        <h2>Create Travel Listing</h2>
            
              <div>
                <Create locations={locations}
                         handleNewLocationFormSubmit={handleNewLocationFormSubmit}
                         handleNewCountryChange={handleNewCountryChange}
                         handleNewMajorCitiesChange={handleNewMajorCitiesChange}
                         handleNewPhotosChange={handleNewPhotosChange}
                         handleNewDateChange={handleNewDateChange}
                         handleNewRecommendChange={handleNewRecommendChange}/>

              </div>
                        
        </div>
      </div>

      <div>

        <div className={IndexCSS.container}>
          {locations.map((locationParam)=>{
            return (
                <div>
                  <Display location={locationParam}
                  handleDelete={handleDelete}
                  handleUpdatedCitiesChange={handleUpdatedCitiesChange}
                  handleUpdateCities={handleUpdateCities}/>
                </div>
                    )
          })}
        </div>
      </div>



  </main>

)


};

export default App;
