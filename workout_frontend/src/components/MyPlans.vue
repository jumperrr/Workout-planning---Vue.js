<template>
  <div class="container">
    <div class="row justify-content-center">
      <table class="table table-hover table-responsive">
        <thead class="table-dark">
          <tr>
            <th colspan="3" scope="col">
              <h4>My plans</h4>
            </th>
          </tr>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Plan name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(plan, index) in workoutplan" :key="plan" @click="$router.push(`/myplan/${plan.workoutplanID}`)">
            <th>{{ index + 1 }}</th>
            <td>{{ plan.date }}</td>
            <td>{{ plan.name }}</td>
          </tr>
        </tbody>
      </table>
      <div class="col-8 col-lg-6">
        <button
          type="button"
          class="btn btn-success m-4 w-100"
          @click="$router.push('/newplan')"
        >
          Add Plan
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import TrainingDataService from "../services/TrainingDataService";

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
      console.log(this.userID);
      TrainingDataService.getAllPlans(this.userID)
        .then((response) => {
          this.workoutplan = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
