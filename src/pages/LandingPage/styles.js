import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
 
  
  
container:{
    display:'block',
    width:'100%',
    height:'auto',
    margin:'auto',

    backgroundColor:'white',
    padding:'2rem 3rem',
    maxWidth:'1200px',
    [theme.breakpoints.down('sm')]:{
        padding:'1rem',
        minWidth:'100%',
        

    }

},
LandingNav:{
    width:'100%',
    height:'auto',
    maxWidth:'1200px',
    display:'flex',



},
logo:{
    width:'40px',
    height:'auto',
    // [theme.breakpoints.down('sm')]:{
    //     width:'100%',
    //     height:'auto',
    // }
},
btnContainer:{
display:'flex',
justifyContent:'flex-end',

},

loginBtn:{
    marginRight:'1rem',
    [theme.breakpoints.down('sm')]:{
        marginRight:'0.5rem',
    }
},
registerBtn:{
    background: '#100E86',
borderRadius: '50px',
color:'#ffffff',
padding:'0.25rem 2rem',
[theme.breakpoints.down('sm')]:{
    padding:'0.5rem 4rem',
}


},
intro:{
    color:'#100E86',
    
    padding:'2rem',
    fontWeight:'600',
    [theme.breakpoints.down('sm')]:{
        padding:'0.25rem',
    },
},
img:{
    width:'100%',
    height:'auto'
},
introContainer:{
    
    padding:'2rem',
  
},









}));