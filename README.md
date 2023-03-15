# CSCI 5709 - Tutorial 5

## Author - [Purvesh Rathod](mailto:purvesh.r@dal.ca) (B00903204)

Created Date: 03/15/2023

| Title                    | Links                                                                 |
| :----------------------- | :-------------------------------------------------------------------- |
| Git repository           | [Repository](https://git.cs.dal.ca/rathod/csci-5709/-/tree/tutorial5) |
| Branch name              | `tutorial5`                                                           |
| Deployed Application URL | [Click here](#)                                                       |

---

## Technology and plugin used in the assignment

- [Flask](https://flask.palletsprojects.com/en/2.2.x/): Built the REST API using Flask.
- [Postman](https://www.postman.com/): To test the APIs.
- [Render](https://render.com/): Deployed application on Render.


---

## Project configuration

Create virtual environment

> `python -m venv venv`

Install requirements

> `pip install -r requirements.txt`

Create database locally by executing the commands given below

> `flask shell`

Initialize SQLite database and fill the dummy entries

```
db.create_all()
user1 = User('user1', 'user1@gmail.com')
user2 = User('user2', 'user2@gmail.com')
db.session.add_all([user1, user2])
db.session.commit()
```


Run application command

> `python app.py`


---


## API Endpoints

1. GET USERS: 

    Endpoint: **/users**

    > `curl --location --request GET 'http://127.0.0.1:5000/users'`

2. GET USER: 

    Endpoint: **/user/:id**

    > `curl --location --request GET 'http://127.0.0.1:5000/user/d7611e7f-8'`


3. POST USER:

    Endpoint:  **/add**

    > `curl --location --request POST 'http://127.0.0.1:5000/add' --header 'Content-Type: application/json' --data-raw '{ "email": "xyz@xyz.ca", "firstName": "XYZ" }'`

4. UPDATE USER: 

    Endpoint: **/update:id**

    > `curl --location --request PUT 'http://127.0.0.1:5000/update/a7d1ef62-7' --header 'Content-Type: application/json' --data-raw '{ "email": "xyz@xyz.com", "firstName": "XYZABC" }'`

---

## References

- [Flask](https://flask.palletsprojects.com/en/2.2.x/)
- [Flask-SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/en/3.0.x/)
- [Postman](https://www.postman.com/)
- [Render](https://render.com/)

