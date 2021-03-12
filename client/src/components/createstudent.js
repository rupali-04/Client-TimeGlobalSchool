import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
export default class CreateStudent extends Component {
   constructor(props) {
    super(props);

    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeDateofBirth = this.onChangeDateofBirth.bind(this);
    this.onChangeDateofAdmission = this.onChangeDateofAdmission.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeLine = this.onChangeLine.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangePincode = this.onChangePincode.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeFathername = this.onChangeFathername.bind(this);
    this.onChangeMothername = this.onChangeMothername.bind(this);
    this.onChangePhnum = this.onChangePhnum.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeSem = this.onChangeSem.bind(this);
    this.onChangeStdclass = this.onChangeStdclass.bind(this);
    this.onChangeFeepaid = this.onChangeFeepaid.bind(this);
    this.onChangeFeebalance = this.onChangeFeebalance.bind(this);
    this.onChangeTotalfee = this.onChangeTotalfee.bind(this);
    this.onChangeEng = this.onChangeEng.bind(this);
    this.onChangeMaths = this.onChangeMaths.bind(this);
    this.onChangeSci = this.onChangeSci.bind(this);
    this.onChangeHindi = this.onChangeHindi.bind(this);
    this.onChangeComputer = this.onChangeComputer.bind(this);
    this.onChangeTotalmarks = this.onChangeTotalmarks.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      FirstName: '',
      lastname: '',
      gender: '',
      dateofbirth: new Date(),
      dateofadmission: new Date(),
      dateofLeaving: new Date(),
      status: '',
      line: '',
      city: '',
      state:'',
      pincode: '',
      country: '',
      fathername: '',
      mothername: '',
      email: '',
      phnum:'',
      sem: '',
      stdclass: '',
      feepaid: 0,
      feebalance: 0,
      totalfee: 5000,
      eng: 0,
      maths: 0,
      sci: 0,
      hindi: 0,      
      computer: 0,
      totalmark: 0
      
    }
  }
   onChangeFirstname(e) {
    this.setState({
     FirstName: e.target.value
    });
  }
  onChangeLastname(e){
    this.setState({
      lastname: e.target.value
    });
  }
  
 onChangeGender(e){
    this.setState({
      gender: e.target.value
    });
  }
    onChangeDateofBirth(date) {
    this.setState({
      dateofbirth: date
    });
  }
    onChangeDateofAdmission(date) {
    this.setState({
      dateofadmission: date
    });
  }
 onChangeStatus(e){
    this.setState({
      status: e.target.value
    });
  }
  onChangeLine(e){
    this.setState({
      line: e.target.value
    });
  }
  onChangeCity(e){
    this.setState({
      city: e.target.value
    });
  }
  onChangeCountry(e){
    this.setState({
      country: e.target.value
    });
  }
  onChangeState(e){
    this.setState({
      state: e.target.value
    });
  }
  onChangePincode(e){
    this.setState({
      pincode: e.target.value
    });
  }
  onChangeFathername(e){
    this.setState({
      fathername: e.target.value
    });
  }
  onChangeMothername(e){
    this.setState({
      mothername: e.target.value
    });
  }
  onChangeFeebalance(e){
    this.setState({
      feebalance: e.target.value
    });
  }
  onChangeFeepaid(e){
    this.setState({
      feepaid: e.target.value,
     
    });
     
    
  }
  onChangeTotalfee(e){
    this.setState({
      totalfee: e.target.value
    });
  }
  onChangeEmail(e){
    this.setState({
      email: e.target.value
    });
  }
  onChangePhnum(e){
    this.setState({
      phnum: e.target.value
    });
  }
  onChangeSem(e){
    this.setState({
      sem: e.target.value
    });
  }
  onChangeStdclass(e){
    this.setState({
      stdclass: e.target.value
    });
  }
  onChangeEng(e){
    this.setState({
      eng: e.target.value
    });
  }
  onChangeHindi(e){
    this.setState({
      hindi: e.target.value
    });
  }
  onChangeMaths(e){
    this.setState({
      maths: e.target.value
    });
  }
  onChangeSci(e){
    this.setState({
      sci: e.target.value
    });
  }
  onChangeComputer(e){
    this.setState({
      computer: e.target.value
    });
  }
  onChangeTotalmarks(e){
    this.setState({
      totalmark: e.target.value
    });
  }
   onSubmit(e) {
    e.preventDefault();
  
    const student = {
      StudentName:{
        FirstName: this.state.FirstName,
        LastName: this.state.lastname,
      },
    
      Gender: this.state.gender,
      DateOfBirth: this.state.dateofbirth,
      DateofAdmission: this.state.dateofadmission,
      status: this.state.status,
      Address:{
      Address_Line_1: this.state.line,
      City: this.state.city,
      State: this.state.state,
      PostalCode: this.state.pincode,
     Country: this.state.country,
      
      },
      FatherName: this.state.fathername,
      MotherName: this.state.mothername,
     Email: this.state.email,
      PhoneNumber: this.state.phnum,
      Sem: this.state.sem,
      stdClass: this.state.stdclass,
       StudentFee: {
      Deposited: this.state.feepaid,
         Balance: this.state.feebalance,
       },
      StudentResult:
            {
      eng: this.state.eng,
      maths: this.state.maths,
      sci: this.state.sci,
      hindi: this.state.hindi,      
      computer: this.state.computer,
            }
      
      
    };
     console.log(student);

    axios.post('http://localhost:5000/students/', student)
      .then(res => console.log(res.data));

    window.location = '/';
  }
  render() {
    return (
      <div>
        <h3><b>Create New Student Log</b></h3>
        <form onSubmit={this.onSubmit}>
          
          <div className="form-group"> 
            <label>FirstName: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.FirstName}
                onChange={this.onChangeFirstname}
                />
          </div>
          <div className="form-group"> 
            <label>LastName: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.lastname}
                onChange={this.onChangeLastname}
                />
          </div>
          <div className="form-group">
            <label>Gender: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.gender}
                onChange={this.onChangeGender}
                />
          </div>
          <div className="form-group">
            <label>DOB: </label>
            <div>
              <DatePicker
                selected={this.state.dateofbirth}
                onChange={this.onChangeDateofBirth}
              />
            </div>
          </div>
 <div className="form-group">
            <label>AdmissionDate: </label>
            <div>
              <DatePicker
                selected={this.state.dateofadmission}
                onChange={this.onChangeDateofAdmission}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Status: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.status}
                onChange={this.onChangeStatus}
                />
          </div>
          <div><h5><b>Address:</b></h5></div>
          <hr/>
          <div className="form-group">
            <label>Lane: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.line}
                onChange={this.onChangeLine}
                />
          </div>
          <div className="form-group">
            <label>City: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.city}
                onChange={this.onChangeCity}
                />
          </div>
          <div className="form-group">
            <label>State: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.state}
                onChange={this.onChangeState}
                />
          </div>
          <div className="form-group">
            <label>Pin_code: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.pincode}
                onChange={this.onChangePincode}
                />
          </div>
          <div className="form-group">
            <label>Country: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.country}
                onChange={this.onChangeCountry}
                />
          </div>
          <div><h5><b>Personal Details:</b></h5></div>
          <hr/>
          <div className="form-group">
            <label>Phone Number: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.phnum}
                onChange={this.onChangePhnum}
                />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeEmail}
                />
          </div>
          <div className="form-group">
            <label>Father's Name: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.fathername}
                onChange={this.onChangeFathername}
                />
          </div>
          <div className="form-group">
            <label>MotherName: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.mothername}
                onChange={this.onChangeMothername}
                />
          </div>
          <div className="form-group">
            <label>Sem: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.sem}
                onChange={this.onChangeSem}
                />
          </div>
          <div className="form-group">
            <label>stdClass: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.stdclass}
                onChange={this.onChangeStdclass}
                />
          </div>
          <div><h5><b>Fee Recipt</b></h5></div>
          <hr/>
          <div className="form-group">
            <label>TotalFee: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.totalfee}
                onChange={this.onChangeTotalfee}
                />
          </div>
          <div className="form-group">
            <label>Fee_Paid: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.feepaid}
                onChange={this.onChangeFeepaid}
                />
          </div>
          
          <div className="form-group">
            <label>BalanceFee: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.totalfee - this.state.feepaid}
                onChange={this.onChangeFeebalance}
                />
          </div>
         <div><h5><b>Result:</b></h5></div>
          <hr/>
<div className="form-group">
            <label>English: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.eng}
                onChange={this.onChangeEng}
                />
          </div>
          <div className="form-group">
            <label>Hindi: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.hindi}
                onChange={this.onChangeHindi}
                />
          </div>
          <div className="form-group">
            <label>Maths: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.maths}
                onChange={this.onChangeMaths}
                />
          </div>
          <div className="form-group">
            <label>Computer: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.computer}
                onChange={this.onChangeComputer}
                />
          </div>
          
          <div className="form-group">
            <input type="submit" value="Save" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}