<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="card shadow-sm col-lg-8 m-4">
        <div class="card-body">
          <form onsubmit="return false">
            <div class="mb-3">
              <label for="inputName" class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                id="inputName"
                v-model="user.name"
                placeholder="Enter name"
                required
              />
            </div>
            <div class="mb-3">
              <label for="inputEmail" class="form-label">Email address</label>
              <input
                type="email"
                class="form-control"
                id="inputEmail"
                aria-describedby="emailHelp"
                v-model="user.email"
                placeholder="Enter email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
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
                v-model="user.password"
                minlength="6"
                required
              />
            </div>
            <div class="mb-3">
              <label for="inputPasswordConfirm" class="form-label"
                >Confirm password</label
              >
              <input
                type="password"
                class="form-control"
                id="inputPasswordConfirm"
                placeholder="Confirm password"
                v-model="confirmPassword"
                required
              />
            </div>
            <div
              v-if="
                confirmPassword != user.password &&
                user.password.length != 0 &&
                confirmPassword.length != 0
              "
              class="alert alert-warning my-2 p-1"
              role="alert"
            >
              Passwords do not match!
            </div>
            <button type="submit" class="btn btn-primary" @click="register()">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
      <div
        class="toast align-items-center text-white"
        id="liveToast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        :class="{
          'bg-danger': toastMessage == 'Error',
          'bg-success': toastMessage == 'Success',
        }"
      >
        <div class="d-flex">
          <div class="toast-body">
            {{ toastMessage }}
          </div>
          <button
            type="button"
            class="btn-close me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "../services/UserService";
import { Toast } from "bootstrap";

export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
      confirmPassword: "",
      toastMessage: "",
    };
  },

  methods: {
    register() {
      var toastLiveExample = document.getElementById("liveToast");
      var toast = new Toast(toastLiveExample);
      if (this.user.password.length > 5) {
          UserService.addUser(this.user)
        .then((response) => {
          window.location.href = "/login";
          this.toastMessage = "Success";
          toast.show();
        })
        .catch((e) => {
          console.log(e);
          this.toastMessage = "Error";
          toast.show();
        });
      }
    },
  },
};
</script>

<style>
</style>