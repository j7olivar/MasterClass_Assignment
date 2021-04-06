import React,{useState} from 'react';
import './App.css'
import {Button} from '@material-ui/core';

function CourseData (props){

  const [faves, setFaves] = useState([]);
  const [buttonColor, setButtonColor] = useState('primary');
  const [buttonText, setButtonText] = useState('Save');

  //function to save courses to faves
  const saveOnClick= (id) => {
    //remove item from favorites list
    if(faves.includes(id)){
      setButtonColor('primary');
      setButtonText('Save');
      setFaves(  faves.filter(item => item !== id));
      
    }
    //add item to favorites list
    else{
      setButtonColor('secondary');
      setButtonText('Saved');
      setFaves(faves.concat([id]));
    }
    //console.log(faves);
  }

    return (props.data.map(function(data) {

      return(
        <div className="separate">
        <div key={data.id} className="ClassItem">
          <img src={data.instructor_image_url} className="ClassItem-image"/>
          <h2 className="instructorName">{data.instructor_name}</h2>
          <h3 className="courseTitle">{data.title}</h3>
          <p className="courseRating">Rating: {data.rating} out of 5</p>
         
          <Button 
          color={buttonColor} variant="contained" onClick={()=> saveOnClick(data.id)} 
          >
            {buttonText}
          </Button>
      </div> 
      </div>
      );
    }))
}

export default CourseData;