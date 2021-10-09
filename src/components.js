import './App.css';
function Skill() {
    return (
      <div>
          <h2>Skills</h2>
        <p>Java
        <br />php
        <br />WordPress,
        <br /> J2EE,
        <br /> Spring Framework,
        <br /> JUnit, 
        <br />Mockito
        </p>
      </div>
    );
  }
  
  export default Skill;

  function Projects() {
    return (
      <div>
        <h2>Projects</h2>
            <p>
                <strong>Age and gender Detector in Artificial Intelligence</strong>
            </p>
            <p>
                &emsp;- Developed a project in python to to detect the age and gender of a person in an image or video file.The main functionality of this program is determine the approximate age and gender using machine learning.  
            </p>
            
                <strong>Comparative Study of Cosine similarity Vs Jaccard similarity</strong>
            
            <p>
                &emsp;-  Used selected query sentences, to search a dataset of few hundred short stories and retrieve the top 10 matching documents using Cosine and Jaccard similarity and showed results that cosine similarity was the more efficient in accuracy. 
            </p>
      </div>
    );
  }
  
  export {Projects};

