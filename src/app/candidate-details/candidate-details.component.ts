import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidateService } from '../services/candidate.service';
import { Candidate } from '../models/candidate.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-candidate-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class CandidateDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute); // Inject ActivatedRoute to get route parameters
  private candidateService = inject(CandidateService); // Inject CandidateService to fetch data
  candidate: Candidate | undefined; // Use Candidate interface

  ngOnInit(): void {
    // Get the candidate ID from the route parameters
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.candidate = this.candidateService.getCandidates().find(candidate => candidate.candidateId === id);
    }
  }
}
