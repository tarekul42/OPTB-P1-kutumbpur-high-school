import { type FC } from 'react';
import PlaceholderPage from '@/shared/ui/templates/PlaceholderPage';

/**
 * Custom 404 Not Found page for unknown routes.
 */
const NotFound: FC = () => {
  return (
    <PlaceholderPage
      title="404 — Page Not Found"
      description="It seems you've followed a broken link or entered an address that doesn't exist on our site. Please navigate back to safety."
    />
  );
};

export default NotFound;
