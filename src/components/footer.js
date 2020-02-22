import React from 'react'
import FontAwesome  from 'react-fontawesome'


function Footer(){
    return(
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
      
    )
}

export default Footer