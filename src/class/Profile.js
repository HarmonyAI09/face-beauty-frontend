import { frontProfileJSON, sideProfileJSON } from "../utils/profile";
const md5 = require("md5");

export class MeasurementItem {
  constructor(name, value) {
    this.name = name;
    this.value = value;
    this.score = null;
    this.index = null;
    this.ideal = null;
    this.mean = null;
    this.advice = null;
  }
}

export class Profile {
  constructor(measurementsJson) {
    this.score = 0;
    this.imgSrc = null;
    this.measurements = [];
    this.featurePoints = [];
    for (const key in measurementsJson) {
      if (measurementsJson.hasOwnProperty(key)) {
        const value = measurementsJson[key];
        this.addMeasurement(new MeasurementItem(key, value));
      }
    }
  }

  addMeasurement(measurement) {
    this.measurements.push(measurement);
  }

  getMeasurement(name) {
    return this.measurements.find((measurement) => measurement.name === name);
  }

  setMeasurement(name, value) {
    const measurement = this.getMeasurement(name);
    if (measurement) {
      measurement.value = value;
    } else {
      this.addMeasurement(new MeasurementItem(name, value));
    }
  }

  async mainProcess(gender, race, endpoint) {
    let requestBody = {
      gender: gender === "Male",
      race: race,
    };
    this.measurements.forEach((measurementItem) => {
      requestBody[measurementItem.name] = measurementItem.value;
    });
    console.log(requestBody);
    fetch(`http://localhost:8000/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }
}

export class OneProfile {
  constructor(gender = null, race = null, name = "Unnamed") {
    this.id = this.createID();
    this.gender = gender;
    this.race = race;
    this.name = name;
    this.score = 0;
    this.frontProfile = new Profile(frontProfileJSON);
    this.sideProfile = new Profile(sideProfileJSON);
  }

  createID() {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 10000);
    const email = localStorage.getItem("userEmail");
    const dataToHash = `${timestamp}-${randomNum}-${email}`;
    const uniqueID = md5(dataToHash);
    return uniqueID;
  }

  save() {}
}
