class Activity {
  constructor(id, title, description, imgUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

class Repository {
  constructor() {
    this.activities = [];
    this.id = 0;
  }

  createActivity(title, description, imgUrl) {
    const id = this.id++;
    const nuevaActividad = new Activity(id, title, description, imgUrl);
    this.activities.push(nuevaActividad);
  }

  getAllActivities() {
    return this.activities;
  }

  deleteActivity(id) {
    this.activities = this.activities.filter((activity) => activity.id !== id);
  }
}

module.exports = { Activity, Repository };
