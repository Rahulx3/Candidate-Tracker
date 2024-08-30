// candidate.service.ts
import { Injectable } from '@angular/core';
import { Candidate } from '../models/candidate.model'  


@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private candidates: Candidate[] = [
    { candidateId: 1, name: 'Alice Smith', coreSkill: 'Full Stack', experience: 5, gender: 'Female', status: 'Selected' },
    { candidateId: 2, name: 'Bob Johnson', coreSkill: 'Power BI', experience: 3, gender: 'Male', status: 'Pending' },
    { candidateId: 3, name: 'Carol White', coreSkill: 'Data Engineering', experience: 7, gender: 'Female', status: 'Rejected' },
    { candidateId: 4, name: 'David Lee', coreSkill: 'UI/UX', experience: 2, gender: 'Male', status: 'Selected' },
    { candidateId: 5, name: 'Eve Brown', coreSkill: 'Full Stack', experience: 6, gender: 'Female', status: 'Pending' },
    { candidateId: 6, name: 'Frank Black', coreSkill: 'Data Engineering', experience: 4, gender: 'Male', status: 'Rejected' }
  ];

  constructor() {}

  // Method to get all candidates
  getCandidates(): Candidate[] {
    return this.candidates;
  }

  // Method to get a candidate by ID
  getCandidateById(id: number): Candidate | undefined {
    return this.candidates.find(candidate => candidate.candidateId === id);
  }

  // Method to add a new candidate
  addCandidate(candidate: Candidate): void {
    candidate.candidateId =this.candidates.length + 1
    this.candidates.push(candidate);
    console.log('Candidate added:', candidate);
  }

  // Method to update a candidate's status by ID
  updateCandidateStatus(id: number, status: string): void {
    const candidate = this.getCandidateById(id);
    if (candidate) {
      candidate.status = status;
    }
  }
}
