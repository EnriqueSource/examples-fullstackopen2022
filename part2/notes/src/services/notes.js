import axios from "axios";
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
<<<<<<< HEAD
  const request =  axios.get(baseUrl);
=======
  const request = axios.get(baseUrl);
<<<<<<< HEAD
>>>>>>> dev
  return request.then(response => response.data);
=======
  const nonExisting = {
    id: 1000,
    content: 'This note is not saved to server',
    date: '2022-06-12T17:30:31.098Z',
    important: true
  }
  return request.then(response => response.data.concat(nonExisting));
>>>>>>> dev
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject);
  return request.then(response => response.data);
}

const update = (id, newObject) => {
<<<<<<< HEAD
  const request = axios.put(`${baseUrl}/${id}`, newObject)
=======
  const request = axios.put(`${baseUrl}/${id}`, newObject);
<<<<<<< HEAD
>>>>>>> dev
  return request.then(response => response.data);
=======
  return request
          .then(response => response.data);
>>>>>>> dev
}

export default { getAll, create, update };
