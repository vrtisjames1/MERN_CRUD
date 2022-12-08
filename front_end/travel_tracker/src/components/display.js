import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Card} from 'react-bootstrap';  

// import css
import IndexCSS from '../index.module.css';



const Display = (props) => {

    return (
        <div className={IndexCSS.cards}>
            <Card style={{ width: '18rem' }}>
                <Card.Header>
                    <h2>{props.location.country}</h2>
                </Card.Header>
            

                {/* array over photos */}
                {props.location.photos.map((photoParam) => {
                    return (
                        <p>
                        <Card.Img variant="top" src={photoParam} />
                        </p>
                            )
                        })}
                <Card.Body>
                    {/* array over major cities */}
                    <ul>
                    {props.location.majorCities.map((cityParam) => { 
                    return (
                        <li>{cityParam}</li>
                            )
                    })}
                    </ul>
                    <p>{props.location.date}</p>
                    {(props.location.recommend) ? <p>Recommend!</p> : <p>Not Recommended</p>} 
                    
                    <button onClick={ (event)=>{ props.handleDelete(props.location) } }>Remove Listing</button>

                </Card.Body>

            </Card>


        </div>
        )
    }
    
    export default Display