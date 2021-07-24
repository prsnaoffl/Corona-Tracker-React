import React, { useEffect,useState} from 'react';
import { fetchCountries } from '../../api';
import styles from "./CountryPicker.module.css";
import { NativeSelect, FormControl} from '@material-ui/core';

const CountryPicker = ({handleChange}) => {
    const [fetchCountry, setFetchCountry] = useState([]);
    useEffect(()=>{
        const fetchApi= async () =>{
            setFetchCountry(await fetchCountries())
        };
        fetchApi()
     },[]);

    //   console.log(fetchCountry)

    return (
        <div>
            <FormControl className={styles.formControl}>
               <NativeSelect defaultValue=""
               onChange={(event) => handleChange(event.target.value)} //country pick panna value umchange agu
               >
                   <option value="">Global</option>
                    {fetchCountry.map((country,index)=>(
                        <option key={index} value={country}>
                            {country}
                        </option>
                    ))}
               </NativeSelect>
            </FormControl>
        </div>
    );
};

export default CountryPicker;
