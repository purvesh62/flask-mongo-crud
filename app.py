from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient
import os
import json
import uuid
from bson.json_util import dumps
from bson.objectid import ObjectId

app = Flask(__name__)

basedir = os.path.abspath(os.path.dirname(__file__))

# App configurations
app.config['SECRET_KEY'] = 'app-secret-key'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


class MongoDB:

    def __init__(self):
        self.user = "tutorial7"
        self.password = "gKhZZOYEZanCBFdv"
        self.collection = "tutorial7"
        self.client = MongoClient(f"mongodb+srv://{self.user}:{self.password}@cluster0.usizazp.mongodb.net/")
        cursor = self.client['csci5709']
        self.collection = cursor[self.collection]

    def read_documents(self):
        documents = self.collection.find()
        records = []
        for data in documents:
            records.append(json.loads(dumps(data)))
        return records

    def read_document(self, id):
        document = None
        try:
            document = self.collection.find_one({'_id': ObjectId(id)})
        except Exception as e:
            print(e)
        if document:
            return json.loads(dumps(document))
        else:
            return None

    def write_document(self, data):
        response = self.collection.insert_one(data)

    def update_document(self, id, data):
        response = self.collection.update_one({
            "_id": ObjectId(id)
        }, {"$set": data})
        output = {'Status': 'Successfully Updated' if response.modified_count > 0 else "Nothing was updated."}
        return output

    def delete_document(self, id):
        response = self.collection.delete_one({
            '_id': ObjectId(id)
        })
        return True if response.deleted_count > 0 else False


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
        users = MongoDB().read_documents()
        response['message'] = "Users retrieved"
        response['success'] = True
        response['users'] = users
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
        user = MongoDB().read_document(id)
        if user:
            response['success'] = True
            response['user'] = {
                "id": user['_id']['$oid'],
                "firstName": user['firstName'],
                "email": user['email']
            }
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
            MongoDB().write_document({
                "email": data.get("email"),
                "firstName": data.get("firstName")
            })
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
        MongoDB().update_document(id, data)
        response['success'] = True
        response['message'] = 'User updated'
        return jsonify(response), 200
    except Exception as e:
        return jsonify(response), 400


@app.route('/delete/<id>', methods=['DELETE'])
def delete_user(id):
    response = {
        'message': 'Error while performing the request.',
        'success': False
    }
    status = 400
    try:
        if id:
            if MongoDB().delete_document(id):
                response['message'] = "User deleted"
                response['success'] = True
                return response, 200

        response['message'] = "User id in valid or not found"
        status = 404

    except Exception as e:
        print(e)

    return response, status


# if __name__ == "__main__":
#     app.run(debug=True)
