import { AMMDoc, AMM_LEFT_MARGIN, AMM_LOGO_FROM_TOP } from "../types";
import { AMMDocLogo } from "./amm-doc-logo.service";
import { createMock } from "@golevelup/ts-jest";
import { PDFDocument, PDFFont, PDFPage } from "pdf-lib";

const pngImage = {
  height: 222,
  width: 111,
};
const drawImage = jest.fn();
const height = 123;
const getHeight = jest.fn().mockImplementation(() => height);
const page = createMock<PDFPage>({
  drawImage,
  getHeight,
});
const font = createMock<PDFFont>({});
const embedPng = jest.fn().mockImplementation(() => pngImage);
const mockAmmDoc = createMock<AMMDoc>({
  page,
  doc: createMock<PDFDocument>({ embedPng }),
  font,
  fontBold: createMock<PDFFont>({}),
});
const title = "Some Title";

describe("AMMDocLogo", () => {
  beforeAll(async () => {
    const ammDocLogo = new AMMDocLogo();

    await ammDocLogo.addLogo(mockAmmDoc);
  });

  it("should embed the image", () => {
    expect(embedPng).toHaveBeenCalled();
  });

  it("should draw the logo", () => {
    expect(drawImage).toHaveBeenCalledWith(pngImage, {
      x: AMM_LEFT_MARGIN,
      y: 123 - AMM_LOGO_FROM_TOP,
      width: pngImage.width / 16,
      height: pngImage.height / 16,
    });
    expect(true).toBeTruthy();
  });
});
