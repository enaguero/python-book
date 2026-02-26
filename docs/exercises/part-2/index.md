# Part 2 Exercises

## Exercise 1: Count words

Count how many times each word appears in a sentence.

??? tip "Hint"
    Split the sentence and feed the list to `collections.Counter`.

??? success "One possible solution"
    ```python
    from collections import Counter

    sentence = "python book python docs"
    counts = Counter(sentence.split())
    print(counts)
    ```

## Exercise 2: JSON round trip

Create a dictionary, serialize it to JSON text, and parse it back.

??? tip "Hint"
    Use `json.dumps` and `json.loads`.

??? success "One possible solution"
    ```python
    import json

    data = {"chapter": "datetime", "level": "beginner"}
    raw = json.dumps(data)
    parsed = json.loads(raw)
    print(parsed["chapter"])
    ```
