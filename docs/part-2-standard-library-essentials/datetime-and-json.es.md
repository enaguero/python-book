# datetime y JSON

## Que aprenderas

- Trabajo con objetos de fecha y hora
- Parseo y formateo de cadenas de fecha
- Serializacion y deserializacion JSON

## Explicacion

`datetime` maneja datos de fecha y hora de forma fiable, mientras `json`
facilita el intercambio estructurado con APIs y archivos de configuracion.

## Ejemplo

```python
from datetime import datetime
import json

now = datetime.now().isoformat()
payload = {"generated_at": now, "ok": True}
print(json.dumps(payload, indent=2))
```

## Errores comunes

- Mezclar datetimes naive y con zona horaria
- Asumir que JSON soporta objetos especificos de Python directamente

## Ejercicios

Ver [Ejercicios Parte 2](../exercises/part-2/index.md).

## Lectura adicional

- <https://docs.python.org/3/library/datetime.html>
- <https://docs.python.org/3/library/json.html>
