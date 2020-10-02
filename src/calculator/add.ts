export function add(a: number, b: number): number {
    // we're only going to multiple numbers between 0 and 100
    if (a < 0 || b < 0 || a > 100 || b > 100) {
        throw new RangeError("Numbers passed in must be between 0 and 100");
    }

    // we can write our code here
    return a + b;
}
