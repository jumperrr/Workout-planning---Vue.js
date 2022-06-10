import http from "../http-common";
class TrainingDataService {
  getAllExercises() {
    return http.get("/exercises");
  }
  getAllCategories() {
    return http.get("/categories");
  }
  getAllPlans(userID) {
    return http.get("/workoutplan/" + userID);
  }
  addNewlPlan(newPlan) {
    return http.post("/workoutplans", newPlan);
  }

  
}
export default new TrainingDataService();