import React, { useState } from "react";


const Connect: React.FC = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [token, setToken] = useState<string | null>(null);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the password and passwordConfirm are the same
    if (password !== passwordConfirm) {
      alert('Passwords do not match');
      return;
    }

    // Check if the email is valid
    if (!email.includes('@')) {
      alert('Invalid email');
      return;
    }

    // Check if the username is valid
    if (username.length < 3) {
      alert('Username too short');
      return;
    }

    // Check if the password is valid
    if (password.length < 8) {
      alert('Password too short');
      return;
    }

    // Make a POST request to the API
    fetch('http://localhost:3000/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        username,
        password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data
        console.log(data);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });

    // setToken('your_token_here');
  };

  return (
    <div className="m-3 p-2 rounded-lg bg-white">
      <div>
        <h1 className="text-2xl font-bold">Connexion</h1>
        <form className="flex flex-col">
          <label className="text-lg font-bold">Email</label>
          <input type="email" className="border-2 border-gray-300 p-2 rounded-lg" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label className="text-lg font-bold">Username</label>
          <input type="text" className="border-2 border-gray-300 p-2 rounded-lg" value={username} onChange={(e) => setUsername(e.target.value)} />
          <label className="text-lg font-bold">Password</label>
          <input type="password" className="border-2 border-gray-300 p-2 rounded-lg" value={password} onChange={(e) => setPassword(e.target.value)} />
          <label className="text-lg font-bold">Confirm Password</label>
          <input type="password" className="border-2 border-gray-300 p-2 rounded-lg" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
          <button className="bg-blue-500 text-white p-2 rounded-lg mt-2" onClick={handleRegister}>Enregistrer</button>
        </form>
      </div>
    </div>
  );
};

export default Connect;