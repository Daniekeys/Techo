import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
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
})) 

