import { API } from "../config";

export const getallcategories = () => {
  return fetch(`${API}/getallcategories`)
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return console.log(err);
    });
};
export const addCategory = (category_name, token) => {
  return fetch(`${API}/addcategory`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ category_name }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return console.log(err);
    });
};

export const categoryDetails = (id) => {
  return fetch(`${API}/categorydetail/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return console.log(err);
    });
};

export const updateCategory = (id, category_name, token) => {
  return fetch(`${API}/updatecategory/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ category_name }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return console.log(err);
    });
};

export const deleteCategory = (id, token) => {
  return fetch(`${API}/deletecategory/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return console.log(err);
    });
};
