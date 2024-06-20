/* eslint-disable */
import Gallery, { GalleryInterface } from "./Gallery";
import { render } from "@testing-library/react";
import FileStateContext from "../context/FileStateContext";
import { filesMock } from "../utils/constantsTest";

const setFileSelected = jest.fn();

const props: GalleryInterface = {
  mediaList: [],
  fileSelected: null,
  setFileSelected,
};

const galleryWrapper = (newProps = props) => {
  return render(
    <FileStateContext>
      <Gallery {...newProps} />
    </FileStateContext>
  );
};

describe("Gallery component", () => {
  it("Should render without files", () => {
    const { container } = galleryWrapper();
    const files = container.querySelectorAll(".file");

    expect(files.length).toBe(0);
  });

  it("Should render files", () => {
    const newProps = {
      ...props,
      mediaList: filesMock,
    };
    const { container } = galleryWrapper(newProps);
    const files = container.querySelectorAll(".file");

    expect(files.length).toBe(3);
  });
});
