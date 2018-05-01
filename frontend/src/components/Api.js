import axios from 'axios';


const BASE_URL = 'http://localhost:1337';

export { getBooks, getBook, getUserInfo, allUser };

function allUser() {
    const url = 'http://localhost:1337/user/list';
    return axios.get(url).then((response) => { response.data });
}

//get books available from the Api
function getBooks() {
    const url = `${BASE_URL}/book/list`;
    return axios.get(url).then(response => response.data);
}
function getBook() {
    const url = `${BASE_URL}/book/search/`;
    return axios.get(url).then(response => response.data);

}
function getUserInfo(id) {
    const url = `${BASE_URL}/user/` + id;
    return axios.get(url)
        .then((response) => {
            response.data
        }
        )
        .catch((err) => {

        });
}