import { Component, HostListener } from '@angular/core';
import { NavBlankComponent } from "../../componets/nav-blank/nav-blank.component";
import { FooterComponent } from "../../componets/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [NavBlankComponent, FooterComponent,RouterOutlet],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.scss'
})
export class BlankLayoutComponent {

  showbutton: boolean = false;
  toTop(): void {
    scrollTo(0, 0);
  }
  @HostListener('window:scroll')
  scrollToTop() {
    let scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop);
    if (scrollTop > 500) {
      this.showbutton = true;
    } else {
      this.showbutton = false;
    }
  }

  
}
