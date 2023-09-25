//mkdir __tests__
//npm install typescript jest @types/jest ts-jest
//npx ts-jest config:init
//npx jest



import { Adder, StoringAdder } from "../liides1a";

test('test1', () => {
    let adder = new StoringAdder();
    expect(adder.getSum()).toBe(0);
    adder.add(3);
    expect(adder.getSum()).toBe(3);
    adder.add(5);
    expect(adder.getSum()).toBe(8);
});