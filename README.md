# Javascript Type Coercion Bug

This repository demonstrates a common Javascript bug related to type coercion in arithmetic operations. When adding a number and a string, Javascript performs string concatenation instead of numerical addition.  This can lead to unexpected results if not handled carefully.

## Bug

The `foo` function attempts to add a number and a string.  The expected result is a numerical sum. However, due to type coercion, Javascript treats the operation as string concatenation.

## Solution

The solution involves explicitly converting both operands to numbers before performing the addition. This ensures that the numerical addition operation is performed as expected.