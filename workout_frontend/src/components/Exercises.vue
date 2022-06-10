<template>
  <div>
    <div>
      <div class="container px-4 py-4">
        <button
          v-if="!showCategories"
          class="btn-dark btn-sm float-start"
          @click="showCategories = true"
        >
          Back
        </button>

        <div v-if="showCategories" class="row g-3 mb-4 justify-content-center">
          <h1>Categories</h1>
          <div
            class="col-xxl-3 col-xl-4 col-md-6 col-sm-12 col-12"
            v-for="category in categories"
            :key="category"
          >
            <div class="card shadow-sm">
              <img
                v-if="category.name == 'Shoulders'"
                src="../assets/categories/shoulders.png"
                class="card-img-top max-height-200"
                alt="..."
              />
              <img
                v-if="category.name == 'Triceps'"
                src="../assets/categories/triceps.png"
                class="card-img-top max-height-200"
                alt="..."
              />
              <img
                v-if="category.name == 'Biceps'"
                src="../assets/categories/biceps.png"
                class="card-img-top max-height-200"
                alt="..."
              />
              <img
                v-if="category.name == 'Chest'"
                src="../assets/categories/chest.png"
                class="card-img-top max-height-200"
                alt="..."
              />
              <img
                v-if="category.name == 'Back'"
                src="../assets/categories/back.png"
                class="card-img-top max-height-200"
                alt="..."
              />
              <img
                v-if="category.name == 'Legs'"
                src="../assets/categories/legs.png"
                class="card-img-top max-height-200"
                alt="..."
              />
              <img
                v-if="category.name == 'Abs'"
                src="../assets/categories/abs.png"
                class="card-img-top max-height-200"
                alt="..."
              />
              <img
                v-if="category.name == 'Cardio'"
                src="../assets/categories/cardio.png"
                class="card-img-top max-height-200"
                alt="..."
              />

              <div class="card-body">
                <h5 class="card-title">{{ category.name }}</h5>
                <button
                  class="btn-dark btn-sm"
                  @click="showExercises(category.categoryID, category.name)"
                >
                  Show exercises
                </button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="!showCategories">
          <h1>{{ currentCategory }}</h1>
          <div class="row">
            <div
              v-for="exercise in exercisesToShow"
              :key="exercise"
              class="card shadow-sm bg-light col-auto m-2"
            >
              <div class="card-body">
                <div class="card-title">
                  {{ exercise.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TrainingDataService from "../services/TrainingDataService";

export default {
  data() {
    return {
      categories: [],
      exercises: [],
      exercisesToShow: [],
      showCategories: true,
      currentCategory: "",
    };
  },
  mounted() {
    this.getCategories();
    this.getExercises();
  },
  methods: {
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
          this.exercises = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    showExercises(categoryID, categoryName) {
      this.exercisesToShow = [];
      this.exercises.forEach((exercise) => {
        if (exercise.categoryID == categoryID) {
          this.exercisesToShow.push(exercise);
        }
      });
      this.currentCategory = categoryName;
      this.showCategories = false;
    },
  },
};
</script>

<style>
.max-height-200 {
  max-height: 200px;
}
</style>
