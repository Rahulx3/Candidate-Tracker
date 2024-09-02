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
  deleteModal:boolean=false;
  selectedCandidateId:number|null;

  constructor() {}

  ngOnInit(): void {
    this.candidates = this.candidateService.getCandidates(); // Get candidates from the service
  }

  editCandidate(candidate: Candidate) {
    console.log('Editing candidate:', candidate);
    // Implement edit logic here
  }

  deleteCandidate(candidateId:number) {
    this.deleteModal=true;
    this.selectedCandidateId= candidateId;
  }

  viewDetails(candidate: Candidate) {
    this.router.navigate([`/candidates/${candidate.candidateId}`]);
  }
  deleteCandidateById(candidateId: number | null) {
    if (candidateId !== null) {
      this.candidates = this.candidates.filter(candidate => candidate.candidateId !== candidateId);
    }
    this.deleteModal = false;
  }
  handleCancel() {
    this.deleteModal = false;
    this.selectedCandidateId = null;
  }
}


