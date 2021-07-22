import React from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class Doctor extends React.Component {
    componentDidMount() {
        console.log(this.props.doctor.name);
    }

    clickHandler(){
        axios.delete(`http://localhost:8080/doctors/${this.props.doctor.personalId}`).then((res)=>{
            console.log(res.data);
            window.location.reload();
        })
    }

    render() {
      const className = "col-6 card";
      const btn = "btn btn-danger"
      return (
        

        <div className={className} style={{width: "18rem",marginLeft:"17px",marginTop:"10px"}}>
            <p> {this.props.doctor.name}</p>
            <p> {this.props.doctor.surname}</p>
            <p> {this.props.doctor.specialization}</p>
            <button className={btn} onClick={() => this.clickHandler()}>Delete</button>
        </div>
      );
      }
}
export default Doctor;
