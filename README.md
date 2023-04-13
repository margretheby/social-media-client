# WORKFLOW COURSE ASSIGNMENT


[![End-to-End Testing](https://github.com/margretheby/social-media-client/actions/workflows/e2e-testing.yml/badge.svg)](https://github.com/margretheby/social-media-client/actions/workflows/e2e-testing.yml)
[![Unit testing](https://github.com/margretheby/social-media-client/actions/workflows/unit-testing.yml/badge.svg)](https://github.com/margretheby/social-media-client/actions/workflows/unit-testing.yml)
[![Deploy static content to Pages](https://github.com/margretheby/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/margretheby/social-media-client/actions/workflows/pages.yml)

## Configurations 
### Branch protection
This repository's ```master``` branch is protected by:

### Prettier
The branch ```workflow-formatting``` is configured with prettier, and prettier is run on ```commit```. Merge this into another branch for it to run on this project.

### ESlint
The file ```.eslintrc.json``` contains configurations for Cypress End-to-End testing and Jest Unit Testing.

### Jest Unit Testing
There are two unit tests:
1. Tests that the login function sends a mock call to check if the storage method ```setItem``` has been called.
2 Tests that the logout functions sends a mock call to ckeck if the storage method ```removeItem``` has been called.

### Cypress End-to-End Testing
There are three cypress tests.
1. false-login: Tests that it is not possible to login with false credentials.
2. login: Tests that the user can login and access their profile.
3. logout: Tests that the user can log out.

#### Set up cypress testing:
1. Go to the ```cypress.env.json``` file
2. Add your user information to the following code:
```
{
  "user-email": "your-user-email@email.no",
  "user-password": "password-to-your-user-email"
}
```
3. These user variables can now be used for testing purposes, and you can access them by writing ```Cypress.env("user-email")``` or ```Cypress.env("user-password")```
