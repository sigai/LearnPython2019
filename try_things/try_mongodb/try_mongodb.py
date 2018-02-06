from pymongo import MongoClient
client = MongoClient()
db = client.answer
collection = db.test
cid = collection.insert_one({'title':'fuck','desc':'hard'}).inserted_id
print(cid)