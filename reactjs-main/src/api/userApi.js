import { API } from "../config";

export const register = (user) => {
  return fetch(`${API}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return console.log(err);
    });
};

export const conformemail = (token) => {
  return fetch(`${API}/conform/${token}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const signin = (user) => {
  return fetch(`${API}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
export const authenticate = (data) => {
  localStorage.setItem("jwt", JSON.stringify(data));
};

export const isAuthenticated = () => {
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};
// sign out
export const signOut = () => {
  localStorage.removeItem("jwt");
  return fetch(`${API}/signout`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      res.json();
    })
    .catch((err) => console.log(err));
};

// forget password
export const forgetPassword = (email) => {
  return fetch(`${API}/forgetpassword`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
// reset password
export const resetPassword = (password, token) => {
  return fetch(`${API}/resetpassword/${token}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
export const getAllUsers = () => {
  return fetch(`${API}/userlist`)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};
