use studentsdb
db.createCollection('stude');

db.getCollection('stude').insertMany([{_id : 1, 
name:"Kavana", 
sem : 1,
marks : [70, 87, 90 ]},

{_id : 2, 
name:"Ayaan Sharief", 
sem : 2, 
marks : [ 90, 77, 80 ]},
{
_id : 3, 
name:"Varsha", 
sem : 3, 
marks : [83, 67, 95 ]},
{
_id : 4, 
name:"Shifa Banu", 
sem : 4, 
marks : [75, 81, 99 ]}]);
db.stude.updateOne(
  { _id: 1 },
  { $addToSet: { letters: { $each: ["c", "d"] } } }
)
db.stud.updateMany(
  {},
  { $addToSet: { letters: { $each: ["M", "N"] } } }
)
db.stude.updateOne(
  { name: "Shifa Banu" },
  { $addToSet: { marks: 100 } }
)
db.stude.updateMany(
  {},
  { $addToSet: { marks: 100 } }
)
db.stude.find();