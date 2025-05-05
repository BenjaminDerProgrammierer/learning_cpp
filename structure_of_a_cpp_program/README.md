# The Structure of a C++ Program

## Keywords

In C++, keywords are reserved words that have special meaning in the language. They cannot be used as identifiers (names for variables, functions, etc.). C++ has ~90 keywords. Java has ~50, C has 32 and Python has 33.

Some of the most common keywords in C++ include:

* `int`: Used to declare integer variables.
* `include`: Used to include header files.
* `return`: Used to return a value from a function.

## Identifiers

Identifiers are names given to entities such as variables, functions, arrays, classes, etc. They are used to identify a particular entity in the program. Identifiers can be of any length and can consist of letters (both uppercase and lowercase), digits, and underscores. However, they must start with a letter or an underscore. Identifyiers were named by programmers and are not reserved words in the language.

## Operators

Operators are symbols that tell the compiler to perform specific mathematical or logical manipulations. C++ has a rich set of operators, including:

* Arithmetic operators: `+`, `-`, `*`, `/`, `%`
* Scope resolution operator: `::`
* Stream insertion operator: `<<`
* Stream extraction operator: `>>`

## Punctuation

Punctuation marks are symbols that have special meaning in C++. They are used to separate statements, define the structure of the program, and indicate the end of a statement. Some common punctuation marks in C++ include:

* Semicolon `;`: Used to terminate a statement.
* Comma `,`: Used to separate items in a list.
* Parentheses `()`: Used to group expressions and define function parameters.
* Curly braces `{}`: Used to define the body of functions, loops, and conditionals.
* Square brackets `[]`: Used to define arrays and access array elements.

## All of the above: Syntax

Syntax refers to the set of rules that defines the combinations of symbols that are considered to be correctly structured programs in a language. In C++, syntax includes the rules for writing keywords, identifiers, operators, and punctuation marks. It is important to follow the correct syntax in order to avoid compilation errors and ensure that the program behaves as expected.

## The preprocessor and the preprocessor directives

The preprocessor is a tool that processes the source code before it is compiled. It performs various tasks such as file inclusion, macro substitution, and conditional compilation. Preprocessor directives are special instructions that are processed by the preprocessor. They begin with a `#` symbol and are not part of the C++ language itself. Some common preprocessor directives include:

* `#include`: Used to include header files.
* `#define`, `#undef`: Used to define macros.
* `#if`, `#elif`, `#else`, `#endif`: Used for conditional compilation.
* `#ifdef`, `#ifndef`: Used to check if a macro is defined or not.
* `#pragma`: Used to provide additional information to the compiler.
* `#error`: Used to generate a compilation error with a custom message.
* `#line`: Used to change the current line number and filename for error messages.

## Comments

C++ supports two types of comments:

* Single-line comments: Start with `//` and continue to the end of the line.
* Multi-line comments: Start with `/*` and end with `*/`. They can span multiple lines.

Comments are ignored by the compiler and are used to provide explanations or notes within the code. They are useful for documenting the code and making it more readable to a human reader. A program should be written clear without comments, but comments can help clarify the code for others (or yourself) when you come back to it later.

Here is an example of a C++ program with comments:

```cpp
/***************************************************** // <-- This is a header comment, in here will be the author, date, description, license, etc.
 * author Frank
 * 
 * 11/11/2017  Frank - fixed bug in ... // <-- Do not use version control comments like this, use a version control system like git or subversion instead
 * 11/13/2017 Joe - Added function to...
 * 
 ****************************************************/

#include <iostream>

// This is a comment

/* This is a multiple
        line
         comment
*/

// Using a modified version Dijkstra's algorithm to improve space efficiency // <-- Good use of comments

int main()
{    
    int favorite_number;  // this is where my favorite number is stored

    std::cout << "Enter your favorite number between 1 and 100: ";

    std::cin >> favorite_number;    /* comment */ // <-- Keep your style consistent, do not mix styles like this

    std::cout << "Amazing!! That's my favorite number too!" << std::endl;
    std::cout << "No really!!, " << favorite_number << " is my favorite number!" << std::endl;

    return 0;  // return 0 <-- Do ntot use comments like this
}
```

## The `int main()` function

Every C++ program must have exactly one `main()` function. The `main()` function is the entry point of the program, where execution begins. It returns an integer value to the operating system upon completion. The return value is typically `0` to indicate successful execution, or a non-zero value to indicate an error.

There are two common forms of the `main()` function:

* `int main()`: This form does not take any command-line arguments. Usage: `./program`
* `int main(int argc, char *argv[])`: This form takes command-line arguments. `argc` is the number of arguments, and `argv` is an array of strings representing the arguments. Usage: `./program arg1 arg2 ...`

## Namespaces

Namespaces are used to organize code and prevent name collisions. The `std` namespace is the standard namespace in C++ that contains all the standard library functions and objects. To use the standard library functions without prefixing them with `std::`, you can use the `using` directive:

```cpp
using namespace std; // Use the entire std namespace
```

However, it is generally recommended to use the `std::` prefix to avoid potential name conflicts, especially in larger programs or when using multiple libraries. `::` is the scope resolution operator, which is used to specify the namespace or class to which a name belongs. For example, `std::cout` refers to the `cout` object in the `std` namespace. You could also create your own namespaces to organize your code. For example:

```cpp
namespace my_namespace {
    int my_function() {
        return 42;
    }
}
```

And then call it like this:

```cpp
#include <iostream>

int main() {
    std::cout << my_namespace::my_function() << std::endl;
    return 0;
}
```

## Basic Input and Output

See `BasicIO/main.cpp` for the example code.

### `cout`

`cout` is the standard output stream in C++. It is used to display output to the console. The `<<` operator is used to send data to the `cout` output stream. For example:

```cpp
std::cout << "Hello, World!";
```

`cout` does not automatically add a newline character at the end of the output. To add a newline, you can use the `std::endl` manipulator or the newline character `\n`.
For example:

```cpp
std::cout << "Hello, World!" << std::endl; // Using std::endl
std::cout << "Hello, World!\n"; // Using \n
```

See [`endl`](#endl) below for more information.

### `cin`

`cin` is the standard input stream in C++. It is used to read input from the console. The `>>` operator is used to extract data from the `cin` input stream based on the data's type. For example:

```cpp
std::cin >> favorite_number; // If favorite_number is an int, it will read an integer from the console
```

This can also be chained:

```cpp
std::cin >> favorite_number >> another_variable; // Reads two values from the console
```

This can fail if the user enters a value that cannot be converted to the expected type. For example, if `favorite_number` is an `int` and the user enters "hello", it will cause an error as `favorite_number` now has an undetermined value.

### `endl`

`endl` is a manipulator that is used to insert a newline character and flush the output buffer. It is equivalent to `\n`, but it also ensures that the output is immediately displayed on the console. For example:

```cpp
std::cout << "Hello, World!" << std::endl;
```

## Exercises

### Coding Exercise #1

Write a single output statement using `cout` that displays **"Hi Frank!"** to the console. Please don't have to use a '`\n`' or `endl`, just display the text.

Note: only a **single** `cout` statement should be used for this challenge - **no** other code is necessary.

#### Hints for ex1

* Be sure that your output matches the exercise specification **EXACTLY**!
* Be sure **NOT** to use `endl` or '`\n`' when displaying your result.

#### Solution for ex1

The solution to this exercise is very simple, we simply display "Hi Frank!" using a cout statement.

```cpp
cout << "Hi Frank!";
```

Note that "Hi Frank!" is enclosed within double-quotes and ends with an exclamation point.

### Coding Exercise #2

In this exercise, you will write a statement using cout and the insertion operator `<<` to display how many dogs Sally has.  

The variable `x` represents the number of dogs.

`x` has already been declared and initialized for you.

The output should read **"Sally has 3 dogs."**.

For this exercise, there is NO need to use the '`\n`' character or `endl` to create a new line after the output statement.

Note: only a single cout statement is required for this exercise. **No** other code should be necessary.

#### Hints for ex2

* Make sure your output matches the exercise specification **EXACTLY**!
* Do not use `endl` or '`\n`' in your output statement.
* Do NOT use `cin` to get the value of `x`. The value of `x` is already supplied in the coding exercise.

#### Solution for ex2

The solution to this exercise is very simple, we simply use:

```cpp
cout << "Sally has " << x << " dogs.";
```

Note that the we use of a space character at the end of `"Sally has "` so that we separate `"has"` from the value of `x`. We do the same thing in `" dogs."`, except the space is at the front.

Some students used double quotes around the "x".  This is incorrect since it will display "x" rather than the value of the variable x, which is 3.

### Coding Exercise #3

In this exercise, you will write code using `cin` and the extraction operator `>>` to allow a user to enter their date of birth.

The variable `m` represents the month, `d` represents the day, and `y` represents the year. Assume that the user will enter their date of birth in the order of month, day, year, with each value being separated by a blank space. You do not need to prompt the user for any information using `cout`. So, your code should consist only of the `cin` statement(s). **No** other code should be necessary.

#### Hints for ex3

* Be sure to use cin to read the values of `m`, `d`, and `y`.
* Be sure to read `m`, `d`, and `y` in the correct order specified in the exercise.

#### Solution for ex3

The solution to this exercise is very simple, we simply use:

```cpp
cin >> m;
cin >> d;
cin >> y;
```

to read 3 integers into the variables m, d, and y, in that specific order.

We can also use the following equivalent code:

```cpp
cin >> m >> d >> y;
```

There is no need to prompt the user with code such as:

```cpp
cout << "Enter the month";
cin >> m;
// etc.
```

This is not necessary since there is no user :) The coding exercise is automated and the automated tester will automatically supply values for m, d, and y when it encounters the cin statements. Adding these prompts will cause the test case to fail since the tester is expecting the output in a specific format, but now it will get the prompts.
