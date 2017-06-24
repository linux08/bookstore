
module.exports = {
  attributes: {

    name: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
      required: true
    },
    images: {
      type: 'array'
    },
    language: {
      type: 'string'
    },
    price: {
      type: 'integer',
      required: true
    },
    publicationdate: {
      type: 'date'
    },
    stock: {
      type: 'integer',
      required: true
    },
    bookavailability: {
      type: 'boolean',
      defaultsTo: true
    },

    category: {
      collection: 'Category',
      via: 'book',

    },
    order: {
      model: 'Order',
      via: 'books'
    }
  }
};