import { TestBed } from '@angular/core/testing';

import { ExerciseLogDataService } from './exercise-log-data.service';

describe('ExerciseLogDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExerciseLogDataService = TestBed.get(ExerciseLogDataService);
    expect(service).toBeTruthy();
  });
});
