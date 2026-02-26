# Ejercicios Parte 2

## Ejercicio 1: Contar palabras

Cuenta cuantas veces aparece cada palabra en una frase.

??? tip "Pista"
    Separa la frase y pasa la lista a `collections.Counter`.

??? success "Una posible solucion"
    ```python
    from collections import Counter

    sentence = "python book python docs"
    counts = Counter(sentence.split())
    print(counts)
    ```

## Ejercicio 2: Viaje de ida y vuelta con JSON

Crea un diccionario, serializalo a texto JSON y parsealo de vuelta.

??? tip "Pista"
    Usa `json.dumps` y `json.loads`.

??? success "Una posible solucion"
    ```python
    import json

    data = {"chapter": "datetime", "level": "beginner"}
    raw = json.dumps(data)
    parsed = json.loads(raw)
    print(parsed["chapter"])
    ```
