import { AMM_TITLE_FROM_LEFT, AMM_TITLE_FROM_TOP } from "../types";
import { AMMDocTitle } from "./amm-doc-title.service";
import { createMock } from "@golevelup/ts-jest";
import { PDFDocument, PDFFont, PDFPage, rgb } from "pdf-lib";

const drawText = jest.fn();
const height = 123;
const getHeight = jest.fn().mockImplementation(() => height);
const page = createMock<PDFPage>({
  drawText,
  getHeight,
});
const font = createMock<PDFFont>({});
const mockAmmDoc = {
  page,
  doc: createMock<PDFDocument>({}),
  font,
  fontBold: createMock<PDFFont>({}),
};
const title = "Some Title";

describe("AMMDocTitle", () => {
  beforeAll(async () => {
    const ammDocTitle = new AMMDocTitle();

    await ammDocTitle.addTitleTopRight(mockAmmDoc, title);
  });

  it("should draw the title", () => {
    expect(drawText).toHaveBeenCalledWith(title, {
      x: AMM_TITLE_FROM_LEFT,
      y: height - AMM_TITLE_FROM_TOP,
      size: 18,
      font,
      color: rgb(0, 0, 0),
    });
    expect(true).toBeTruthy();
  });
});
