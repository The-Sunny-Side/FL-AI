import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { PromptComponent } from './prompt/prompt.component';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [NavbarComponent, CardComponent, PromptComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FL-AI';
  viaggi: { localita: string; durata: string; albergo: string; costo: number; }[] = [];

  riceviPrompt(prompt: string) {
    
    // risposta simulata(integrare chatgpt)
    this.viaggi = [
      {
        localita: 'Tenerife',
        durata: '4 giorni',
        albergo: 'Bungalow Beach Resort',
        costo: 390
      },
      {
        localita: 'Palma di Maiorca',
        durata: '5 giorni',
        albergo: 'Sunset Hotel',
        costo: 450
      }
    ];
  }
}
