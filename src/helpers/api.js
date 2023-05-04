const fetchApi = async (method, endpoint, contentType, requestOptions = {}) => {
  try {
    const response = await fetch(endpoint, {
      headers: {
        "Content-Type": contentType,
      },
      method: method,
      ...requestOptions,
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

// eslint-disable-next-line
export const getApi = async (endpoint) => {
  return await fetchApi("GET", endpoint, "application/json");
};

// eslint-disable-next-line
export const postApi = async (endpoint, body) => {
  const options = {
    body: JSON.stringify(body),
  };

  return await fetchApi("POST", endpoint, "application/json", options);
};
