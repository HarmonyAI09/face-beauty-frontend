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
    if (src === undefined) {
      return;
    }
    // Check if src is a string
    if (typeof src === "string") {
      // Attempt to parse src as JSON
      try {
        src = JSON.parse(src);
      } catch (error) {
        console.error("Failed to parse src as JSON", error);
        // Handle the error appropriately (e.g., return or throw an error)
        return;
      }
    }

    // Proceed with copying properties
    this.score = src.score;
    this.imgSrc = src.imgSrc;
    this.imgUrl = src.imgUrl;
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
    try {
      const body = {
        report_id,
        profile_data: JSON.stringify({
          score: this.score,
          measurements: this.measurements,
        }),
      };

      await fetch(`http://localhost:8000/store/${frontOrSide}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }).then((res) => res.json());
    } catch (e) {
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
    this.front = new Profile(frontProfileJSON);
    this.front.imgUrl = "./images/front_blank.jpg";
    this.side = new Profile(sideProfileJSON);
    this.side.imgUrl = "./images/side_blank.jpg";
    this.mapPoints = null;
    this.percentage = 0;
    this.isNew = true;
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
      await this.front.mainProcess(this.gender, this.race, "getfrontscore");
    } else if (str === "Side") {
      await this.side.mainProcess(this.gender, this.race, "getsidescore");
    }
    await this.register();
    await this.generateImage();
    this.getPercentage();
  }

  async register() {
    if (!this.front.isEmpty()) {
      await this.front.imageRegister(this.id, 0); // 0 is the flag to show it's front profile
    }
    if (!this.side.isEmpty()) {
      await this.side.imageRegister(this.id, 1); // 1 is the flag to show it's side profile
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

  async regId(mail) {
    const body = {
      mail: mail,
      profileID: this.id,
      name: this.name,
      gender: this.gender,
      racial: this.race,
    };
    const response = await fetch("http://localhost:8000/profile/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  async save(mail) {
    this.regId(mail);
    try {
      const body = {
        report_id: this.id,
        gender: this.gender,
        name: this.name,
        race: this.race,
        percentage: this.percentage,
        score: this.score,
      };

      await fetch("http://localhost:8000/store", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }).then((res) => res.json());

      this.front.save(this.id, "front");
      this.side.save(this.id, "side");
    } catch (e) {
      console.warn(e);
    }
  }

  async load(id) {
    const response = await fetch(`http://localhost:8000/profile/report/${id}`, {
      method: "GET",
    });
    const loadItem = await response.json();
    this.copy(loadItem);
    console.log(loadItem);
    this.id = id;
    this.front.imgUrl = "./images/front_blank.jpg";
    this.side.imgUrl = "./images/side_blank.jpg";
    if (loadItem.front) {
      this.front.imgUrl = `http://localhost:8000/get_image/${id}0`;
    }
    if (loadItem.side) {
      this.side.imgUrl = `http://localhost:8000/get_image/${id}1`;
    }
    this.isNew = false;
  }

  copy(src) {
    this.id = src.id;
    this.isNew = src.isNew;
    this.gender = src.gender;
    this.race = src.race;
    this.name = src.name;
    this.score = src.score;
    this.front = new Profile();
    this.front.copy(src.front);
    this.side = new Profile();
    this.side.copy(src.side);
    this.mapPoints = src.mapPoints;
    this.percentage = src.percentage;
  }

  format(flag){
    if(flag === 0){
      this.front = new Profile();
    }
    else if (flag === 1){
      this.side = new Profile();
    }
  }

  getPercentage() {
    const MAX_TOTAL = 500;
    const frontScore = this.front.score;
    const sideScore = this.side.score;
    this.percentage = ((frontScore + sideScore) / MAX_TOTAL) * 100;
  }

  changeName(newName) {
    this.name = newName;
  }
}
