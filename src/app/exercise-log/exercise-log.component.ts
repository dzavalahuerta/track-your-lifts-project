import { Component, OnInit } from '@angular/core';
import { ExerciseLogDataService } from '../services/exercise-log-data.service';

@Component({
  selector: 'app-exercise-log',
  templateUrl: './exercise-log.component.html',
  styleUrls: ['./exercise-log.component.css']
})
export class ExerciseLogComponent implements OnInit {
  userData;

  constructor(private exerciseLogData: ExerciseLogDataService) { }

  ngOnInit() {
    this.userData = this.exerciseLogData.getPresetExercises();

    setTimeout(
      ()=>{
        let allButtons = document.querySelectorAll('button')
        for (let i = 1; i < allButtons.length; i++) {
            allButtons[i].setAttribute("data-target", `#${i-1}`);
        }
      }, 500
    );
  }

}
