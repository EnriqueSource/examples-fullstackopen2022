import axios from "axios";
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
<<<<<<< HEAD
  const request =  axios.get(baseUrl);
=======
  const request = axios.get(baseUrl);
>>>>>>> dev
  return request.then(response => response.data);
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
>>>>>>> dev
  return request.then(response => response.data);
}

export default { getAll, create, update };
