import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  @Output() moveDown = new EventEmitter<any>()
  @Input() question!: any;
  answerIsAvailable!:any; 

  constructor() { }

  ngOnInit(): void {
  }

  onPressEnter(event) {
    if(event.keyCode == 13) {
      this.moveDownToNextQuestion();
    }
  }

  moveDownToNextQuestion(){
    this.moveDown.emit({
      question: this.question, 
      destination: ''
    })
  }

}
