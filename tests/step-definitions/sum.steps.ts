import { defineFeature, loadFeature } from 'jest-cucumber';
import {add2Num, Numbers,add2Numbers} from '../../src/index';
const feature = loadFeature('tests/features/sum.feature');

defineFeature(feature, (test) => {
    let numbers: Numbers;
    let n1: number;
    let n2: number;
    let result: number;
    beforeEach(() => {
        result = 0;
    });
    test('scenario1', ({ given, when, then }) => {
        given('I want o add two numbers', ()=>{
            
        });
        when(/^n1 is (.*), n2 is (.*) and called add function$/,(number1, number2)=>{
            numbers = {
                number1: Number(number1),
                number2: Number(number2)
            };
            console.log(number1, number2);
            result = add2Num(numbers);
        });
        then(/^I should be return (.*)$/,(answer)=>{
            expect(result.toString()).toBe(answer);
        });
    });
    test('scenario2', ({ given, when, then }) => {
        given('I have two numbers', ()=>{});
        when('when add function is called with 2 and 3',function(){
            result = add2Numbers(2,3);
        });
        then('I should be return 5',()=>{
            expect(result).toBe(5);
        });
    });
  });