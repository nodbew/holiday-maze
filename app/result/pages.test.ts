import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import ErrorPage from "./error/[message]/page";
import SuccessPage from "./success/[message]/page";
import FailurePage from "./failure/[message]/page";
import { ReactNode } from "react";

const createPromise = async <T>(obj: T) => obj;
const createRenderer =
  (
    /* React component with search params */
    page: (props: {
      params: Promise<{ message: string }>;
    }) => ReactNode | Promise<ReactNode>
  ) =>
  async (message: string) =>
    render(await page({ params: createPromise({ message }) }));

const testResultPage = (
  pageName: string,
  renderer: (message: string) => Promise<ReturnType<typeof render>>
) => {
  describe.concurrent(`${pageName}: The page is correctly generated with valid data`, async () => {
    await renderer(encodeURIComponent("This is a test message"));
    it("There is a title", () =>
      expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument());
    it("There is a description of the error", () =>
      expect(screen.getByRole("paragraph")).toBeInTheDocument());
    it("There is a reset button", () => {
      const link = screen.getByRole("link");
      expect(link).toBeInTheDocument();
      expect(link).toBeInstanceOf(HTMLAnchorElement);
      expect((link as HTMLAnchorElement).pathname).toStrictEqual("/");
    });
  });
  describe.concurrent(`${pageName}: The page errors with a malformed URI`, () => {
    it("Malformed URI errors", () =>
      expect(async () => await renderer("%E0%A4%A")).rejects.toThrow());
  });
};

// Test error, failure, and success page at once
testResultPage("Error page", createRenderer(ErrorPage));
// testResultPage("Failure page", createRenderer(FailurePage));
// testResultPage("Success page", createRenderer(SuccessPage));
