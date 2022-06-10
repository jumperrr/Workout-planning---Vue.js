<template>
  <div class="row mb-4 justify-content-center">
    <div class="card text-dark bg-light mb-3 col-12 col-lg-6">
      <div class="card-body">
        <h2 v-if="userID != null" class="card-title">{{userName}}</h2>
        <h2 class="card-title">Welcome to the Wourout Plan app! </h2>
        <h5 v-if="userID == null" class="card-text">
        Please log in to create or view a training plan.</h5>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "../services/UserService";

export default ({

data() {
    return {
     userID: null,
     userName: ""
    };
  },
   mounted() {
    console.log('test');
    this.userID = localStorage.getItem("user");
    if (this.userID != null) {
          this.getUser(this.userID);
    }
  },
   methods: {
    getUser(userID) {
      UserService.getUser(userID)
        .then((response) => {
          this.userName = response.data.name;

        })
        .catch((e) => {
          console.log(e);
        });
    }
   }
})
</script>
