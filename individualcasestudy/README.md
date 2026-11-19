# Student Records Manager — Case Study Q4

A full-stack CRUD application that demonstrates the four MongoDB student-collection operations required in Question 4:

1. Insert a student record
2. Retrieve all student records
3. Update a student's department
4. Delete a student record

## Stack

- **Frontend:** React + Vite
- **Backend:** Node.js + Express
- **Database:** MongoDB Atlas (or local MongoDB) via Mongoose

## Run locally

1. Create `server/.env` from `server/.env.example` and set `MONGODB_URI`.
2. Run `npm install` in the root, then `npm run install:all`.
3. Run `npm run dev`.
4. Open `http://localhost:5173`.

The API runs at `http://localhost:5000` and the frontend proxies `/api` requests to it.

## Deployment

Deploy the `server` folder as a Node Web Service on Render with `npm install` as the build command and `npm start` as the start command. Add `MONGODB_URI` in Render's environment-variable settings.

Deploy the `client` folder as a Vite project on Vercel. Set Vercel's `VITE_API_URL` environment variable to your Render service URL (for example, `https://student-records-api.onrender.com`) and redeploy the frontend.

## API operations

| Requirement | Endpoint | MongoDB operation |
| --- | --- | --- |
| Insert | `POST /api/students` | `insertOne` (through `Student.create`) |
| Retrieve all | `GET /api/students` | `find({})` |
| Update department | `PATCH /api/students/:id/department` | `findByIdAndUpdate` with `$set` |
| Delete | `DELETE /api/students/:id` | `findByIdAndDelete` |
