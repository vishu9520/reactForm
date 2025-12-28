import { useState } from "react";

export default function Form(){
   let [formDate,setFormData] = useState({
    fullName: "",
    userName:"",
    password:""
   })
    // let handleNameChange =(event)=>{
    //     setFullName(event.target.value);
    // };
    // let handleUserName =(event)=>{
    //     setUserName(event.target.value);
    // };
    let handleInputChange=(event)=>{ 
        console.log(newValue);
        setFormData((currData)=>{
            return{...currData,[event.target.name]:event.target.value};
        });
    };
let handleSubmit=(event)=>{
    event.preventDefault();
    console.log(formDate);
    setFormData({
        fullName: "",
        userName:""
    });
};
return(
    <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Enter Full Name</label>
        <input  
        placeholder="enter full name" 
        type="text" 
         value={formDate.fullName}
         onChange={handleInputChange} 
         id="fullname"
         name="fullName"/> 
         <br /><br />
         <br /><br />
         <label htmlFor="username">Enter User Name </label>
        <input  
        placeholder="enter full name" 
        type="text" 
         value={formDate.userName}
         onChange={handleInputChange}
         id="username"
         name="userName"/> 
          <br /><br />
         <label htmlFor="password">Enter password</label>
        <input  
        placeholder="enter password" 
        type="password" 
         value={formDate.password}
         onChange={handleInputChange}
         id="password"
         name="password"/> 
        <button>Submit</button>
    </form>
);
}