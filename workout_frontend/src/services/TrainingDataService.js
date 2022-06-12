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
  addNewPlan(newPlan) {
    return http.post("/workoutplans", newPlan);
  }
  getTraining(planID) {
    return http.get("/training/" + planID);
  }
  getUnits() {
    return http.get("/units");
  }
  getTrainingById(trainingID) {
    return http.get('training/edit/' + trainingID);
  }
  addNewTraining(newTraining) {
    return http.post("/trainings", newTraining);
  }
  updateTraining(training) {
    return http.put("/training/" + training.trainingID, training);
  }
  deleteTraining(trainingID) {
    return http.delete("/training/" + trainingID);
  }
  deleteWorkoutplan(workoutplanID){
    return http.delete("/workoutplan/" + workoutplanID);
  }

  
}
export default new TrainingDataService();