// for async functions
import "@babel/polyfill";
require("@babel/polyfill");

import { handleSubmit, postData } from './formHandler';

describe('the handleSubmit function', () => {
  test('should exist', async () => {
    expect(handleSubmit).toBeDefined();
  });
  test('should be a function', async () => {
    expect(typeof handleSubmit).toBe('function');
  });
});

describe('the postData function', () => {
  test('should exist', async () => {
    expect(postData).toBeDefined();
  });
  test('should be a function', async () => {
    expect(typeof postData).toBe('function');
  });
});
