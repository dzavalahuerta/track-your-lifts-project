import { Injectable } from '@angular/core';

@Injectable()
export class ExerciseLogDataService {
  private presetExerciseLogData = [
    {
      name: "Rackpull",
      list: [
        "Rack Pull Pin 3 675x1",
        "Rack Pull above kneecap 605x1",
        "Rack Pull below kneecap 500x1"
      ]
    },
    {
      name: "Overhead Press",
      list: [
        "OHP 150x1",
        "OHP Pin-18 175x1",
        "OHP 10x10 65"
      ]
    },
    {
      name: "Shrugs",
      list: [
        "Power Shrug 3x5 315",
        "BTB Power Shrug 5x3-5 315",
        "Trapbar Shrug 135 3x15"
      ]
    }
  ];
  
  constructor() { }

  getPresetExercises(){
    return this.presetExerciseLogData.slice();
  }
}
