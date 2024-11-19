import { render, cleanup, screen } from "@testing-library/react";
import App from "../App.tsx";

describe("Todos list tests", () => {
  beforeEach(() => {
    render(<App />);
  });
  afterEach(() => {
    cleanup();
  });

  it("Список заданий рендерится", async () => {
    screen.debug();
  });
});
