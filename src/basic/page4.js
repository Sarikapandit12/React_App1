import Details from "./page5";


const Allitem = () =>{
    return(
       <div className="container"> 
        <h1>  Manage Item-List  </h1>
        <Details itemname= "Apple" price="300" qty="10kg" seller="Ganesh" customer="Alex"/>
        <Details itemname= "Grapes" price="400" qty="5kg" seller="Ganesh" customer="Mohit"/>      
        <Details itemname= "Banana" price="700" qty="9kg" seller="Ganesh" customer="Raj"/>
        <Details itemname= "Orange" price="800" qty="4kg" seller="Ganesh" customer="Ajit"/>
                 
       </div>
     )
}

export default Allitem;