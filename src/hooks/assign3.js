
import {useState} from "react";

const Myhook3 = () =>{
    let [citylist, updateCity] = useState( [] );
    let [cityname, pickCity] = useState("");
    

    const save = () =>{
        updateCity(citylist = [...citylist, cityname ]);                
        pickCity("");      

    }
       
    return(
        <div className="container" align="center" id="box">
            
           
            <p>  Name : <input type="text" onChange={abc=>pickCity(abc.target.value)} value={cityname} /> 
            <button onClick={save} id="btn"> Go </button>
            </p>
            
             <br></br>
          
            {
            citylist.map((city, index )=>{
            return(
                  
                   <p key={index} > {city} {city.length}</p>
                  )
                })
            }
            
           
            
        </div>
    )
}

export default Myhook3;



// {
   // fruitlist.map((fruit, index)=>{
  //      return(
         //   <p key={index}> {fruit} </p>
   //     )
 //   })
//}