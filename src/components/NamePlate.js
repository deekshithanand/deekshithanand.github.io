import React from 'react'
import { makeStyles ,Typography} from '@material-ui/core'


//JSS styling
const useStyles = makeStyles(theme => {
    return (
        {
            root: {
                
                marginTop : theme.spacing(10),
                marginBottom : theme.spacing(6),
                textAlign :'center',
                color : '#383838',
                
            },
            cptn :{
                fontWeight:'100',
                fontSize :'23px',
            }

        }
    )
})


//methos component
export default function NamePlate(props) {
    const classes = useStyles()
    let subs = props.name.subs
    let sub1 = subs.slice(1) //contains only first element
    return (
        <div className={classes.root}>
           <Typography variant='h3' >
               {props.name.title}
           </Typography>
           <br/>
           <Typography variant='button' className={classes.cptn} >
                {subs[0]}
                {
                    sub1.map(
                        item => {
                            return(
                                "  |  " +item
                            )
                        }
                    )
                }
           </Typography>
        </div>
    )
}