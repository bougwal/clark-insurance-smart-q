import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-next-button',
  templateUrl: './next-button.component.html',
  styleUrls: ['./next-button.component.css']
})
export class NextButtonComponent implements OnInit {

  @Output()
  nextButton = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  next(){
    this.nextButton.emit();
  }

}
