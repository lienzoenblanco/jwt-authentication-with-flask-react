import { BaseUrl } from "./base.js";

const getState = ({ getStore, setStore }) => {
  return {
    store: {
      token: "",
    },
    actions: {
      register: (email, password) => {
        fetch(BaseUrl + "/user/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email, password: password }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
      },
      login: (email, password) => {
        const store = getStore();

        fetch(BaseUrl + "/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email, password: password }),
        })
          .then((res) => res.json())
          .then((data) => {
            setStore({ token: data });
            sessionStorage.setItem("token", JSON.stringify(data));
          })
          .catch((err) => console.log(err));
      },
      validate: () => {
        const store = getStore();
        fetch(BaseUrl + "user/private", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${store.token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => console.log(store.token))
          .catch((err) => console.log(err));
      },

      logout: () => {
        setStore({ token: "" });
        console.log("Logout completed");
      },
    },
  };
};

export default getState;
