import React,{useEffect,useState,useContext} from 'react';
import {UserContext} from '../../App';

function Profile(){
  const {state,dispatch} = useContext(UserContext);
  const [mypics,setPics] = useState([])
  useEffect(()=>{
    fetch('/mypost',{
      headers:{
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      }
    }).then(res=>res.json())
    .then(result=>{
      setPics(result.My_Posts);
    })
  },[])
  return ( 
    
    <div>
      <div className="cover-container">
        <div className="cover-pic">        
          <div className="profile-pic"></div>
        </div>
      </div>
      <h4>{state?state.name:"loading"}</h4>
      <div className="profile-info">
        <h6>100 Posts</h6>
        <h6>2021 Followers</h6>
        <h6>0 Following</h6>
      </div>
      <div className="gallery" >
        {
          mypics.map(item=>{
            return(
              <img className="post" src={item.photo} key={item._id}></img> 
            )
          })
        }       
      </div>
    </div>
  );
}

export default Profile;