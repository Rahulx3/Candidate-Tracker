import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-candidate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-candidate.component.html',
  styleUrls: ['./delete-candidate.component.css']
})
export class DeleteCandidateComponent {
  @Input() candidateId:number;
  @Output() confirmDelete = new EventEmitter<number>();
  @Output() cancel = new EventEmitter<void>();

  confirmDeleteAction() {
    this.confirmDelete.emit(this.candidateId); 
  }
  cancelAction() {
    this.cancel.emit();
  }

 


}
