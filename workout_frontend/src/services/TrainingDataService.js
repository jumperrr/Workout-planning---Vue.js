import http from "../http-common";
class TrainingDataService {
  getAllExercises() {
    return http.get("/exercises");
  }
  getAllCategories() {
    return http.get("/categories");
  }
  
}
export default new TrainingDataService();