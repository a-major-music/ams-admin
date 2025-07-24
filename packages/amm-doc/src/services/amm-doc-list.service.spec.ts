import { AMMDoc, AMMPos } from "../types";
import { createMock } from "@golevelup/ts-jest";
import { PDFDocument, PDFFont, PDFPage, rgb } from "pdf-lib";
import { AMMDocList } from "./amm-doc-list.service";

const pngImage = {
  height: 222,
  width: 111,
};
const drawText = jest.fn();
const height = 123;
const width = 240;
const getSize = jest.fn().mockImplementation(() => ({ width, height }));
const page = createMock<PDFPage>({
  drawText,
  getSize,
});
const font = createMock<PDFFont>({});
const embedPng = jest.fn().mockImplementation(() => pngImage);
const mockAmmDoc = createMock<AMMDoc>({
  page,
  doc: createMock<PDFDocument>({ embedPng }),
  font,
  fontBold: createMock<PDFFont>({}),
});
const words = ["Some Title", "some words", "more words"];
const pos: AMMPos = { x: 29, y: 58 };

describe("AMMDocList", () => {
  describe("addTitledList", () => {
    beforeAll(async () => {
      const ammDocList = new AMMDocList();

      ammDocList.addTitledList(mockAmmDoc, words, pos);
    });

    it("should get the page size", () => {
      expect(getSize).toHaveBeenCalled();
    });

    it("should draw the list", () => {
      const fontSize = 10;
      expect(drawText).toHaveBeenCalledTimes(3);
      expect(drawText.mock.calls[0][0]).toEqual(words[0]);
      expect(drawText.mock.calls[1][0]).toEqual(words[1]);
      expect(drawText.mock.calls[2][0]).toEqual(words[2]);
      expect(JSON.stringify(drawText.mock.calls[0][1])).toEqual(
        JSON.stringify({
          x: pos.x,
          y: height - pos.y - 0 * (fontSize * 1.5),
          size: fontSize,
          font: mockAmmDoc.font,
          color: rgb(0, 0, 0),
        })
      );
      expect(JSON.stringify(drawText.mock.calls[1][1])).toEqual(
        JSON.stringify({
          x: pos.x,
          y: height - pos.y - 1 * (fontSize * 1.5),
          size: fontSize,
          font: mockAmmDoc.font,
          color: rgb(0, 0, 0),
        })
      );
      expect(JSON.stringify(drawText.mock.calls[2][1])).toEqual(
        JSON.stringify({
          x: pos.x,
          y: height - pos.y - 2 * (fontSize * 1.5),
          size: fontSize,
          font: mockAmmDoc.font,
          color: rgb(0, 0, 0),
        })
      );
    });
  });
});
