 
 import { useState } from "react";

 const Myhook5 = () =>{
        let[translist, updateTrans] = useState([{name:'T-01', type:'small', root:'Mumbai', driver:'Alex', mob:987654321}]);
        let[transname, pickName] = useState("");
        let[transtype, pickType] = useState("");
        let[transroot, pickRoot] = useState("");
        let[transdriver, pickDriver] = useState("");
        let[transmob, pickMob] = useState("");

        

    const save = () =>{
        
        let newtrans = {name:transname, type:transtype, root:transroot, driver:transdriver,mob:transmob};
        updateTrans([...translist, newtrans]);
        //updateMsg(itemname + "Added Successfully")
        pickName("");
        pickType("");
        pickRoot("");
        pickDriver("");
        pickMob("");
        }
        

     const deletetrans = (index, name) =>{
        translist.splice(index, 1);
        updateTrans( translist = [...translist] );

        // updateMsg(name + "Deleted Successfully")

        }

     
     return(
        <div className="container">
            

            <table align="left" cellPadding="15" >
            
             <tbody>
                <th>New Transport</th>
                <tr> 
                    <td > Transport Number</td>
                </tr>

                <tr>
                      <td>  <input type="text" onChange={obj=>pickName(obj.target.value)} value={transname}/></td>
                </tr>

                <tr>
                    <td>Root Name </td>
                </tr>

                <tr>
                    <td><input type="text" onChange={obj=>pickRoot(obj.target.value)} value={transroot}/></td>
                </tr>

                <tr>
                    <td>Size</td>
                </tr>

                <tr>
                    <td><input type="text" onChange={obj=>pickType(obj.target.value)} value={transtype}/></td>
                </tr>

                <tr>
                    <td>Driver Name</td>
                </tr>

                <tr>
                    <td><input type="text" onChange={obj=>pickDriver(obj.target.value)} value={transdriver}/></td>                  
                </tr>

                <tr>
                    <td>Driver Mobile No</td>
                </tr>

                <tr>
                    <td><input type="number" onChange={obj=>pickMob(obj.target.value)} value={transmob}/></td>                  
                </tr>

                <tr>
                    <td colSpan="2" align="center">
                        <button onClick={save}> Save </button>
                    </td>
                </tr>
             </tbody>
            </table>

            <table align="right">
                <thead>
                    <tr>
                        <th> T-Id</th>
                        <th> T-Number </th>
                        <th> Root</th>
                        <th> Type</th>
                        <th>Driver</th>
                        <th>Mob No</th>                       
                        <th>Action</th>
                    </tr>               
                </thead>

                <tbody >

                {
                    translist.map((trans, index)=>{
                        return(
                            <tr key={index}>
                            <td className="tbl2"> {index}</td>
                            <td className="tbl2">{trans.name}</td>
                            <td className="tbl2">{trans.root}</td>
                            <td className="tbl2"> {trans.type}</td>
                            <td className="tbl2">{trans.driver}</td>
                            <td className="tbl2">{trans.mob}</td>
                            <td className="tbl2"><button  onClick={deletetrans.bind(this,index,transname)} id="delbtn" >Delete</button></td>                                
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
      )
    }
    export default Myhook5;
