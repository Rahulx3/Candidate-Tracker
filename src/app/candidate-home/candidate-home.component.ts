import { Component } from '@angular/core';
import { FiltersComponent } from '../filters/filters.component';
import { CandidateListComponent } from '../candidate-list/candidate-list.component';

@Component({
  selector: 'app-candidate-home',
  standalone: true,
  imports: [FiltersComponent,CandidateListComponent],
  templateUrl: './candidate-home.component.html',
  styleUrl: './candidate-home.component.css'
})
export class CandidateHomeComponent {

}
