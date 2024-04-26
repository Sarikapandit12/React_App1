import {useState} from "react";

const Myhook4 = () =>{
    let [inputValue, setInputValue] = useState("");
    let [userList, setUserList] = useState( [] );
    let [bookList, setBookList] = useState( [] );
    let [compList, setCompList] = useState( [] );
    let [empList, setEmpList] = useState( [] );
    
   
    const saveUser = () =>{
        setUserList(userList = [...userList, inputValue ]);  
        setInputValue(""); 
    }

    const saveBook = () =>{
        setBookList(bookList = [...bookList, inputValue ]);  
        setInputValue(""); 
    }

    const saveComp = () =>{
        setCompList(compList = [...compList, inputValue ]);  
        setInputValue(""); 
    }

    const saveEmp = () =>{
        setEmpList(empList = [...empList, inputValue ]);  
        setInputValue(""); 
    }


    return(
        <div className="container"> 
            <p align="left">
                <input  type="text" placeholder="Enter New Record"                   
                 onChange={(e)=>setInputValue(e.target.value)} value={inputValue}
                /> 
                
                <button onClick={saveUser} id="btn">Save User </button>
                <button onClick={saveBook} id="btn">Save Book </button>
                <button onClick={saveComp} id="btn">Save Comp </button>
                <button onClick={saveEmp} id="btn">Save Emp </button>
            </p>
            
            <br></br>
        
            <div id="bx1"> 
                <h4 align="center"><u>User List</u> </h4>
                {   
                    userList.map((user, index)=>{
                    return(        
                            <p  id="a1" key={index}> { index+1} . {user} </p>
                        )
                    })         
                }
           </div> 

           <div id="bx1"> 
                <h4 align="center"><u> Book List</u></h4>
                {   
                    bookList.map((book, index)=>{
                    return(        
                            <p id="a1" key={index}> { index+1} .{ book} </p>
                        )
                    })         
                }
           </div>  
           <div id="bx1"> 
                <h4 align="center"><u> Comp List </u></h4>
                {   
                    compList.map((comp, index)=>{
                    return(        
                            <p id="a1" key={index}> { index+1} . {comp} </p>
                        )
                    })         
                }
           </div> 
           <div id="bx1"> 
                <h4 align="center"><u> Emp List </u></h4>
                {   
                    empList.map((emp, index)=>{
                    return(        
                            <p id="a1" key={index}> { index+1} . {emp} </p>
                        )
                    })         
                }
           </div> 

          
           
        </div>
    )
}

export default Myhook4;