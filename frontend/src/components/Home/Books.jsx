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
		console.log(bookname)
		var bookComponents = bookname.map(function (bb) {
			return (
				<a href='/book/search' key={bb.id}><div className="box" >

					<div >{bb.name} </div>
					<div > {bb.price} </div>

				</div>
				</a>
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