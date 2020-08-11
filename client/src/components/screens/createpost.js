import React from 'react';
const Createpost = () => {
    return (
        <div className="card input-field">
            <input
                type="text"
                placeholder="Enter the Title"
            />
            <input
                type="text"
                placeholder="Enter the Body"
            />
            <div className="file-field input-field">
                <div className="btn">
                    <span>Upload Image</span>
                    <input type="file" />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>

            <button className="btn waves-effect waves-light" type="submit" name="action">
                    Submit Post            
                </button>
        </div>
    );
}
export default Createpost;