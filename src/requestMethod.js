import axios from "axios";

const BASE_URL = "/api/";
// const TOKEN = 
//  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken :
// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGMxZjRkYTIyZjY4ZjVjY2RjMmY1MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTc2NjEwMywiZXhwIjoxNjUwMDI1MzAzfQ.58j-JXE6Ys4c-WQdibvlxQZpP-g6ZasKF7UVkiX2vsY'

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}`},
});