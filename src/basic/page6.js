
function MyCity(){
    let allcity = ['Delhi','Kolkata','Chennai','Mumbai', 'Patna', 'Bangalore','Kanpur','Gangtok'];

    return(
        <div className="container">
            <h1> Manage City : {allcity.length} </h1>
            
           {
            allcity.map((fullname, index)=>{
                return(
                    <p key={ index } className="four"> { fullname } </p>
                )
            })
           }
        </div>
    )
}

export default MyCity;

// <p> {allcity[0]} </p>