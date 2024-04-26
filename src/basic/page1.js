
function MyComp(){
    let allcomp = ['Amazon','Flipkart','Harman','Awnics', 'Cognigent', 'Qualcomm','Nvidia','Intel'];

    return(
        <div className="container">
            <h1> Manage Company : {allcomp.length} </h1>
            
           {
            allcomp.map((fullname, index)=>{
                return(
                    <p key={ index } className="four"> { fullname } </p>
                )
            })
           }
        </div>
    )
}

export default MyComp;

// (line-8)   <p> {allcomp[0]} </p> 