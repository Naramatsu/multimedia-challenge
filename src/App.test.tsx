/* eslint-disable */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import userEvent from "@testing-library/user-event";

import FileStateContext from "./context/FileStateContext";

const AppWrapped = () => {
  return render(
    <FileStateContext>
      <App />
    </FileStateContext>
  );
};

describe("App component", () => {
  it("Should render app title h1", () => {
    AppWrapped();
    const appTitle = screen.getByText(
      /Prueba Tecnica SWE II - Alexandra Lozano Immigration Law Interview Process/i
    );
    expect(appTitle).toBeInTheDocument();
  });

  it("Should open the Modal component", () => {
    const { container } = AppWrapped();

    let modal = container.querySelector(".modal");
    expect(modal).not.toBeInTheDocument();

    const btnShowModal = screen.getByText(/Abrir Modal/i);
    expect(btnShowModal).toBeInTheDocument();

    userEvent.click(btnShowModal);
    modal = container.querySelector(".modal");
    expect(modal).toBeInTheDocument();
  });

  it("Should close the Modal component", () => {
    const { container } = AppWrapped();

    let modal = container.querySelector(".modal");
    expect(modal).not.toBeInTheDocument();

    const btnShowModal = screen.getByText(/Abrir Modal/i);
    expect(btnShowModal).toBeInTheDocument();

    userEvent.click(btnShowModal);
    modal = container.querySelector(".modal");
    expect(modal).toBeInTheDocument();

    const closeButton = screen.getByText(/cerrar/i);
    expect(closeButton).toBeInTheDocument();

    userEvent.click(closeButton);
    modal = container.querySelector(".modal");
    expect(modal).not.toBeInTheDocument();
  });

  it("Should change tab", () => {
    AppWrapped();
    const btnShowModal = screen.getByText(/Abrir Modal/i);
    userEvent.click(btnShowModal);
    const uploadfileTab = screen.getByText(/Cargar archivo/i);
    userEvent.click(uploadfileTab);
    const inputFile = screen.getByTestId(/file-input/i);
    expect(inputFile).toBeInTheDocument();
  });
});
