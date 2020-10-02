[Return to Calculator Function List](./calculator.md)

# multiply ( a:number, b:number )

This function takes two numbers (a, b) and multiplies them if they're between 0 and 100 (inclusive).

## Parameters

  - `a:number` Must be between 0 - 100
  - `b:number` Must be between 0 - 100

## Usage

Multiple two values.

Example 1: In Range Values
```javascript
import { multiply } from './calculator/multiply';

const result = multiply(1, 3);
console.log(result); // result: 3
```

Values outside of 0 through 100 will throw an error.

Example 2: Out Of Range Values
```javascript
import { multiply } from './calculator/multiply';

const result = multiply(-1, 3); // throws: RangeError
console.log(result);
```

If you want to catch the error, use a try/catch

Example 3: Out Of Range Values with try/catch
```javascript
import { multiply } from './calculator/multiply';

try {
    const result = multiply(-1, 3); // throws: RangeError
    console.log(result);
} catch (error) {
    console.log(error); // result: RangeError
}
```

## Returns

Returns `number` equal to `a * b`.

## Throws

When a or b is either below 0 or above 100, throws a `RangeError`.