
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
    avatar: {
      type: 'string'
    },
    // avatarUrl: {
    //   type: 'string'
    // },
    /*images: {
        collection:'Image',
        via:'book'
      },*/
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
      type: 'integer'//,
      //required: true
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