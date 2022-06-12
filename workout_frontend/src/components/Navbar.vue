<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <img
          src="../assets/logo.png"
          class="figure-img img-fluid rounded max-height-40 mb-0 mx-2"
          alt="..."
        />
        <a class="navbar-brand" href="/">Workout Plan</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/">Home</a>
            </li>
            <li v-if="user != null" class="nav-item">
              <a class="nav-link" href="/myplans">My Plans</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/exercises">Exercises</a>
            </li>
          </ul>
          <button
          v-if="user != null"
          class="btn btn-sm btn-danger"
          @click="logout()"
        >
          Logout
        </button>
        <button
          v-if="user == null"
          class="btn btn-sm btn-success"
          @click="login()"
        >
          Login
        </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    logout() {
      localStorage.clear();
      this.user = null;
      this.$router.push("/login");
    },
    getUser() {
      this.user = localStorage.getItem("user");
    },
  },
};
</script>

<style>
.max-height-40 {
  max-height: 40px;
}
</style>
