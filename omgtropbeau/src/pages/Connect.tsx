import React, { useState } from "react";

import * as AuthService from "../services/auth.service";

import { motion } from "framer-motion"

const Connect: React.FC = () => {
  const [isExpendSection, setIsExpendSection] = useState(true);

  const [lemail, setLemail] = useState("");
  const [lpassword, setLpassword] = useState("");

  const [rusername, setRusername] = useState("");
  const [remail, setRemail] = useState("");
  const [rpassword, setRpassword] = useState("");
  const [rconfirmPassword, setRconfirmPassword] = useState("");

  const [isValidLemail, setIsValidLemail] = useState(true);
  const [isValidLpassword, setIsValidLpassword] = useState(true);

  const [isValidRusername, setIsValidRusername] = useState(true);
  const [isValidRemail, setIsValidRemail] = useState(true);
  const [isValidRpassword, setIsValidRpassword] = useState(true);
  const [isValidRconfirmPassword, setIsValidRconfirmPassword] = useState(true);



  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the email is valid
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lemail)) {
      console.log('email is not valid');
      setIsValidLemail(false);
      return;
    }


    console.log('all is valid', lemail, lpassword)
    AuthService.login(lemail, lpassword);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('register');
    // Check if the password and passwordConfirm are the same
    if (rpassword !== rconfirmPassword) {
      // effect on the password input
      console.log('passwords are not the same');
      setIsValidRconfirmPassword(false);
      return;
    }

    // Check if the email is valid
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(remail)) {
      console.log('email is not valid');
      setIsValidRemail(false);
      return;
    }

    // Check if the username is valid
    if (rusername.length < 3) {
      console.log('username is not valid');
      setIsValidRusername(false);
      return;
    }

    // Check if the password is valid
    if (rpassword.length < 8) {
      console.log('password is not valid');
      setIsValidRpassword(false);
      return;
    }

    console.log('all is valid', rusername, remail, rpassword, rconfirmPassword)
    AuthService.register(rusername, remail, rpassword);

  };

  const handleSectionClick = () => {
    setIsExpendSection(!isExpendSection);
  };

  return (
    <div className='w-full h-screen flex flex-col bg-admin-green-blue overflow-hidden'>
      <motion.div
        className='w-full rounded-xl flex flex-col items-center justify-center px-4'
        onClick={!isExpendSection ? handleSectionClick : undefined}
        initial={true}
        animate={{ height: isExpendSection ? "80vh" : "20vh" }}>

        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 ">
          <div className="text-center">
            <h1 className="my-3 text-4xl font-bold">Connexion</h1>
          </div>
          {isExpendSection && (

            <form noValidate action="" className="space-y-12 mt-6" data-bitwarden-watching="1">
              <div className="space-y-4">
                <div>
                  <label htmlFor="lemail" className="block mb-2 text-sm">Email</label>
                  <input type="email" name="lemail" id="lemail" placeholder="leroyJ@Gibs.com" className="w-full px-3 py-2 border rounded-md"
                          value={lemail} onChange={(e) => setLemail(e.target.value)} />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="lpassword" className="text-sm">Password</label>
                    {/* <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a> */}
                  </div>
                  <input type="password" name="lpassword" id="lpassword" placeholder="********" className="w-full px-3 py-2 border rounded-md"
                          value={lpassword} onChange={(e) => setLpassword(e.target.value)} />
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-button-blue text-white"
                    onClick={handleLogin}>Se connecter</button>
                </div>
              </div>
            </form>
          )}
        </div>

      </motion.div>

      <motion.div
        className='w-full rounded-md flex flex-col items-center justify-center px-4 bg-admin-beige'
        onClick={isExpendSection ? handleSectionClick : undefined}
        initial={false}
        animate={{ height: !isExpendSection ? "80vh" : "20vh" }}>

        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10">
          <div className="text-center">
            <h1 className="my-3 text-4xl font-bold">Inscription</h1>
          </div>
          {!isExpendSection && (

            <form noValidate action="" className="space-y-12 mt-6" data-bitwarden-watching="1">
              <div className="space-y-4">
                <div>
                  <label htmlFor="rusername" className="block mb-2 text-sm">Username</label>
                  <input type="text" name="rusername" id="rusername" placeholder="Ncis" className="w-full px-3 py-2 border rounded-md"
                          value={rusername} onChange={(e) => setRusername(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="remail" className="block mb-2 text-sm">Email</label>
                  <input type="email" name="remail" id="remail" placeholder="leroyJ@Gibs.com" className="w-full px-3 py-2 border rounded-md"
                          value={remail} onChange={(e) => setRemail(e.target.value)} />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="rpassword" className="text-sm">Password</label>
                    {/* <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a> */}
                  </div>
                  <input type="password" name="rpassword" id="rpassword" placeholder="********" className={`w-full px-3 py-2 border rounded-md ${isValidRconfirmPassword || isValidRpassword ? '' : 'animate-shake border-2 border-red-600 bg-red-100'}`}
                          value={rpassword} onChange={(e) => setRpassword(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="rconfirmPassword" className="block mb-2 text-sm">Confirm password</label>
                  <input type="password" name="rconfirmPassword" id="rconfirmPassword" placeholder="********" className={`w-full px-3 py-2 border rounded-md ${isValidRconfirmPassword ? '' : 'animate-shake border-2 border-red-600 bg-red-100'}`}
                          value={rconfirmPassword} onChange={(e) => setRconfirmPassword(e.target.value)} />
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <button type="button" className="w-full px-8 py-3 rounded-md bg-admin-light-beige text-gray-700 font-semibold"
                    onClick={handleRegister}>S'incrire !</button>
                </div>
              </div>
            </form>
          )}
        </div>

      </motion.div>

    </div>
  );
};

export default Connect;