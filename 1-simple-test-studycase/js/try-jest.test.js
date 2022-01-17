const sum = require('./sum')
const cloneArr = require('./cloneArray')
const subtract = require('./subtract')

test('properly adds two numbers',()=>{
    expect(sum(1,2)).toBe(3)
})

test('properly clones array',()=>{
    const array = [1,2,3]
    // expect(cloneArr(array)).toBe(array) //error because same value in different place of memory
    expect(cloneArr(array)).not.toBe(array)
    expect(cloneArr(array)).toEqual(array)
})

test('properly subtracts two numbers',()=>{
    expect(subtract(1,2)).toBe(-1)
})