import React from 'react'
import { makeStyles, Paper } from '@material-ui/core'
import { CircularProgressbarWithChildren , buildStyles } from 'react-circular-progressbar'
import { useTheme } from '@material-ui/core/styles';
import 'react-circular-progressbar/dist/styles.css';

//makestyle hook

const useStyles = makeStyles((theme) => (
  {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      // margin: theme.spacing(3),
      // padding : theme.spacing(1),
      width: theme.spacing(24),
      height: theme.spacing(24),
      borderRadius : '100%',
      boxShadow: theme.shadows[24],
     
    },
    //progressBar
   
  }
}));

export default function Skill(props){
  const classes  = useStyles()
  const theme = useTheme()
  return (
   
    <div className={classes.root}>
      <Paper 
      elevation = {20}
      >
        
        <CircularProgressbarWithChildren
        value ={props.percentage}
        strokeWidth={12}
        styles={buildStyles(
          {
            
            strokeLinecap :'Butt',
            pathColor : theme.palette.primary.dark,
          }
        )}
        
        >
          <label>
            {props.skillName}
          </label>
          <label>
            {props.percentage}%
          </label>
        </CircularProgressbarWithChildren>
      </Paper>
    </div>
    
  )
  
}