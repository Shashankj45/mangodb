use studentsdb

db.getCollection('students').insertOne({
  _id: 1,
  std_name: "Mukesh",
  Gender: "Male",
  class: "VI",
  age: 11,
  grd_point: 33
});
db.getCollection('students').insertOne({
  _id: 2,
  std_name: "Dechamma",
  Gender: "Female",
  class: "VI",
  age: 25,
  grd_point: 30
});

db.getCollection('students').insertOne({
  _id: 3,
  std_name: "Akash",
  Gender: "Male",
  class: "V",
  age: 20,
  grd_point: 35.1257
});

db.getCollection('students').insertOne({
  _id: 4,
  std_name: "Geetha",
  Gender: "Female",
  class: "X",
  age: 30,
  grd_point: 36.2514
});

db.getCollection('students').insertOne({
  _id: 5,
  std_name: "Bhomika",
  Gender: "Female",
  class: "X",
  age: 23,
  grd_point: 35.5201
});

db.students.find({ age: { $gt: 17 } })
db.students.find({ age: { $gte: 25 } })
db.students.find({ class: { $in: ["VI", "X"] } });
db.students.find({ age: { $lt: 25 } })
db.students.find({ age: { $lte: 20 } })
db.getCollection('stud').Many([{"_id" : 1, 
name:"Kavana", 
"sem" : 1
"marks" : { 70, 87, 90 }},

{"_id" : 2, 
name:"Ayaan Sharief", 
"sem" : 2, 
"marks" : { 90, 77, 80 }},
{
"_id" : 3, 
name:"Varsha", 
"sem" : 3, 
"marks" : {83, 67, 95 }},
{
"_id" : 4, 
name:"Shifa Banu", 
"sem" : 4, 
"marks" : {75, 81, 99 }}]);