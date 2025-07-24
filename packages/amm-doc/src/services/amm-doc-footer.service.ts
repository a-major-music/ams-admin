import { Injectable } from "@nestjs/common";
import { rgb } from "pdf-lib";
import { AMMDoc } from "../types";

@Injectable()
export class AMMDocFooter {
  async addFooter(ammDoc: AMMDoc, words: string[][][]) {
    const fontSize = 9;
    const fromBoottomOfPage = 50;

    // Words is a row of items of word list where the
    // first item is bolded.  Something like
    // [
    // [ [ BoldWord, OtherWords ]]
    // [     [B, OW],[B, OW]     ]
    // ]
    // Thesre are all centred on the page when drawn.
    // We have to compute the centre point and start points

    words.forEach((row, index) => {
      const y = fromBoottomOfPage - fontSize * index * 2;
      const lens = row.map((item) =>
        item.map((words) => ammDoc.font.widthOfTextAtSize(words, fontSize) + 10)
      );
      const lensItems = lens.map((item) =>
        item.reduce((pre, curr) => pre + curr, 0)
      );
      const totalLen = lensItems.reduce((pre, curr) => pre + curr, 0);
      const startPoint = ammDoc.page.getSize().width / 2 - totalLen / 2;
      const itemStartPoints = [0]
        .concat(lensItems.slice(0, -1))
        .map((item) => item + startPoint);
      const itemWordsStartPoints = lens.map((item, index) =>
        [0]
          .concat(item.slice(0, -1))
          .map((item) => item + itemStartPoints[index])
      );

      row.forEach((item, index1) =>
        item.forEach((word, index2) =>
          ammDoc.page.drawText(word, {
            x: itemWordsStartPoints[index1][index2],
            y,
            size: fontSize,
            font: index2 ? ammDoc.font : ammDoc.fontBold,
            color: rgb(0, 0, 0),
          })
        )
      );
    });
  }
}
