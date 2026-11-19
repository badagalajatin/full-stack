import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import Student from './models/Student.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_, res) => {
  res.json({ status: 'ok', database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected' });
});

// Q4(a): Insert a student record. Equivalent MongoDB operation: db.students.insertOne(...)
app.post('/api/students', async (req, res, next) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) { next(error); }
});

// Q4(b): Retrieve all student records. Equivalent MongoDB operation: db.students.find({})
app.get('/api/students', async (_, res, next) => {
  try {
    const students = await Student.find({}).sort({ createdAt: -1 });
    res.json(students);
  } catch (error) { next(error); }
});

// Q4(c): Update a student's department. Equivalent operation: db.students.updateOne({_id}, {$set:{department}})
app.patch('/api/students/:id/department', async (req, res, next) => {
  try {
    const department = String(req.body.department || '').trim();
    if (!department) return res.status(400).json({ message: 'Department is required' });
    const student = await Student.findByIdAndUpdate(req.params.id, { $set: { department } }, { new: true, runValidators: true });
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (error) { next(error); }
});

// Q4(d): Delete a student record. Equivalent MongoDB operation: db.students.deleteOne({_id})
app.delete('/api/students/:id', async (req, res, next) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.status(204).send();
  } catch (error) { next(error); }
});

app.use((error, _, res, __) => {
  if (error instanceof mongoose.Error.CastError) return res.status(400).json({ message: 'Invalid student ID' });
  if (error.code === 11000) return res.status(409).json({ message: 'A student with this Student ID already exists' });
  if (error.name === 'ValidationError') return res.status(400).json({ message: Object.values(error.errors).map((e) => e.message).join('. ') });
  console.error(error);
  res.status(500).json({ message: 'Something went wrong on the server' });
});

mongoose.connect(process.env.MONGODB_URI)
  .then(() => app.listen(port, '0.0.0.0', () => console.log(`API listening on port ${port}`)))
  .catch((error) => {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  });
