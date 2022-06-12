<template>
  <div class="container">
    <div class="row justify-content-between">
      <div class="col-auto ps-sm-0 d-inline-block">
        <h4>Plan details <span class="material-icons text-danger align-middle fs-2 cursor-pointer btn-delete" @click="deletePlan()"> delete_forever </span></h4>
      </div>
      <div class="col-6 col-lg-4 pe-sm-0">
        <button
          type="button"
          class="btn btn-success mb-4 w-100 float-end"
          @click="$router.push(`/training/${planID}/0`)"
        >
          Add new
        </button>
      </div>
      <div class="table-responsive p-0">
        <table class="table table-hover">
          <thead class="table-dark">
            <tr>
              <th>Category</th>
              <th>Exercise</th>
              <th>Reps</th>
              <th>Value</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="cursor-pointer"
              v-for="training in plan"
              :key="training"
              @click="
                $router.push(`/training/${planID}/${training.trainingID}`)
              "
            >
              <td>{{ training.category_name }}</td>
              <td>{{ training.exercise_name }}</td>
              <td>{{ training.reps }}</td>
              <td>{{ training.value + " " + training.unit_name }}</td>
              <td>
                <span v-if="training.done" class="material-icons text-success">
                  check_circle
                </span>
                <span v-if="!training.done" class="material-icons text-danger">
                  highlight_off
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import TrainingDataService from "../services/TrainingDataService";
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      plan: [],
      units: [],
      planID: null,
    };
  },
  mounted() {
    const route = useRoute();
    this.planID = route.params.id;
    this.getPlan(this.planID);
    this.getUnits(0);
  },
  methods: {
    getPlan(planID) {
      TrainingDataService.getTraining(planID)
        .then((response) => {
          this.plan = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getUnits() {
      TrainingDataService.getUnits()
        .then((response) => {
          this.units = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deletePlan() {
      TrainingDataService.deleteWorkoutplan(this.planID)
        .then((response) => {
          window.location.href = "/myplans";
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style>
.btn-delete:hover {
  transform: scale(1.1);
}
</style>
