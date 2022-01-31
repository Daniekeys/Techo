import { makeStyles } from '@material-ui/core/styles';



export default makeStyles((theme) => ({
  
root:{
    width:'100%',
    height:'auto',
    backgroundColor:'#f5f6ff',

},

container:{
    
    marginTop:'3rem',
    
    padding:'1rem',
    width:'95%',
    margin:'auto',
  [theme.breakpoints.down('sm')]:{
      width:'100%',

  }
},

left:{
width:'100%',
display:'block',
position:'sticky',
// overflowY:'scroll',
height:'100vh',
overflowY:'scroll',
'&::-webkit-scrollbar':{
    width:'0.2rem',
    height:'0.2rem',
    backgroundColor:'#f5f6ff',
},
top:'0',
paddingTop:"1rem",

    placeItems:'center',
    [theme.breakpoints.down('sm')]:{
        display:'none',
    }
},
right:{
width:'100%',
display:'block',
position:'sticky',
// overflowY:'scroll',
height:'100vh',
top:'0',
paddingTop:"1rem",

    placeItems:'center',
    [theme.breakpoints.down('sm')]:{
        display:'none',
    }
},
selectContainer:{
    backgroundColor:'#ffffff',
    padding:'2rem',
    width:'95%',
    marginTop:'3rem',
    

},
center:{
    backgroundColor:'#f5f6ff',
    paddingTop:'3rem',
},
profileSection:{
    marginTop:'3rem',
    
    width:'95%',
    margin:'auto',
    [theme.breakpoints.down('sm')]:{
        width:'100%',
    }
},





      
}));