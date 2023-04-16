const API_URL = "http://localhost:8080"
export const baseService = {
    get: async (url) => {
      let result = [];
      await fetch(API_URL + url)
        .then((res) => res.json())
        .then((data) => (result = data));
      return result;
    },
    post: async (url, data) => {
      let result = {};
      let requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      await fetch(API_URL + url, requestOptions)
        .then((res) => res.json())
        .then((data) => (result = data));
      return result;
    },
    put: async (url, data) => {
      let result = {};
      let requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      await fetch(API_URL + url, requestOptions)
        .then((res) => res.json())
        .then((data) => (result = data));
      return result;
    },
    
    delete :    async (url) => {
    
      await fetch(API_URL + url, { method: 'DELETE' })
    }
  };