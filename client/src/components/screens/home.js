import React from 'react';

function Home(){
  return ( 
      <div className="home">
        <div className="card home-card">
          <h5>Kushal</h5>
          <div className="card-image">          
          </div>
          <div className="card-content">
          <i className="material-icons" style={{color:"red"}}>favorite</i>
          <h5>title</h5>           
            <p>this is body</p>
            <input 
            type="text"
            placeholder="add a comment"
            />
          </div>          
        </div>
        <div className="card home-card">
          <h5>Kushal</h5>
          <div className="card-image">          
          </div>
          <div className="card-content">
          <i className="material-icons" style={{color:"red"}}>favorite</i>
          <h5>title</h5>           
            <p>this is body</p>
            <input 
            type="text"
            placeholder="add a comment"
            />
          </div>          
        </div>
        <div className="card home-card">
          <h5>Kushal</h5>
          <div className="card-image">          
          </div>
          <div className="card-content">
          <i className="material-icons" style={{color:"red"}}>favorite</i>
          <h5>title</h5>           
            <p>this is body</p>
            <input 
            type="text"
            placeholder="add a comment"
            />
          </div>          
        </div>
      </div>
  );
}

export default Home;