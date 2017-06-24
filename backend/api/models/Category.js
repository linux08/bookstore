module.exports = {
  attributes: {


    categoryName: {
      type: 'string',
      required: true
    },
    book: {
      model: 'Book',
      
    }


  }
};