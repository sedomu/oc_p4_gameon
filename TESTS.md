# Open Classrooms - Project 4 GameOn

## ✅ Tests protocol

✅ 42 test cases implemented, all passed

Manual tests to verify form validation

| Description                                                                                       | Field                 | Value                  | Expected result             | Actual result               | Conclusion |
| ------------------------------------------------------------------------------------------------- | --------------------- | ---------------------- | --------------------------- | --------------------------- | ---------- |
| Correct form submission                                                                           | All                   | Valid inputs           | Access to confirmation page | Access to confirmation page | ✅         |
| Form validation                                                                                   | First name            | Cedric                 | ✅                          | ✅                          | ✅         |
| Form validation                                                                                   | First name            | Cédric                 | ✅                          | ✅                          | ✅         |
| Form validation                                                                                   | First name            | Marie-Alice            | ✅                          | ✅                          | ✅         |
| Form validation                                                                                   | First name            | Marie Alice            | ✅                          | ✅                          | ✅         |
| Form validation                                                                                   | First name            | C3dric                 | ❌                          | ❌                          | ✅         |
| Form validation                                                                                   | First name            | C                      | ❌                          | ❌                          | ✅         |
| Form validation                                                                                   | Last name             | Cedric                 | ✅                          | ✅                          | ✅         |
| Form validation                                                                                   | Last name             | Cédric                 | ✅                          | ✅                          | ✅         |
| Form validation                                                                                   | Last name             | Marie-Alice            | ✅                          | ✅                          | ✅         |
| Form validation                                                                                   | Last name             | Marie Alice            | ✅                          | ✅                          | ✅         |
| Form validation                                                                                   | Last name             | C3dric                 | ❌                          | ❌                          | ✅         |
| Form validation                                                                                   | Last name             | C                      | ❌                          | ❌                          | ✅         |
| Form validation                                                                                   | E-mail                | marie-alice@cedric.com | ✅                          | ✅                          | ✅         |
| Form validation                                                                                   | E-mail                | marie-alice@cedric.c   | ❌                          | ❌                          | ✅         |
| Form validation                                                                                   | E-mail                | marie.alice@cedric.com | ✅                          | ✅                          | ✅         |
| Form validation                                                                                   | E-mail                | marie_alice@cedric.com | ✅                          | ✅                          | ✅         |
| Form validation                                                                                   | E-mail                | marie-alice75@cedric.com | ✅                        | ✅                          | ✅         |
| Form validation                                                                                   | E-mail                | marie@alice75@cedric.com | ❌                        | ❌                          | ✅         |
| Form validation                                                                                   | E-mail                | marie-alice@cedric     | ❌                          | ❌                          | ✅         |
| Form validation                                                                                   | E-mail                | marie-alice@cedric.    | ❌                          | ❌                          | ✅         |
| Form validation                                                                                   | E-mail                | marie!alice@cedric.com | ❌                          | ❌                          | ✅         |
| Form validation                                                                                   | Birth date            | 01/01/2000             | ✅                          | ✅                          | ✅         |
| Form validation                                                                                   | Birth date            | cedric                 | ❌                          | ❌                          | ✅         |
| Form validation                                                                                   | Birth date            | 25                     | ❌                          | ❌                          | ✅         |
| Form validation                                                                                   | Birth date            | 28/02/2024             | ✅                          | ✅                          | ✅         |
| Form validation                                                                                   | Birth date            | 31/02/2025             | ❌                          | ❌                          | ✅         |
| Form validation                                                                                   | Birth date            | 29/02/2023             | ❌                          | ❌                          | ✅         |
| Form validation                                                                                   | Birth date            | 29/02/2024             | ✅                          | ✅                          | ✅         |
| Form validation                                                                                   | Birth date            | 31/12/2100             | ❌                          | ❌                          | ✅         |
| Form validation                                                                                   | Number of tournaments | 0                      | ✅                          | ✅                          | ✅         |
| Form validation                                                                                   | Number of tournaments | 1                      | ✅                          | ✅                          | ✅         |
| Form validation                                                                                   | Number of tournaments | 01                     | ✅                          | ✅                          | ✅         |
| Form validation                                                                                   | Number of tournaments | 99                     | ✅                          | ✅                          | ✅         |
| Form validation                                                                                   | Number of tournaments | 100                    | ❌                          | ❌                          | ✅         |
| Form validation                                                                                   | Number of tournaments | 099                    | ❌                          | ❌                          | ✅         |
| Form validation                                                                                   | Number of tournaments | -1                     | ❌                          | ❌                          | ✅         |
| Form validation                                                                                   | Number of tournaments | e                      | ❌                          | ❌                          | ✅         |
| Form validation                                                                                   | Radio buttons         | One selected           | ✅                          | ✅                          | ✅         |
| Form validation                                                                                   | Radio buttons         | None selected          | ❌                          | ❌                          | ✅         |
| Form validation                                                                                   | Checkbox T&C          | Checked                | ✅                          | ✅                          | ✅         |
| Form validation                                                                                   | Checkbox T&C          | Unchecked              | ❌                          | ❌                          | ✅         |
| Form validation                                                                                   | Checkbox Newsletter   | Checked                | ✅                          | ✅                          | ✅         |
| Form validation                                                                                   | Checkbox Newsletter   | Unchecked              | ✅                          | ✅                          | ✅         |
| Injection: forced `submit` click with 1 invalid field (`submitBtn.disabled = false;` via console) | Submit                | N/A                    | ❌                          | ❌                          | ✅         |

**Test conclusion**: All test cases passed successfully.
Form validation behaves consistently, as the same JavaScript logic is executed regardless of the display context (desktop or mobile). ✅