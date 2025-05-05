# Getting Started > Chapter 1 Challenge

## Task

Create a C++ program that asks the user for their favorite number between 1 and 100
then read this number from the console.

Suppose the user enters 24.

Then display the following to the console:

```plaintext
Amazing!! That's my favorite number too!
No really!!, 24 is my favorite number!
```

Below are 2 sample runs of the program:

```plaintext
Enter your favorite number between 1 and 100: 24
Amazing!! That's my favorite number too!
No really!!, 24 is my favorite number!
```

```plaintext
Enter your favorite number between 1 and 100: 75
Amazing!! That's my favorite number too!
No really!!, 75 is my favorite number!
```

## Overview

This program demonstrates user input and output in C++. It asks the user to enter their favorite number between 1 and 100, then responds with a friendly message confirming that it's also the program's favorite number.

## Code Explanation

```cpp
#include <iostream>  // Includes the input/output stream library

int main() {  // The main function, entry point of the program
    std::cout << "Enter your favorite number between 1 and 100: ";  // Prompts the user
    int favoriteNumber;  // Declares an integer variable to store the number
    std::cin >> favoriteNumber;  // Reads user input into the variable
    std::cout << "Amazing!! That's my favourite number too!" << std::endl;  // First response
    std::cout << "No really!!, " << favoriteNumber << " is my favourite number!" << std::endl;  // Second response including the entered number
}
```

## Expected Output

```plaintext
Enter your favorite number between 1 and 100: 42
Amazing!! That's my favourite number too!
No really!!, 42 is my favourite number!
```

Note: The exact output will vary based on the number you enter.

## Concepts Demonstrated

- Variable declaration and initialization
- User input with `std::cin`
- String output with `std::cout`
- Using variables in output statements
- Multi-line output with `std::endl`
