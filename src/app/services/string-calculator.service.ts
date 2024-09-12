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

    let delimiter = ',';
    if (numbers.startsWith('//')) {
      const parts = numbers.split('\n');
      delimiter = parts[0].substring(2);
      numbers = parts[1];
      console.log(numbers);

    }
    const numArray = numbers.split(new RegExp(`[${delimiter}\n,]`));
    const negativeNumbers = numArray.filter(num => parseInt(num, 10) < 0);

    if (negativeNumbers.length) {
      throw new Error(`negative no  not allowed ${negativeNumbers.join(',')}`);
    }

    return numArray.reduce((acc, num) => acc + parseInt(num, 10), 0);
  }



}
