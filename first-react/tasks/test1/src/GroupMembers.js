import React from 'react';

const GroupMembers = () => {
  const members = [
    'Manuel', 'Menata','Robel',
    'Rakeb','Fkremariam','fentahun',
    'Natinael','Abdurazak','Abdurahman','Eden'];

  return (
    <div>
      <h2>Group Members</h2>
      <ul>
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroupMembers;
