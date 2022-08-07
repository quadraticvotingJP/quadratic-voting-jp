import React, { ReactElement } from "react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { NextRouter } from "next/router";
import { render, RenderOptions } from "@testing-library/react";
import "@testing-library/jest-dom";

// テストコード実装時のモック環境を構築
const AllTheProviders: React.FC = () => {
  const mockRouter: NextRouter = {
    route: "/",
    pathname: "/",
    query: {},
    asPath: "/",
    basePath: "/",
    isLocaleDomain: true,
    isReady: true,
    push: jest.fn(),
    prefetch: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    beforePopState: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isPreview: false,
  };

  return <RouterContext.Provider value={mockRouter}></RouterContext.Provider>;
};

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
