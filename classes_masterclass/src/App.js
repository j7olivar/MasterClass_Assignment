import React, { useEffect } from 'react';
import data from './data/CourseDataRated.json';
import './App.css';

function App() {
  //method to fetch data from file
  const courseDataRated = data.map( (data) =>{
    //console.log(data);
    return (
      <div>
          <img src={data.instructor_image_url} className="ClassItem-image"/>
          <h2 className="instructorName">{data.instructor_name}</h2>
          <h3 className="textColor">{data.title}</h3>
          <p className="textColor">Rating: {data.rating} out of 5</p>
          <p className="textColor">{data.id}</p>
      </div>
    
      
    )
  })


  return (
    <div className="App">
      <div>
        {courseDataRated}
      </div>
    </div>
  );
}

export default App;
