import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from './Components/contact'
import Courses from './Components/courses'
import Education from './Components/education'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>,
  document.getElementById('contact')
);
ReactDOM.render(
  <React.StrictMode>
    <Courses />
  </React.StrictMode>,
  document.getElementById('courses')
);

ReactDOM.render(
  <React.StrictMode>
    <Education />
  </React.StrictMode>,
  document.getElementById('edu')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

