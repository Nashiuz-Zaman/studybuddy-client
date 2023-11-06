// api
import { apiBaseURL } from "../nativeData/apiBase";

const useControlCookie = () => {
  const createCookie = (email) => {
    fetch(`${apiBaseURL}/jwt`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  };

  const deleteCookie = () => {
    fetch(`${apiBaseURL}/logout`, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  };

  return { createCookie, deleteCookie };
};

export default useControlCookie;
