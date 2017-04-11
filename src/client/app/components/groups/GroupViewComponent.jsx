/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// This component is for viewing a single group via child box components + some buttons
import React from 'react';
import { Link } from 'react-router';
import ChildMeterBoxContainer from '../../containers/groups/ChildMeterBoxContainer';
import ChildGroupBoxContainer from '../../containers/groups/ChildGroupBoxContainer';

export default class GroupViewComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = { showModal: false};
	}


	componentWillMount() {
		console.log(this.props.id);
		this.props.fetchGroupChildren(this.props.id);
	}

	close() {
		this.setState({ showModal: false });
	}

	open() {
		this.setState({ showModal: true });
	}

	// todo: Have edit button render something to edit the group
	// todo: Look into switching to a table cell display to handle many groups showing
	render() {
		// Right now this just links, ideally it will put the edit component up as an overlay
		this.buttonStyle = {
			marginTop: '10px',
			marginLeft: '10px'
		};

		this.groupStyle = {
			marginLeft: '2%',
			marginRight: '2%',
			marginTop: '2%',
			marginBottom: '2%',
			// todo: testing hack
			border: '1px solid red',
			display: 'tableCell'
		};

		this.boxStyle = {
			// todo: testing hack
			display: 'inline-block',
			textAlign: 'center',
			width: '100%'
		};


		this.selBox = {
			marginLeft: '5%',
			marginRight: '5%',
			width: '40%',
			display: 'inline-block'
		};

		this.labelStyle = {
			textDecoration: 'underline'
		};


		return (
			<div>
				<div style={this.groupStyle}>
					<div className="col-xs-12">
						<h2 style={this.boxStyle}> {this.props.name} </h2>
					</div>
					<div className="row">
						<div className="col-xs-6">
							<ChildMeterBoxContainer parentID={this.props.id} />
						</div>
						<div className="col-xs-6">
							<ChildGroupBoxContainer parentID={this.props.id} />
						</div>
					</div>

					<Button bsStyle="primary" bsSize="large" onClick={this.open}>
						Launch demo modal
					</Button>

					<Modal>

					</Modal>

				</div>

			</div>

		);
	}
}
