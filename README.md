# SauceDemo E2E Tests

E2E tests for [https://www.saucedemo.com/](https://www.saucedemo.com/)

Implemented in [Cypress.io](https://www.cypress.io/)

## Dependencies

NodeJS >= 12 is required. 
Check your version with `node --version` command.


## Installation and running

```bash
## clone this repo to a local directory
git clone https://github.com/maciej-ciach/saucedemo-cypress-tests

## cd into the cloned repo
cd saucedemo-cypress-tests

## install npm packages
npm install

## start tests
npm run tests
```

## Docker

You can also run tests using docker image
```bash
## clone this repo to a local directory
git clone https://github.com/maciej-ciach/saucedemo-cypress-tests

## cd into the cloned repo
cd saucedemo-cypress-tests

## Mount current directrory and run cypress image
docker run -it -v "$(pwd)/:/e2e" -w /e2e cypress/included:8.4.0
```

## License
[MIT](https://choosealicense.com/licenses/mit/)