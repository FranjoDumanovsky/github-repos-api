import React from "react";

function UserRepositories({ repos }) {
  return (
    <div>
      <h2>Repositories:</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserRepositories;
