import { Routes } from '@angular/router';
import { BlockComponent } from './block/block.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DirectivesComponent } from './directives/directives.component';
import { MyFormComponent } from './my-form/my-form.component';

export const routes: Routes = [
  { path: 'block', component: BlockComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'form', component: MyFormComponent },
];
