import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: '../app/app.component.html',
  styleUrls: ['../app/app.component.css']
})
export class AppComponent {
  title = 'FixIt';
  constructor(private route: ActivatedRoute, private router: Router){ }   

  goToMain(){
    this.router.navigate(['/index'])
  }
}
