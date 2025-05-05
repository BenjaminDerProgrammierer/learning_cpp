<!-- filepath: /home/benjamin/Documents/coding/learning_cpp/getting_started/ErrorTypes/CompilerWarnings/README.md -->
# Getting Started > Error Types > Compiler Warnings

## Overview

This example demonstrates a common compiler warning in C++. Compiler warnings indicate potential issues in your code that may not prevent compilation but could lead to unexpected behavior or bugs during execution.

## Code Example

```cpp
#include <iostream>

int main() {
    
    int favorite_number;
    
    std::cout << "Hello world" << std::endl;
    return 0;
}
```

## Warning Explanation

The warning in this code is that the variable `favorite_number` is declared but never used. This doesn't break any language rules, so the compiler can still produce valid executable code, but it indicates a potential issue:

1. You might have forgotten to use the variable as intended
2. The unused variable takes up memory space unnecessarily
3. It can make code harder to read and maintain

When compiling with warnings enabled (e.g., with `-Wall` flag in g++), you'll see a warning message similar to:

```plaintext
warning: unused variable 'favorite_number'
```

## How to Fix

To fix this warning, either:

1. Use the variable in your code:

   ```cpp
   int favorite_number = 42;
   std::cout << "My favorite number is: " << favorite_number << std::endl;
   ```

2. Remove the unused variable declaration:

   ```cpp
   int main() {
       std::cout << "Hello world" << std::endl;
       return 0;
   }
   ```

## Key Characteristics of Compiler Warnings

1. Allow compilation to complete successfully (unlike compiler errors)
2. Alert you to potential problems or poor coding practices
3. Can often be enabled/disabled or configured with compiler flags
4. Should generally be fixed to maintain clean, robust code
5. In some development environments, warnings can be treated as errors using flags like `-Werror`
6. Common warnings include unused variables, implicit type conversions that might lose data, and using deprecated functions
