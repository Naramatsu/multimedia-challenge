import Tabs from "./Tabs";
import { render, screen } from "@testing-library/react";
import { galleryTabLabel, tabsList } from "../utils/constants";

describe("Tabs component", () => {
  it("Should render 2 tabs", () => {
    render(<Tabs tabs={tabsList} activeTab={galleryTabLabel} onChangetab />);

    const galleryTab = screen.getByText(/Galeria/i);
    expect(galleryTab).toBeInTheDocument();

    const uploadfileTab = screen.getByText(/Cargar archivo/i);
    expect(uploadfileTab).toBeInTheDocument();
  });
});
