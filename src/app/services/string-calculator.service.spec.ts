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

  it(' one number is provided', () => {
    expect(service.add('1')).toEqual(1);
  });

  it('two comma-separated numbers', () => {
    expect(service.add('1,2')).toEqual(3);
  });
  it(' lines between numbers', () => {
    expect(service.add('1\n2,3')).toEqual(6);
  });

  it('delimiters', () => {
    expect(service.add('//;\n1;2')).toEqual(3);
  });

  it(' negative numbers', () => {
    expect(() => service.add('1,-2')).toThrowError('negative numbers not allowed -2');
  });

  it(' negative numbers exception', () => {
    expect(() => service.add('1,-2,-3')).toThrowError('negative numbers not allowed -2,-3');
  });


});
