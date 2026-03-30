import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";
import {
  parentProfile,
  children as initialChildren,
  noticeBoard,
} from "@/shared/data/parentData";
import { child1Fees, child2Fees } from "@/shared/data/feesData";
import {
  type ParentProfile,
  type Child,
  type Notice,
  type ChildFees,
} from "@/shared/types/user";

interface ParentNotification {
  id: number;
  type: "success" | "error";
  message: string;
}

interface ParentContextType {
  parent: ParentProfile;
  allChildren: Child[];
  selectedChild: Child;
  selectedChildId: number;
  selectChild: (childId: number) => void;
  childFees: ChildFees;
  noticeBoard: Notice[];
  notifications: ParentNotification[];
  sendMessage: (teacherName: string) => void;
  logout: () => void;
  isLoggedIn: boolean;
}

const ParentContext = createContext<ParentContextType | undefined>(undefined);

const feesMap: Record<number, ChildFees> = {
  1: child1Fees,
  2: child2Fees,
};

interface ParentProviderProps {
  children: ReactNode;
}

export const ParentProvider = ({
  children,
}: ParentProviderProps): React.JSX.Element => {
  const [parent] = useState<ParentProfile>(parentProfile);
  const [allChildren] = useState<Child[]>(initialChildren);
  const [selectedChildId, setSelectedChildId] = useState<number>(
    initialChildren[0]?.id ?? 1,
  );
  const [notifications, setNotifications] = useState<ParentNotification[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const selectedChild = useMemo(() => {
    return (allChildren.find((child) => child.id === selectedChildId) ||
      allChildren[0]) as Child;
  }, [allChildren, selectedChildId]);

  const childFees = feesMap[selectedChildId] || child1Fees;

  const selectChild = useCallback((childId: number) => {
    setSelectedChildId(childId);
  }, []);

  const addNotification = useCallback(
    (notification: Omit<ParentNotification, "id">) => {
      const id = Date.now();
      setNotifications((prev) => [...prev, { ...notification, id }]);
      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
      }, 5000);
    },
    [],
  );

  const sendMessage = useCallback(
    (teacherName: string) => {
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

  const value = useMemo(
    () => ({
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
    }),
    [
      parent,
      allChildren,
      selectedChild,
      selectedChildId,
      selectChild,
      childFees,
      notifications,
      sendMessage,
      logout,
      isLoggedIn,
    ],
  );

  return (
    <ParentContext.Provider value={value}>{children}</ParentContext.Provider>
  );
};

export const useParent = (): ParentContextType => {
  const context = useContext(ParentContext);
  if (!context) {
    throw new Error("useParent must be used within a ParentProvider");
  }
  return context;
};
