import React from "react";
class Home extends React.PureComponent
{
    constructor()
    {
        super();
        this.state={
            count:1
        }
    }
    render(){
        console.log("Re-rendaring component")
        return(
            <div>
                <h1>Pure Component Example{this.state.count}</h1>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>Change count</button>
                <button onClick={()=>{this.setState({count:100})}}>Static count</button>
            </div>
        );
    }
}
export default Home;







