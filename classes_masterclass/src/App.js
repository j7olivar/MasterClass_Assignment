import React, { useEffect } from 'react';
import data from './data/CourseDataRated.json';
import './App.css';

function App() {
  //method to fetch data from file
  const courseDataRated = data.map( (data) =>{
    //console.log(data);
    return (
      <div>
          <h2>{data.instructor_name}</h2>
          <h3>{data.title}</h3>
          <p>{data.rating}</p>
          <p>{data.id}</p>
          <img src={data.instructor_image_url} className="ClassItem-image"/>
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
