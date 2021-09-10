import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-many-options',
  templateUrl: './many-options.component.html',
  styleUrls: ['./many-options.component.css']
})
export class ManyOptionsComponent implements OnInit {

  @Output() moveDown = new EventEmitter<any>()

  @Input() question!: any; 
  selectedOptions: any[] = []; 
  constructor() { }

  ngOnInit(): void {
  }

  addOptions(option:any) {
    if(this.selectedOptions.indexOf(option) == -1) {
      this.selectedOptions.push(option);
    }
  }

  moveDownToNextQuestion(){
    this.moveDown.emit({
      question: this.question, 
      destination: ''
    })
  }



}
