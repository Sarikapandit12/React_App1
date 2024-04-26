import { useState } from "react";

const Myhook6 = () =>{
    
    let[dataList, updateTrans] = useState([]);
        let[dataname, pickName] = useState("");
        let[dataemail, pickEmail] = useState("");
        let[datamob, pickMob] = useState("");
        let[dataskill, pickSkill] = useState("");
     

        const save = () =>{
        
            let newtrans = { name:dataname, email:dataemail, mob:datamob, skill:dataskill};
            updateTrans([...dataList, newtrans]);
           
            pickName("");
            pickEmail("");
            pickMob("");
            pickSkill("");
            }


    return(
       <div className="container"> 

       <fieldset> 
         <legend> Enter Your Data</legend>
            <table id="bdrhide">
                    <tr> 
                        <td>
                            Name :
                        </td> 
                        <td> <input type="text" onChange={obj=>pickName(obj.target.value)} value={dataname} className="fixinp"/> 
                        </td>      
                    </tr>
                
                    <tr> 
                        <td>
                            E-mail : 
                        </td>
                        <td> <input type="text" onChange={obj=>pickEmail(obj.target.value)} value={dataemail} className="fixinp"/>
                        </td>
                    </tr>
                    <tr> 
                        <td>
                            Mobile :
                        </td>
                            <td> <input type="text" onChange={obj=>pickMob(obj.target.value)} value={datamob} className="fixinp"/>
                        </td>
                </tr> 
                <tr> 
                        <td>
                            Skills :
                        </td>
                        <td> <input  type="text" onChange={obj=>pickSkill(obj.target.value)} value={dataskill} id="skillinp" className="fixinp"/>
                        </td>
                </tr> 

                <tr>
                   <td colSpan="2" align="center" > <button onClick={save}> Process </button></td>

                </tr>

            </table>
       </fieldset> 
    <div>
      <fieldset>
        <legend> Persional Data</legend>

        Your Name :  <br/>    <br/>                      
        Email Id :  <br/>  <br/>
        Mobile No :  


        
                 {
                    dataList.map((data, index)=>{
                        return(
                            <p key={index}>                          
                            <p className="nm">{data.name} </p> 
                            
                            <p>{data.email} </p>
                            <p>{data.mob} </p>


                            </p>
                           
                           
                        )
                    })
                }
      </fieldset>
 
        <br/>
    <fieldset>
        <legend> My Skill </legend>

        {
                    dataList.map((data, index)=>{
                        return(
                            <p key={index}>                          
                            <p>{data.skill} </p> 
                            </p>
                           
                           
                        )
                    })
                }
    </fieldset>
    </div>
    </div>
    )
  
}

 export default Myhook6;