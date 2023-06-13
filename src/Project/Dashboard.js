import React from 'react';
import './Dashboard.css';
import {Link} from 'react-router-dom';
const Dashboard =()=>{
return(
    <>
    <div className='head' style={{"borderRadius":"15px","margin-bottom": "1%","padding-bottom": "1%"}}>
        <p style={{"float":"left","width":"15%",marginLeft:"5%"}}>Girls Hostel</p>
        <p className='p2'style={{marginLeft:"50%"}}>welcome to Girls Hostel ePASS System</p>
    </div>
        <div className='col-md-3'>
        <div className='side-bar' style={{"backgroundColor":"rgb(22, 125, 150)", "width":"100%",height:"89vh",marginLeft: "-6.5%",marginTop: "0%","borderRadius":"15px","display": "flow-root","float":"left","padding-top":"0%",marginRight:"0%"}}>
        <ul>
            <li><Link to="/About_Hostel" style={{textDecoration:"inherit",color:"white", className:""}}> About Hostel</Link></li>
            <li><Link to="/Registration_form" style={{textDecoration:"inherit",color:"white"}}>Registration form</Link></li>
            <li><Link to="/Students" style={{textDecoration:"inherit",color:"white"}}>Students</Link></li>
            <li><Link to="/Staff" style={{textDecoration:"inherit",color:"white"}}>Staff</Link></li>
            <li><Link to="/Home_Out_Pass " style={{textDecoration:"inherit",color:"white"}}>Home Out Pass</Link></li>
            <li><Link to="/Home_Out_Pass_List" style={{textDecoration:"inherit",color:"white"}}>Home Out Pass List</Link></li>
            <li><Link to="/Day_Out_Pass" style={{textDecoration:"inherit",color:"white"}}>Day Out Pass</Link></li>
            <li><Link to="/Day_Out_Pass_List" style={{textDecoration:"inherit",color:"white"}}>Day Out Pass List</Link></li>
            <li><Link to="/Pass_reports" style={{textDecoration:"inherit",color:"white"}}>Pass_reports</Link></li>
            <li><Link to="Attendance_reports" style={{textDecoration:"inherit",color:"white"}}>Attendance reports</Link></li>
            <li><Link to="/Food_reports" style={{textDecoration:"inherit",color:"white"}}>Food reports</Link></li>
            <li><Link to="/Complaint" style={{textDecoration:"inherit",color:"white"}}>Complaints</Link></li>
            {/* <li><Link to="/view_profile" style={{textDecoration:"inherit",color:"white"}}>view profile</Link></li> */}
        </ul>
        </div>
    </div>
    </>
);
}
export default Dashboard;