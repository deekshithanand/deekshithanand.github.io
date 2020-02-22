import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import FontAwesome  from 'react-fontawesome'
import './App.css'


function App() {
  return (
   <div className="App">
     <header >
	  <div class="container-fluid jumbotron ">
		  <h1 class="er">DEEKSHITH ANAND</h1>
    </div>
    </header>
    <div class="container">
      
        <section class="justify-content-center">
          <hr />
            <h2>About Me</h2>
            <hr />
            <p >
              Hi there! I am currently a final year undergrad student pursuing Computer
               Science and Engineering at the National Institute of Engineering , Mysuru.
               I love solving challenges using modern day technological advancements.I love to code in  
               python and I am sufficiently good with C++. I am an avid reader of digital texts on platform like 
               quora. I prefer to be a life-long learner , well you know learning never ends! My interest lies in 
               E-governance , making technolgy and related resources easily accesible and problem-solving in general.
               I am pretty curios in how the machine like Computer learns and implements like we humans do !!!


            </p>
          </section>
          
          
              <hr />
          
              <h2>Education:</h2>
              <hr />
             <section>
               <p>
                 The National Institute of Engineering
               </p>
               <p>Aggregate CGPA : 8.7(untill 6th sem)</p>
             </section>

             <section>
               Course Work Includes:
               <ul>
                 <li>Data Structures</li>
                 <li>Algorithm</li>
                 <li>Operating Systems</li>
                 <li>Computer Networks</li>
                 <li>DBMS</li>
                 <li>Programming Languages</li>
               </ul>
            
          </section>
          <section>
          
              <hr />
              <h2>Skills:</h2>
              <hr />
              <h4>Programming Languages:</h4>
              <ul>
                <li>Python</li>
                <li>C++</li>
                <li>C</li>
                <li>Java</li>
                <li>JavaScript</li>
              </ul>
              <h4>Framework and Tools:</h4>
              <ul>
                <li>Angular</li>
                <li>Django</li>
                <li>Bootstrap</li>
                <li>Git/Github</li>
                <li>Linux</li>
              </ul>
          
          </section>
      
      
      
      <footer>
        
        <div>
        <ul class="list-group list-group-horizontal">
  <li class="list-group-item border-0">
  <a href="https://www.linkedin.com/in/deekshithanand/" ><FontAwesome name = "linkedin" size ="3x" style ={{color:"#0072b1"}} /></a>

  </li>
  <li class="list-group-item border-0">
  <a href="https://github.com/deekshithanand"><FontAwesome name="github" size="3x" style={{color:"grey"}}/></a>

     </li>
  <li class="list-group-item border-0">
  <a href="https://www.instagram.com/cu_ri_os_ity/?hl=en"><FontAwesome name="instagram" size="3x" style={{color:"#E1306C"}}/></a>

  </li>
</ul>

        </div>
      
      </footer>
      
      
    </div>

   </div>
  );
}

export default App;


