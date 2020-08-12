import React, { useState } from 'react';
import M from "materialize-css";
import {useHistory} from 'react-router-dom';

const Createpost = () => {
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");

    const postDetails = () =>{
        const data = new FormData();
        data.append("file",image);
        data.append("upload_preset","social-bee");
        data.append("cloud_name","socialbee");
        fetch("https://api.cloudinary.com/v1_1/socialbee/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
            setUrl(data.url);
        })
        .catch(err=>{
            console.log(err);
        })  
        fetch("/createpost",{
            method:"post",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify({
              title,
              body,
              pic:url
            })
          }).then(res=>res.json())
          .then(data=>{
            if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"});
            }
            else{
              M.toast({html: "Created Post Successfully",classes:"#64dd17 light-green accent-4"});
              history.push('/');
            }
          }).catch(err=>{
            console.log(err);
          })      
    }
    return (
        <div className="card input-field">
            <input
                type="text"
                placeholder="Enter the Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter the Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <div className="file-field input-field">
                <div className="btn">
                    <span>Upload Image</span>
                    <input type="file" 
                    onChange={(e) => setImage(e.target.files[0])}
                    />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>

            <button className="btn waves-effect waves-light"
            onClick={()=>postDetails()}                
            >
                Submit Post
                </button>
        </div>
    );
}
export default Createpost;