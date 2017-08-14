import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import Select from 'react-select'
class Add extends Component {
constructor(props){
    super(props)
    this.addPhoto=this.addPhoto.bind(this)
    this.addFirstName=this.addFirstName.bind(this)
        this.addLastName=this.addLastName.bind(this)
        this.changeGender=this.changeGender.bind(this)

        this.addUsername=this.addUsername.bind(this)
        this.addEmail=this.addEmail.bind(this)

        this.addPhone=this.addPhone.bind(this)

        this.addCity=this.addCity.bind(this)
        this.addPassword=this.addPassword.bind(this)


        this.state={
            getData:true
    photo:'',
    firstName:'',
    lastName:'',
    gender:'',

    username:'',
    email:'',

    city:'',

    phone:'',
    password:''
}

}
componentWillMount(){
    this.props.dispatch(FetchUserById(this.props.params.id))
}

componentWillReceiveProps(next){
    if(next.ContactById.data&&this.state.getData){
        this.setState({
            getData:false,
          photo:next.ContactById.data,
    firstName:next.ContactById.data,
    lastName:next.ContactById.data,
    gender:next.ContactById.data,

    username:next.ContactById.data,
    email:next.ContactById.data,

    city:next.ContactById.data,

    phone:next.ContactById.data,
    password:next.ContactById.data  
        })
    }
}

addLastName(e){

this.setState({lastName:e.target.value})
}

addFirstName(e){
this.setState({firstName:e.target.value})

}
addPhoto(e){
    console.log(e.target.files[0])
this.setState({photo:e.target.files[0]})

}
changeGender(e){
    console.log(e)
    this.setState({gender:e})

}

addUsername(e){
    this.setState({username:e.target.value})

}


addEmail(e){
    this.setState({email:e.target.value})

}
addPassword(e){
    this.setState({password:e.target.value})

}


addPhone(e){
    this.setState({phone:e.target.value})

}



addCity(e){
    this.setState({city:e.target.value})

}
    render() {
        const genderOptionsForSelect=[{label:"male",value:1},{label:"female",value:2}]
        return  <div className="row">
                <div className="col-lg-12 col-sm-12 col-xs-12 col-md-12">
            <div className="row">
                <div className="col-lg-4 col-sm-12 col-xs-12 col-md-4">
                                <div className="form-group">

<label>Photo</label>



<input type="file"  onChange={this.addPhoto}/>

                </div>
                </div>
                <div className="col-lg-4 col-sm-12 col-xs-12 col-md-4">
                <div className="form-group">
                <label>First Name</label>
                <input className="form-control" onChange={this.addFirstName} value={this.state.firstName}/>
                </div>
                </div>
                <div className="col-lg-4 col-sm-12 col-xs-12 col-md-4">
                                <div className="form-group">

                <label>Last Name</label>
                <input className="form-control" onChange={this.addLastName} value={this.state.lastName}/>
                </div>
            </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-12 col-xs-12 col-md-4">
                <div className="form-group">
                <label>Gender</label>
                <Select 
                options={genderOptionsForSelect}
                onChange={this.changeGender} value={this.state.gender}/>

                </div>
                </div>
                                <div className="col-lg-4 col-sm-12 col-xs-12 col-md-4">
                                <div className="form-group">
                                <label>Email</label>
                <input className="form-control" onChange={this.addEmail} value={this.state.email}/>
</div></div>
                                <div className="col-lg-4 col-sm-12 col-xs-12 col-md-4">
                                <div className="form-group">
                                <label>Username</label>
                <input className="form-control" onChange={this.addUsername} value={this.state.username}/>
        </div>
        </div>
        </div>
        <div className="row">
                <div className="col-lg-4 col-sm-12 col-xs-12 col-md-4">
                <div className="form-group">
                <label>Password</label>
                <input type="password"
                className="form-control"
                onChange={this.addPassword} value={this.state.password}/>

                </div>
                </div>
                                <div className="col-lg-4 col-sm-12 col-xs-12 col-md-4">
                                <div className="form-group">
                                <label>Phone</label>
                <input className="form-control" onChange={this.addPhone} value={this.state.phone}/>
</div>
</div>
                                <div className="col-lg-4 col-sm-12 col-xs-12 col-md-4">
                                <div className="form-group">
                                <label>City</label>
                <input className="form-control" onChange={this.addCity} value={this.state.city}/>
        </div>
        </div>
        </div>
        <div className="row">
                <div className="col-lg-4 col-sm-12 col-xs-12 col-md-4">
                <div className="form-group">
                <label>Street</label>
                <input
                className="form-control"
                onChange={this.addStreet} value={this.state.street}/>

                </div>
                </div>
                                <div className="col-lg-4 col-sm-12 col-xs-12 col-md-4">
                                <div className="form-group">
                                <label>Nationality</label>
                <input className="form-control" onChange={this.addNationality} value={this.state.nationality}/>
</div>
</div>
                                <div className="col-lg-4 col-sm-12 col-xs-12 col-md-4">
                                <div className="form-group flexible">
                                <label></label>
                <button className="btn btn-primary">Save</button>
        </div>
        </div>
        </div>
        </div>
        </div>
    }
}
export default withRouter(connect(store => store)(Add));