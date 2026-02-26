# Ruta de Fundamentos (3-4 Meses, Medio Tiempo)

## Para quien es esta ruta

Esta ruta es para principiantes absolutos sin experiencia en programacion.
Esta pensada para estudio a medio tiempo con una duracion estimada total de 3-4 meses.

## Ritmo de estudio recomendado

- 8-10 horas por semana
- 4-5 sesiones por semana (60-120 minutos cada una)
- 60% practica de codigo, 30% lectura, 10% repaso
- Avanza por dominio, no por fechas semanales fijas

## Resultados objetivo al final

Deberias poder:

- Leer y explicar programas pequenos de Python con confianza
- Escribir scripts con variables, condiciones, bucles, funciones y archivos
- Entender codigo basico orientado a objetos sin confusion
- Depurar errores comunes y probar comportamiento principal
- Continuar a temas intermedios de Python con una base solida

## Plan basado en modulos

### Modulo 1: Fundamentos de computacion y programacion

Foco:

- Que es una computadora: CPU, RAM, disco, sistema operativo
- Como se ejecutan programas: codigo fuente, interprete, proceso, entrada/salida
- Diferencia entre memoria (temporal) y disco (persistente)
- Por que existen los lenguajes de programacion y donde encaja Python

Metas de practica:

- Instalar y ejecutar Python localmente
- Usar comandos de terminal (`pwd`, `ls`, `cd`, `python`)
- Ejecutar un script simple y explicar cada linea

### Modulo 2: Lenguaje base de Python

Foco:

- Variables y nombres
- Como funciona la asignacion en memoria (los nombres referencian objetos)
- Tipos de datos base: `int`, `float`, `str`, `bool`, `None`
- Expresiones, operadores y conversion de tipos
- Formato de cadenas y entrada de usuario

Metas de practica:

- Escribir 15-20 scripts pequenos
- Predecir la salida antes de ejecutar
- Usar `type()` e `id()` para inspeccionar comportamiento

### Modulo 3: Flujo de control y logica reutilizable

Foco:

- `if`/`elif`/`else`
- Valores truthy/falsy y logica booleana
- Bucles `for` y `while`
- Funciones, parametros, retornos y alcance

Metas de practica:

- Construir bucles de validacion de entrada
- Separar logica repetida en funciones
- Refactorizar un script en funciones mas limpias

### Modulo 4: Archivos, errores y modulos

Foco:

- Lectura y escritura segura de texto (`with open(...)`)
- Rutas y carpetas con `pathlib`
- Excepciones (`try`/`except`) y mensajes de error
- Organizacion de codigo con modulos e imports

Metas de practica:

- Crear un script que lea un archivo tipo CSV y resuma datos
- Manejar archivos faltantes o entradas invalidas
- Dividir un proyecto en varios archivos `.py`

### Modulo 5: POO y construccion de proyecto

Foco:

- Clases y objetos
- Atributos, metodos y encapsulacion basica
- Cuando usar clases vs funciones
- Introduccion a pruebas con `pytest`

Metas de practica:

- Construir un proyecto pequeno (por ejemplo: habitos, gastos o quiz)
- Escribir 8-15 tests para funciones/metodos clave
- Presentar el proyecto con un README corto

## Progresion incremental por modulos

1. Empieza con el Modulo 1 y continua en orden
2. Pasa al siguiente modulo solo al completar las metas del actual
3. Agrega mini-proyectos de control en puntos importantes
4. Finaliza con un proyecto capstone
5. Usa el Curriculum Tracker para el detalle de checkpoints y granularidad de modulos

## Elementos importantes que debes incluir

Tu lista es buena. Estas adiciones son clave para una base solida:

- Manejo de errores y excepciones
- Habilidades de debugging (leer tracebacks, breakpoints, `print` debugging)
- Modulos e imports (como se conectan archivos Python)
- Base de testing (`pytest`)
- Entornos y dependencias (virtual environments)
- Metodo de resolucion de problemas (descomponer antes de codificar)
- Estilo y legibilidad (PEP 8, nombres con significado)
- Fundamentos de Git (guardar progreso, comparar cambios, rollback seguro)

## Primeros checks de avance sugeridos

Despues del Modulo 2:

- Puedes explicar RAM vs disco en palabras simples
- Puedes escribir scripts con input, variables y conversiones
- Puedes explicar por que `input()` devuelve string

Despues del Modulo 3:

- Puedes resolver ejercicios pequenos con funciones y bucles
- Puedes depurar errores comunes de sintaxis y runtime

Despues del Modulo 5:

- Puedes construir un proyecto pequeno desde cero
- Puedes leer tutoriales intermedios y entender la mayoria de ejemplos

## Ejercicios

Ver [Ejercicios Parte 1](../exercises/part-1/index.md).

## Lectura adicional

- <https://docs.python.org/3/tutorial/>
- <https://docs.python.org/3/library/pathlib.html>
- <https://docs.pytest.org/>
