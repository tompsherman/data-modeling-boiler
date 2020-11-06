# In Terminal:

1. npx gitignore node
2. touch index.js
3. npm init -y
4. touch server.js
5. npm i -D nodemon
6. npm i express dotenv helmet morgans cors knex knex-cleaner sqlite3
7. touch .env
8. npx knex init
9. mkdir data => cd
10. touch db-config.js => cd ..
11. mkdir models => cd
12. touch models.js && router.js
13. code .

## In the Code:

14. package.json => line 6 "scripts" :
    "server": "nodemon index.js",
    "start": "node index.js"

15. index.js _ STATIC _ :
    dotenv.config ; server require ; PORT ; server.listen

16. .env :
    PORT = 8888

17. server.js _ mostly static _ :
    require dependencies ; //require router// ; define server ; use server ; //use router// ; export server

18. knexfile,js _STATIC_ :
    zac rec dev sets

19. data => config.js _STATIC_ :
    knex config.dev

20. models => models.js -dynamic-:
    require config ; module.exports with function names for endpoitns ; functions for endpoitns

21. models => router.js - dynamic-:
    express.Router ; pull in model ; //a ; export

22. test on postman

23. npx knex migrate:make create_ducks_table

24. data => migrations => 2020..._dynamic_:

25. npx knex migrate:latest

26. npx knex seed:make 01-cleanup

27. npx knex seed:make 02-ducks

28. data => seed => 01.js :
    add in cleanup code

29. 02.js :
    add in seed data

30. npx knex seed:run

31. create endpoints in router

32. create functions in model
