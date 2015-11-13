# Guest Speaker App
[![Build Status](https://travis-ci.org/benhassara/guest-speaker-app.svg?branch=master)](https://travis-ci.org/benhassara/guest-speaker-app)
[![Coverage Status](https://coveralls.io/repos/benhassara/guest-speaker-app/badge.svg?branch=master&service=github)](https://coveralls.io/github/benhassara/guest-speaker-app?branch=master)

An app to allow students to rate and provide feedback on a guest speaker.

## Schedule

1. Part 1
  - App overview
  - Setup (Generator, Github, Travis CI, Heroku)
  - Add Unit Tests
1. Part 2
  - User Stories
  - Code Coverage - istanbul, coveralls
1. Part 3
  - Data Modeling
    - user schema
  - Sequelize / Migrations
    - migrate up / migrate down
1. Part 4
  - Data Modeling
    - speaker schema
  - Database
    - local
    - travis
    - heroku
1. Part 5
  - Authentication
    - passport-github?
    - roll our own?
  - Testing
  - Mocks

## User Stories

1. A user can-
  - view past speakers
  - view upcoming speakers
  - add feedback on on past speakers
  - vote on *potential* upcoming topics
  - login/logout via Github
  - suggest speakers
  - suggest topics
1. A admin can-
  - approve/reject users wanting to login
  - CRUD students
  - CRUD speakers
  - CRUD topics
  - login/logout via Github
  - toggle suggestion features

## Stack

- Issue Tracker: Github Issues
- Build System: Gulp
- Testing: Mocha, Chai, Travis CI, Istanbul (coverage)
- Language Runtime: ES5
- Package Mgmt: npm
- Server: Node, Express
- Database: Postgres
- Front End: jQuery
- CSS Framework: Skeleton
- Templates: Swig

## Tests

Without code coverage:

```sh
$ npm test
```

With code coverage:

```sh
$ npm run cov
```

## Postgres Heroku Setup

1. Create database on Heroku: `heroku addons:create heroku-postgresql:hobby-dev`
1. Update `production` config in */src/server/config.json*
1. Commit, PUSH, etc.
1. Run Migrations on Heroku:

  ```sh
  $ heroku run bash
  $ node_modules/.bin/sequelize db:migrate
  ```
