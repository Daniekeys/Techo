import React,{useContext} from 'react'
import { Paper,Avatar, Typography,Chip } from '@material-ui/core';
import useStyles from './styles';
import appContext from '../../context/app-context';


const AskQuestionPaper = () => {
    const classes = useStyles();
    // const {googleData} = useContext(appContext);
    const data = localStorage.getItem('user');
    const {email,imageUrl,name,} = JSON.parse(data);
    const photoURL = imageUrl;
    return (
        <>
      <Paper elevation={0} className={classes.askPaperContainer}>
      <div className={classes.profileItemContainer}>


<Avatar src={photoURL} alt="profile pick" className={classes.askquestionImg} />
  <Typography variant="h6" >
      {name}
  </Typography>
</div>

<Typography variant="h2" className={classes.askText}>
    Ask your Question!
</Typography>
              
              
              
    </Paper>  
        </>
    )
}

export default AskQuestionPaper
