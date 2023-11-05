const BASE_URL = "http://localhost:1337/api";
const RESOURSE_URL = `${BASE_URL}/book`;

const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
  try {
    const reqParams = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      reqParams.body = JSON.stringify(body);
    }

    return await fetch(`${RESOURSE_URL}${urlPath}`, reqParams);
  } catch (error) {
    console.error("HTTP ERROR: ", error);
  }
};

// public functionality

export const getAllBook = async () => {
  const rawResponse = await baseRequest({ method: "GET" });

  return await rawResponse.json();
};

export const postBook = (body) => baseRequest({ method: "POST", body });

export const updateBook = (id, body) =>
  baseRequest({ urlPath: `/${id}`, method: "PATCH", body });

export const deleteBook = (id) =>
  baseRequest({ urlPath: `/${id}`, method: "DELETE" });