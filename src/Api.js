import axios from "axios";

export const fetchData = () => {
  const userPromise = fetchUser();
  const postsPromise = fetchPosts();
  return {
    user: wrapPromise(userPromise),
    posts: wrapPromise(postsPromise)
  };
};

const wrapPromise = promise => {};

const fetchUser = () => {
  console.log("Fetching user...");
  return axios
    .get("https://jsonplaceholder.typicode.com/users/2")
    .then(res => res.data)
    .catch(err => console.log(err));
};

const fetchPosts = () => {
  console.log("Fetching Posts...");
  return axios
    .get("https://jsonplaceholder.typicode.com/posts?_limit=8")
    .then(res => res.data)
    .catch(err => console.log(err));
};
