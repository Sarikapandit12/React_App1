
import {useState} from "react";

const Myhook2 = () =>{
    let [fruitlist, updateFruit] = useState( [] );
    let[fruitname, pickFruit] = useState("");
    let[fruitprice, pickPrice] = useState("");

    const save = () =>{
        updateFruit(fruitlist = [...fruitlist, fruitname]); 
                           
        pickFruit("");      

    }
       
    return(
        <div className="container" align="center" id="box">
            
           
            <p>  Name : <input type="text" onChange={abc=>pickFruit(abc.target.value)} value={fruitname} /> </p>
            <p>  Price : <input type="text" onChange={abc=>pickPrice(abc.target.value)} value={fruitprice} /> </p>
            <button onClick={save}> Go </button> <br></br>
          
            {
            fruitlist.map((fruit, index)=>{
            return(
                  
                   <p key={index} > {fruit} Price is:{fruitprice} </p>
                  )
                })
            }
            
           
            
        </div>
    )
}

export default Myhook2;



// {
   // fruitlist.map((fruit, index)=>{
  //      return(
         //   <p key={index}> {fruit} </p>
   //     )
 //   })
//}