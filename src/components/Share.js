import React from 'react';
import { Twitter, Facebook, Mail, Whatsapp } from 'react-social-sharing'

function Share(props) {

  if (props.result) {
    return (
      <>
      <h3 className="shareText">Share your result!</h3>
      <Twitter solid small message={`I am a ${props.result}! What are you?`} link="https://sadchocopie.github.io/starwars-quiz"/>
      <Facebook solid small link="https://sadchocopie.github.io/starwars-quiz"/>
      <Mail solid small subject={`I am a ${props.result}! What are you?`} link="http://sharingbuttons.io" style={{background:'red'}}/>
      <Whatsapp solid small message={`I am a ${props.result}! What are you?`} link="http://sharingbuttons.io"/>
      </>
    );
  }
  return null;
}

export default Share;
