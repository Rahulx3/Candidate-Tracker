import { Routes } from '@angular/router';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { CandidateHomeComponent } from './candidate-home/candidate-home.component';
import { DeleteCandidateComponent } from './delete-candidate/delete-candidate.component';

export const routes: Routes = [
    { path: '', component: CandidateHomeComponent },
    { path: 'candidates/:id', component: CandidateDetailsComponent },
    {path: 'candidates/:id/delete',component:DeleteCandidateComponent}
]