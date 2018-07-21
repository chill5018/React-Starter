import React from 'react';

export default(() => (
  <div>
    <h1>Welcome</h1>
    <div>
      { ['Colin', 'John', 'Thea', 'Mary'].map(user => (
        <p>User: {user}</p>
      ))}
    </div>
  </div>
))