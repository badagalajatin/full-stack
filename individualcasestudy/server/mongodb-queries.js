// Case Study Question 4 — MongoDB shell equivalents for the API operations.

// (a) Insert a student record
db.students.insertOne({
  studentId: 'STU-101',
  name: 'Aarav Sharma',
  email: 'aarav@example.com',
  department: 'Computer Science',
  year: 2
});

// (b) Retrieve all student records
db.students.find({});

// (c) Update a student's department
db.students.updateOne(
  { studentId: 'STU-101' },
  { $set: { department: 'Information Technology' } }
);

// (d) Delete a student record
db.students.deleteOne({ studentId: 'STU-101' });
