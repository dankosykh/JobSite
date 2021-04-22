# Account Service API

This is a Node/Express/MongoDB REST API for Accounts that uses JWT for authentication.

## Usage

### Getting Started
This project uses standard npm package structure.

> At this stage mongoDB is not needed, since mock data is used.

### Install dependencies
```bash
yarn install
```

### Run dev environment
```bash
yarn dev
```

### Run production environment
```bash
yarn start
```

### Config

```javascript
//Add the mongo db url with secret
DB_URL=<mongo-connection-string>
//Add any keyword
SECRET=<bcrypt-secret>
```