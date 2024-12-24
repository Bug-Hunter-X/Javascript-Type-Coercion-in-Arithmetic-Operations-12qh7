function foo(a, b) {
  return a + b;
}

console.log(foo(1, '2')); // Output: "12"

// This is unexpected behavior if you were expecting 3.  Javascript performs string concatenation when at least one operand is a string.