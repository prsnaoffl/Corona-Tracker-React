import React, { useState,useEffect } from 'react';
import styles from "./App.module.css";
import Cards from "./components/cards/Cards";
import { fetchData } from './api';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from "./components/Chart/Chart";


const App = () => {

 const [state, setState] = useState({
   data:{},
   country:"",
 });

 useEffect(()=>{
   const mount= async()=>{
    const data= await fetchData();
    setState({ data })
   }
   mount(); 
 },[])
 console.log(state);

 const handleChange = async(country)=>{
      const data= await fetchData(country);
      setState({data,country:country});
 }

  const {data,country}= state;

  return (
    <div className={styles.container}>
     <img src="https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2-833x321.jpg" 
     className={styles.image}
     alt="img"
     />

     <Cards data={data} />
     <CountryPicker handleChange={handleChange} />
     <Chart data={data} country={country} />

    </div>
  )
}

export default App
