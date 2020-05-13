import axios from "axios";

export const authService = {
  isLoggedIn() {
    // ToDo -> Authentifizierung immer prüfen, ansonsten kann einfach irgendein jwt / username eingetragen werden, um auf die Seite zuzugreifen
    const jwt = localStorage.getItem("jwt");
    const username = localStorage.getItem("username");
    if(jwt && username) {
      return true;
    } else {
      return false;
    }
  },
  login(e, username, password, callback) {
    e.preventDefault();
    axios.post("/api/auth", {
      username: username,
      password: password,
      // username: e.target.elements.username.value,
      // password: e.target.elements.password.value,
    })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("jwt", res.data.jwt);
        localStorage.setItem("username", username);
        callback();
      })
      .catch((err) => {
        console.log(err);
      });
  },
  logout() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("username");
  }
}