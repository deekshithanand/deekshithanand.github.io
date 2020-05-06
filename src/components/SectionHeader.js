import React from 'react'
import { makeStyles ,Typography} from '@material-ui/core'

const useStyles = makeStyles(
    theme => {
        return(
            {
                root :{
                    color:'#222222',
                    height:theme.spacing(5)
                },
                line : {
                    backgroundColor : '#FD7E13',
                    // height :'4px',
                    // width : theme.spacing(4),
                    
                    


                },
                nme : {
                    color:'#222222',
                   marginBottom : theme.spacing(4),
                   marginTop : theme.spacing(5),
                   textDecoration:" underline #FD7E13",

                }
            }
        )
    }    
)

export default function SectionHeader(props) {
    const classes = useStyles()
    return(
        <>
        <Typography variant='h4' className={classes.nme}  align='center' >
            {props.name}
            
        </Typography>
        </>
    )
}