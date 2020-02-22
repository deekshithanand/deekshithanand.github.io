import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/footer';



function App() {
  return (
   <div className="App">
     <header >
	  <div class="container-fluid jumbotron ">
		  <h1 class="er">DEEKSHITH ANAND</h1>
    </div>
    </header>
    <div class="container">
      
        <AboutMe />
        <hr />  
          <h2>Education:</h2>
        <hr />
        <Education />
        <hr />
        <Skills/>
        <hr />
        <Footer />
    </div>

   </div>
  );
}

export default App;


