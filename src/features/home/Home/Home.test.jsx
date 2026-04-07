import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

vi.mock("react-countup", () => ({
  default: ({ end, suffix, prefix }) => (
    <span data-testid="countup">
      {prefix}
      {end}
      {suffix}
    </span>
  ),
}));

vi.mock("react-intersection-observer", () => ({
  useInView: () => ({ ref: vi.fn(), inView: true }),
}));

const renderHome = () => {
  return render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
  );
};

describe("Home Page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("Page Rendering", () => {
    it("renders the home page", async () => {
      renderHome();

      await waitFor(() => {
        expect(document.body).toBeInTheDocument();
      });
    });
  });

  describe("Stats Counter", () => {
    it("renders stat labels", async () => {
      renderHome();

      await waitFor(() => {
        expect(screen.getByText("Students")).toBeInTheDocument();
        expect(screen.getByText("Expert Teachers")).toBeInTheDocument();
        expect(screen.getByText("Est. Year")).toBeInTheDocument();
        expect(screen.getByText("SSC Pass Rate")).toBeInTheDocument();
      });
    });
  });

  describe("Hero Section", () => {
    it("renders hero content", async () => {
      renderHome();

      await waitFor(() => {
        expect(screen.getByText(/Nurturing/i)).toBeInTheDocument();
      });
    });

    it("renders CTA buttons", async () => {
      renderHome();

      await waitFor(() => {
        const applyButtons = screen.getAllByText("Apply Now");
        expect(applyButtons.length).toBeGreaterThan(0);
      });
    });
  });

  describe("Features Section", () => {
    it("renders features", async () => {
      renderHome();

      await waitFor(() => {
        expect(screen.getByText("Academic Excellence")).toBeInTheDocument();
        expect(screen.getByText("Holistic Development")).toBeInTheDocument();
        expect(screen.getByText("Modern Facilities")).toBeInTheDocument();
      });
    });
  });

  describe("News Section", () => {
    it("renders news section", async () => {
      renderHome();

      await waitFor(() => {
        expect(screen.getByText("Latest News")).toBeInTheDocument();
      });
    });

    it("renders filter buttons", async () => {
      renderHome();

      await waitFor(() => {
        expect(screen.getByRole("button", { name: "All" })).toBeInTheDocument();
      });
    });
  });
});
