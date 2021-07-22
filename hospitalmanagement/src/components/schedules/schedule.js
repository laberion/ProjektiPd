import React from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class Schedule extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            doctorName : "",
            patientName : "",
            date: "",
            from: "",
            to: ""
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/doctors/${this.props.schedule.doctorId}`).then((res)=>{
            var name = res.data.name;
            var surname= res.data.surname;
            const doctorName = name + " " + surname;
            this.setState({doctorName});
        })

        axios.get(`http://localhost:8080/patients/${this.props.schedule.patientId}`).then((res)=>{
            const name = res.data.name;
            const surname= res.data.surname;
            const patientName = name + " " + surname;
            this.setState({patientName});
        })

    }

    clickHandler = () =>{
        axios.delete(`http://localhost:8080/schedules/${this.props.schedule.id}`).then((res)=>{
            window.location.reload();
        })
    }

    render() {
      const className = "col-6 card";
      const btn = "btn btn-danger"
      return (
        

        <div className={className} style={{width: "18rem",marginLeft:"17px",marginTop:"10px"}}>
            <p> Doctor : {this.state.doctorName} </p>
            <p> Patient : {this.state.patientName}</p>
            <p> From : {this.props.schedule.timeInterval.from}</p>
            <p> To : {this.props.schedule.timeInterval.to}</p>
            <button className={btn} onClick={this.clickHandler}>Delete</button>
        </div>
      );
      }
}
export default Schedule;
