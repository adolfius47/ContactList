	"use strict";
	import React, {Component} from "react";
	import {connect} from "react-redux";
	import Spinner from "./Spinner";
	import moment from 'moment'
	import {Link} from 'react-router'
	class ContactList extends Component {
		render() {
			const fullName=(user)=>{
				return [user.last,user.first].join(" ")
			}
			const location=(location)=>{
				return [location.postcode,location.state,location.city,location.street].join(" | ")
			}
			return <div className="row">
			<div className="col-md-12 col-sm-12 col-xs-12 col-lg-12">
			<div className="row">в 
			<div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 text-center">

			<h2>Contact List</h2>
			</div>
			</div>
			<div className="row">
			<div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 text-right">
			<Link to="create">
			<button className="btn btn-primary">Add Contact</button>
			</Link>
			</div>
			</div>
			<div className="row">
			<div className="col-md-12 col-sm-12 col-xs-12 col-lg-12">
			<div className="table-scrollable">

			<table style={{textAlign: "center"}}
			className="table table-bordered table-hover table-striped ">
			<thead>
			<tr>
						<th  className="table-classic">#</th>

			<th  className="table-classic">Picture</th>

			<th  className="table-classic">Full Name</th>
			<th  className="table-classic">Username</th>
			<th  className="table-classic">Location</th>
			<th  className="table-classic">Gender</th>
			<th  className="table-classic">Registered</th>
			<th  className="table-classic">Phone</th>
			</tr>
			</thead>
			<tbody>
			{this.props.ContactList.data?this.props.ContactList.data.results.map((item,key)=>{
				console.warn(item.registered)

				return <tr key={key}>
				<td><Link to={"/edit/:id".replace(":id",item.id)}>
				<button className='btn btn-sm btn-default yellow'>
				<i className="fa fa-edit"/></button>
				</Link></td>
				<td><img src={item.picture.thumbnail}/></td>
				<td>{fullName(item.name)}</td>
				<td>{item.login.username}</td>
				<td>{location(item.location)}</td>
				<td>{item.gender}</td>
				<td>{moment(item.registered).format("DD.MM.YYYY HH:mm")}</td>
				<td>{item.phone}</td>

				</tr>
			}):<Spinner/>}
			</tbody>
			</table>            
			</div>
			</div></div>
			</div></div>

		}
	}

	export default connect(store => store)(ContactList);