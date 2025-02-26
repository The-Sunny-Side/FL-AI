import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
@Component({
  selector: 'app-root',
  imports: [NavbarComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FL-AI';
}
