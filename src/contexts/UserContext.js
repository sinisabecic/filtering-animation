import { createContext, useState, useMemo } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const values = useMemo(() => ({ user, setUser }), [user, setUser]);

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
