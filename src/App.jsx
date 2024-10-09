import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [agreement, setAgreement] = useState(false);
  const [country, setCountry] = useState('');
  const [users, setUsers] = useState([]);

  const validation = () => {
    return name && email && password && gender && agreement && country;
  };

  const handlesubmit = () => {
    const payload = {
      name,
      email,
      password,
      gender,
      agreement,
      country,
    };
    setUsers([...users, payload]);
  };

  const handleDelete = (index) => {
    const updatedUser = users.filter((_, i) => i !== index);

    setUsers(updatedUser);
  };

  return (
    <>
      <div className="form-container">
        <div className="styled-form">
          <label>
            Name:
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              className="input-field"
            />
          </label>

          <label>
            Email:
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              className="input-field"
            />
          </label>

          <label>
            Password:
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              className="input-field"
            />
          </label>

          <div className="radio-group">
            <label>Gender:</label>
            <label>
              <input
                onChange={(e) => setGender(e.target.value)}
                type="radio"
                name="gender"
                value="male"
              />
              Male
            </label>
            <label>
              <input
                onChange={(e) => setGender(e.target.value)}
                type="radio"
                name="gender"
                value="female"
              />
              Female
            </label>
            <label>
              <input
                onChange={(e) => setGender(e.target.value)}
                type="radio"
                name="gender"
                value="female"
              />
              Others
            </label>
          </div>

          <label>
            Country:
            <select
              onChange={(e) => setCountry(e.target.value)}
              value={country}
              name="country"
              className="input-field"
            >
              <option value="">Select your country</option>
              <option value="USA">United States</option>
              <option value="Canada">Canada</option>
              <option value="UK">United Kingdom</option>
              <option value="Australia">Australia</option>
              <option value="India">India</option>
            </select>
          </label>

          <label className="checkbox-label">
            <input
              onChange={(e) => setAgreement(e.target.checked)}
              checked={agreement}
              type="checkbox"
              name="agreement"
            />{' '}
            I agree to the terms and conditions
          </label>

          <button
            onClick={handlesubmit}
            type="submit"
            className="submit-button"
            disabled={!validation()}
          >
            Submit
          </button>
        </div>
      </div>

      <div className="user-list">
        <h2>User List</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.name} ({user.email}) - {user.gender}, {user.country}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
