import { useState, useEffect, createContext, useContext } from "react";
import { doc, getDoc } from "firebase/firestore";
import { commerceDb } from "../utils/firebase/index";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    userConfirmPassword: "",
  });
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState("");

  //   useEffect(() => {}, []);

  const fetchDisplayName = async (uid) => {
    try {
      const docRef = doc(commerceDb, "user", uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const { displayName } = docSnap.data();
        setDisplayName(displayName);
        setUser((prevUser) => ({
          ...prevUser,
          displayName: displayName,
        }));
        console.log("Fetched DisplayName:", displayName);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error getting document:", error);
    }
  };

  useEffect(() => {
    const UID = localStorage.getItem("UID");
    if (UID) {
      fetchDisplayName(UID);
    }
  }, []);

  const updateUser = (displayName, email, uid) => {
    setUser({ displayName, email, uid });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userData,
        setUserData,
        updateUser,
        displayName,
        setDisplayName,
        fetchDisplayName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
