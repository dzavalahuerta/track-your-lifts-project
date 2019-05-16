import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ExerciseLogComponent } from './exercise-log/exercise-log.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SignupComponent } from './authorization/signup/signup.component';
import { SigninComponent } from './authorization/signin/signin.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CrossComponentCommunicationService } from './services/cross-component-communication.service';
import { AuthorizationService } from './services/authorization.service';
import { ServerService } from './services/server.service';
import { ExerciseLogDataService } from './services/exercise-log-data.service';
import { NewUserPageComponent } from './new-user-page/new-user-page.component';

const appRoutes = [
  { path: '', component: HomePageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'newuser', component: NewUserPageComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ExerciseLogComponent,
    NavigationBarComponent,
    SignupComponent,
    SigninComponent,
    HomePageComponent,
    NewUserPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CrossComponentCommunicationService, AuthorizationService, ServerService, ExerciseLogDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
