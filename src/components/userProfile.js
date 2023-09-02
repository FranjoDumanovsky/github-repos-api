import React, { useState, useEffect } from "react";
import UserRepositories from "./userRepositories";

function UserProfile({ username, setUserData }) {
  const [userData, setProfileData] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setProfileData(data);
    };

    const fetchUserRepos = async () => {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const data = await response.json();
      setRepos(data);
    };

    fetchUserData();
    fetchUserRepos();
  }, [username]);

  return (
    <div>
      {userData && (
        <>
          <h1>{userData.name}</h1>
          <img src={userData.avatar_url} alt={`${userData.name}'s avatar`} />
          <p>Location: {userData.location}</p>
          <p>Bio: {userData.bio}</p>
          <UserRepositories repos={repos} />
          <button onClick={() => setUserData(null)}>Reset</button>
        </>
      )}
    </div>
  );
}

export default UserProfile;
