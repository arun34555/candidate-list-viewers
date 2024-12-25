import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CandidateListViewer = () => {
  const [candidates, setCandidates] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    axios.get('http://localhost:5000/api/candidates')
      .then(response => setCandidates(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredCandidates = candidates.filter(candidate => 
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const sortedCandidates = [...filteredCandidates].sort((a, b) => {
    return sortOrder === 'asc' ? a.experience - b.experience : b.experience - a.experience;
  });

  return (
    <div>
      <h1>Candidate List</h1>
      <input 
        type="text" 
        placeholder="Search by Name or Skills" 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)} 
      />
      <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
        Sort by Experience ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Skills</th>
            <th>Years of Experience</th>
          </tr>
        </thead>
        <tbody>
          {sortedCandidates.map(candidate => (
            <tr key={candidate.id}>
              <td>{candidate.name}</td>
              <td>{candidate.skills.join(', ')}</td>
              <td>{candidate.experience}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CandidateListViewer;