# CSCI 5709 - Tutorial 5

## Author - [Purvesh Rathod](mailto:purvesh.r@dal.ca) (B00903204)

Created Date: 04/01/2023

| Title                    | Links                                                                 |
|:-------------------------|:----------------------------------------------------------------------|
| Git repository           | [Repository](https://git.cs.dal.ca/rathod/csci-5709/-/tree/tutorial7) |
| Branch name              | `tutorial7`                                                           |
| Deployed Application URL | [Click here](https://flask-tutorial5-dbh0.onrender.com)               |

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

Run application command

> `python app.py`


---

## API Endpoints

1. GET USERS:

   Endpoint: **/users**

   > `curl --location --request GET 'https://flask-tutorial5-dbh0.onrender.com/users'`

2. GET USER:

   Endpoint: **/user/:id**

   > `curl --location --request GET 'https://flask-tutorial5-dbh0.onrender.com/user/d7611e7f-8'`


3. POST USER:

   Endpoint:  **/add**

   > `curl --location --request POST 'https://flask-tutorial5-dbh0.onrender.com/add' --header 'Content-Type: application/json' --data-raw '{ "email": "xyz@xyz.ca", "firstName": "XYZ" }'`

4. UPDATE USER:

   Endpoint: **/update:id**

   > `curl --location --request PUT 'https://flask-tutorial5-dbh0.onrender.com/update/a7d1ef62-7' --header 'Content-Type: application/json' --data-raw '{ "email": "xyz@xyz.com", "firstName": "XYZABC" }'`


5. DELETE USER:

   Endpoint: **/delete:id**

   > `curl --location --request DELETE 'http://127.0.0.1:5000/delete/64288228e4610e3a8d566c93'`

---

## References

- [Flask](https://flask.palletsprojects.com/en/2.2.x/)
- [Flask-SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/en/3.0.x/)
- [Postman](https://www.postman.com/)
- [Render](https://render.com/)

