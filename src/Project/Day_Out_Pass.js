import React,{useState} from "react";
import './Day_Out_Pass.css'
//import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
const Day_Out_Pass=()=>{
    const [send,setSend]=useState({
        StudentRollno:"",
        StudentId:"",
        StudentName:"",
        Year:"",
        Branch:"",
        RoomNo:"",
        OutDate:"",
        OutTime:"",
        Destination:"",
        TakenBy:"",
        Transport_type:"",
        Reason:""
    })
    // const {StudentRollno,StudentId, StudentName,Year,Branch, RoomNo,OutDate,OutTime, Destination,TakenBy,Transport_type,Reason}=data;
    // const changeHandler=e=>{
    //     setData({...data,[e.target.name]:[e.target.value]})
    // }
    // const submitHandler=e=>{
    //     e.preventDefault();
    //     if(username.length<=5){
    //         alert("username should be at least 5 characters");
    //     }

    //     console.log(data);
    // }

    const changeHandler = (e)=>{
        setSend((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }



    const postSubmitdata = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:5005/postdata3',{send})
        console.log(send)
        alert('Success')
     }
    // const postSubmitdata=(e)=>{
    //     e.preventDefault()
    //     axios.post('http://localhost:5002/postdata3',{send})
    //     .then((res)=>{
    //        setSend(res.data)
    //          console.log(res.data)
    //          alert('success')
    //      })
    // }
    return(
        <>
        <div className='col-md-9' style={{"float":"right",backgroundColor:"lightblue",marginTop:"-1%",heigth:"89vh",paddingBottom:"4%",borderRadius:"2%"}}>
        <div className="header">
            {/* <h2 style={{"marginTop":"-2%","marginBottom":"2%"}}><center>Day out pass</center></h2> */}
            <center><div className="container" style={{"margin":"2% 0 0 0%",width:"95%",height:"98%",backgroundColor:"lightblue"}}>
            <div >
            <div style={{marginTop:"1%", marginBottom:"1%", padding:"0 0 0 0 "}}><h3>Day Out Pass</h3></div><hr></hr>
            <form onSubmit={postSubmitdata}> 
                    <label>Student Rollno:</label>
                    <input type="text" name="StudentRollno" placeholder="Student Rollno"  onChange={changeHandler}/>
                    <br/><br/>
                    <label>StudentId:</label>
                    <input type="text" name="StudentId"  placeholder="StudentId"   onChange={changeHandler}/>
                    <br/><br/>
                    <label>StudentName:</label>
                    <input type="text" name="StudentName"  placeholder="StudentName"   onChange={changeHandler}/>
                    <br/><br/>
                    <label>Year_Branch:</label>
                    <input type="text" name="Year" placeholder="Year"  onChange={changeHandler}/>
                    <input type="text" name="Branch" placeholder="Branch"  onChange={changeHandler}/>
                    <br/><br/>
                    <label>RoomNo:</label>
                    <input type="text" name="RoomNo"  placeholder="RoomNo"  onChange={changeHandler}/>
                    <br/><br/>
                    <label>OutDate_Time:</label>
                    <input type="date" name="OutDate"  placeholder="OutDate"  onChange={changeHandler} />
                    <input type="time" name="OutTime"  placeholder="OutTime"  onChange={changeHandler} />
                    <br/><br/>
                    <label>Destination:</label>
                    <input type="text" name="Destination" placeholder="Destination"   onChange={changeHandler}/>
                    <br/><br/>
                    <label>TakenBy:</label>
                    <input type="text" name="TakenBy" placeholder="TakenBy" onChange={changeHandler}/>
                    <br/><br/>
                    <label>Transport_type:</label>
                    <input type="text" name="Transport_type" placeholder="Transport_type"  onChange={changeHandler}/>
                    <br/><br/>
                    <label>Reason:</label>
                    <input type="text" name="Reason" placeholder="Reason"  onChange={changeHandler}/>
                    <br/>
                    <input className="sub" style={{backgroundColor:"rgb(44,148,174)",marginTop:"3%",fontSize:"50%",marginBottom:"1%"}}  onClick={postSubmitdata} type="submit" name="submit"/>
                    </form>
                    </div>
                    </div></center>
           </div>
        </div>
           </>
    )
}
export default Day_Out_Pass;