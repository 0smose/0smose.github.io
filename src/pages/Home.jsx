import React from 'react';
import boat from '../img/merry.png';
import ReactDOM from 'react-dom'
import ReactAudioPlayer from 'react-audio-player';

const Landing = () => {

  return(
    <section className='home'>

      <img src={boat} className='avatar'></img>

      <h1 className="title"> Hello, my name is <div className="name">Robin</div></h1>
      
      <div className="presentation">
        Développeur junior créatif dont les limites sont proportionnelles à celles de votre portefeuille ! 
        <br></br><br></br>
        <span style={{marginLeft: '100px'}}>Embauchez-moi !</span>
       
      </div>
      <div className="music-player">
      <ReactAudioPlayer
        src="../sound/one-piece.ogg"
        controls
        alt="one piece 2nd opening"
      />
      
      </div>
    </section>
  )
}

export default Landing;