<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="card shadow-sm col-lg-8 m-4">
        <div class="card-body">
          <form onsubmit="return false">
            <div class="mb-3">
              <label for="inputPlanName" class="form-label">Plan Name</label>
              <input
                type="text"
                class="form-control"
                id="inputPlanName"
                v-model="newPlan.name"
                placeholder="Enter plan name"
                required
              />
            </div>
            <Datepicker v-model="newPlan.date" utc></Datepicker>
            <button type="submit" class="btn btn-success m-2" @click="addNewPlan()">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TrainingDataService from "../services/TrainingDataService";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  data() {
    return {
      newPlan: {
        name: "",
        date: null,
        userID: null,
      },
    };
  },
  mounted() {
    if (localStorage.getItem("user") != null) {
      this.newPlan.userID = localStorage.getItem("user");
    }
  },
  methods: {
    addNewPlan() {
      console.log(this.newPlan);
      TrainingDataService.addNewlPlan(this.newPlan)
        .then((response) => {
          console.log(response.data);
          window.location.href = "/myplans";
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
