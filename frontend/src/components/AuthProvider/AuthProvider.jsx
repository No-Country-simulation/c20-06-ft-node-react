"use client"
import Cookies from 'js-cookie';
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const token = Cookies.get('authToken');
    if (token) {
      setAuthToken(token);
    }
  }, []);

  const logIn = (token) => {
    Cookies.set('authToken', token, {
      expires: 7,
      path: '/',
      secure: true,
      sameSite: 'Strict'
    });
    setAuthToken(token);
  };

  const logOut = () => {
    Cookies.remove('authToken', { path: '/' });
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ authToken, logIn, logOut, isLoggedIn: !!authToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
