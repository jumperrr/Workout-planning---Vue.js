<template>
  <div class="container">
    <div class="row justify-content-between">
      <div class="col-auto ps-sm-0"><h4>My plans</h4></div>
      <div class="col-6 col-lg-4 pe-sm-0">
        <button
          type="button"
          class="btn btn-success mb-4 w-100 float-end"
          @click="$router.push('/newplan')"
        >
          Add new
        </button>
      </div>
      <div class="table-responsive p-0">
        <table class="table table-hover table-responsive">
          <thead class="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Plan name</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="cursor-pointer"
              v-for="(plan, index) in workoutplan"
              :key="plan"
              @click="$router.push(`/myplan/${plan.workoutplanID}`)"
            >
              <th>{{ index + 1 }}</th>
              <td>{{ plan.date }}</td>
              <td>{{ plan.name }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import TrainingDataService from "../services/TrainingDataService";
import moment from "moment";

export default {
  data() {
    return {
      userID: null,
      workoutplan: [],
    };
  },
  mounted() {
    if (localStorage.getItem("token") != null) {
      this.userID = localStorage.getItem("user");
      this.getPlans();
    }
  },
  methods: {
    getPlans() {
      TrainingDataService.getAllPlans(this.userID)
        .then((response) => {
          this.workoutplan = response.data;
          if (this.workoutplan.length != 0) {
            this.workoutplan.forEach((plan) => {
              plan.date = moment(plan.date).format("DD-MM-YYYY");
            });
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
