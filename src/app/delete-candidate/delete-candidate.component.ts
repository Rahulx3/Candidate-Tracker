import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-candidate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-candidate.component.html',
  styleUrls: ['./delete-candidate.component.css']
})
export class DeleteCandidateComponent {
  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
  
  showOverlay = true; // Show the overlay by default

  onConfirm() {
    this.confirm.emit(); // Emit confirm event
    this.hideOverlay();
  }

  onCancel() {
    this.cancel.emit(); // Emit cancel event
    this.hideOverlay();
  }

  private hideOverlay() {
    this.showOverlay = false; // Hide the overlay
  }
}
