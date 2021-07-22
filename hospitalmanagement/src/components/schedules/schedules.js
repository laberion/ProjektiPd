import React from 'react';
import axios from 'axios';
import Schedule from '../schedules/schedule';
import 'bootstrap/dist/css/bootstrap.min.css';

class Schedules extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : [],
            doctors : [],
            patients:[],
            patientId : "",
            doctorId: "",
            date: "",
            from:"",
            to:""
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8080/schedules").then((res)=>{
            const data = res.data;
            this.setState({data});
            console.log(this.state.data);
        });

        axios.get("http://localhost:8080/doctors").then((res)=>{
            const doctors = res.data;
            this.setState({doctors});
        });

        axios.get("http://localhost:8080/patients").then((res)=>{
            const patients = res.data;
            this.setState({patients});
        });        
      }

      handleChange = (e) => {
        switch(e.target.name){
            case 'patient' : {
                const patientId = e.target.value;
                this.setState({patientId});
            } break;

            case 'doctor' : {
                const doctorId = e.target.value;
                this.setState({doctorId});
            } break;
            case 'date': {
                const date = e.target.value;
                this.setState({date});
            } break;
            case 'from': {
                const from = e.target.value;
                this.setState({from});
            } break;
            case 'to': {
                const to = e.target.value;
                this.setState({to});
            } break;
            default: break;
        }
    }

    handleClick = () =>{
        const payload = {
            patientId: this.state.patientId,
            doctorId: this.state.doctorId,
            timeInterval : {
                from: `${this.state.date}T${this.state.from}:30.010Z`,
                to:`${this.state.date}T${this.state.to}:30.010Z`
            }
        }

        axios.post("http://localhost:8080/schedules",payload).then((res)=>{
            if(res.status===200) {
                this.setState = {
                    patientId : "",
                    doctorId: "",
                    date: "",
                    from:"",
                    to:""
                };
                window.location.reload();
            } 
        }).catch((res)=>{
            window.alert("Gabim ne te dhena");
        });
    }

    render() {
      return (
          <>
          <div className="row" style={{width:"500px",margin:"5px auto"}}>
            <select name="patient" onChange={this.handleChange} className="form-select" aria-label="Default select example">
                <option defaultValue>Choose patient</option>
                {this.state.patients.map((patient) =>{
                    return <option key={patient.id} value={patient.id}>{patient.name}  {patient.surname} - {patient.id}</option>
                })}
            </select>
          </div>
          <div className="row" style={{width:"500px",margin:"5px auto"}}>
            <select name="doctor" onChange={this.handleChange} className="form-select" aria-label="Default select example">
                <option defaultValue>Choose doctor</option>
                {this.state.doctors.map((doctor) =>{
                    return <option key={doctor.personalId} value={doctor.personalId}>{doctor.name}  {doctor.surname} - {doctor.personalId}</option>
                })}
            </select>
          </div>
          <div className="row" style={{width:"500px",margin:"5px auto"}}>
            <label>Date</label>
            <input type="date" name="date" onChange={this.handleChange}></input>
          </div>
          <div className="row" style={{width:"500px",margin:"5px auto"}}>
            <label>Start Time</label>
            <input type="time" name="from" onChange={this.handleChange} ></input>
          </div>
          <div className="row" style={{width:"500px",margin:"5px auto"}}>
            <label>End Time</label>
            <input type="time" name="to" onChange={this.handleChange}></input>
          </div>
          <div className="row" style={{width:"500px",margin:"5px auto"}}>
            <button className="btn-primary" style={{borderRadius:"5px"}} onClick={this.handleClick}>Add appointment</button>
          </div>
          <div className="row">
              {this.state.data.map((schedule)=>{
                 return  <Schedule schedule={schedule} key={schedule.id}/>
              })}
          </div>
          </>
      );
      }
}
export default Schedules;