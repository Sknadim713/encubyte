import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  constructor() { }

  add(numbers: string): number {
    console.log(numbers);

    if (!numbers) {
      return 0;
    }
    return 0;
  }
}
