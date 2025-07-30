import { Component } from '@angular/core';
import { Units } from './units';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  height: number = 0;
  weight: number = 0;
  bmi = 0;
  result = '';
  status: 'imperial' | 'metric' = 'imperial';
  units: Units = { height: 'in', weight: 'lb' };

  calculateBMI() {
    if (this.height <= 0 || this.weight <= 0) {
      this.bmi = -1;
      this.result = 'Invalid Input';
      return;
    }

    this.bmi = this.status === 'imperial'
      ? +(703 * this.weight / this.height ** 2).toFixed(2)
      : +(this.weight / (this.height / 100) ** 2).toFixed(2);

    this.setResult();
  }

  changeUnits() {
    const isImperial = this.units.height === 'in';
    this.status = isImperial ? 'metric' : 'imperial';
    this.units = isImperial
      ? { height: 'cm', weight: 'kg' }
      : { height: 'in', weight: 'lb' };
  }

  private setResult() {
    if (this.bmi < 18.5) this.result = 'Underweight';
    else if (this.bmi <= 24.9) this.result = 'Normal';
    else if (this.bmi <= 29.9) this.result = 'Overweight';
    else this.result = 'Obese';
  }
}
