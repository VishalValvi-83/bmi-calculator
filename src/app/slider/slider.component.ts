import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  status: boolean = false;

  @Input() value_1: string = 'value_1';
  @Input() value_2: string = 'value_2';

  toggleUnits() {
    this.status = !this.status;
    this.units.emit(this.status);
  }

  @Output() units = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}
}
