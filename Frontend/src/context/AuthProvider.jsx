import React, { createContext, useContext, useState } from 'react'

// 1. Create the context
const AuthContext = createContext()

function AuthProvider({ children }) {
  // Set initial user from localStorage, if available
  const initialAuthUser = localStorage.getItem('Users');
  const [authUser, setAuthUser] = useState(initialAuthUser ? JSON.parse(initialAuthUser) : undefined);

  return (
    <AuthContext.Provider value={[ authUser, setAuthUser ]}>
      {children}
    </AuthContext.Provider>
  )
}

// 2. Create a custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

export default AuthProvider
