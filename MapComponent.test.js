import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useLoadScript } from "@react-google-maps/api";
import MapComponent from "./MapComponent";

// Mocking the useLoadScript from @react-google-maps/api
jest.mock("@react-google-maps/api", () => ({
  GoogleMap: jest
    .fn()
    .mockImplementation(({ children }) => <div>{children}</div>),
  Marker: jest.fn().mockReturnValue(null),
  useLoadScript: jest.fn(),
  HeatmapLayer: jest.fn().mockReturnValue(null),
}));

describe("MapComponent", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders loading state initially", () => {
    useLoadScript.mockReturnValue({
      isLoaded: false,
      loadError: null,
    });

    render(<MapComponent />);

    expect(screen.getByText("Loading Maps...")).toBeInTheDocument();
  });

  test("renders error state if there is a loading error", () => {
    useLoadScript.mockReturnValue({
      isLoaded: false,
      loadError: "Error loading maps",
    });

    render(<MapComponent />);

    expect(screen.getByText("Error loading maps")).toBeInTheDocument();
  });
});
