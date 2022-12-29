# Education project "online-shop"


**Technologies:**
- React;
- Redux toolkit (RTQ query);
- ESlint;
- Prettier;

*API:* [fakeStoreApi](https://fakestoreapi.com/)

*Project deploy:* [online-store](https://takeamoment.github.io/online-shop/)

Unfortunately Api does not allow interactining with the database. 
For login request:  you can use any of the users' username and password available in users API to get token. any other usernames return error.
For add new user request:  it will return you an object with a new id. remember that nothing in real will insert into the database. so if you want to access the new id you will get a 404 error.