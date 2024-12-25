const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 5000;

const candidates = [
  { id: 1, name: 'Arun', skills: ['JavaScript', 'React'], experience: 5 },
  { id: 2, name: 'Rani', skills: ['Python', 'Django'], experience: 3 },
  { id: 3, name: 'Md Hassan', skills: ['Java', 'Spring Boot'], experience: 7 },
  { id: 4, name: 'Atharva', skills: ['C++', 'Algorithms'], experience: 4 },
  { id: 5, name: 'Aditya', skills: ['Go', 'Kubernetes'], experience: 6 },
  { id: 6, name: 'Riya', skills: ['Ruby', 'Rails'], experience: 2 },
  { id: 7, name: 'Harsh', skills: ['PHP', 'Laravel'], experience: 8 },
  { id: 8, name: 'Kishan', skills: ['Swift', 'iOS'], experience: 5 },
  { id: 9, name: 'Jay', skills: ['C#', '.NET'], experience: 6 },
  { id: 10, name: 'Rakesh', skills: ['TypeScript', 'Angular'], experience: 4 },
];

app.get('/api/candidates', (req, res) => {
  res.json(candidates);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});