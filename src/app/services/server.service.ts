import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExerciseLogDataService } from './exercise-log-data.service';

@Injectable()
export class ServerService {
  constructor(private http: HttpClient,
              private exerciseLogData: ExerciseLogDataService) { }

  storeUserData(){
    return this.http.put("https://track-your-lifts-project.firebaseapp.com/userData.json", this.exerciseLogData.getPresetExercises())
    .pipe(

    );
  }
}
