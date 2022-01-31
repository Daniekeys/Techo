import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import {Typography, Avatar} from '@material-ui/core'; 
import { Cancel } from '@material-ui/icons';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate'; 
import DeleteIcon from '@material-ui/icons/Delete';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {

    top: '50%',
    left: '50%',
    // transform: `translate(-${top}%, -${left}%)`,
    transform: 'translate(-50%, -50%)',
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 600,
    // backgroundColor: theme.palette.background.paper,
    backgroundColor:'#f5f6ff',
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modalTop: {
    display:'flex',
    alignItems:'center',
    width:'100% ',
    justifyContent:'space-between',
  },
  modalIcon:{
    color:'#474747', 
    fontSize:'2rem',
  },
  imgContainer:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginTop:'2rem',
    marginBottom:'2rem',

    },
    Avatar:{
        width:'10rem',
        height:'10rem',
        margin:'0 auto',
        border:'1px solid #000',
    },
    imgBtn:{
        position:'relative',

    },
    imgUpload:{
      position:'absolute',
      top:'0',
      bottom:'0',
      right:'0',
      left:'0',
      opacity:'0',


    },
    imgUploadIcon:{
        color:'#474747',
      fontSize:'2rem',
    },

}));

export default function SimpleModal({handleOpen, handleClose,open,setOpen}) {
  const classes = useStyles();
//   const dataItem = localStorage.getItem('user');
// const {imageUrl,name,} = JSON.parse(dataItem);
// const [prevImg, setPrevImg] = useState(imageUrl);


  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

 const handleImgUpload = (e) => {
    e.preventDefault();
  const files = e.target.files;
  Array.from(files).map((file) => { 
    // URL.createObjectURL(file);
    // setPrevImg(URL.createObjectURL(file));
  })
  const data = new FormData();
  data.append('image', files[0]);
  // axios.post('/api/users/upload', data)
  // localStorage.setItem('user', JSON.stringify({
  //   imageUrl: prevImg,  

  // }));


 }

 const handleImageSave = () => {
  // localStorage.setItem('user', JSON.stringify({
  //   imageUrl: prevImg,

  // }));
  setOpen(false);

  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
        <div className={classes.modalTop}>
        <Typography variant="h5">
            Profile Photo 
        </Typography>
        <Button onClick={handleClose}>
            <Cancel className={classes.modalIcon} /> 
        </Button>
        </div>
        <div className={classes.imgContainer}>

        {/* <Avatar alt={name} src={prevImg} className={classes.Avatar} /> */}
        </div>
        <div className={classes.modalTop}>
      
        <Button className={classes.imgBtn} >
          <input type="file" id="file" name="file" accept="image/*" className={classes.imgUpload} onChange={handleImgUpload} />
            < AddPhotoAlternateIcon className={classes.imgUploadIcon} /> 
        </Button>
        <Button onClick={handleImageSave} variant="contained" color="primary">
        save
        </Button>


        <Button >
            < DeleteIcon className={classes.modalIcon} /> 
        </Button>
    
        </div>
      
    </div>
  );

  return (
    <div>
      <Button type="button"  onClick={handleOpen}>
        
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

