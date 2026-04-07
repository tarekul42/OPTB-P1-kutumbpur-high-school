import { type FC, type ReactNode } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { AppProvider as GlobalAppProvider } from './contexts/AppContext';
import { NotificationProvider } from './contexts/NotificationContext';
import { StudentProvider } from './contexts/StudentContext';
import { ParentProvider } from './contexts/ParentContext';

interface AppProviderProps {
  children: ReactNode;
}

/**
 * Single provider that composes all application contexts.
 * Order matters: Theme and Global App state are outermost.
 */
const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <GlobalAppProvider>
          <StudentProvider>
            <ParentProvider>
              {children}
            </ParentProvider>
          </StudentProvider>
        </GlobalAppProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
