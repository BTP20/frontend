import axios from "axios";
const URL = "http://localhost:4000/api/auth/register";

export const Signup = async (body) => {
  try {
    return await axios.post(URL, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.log(e);
  }
};
