Day 3 – Operators & Expressions

Arithmetic, comparison, logical, assignment

Type coercion & conversion

1. Arithmetic Operators

Used to perform basic math operations:

| Operator | Description         | Example      |
| -------- | ------------------- | ------------ |
| `+`      | Addition            | `5 + 3 → 8`  |
| `-`      | Subtraction         | `5 - 3 → 2`  |
| `*`      | Multiplication      | `5 * 3 → 15` |
| `/`      | Division            | `6 / 3 → 2`  |
| `%`      | Modulus (remainder) | `5 % 2 → 1`  |
| `**`     | Exponentiation      | `2 ** 3 → 8` |
| `++`     | Increment           | `x++`        |
| `--`     | Decrement           | `x--`        |

2. Comparison Operators
| Operator | Description           | Example             |
| -------- | --------------------- | ------------------- |
| `==`     | Equal (loose)         | `'5' == 5 → true`   |
| `===`    | Equal (strict)        | `'5' === 5 → false` |
| `!=`     | Not equal (loose)     | `'5' != 5 → false`  |
| `!==`    | Not equal (strict)    | `'5' !== 5 → true`  |
| `>`      | Greater than          | `5 > 3 → true`      |
| `<`      | Less than             | `5 < 3 → false`     |
| `>=`     | Greater than or equal | `5 >= 5 → true`     |
| `<=`     | Less than or equal    | `5 <= 4 → false`    |

3. Logical Operators
| Operator | Description | Example                 |            |        |   |                |
| -------- | ----------- | ----------------------- | ---------- | ------ | - | -------------- |
| `&&`     | Logical AND | `true && false → false` |            |        |   |                |
| \`       |             | \`                      | Logical OR | \`true |   | false → true\` |
| `!`      | Logical NOT | `!true → false`         |            |        |   |                |

4. Assignment Operators
| Operator | Description         | Example              |
| -------- | ------------------- | -------------------- |
| `=`      | Assign              | `x = 5`              |
| `+=`     | Add and assign      | `x += 2 → x = x + 2` |
| `-=`     | Subtract and assign | `x -= 2`             |
| `*=`     | Multiply and assign | `x *= 2`             |
| `/=`     | Divide and assign   | `x /= 2`             |
| `%=`     | Modulo and assign   | `x %= 2`             |

 5. Type Coercion & Conversion

 ype Coercion (Automatic)
JavaScript automatically converts types when needed.


'5' + 1      // '51'  (number coerced to string)
'5' - 1      // 4     (string coerced to number)
true + 1     // 2     (true → 1)
false + '1'  // 'false1'
🔄 Type Conversion (Manual)
You explicitly change the type.


Number('5')       // 5
String(123)       // '123'
Boolean(0)        // false
parseInt('42px')  // 42
parseFloat('3.14')// 3.14

Use === instead of == to avoid unexpected type coercion.

Use typeof to check variable types.


