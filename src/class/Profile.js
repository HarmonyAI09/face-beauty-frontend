import {
  frontProfileJSON,
  sideProfileJSON,
  attributeStringToShort,
} from "../utils/profile";
const md5 = require("md5");

export class MeasurementItem {
  constructor(
    name,
    value,
    score = null,
    index = null,
    ideal = null,
    mean = null,
    advice = null,
    max = null
  ) {
    this.name = name;
    this.value = value;
    this.score = score;
    this.index = index;
    this.ideal = ideal;
    this.mean = mean;
    this.advice = advice;
    this.max = max;
  }
  upgrade(newMeasurement) {
    this.name = newMeasurement.name;
    this.value = newMeasurement.value;
    this.score = newMeasurement.score;
    this.index = newMeasurement.index;
    this.ideal = newMeasurement.ideal;
    this.mean = newMeasurement.mean;
    this.advice = newMeasurement.advice;
    this.max = newMeasurement.max;
  }
  isSet() {
    return this.score !== null;
  }
}

export class Profile {
  constructor(measurementsJson) {
    this.score = null;
    this.imgUrl = null;
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

  upgradeMeasurement(name, newMeasurement) {
    const measurement = this.getMeasurement(name);
    if (measurement) {
      measurement.upgrade(newMeasurement);
    }
  }

  async mainProcess(gender, race, endpoint) {
    let requestBody = {
      gender: gender === "Male",
      racial: race,
    };
    // eslint-disable-next-line array-callback-return
    this.measurements.map((measurementItem) => {
      requestBody[attributeStringToShort[measurementItem.name]] =
        measurementItem.value;
    });
    fetch(`http://localhost:8000/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        for (const i in data.advices) {
          const temp = new MeasurementItem(
            data.names[i],
            data.values[i],
            data.scores[i],
            i,
            data.ranges[i],
            data.notes[i],
            data.advices[i],
            data.maxs[i]
          );
          const one = this.getMeasurement(data.names[i]);
          one.upgrade(temp);
        }
        this.score = data.score;
      });
  }

  getPercentage() {
    return 100;
  }

  copy(src) {
    this.score = src.score;
    this.imgSrc = src.imgSrc;
    this.measurements = src.measurements;
    this.featurePoints = src.featurePoints;
  }

  isEmpty() {
    return this.imgSrc === null;
  }

  async imageRegister(id, flag) {
    try {
      const formData = new FormData();
      formData.append("file", this.imgSrc); // You might want to provide a filename
      formData.append("id", id);
      formData.append("flag", flag);
      const response = await fetch(`http://localhost:8000/image/register`, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Failed to register image");
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  async save(report_id, frontOrSide) {
    if (!this.score) return;
    console.log(`storing ${frontOrSide} profile ...`);

    console.log(this, frontOrSide);

    try {
      const body = {
        report_id,
        profile_data: JSON.stringify({
          score: this.score,
          measurements: this.measurements
        })
      };

      const response = await fetch(`http://localhost:8000/store/${frontOrSide}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      }).then(res => res.json())
    }
    catch (e) {
      console.warn(e);
    }
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
    this.mapPoints = null;
    this.percentage = 0;
  }

  createID() {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 10000);
    const email = localStorage.getItem("userEmail");
    const dataToHash = `${timestamp}-${randomNum}-${email}`;
    const uniqueID = md5(dataToHash);
    return uniqueID;
  }

  async getHarmony(str) {
    if (str === "Front") {
      await this.frontProfile.mainProcess(
        this.gender,
        this.race,
        "getfrontscore"
      );
    } else if (str === "Side") {
      await this.sideProfile.mainProcess(
        this.gender,
        this.race,
        "getsidescore"
      );
    }
    await this.register();
    await this.generateImage();
    this.getPercentage()
  }

  async register() {
    if (!this.frontProfile.isEmpty()) {
      await this.frontProfile.imageRegister(this.id, 0); // 0 is the flag to show it's front profile
    }
    if (!this.sideProfile.isEmpty()) {
      await this.sideProfile.imageRegister(this.id, 1); // 1 is the flag to show it's side profile
    }
  }

  async generateImage() {
    try {
      const formData = new FormData();
      formData.append("id", this.id);
      formData.append("points", JSON.stringify({ ...this.mapPoints }));
      const response = fetch("http://localhost:8000/generate", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Failed to register image");
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  async save() {
    console.log("Save Test", this);
    try {
      const body = {
        report_id: this.id,
        gender: this.gender,
        name: this.name,
        race: this.race,
        percentage: this.percentage,
        score: this.score
      };

      const response = await fetch("http://localhost:8000/store", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      }).then(res => res.json())

      this.frontProfile.save(this.id, 'front')
      this.sideProfile.save(this.id, 'side')
    }
    catch (e) {
      console.warn(e);
    }
  }

  load(id) {

  }

  copy(src) {
    this.id = src.id;
    this.gender = src.gender;
    this.race = src.race;
    this.name = src.name;
    this.score = src.score;
    this.frontProfile = new Profile();
    this.frontProfile.copy(src.frontProfile);
    this.sideProfile = new Profile();
    this.sideProfile.copy(src.sideProfile);
    this.mapPoints = src.mapPoints;
    this.percentage = src.percentage;
  }

  getPercentage() {
    const MAX_TOTAL = 500;
    const frontScore = this.frontProfile.score;
    const sideScore = this.sideProfile.score;
    this.percentage = (frontScore + sideScore) / MAX_TOTAL * 100;
  }
}
