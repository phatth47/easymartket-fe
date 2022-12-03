import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;

export const getAllUser = async () => {
  try {
    let res = await axios.get(`${apiURL}/api/user/all-user`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postUser = async ({
  name,
  email,
  password,
  cPassword,
  userRole,
}) => {
  const data = { name, email, password, cPassword, userRole };

  try {
    let res = await axios.post(`${apiURL}/api/user/add-user`, data);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const putUser = async (user) => {
  let data = { uId: user.uId, name: user.name, phone: user.phone };
  console.log(data);
  try {
    let res = await axios.post(`${apiURL}/api/user/edit-user`, data);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
