import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeadersComponent } from './headers/headers.component';
import { FiltersComponent } from './filters/filters.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { FooterComponent } from './footer/footer.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { CommonModule } from '@angular/common';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeadersComponent,FiltersComponent,CandidateListComponent,FooterComponent,AddCandidateComponent,CommonModule,CandidateDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Candidate-Tracker';
  showModal = false;

  toggleModal() {
    this.showModal = true;
  }
  closeModal()
  {
    this.showModal= false;
  }
}
