const botsData = require("../src/botsData");
const shuffle = require("../src/shuffle");

describe("group of tests for shuffle function", () => {
test('shuffled array is same size as initial array', ()=>{
  expect(shuffle(botsData).size).toEqual(botsData.size) 
})
})
test('shuffle function actually shuffles the array',()=>{
  expect(shuffle(botsData)).toEqual(botsData)
})
