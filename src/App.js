import React, { useState } from "react";
import UserProfile from "./components/userProfile";

function App() {
  const [username, setUsername] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="App">
      {showProfile ? (
        <UserProfile username={username} setUserData={setShowProfile} />
      ) : (
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
          />
          <button onClick={() => setShowProfile(true)}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default App;
