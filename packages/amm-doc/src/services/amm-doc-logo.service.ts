import { Injectable } from "@nestjs/common";
import * as fs from "fs";
import { AMMDoc, AMM_LEFT_MARGIN, AMM_LOGO_FROM_TOP } from "../types";
var path = require("path");

@Injectable()
export class AMMDocLogo {
  async addLogo(ammDoc: AMMDoc) {
    var data = fs.readFileSync(
      path.join(__dirname, "..", "logos", "amajor.png")
    );

    const pngImage = await ammDoc.doc.embedPng(data);

    ammDoc.page.drawImage(pngImage, {
      x: AMM_LEFT_MARGIN,
      y: ammDoc.page.getHeight() - AMM_LOGO_FROM_TOP,
      width: pngImage.width / 16,
      height: pngImage.height / 16,
    });
  }
}
