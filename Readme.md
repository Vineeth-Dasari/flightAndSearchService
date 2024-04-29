-clone the project on your local

Execute npm install on the same path as of your root directory of teh downloaded project

-Create a env file in the root directory and add the following environment variable

PORT=3000

-Inside the src/config folder create a new file config.json and then add the following piece of json

{
  "development": {
    "username": YOUR_MYSQL_ROOT_NAME,
    "password": YOUR_DB_PASSWORD,
    "database": "Flights_Search_DB",
    "host": "127.0.0.1",
    "dialect": "mysql"
}
}

Once you've added your db config as listed above, go to the src folder from your terminal and execute npx sequelize db:create
git

## Tables
    -City id, name, created_at, updated_at

    -Airport id, name, address, city_id, created_at, updated_at

        --> Relationship -> City has many airports and Airport belongs to a city (one to many)
        



/ This is for feature based architecture but we are focusing on role based we are working on above one

    -flights
        /models
        /controllers
        ....

    -search
        /models
        /controllers
        ....