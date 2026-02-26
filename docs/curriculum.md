# Curriculum Tracker

## Purpose

This file tracks the curriculum status and planning decisions for the Python Book.
It is the single source of truth for what exists now, what is missing, and what to build next.

## Current situation (Baseline)

Status date: 2026-02-26

- Part 1 has core chapters:
  - Getting Started
  - Variables and Types
  - Control Flow
  - Functions
- A new beginner roadmap exists:
  - Foundations Roadmap (3-4 Months)
- Parts 2 and 3 already contain intermediate/real-world chapters.
- Exercises are separated by part.

## Target learner

- Beginner with zero programming experience
- Self-paced learner (part-time, with flexible progression)
- Goal: solid Python foundations in an estimated 3-4 months, without fixed deadlines per topic

## Gap analysis

Covered now:

- Intro execution model (basic)
- Variables and types (basic)
- Control flow and functions (basic)
- High-level roadmap

Needs stronger foundational coverage:

- Computer fundamentals (CPU, RAM, disk, process model)
- Python memory model behind variables and assignments
- Expressions and boolean logic depth
- File I/O from beginner perspective
- Errors, debugging, and tracebacks
- Modules/imports and multi-file structure
- OOP basics with practical criteria
- Testing mindset for beginners

## Modular plan (Draft v2)

This curriculum is incremental and mastery-based.
Learners advance module by module when they can complete the exit criteria.

### Module 1: Computer fundamentals and execution model

- Focus: CPU, RAM, disk, OS, scripts, interpreter, process lifecycle
- Exit criteria: explain how Python code moves from file to execution

### Module 2: Python context and first programs

- Focus: what Python is, where it is useful, REPL vs script, terminal basics
- Exit criteria: run and modify small scripts confidently

### Module 3: Variables, objects, memory, and core data types

- Focus: name binding, assignment, `int`/`float`/`str`/`bool`/`None`, conversions
- Exit criteria: predict outputs and explain basic memory behavior

### Module 4: Expressions, operators, and control flow

- Focus: arithmetic/logical expressions, comparisons, `if`/`elif`/`else`
- Exit criteria: solve branching exercises with clean logic

### Module 5: Loops, functions, and decomposition

- Focus: `for`/`while`, iteration patterns, function design, scope basics
- Exit criteria: refactor repetitive code into reusable functions

### Module 6: Files, exceptions, and debugging

- Focus: file I/O, `pathlib`, `try`/`except`, tracebacks, debugging workflow
- Exit criteria: create scripts that read/write files and handle common failures

### Module 7: Modules, imports, environments, and lightweight Git

- Focus: multi-file structure, imports, virtual environments, dependency basics, essential Git workflow
- Exit criteria: organize a small project across files with clean setup

### Module 8: OOP and testing basics

- Focus: classes, objects, methods, encapsulation basics, intro `pytest`
- Exit criteria: build and test a small class-based feature

### Module 9: Capstone and consolidation

- Focus: end-to-end project, review weak areas, finalize foundational mastery
- Exit criteria: complete and present a small project with tests and README

## Pacing policy

- No fixed timeline per module
- Progress depends on mastery, not calendar week
- Estimated total duration for most part-time learners: 3-4 months

## Detailed syllabus by module (v1)

### Module 1: Computer fundamentals and execution model

Objectives:

- Explain CPU, RAM, disk, and operating system roles in plain language
- Describe what happens when running `python script.py`
- Distinguish temporary memory from persistent storage
- Use terminal basics to move through folders and run scripts

Practice:

- Draw a simple runtime flow: file -> interpreter -> process -> output
- Run and modify a first script from terminal
- Explain each line of a tiny script to another person

Exercises:

1. Label-and-explain activity: CPU vs RAM vs disk responsibilities
2. Command-line lab: navigate folders and run 3 scripts from terminal
3. Script trace: write what happens at each step of `python hello.py`

Completion checks:

- Learner can clearly explain why closing a program clears RAM data
- Learner runs scripts without IDE-only dependency
- Learner can describe input -> processing -> output for a simple script

### Module 2: Python context and first programs

Objectives:

- Understand what Python is good for and common use cases
- Differentiate REPL and script usage
- Use `print()`, `input()`, comments, and basic script structure
- Read simple script output and modify behavior safely

Practice:

- Use REPL for quick experiments and then move code to a `.py` file
- Build tiny interactive scripts with user prompts
- Practice reading code before running it

Exercises:

1. Greeting assistant script with formatted output
2. Unit conversion script (for example: Celsius/Fahrenheit)
3. Input-and-summary script that collects and prints user profile data

Completion checks:

- Learner can choose REPL or script mode based on task
- Learner can write and run small interactive programs independently
- Learner can explain each line in their own script

### Module 3: Variables, objects, memory, and core data types

Objectives:

- Understand name binding and assignment in Python
- Use `int`, `float`, `str`, `bool`, and `None` correctly
- Perform safe type conversions and avoid common conversion errors
- Inspect values with `type()` and basic identity checks with `id()`

Practice:

- Predict output before executing code
- Debug type-related errors from `input()` usage
- Rewrite unclear variable names into readable ones

Exercises:

1. Bug fix lab: correct scripts with assignment/comparison mistakes
2. Type conversion challenge: parse user input into useful numeric values
3. Output prediction set: given code snippets, predict final values first

Completion checks:

- Learner explains why `input()` returns text and when conversion is needed
- Learner avoids confusing `=` and `==`
- Learner can describe basic memory behavior for variable reassignment

Checkpoint project A (after Module 3):

- Build a "personal profile calculator" CLI:
  collect user data, convert numeric fields, and print computed summaries

### Module 4: Expressions, operators, and control flow

Objectives:

- Use arithmetic, comparison, and boolean operators with confidence
- Build clear `if`/`elif`/`else` decision trees
- Apply `and`/`or`/`not` correctly in combined conditions
- Avoid logic duplication through simpler branch design

Practice:

- Turn natural-language rules into explicit conditionals
- Refactor nested conditions into cleaner structures
- Test edge cases around boundaries and invalid inputs

Exercises:

1. Grade classifier with explicit boundary handling
2. Eligibility checker (for example: discount, loan, or access rules)
3. Decision table exercise: convert requirements into code branches

Completion checks:

- Learner can explain why each branch exists
- Learner handles at least 3 edge cases in branching tasks
- Learner writes readable conditions without unnecessary nesting

### Module 5: Loops, functions, and decomposition

Objectives:

- Use `for` and `while` loops for repeated tasks
- Apply loop control (`break`, `continue`) intentionally
- Design functions with clear parameters and return values
- Decompose larger scripts into smaller reusable functions

Practice:

- Implement accumulator patterns (count, sum, max/min)
- Build input-validation loops
- Refactor one long script into multiple focused functions

Exercises:

1. Number analyzer: count, sum, average, min, max from user inputs
2. Retry loop: validate user input with limited attempts
3. Refactor challenge: split one script into 4-6 functions

Completion checks:

- Learner can explain loop stop conditions clearly
- Learner writes functions that return values instead of only printing
- Learner can trace data flow across function calls

### Module 6: Files, exceptions, and debugging

Objectives:

- Read and write text files safely with `with open(...)`
- Use `pathlib` for path operations
- Handle expected runtime errors with `try`/`except`
- Read tracebacks and apply a basic debugging workflow

Practice:

- Parse line-based text files and generate summaries
- Handle missing file and invalid data scenarios gracefully
- Use `print` debugging and simple breakpoints to isolate issues

Exercises:

1. File summary tool: count lines, words, and unique entries
2. Safe importer: read data file and skip/report invalid lines
3. Debug clinic: repair intentionally broken file-processing scripts

Completion checks:

- Learner uses exceptions for expected failures, not blanket catches
- Learner can explain traceback location and error type
- Learner delivers one file-based script with robust error handling

Checkpoint project B (after Module 6):

- Build a file-based tracker app (for example: expenses or habits)
  with validation, persistence, and error handling

### Module 7: Modules, imports, environments, and lightweight Git

Objectives:

- Split code into multiple modules with clear responsibilities
- Use imports correctly and avoid circular dependency mistakes
- Create and use a virtual environment for project isolation
- Apply basic Git workflow for safe iteration

Practice:

- Organize one small app into 3-5 files
- Install and pin one dependency in a virtual environment
- Track iterative changes with small, meaningful commits

Exercises:

1. Restructure challenge: convert single-file script into package-like layout
2. Environment lab: setup `.venv`, install dependency, and freeze requirements
3. Git drill: commit a feature, compare with `git diff`, restore a file version

Completion checks:

- Learner can explain what each module is responsible for
- Learner can reproduce project setup on a clean environment
- Learner demonstrates a basic Git history with clear commit messages

### Module 8: OOP and testing basics

Objectives:

- Understand classes, objects, attributes, and methods
- Decide when OOP is useful vs plain functions
- Implement simple class behavior with `__init__`
- Write basic tests with `pytest` for core behavior

Practice:

- Model a small domain as class instances
- Keep class methods focused and predictable
- Write tests for normal cases and one edge case per method

Exercises:

1. `BankAccount` or `Wallet` class with deposit/withdraw rules
2. `Task`/`TodoList` classes with simple state transitions
3. `pytest` suite for class methods and validation errors

Completion checks:

- Learner can explain object state and method effects
- Learner writes and runs a passing `pytest` test suite
- Learner can refactor one function-only design into class-based design

Checkpoint project C (after Module 8):

- Build a class-based mini application with tests
  (for example: inventory manager, quiz system, or contact book)

### Module 9: Capstone and consolidation

Objectives:

- Integrate all foundational skills into one complete project
- Plan, implement, test, and document a small Python application
- Identify and fix personal weak areas from prior modules
- Demonstrate readiness for intermediate Python material

Practice:

- Write a short implementation plan before coding
- Build in small increments with test/check cycles
- Perform final review for readability and error handling quality

Exercises and deliverables:

1. Capstone proposal (problem, scope, features, constraints)
2. Project implementation with modular structure
3. Test suite covering key logic paths
4. README with setup, usage, and known limitations
5. Reflection note: what was hard and what improved

Completion checks:

- Learner can demo the project end-to-end
- Project includes file handling, functions/modules, and tests
- Learner can explain tradeoffs and next improvements

## Exercise progression model

- Level 1 (guided): starter templates and step-by-step prompts
- Level 2 (semi-guided): problem statement plus expected behavior
- Level 3 (independent): open-ended task with acceptance criteria only

Progression rule:

- Complete at least one exercise at each level per module before moving on
- Repeat Level 2 or Level 3 tasks if completion checks are not met

## Execution tracker

- [x] Create beginner roadmap chapter
- [x] Define baseline and gaps in this tracker
- [x] Approve chapter-by-chapter scope and order
- [x] Write detailed syllabus per module (objectives + exercises)
- [ ] Create/expand beginner chapters
- [ ] Build incremental exercise progression and milestone checks
- [ ] Final consistency review (content, nav, exercises)

## Approved decisions

Approval date: 2026-02-26

1. OOP timing:
   Introduce OOP after procedural mastery (Modules 1-7), then continue with testing basics.
2. Git scope:
   Include lightweight Git fundamentals only (init, add, commit, status, log, diff, restore) as a support tool, not as a core programming block.
3. Project cadence:
   Use checkpoint mini-projects after major module blocks (after Modules 3, 6, and 8), plus one capstone in Module 9.

## Next update rule

When any curriculum decision changes:

1. Update this file first.
2. Then update related chapter pages.
3. Keep this tracker aligned with `mkdocs.yml` navigation.
