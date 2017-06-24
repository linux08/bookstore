module.exports = {
	attributes: {
		user: {
			model: 'User'
		},
		books: {
			collection: 'Book',
			via: 'order'
		},
		quantity: {
			type: 'integer',
			required: true,
			defaultsTo: 1
		},
		payment: {
			type: 'integer'
		},
		comment: {
			type: 'string'
		}
	}
};