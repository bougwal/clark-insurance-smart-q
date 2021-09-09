import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-one-option',
  templateUrl: './one-option.component.html',
  styleUrls: ['./one-option.component.css']
})
export class OneOptionComponent implements OnInit {

  @Output() moveDown = new EventEmitter<any>()
  @Input() question!: any;
  selectedOption: any
  choices = [
    {
      "label": "Meine Familie mit Kindern",
      "value": "Meine Familie mit Kindern",
      "selected": false
    },
    {
      "label": "Meine Familie ohne Kinder",
      "value": "Meine Familie ohne Kinder",
      "selected": false
    },
    {
      "label": "Mich ohne Kind",
      "value": "Mich ohne Kind",
      "selected": false
    },
    {
      "label": "Mich mit Kind",
      "value": "Mich mit Kind",
      "selected": false
    },
    {
      "label": "Mich und meinen Lebenspartner",
      "value": "Mich und meinen Lebenspartner",
      "selected": false
    }
  ]



  constructor() { }

  ngOnInit(): void {
  }

  moveDownToNextQuestion(){
    let jumps = this.question.jumps; 
    let dest; 

    if(jumps.length >0){
      jumps.forEach((jump: any) => {
        if(jump.condition[0].value === this.selectedOption){
          dest = jump.destination.id
        }
        
      });
    }
    this.moveDown.emit({
      question: this.question, 
      destination: dest
    })
  }

}
