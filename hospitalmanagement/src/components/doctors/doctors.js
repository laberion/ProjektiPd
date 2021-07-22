import React from 'react';
import axios from 'axios';
import Doctor from '../doctors/doctor';
import 'bootstrap/dist/css/bootstrap.min.css';

class Doctors extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : [],
            personalId:"",
            name: "",
            surname: "",
            specialization:"",
            changed : false
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8080/doctors").then((res)=>{
            const data = res.data;
            this.setState({data});
            console.log(this.state.data);
            console.log(this.state.products.length);
        })
      }

    handleClick(){
        const payload = {
            personalId : this.state.personalId,
            name : this.state.name,
            surname : this.state.surname,
            specialization : this.state.specialization
        }
        axios.post("http://localhost:8080/doctors",payload).then((res)=>{
            if(res.status===200) {
                this.setState = {
                    personalId:"",
                    name: "",
                    surname: "",
                    specialization:""
                };
                window.location.reload();
            } 
        }).catch((err)=>{
            window.alert();
            console.log(err.message);
        });
    }

    handleChange = (e) => {
        switch(e.target.name){
            case 'name' : {
                const name = e.target.value;
                this.setState({name});
            } break;

            case 'surname' : {
                const surname = e.target.value;
                this.setState({surname});
            } break;
            case 'id': {
                const personalId = e.target.value;
                this.setState({personalId});
            } break;
            case 'specialty': {
                const specialization = e.target.value;
                this.setState({specialization});
            } break;
            default: break;
        }
    }
      
    render() {
        const className = "row d-flex justify-content-center";
        const btn = "justify-content-center d-flex"
      return (
          
          <>
          <div className={className}>
            <div className="col-4">
                <input type="text" name="name" className="form-control" placeholder="First name" aria-label="First name" value={this.state.name} onKeyUp={this.handleChange} onChange={this.handleChange}></input>
            </div>
            <div className="col-4">
                <input type="text" name="surname" className="form-control" placeholder="Last name" aria-label="Last name" value={this.state.surname} onKeyUp={this.handleChange} onChange={this.handleChange}></input>
            </div>
            </div>
            <div className={className}>
            <div className="col-4">
                <input type="text" name="id" className="form-control" placeholder="Id" aria-label="Id" value={this.state.personalId} onKeyUp={this.handleChange} onChange={this.handleChange}></input>
            </div>
            <div className="col-4">
                <input type="text" name="specialty" className="form-control" placeholder="Specialty" aria-label="Specialty" value={this.state.specialization} onKeyUp={this.handleChange} onChange={this.handleChange}></input>
            </div>
          </div>
          <div className={btn}>
            <button style={{marginTop:"8px",borderRadius:"7px"}} className="btn-primary" onClick={()=>this.handleClick()}>Add Doctor</button>
          </div>
          <div className="row">
              {this.state.data.map((doctor)=>{
                 return  <Doctor doctor={doctor} key={doctor.id}/>
              })}
          </div>
          </>
      );
      }
}
export default Doctors;
