import { useState, useEffect } from "react";

const Myapi1 = () =>{
    let[allemp, updateEmp] = useState([]);
    let[allproduct, updateProduct] = useState([]);
    

    const getEmp = () =>{
        fetch("http://localhost:1234/emplist")
        .then(response=>response.json())
        .then(empArray=>{
            updateEmp(empArray);
        })
    }

        useEffect(()=>{
            getEmp();
    }, []);

    let[ename,pickName] = useState("");
    let[esalary,pickSalary] = useState("");
    let[elocation,pickLoc] = useState("");
        
    const getProduct = () =>{
        fetch("http://localhost:1234/productlist")      
        .then(response=>response.json())
        .then(productArray=>{
            updateProduct(productArray);
        })
    }
      
        useEffect(()=>{
            getProduct();
    }, []);

          
    let[pname,pickPName] = useState("");
    let[pprice,pickPPrice] = useState("");
    let[pqty,pickPQty] = useState("");

 const save = () =>{
    if( empid !==""){
        updateempdetails();
    }else{
    
        let url = "http://localhost:1234/emplist";      
        let newemp = { "empname":ename,"empsalary":esalary,"emplocation":elocation };
        let postData = {
            headers:{'Content-Type':'application/json'},
            method : "post",
            body:JSON.stringify(newemp)
        }
        fetch(url, postData)
        .then(response=>response.json())
        .then(empinfo=>{
            alert(ename + "save with id :" + empinfo.id);
            getEmp(); //reload the list

             pickName("");
             pickSalary("");
             pickLoc("");
    })
}
 }

const psave = () =>{
    if( productid !==""){
        updateproductdetails();
    }else{
    let url = "http://localhost:1234/productlist";      
    let newproduct = { "productname":pname,"productprice":pprice,"productqty":pqty };
    let postData = {
        headers:{'Content-Type':'application/json'},
        method : "post",
        body:JSON.stringify(newproduct)
    }
    fetch(url, postData)
    .then(response=>response.json())
    .then(productinfo=>{
        alert(pname + "save with id :" + productinfo.id);
        getProduct(); //reload the list

         pickPName("");
         pickPPrice("");
         pickPQty("");
})
} // else end
} // function end

const deleteProduct = (productid) =>{
    let url = "http://localhost:1234/productlist/"+productid;
    let postdata = {method:"delete"};
    fetch(url, postdata)
    .then(response=>response.json())
    .then(emptyres=>{
        getProduct();// to reload the list
    })
}

    let[btntext, updateBtn] = useState("Save");
    let[productid, updateid] = useState("");

const editProduct = (productinfo) =>{
    pickPName( productinfo.productname ); 
    pickPPrice( productinfo.productprice ); 
    pickPQty(  productinfo.productqty );
    updateBtn("Update Product");
    updateid( productinfo.id );
}

const updateproductdetails = () =>{
    let url = "http://localhost:1234/productlist/"+productid;
    let newproduct = {"productname":pname, "productprice":pprice, "productqty":pqty};
    let postData = {
        headers:{'Content-Type':'application/json'},
        method:"put",
        body:JSON.stringify(newproduct)
    }
    fetch(url, postData)
    .then(response=>response.json())
    .then(productinfo=>{
        alert(pname + " Updated...");
        getProduct(); // to reload the list
        pickPName(""); pickPPrice(""); pickPQty("");
        updateBtn("Save Product");
        updateid("");
    })
}

const deleteEmp = (empid) =>{
    let url = "http://localhost:1234/emplist/"+empid;
    let postdata = {method:"delete"};
    fetch(url, postdata)
    .then(response=>response.json())
    .then(emptyres=>{
        getEmp();// to reload the list
    })
}

let[btntext1, updateBtn1] = useState("Save");
let[empid, updateid1] = useState("");

const editEmp = (empinfo) =>{
    pickName( empinfo.empname ); 
    pickSalary( empinfo.empsalary ); 
    pickLoc(  empinfo.emplocation );
    updateBtn1("Update");
    updateid1( empinfo.id );
}

const updateempdetails = () =>{
    let url = "http://localhost:1234/emplist/"+empid;
    let newemp = {"empname":ename, "empsalary":esalary, "emplocation":elocation};
    let postData = {
        headers:{'Content-Type':'application/json'},
        method:"put",
        body:JSON.stringify(newemp)
    }
    fetch(url, postData)
    .then(response=>response.json())
    .then(empinfo=>{
        alert(ename + " Updated...");
        getEmp(); // to reload the list
        pickName(""); pickSalary(""); pickLoc("");
        updateBtn("Save");
        updateid("");
    })
}


    
    return(
        <div className="container" >
           
        <table id="tb1">
           <table align="left" id="cntnr1" >
            <tbody>
                <tr>
                    <th colSpan="2" align="center" >
                     Employee Details
                    </th>
                </tr>
                <tr>
                    <td>Name</td>
                    <td> <input type="text" onChange={obj=>pickName(obj.target.value)} value={ename}/></td>
                </tr>

                <tr>
                    <td>Salary</td>
                    <td> <input type="text" onChange={obj=>pickSalary(obj.target.value)} value={esalary}/></td>
                </tr>

                <tr>
                    <td>Location</td>
                    <td> <input type="text" onChange={obj=>pickLoc(obj.target.value)} value={elocation}/></td>
                </tr>
                
                
                <tr>
                    <td colSpan="2" align="center">
                    <button onClick={save} id="sbtn"> {btntext1} </button>
                    </td>
                </tr>
            </tbody>

           </table>


            <table align="right" >
                <thead>
                    <tr>
                        <th> Id</th>
                        <th> Name</th>
                        <th> Salary</th>
                        <th>Location</th>
                        <th> Edit</th>
                        <th> Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allemp.map((emp, index)=>{
                            return(
                                <tr key={index}>
                                    <td className="tbl2"> {emp.id}</td>
                                    <td className="tbl2"> {emp.empname}</td>
                                    <td className="tbl2"> {emp.empsalary}</td>
                                    <td className="tbl2"> {emp.emplocation}</td>
                                    
                                    <td className="tbl2"> 
                                        <button onClick={editEmp.bind(this, emp)}> Edit </button>
                                    </td>
                                    <td className="tbl2"> 
                                        <button onClick={deleteEmp.bind(this, emp.id)} id="delbtn" > Delete </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </table>
       <br/><br/>


       <table id="tb2">
            <table  align="left" id="cntnr1" >
            <tbody>
                <tr>
                    <th colSpan="2" align="center" >
                     Product Details
                    </th>
                </tr>
                <tr>
                    <td>Product </td>
                    <td> <input type="text" onChange={obj=>pickPName(obj.target.value)} value={pname}/></td>
                </tr>

                <tr>
                    <td>Price</td>
                    <td> <input type="text" onChange={obj=>pickPPrice(obj.target.value)} value={pprice}/></td>
                </tr>

                <tr>
                    <td>Quntity</td>
                    <td> <input type="text" onChange={obj=>pickPQty(obj.target.value)} value={pqty}/></td>
                </tr>
                
                
                <tr>
                    <td colSpan="2" align="center">
                    <button onClick={psave} id="sbtn">{btntext}  </button>
                    </td>
                </tr>
            </tbody>

           </table>


            <table align="right" >
                <thead>
                    <tr>
                        <th> P Id</th>
                        <th> Product</th>
                        <th> Price</th>
                        <th> Qty</th>
                        <th> Edit</th>
                        <th> Delete</th>
                    </tr>
                </thead>
                

                
                <tbody>
                    {
                        allproduct.map((product, index)=>{
                            return(
                                <tr key={index}>
                                    <td className="tbl2"> {product.id}</td>
                                    <td className="tbl2"> {product.productname}</td>
                                    <td className="tbl2"> {product.productprice}</td>
                                    <td className="tbl2"> {product.productqty}</td>
                                    
                                    <td className="tbl2"> 
                                        <button onClick={editProduct.bind(this, product)}> Edit </button>
                                    </td>
                                    <td className="tbl2"> 
                                        <button onClick={deleteProduct.bind(this, product.id)} id="delbtn" > Delete </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
            </table>
            
   
        </div>
       
    )
}

export default Myapi1;
   