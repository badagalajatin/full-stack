import { useEffect, useState } from 'react';

const blankStudent = { studentId: '', name: '', email: '', department: '', year: '1' };
// Empty locally: Vite forwards /api to localhost:5000. In Vercel, set VITE_API_URL to the Render URL.
const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export default function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState(blankStudent);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [editing, setEditing] = useState(null);
  const [department, setDepartment] = useState('');

  const showMessage = (text) => { setMessage(text); setTimeout(() => setMessage(''), 3500); };
  const request = async (url, options = {}) => {
    const response = await fetch(`${API_BASE_URL}${url}`, { headers: { 'Content-Type': 'application/json' }, ...options });
    if (!response.ok) throw new Error((await response.json().catch(() => ({}))).message || 'Request failed');
    return response.status === 204 ? null : response.json();
  };
  const loadStudents = async () => {
    try { setLoading(true); setStudents(await request('/api/students')); }
    catch (error) { showMessage(`Could not load records: ${error.message}`); }
    finally { setLoading(false); }
  };
  useEffect(() => { loadStudents(); }, []);

  const addStudent = async (event) => {
    event.preventDefault(); setSaving(true);
    try {
      const student = await request('/api/students', { method: 'POST', body: JSON.stringify({ ...form, year: Number(form.year) }) });
      setStudents((current) => [student, ...current]); setForm(blankStudent); showMessage('Student record added successfully.');
    } catch (error) { showMessage(error.message); }
    finally { setSaving(false); }
  };
  const updateDepartment = async (event) => {
    event.preventDefault(); setSaving(true);
    try {
      const updated = await request(`/api/students/${editing._id}/department`, { method: 'PATCH', body: JSON.stringify({ department }) });
      setStudents((current) => current.map((student) => student._id === updated._id ? updated : student));
      setEditing(null); showMessage('Department updated successfully.');
    } catch (error) { showMessage(error.message); }
    finally { setSaving(false); }
  };
  const deleteStudent = async (student) => {
    if (!window.confirm(`Delete ${student.name}'s record?`)) return;
    try {
      await request(`/api/students/${student._id}`, { method: 'DELETE' });
      setStudents((current) => current.filter((item) => item._id !== student._id)); showMessage('Student record deleted.');
    } catch (error) { showMessage(error.message); }
  };

  return <main>
    <header><p className="eyebrow">Case Study </p><h1>Student Records Manager</h1><p>Manage students using MongoDB CRUD operations.</p></header>
    {message && <div className="toast" role="status">{message}</div>}
    <section className="card form-card"><div><p className="eyebrow"></p><h2>Add a student</h2></div>
      <form onSubmit={addStudent}>
        <label>Student ID<input required value={form.studentId} onChange={(e) => setForm({ ...form, studentId: e.target.value })} placeholder="STU-101" /></label>
        <label>Full name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Aarav Sharma" /></label>
        <label>Email<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="aarav@example.com" /></label>
        <label>Department<input required value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })} placeholder="Computer Science" /></label>
        <label>Year<select value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })}>{[1,2,3,4].map((year) => <option key={year}>{year}</option>)}</select></label>
        <button disabled={saving}>{saving ? 'Saving…' : 'Add student'}</button>
      </form>
    </section>
    <section className="card"><div className="section-heading"><div><p className="eyebrow"></p><h2>All student records</h2></div><button className="secondary" onClick={loadStudents}>Refresh</button></div>
      {loading ? <p className="empty">Loading records…</p> : students.length === 0 ? <p className="empty">No students yet. Add the first record above.</p> : <div className="table-wrap"><table><thead><tr><th>Student</th><th>Department</th><th>Year</th><th>Actions</th></tr></thead><tbody>{students.map((student) => <tr key={student._id}><td><strong>{student.name}</strong><span>{student.studentId} · {student.email}</span></td><td>{student.department}</td><td>Year {student.year}</td><td className="actions"><button className="text-button" onClick={() => { setEditing(student); setDepartment(student.department); }}>Change department</button><button className="danger" onClick={() => deleteStudent(student)}>Delete</button></td></tr>)}</tbody></table></div>}
    </section>
    {editing && <div className="overlay"><form className="modal" onSubmit={updateDepartment}><p className="eyebrow">Q4(c)</p><h2>Update department</h2><p>Change the department for <strong>{editing.name}</strong>.</p><label>New department<input autoFocus required value={department} onChange={(e) => setDepartment(e.target.value)} /></label><div className="modal-actions"><button type="button" className="secondary" onClick={() => setEditing(null)}>Cancel</button><button disabled={saving}>{saving ? 'Updating…' : 'Update'}</button></div></form></div>}
  </main>;
}
