import React, {useState} from "react";
// import './Home.css';
function Home()
{
    const[user, setname]= useState(" ");
    const[password, setpassword]=useState(" ");
    const[status, setstatus]=useState(" ");
    function login()
    {
        if(user.toString()==="admin" && password.toString()==="pass")
        {
            setstatus("Welcome ")
        }
        else{setstatus("Invalid user")}
    }    
    return (
        <div className="style">
            <form style={{borderColor:"black"}}>
    <header className="b">Authentication Screen</header>
    <fieldset>
        <tr><input type="text" name="user" placeholder="User Name"
        onChange={(e)=>{setname(e.target.value)}}/></tr>
        
        <tr><input type="password" name="password" password="password" placeholder="Password"
        onChange={(e)=>{setpassword(e.target.value)}}/></tr>
        <tr><input type="button" value="Sign Up"
        onClick={()=>{(login())}}/></tr>
        <p>{status}</p>
        </fieldset>

        <footer className="a">Company Profile</footer>
        </form>
        </div>
    );
}

export default Home;