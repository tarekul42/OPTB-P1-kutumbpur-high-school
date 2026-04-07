import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui';

interface PlaceholderPageProps {
  title: string;
  description?: string;
  showHomeButton?: boolean;
}

/**
 * A reusable template for unfinished pages or the 404 page.
 */
const PlaceholderPage: FC<PlaceholderPageProps> = ({
  title,
  description = "We are currently building this page to provide you with the best experience. Please check back later!",
  showHomeButton = true,
}) => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="mb-8 p-6 bg-primary-50 rounded-full">
        <svg
          className="w-20 h-20 text-primary-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      </div>
      <h1 className="text-4xl font-serif font-bold text-neutral-900 mb-4">
        {title}
      </h1>
      <p className="text-xl text-neutral-600 max-w-lg mb-10 leading-relaxed">
        {description}
      </p>
      {showHomeButton && (
        <Link to={ROUTES.HOME}>
          <Button variant="primary" size="lg" className="px-10">
            Back to Home
          </Button>
        </Link>
      )}
    </div>
  );
};

export default PlaceholderPage;
