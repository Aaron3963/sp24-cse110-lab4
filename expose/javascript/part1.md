1. What is printed by line 9?\
    `values added: 20`

2. What is printed by line 13?\
    `final result: 20`

3. What is printed by line 9?\
    `values added: 20`

4. What is printed by line 13?\
    `ReferenceError: result is not defined`. This is because we are using `let` for `result`. It restricts the variable to be only in the scope of `if`. `console.log('final result: ', result)` is outside its scope, so JS throws a reference error.

5. What is printed by line 9?\
    `TypeError: Assignment to constant variable.` @ `result = num1 + num2;`. The error itself basically explains it: since `result` has type `const`, after its initialization, it cannot be altered.

6. What is printed by line 13?\
    Nothing. Since JS already exited with the error happening in line 9.