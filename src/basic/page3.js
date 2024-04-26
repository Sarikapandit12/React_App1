
const MyCustom = () =>{
       let allcustomer=[
        {city:"Bangalore", allcustomer:['Ali', 'Raj','Suman']},
        {city:"Mumbai", allcustomer:['Mohit','Pankaj','Udit']},
        {city:"Chennai", allcustomer:['Santosh', 'Manju', 'Mohit']},
        {city:"Kolkata", allcustomer:['david','Bhusan','Rahul']},
        {city:"Delhi", allcustomer:['Anil','Subash','Lal']}
       ];

    return(
         <div className="container">
             <h1> Manage Customer : {allcustomer.length} </h1>
             {
                allcustomer.map((info, index)=>{
                    return(
                    <fieldset key={index}>
                        <legend> {info.city} : {info.allcustomer.length} </legend>
                        {
                            info.allcustomer.map((fullname, index2)=>{
                                return(
                                    <p key={index2}> {fullname} </p>
                                )
                            })
                        }
                        
                    </fieldset>
                 )
                })
             }
         </div>
    )
}

export default MyCustom;