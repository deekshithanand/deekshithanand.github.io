import React from 'react'
function Skills(){
  //later to get from an API
  var skillSet = ['React','Git/Github','Django','Node','RestAssured','Selenium','Protractor','Angular','Linux']
  var skillElements = skillSet.map((i,val) =>{
    return(<li>{i}</li>)
  }) 
  
  var langs = ['Java','Python','C++','Javascript']
  var langsElements = langs.map(
    (val,index) => {
      return(
        <li>{val}</li>
      )
    }
  )
  
  return(

        <section>
          
          
              <h2>Skills:</h2>
              <hr />
              <h4>Programming Languages:</h4>
              <ul>
                <li>{langsElements}</li>
              </ul>
              <h4>Framework and Tools:</h4>
              <ul>
                {skillElements}
              </ul>
          
          </section>
    )
}

export default Skills