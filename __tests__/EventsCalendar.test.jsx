import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import EventsCalendar from '../src/Pages/CuriosityCorner/EventsCalendar/EventsCalendar';

vi.mock('react-calendar', () => ({
  default: ({ onChange, value }) => {
    return (
      <div data-testid="calendar-mock">
        <button onClick={() => onChange(new Date(2026, 2, 10))} data-testid="select-date">
          Select March 10, 2026
        </button>
        <div data-testid="calendar-value">{value?.toDateString()}</div>
      </div>
    );
  },
}));

const renderCalendar = () => {
  return render(
    <BrowserRouter>
      <EventsCalendar />
    </BrowserRouter>
  );
};

describe('EventsCalendar Page', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Page Rendering', () => {
    it('renders the calendar page title', () => {
      renderCalendar();
      
      expect(screen.getByText('Events Calendar')).toBeInTheDocument();
    });

    it('renders the calendar component', () => {
      renderCalendar();
      
      expect(screen.getByTestId('calendar-mock')).toBeInTheDocument();
    });

    it('renders the Selected Date section', () => {
      renderCalendar();
      
      expect(screen.getByText('Selected Date')).toBeInTheDocument();
    });

    it('renders the Upcoming Events section', () => {
      renderCalendar();
      
      expect(screen.getByText('Upcoming Events')).toBeInTheDocument();
    });
  });

  describe('Language Toggle', () => {
    it('renders language toggle buttons', () => {
      renderCalendar();
      
      expect(screen.getByRole('button', { name: 'English' })).toBeInTheDocument();
    });

    it('switches to Bengali language', () => {
      renderCalendar();
      
      const banglaButton = screen.getByRole('button', { name: /বাংলা/i });
      fireEvent.click(banglaButton);
      
      expect(screen.getByText('ইভেন্ট ক্যালেন্ডার')).toBeInTheDocument();
    });
  });

  describe('Calendar Navigation', () => {
    it('renders navigation buttons', () => {
      renderCalendar();
      
      expect(screen.getByLabelText('Previous month')).toBeInTheDocument();
      expect(screen.getByLabelText('Next month')).toBeInTheDocument();
    });

    it('renders Today button', () => {
      renderCalendar();
      
      expect(screen.getByText('Today')).toBeInTheDocument();
    });

    it('navigates between months', () => {
      const { container } = renderCalendar();
      
      const prevButton = screen.getByLabelText('Previous month');
      fireEvent.click(prevButton);
      
      expect(container.textContent).toContain('2026');
    });
  });

  describe('Legend', () => {
    it('renders the calendar legend', () => {
      renderCalendar();
      
      expect(screen.getByText('Calendar Legend')).toBeInTheDocument();
    });

    it('displays legend items', () => {
      renderCalendar();
      
      expect(screen.getByText('Public Holiday')).toBeInTheDocument();
      expect(screen.queryAllByText('School Event').length).toBeGreaterThan(0);
      expect(screen.getByText('Friday (Weekend)')).toBeInTheDocument();
    });
  });

  describe('Major Holidays Section', () => {
    it('renders Major Holidays section', () => {
      renderCalendar();
      
      expect(screen.getByText('Major Holidays')).toBeInTheDocument();
    });

    it('displays holiday items', async () => {
      renderCalendar();
      
      await waitFor(() => {
        expect(screen.getByText('International Mother Language Day')).toBeInTheDocument();
      });
    });
  });

  describe('Weekend Notice', () => {
    it('displays weekend notice', () => {
      renderCalendar();
      
      expect(screen.getByText('Weekend Notice')).toBeInTheDocument();
    });
  });

  describe('Quick Actions', () => {
    it('renders quick action buttons', () => {
      renderCalendar();
      
      expect(screen.getByText('Quick Actions')).toBeInTheDocument();
    });
  });
});
