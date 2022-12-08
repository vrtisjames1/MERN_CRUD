import {useState} from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';  
// import {Card, CardGroup} from 'react-bootstrap';  

// import css
import IndexCSS from '../index.module.css';


const Create = (props) => {

    return (
        <div>
           
                <form class="submitForm" onSubmit={ (event)=>{ props.handleEdit(event, props.locations)}} >
                  <input type="text" placeholder="Country" onChange={props.handleNewCountryChange}/><br/>
                  <input type="text" placeholder="Major Cities" onChange={props.handleNewMajorCityChange}/><br/>
                  <input type="text" placeholder="Photo Links" onChange={props.handleNewPhotosChange}/><br/>
                  <input type="text" placeholder="Date" onChange={props.handleNewDateChange}/><br/>
                  Would You Recommend this Destination? <input type="checkbox" onChange={props.handleNewRecommendChange}/><br/>
                  <input type="submit" value="Create New Travel Listing"/>
                </form>
            
        </div>
        )
    }
    
    export default Create