1. What will happen at line 12 and why?\
    JS will print out `3`. This is because `i` is acting as a for loop counter. The loop starts from `i=0`, and it increases by 1 for each loop (`i++`). The termination signal is `i < prices.length`, which is `3` in this case. At the forth iteration, `i` has been incremented to `3`, since `3 !< 3`, the loop terminates and `i` remains to be `3`.

2. What will happen at line 13 and why?\
    JS will print out `150`. At the last iteration (`i=2`), the third element in `prices` is `300`. After calculation, `discountedPrices` was updated to be `150`. Since `discountedPrices` has the type `var`, it is reachable beyond the for loop, so the print statement at line 13 is able to print out its value.

3. What will happen at line 14 and why?\
    JS will print out `150`. Though `finalPrice` is has the same output with `discountedPrices`, but it is actually rounded. If the `discountedPrices` ended up to have more than 3 digits after decimal point, `finalPrice` will multiple it by `100`, round the number (keeping the first two decimals), then divide it by 100 to get the rounded discount price.

4. What will this function return?\
    The function will return `[ 50, 100, 150 ]`, but nothing will be printed unless other code put it into a print statement. This is the discounted price list stored in `discounted`.

5. What will happen at line 12 and why?\
    JS will throw `ReferenceError: i is not defined` @ `console.log(i);`. This is because we changed all variables to be `let`, which `i`'s scope is restricted to be inside the for loop. The print statement is outside, therefore it is not defined there.

6. What will happen at line 13 and why?\
    JS will throw `ReferenceError: discountedPrices is not defined` @ `console.log(discountedPrices);`. Similar to the question above, it has type `let`, with scope inside the for loop. When accessing it outside the scope, it will throw a reference error.

7. What will happen at line 14 and why?\
    JS will print out `150`. This is because `finalPrice` is declared in the scope of the `discountPrices` function. The print statement is also in the same scope, therefore it prints out the price correctly.

8. What will this function return?\
    The function will return `[ 50, 100, 150 ]`, though nothing will be printed unless there's a print statement. Since the variable `discounted` is in the scope of the function, it can be properly returned.

9. What will happen at line 11 and why?\
    JS will throw `ReferenceError: i is not defined` @ `console.log(i);`. This is because we changed all variables to be `let`, which `i`'s scope is restricted to be inside the for loop. The print statement is outside, therefore it is not defined there.

10. What will happen at line 12 and why?\
    JS will print `3`. Since `length` is a `const` variable, as long as we do not alter its value, it can be accessed properly.

11. What will this function return?\
    The function will return `[ 50, 100, 150 ]`, though nothing will be printed unless there's a print statement. Although there's lots of `const` variables, as long as we do not alter their values after initialization, the code should run fine.

12. Given the above Object, write the notation for:
    - Accessing the value of the name property in the student object\
        `student.name`
    - Accessing the value of the Grad Year property in the student object\
        `student['Grad Year']`
    - Calling the function for the greeting property in the student object
        `student['greeting']()`
    - Accessing the name property of the object in the Favorite Teacher property in student
        `student['Favorite Teacher'].name`
    - Access index zero in the array of the courseLoad property of the student object
        `student.courseLoad[0]`

13. Arithmetic
    -  '3' + 2  = `5`
    - '3' - 2 = `1`
    - 3 + null = `3`
    - '3' + null = `'3null'`
    - true + 3 = `4`
    - false + null = `0`
    - '3' + undefined = `'3undefined'`
    - '3' - undefined = `NaN`

14. Comparison
    - '2' > 1 = `true`
    - '2' < '12' = `false`
    - 2 == '2' = `true`
    - 2 === '2' = `false`
    - true == 2 = `false`
    - true === Boolean(2) = `true`s

15. Explain the difference between the == and === operators.\
    `==` is a lose equality operator, which allows type conversion before checking. `===` is a strict equality operator which checks the equality without type conversion.