import React  from 'react'
import {makeStyles, Grid} from '@material-ui/core'
import {Person} from '@material-ui/icons'
import Navbar from '../components/Navbar';
import Leftbar from '../components/Leftbar';
import Rightbar from '../components/Rightbar';
import Feed from '../components/Feed'
import Add from '../components/Add'

const useStyles = makeStyles( (theme) => ( {
  button:{
    color:"white",
    backgroundColor: theme.palette.primary.main
  },
  right:{
    [theme.breakpoints.down("sm")] :{
      display:"none",
    },
  },


}) );

function Homepage() {
  const classes = useStyles()
  return (
    <>
    <Navbar />
    <Grid container>
    <Grid item sm={2} xs={2}>
    <Leftbar />
    </Grid>
    <Grid item sm={7} xs={10}>
    <Feed />
    </Grid>
    
    <Grid item sm={3} className={classes.right}>
      <Rightbar />
    </Grid>

    </Grid>
    <Add />
    </>
  )
}

export default Homepage
