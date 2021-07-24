import React from 'react';
import {Grid, Card as CustomCard, CardContent, Typography} from "@material-ui/core" ;    
import CountUP from "react-countup";

const Card = ({ classnames,title,value, date, description }) => {  //props line
    return (
        <Grid 
        item  
        component={CustomCard}
        xs={12}
        md={3} 
        className={classnames}
        >
  <CardContent>
    <Typography color="textSecondary">{title}</Typography>
    <Typography variant="h5">
       <CountUP start={0} end={value} duration={3} separator="," />  {/* self-closing tag  */}
    </Typography>
    <Typography  color="textSecondary">
        {date}
    </Typography>
    <Typography variant="body2">
        {description}
    </Typography>
  </CardContent>
    </Grid>
    );
};

export default Card;
