import axios from "axios";

const fetchUser = () => {
  console.log("Fetching user...");
  return axios
    .get("https://jsonplaceholder.typicode.com/users/2")
    .then(res => res.data)
    .catch(err => console.log(err));
};
