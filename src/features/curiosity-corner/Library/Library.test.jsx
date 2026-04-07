import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Library from './Library';

const renderLibrary = () => {
  return render(
    <BrowserRouter>
      <Library />
    </BrowserRouter>
  );
};

describe('Library Page', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  describe('Page Rendering', () => {
    it('renders the library page title', () => {
      renderLibrary();
      
      expect(screen.getByText('School Library')).toBeInTheDocument();
    });

    it('renders the search input', () => {
      renderLibrary();
      
      const searchInput = screen.getByPlaceholderText(/Search by title or author/i);
      expect(searchInput).toBeInTheDocument();
    });

    it('renders view mode buttons', () => {
      renderLibrary();
      
      expect(screen.getByText('View All')).toBeInTheDocument();
      expect(screen.getByText('My Reading List')).toBeInTheDocument();
    });
  });

  describe('Search Functionality', () => {
    it('filters books by search query', async () => {
      const { container } = renderLibrary();
      
      const searchInput = screen.getByPlaceholderText(/Search by title or author/i);
      fireEvent.change(searchInput, { target: { value: 'Mathematics' } });
      
      await waitFor(() => {
        expect(container.textContent).toContain('Mathematics');
      });
    });

    it('shows no results for non-existent book', async () => {
      renderLibrary();
      
      const searchInput = screen.getByPlaceholderText(/Search by title or author/i);
      fireEvent.change(searchInput, { target: { value: 'NonExistentBook12345' } });
      
      await waitFor(() => {
        expect(screen.getByText(/No books found/i)).toBeInTheDocument();
      });
    });
  });

  describe('Subject Filter', () => {
    it('renders subject filter', () => {
      const { container } = renderLibrary();
      
      const selects = container.querySelectorAll('select');
      expect(selects.length).toBeGreaterThan(0);
    });

    it('filters by subject', async () => {
      const { container } = renderLibrary();
      
      const selects = container.querySelectorAll('select');
      const subjectSelect = selects[0];
      
      fireEvent.change(subjectSelect, { target: { value: 'Science' } });
      
      await waitFor(() => {
        expect(container.textContent).toContain('Science');
      });
    });
  });

  describe('Book Count', () => {
    it('displays book count', async () => {
      renderLibrary();
      
      await waitFor(() => {
        expect(screen.getByText(/Showing \d+ books?/i)).toBeInTheDocument();
      });
    });

    it('updates count after filtering', async () => {
      renderLibrary();
      
      const searchInput = screen.getByPlaceholderText(/Search by title or author/i);
      fireEvent.change(searchInput, { target: { value: 'Physics' } });
      
      await waitFor(() => {
        expect(screen.getByText(/Showing 1 book/i)).toBeInTheDocument();
      });
    });
  });

  describe('View Mode', () => {
    it('switches to favorites view', async () => {
      renderLibrary();
      
      const favoritesButton = screen.getByText('My Reading List').closest('button');
      fireEvent.click(favoritesButton);
      
      await waitFor(() => {
        expect(screen.getByText(/No books in your reading list/i)).toBeInTheDocument();
      });
    });
  });
});
