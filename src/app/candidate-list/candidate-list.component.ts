import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteCandidateComponent } from '../delete-candidate/delete-candidate.component';
import { CandidateService } from '../services/candidate.service';
import { Candidate } from '../models/candidate.model'; 

@Component({
  selector: 'app-candidate-list',
  standalone: true,
  imports: [CommonModule, DeleteCandidateComponent],
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class CandidateListComponent implements OnInit {
  public router = inject(Router);
  private candidateService = inject(CandidateService); // Inject the service
  candidates: Candidate[] = []; // Use the Candidate interface

  constructor() {}

  ngOnInit(): void {
    this.candidates = this.candidateService.getCandidates(); // Get candidates from the service
  }

  editCandidate(candidate: Candidate) {
    console.log('Editing candidate:', candidate);
    // Implement edit logic here
  }

  deleteCandidate(candidate: Candidate) {
    this.router.navigate([`/candidates/${candidate.candidateId}/delete`]);
    
  }

  viewDetails(candidate: Candidate) {
    this.router.navigate([`/candidates/${candidate.candidateId}`]);
  }
}


