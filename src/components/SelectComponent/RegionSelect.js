import React,{useContext,useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import AppContext from '../../context/app-context';



const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const RegionSelect = () => {
    const {country, regionData} =  useContext(AppContext);
        console.log(regionData);
    const [mapData, setMapData] = useState([]);
    useEffect(() => {
        if (regionData !== undefined  ) {
            setMapData([]);
        
        }
    
    }, [regionData])
    
    const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  
    return (
        <>
            <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          inputProps={{
            name: 'Region',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="None" value="None" />
          {  regionData?.map((item) => {
                const {id,name} = item;
                
                return (
                    <option value={name} key={id}>{name}</option>
          
                              )

          } )}

           {/* {country? ( country.map((item) => {
                const {id,flag,code, dail} = item;
                    return (
          <option value={flag} key={id}>{dail}</option>

                    )
            }) ) :(yoga.map((item) => {
                const {id,flag,code, dail} = item;
                return (
                    <option value={flag} key={id}>{dail}</option>
          
                              )

            })) } */}



          {/* <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option> */}
        </Select>
      </FormControl>  
        </>
    )
}

export default RegionSelect