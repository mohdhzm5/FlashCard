import React from "react";
import "./Card.css";
import Profilephoto from "../assets/Profilephoto.png"; // Tell webpack this JS file uses this image
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));



export default function Card(props) {

  const classes = useStyles();

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title-group">
          <h5 className="card-title">{props.title}</h5>
        </div>
      </div>
      <img className="card-image" width={100} height={100} src={Profilephoto} alt="Logo" />
      <div className="card-text">{props.description}</div>
      <div className="card-text">{props.job_pos}</div>
      <div className="card-text">{props.dept}</div>
      <div className="card-text">{props.batch}</div>
      
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<PersonIcon/>}
      >
        Profile
      </Button>


      <div className="card-like-bar">  
          <LinkedInIcon/> 
          <InstagramIcon/> 
    
      </div>
    </div>
  );
}