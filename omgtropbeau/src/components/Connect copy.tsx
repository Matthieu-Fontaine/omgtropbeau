import React, { useState } from "react";


const Connect: React.FC = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [token, setToken] = useState<string | null>(null);

  const handleLogin = () => {
    // Perform login logic here
    // Once login is successful, set the token
    setToken('your_token_here');
  };

  const handleRegister = () => {
    // Perform registration logic here
    // Once registration is successful, set the token
    setToken('your_token_here');
  };

  return (
    <div className="m-3 p-2 rounded-lg bg-white">
      {token ? (
        <div>
          <h1 className="text-2xl font-bold">Formulaire de connexion</h1>
          <form className="flex flex-col">
            <label className="text-lg font-bold">Email</label>
            <input type="email" className="border-2 border-gray-300 p-2 rounded-lg" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label className="text-lg font-bold">Password</label>
            <input type="password" className="border-2 border-gray-300 p-2 rounded-lg" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="bg-blue-500 text-white p-2 rounded-lg mt-2" onClick={handleLogin}>Se connecter</button>
          </form>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Connect;