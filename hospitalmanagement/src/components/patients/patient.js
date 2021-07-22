import React from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class Patient extends React.Component {
    componentDidMount() {
        console.log(this.props.patient.name);
    }

    clickHandler(){
        axios.delete(`http://localhost:8080/patients/${this.props.patient.id}`).then((res)=>{
            console.log(res.data);
            window.location.reload()
        })
    }

    render() {
      const className = "col-6 card";
      const btn = "btn btn-danger"
      return (
        

        <div className={className} style={{width: "18rem",marginLeft:"17px",marginTop:"10px"}}>
            <p> {this.props.patient.name}</p>
            <p> {this.props.patient.surname}</p>
            <p> {this.props.patient.diagnose}</p>
            <button className={btn} onClick={() => this.clickHandler()}>Delete</button>
        </div>
      );
      }
}
export default Patient;