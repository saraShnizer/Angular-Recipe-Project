import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { cibGoogle, cibInstagram, cibTwitter,cibLinkedin,cibGithub,cibFacebook} from '@coreui/icons';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule,RouterModule,IconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  
  constructor(private route: Router,public iconSet: IconSetService) {
    {
      iconSet.icons = { cibGoogle, cibInstagram, cibTwitter,cibLinkedin,cibGithub,cibFacebook };
    }
    
  }

}




