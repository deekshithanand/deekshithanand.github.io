import React from 'react'
import { makeStyles, Grid ,Typography} from '@material-ui/core'

const useStyles = makeStyles(
    theme => {
        return (
            {
                root : {
                    backgroundColor :'#3B3B3B',
                    color :'white',
                    marginTop: theme.spacing(15),
                    paddingBottom : theme.spacing(5),
                    marginBottom : theme.spacing(4)
                },
                xp :{
                    paddingLeft : theme.spacing(8),
                    paddingTop : theme.spacing(4)
                },
                xpItems : {
                    paddingLeft : theme.spacing(8),
                    paddingTop : theme.spacing(4),

                },
                work :{
                    color :'#ff9800',
                    fontSize :'20px'
                },
                time : {
                    fontSize : '16px'
                },
                details : {
                    fontSize : '18px'
                }
                
            }
        )
    }
)

const Xp = function(props) {
    const classes = useStyles()
    return (
        <>
        <div className= { classes.root}>
            
        <Grid container
        direction="row"
        justify="space-around"
        alignItems="flex-start"
        >
            <Grid item xs={12} md={4}
            
            >
                <Typography variant="h5" color='inherit' className={classes.xp}>
                    Work Experience
                </Typography>
            </Grid>
            <Grid item md={8} xs={12}>
                {
                    props.workArray.map(
                        item => {
                            return(
                                <>
                                <div className={classes.xpItems}>
                                <Typography variant='h5'>
                                    {item.position}
                                </Typography>
                                <Typography variant='button' className={classes.work}>
                                    {item.place}
                                </Typography>
                                <br/>
                                <Typography variant ='caption' className={classes.time}>
                                    {item.time}
                                </Typography>
                                <br/>
                                <br/>
                               
                                <Typography variant='body1' className={classes.details}>
                                    {item.sumarry}
                               
                               {
                                        <ul>
                                        {item.details.map(
                                            lis => {
                                               return( <li>{lis}</li>)
                                            }
                                        )}
                                        </ul>
                                    }

                               </Typography>
                                </div>
                                </>
                            )
                        }
                    )
                }
            </Grid>
        </Grid>
        </div>
        </>
    )
}


export default Xp