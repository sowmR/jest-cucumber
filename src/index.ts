export type Numbers = {
    number1: number;
    number2: number
}

export const inRange= (num:number) => {
    return num>=0 && num<=100;
}
export const add2Num = (num: Numbers) => {
    return num.number1+ num.number2; 
}
export const add2Numbers =(n1:number, n2:number) => {
    return n1+n2;
}

export const sum = (...a: number[]) =>
  a.reduce((acc, val) => acc + val, 0);