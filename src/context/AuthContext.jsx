import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // {name, email, address?}

  const login = ({ name, email }) => {
    setUser({ name, email });
  };

  const logout = () => setUser(null);

  const updateAddress = (address) => {
    setUser((prev) => (prev ? { ...prev, address } : prev));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateAddress }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
