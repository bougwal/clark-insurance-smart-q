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

  constructor() { }

  ngOnInit(): void {
  }

  moveDownToNextQuestion(){
    let jumps = this.question.jumps; 
    let dest; 

    if(jumps.length >0){
      jumps.forEach((jump: any) => {
        if(jump.conditions[0].value === this.selectedOption){
          dest = jump.destination.id
        }
        
      });
    }
    this.moveDown.emit({
      question: this.question, 
      destination: dest || ''
    })
  }

}
