
import {useState} from "react";


const Myhook1 = () =>{
    let [citylist, updateCity] = useState([]);
    let [cityname, pickCity] = useState(); 
   
    
    const save = () =>{
        updateCity(citylist = [...citylist, cityname]);  //push new element in array            
        //pickCity("");      //Empty will get assign to "cityname"
        //updatelength(citylist = [...citylist, citylength ]);
        //<input type="text" onChange={abc=>pickCity(abc.target.value)} value={cityname} /> 
    }
    return(
        <div className="container" align="center" id="box">
            <br/>
            <input type="text"  onChange={abc=>pickCity(abc.target.value)} value={ cityname} /> 
            <button onClick={save} id="btn" > Save </button> 
            <br/> <br/>
        
            {
                citylist.map((city, index)=>{
                    return(
                        <p id="getline" >  {index} <br/> { city } <br/> {city.length}   </p>
                    ) 
                })
                
            }
            
           
        </div>
        
    )
}

export default Myhook1;