import { Injectable } from "@nestjs/common";
import { PDFDocument } from "pdf-lib";
import { AMMDoc } from "../types";
import * as fs from "fs";
var path = require("path");
const fontkit = require("@pdf-lib/fontkit");

@Injectable()
export class AMMDocInit {
  async newDoc(): Promise<AMMDoc> {
    const doc = await PDFDocument.create();
    doc.registerFontkit(fontkit);
    const page = doc.addPage();

    const fontBytesRegular = await fs.readFileSync(
      path.join(__dirname, "..", "fonts", "AvenirNextLTPro-Regular.otf")
    );
    const font = await doc.embedFont(fontBytesRegular);

    const fontBytesBold = await fs.readFileSync(
      path.join(__dirname, "..", "fonts", "AvenirNextLTPro-Bold.otf")
    );
    const fontBold = await doc.embedFont(fontBytesBold);

    return { doc, page, font, fontBold };
  }
}
