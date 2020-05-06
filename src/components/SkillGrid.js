import React from 'react'
import Grid from '@material-ui/core/Grid'
import Skill from './Skill'
import { makeStyles} from '@material-ui/core'
import SectionHeader from './SectionHeader'


const useStyles = makeStyles(theme => ({
  root:{
    paddingLeft :theme.spacing(20),
    paddingRight : theme.spacing(20),
    paddingTop : theme.spacing(5),
   
   
  }

}))

//recieve skillArray with skill name and percentage props
export default function SkillGrid(props){

  const classes = useStyles()
  let skills =  props.skillArray.map(item => {
        return (
          <>
          
            <Grid
            item 
            lg={3}
            id = "holymoly"
            >
                <Skill
                skillName={item.skill}
                percentage={item.percentage}
                />
            </Grid>
            </>
        )
    })

    //final jsx to be rendered


    return(
      <>
     <SectionHeader name='SKILLS' />
      <div className = {classes.root}>

        <Grid
    container
    justify="center"
  alignItems="flex-start"
  spacing = {5}
  >
    {skills}

  </Grid> 
  </div>
  </>
    )
    

}