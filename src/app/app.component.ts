import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { COLORS } from './utils/constants/colors';
import { FONT } from './utils/constants/font';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FL-AI';

  constructor() {
    //colors
    document.documentElement.style.setProperty('--azzurro', COLORS.AZZURRO);
    document.documentElement.style.setProperty('--arancione', COLORS.ARANCIONE);
    //fonts
    document.documentElement.style.setProperty('--font-size-logo', FONT.FONT_SIZE_LOGO);

  }
}
