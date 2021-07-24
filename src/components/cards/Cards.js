import React from 'react';
import styles from "./Cards.module.css"; 
import {Grid} from "@material-ui/core" ;
import cx from "classnames";     
// import CountUP from "react-countup"; 
import Card from "../Card/Card";

const Cards = ({data:{confirmed,recovered,deaths, lastUpdate }}) => {
    if(!confirmed){
        return <h2>Loading...</h2>
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justifyContent="center">
              <Card 
               classnames= {cx (styles.card, styles.infected)}
                title="Infected"
               value={confirmed.value}
               date={new Date(lastUpdate).toDateString()}
               description="Number of active cases of COVID-19"/> 

              <Card 
               classnames= {cx (styles.card, styles.recovered)}
                title="Recovered"
               value= {recovered.value}
               date={new Date(lastUpdate).toDateString()}
               description="Number of recoveries from COVID-19"/>

               <Card 
                classnames= {cx (styles.card, styles.deaths)}
                title="Deaths"
               value= {deaths.value}
               date={new Date(lastUpdate).toDateString()}
               description="Number of deaths by COVID-19"/>
            </Grid>
            
        </div>
    )
}

export default Cards;   
