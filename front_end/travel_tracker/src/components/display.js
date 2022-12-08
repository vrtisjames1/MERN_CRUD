import {useState} from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';  
// import {Card, CardGroup} from 'react-bootstrap';  

// import css
import IndexCSS from '../index.module.css';



const Display = (props) => {

    return (
        <div>
           <li>
                <p>{props.location.country}</p>
                <p>{props.location.majorCities}</p>
                <p><img src={props.location.photos} className={IndexCSS.photos}/></p>
                <p>{props.location.date}</p>
                <p>{(props.location.recommend) ? <p>Recommend!</p> : <p>Not Recommended</p>} 
                </p>
            </li>
        </div>
        )
    }
    
    export default Display