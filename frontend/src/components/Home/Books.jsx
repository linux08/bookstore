import React, { Component } from 'react';



class Books extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e) {

	}


	render() {
		var bookname = this.props.bookData;
		var bookComponents = bookname.map(function (bb) {
			return (
				<div>

					<div className="box"><img src ={bb.avatarUrl}/></div>
					<div>
						<div >{bb.name} </div>
						<div className="price">Buy for <span> {bb.price} </span> </div>
					</div>
					<a className="btn btn-lg btn-primary btn-block" href='/book/search' key={bb.id}>
						BUY
					</a>
				</div>
			)
		});
		return (
			<div >
				<div className="col-sm-12">
					<div className="panel-body">
						<div className="book">
							<div className="station"> {bookComponents}</div>
						</div>
					</div>
				</div>
				<br />
			</div>

		)
	}

}
export default Books