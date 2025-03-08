import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
//import { CardComponent } from './card/card.component';
import { PromptComponent } from './prompt/prompt.component';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [NavbarComponent, /*CardComponent*/ PromptComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FL-AI';
  viaggi: { localita: string; durata: string; albergo: string; costo: number; }[] = [];

  riceviPrompt(prompt: string) {
    console.log("Prompt ricevuto:", prompt);
    //inviare prompt al service
  }
}
