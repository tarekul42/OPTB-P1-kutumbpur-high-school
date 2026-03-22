import { createContext, useContext, useState, useCallback } from "react";
import { parentProfile, children, noticeBoard } from "../data/parentData";
import { child1Fees, child2Fees } from "../data/feesData";

const ParentContext = createContext();

const feesMap = {
  1: child1Fees,
  2: child2Fees,
};

export const ParentProvider = ({ children: childrenProp }) => {
  const [parent] = useState(parentProfile);
  const [allChildren] = useState(children);
  const [selectedChildId, setSelectedChildId] = useState(children[0].id);
  const [notifications, setNotifications] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const selectedChild =
    allChildren.find((child) => child.id === selectedChildId) || allChildren[0];

  const childFees = feesMap[selectedChildId] || child1Fees;

  const selectChild = useCallback((childId) => {
    setSelectedChildId(childId);
  }, []);

  const addNotification = useCallback((notification) => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { ...notification, id }]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 5000);
  }, []);

  const sendMessage = useCallback(
    (teacherName) => {
      addNotification({
        type: "success",
        message: `Message sent to ${teacherName} successfully!`,
      });
    },
    [addNotification],
  );

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <ParentContext.Provider
      value={{
        parent,
        allChildren,
        selectedChild,
        selectedChildId,
        selectChild,
        childFees,
        noticeBoard,
        notifications,
        sendMessage,
        logout,
        isLoggedIn,
      }}
    >
      {childrenProp}
    </ParentContext.Provider>
  );
};

export const useParent = () => {
  const context = useContext(ParentContext);
  if (!context) {
    throw new Error("useParent must be used within a ParentProvider");
  }
  return context;
};
