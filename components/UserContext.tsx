import React, { useState, useEffect } from "react";

// import Analytics from "../utils/analytics";
import { User } from "../types";

type TProps = {
  initialUser: User.TUser | null;
  children: React.ReactNode;
};

type TState = {
  user: User.TUser | null;
  setUser: (user: User.TUser | null) => void;
};

const UserContext = React.createContext<TState>({
  user: null,
  setUser: () => null,
});

const UserProvider = (props: TProps) => {
  const { initialUser, children } = props;
  const [user, setUser] = useState<User.TUser | null>(initialUser);

  useEffect(() => {
    // Analytics.setUserId(user?.id || null);
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
export { UserProvider };
