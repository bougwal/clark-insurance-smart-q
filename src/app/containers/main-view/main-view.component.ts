import { Component, ElementRef, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  questions;

  constructor(private questionnaireService: HttpService, private el: ElementRef) {     
    this.questionnaireService.getQuestionnaire().subscribe(res =>{
      this.questions=res["questionnaire"]?.questions
    })
  }

  ngOnInit() {    
    this.el.nativeElement.addEventListener('scroll', ($event: any) => {
      this.onWindowScroll();
    })
  }

  onWindowScroll() {
    let questions = this.el.nativeElement.querySelectorAll('.page_wrapper');
    //we'll do some stuff here when the window is scrolled
    questions.forEach((question:any) => {
      var etop = question.getBoundingClientRect().top;
      var diff = etop - window.pageYOffset;
      if (diff<300) {
        this.reinitState(question, questions);
      }
    });
  }

  reinitState(question, questions) {
    questions.forEach(elem => {
      elem.classList.remove('focus');
    })
    question.classList.add('focus');
  }

  moveDownToNextQuestion(event) {  

    let node = event.destination ? document.getElementById(event.destination) : document.getElementById(event.question.identifier);

    this.el.nativeElement.scrollTo({
      left: 500, 
      top: event.destination ? node!.offsetTop : node!.offsetTop + 500  
    });

    if(event.destination) {
      node!.querySelector('input')!.focus();
    } else {
      node!.nextElementSibling!.querySelector('input')!.focus();
    }
  }
}
