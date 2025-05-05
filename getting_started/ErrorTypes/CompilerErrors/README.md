# Getting Started > Error Types > Compiler Errors

## Overview

This example demonstrates a common compiler error in C++. Compiler errors occur during the compilation phase when the compiler tries to translate your source code into machine code but encounters issues that prevent it from doing so.

## Code Example

```cpp
#include <iostream>

int main() 
{
    std::cout << ("Hello world" / 125)  << std::endl;
    return 0;
}
```

## Error Explanation

The error in this code is attempting to divide a string (`"Hello world"`) by an integer (`125`). In C++, you cannot perform arithmetic operations on strings, as they are not numeric types.

When you try to compile this code, you'll get an error message similar to:

```plaintext
error: invalid operands of types 'const char*' and 'int' to binary 'operator/'
```

This is a typical compiler error because it violates C++'s type system rules. The compiler catches this issue during the compilation phase, before the program can even be built.

## How to Fix

To fix this error, you would need to use appropriate operations for the given types. If you wanted to output text and a number, you could:

```cpp
#include <iostream>

int main() 
{
    std::cout << "Hello world " << 125 << std::endl;
    return 0;
}
```

## Key Characteristics of Compiler Errors

1. Detected during the compilation phase
2. Must be fixed before the program can be built or run
3. Often related to syntax errors, type mismatches, or undeclared identifiers
4. The compiler typically provides the line number and a description of the error
5. The program cannot be executed until all compiler errors are resolved
