import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import { AppProvider } from "../../../../app/providers/AppContext";

const renderNavbar = () => {
  return render(
    <BrowserRouter>
      <AppProvider>
        <Navbar />
      </AppProvider>
    </BrowserRouter>,
  );
};

describe("Navbar Component", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  describe("Navigation Links", () => {
    it("renders the school logo text", () => {
      const { container } = renderNavbar();

      expect(container.textContent).toContain("Kutumbpur");
    });

    it("renders FAQ link", () => {
      const { container } = renderNavbar();

      expect(container.textContent).toContain("FAQ");
    });

    it("renders search button", () => {
      renderNavbar();

      const searchButton = screen.getByTitle(/Search/i);
      expect(searchButton).toBeInTheDocument();
    });

    it("renders theme toggle button", () => {
      renderNavbar();

      const themeButton = screen.getByTitle(/Switch to/i);
      expect(themeButton).toBeInTheDocument();
    });

    it("renders notifications button", () => {
      renderNavbar();

      const notificationButton = screen.getByTitle(/Notifications/i);
      expect(notificationButton).toBeInTheDocument();
    });
  });

  describe("Mobile Menu", () => {
    it("renders mobile menu button", () => {
      renderNavbar();

      const hamburgerButton = screen.getByRole("button", {
        name: /Open main menu/i,
      });
      expect(hamburgerButton).toBeInTheDocument();
    });

    it("opens mobile menu on click", async () => {
      renderNavbar();

      const hamburgerButton = screen.getByRole("button", {
        name: /Open main menu/i,
      });
      fireEvent.click(hamburgerButton);

      await waitFor(() => {
        const closeButton = screen.getByText("×");
        expect(closeButton).toBeInTheDocument();
      });
    });
  });

  describe("Dropdown Menus", () => {
    it("renders menu categories", () => {
      const { container } = renderNavbar();

      expect(container.textContent).toContain("Home");
      expect(container.textContent).toContain("Edu Adventure");
      expect(container.textContent).toContain("Portals");
      expect(container.textContent).toContain("Curiosity Corner");
    });
  });
});
