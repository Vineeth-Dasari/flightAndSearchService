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











/ This is for feature based architecture but we are focusing on role based we are working on above one

    -flights
        /models
        /controllers
        ....

    -search
        /models
        /controllers
        ....