## Installation
1. Clone the project using ```git clone git@github.com:BladeCKG/NFT-Backend-Test.git ``` command (or via SSH).

2. Go to the project root directory and run ```npm i``` command.

3. Create a file named ```.env``` and add properties in .env.example file:

4. Install Postgres server on your machine. It depends on your environment (Windows or Linux).
And set correct values in ```.env``` file

6. Generate and run migrations by ```npm run mikroorm:generate-migration``` and ```npm run mikroorm:run-migration```

5. Run the Server Project, run ``` npm start ```

### Available routes

| Method   | Resource        | Description | Request | Response                                                                                                                               |
| :------- | :-------------- | :-------------------------------| :---------------------------------| :-------------------------------------------------------------------------- |
| `POST`    | `/users/register`        | Register user with name and email. | {"name":"Daniel", "email": "daniellee1993111@gmail.com"}| {"id":1, "name":"Daniel", "email": "xxx.com", "balance":0}                                                                                           |
| `POST`    | `/users/deposit`    | Deposit | {"id":1, "amount":100} | {"id":1,"name":"Daniel","email":"asdf@sdf.com","balance":100}
| `POST`    | `/users/withdraw`    | Withdraw | {"id":1, "amount":120} | {"statusCode":400,"message":"Withdraw amount must be less than balance"} or {"id":1,"name":"Daniel","email":"asdf@sdf.com","balance":10}
| `GET`    | `/users/{id}`    | Get user info by id |  | {"id":1,"name":"Daniel","email":"asdf@sdf.com","balance":10}
