function foo(a, b) {
  return Number(a) + Number(b);
}

console.log(foo(1, '2')); // Output: 3

// Explicitly converting to numbers before addition ensures the correct result.