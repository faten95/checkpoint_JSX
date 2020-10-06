import React from 'react';
import './App.css';
import imageInSrc from './imageInSrc.png' ;

function App() {
  return (
    <div className="App">
      <div  style={{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 className="titlered">FATEN CHMENGUI</h1>

<br ></br>
<div className="displayimg">
<img className="img" src={imageInSrc} alt ="user" />


<img  className="img" src="imageInPublic.png" alt ="user2" />
</div>
<br ></br>
<video width="320" height="240" controls style={{marginBottom:"40px" , marginLeft:"500px"}} >

<source src="myVideo.mp4" type="video/mp4" />

</video>
    </div>
    </div>
  );
}

export default App;
