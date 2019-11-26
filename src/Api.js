import axios from "axios";

export const fetchData = () => {
  const userPromise = fetchUser();
  const postsPromise = fetchPosts();
  return {
    user: wrapPromise(userPromise),
    posts: wrapPromise(postsPromise)
  };
};

const wrapPromise = promise => {
  // set initial status
  let status = "pending";
  // store result
  let result;
  // wait for promise
  let suspender = promise.then(
    res => {
      status = "success";
      result = res;
    },
    err => {
      status = "error";
      result = err;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      }
    }
  };
};

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
