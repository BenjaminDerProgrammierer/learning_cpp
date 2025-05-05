# Getting Started > Error Types > Linker Errors

## Overview

This example demonstrates a common linker error in C++. Linker errors occur after successful compilation, during the linking phase when the linker tries to combine object files but encounters issues with resolving references.

## Code Example

```cpp
#include <iostream>

extern int x;

int main() {
    
    std::cout << "Hello world" << std::endl;
    
    std::cout << x;
    
    return 0;
}
```

## Error Explanation

The error in this code is using the external variable `x` without providing its definition anywhere. The `extern int x;` line declares that the variable exists somewhere (in another file or translation unit), but the linker cannot find the actual definition of `x` when attempting to create the executable.

When you try to build this program, the compilation step will succeed, but the linking step will fail with an error message similar to:

```plaintext
undefined reference to 'x'
```

This is a classic linker error because the problem isn't in the syntax or grammar of the code (which the compiler checks), but in resolving references between different parts of the program (which the linker handles).

## How to Fix

To fix this linker error, you need to provide a definition for the external variable `x`. This could be done in several ways:

1. Define the variable in the same file:

   ```cpp
   #include <iostream>
   
   int x = 42; // Definition of x
   
   int main() {
       std::cout << "Hello world" << std::endl;
       std::cout << x;
       return 0;
   }
   ```

2. Create another source file with the definition and compile them together:

   ```cpp
   // In a file named x.cpp
   int x = 42;
   
   // Then compile with: g++ main.cpp x.cpp -o program
   ```

## Key Characteristics of Linker Errors

1. Occur during the linking phase, after successful compilation
2. Often related to missing definitions for declared symbols (variables, functions, classes)
3. Can happen when using external libraries incorrectly
4. Common examples include undefined references, multiple definitions, or main function not found
5. Generally harder to debug than compiler errors as they involve relationships between multiple files
6. Error messages often include terms like "undefined reference," "unresolved external symbol," or "multiple definition"
7. The compiler typically doesn't catch these issues because each source file may be syntactically correct in isolation
