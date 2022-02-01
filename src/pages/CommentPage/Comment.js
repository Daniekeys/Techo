import React,{useEffect, useState} from 'react'
import { Grid } from '@material-ui/core'

import useStyles from './styles'
import MediaNavbar from '../../components/Navbar/MediaNavbar'
import ProfileSummary from '../../components/PaperComponent/ProfileSummary'
import TagsPaper from '../../components/PaperComponent/TagsPaper' 
import SinglePostCard from '../../components/PostInfo/SinglePostCard'
import CheckboxSelect from '../../components/SelectComponent/CheckboxSelect'
import CategoryCheckbox from '../../components/SelectComponent/CategoryCheckbox'
import Demodata from '../../services/Demodata'
import {useParams, useLocation, useHistory} from 'react-router-dom' ;
 

const CommentPage = () => {
    
    
    const [dataId, setDataId] = useState(0);

    const {id} = useParams();
    const location = useLocation();
    const history = useHistory();

    
    



    useEffect(() => {
        window.scroll(0,0)
}, [])
const classes = useStyles();

setDataId(id);

const data  = Demodata[dataId];
const {title, description, tags, category, date, author, comments, likes, dislikes, views, postId, image} = data;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   



    return (
        <div className={classes.root}>

      
        <MediaNavbar />
        <Grid  className={classes.container} container>
            
            <Grid item xs={0} md={3} className={classes.left}>
                <div className={classes.profileSection}>
                    <ProfileSummary />
                </div>
                <div className={classes.selectContainer}>
                <CheckboxSelect />
                <hr />
                <CategoryCheckbox />
                </div>
       
        </Grid>
        <Grid item xs={12} md={6} className={classes.center} >
            <SinglePostCard data={data} />
          

        
           
        </Grid>
        <Grid item xs={0} md={3} className={classes.right} >
            {/* {home ? <Home /> : <Media />} */}
           <TagsPaper />
        </Grid>
      

        </Grid>


        </div>
    )
}

export default CommentPage
