import React ,{useState} from 'react';
import axios from 'axios';
const Home_Out_Pass=()=>{
    const [send,setSend] = useState({
        FirstName:"",
        LastName:"",
        RollNo:"",
        mobilenumber:"",
        Email:"",
        Password:""
    })
    const handleChange = (e) => {
        setSend((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }
    const postSubmit = (e) =>{
       e.preventDefault()
       axios.post('http://localhost:5000/postdata',{send})
       console.log(send)
       alert('Success')
    }
    return(
        <div className='col-md-9' style={{"float":"right",backgroundColor:"lightblue",borderRadius:"2%",marginTop:"-1%",height:"87vh"}}>
        
         <div style={{marginTop:"2%"}}><p id="form2"><b><h2><center>Home Out Pass Form</center></h2></b></p></div>
        <div  className="ddd" style={{width:"100vh",overflowX:"scroll"}}>
          <div className="container-fluid" id="form1" >
          {/* <div className="row"> */}
            {/* <div className="col-md-3"></div> */}
            {/* <div className="col-md-6"> */}
            <form>
              <div >
                 <label style={{color:"green"}}for="Name" >Pin Number:</label>
                 <input type="text" className="form-control" name="Pin Number" onChange={handleChange} placeholder="Enter pin number"/>
              </div><br/>
              <div className="form-group">
                 <label style={{color:"green"}}>Hostel block</label>
                 <input type="text" className="form-control" name="Hostel block" onChange={handleChange} placeholder="Enter hostel block"/>
              </div>
              <div style={{color:"green"}}className="form-group">
                 <label >Room number</label>
                 <input type="text" className="form-control"name="Room number" onChange={handleChange} placeholder="Enter room number"/>
              </div>
              <div className="form-group">
                 <label style={{color:"green"}}>Out Pass Period</label>
                 <div>
                    <label ><h5>Out Date</h5></label>
                 <input type="date" className="form-control" name="OutDate"  placeholder="OutDate"  onChange={handleChange} />
                 <label ><h5>In Date</h5></label>
                 <input type="date" className="form-control" name="OutDate"  placeholder="OutDate"  onChange={handleChange} />
                </div>
              </div>
              <div style={{color:"green"}} className="form-group">
                 <label >Mobile Number:</label>
                 <input type="text" className="form-control" name="Mobile Number" onChange={handleChange} placeholder="Enter your mobile number"/>
              </div>
              <div style={{color:"green"}}className="form-group">
                 <label >Reason</label>
                 <input type="text" className="form-control" name="Reason" onChange={handleChange} placeholder="Enter your reason"/>
              </div>
              <br></br>
                   <button style={{marginBottom:"4%"}} type="submit" onClick={postSubmit} className="btn btn-primary">Submit</button>
            </form>        
         </div>
         {/* <div className="col-md-3"></div> */}
         </div></div>
      //   </div>
      //   </div>
    )
}
export default Home_Out_Pass;