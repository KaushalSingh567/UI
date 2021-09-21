import React from "react";

class Home1 extends React.Component
{    constructor()    {
        super();
        this.state={
            username:null,userpass:null,status1:null};    };
    login()    {
        if(this.state.username.toString()==="kaushal" && 
        this.state.userpass.toString()==="pass")
        {
            this.setState({status1:"welcome"+this.state.username.toString()});
        }
        else{
            this.setState({status1:"Invalid user"+this.state.username.toString()});
        }    }
render()
{
    return (<div>
        <center>
            <h1>Authentication</h1>
            <input type="text" name="username" placeholder="username" 
            onChange={(e)=>{this.setState({username:e.target.value});}} /><br/><br/>
            <input type="text" name="userpass" placeholder="userpass" 
            onChange={(e)=>{this.setState({userpass:e.target.value});}} /><br/><br/>
            <input type="button" value="Login" name="username" 
            onClick={()=>{this.login();}} /><br/><br/>
           <p><h1>{this.state.status1}</h1></p> 
            </center>
        </div>);
}}
export default Home1;