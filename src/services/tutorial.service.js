import {fire} from "../firebase";

const db = fire.collection("/Posts");
// const db = fire.collection("Usernames")
// .document(username_)
// console.log(fire);

class TutorialDataService {
  getAll() {
    return db;
  }
  getUsers() {
    return fire.collection('/Users');
  }
  create(tutorial) {
    return db.add(tutorial);
  }
  updateuser(userdata) {
    return db.add(userdata);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

export default new TutorialDataService();
