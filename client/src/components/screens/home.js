import React,{useEffect, useState} from 'react';

function Home(){
  const [data,setData] = useState([]);
  useEffect(()=>{
    fetch('/allpost',{
      headers:{
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      }
    }).then(res=>res.json())
    .then(result=>{
      setData(result.posts)
    })
  },[])
  return ( 
      <div className="home">
        {
          data.map(item=>{
            return(
              <div className="card home-card" key={item._id}>
                <h5>{item.postedby.name}</h5>
                <div>
                  <img className="card-image" src={item.photo}></img>
                </div>
                <div className="card-content" >
                <i className="material-icons" style={{color:"red"}}>favorite</i>
                <h5>{item.title}</h5>           
            <p>{item.body}</p>
                  <input 
                  type="text"
                  placeholder="add a comment"
                  />
                </div>          
              </div>
            )
            })
        }
      </div>
  );
}

export default Home;