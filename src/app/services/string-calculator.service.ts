import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  constructor() { }

  add(numbers: string): number {
    if (!numbers) {
      return 0;
    }

    const numArray = numbers.split(',');
    const sum = numArray.reduce((acc, num) => acc + parseInt(num, 10), 0);
    console.log("check sum", sum);

    return sum;
  }

}
