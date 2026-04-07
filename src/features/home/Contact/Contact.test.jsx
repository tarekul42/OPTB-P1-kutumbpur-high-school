import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Contact from "./Contact";

vi.mock('react-hot-toast', () => ({
  Toaster: () => <div data-testid="toaster" />,
  toast: {
    success: vi.fn().mockReturnValue('mock-toast-id'),
    error: vi.fn(),
    loading: vi.fn(),
    dismiss: vi.fn(),
  },
}));

const renderContact = () => {
  return render(
    <BrowserRouter>
      <Contact />
    </BrowserRouter>
  );
};

describe('Contact Form', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Form Rendering', () => {
    it('renders the contact page title', () => {
      renderContact();
      
      expect(screen.getByText('Contact Us')).toBeInTheDocument();
    });

    it('renders all form fields', () => {
      renderContact();
      
      expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Subject/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    });

    it('renders the submit button', () => {
      renderContact();
      
      expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument();
    });

    it('renders contact information', () => {
      renderContact();
      
      expect(screen.getByText('Contact Information')).toBeInTheDocument();
    });
  });

  describe('Form Field Interactions', () => {
    it('allows typing in full name field', () => {
      renderContact();
      
      const nameInput = screen.getByLabelText(/Full Name/i);
      fireEvent.change(nameInput, { target: { value: 'Jane Smith' } });
      
      expect(nameInput.value).toBe('Jane Smith');
    });

    it('allows typing in email field', () => {
      renderContact();
      
      const emailInput = screen.getByLabelText(/Email Address/i);
      fireEvent.change(emailInput, { target: { value: 'jane@email.com' } });
      
      expect(emailInput.value).toBe('jane@email.com');
    });

    it('allows typing in phone field', () => {
      renderContact();
      
      const phoneInput = screen.getByLabelText(/Phone Number/i);
      fireEvent.change(phoneInput, { target: { value: '01812345678' } });
      
      expect(phoneInput.value).toBe('01812345678');
    });

    it('allows selecting subject', () => {
      renderContact();
      
      const subjectSelect = screen.getByLabelText(/Subject/i);
      fireEvent.change(subjectSelect, { target: { value: 'academics' } });
      
      expect(subjectSelect.value).toBe('academics');
    });

    it('allows typing in message field', () => {
      renderContact();
      
      const messageInput = screen.getByLabelText(/Message/i);
      fireEvent.change(messageInput, { target: { value: 'Test inquiry message' } });
      
      expect(messageInput.value).toBe('Test inquiry message');
    });
  });

  describe('Form Validation', () => {
    it('shows error for invalid email', async () => {
      renderContact();
      
      const emailInput = screen.getByLabelText(/Email Address/i);
      
      await act(async () => {
        fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
        fireEvent.blur(emailInput);
      });
      
      await waitFor(() => {
        expect(screen.getByText(/Please enter a valid email/i)).toBeInTheDocument();
      });
    });

    it('shows error for invalid phone', async () => {
      renderContact();
      
      const phoneInput = screen.getByLabelText(/Phone Number/i);
      
      await act(async () => {
        fireEvent.change(phoneInput, { target: { value: '123' } });
        fireEvent.blur(phoneInput);
      });
      
      await waitFor(() => {
        expect(screen.getByText(/Please enter a valid/i)).toBeInTheDocument();
      });
    });

    it('shows error for short message', async () => {
      renderContact();
      
      const messageInput = screen.getByLabelText(/Message/i);
      
      await act(async () => {
        fireEvent.change(messageInput, { target: { value: 'Hi' } });
        fireEvent.blur(messageInput);
      });
      
      await waitFor(() => {
        expect(screen.getByText(/Message must be at least/i)).toBeInTheDocument();
      });
    });
  });

  describe('Valid Form Submission', () => {
    it('submits form with valid data', async () => {
      renderContact();
      
      const nameInput = screen.getByLabelText(/Full Name/i);
      const emailInput = screen.getByLabelText(/Email Address/i);
      const phoneInput = screen.getByLabelText(/Phone Number/i);
      const subjectSelect = screen.getByLabelText(/Subject/i);
      const messageInput = screen.getByLabelText(/Message/i);
      const submitButton = screen.getByRole('button', { name: /Send Message/i });
      
      await act(async () => {
        fireEvent.change(nameInput, { target: { value: 'John Doe' } });
        fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
        fireEvent.change(phoneInput, { target: { value: '01712345678' } });
        fireEvent.change(subjectSelect, { target: { value: 'admission' } });
        fireEvent.change(messageInput, { target: { value: 'Valid inquiry message for testing' } });
      });
      
      await act(async () => {
        fireEvent.click(submitButton);
      });
      
      await vi.waitFor(() => {
        expect(submitButton).toBeDisabled();
      });
    });
  });

  describe('Contact Information Display', () => {
    it('displays office address', () => {
      renderContact();
      
      expect(screen.getByText(/Kutumbpur High School/i)).toBeInTheDocument();
    });

    it('displays phone number', () => {
      renderContact();
      
      expect(screen.getByText(/\+880 1234 567890/i)).toBeInTheDocument();
    });

    it('displays email address', () => {
      renderContact();
      
      expect(screen.getByText(/info@kutumbpurhighschool.edu.bd/i)).toBeInTheDocument();
    });

    it('displays office hours', () => {
      renderContact();
      
      expect(screen.getByText(/Sunday - Thursday/i)).toBeInTheDocument();
    });
  });
});
