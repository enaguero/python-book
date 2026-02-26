# Ejercicios Parte 1

## Ejercicio 1: Entrada y salida

Escribe un script que pida el nombre de una persona y su numero favorito,
y luego imprima una frase combinando ambos valores.

??? tip "Pista"
    Usa `input()` dos veces y un f-string para la salida.

??? success "Una posible solucion"
    ```python
    name = input("Name: ")
    number = input("Favorite number: ")
    print(f"{name} likes {number}.")
    ```

## Ejercicio 2: Ramificacion

Dado un entero, imprime `positive`, `negative` o `zero`.

??? tip "Pista"
    Usa `if`/`elif`/`else` en ese orden.

??? success "Una posible solucion"
    ```python
    n = int(input("n: "))
    if n > 0:
        print("positive")
    elif n < 0:
        print("negative")
    else:
        print("zero")
    ```
