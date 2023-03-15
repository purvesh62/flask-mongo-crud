from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import os
import json
import uuid
app = Flask(__name__)

basedir = os.path.abspath(os.path.dirname(__file__))

# App configurations
app.config['SECRET_KEY'] = 'app-secret-key'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + \
    os.path.join(basedir, 'db.sqlite')

db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(db.String(10), primary_key=True)
    firstName = db.Column(db.String(25))
    email = db.Column(db.String(25))

    def __init__(self, firstName, email):
        self.id = str(uuid.uuid4())[:10]
        self.firstName = firstName
        self.email = email

    def to_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}


@app.route('/users', methods=['GET'])
def get_users():
    """
    GET ALL USERS
    """
    response = {
        "message": "Error while retrieving users",
        "success": False,
    }
    try:
        users = User.query.all()
        users_list = [user.to_dict() for user in users]
        # Create response
        response['message'] = "Users retrieved"
        response['success'] = True
        response['users'] = users_list
        return jsonify(response), 200
    except Exception as e:
        print(e)
        return jsonify(response), 400


@app.route('/user/<id>', methods=['GET'])
def get_user(id):
    """
    Input:
    {
        message : “Users retrieved”,
        success : true,
        users : [
            {
                email : “abc@abc.ca”,
                firstName : “ABC”,
                id : “5abf6783”
            },
            {
                email : “xyz@xyz.ca”,
                firstName: “XYZ”,
                id : “5abf674563”
            }
        ]
    }
    """
    response = {
        'success': False,
        'message': 'Error while fetching the data'
    }
    try:
        user = User.query.filter_by(id=id).first()
        if user:
            response['success'] = True
            response['user'] = user.to_dict()
            del response['message']
            return jsonify(response), 200
        else:
            response['message'] = 'User not found.'
            return jsonify(response), 404
    except Exception as e:
        print(e)
        return jsonify(response), 400


@app.route('/add', methods=['POST'])
def add_user():
    """
    Input:
        {
            email : “xyz@xyz.ca”,
            firstName: “XYZ”,
        }
    """
    response = {
        'success': False,
        'message': 'Error while performing the request'
    }
    try:
        data = request.get_json()
        if data.get('firstName') and data.get('email'):
            user = User(data.get('firstName'), data.get('email'))
            db.session.add(user)
            db.session.commit()

            # Send response
            response['success'] = True
            response['message'] = 'User added'
            return jsonify(response), 200
        else:
            response['message'] = 'Request missing data'
            return jsonify(response), 400
    except Exception as e:
        print(e)
        return jsonify(response), 400


@app.route('/update/<id>', methods=['PUT'])
def update_user(id):
    """
    Input: 
        {
            email : “xyz@xyz.ca”,
            firstName: “XYZ”,
        }
    """
    response = {
        'message': 'Error while performing the request.',
        'success': False
    }
    try:
        data = request.get_json()
        user = User.query.filter_by(id=id).first()
        if user:
            if data.get('firstName'):
                user.firstName = data.get('firstName')
            if data.get('email'):
                user.email = data.get('email')
            db.session.commit()
        else:
            response['message'] = 'User not found'
            return jsonify(response), 404
        # Send response
        response['success'] = True
        response['message'] = 'User updated'
        return jsonify(response), 200
    except Exception as e:
        return jsonify(response), 400


if __name__ == "__main__":
    app.run(debug=True)
