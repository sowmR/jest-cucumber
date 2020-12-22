import { defineFeature, loadFeature } from 'jest-cucumber';
import {add2Num, Numbers} from '../../index';
const feature = loadFeature('src/tests/features/sum.feature');

defineFeature(feature, (test) => {
    let numbers: Numbers;
    let n1: number;
    let n2: number;
    let result: number;
    beforeEach(() => {
        result = 0;
    });
    test('sum of two numbers', ({ given, when, then }) => {
        given('I want o add twqo numbers', ()=>{
            
        });
        when(/^n1 is (.*), n2 is (.*) and called add function$/,(number1, number2)=>{
            numbers = {
                number1: Number(number1),
                number2: Number(number2)
            };
            console.log(number1, number2);
            result = add2Num(numbers);
            console.log(result);
        });
        then(/^I should be return (.*)$/,(answer)=>{
            expect(result.toString()).toBe(answer);
        });
    });
  });