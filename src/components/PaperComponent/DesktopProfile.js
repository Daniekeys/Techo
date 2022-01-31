import React,{useState,useContext} from 'react'
import useStyles from './profilestyle'
import {Grid, Typography, Avatar,  Button,Paper } from '@material-ui/core'

import locationIcon from '../../assets/locationIcon.png'
import officeIcon from '../../assets/officeIcon.png'
import studentIcon from '../../assets/studentIcon.png'
import GlobalContext from '../../context/app-context';


import ProfilleImgModal from '../../components/Modal/ProfileImgModal'




const DesktopProfile = () => {
    const {aboutData} = useContext(GlobalContext)
const data = false;

const [open, setOpen] = useState(false);

const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    };


    const classes = useStyles();
    return (
        <Paper className={classes.root} elevation={0} >
   
            <Grid container className={classes.profileSection}>
            <Grid item className={classes.profileLeft} sm={3}>

            {/* <Avatar src={personImage} className={classes.profileAvatar} onClick={handleOpen} /> */}
            <ProfilleImgModal open={open} handleClose={handleClose} setOpen={setOpen}/>
            </Grid>
            <Grid item className={classes.profileRight} sm={9} >
                <div className={classes.profileDetails}>
                    <Typography variant="h3" className={classes.profileName} > 
                    {/* {personName} */}personName
                    </Typography>
                    <Typography variant="body2" className={classes.profileStory} > 
                    {aboutData ? `${aboutData}` : "Kindly update Your profile in the about session" } 

                    </Typography>

                    <Typography variant="body1" className={classes.profileRole} > 
                    {/* {data ? "Name" : `${personEmail}`} */}
                    Name
                    </Typography> 
            
                    <div className={classes.followContainer}>
                        <div className={classes.follow}>
                            <p className={classes.followValue}>
                                {data? 'number': '5,130'}
                            </p>
                            <p>
                            Followers
                            </p>
                        </div>
                        <div className={classes.follow}>
                            <p className={classes.followValue}>
                                {data? 'number': '1,100'}
                            </p>
                            <p>
                            Following
                            </p>

                        </div>
                    </div>    
            
                    
                </div>
                
            <Grid container className={classes.trackInfo}>
            <Grid item xm={12} className={classes.dFlexContainer}>
                <div className={classes.dFlex}>
                    <img src={locationIcon} alt="techsemester"  className={classes.profileIcon}  />
                    <Typography variant="body1" className={classes.profileStory}>
                        {data ? "location" : "Lagos, Nigeria"}
                    </Typography>
                </div>
                <div className={classes.dFlex}>
                    <img src={officeIcon} alt="techsemester"  className={classes.profileIcon}  />
                    <Typography variant="body1" className={classes.profileStory}>
                        {data ? "location" : "Techsemester"}
                    </Typography>
                </div>
                <div className={classes.dFlex}>
                    <img src={studentIcon} alt="techsemester"  className={classes.profileIcon}  />
                    <Typography variant="body1" className={classes.profileStory}>
                        {data ? "location" : "Contact"}
                    </Typography>
                </div>
            </Grid>
            <Grid item xm={12} className={classes.dFlexContainer}>
                <div className={classes.dFlex}>
                <Button className={classes.actionBtns}>
                Follow
                </Button>
                </div>
                <div className={classes.dFlex}>
                <Button className={classes.actionBtn}>
                Message
                </Button>
                </div>
         
            </Grid>
           
            </Grid>
            </Grid>
          
            </Grid>
        </Paper>
    )
}

export default DesktopProfile



















































































































