import { useState } from "react"

export default function CommentForm(){
    let [formDate,setFormData] =useState({
        username:"",
        remarks:"",
        rating:5
    });
    let handleInputChange=(event)=>{
        setFormData((currData)=>{
            return {...currData,[event.target.name]:event.target.value};
        });
       
    };
    let handleSubmit= (event)=>{
        console.log(formDate);
        event.preventDefault();
         setFormData({
            username:"",
        remarks:"",
        rating:5
        });
    }
    return(
        <div>
            <h2>Give a Comment</h2>
            <form onSubmit={handleSubmit} >
                <label htmlFor="username">Username</label>
                <input 
                placeholder="username"
                 type="text"
                 value={formDate.username} 
                 onChange={handleInputChange}
                 id="username"
                 name="username"/>
                <br /><br />
                <label htmlFor="remarks" >Remarks</label>
                <textarea 
                placeholder="add few remarks" 
                 value={formDate.remarks}
                  onChange={handleInputChange}
                  id="remarks"
                  name="remarks"></textarea>
                <br /><br />
                <label htmlFor="rating">Rating</label>
                <input 
                placeholder="rating" 
                type="number" min={1} max={5} 
                value={formDate.rating}
                 onChange={handleInputChange}
                 id="rating"
                 name="rating"/>
                <br /> <br />
                <button>Add Comment</button>
            </form>
        </div>
    )
}