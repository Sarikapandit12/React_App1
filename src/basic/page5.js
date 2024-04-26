
const Details = (info)=>{
     return(
        <fieldset>
            <legend> {info.itemname} </legend>           
            <p> Rate: {info.price} </p>
            <p> Quantity:{info.qty} </p>
            <p> Seller:{info.seller} </p>
            <p> Customer:{info.customer} </p>
        </fieldset>
     )    
}



export default Details; 









