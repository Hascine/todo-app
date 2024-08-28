# Setup local server

## Install dependencies

```js
cd Task-3

cd Server

npm/bun install
```

## Setup DB

Database on this project using postgres

checkout the config folder inside Server folder

```js
"development": {
    "username": "postgres",
    "password": "postgres",
    "database": "todo_app",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
```

> [!NOTE]
> make sure the information suits your postgress account especially for the `username` and `password`

run this command on your vscode terminal

```js
npm/bun run createDB

npm/bun run setup

```

## Running the server

run this at terminal

```
npx/bunx nodemon app.js
```

## Endpoints

### User

```js
POST / login;
```

### Task

```js
GET /task
POST /task
PUT /task/:id
DELETE /task/:id
```

### Subtask

```js
GET /task/:TaskId/subtask
POST /task/:TaskId/subtask
PUT /subtask/:id
DELETE /subtask/:id
```

## Testing Login Accounts

#1

```
Email: johnD@mail.com
Password: test123
```

#2

```
Email: janeD@mail.com
Password: test123
```

For this experiment, i intentionally did not include the `.env` file in the `.gitignore`.

for the front end havent done it yet but i'll keep on continue this task.
