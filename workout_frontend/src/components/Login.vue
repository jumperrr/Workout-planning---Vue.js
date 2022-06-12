<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="card shadow-sm col-lg-8 m-4">
        <div class="card-body">
          <form onsubmit="return false">
            <div class="mb-3">
              <label for="inputEmail" class="form-label">Email address</label>
              <input
                type="email"
                class="form-control"
                id="inputEmail"
                aria-describedby="emailHelp"
                v-model="credentials.email"
                placeholder="Enter email"
                required
              />
            </div>
            <div class="mb-3">
              <label for="inputPassword" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="inputPassword"
                placeholder="Enter password"
                v-model="credentials.password"
                required
              />
            </div>
            <button type="submit" class="btn btn-success mx-2" @click="login()">
              Submit
            </button>
            <button type="button" class="btn btn-primary" @click="$router.push('/register')" >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserService from "../services/UserService";

export default {
  data() {
    return {
      credentials: {
        email: "",
        password: "",
      },
    };
  },
  mounted() {
    if (localStorage.getItem("token") != null) {
      this.$router.push("/home");
    }
  },
  methods: {
    login() {
      UserService.login(this.credentials)
        .then((response) => {
          localStorage.setItem("user", response.data.data.userID);
          localStorage.setItem("token", response.data.data.token);

          window.location.href = "/home";
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
