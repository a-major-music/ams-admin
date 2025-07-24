import { Injectable } from "@nestjs/common";
import { AMMDocInit, AMMDocLogo, AMMDocList } from ".";
import { AMMDoc } from "../types";
import { AMMDocFooter } from "./amm-doc-footer.service";
import { AMMDocTitle } from "./amm-doc-title.service";
import { AMMDocOrderItem } from "./amm-doc-order-item.service";

const shipToWords = [
  "Ship/Bill to",
  "A Major Music Supplies",
  "Trentham Shopping VIllage",
  "Stone Road",
  "Trentham",
  "United Kingdom ST4 8AX",
];

const footerWords = [
  [
    [
      "A Major Music Supplies",
      "Trentham Shopping Village, Stone Road, Trentham, ST4 8AX, GB",
    ],
  ],
  [
    ["Phone", "+441782 634634"],
    ["Email", "sales@amajormusic.co.uk"],
  ],
];

@Injectable()
export class AMMDocPdf {
  constructor(
    private readonly AMMDocInit: AMMDocInit,
    private readonly AMMDocLogo: AMMDocLogo,
    private readonly AMMDocList: AMMDocList,
    private readonly AMMDocFooter: AMMDocFooter,
    private readonly AMMDocTitle: AMMDocTitle,
    private readonly AMMDocOrderItem: AMMDocOrderItem
  ) {}

  async addFirstPageHeader(
    ammDoc: AMMDoc,
    shipWords: string[],
    orderWords: string[][]
  ) {
    const nextY = 340;
    await this.AMMDocLogo.addLogo(ammDoc);
    this.AMMDocList.addTitledList(ammDoc, shipWords, { x: 36, y: 150 });
    this.AMMDocTitle.addTitleTopRight(ammDoc, "Purchase Order");
    this.AMMDocList.addBoldList(ammDoc, orderWords, { x: 300, y: 150 });
    return nextY;
  }

  async getPDF(orderInfo, orderItems, orderSummary, supplier) {
    let ammDoc = await this.AMMDocInit.newDoc();
    const y = await this.addFirstPageHeader(ammDoc, shipToWords, orderInfo);

    let yToUse;
    let ystart = 340;
    let indexReset = 0;
    this.AMMDocOrderItem.addTitle(ammDoc, { x: 36, y: ystart });
    const allTheYs = await Promise.all(
      orderItems.map(async (item, index) => {
        yToUse = ystart + (index - indexReset) * 50;
        // console.log(`Item at y: ${yToUse}`);
        if (yToUse > 800) {
          // console.log(`y is ${yToUse} adding new page`);
          indexReset = index;
          ystart = 100;
          const page = ammDoc.doc.addPage();
          ammDoc = { ...ammDoc, page };
          yToUse = ystart + (index - indexReset) * 50;
          this.AMMDocOrderItem.addTitle(ammDoc, { x: 36, y: ystart });
          // console.log(`now Item at y: ${yToUse}`);
        }
        const thisY = yToUse;
        // console.log(`.Item at y: ${yToUse}`);
        await this.AMMDocOrderItem.addOrderItem(ammDoc, item, {
          x: 36,
          y: yToUse,
        });
        // console.log(` Item at y: ${yToUse}`);
        return thisY;
      })
    );

    // console.log(`Adding bold list, yToUse ${yToUse}`);
    // console.log(`All the Ys, ${allTheYs}`);
    let lastY = allTheYs.slice(-1)[0];
    if (lastY > 600) {
      const page = ammDoc.doc.addPage();
      ammDoc = { ...ammDoc, page };
      lastY = 50;
    }
    this.AMMDocList.addBoldList(ammDoc, orderSummary, {
      x: 300,
      y: lastY + 50,
    });

    this.AMMDocList.addTitledList(ammDoc, supplier, {
      x: 36,
      y: lastY + 50,
    });

    this.AMMDocFooter.addFooter(ammDoc, footerWords);

    const pdfBytes = await ammDoc.doc.save();
    return pdfBytes;
  }
}
