// react
import { useCallback } from "react";

const useFetch = () => {
  //  post or create data
  const postData = useCallback((url, data) => {
    return fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  }, []);

  // put or update data
  const putData = useCallback((url, data) => {
    return fetch(url, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  }, []);

  // delete data
  const deleteData = useCallback((url) => {
    return fetch(url, {
      method: "DELETE",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  }, []);

  return { postData, putData, deleteData };
};

export default useFetch;
