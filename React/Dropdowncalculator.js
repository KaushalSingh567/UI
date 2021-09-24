        import React,{useState} from "react";

        function Dropdowncalculator()

        {
            const[value1, setvalue1]=useState(" ");
            const[value2, setvalue2]=useState(" ");
            const[status, setstatus]=useState(" ");
                        
            return (
                <center>
            <div>
                    <table>
                        <tr>
                            <td>Enter First number</td>
                            <td>
                                <input type="text" value={value1} placeholder="Enter first Number" 
                                    onChange={(e)=>{setvalue1(e.target.value)}} /> 
                            </td> 
                        </tr>

                        <tr> 
                            <td>Enter Second number</td>
                            <td>
                                <input type="text" value={value2} placeholder="Enter Secod Number" 
                                    onChange={(e)=>{setvalue2(e.target.value)}} />
                            </td>
                        </tr>
                    </table>    
                                <select onChange={(e)=>{setstatus(e.target.value)}}>
                                <option value="add">Addition</option>
                                <option value="sub">Subtraction</option>
                                <option value="mul">Multiplication</option>
                                <option value="div">Division</option>
                                </select><br/>
                
                        <p>Result</p>
            
                <div class="ab">
                    
                    {
                    status==='add'?(parseInt(value1)+parseInt(value2)):status==='sub'?(value1-value2):
                    status==='mul'?(value1*value2):(value1/value2)
                    }
                
                 </div>
            </div>
            
            </center>
            
            )
        }

export default Dropdowncalculator;






