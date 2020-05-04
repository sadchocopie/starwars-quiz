import React from 'react';
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
      <img className="card" src={Jedi} alt="You get a Jedi Card!"/>
      </div>
    );
  } else if (props.personality === "Sith Lord") {
    return(
      <div>
      <img className="card" src={Sith} alt="You get a Sith Lord Card!"/>
      </div>
    );
  } else if (props.personality === "Bounty Hunter"){
    return(
      <div>
      <img className="card" src={BountyHunter} alt="You get a BountyHunter Card!"/>
      </div>
    );
  } else if (props.personality === "Hutt Crime Lord") {
    return(
      <div>
      <img className="card" src={Hutt} alt="You get a Hutt Card!" />
      </div>
    );
  } else if (props.personality === "Droid") {
    return(
      <div>
      <img className="card" src={Droid} alt="You get a Droid Card!"/>
      </div>
    );
  }
  return(
    <div>
    <img className="card" src={Smuggler} alt="You get a Spice Smuggler Card!"/>
    </div>
  );

}


export default Card;
