import { Component } from '@angular/core';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
Teams: any;
desc:string=`We are a programming courses company that offers high-quality
education and training in various programming languages, frameworks,
and tools. Our experienced instructors provide hands-on learning
and real-world applications in an engaging and supportive environment,
helping students develop the skills they need to succeed in the programming industry.`
constructor(private heroService:HeroService){}
  ngOnInit(): void {
    this.heroService.getAll("Teams").subscribe({
      next : (response)=>{this.Teams=response},
      error : (myError)=> {console.log(myError)},
      
     });
     
  }
}
