import React, {Component} from 'react';
import Jedi from '../api/Jedi.png';
import Sith from '../api/Sith.png';
import BountyHunter from '../api/BountyHunter.png';
import Hutt from '../api/Hutt.png';
import Droid from '../api/Droid.png';
import Smuggler from '../api/Smuggler.png';

function Card(props){

  if (props.personality === "Jedi") {
    return (
      <div>
      <img className="card" src={Jedi}/>
      </div>
    );
  } else if (props.personality === "Sith Lord") {
    return(
      <div>
      <img className="card" src={Sith}/>
      </div>
    );
  } else if (props.personality === "Bounty Hunter"){
    return(
      <div>
      <img className="card" src={BountyHunter}/>
      </div>
    );
  } else if (props.personality === "Hutt Crime Lord") {
    return(
      <div>
      <img className="card" src={Hutt}/>
      </div>
    );
  } else if (props.personality === "Droid") {
    return(
      <div>
      <img className="card" src={Droid}/>
      </div>
    );
  }
  return(
    <div>
    <img className="card" src={Smuggler}/>
    </div>
  );

}


export default Card;
