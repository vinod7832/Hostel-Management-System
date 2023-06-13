import "bootstrap/dist/css/bootstrap.min.css";
import {useEffect, useState} from 'react';
import { Button,Modal,Input } from 'react-bootstrap';
import axios from "axios";
function Day_Out_Pass_List(){
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     console.log("testing...")
    //     // fetch("http://localhost:9999/getData").then((res){
    //     //     console.log(res.data)
    //     // })
    //     let url = 'http://localhost:5000/getData';
    //     // fetch(url, {
    //     //     method: "GET" // default, so we can ignore
    //     //   }).then((response)=>{
    //     //     console.log(response)
    //     //     // setData(res.data)
    //     //   })

    //       axios.get(url).then((response)=>{
    //         console.log(response)
    //         setData(response)
    //       })
    // });
    const [houses,sethouses]=useState([])
    useEffect(()=>{
      axios.get('http://localhost:5000/getData')
      .then((res)=>sethouses(res.data))
    })
  return (
        <div className='col-md-9' style={{"float":"right",backgroundColor:"lightblue",borderRadius:"2%",marginTop:"-1%",height:"87vh"}}><br/>
       <div className="container-fluid " style={{border:"solid black 1px",marginTop:"3%"}}>
        <h3 className="" style={{color:"black",marginBottom:"",marginRight:"0.1%",paddingTop:"1%"}}><center>Day Out Pass List</center></h3><hr/>
          <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
          <div className="row " style={{marginTop:"-20px",marginBottom:"-10px"}}>
           <div className="col-sm-3 mt-5 mb-4 text-gred" st>
               {/* <button  variant="success"  style={{marginRight:"3%"}}>Copy</button> */}
               {/* <button  variant="success"  style={{marginRight:"3%"}}>CSV</button> */}
               {/* <button  variant="success"  style={{marginRight:"3%"}}>Excel</button> */}
               {/* <button  variant="success"  style={{marginRight:"3%"}}>Print</button> */}
            </div>  
              <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"green"}}><h3><b>Student Details</b></h3></div>
            <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
              {/* <Button variant="primary"  style={{float:"right"}}>Add New Student</Button> */}
            </div>
           </div>  
            <div className="row">
                <div className="table-responsive " >
                 <table className="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>StudentRollno:</th>
                            <th>StudentId:</th>
                            <th>StudentName:</th>
                            <th>Year:</th>
                            <th>Branch:</th>
                            <th>RoomNo:</th>
                            <th>OutDate:</th>
                            <th>OutTime:</th>
                            <th>Destination:</th>
                            <th>TakenBy:</th>
                            <th>Transport_type:</th>
                            <th>Reason:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
              houses.map((val,key) => {
                return(
                   <tr key={key}>
                        <td>{val.StudentRollno}</td>
                                  <td>{val.StudentId}</td>
                                  <td>{val.sname}</td>
                                  <td>{val.Year}</td>
                                  <td>{val.Branch}</td>
                                  <td>{val.RoomNo}</td>
                                  <td>{val.OutDate}</td>
                                  <td>{val.OutTime}</td>
                                  <td>{val.Destination}</td>
                                  <td>{val.TakenBy}</td>
                                  <td>{val.Transport_type}</td>
                                  <td>{val.Reason}</td>
                   </tr>
                )
              })
             }
                    </tbody>
                </table>
            </div>   
        </div>
      </div>    
      </div>  
    </div>
  );
}
export default Day_Out_Pass_List;