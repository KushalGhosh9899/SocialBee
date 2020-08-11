import React from 'react';

function Profile(){
  return ( 
    
    <div>
      <div className="cover-container">
        <div className="cover-pic">        
          <div className="profile-pic"></div>
        </div>
      </div>
      <h4>Kushal Ghosh</h4>
      <div className="profile-info">
        <h6>100 Posts</h6>
        <h6>2021 Followers</h6>
        <h6>0 Following</h6>
      </div>
      <div className="gallery">
        <div className="post"></div>
        <div className="post"></div>
        <div className="post"></div>
        <div className="post"></div>
        <div className="post"></div>
        <div className="post"></div>
        <div className="post"></div>
        <div className="post"></div>
        
      </div>
    </div>
  );
}

export default Profile;