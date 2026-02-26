# Seguimiento del Curriculo

## Proposito

Este archivo registra el estado del curriculo y las decisiones de planificacion para Python Book.
Es la fuente unica de verdad sobre lo que existe hoy, lo que falta y lo que sigue.

## Situacion actual (Linea base)

Fecha de estado: 2026-02-26

- La Parte 1 tiene capitulos base:
  - Primeros Pasos
  - Variables y Tipos
  - Flujo de Control
  - Funciones
- Existe una nueva ruta para principiantes:
  - Ruta de Fundamentos (3-4 Meses)
- Las Partes 2 y 3 ya contienen capitulos intermedios/del mundo real.
- Los ejercicios estan separados por parte.

## Perfil objetivo

- Persona principiante sin experiencia en programacion
- Estudiante a ritmo propio (medio tiempo, con progreso flexible)
- Meta: base solida de Python en un estimado de 3-4 meses, sin fechas fijas por tema

## Analisis de brechas

Cubierto actualmente:

- Modelo de ejecucion introductorio (basico)
- Variables y tipos (basico)
- Flujo de control y funciones (basico)
- Ruta de aprendizaje de alto nivel

Falta reforzar:

- Fundamentos de computacion (CPU, RAM, disco, modelo de proceso)
- Modelo de memoria de Python detras de variables y asignaciones
- Profundidad en expresiones y logica booleana
- I/O de archivos desde enfoque principiante
- Errores, debugging y tracebacks
- Modulos/imports y estructura multiarchivo
- POO basica con criterios practicos
- Mentalidad de testing para principiantes

## Plan modular (Borrador v2)

Este curriculo es incremental y basado en dominio.
Se avanza modulo por modulo cuando se cumplen los criterios de salida.

### Modulo 1: Fundamentos de computacion y modelo de ejecucion

- Foco: CPU, RAM, disco, SO, scripts, interprete, ciclo de proceso
- Criterio de salida: explicar como pasa el codigo Python de archivo a ejecucion

### Modulo 2: Contexto de Python y primeros programas

- Foco: que es Python, donde se usa, REPL vs script, terminal basica
- Criterio de salida: ejecutar y modificar scripts pequenos con confianza

### Modulo 3: Variables, objetos, memoria y tipos de datos base

- Foco: enlace de nombres, asignacion, `int`/`float`/`str`/`bool`/`None`, conversiones
- Criterio de salida: predecir salidas y explicar comportamiento basico de memoria

### Modulo 4: Expresiones, operadores y flujo de control

- Foco: expresiones aritmeticas/logicas, comparaciones, `if`/`elif`/`else`
- Criterio de salida: resolver ejercicios de ramificacion con logica limpia

### Modulo 5: Bucles, funciones y descomposicion

- Foco: `for`/`while`, patrones de iteracion, diseno de funciones, scope basico
- Criterio de salida: refactorizar codigo repetitivo en funciones reutilizables

### Modulo 6: Archivos, excepciones y debugging

- Foco: I/O de archivos, `pathlib`, `try`/`except`, tracebacks, flujo de depuracion
- Criterio de salida: crear scripts que lean/escriban archivos y manejen fallos comunes

### Modulo 7: Modulos, imports, entornos y Git ligero

- Foco: estructura multiarchivo, imports, entornos virtuales, dependencias, flujo Git esencial
- Criterio de salida: organizar un proyecto pequeno entre archivos con setup limpio

### Modulo 8: POO y testing basico

- Foco: clases, objetos, metodos, encapsulacion basica, introduccion a `pytest`
- Criterio de salida: construir y probar una funcionalidad pequena orientada a objetos

### Modulo 9: Capstone y consolidacion

- Foco: proyecto integral, revision de debilidades, cierre de fundamentos
- Criterio de salida: completar y presentar un proyecto pequeno con tests y README

## Politica de ritmo

- Sin calendario fijo por modulo
- El progreso depende del dominio, no de semanas
- Duracion estimada para la mayoria en medio tiempo: 3-4 meses

## Silabo detallado por modulo (v1)

### Modulo 1: Fundamentos de computacion y modelo de ejecucion

Objetivos:

- Explicar CPU, RAM, disco y sistema operativo en lenguaje simple
- Describir que ocurre al ejecutar `python script.py`
- Distinguir memoria temporal de almacenamiento persistente
- Usar terminal basica para navegar y ejecutar scripts

Practica:

- Dibujar un flujo simple: archivo -> interprete -> proceso -> salida
- Ejecutar y modificar un primer script desde terminal
- Explicar cada linea de un script pequeno

Ejercicios:

1. Actividad de etiquetar y explicar: responsabilidades de CPU vs RAM vs disco
2. Laboratorio de linea de comandos: navegar carpetas y ejecutar 3 scripts
3. Trazado de script: describir cada paso de `python hello.py`

Checks de finalizacion:

- Puede explicar por que al cerrar un programa se limpia la RAM
- Ejecuta scripts sin depender solo del IDE
- Describe entrada -> procesamiento -> salida en un script simple

### Modulo 2: Contexto de Python y primeros programas

Objetivos:

- Entender para que sirve Python y casos de uso comunes
- Diferenciar REPL y scripts
- Usar `print()`, `input()`, comentarios y estructura basica
- Leer salida de scripts y modificar comportamiento de forma segura

Practica:

- Usar REPL para pruebas rapidas y pasar codigo a `.py`
- Construir scripts pequenos interactivos
- Leer codigo antes de ejecutarlo

Ejercicios:

1. Script de saludo con salida formateada
2. Script de conversion de unidades (por ejemplo: Celsius/Fahrenheit)
3. Script de entrada y resumen de perfil de usuario

Checks de finalizacion:

- Elige REPL o script segun la tarea
- Escribe y ejecuta programas pequenos de forma independiente
- Explica linea por linea su propio script

### Modulo 3: Variables, objetos, memoria y tipos base

Objetivos:

- Entender enlace de nombres y asignacion en Python
- Usar bien `int`, `float`, `str`, `bool` y `None`
- Hacer conversiones de tipo seguras y evitar errores comunes
- Inspeccionar valores con `type()` e identidad basica con `id()`

Practica:

- Predecir salida antes de ejecutar
- Depurar errores de tipo derivados de `input()`
- Renombrar variables poco claras por nombres legibles

Ejercicios:

1. Laboratorio de errores: corregir scripts con fallos de asignacion/comparacion
2. Reto de conversion: parsear entrada de usuario a valores numericos
3. Set de prediccion: anticipar valores finales de snippets

Checks de finalizacion:

- Explica por que `input()` devuelve texto y cuando convertir
- Evita confundir `=` y `==`
- Describe comportamiento basico de memoria en reasignaciones

Proyecto checkpoint A (despues del Modulo 3):

- Construir un CLI de "calculadora de perfil personal":
  capturar datos, convertir campos numericos e imprimir resumenes

### Modulo 4: Expresiones, operadores y flujo de control

Objetivos:

- Usar operadores aritmeticos, de comparacion y booleanos con confianza
- Construir arboles de decision claros con `if`/`elif`/`else`
- Aplicar `and`/`or`/`not` correctamente en condiciones combinadas
- Evitar duplicacion de logica con ramas mas simples

Practica:

- Convertir reglas en lenguaje natural a condicionales
- Refactorizar condiciones anidadas en estructuras claras
- Probar casos borde y entradas invalidas

Ejercicios:

1. Clasificador de notas con limites explicitos
2. Verificador de elegibilidad (descuento, prestamo o acceso)
3. Tabla de decisiones: pasar requerimientos a ramas de codigo

Checks de finalizacion:

- Explica por que existe cada rama
- Maneja al menos 3 casos borde
- Escribe condiciones legibles sin anidacion innecesaria

### Modulo 5: Bucles, funciones y descomposicion

Objetivos:

- Usar `for` y `while` para tareas repetitivas
- Aplicar `break` y `continue` de forma intencional
- Disenar funciones con parametros y retornos claros
- Dividir scripts grandes en funciones pequenas reutilizables

Practica:

- Implementar patrones de acumulacion (conteo, suma, max/min)
- Construir bucles de validacion de entrada
- Refactorizar un script largo en funciones enfocadas

Ejercicios:

1. Analizador numerico: count, sum, average, min, max con entrada de usuario
2. Bucle de reintento: validar entrada con intentos limitados
3. Reto de refactorizacion: dividir un script en 4-6 funciones

Checks de finalizacion:

- Explica claramente la condicion de parada de bucles
- Escribe funciones que retornan valores en vez de solo imprimir
- Traza flujo de datos entre llamadas de funciones

### Modulo 6: Archivos, excepciones y debugging

Objetivos:

- Leer y escribir texto de forma segura con `with open(...)`
- Usar `pathlib` para operaciones de rutas
- Manejar errores esperados con `try`/`except`
- Leer tracebacks y aplicar un flujo basico de depuracion

Practica:

- Parsear archivos de texto por lineas y generar resumenes
- Manejar archivos faltantes y datos invalidos con gracia
- Usar `print` debugging y breakpoints simples

Ejercicios:

1. Herramienta de resumen de archivo: lineas, palabras y unicos
2. Importador seguro: leer datos y omitir/reportar lineas invalidas
3. Clinica de debugging: reparar scripts rotos de procesamiento de archivos

Checks de finalizacion:

- Usa excepciones para fallos esperados, no capturas generales indiscriminadas
- Explica ubicacion del traceback y tipo de error
- Entrega un script de archivo con manejo de errores robusto

Proyecto checkpoint B (despues del Modulo 6):

- Construir una app de seguimiento basada en archivos (gastos o habitos)
  con validacion, persistencia y manejo de errores

### Modulo 7: Modulos, imports, entornos y Git ligero

Objetivos:

- Dividir codigo en modulos con responsabilidades claras
- Usar imports correctamente y evitar dependencias circulares
- Crear y usar un entorno virtual para aislar proyectos
- Aplicar flujo Git basico para iterar con seguridad

Practica:

- Organizar una app pequena en 3-5 archivos
- Instalar y fijar una dependencia en entorno virtual
- Registrar iteraciones con commits pequenos y claros

Ejercicios:

1. Reto de reestructura: pasar de un script unico a layout modular
2. Laboratorio de entorno: crear `.venv`, instalar dependencia y congelar requirements
3. Practica Git: commit de feature, comparar con `git diff`, restaurar una version

Checks de finalizacion:

- Explica la responsabilidad de cada modulo
- Reproduce setup del proyecto en entorno limpio
- Muestra historial Git basico con mensajes de commit claros

### Modulo 8: POO y testing basico

Objetivos:

- Entender clases, objetos, atributos y metodos
- Decidir cuando POO aporta mas que funciones simples
- Implementar comportamiento de clase con `__init__`
- Escribir tests basicos con `pytest`

Practica:

- Modelar un dominio pequeno con instancias de clases
- Mantener metodos enfocados y predecibles
- Escribir tests de casos normales y al menos un caso borde por metodo

Ejercicios:

1. Clase `BankAccount` o `Wallet` con reglas de deposito/retiro
2. Clases `Task`/`TodoList` con transiciones de estado simples
3. Suite `pytest` para metodos de clase y errores de validacion

Checks de finalizacion:

- Explica estado del objeto y efecto de metodos
- Escribe y ejecuta una suite `pytest` en verde
- Refactoriza un diseno funcional a uno orientado a objetos

Proyecto checkpoint C (despues del Modulo 8):

- Construir una mini app orientada a objetos con tests
  (por ejemplo: inventario, quiz o agenda de contactos)

### Modulo 9: Capstone y consolidacion

Objetivos:

- Integrar todos los fundamentos en un proyecto completo
- Planificar, implementar, probar y documentar una app pequena de Python
- Identificar y corregir debilidades personales de modulos previos
- Demostrar preparacion para material intermedio

Practica:

- Escribir un plan corto de implementacion antes de codificar
- Construir en incrementos pequenos con ciclos de prueba/revision
- Revisar legibilidad y calidad del manejo de errores al final

Ejercicios y entregables:

1. Propuesta de capstone (problema, alcance, funcionalidades, restricciones)
2. Implementacion del proyecto con estructura modular
3. Suite de pruebas para rutas logicas clave
4. README con setup, uso y limitaciones conocidas
5. Nota de reflexion: que fue dificil y que mejoro

Checks de finalizacion:

- Puede demostrar el proyecto de punta a punta
- El proyecto incluye archivos, funciones/modulos y pruebas
- Puede explicar tradeoffs y siguientes mejoras

## Modelo de progresion de ejercicios

- Nivel 1 (guiado): plantillas base y pasos detallados
- Nivel 2 (semi-guiado): enunciado + comportamiento esperado
- Nivel 3 (independiente): tarea abierta con criterios de aceptacion

Regla de progresion:

- Completar al menos un ejercicio de cada nivel por modulo antes de avanzar
- Repetir tareas de Nivel 2 o 3 si no se cumplen los checks

## Seguimiento de ejecucion

- [x] Crear capitulo de ruta para principiantes
- [x] Definir linea base y brechas en este tracker
- [x] Aprobar alcance y orden por capitulos
- [x] Escribir silabo detallado por modulo (objetivos + ejercicios)
- [ ] Crear/expandir capitulos para principiantes
- [ ] Construir progresion incremental de ejercicios y milestones
- [ ] Revision final de consistencia (contenido, nav, ejercicios)

## Decisiones aprobadas

Fecha de aprobacion: 2026-02-26

1. Momento de POO:
   Introducir POO despues del dominio procedural (Modulos 1-7) y continuar con testing basico.
2. Alcance de Git:
   Incluir solo fundamentos ligeros de Git (init, add, commit, status, log, diff, restore) como soporte, no como bloque principal.
3. Cadencia de proyectos:
   Usar mini-proyectos checkpoint tras bloques principales (Modulos 3, 6 y 8), mas un capstone en Modulo 9.

## Regla de siguiente actualizacion

Cuando cambie una decision curricular:

1. Actualizar este archivo primero.
2. Despues actualizar paginas relacionadas.
3. Mantener alineado este tracker con la navegacion de `mkdocs.yml`.
