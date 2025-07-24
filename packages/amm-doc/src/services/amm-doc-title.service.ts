import { rgb } from "pdf-lib";
import { AMMDoc, AMM_TITLE_FROM_LEFT, AMM_TITLE_FROM_TOP } from "../types";

export class AMMDocTitle {
  async addTitleTopRight(ammDoc: AMMDoc, title: string) {
    const fontSize = 18;
    const { width, height } = ammDoc.page.getSize();

    ammDoc.page.drawText(title, {
      x: AMM_TITLE_FROM_LEFT,
      y: ammDoc.page.getHeight() - AMM_TITLE_FROM_TOP,
      size: fontSize,
      font: ammDoc.font,
      color: rgb(0, 0, 0),
    });
  }
}
