import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';
import { AbductorsComponent } from './abductors/abductors.component';
import { HipAbductionMachineComponent } from './hip-abduction-machine/hip-abduction-machine.component';
import { ShopCardComponent } from './shop-card/shop-card.component';
import { CableHipAbductionComponent } from './cable-hip-abduction/cable-hip-abduction.component';
import { AbsComponent } from './abs/abs.component';
import { LyingFloorLegRaiseComponent } from './lying-floor-leg-raise/lying-floor-leg-raise.component';
import { WeightedCrunchComponent } from './weighted-crunch/weighted-crunch.component';
import { SitUpComponent } from './sit-up/sit-up.component';
import { RegistrationComponent } from './registration/registration.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'exercise', component: ExerciseComponent },
  { path: 'login', component: LoginComponent },
  { path: 'shop', component: ShopComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'abductors', component: AbductorsComponent },
  { path: 'hipAbductionMachineComponent', component: HipAbductionMachineComponent },
  { path: 'shopCard', component: ShopCardComponent },
  { path: 'cableHipAbductionComponent', component: CableHipAbductionComponent },
  { path: 'abs', component: AbsComponent },
  { path: 'lyingFloorLegRaiseComponent', component: LyingFloorLegRaiseComponent },
  { path: 'weightedCrunchComponent', component: WeightedCrunchComponent },
  { path: 'sitUpComponent', component: SitUpComponent },
  { path: 'registration', component: RegistrationComponent },



];
