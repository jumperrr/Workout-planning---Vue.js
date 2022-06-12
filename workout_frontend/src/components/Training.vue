<template>
  <div class="container">
    <div v-if="trainingID == 0">
      <div class="row justify-content-center">
        <div class="card shadow-sm col-lg-8 m-4">
          <div class="card-body">
            <form onsubmit="return false">
              <div class="mb-4">
                <div class="m-2">
                  <label for="selectCategory" class="form-label float-start"
                    >Category</label
                  >
                  <select
                    class="form-select"
                    id="selectCategory"
                    aria-label="Default select example"
                    v-model="newTraining.categoryID"
                    @change="prepareExercises()"
                    required
                  >
                    <option
                      v-for="category in categories"
                      v-bind:key="category.category_name"
                      :value="category.categoryID"
                    >
                      {{ category.name }}
                    </option>
                  </select>
                </div>

                <div class="m-2">
                  <label for="selectExercise" class="form-label float-start"
                    >Exercise</label
                  >
                  <select
                    class="form-select"
                    id="selectExercise"
                    aria-label="Default select example"
                    v-model="newTraining.exerciseID"
                    required
                  >
                    <option
                      v-for="exe in exercises"
                      v-bind:key="exe.name"
                      :value="exe.exerciseID"
                    >
                      {{ exe.name }}
                    </option>
                  </select>
                </div>

                <div class="m-2">
                  <label for="inputReps" class="form-label float-start"
                    >Reps</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    id="inputReps"
                    v-model="newTraining.reps"
                    required
                  />
                </div>

                <div class="m-2">
                  <label for="inputValue" class="form-label float-start"
                    >Value</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    id="inputValue"
                    v-model="newTraining.value"
                    required
                  />
                </div>

                <div class="m-2">
                  <label for="selectUnit" class="form-label float-start"
                    >Unit</label
                  >
                  <select
                    class="form-select"
                    id="selectUnit"
                    aria-label="Default select example"
                    v-model="newTraining.unit_name"
                    required
                  >
                    <option
                      v-for="unit in units"
                      v-bind:key="unit.unit_name"
                      :value="unit.unit_name"
                    >
                      {{ unit.name }}
                    </option>
                  </select>
                </div>

                <div class="mt-4">
                  <div class="form-check">
                    <label class="form-check-label mx-2"> Done: </label>
                    <div v-if="newTraining.done">
                      <span
                        class="
                          material-icons
                          text-success
                          cursor-pointer
                          fs-2
                          btn-done
                        "
                        id="checkboxDone"
                        @click="newTraining.done = false"
                      >
                        check_circle
                      </span>
                    </div>
                    <div v-if="!newTraining.done">
                      <span
                        id="checkboxDone"
                        class="material-icons cursor-pointer fs-2 btn-done"
                        @click="newTraining.done = true"
                      >
                        highlight_off
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="float-end">
                <button
                  type="submit"
                  class="btn btn-secondary m-2"
                  @click="$router.push(`/myplan/${workoutplanID}`)"
                >
                  Back
                </button>
                <button
                  type="submit"
                  class="btn btn-success m-2"
                  @click="addTraining()"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
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
      training: [],
      trainingID: 0,
      workoutplanID: 0,
      newTraining: {
        trainingID: null,
        reps: null,
        value: null,
        exerciseID: null,
        workoutplanID: null,
        done: 0,
        exercise_name: null,
        unit_name: null,
        category_name: null,
        categoryID: null,
      },
      categories: [],
      exercises: [],
      allExercises: [],
      units: [],
    };
  },
  mounted() {
    this.getUnits();
    this.getCategories();
    this.getExercises();
    const route = useRoute();
    this.trainingID = route.params.id;
    this.workoutplanID = route.params.wid;
    this.newTraining.workoutplanID = route.params.wid;

  },
  methods: {
    getUnits() {
      TrainingDataService.getUnits()
        .then((response) => {
          this.units = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getCategories() {
      TrainingDataService.getAllCategories()
        .then((response) => {
          this.categories = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getExercises() {
      TrainingDataService.getAllExercises()
        .then((response) => {
          this.allExercises = response.data;
          // this.exercises = this.allExercises;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    prepareExercises() {
      if (this.trainingID == 0) {
        this.exercises = this.allExercises.filter(
          (exe) => exe.categoryID == this.newTraining.categoryID
        );
      }
    },
    addTraining() {
      TrainingDataService.addNewTraining(this.newTraining)
        .then((response) => {
          window.location.href = "/myplan/" + this.workoutplanID;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style>
.btn-done:hover {
  transform: scale(1.1);
}
</style>
