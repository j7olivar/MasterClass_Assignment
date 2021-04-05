import React from 'react';
import data from './data/CourseDataRated.json';
import './App.css';
import CourseData from './courseData';

function App() {

  return (
    <div className="App">
      <h1 className="MCHeader">
        MasterClass
      </h1>
      <hr />
      <div >
      <CourseData data={data}/>
      </div>
      
    </div>
  );
}




export default App;
