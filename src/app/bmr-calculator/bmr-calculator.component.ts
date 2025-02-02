import { Component } from '@angular/core';

@Component({
  selector: 'app-bmr-calculator',
  templateUrl: './bmr-calculator.component.html',
  styleUrls: ['./bmr-calculator.component.scss'],
})
export class BmrCalculatorComponent {
  gender: string = '';
  weight: number = 0; // in kg
  height: number = 0; // in cm
  age: number = 0; // in years
  bmr: number | null = null;
  tdee: { [key: string]: number } | null = null; // Activity level values

  calculateBMR() {
    if (this.gender && this.weight > 0 && this.height > 0 && this.age > 0) {
      if (this.gender === 'male') {
        this.bmr =
          10 * this.weight + 6.25 * this.height - 5 * this.age + 5;
      } else if (this.gender === 'female') {
        this.bmr =
          10 * this.weight + 6.25 * this.height - 5 * this.age - 161;
      }

      if (this.bmr) {
        this.tdee = {
          Sedentary: Math.round(this.bmr * 1.2),
          'Light Exercise': Math.round(this.bmr * 1.375),
          'Moderate Exercise': Math.round(this.bmr * 1.55),
          'Heavy Exercise': Math.round(this.bmr * 1.725),
          Athlete: Math.round(this.bmr * 1.9),
        };
      }
    } else {
      alert('Please fill in all fields correctly!');
    }
  }

  getTdeeKeys(): string[] {
    return this.tdee ? Object.keys(this.tdee) : [];
  }
}
