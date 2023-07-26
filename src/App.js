import React, { useState } from "react";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();

    //Validate username
    const isUsernameValid =
      formData.username === formData.username.toLowerCase();
    setError(!isUsernameValid ? "Username must be lowercase" : "");
  };
  const [formData, setFormData] = useState({
    username: "minhtri",
    email: "minhtri@gmail.com",
    language: "VN",
    isGoing: "true",
  });
  const handleInputChange = (e) => {
    const field = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [field]: value });
    if (field === "username") {
      const isUsernameValid = value === value.toLowerCase();
      setError(!isUsernameValid ? "Username must be lowercase" : "");
    }
  };
  const [error, setError] = useState("");

  return (
    <div>
      <p>{error}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            value={formData.username}
            onChange={handleInputChange}
            type="text"
            name="username"
            id="username"
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            value={formData.email}
            onChange={handleInputChange}
            type="text"
            name="email"
            id="email"
            autoComplete="off"
          />
        </div>
        <div>
          <label>
            Language
            <select
              value={formData.language}
              onChange={handleInputChange}
              name="language"
            >
              <option value="VN">VN</option>
              <option value="EN">EN</option>
              <option value="DE">DE</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="isGoing"
              id="isGoing"
              checked={formData.isGoing}
              onChange={handleInputChange}
            />
            Is going?
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
