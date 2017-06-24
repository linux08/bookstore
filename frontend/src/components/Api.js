import axios from 'axios';


const BASE_URL = 'http://localhost:1337';

export {getBooks,getBook};

//get books available from the Api
function getBooks(){
    const url = `${BASE_URL}/book/list`;
    return axios.get(url).then(response=>response.data);
}
function getBook(){
    const url = `${BASE_URL}/book/search/`;
    return axios.get(url).then(response=>response.data);

}