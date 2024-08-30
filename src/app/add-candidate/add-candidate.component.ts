import { Component, Output, EventEmitter, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CandidateService } from '../services/candidate.service';
import { Candidate } from '../models/candidate.model';

@Component({
  selector: 'app-add-candidate',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-candidate.component.html',
  styleUrl: './add-candidate.component.css'
})
export class AddCandidateComponent {

  @Output() close = new EventEmitter<void>();
  private candidateService = inject(CandidateService);

  candidate:Candidate = {
    candidateId:0,
    name: '',
    coreSkill: '',
    experience: 0,
    gender: '',
    status: 'pending'
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Value:', this.candidate);
      this.candidateService.addCandidate(this.candidate);
      
      this.closeModal();
    }
  }

  closeModal() {
    
    this.close.emit();
  }
}

