# Part 1 Exercises

## Exercise 1: Input and output

Write a script that asks for a user's name and favorite number, then prints a sentence
combining both values.

??? tip "Hint"
    Use `input()` twice and an f-string for output.

??? success "One possible solution"
    ```python
    name = input("Name: ")
    number = input("Favorite number: ")
    print(f"{name} likes {number}.")
    ```

## Exercise 2: Branching

Given an integer, print `positive`, `negative`, or `zero`.

??? tip "Hint"
    Use `if`/`elif`/`else` in that order.

??? success "One possible solution"
    ```python
    n = int(input("n: "))
    if n > 0:
        print("positive")
    elif n < 0:
        print("negative")
    else:
        print("zero")
    ```
