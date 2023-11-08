const useFetchPost = () => {
  const postData = (url, data) => {
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
  };

  return { postData };
};

export default useFetchPost;
