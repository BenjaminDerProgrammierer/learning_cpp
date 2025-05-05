# Getting Started > Input String

## Overview

This program demonstrates basic user input in C++. It asks the user to enter their favorite number, then responds with a friendly message.

## Code Explanation

```cpp
#include <iostream>  // Includes the input/output stream library

int main() {  // The main function, entry point of the program
    int favourite_number;  // Declares an integer variable to store the number
    std::cout << "Enter your favourite number between 1 and 100: ";  // Prompts the user
    std::cin >> favourite_number;  // Reads user input into the variable
    std::cout << "Amazing! That's my favourite number too!" << std::endl;  // response
    return 0;  // Returns 0 to indicate successful execution
}
```

## Expected Output

```plaintext
Enter your favourite number between 1 and 100: 42
Amazing! That's my favourite number too!
```

Note: The exact output will vary based on the number you enter.

## Concepts Demonstrated

- Variable declaration
- User input with `std::cin`
- String output with `std::cout`
- Basic variable manipulation
