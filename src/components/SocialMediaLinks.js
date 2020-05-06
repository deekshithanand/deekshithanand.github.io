import React from 'react'
import { makeStyles, Typography, Button, Paper } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles(
    theme => {
        return (
            {
                root: {
                    display : 'flex',
                    flexGrow : 1,
                    flexWrap : 'wrap',
                    '& > *': {
                        marginTop: theme.spacing(2),
                        width:'100%',
                    }
                }
                ,
                btn: {
                    height: theme.spacing(8),
                    width: 'inherit',
                    
                   



                },
            }
        )
    }
)

const id_mapper = {
    'github' : {
        name : 'GITHUB',
        icon : GitHubIcon
    },
    'linkedin' : {
        name : "LINKEDIN",
        icon : LinkedInIcon
    },
    'insta' : {
        name : 'INSTAGRAM',
        icon : InstagramIcon
    },
    
    'resume' : {
            name : "Resume´",
            icon : GetAppIcon
        }
    
}

function Links(props) {
    const classes = useStyles()

    return (
        <>
            <div className={classes.root}>
                {
                    props.linkArray.map(
                        item => {
                            let id = item.id
                            let url = item.url
                            return(
                                <Paper elevation={5} >
                                   
                    <Button className={classes.btn}
                    href={url}
                    variant={id==='resume' ? 'contained': 'text'}
                    color = 'primary'            

                    >
                    
                        {React.createElement(id_mapper[id].icon)}
                        <Typography variant='button' align='justify' >
                            
                        &nbsp;&nbsp;{id_mapper[id].name}
                       </Typography>

                    </Button>
                </Paper>
                            )
                        }
                    )
               
                
                }
                
                {/* <Paper >
                    <Button className={classes.btn}>
                        <LinkedInIcon />
                        <Typography variant='h6' >
                            &nbsp;&nbsp; LinkedIn
                       </Typography>
                    </Button>
                </Paper>
                <Paper >
                    <Button className={classes.btn}>
                        <LinkedInIcon />
                        <Typography variant='h6' >
                            &nbsp;&nbsp;LinkedIn
                       </Typography>
                    </Button>
                </Paper>
                <Paper >
                    <Button className={classes.btn}>
                        <InstagramIcon />
                        <Typography variant='h6' >
                            &nbsp;&nbsp;Instagram
                       </Typography>
                    </Button>
                </Paper>
                <Paper >
                    <Button className={classes.btn} color = 'primary'>
                        <GetAppIcon />
                        <Typography variant='h6' >
                            &nbsp;&nbsp;Resume´
                       </Typography>
                    </Button>
                </Paper> */}


            </div>
            
        </>
    )
}

export default Links