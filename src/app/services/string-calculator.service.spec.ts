import { TestBed } from '@angular/core/testing';
import { StringCalculatorService } from './string-calculator.service';

describe('Calculator Service', () => {
  let service: StringCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringCalculatorService);
  });

  it('should return 0 ', () => {
    expect(service.add('')).toEqual(0);
  });

  it('should return the number itself when one number is provided', () => {
    expect(service.add('1')).toEqual(1);
  });

  it('should return the sum of two comma-separated numbers', () => {
    expect(service.add('1,2')).toEqual(3);
  });

});
