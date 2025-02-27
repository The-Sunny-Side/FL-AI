import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-prompt',
  standalone: true, 
  imports: [FormsModule], 
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css']
})
export class PromptComponent {
  userPrompt: string = '';

  @Output() onPromptSubmit = new EventEmitter<string>();

  generaViaggi() {
    if (this.userPrompt.trim()) {
      this.onPromptSubmit.emit(this.userPrompt);
    }
  }
}