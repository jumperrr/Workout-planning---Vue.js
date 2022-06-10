import http from "../http-common";
class UserService {
  login(credentials) {
    return http.post("/login", credentials);
  }
  addUser(user) {
    return http.post("/signup", user);
  }
  getUser(userID) {
    return http.get("/user/" + userID);
  }


}
export default new UserService();