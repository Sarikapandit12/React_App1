
const MyEmp = () =>{
       let allemp = [
         {empname:"Amit", position:"UI Developer",  salary:"4LPA", location:"Bangalore"},
         {empname:"Anilesh", position:"Sr. Software Engineer",  salary:"8LPA", location: "Chennai" },
         {empname:"Husain", position:"Java Developer", salary:"6LPA", location:"Mumbai"},
         {empname:"Rajendra",position:"Marketing Manager", salary:"4LPA", location:"Delhi"},
         {empname:"Sooraj",position:"Sr. Recruiter", salary:"6LPA", location:"Chennaiaj"},
         {empname:"Nilay", position:"Web Developer", salary:"2LPA", location:"Delhi"}
       ];


       return(
            <div className="container">
                <h1>Manage Employees : {allemp.length} </h1>
               <table>
                <thead>
                    <tr>
                        <th> Emp Id </th>
                        <th> Emp Name </th>
                        <th> Position </th>
                        <th> Salary </th>
                        <th> Location </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allemp.map((allemp, index)=>{
                            return(
                                <tr key={index}>
                                     <td> {index}  </td>
                                     <td> {allemp.empname}  </td>
                                     <td> {allemp.position}  </td>
                                     <td> {allemp.salary}  </td>
                                     <td> {allemp.location}  </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
               </table>
            </div>
       )
}

export default MyEmp;