# Getting Started > Error Types

## A short introduction to Error Types

C++ error types can be grouped as follows:

### 1. Compiler Errors

These occur when the C++ compiler cannot translate your source code into machine code. Common causes include syntax mistakes, undeclared variables, or type mismatches. The code will not compile until these errors are fixed.

### 2. Compiler Warnings

Warnings indicate potential issues in your code that may not stop compilation but could lead to bugs. For example, using an uninitialized variable or comparing signed and unsigned values. It's good practice to address warnings.

### 3. Linker Errors

After successful compilation, the linker combines object files. Linker errors happen if it can't find definitions for functions or variables you declared, such as missing implementations or incorrect library references.

### 4. Runtime Errors

These occur while your program is running. Examples include dividing by zero, accessing invalid memory, or file I/O failures. They often cause the program to crash or behave unexpectedly.

### 5. Logic Error

Logic errors are mistakes in the program's design. The code compiles and runs, but the output is incorrect due to flawed logic (e.g., using the wrong formula or loop condition). These are often the hardest to detect.
