import { Injectable } from "@nestjs/common";
import { rgb } from "pdf-lib";
import { AMMDoc, AMMPos } from "../types";

@Injectable()
export class AMMDocList {
  addTitledList(ammDoc: AMMDoc, words: string[], pos: AMMPos) {
    const fontSize = 10;
    const { width, height } = ammDoc.page.getSize();

    words.forEach((str, index) => {
      ammDoc.page.drawText(str, {
        x: pos.x,
        y: height - pos.y - index * (fontSize * 1.5),
        size: fontSize,
        font: index ? ammDoc.font : ammDoc.fontBold,
        color: rgb(0, 0, 0),
      });
    });
  }

  addBoldList(ammDoc: AMMDoc, words: string[][], pos: AMMPos) {
    const fontSize = 10;
    const page = ammDoc.page;
    const { width, height } = page.getSize();
    const gap = fontSize * 2;

    words.forEach((line, index) => {
      page.drawText(line[0], {
        x: pos.x,
        y: height - pos.y - index * gap,
        size: fontSize,
        font: ammDoc.fontBold,
        color: rgb(0, 0, 0),
      });

      const textWidth = ammDoc.font.widthOfTextAtSize(line[1], fontSize);

      page.drawText(line[1], {
        x: pos.x + 260 - textWidth,
        y: height - pos.y - index * gap,
        size: fontSize,
        font: ammDoc.font,
        color: rgb(0, 0, 0),
      });

      page.drawLine({
        start: { x: pos.x, y: height - pos.y - index * gap - fontSize / 2 },
        end: { x: pos.x + 260, y: height - pos.y - index * gap - fontSize / 2 },
        thickness: 1,
        color: rgb(0.5, 0.5, 0.5),
        opacity: 0.3,
      });
    });
  }
}
