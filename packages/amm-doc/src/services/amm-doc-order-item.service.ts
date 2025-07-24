import { rgb } from "pdf-lib";
import {
  AMMDoc,
  AMMPos,
  AMM_ORDER_ITEM_HEADER,
  AMM_ORDER_ITEM_RIGHT_ALIGN,
  AMM_ORDER_ITEM_GAPS,
} from "../types";
import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";

const sharp = require("sharp");
const jpegTransformer = sharp().jpeg();
var fs = require("fs");

@Injectable()
export class AMMDocOrderItem {
  constructor(private readonly http: HttpService) {}
  addTitle(ammDoc: AMMDoc, pos: AMMPos) {
    const titleFontSize = 8;
    const fontSize = 10;
    const yval = ammDoc.page.getHeight() - pos.y + 20 - 0.5 * fontSize;

    AMM_ORDER_ITEM_HEADER.forEach((str, index) => {
      const distances = AMM_ORDER_ITEM_GAPS.slice(0, index + 1);
      // console.log(index, distances);
      const xdist = distances.reduce((pre, curr) => pre + curr, 0);

      const alignNudge = AMM_ORDER_ITEM_RIGHT_ALIGN[index]
        ? ammDoc.font.widthOfTextAtSize(str, titleFontSize)
        : 0;

      ammDoc.page.drawText(str, {
        x: pos.x + xdist - alignNudge,
        y: yval + 40,
        size: titleFontSize,
        font: ammDoc.fontBold,
        color: rgb(0, 0, 0),
      });
    });

    const barWidth = AMM_ORDER_ITEM_GAPS.reduce((pre, curr) => pre + curr, 0);
    const smidge = 0;
    ammDoc.page.drawLine({
      start: { x: pos.x - smidge, y: ammDoc.page.getHeight() - pos.y - 5 + 50 },
      end: {
        x: pos.x + barWidth + 2 * smidge,
        y: ammDoc.page.getHeight() - pos.y - 5 + 50,
      },
      thickness: 1,
      color: rgb(0.5, 0.5, 0.5),
      opacity: 0.3,
    });
  }

  async urlToImage(url: string) {
    if (url === null) {
      // console.log("url is null");
      const svgText = `
      <svg width="150" height="220">
        <style>
          .title { fill: darkred; font-size: 220px}
        </style>
        <text x="50%" y="80%" text-anchor="middle" class="title">?</text>
      </svg>`;
      const svgBuffer = Buffer.from(svgText);
      // return await sharp(svgBuffer).jpeg().toBuffer();
      return await sharp({
        create: {
          width: 150,
          height: 220,
          channels: 4,
          background: { r: 255, g: 255, b: 255, alpha: 0.9 },
        },
      })
        .composite([{ input: svgBuffer }])
        .jpeg()
        .toBuffer();
    }
    const arrayBuffer = await this.http
      .get(url, { responseType: "arraybuffer" })
      .toPromise();
    return await sharp(arrayBuffer.data).toFormat("jpg").toBuffer();
  }

  splitStringToListsForLength(
    ammDoc: AMMDoc,
    fontSize: number,
    strToSplit: string,
    availableSpace: number
  ): string[] {
    const actualSpace = availableSpace;
    const words = strToSplit.split(" ");
    const inputArray = words.map((word) => {
      return { word, result: [""] };
    });
    const initVal = {
      result: [""],
      word: undefined,
    };
    const reduceFn = (prev, curr) => {
      // console.log("In Reduce");
      // console.log("Prev");
      // console.log(prev);
      // console.log("curr");
      // console.log(curr);
      const wordsSoFar = prev.result[0];
      const possibleAddNextWord = `${wordsSoFar} ${curr.word}`;
      const possibleLength = ammDoc.font.widthOfTextAtSize(
        possibleAddNextWord,
        fontSize
      );
      if (possibleLength > actualSpace) {
        // too long, make a new line
        prev.result.unshift(curr.word);
        const newResult = prev.result;
        return { result: newResult };
      } else {
        // good keep going
        const newResult = prev.result;
        newResult[0] = possibleAddNextWord;
        return { result: newResult };
      }
    };

    return inputArray
      .reduce(reduceFn, initVal)
      .result.reverse()
      .map((str) => str.trim());

    // .map((item) => item.result)
    // .map((str) => str.trim())
    // .reverse();
  }

  async addOrderItem(ammDoc: AMMDoc, order: string[], pos: AMMPos) {
    // console.log(`ORDER: ${order}`);
    const fontSize = 10;
    const yval = ammDoc.page.getHeight() - pos.y + 20 - 0.5 * fontSize;
    // image
    // console.log(`Image: ${order[0]}`);

    // TODO: Reintroduce when thumbnail images have been added
    // const imageUrl = order[0];

    // const img = await this.urlToImage(imageUrl);
    // const pngImage = await ammDoc.doc.embedJpg(img);
    // ammDoc.page.drawImage(pngImage, {
    //   x: pos.x,
    //   y: ammDoc.page.getHeight() - pos.y,
    //   width: 30,
    //   height: 40,
    // });

    // words
    const words = order.slice(1).map((item) => {
      // console.log(item);
      return item !== undefined && item !== null ? item.toString() : "n/a";
    });

    // console.log(`Words: ${words}`);

    words.forEach((str, index) => {
      const distances = AMM_ORDER_ITEM_GAPS.slice(0, index + 1);
      const extraNudgeSpaceToRight = 12;
      const spaceForThisWord =
        AMM_ORDER_ITEM_GAPS[index + 1] - extraNudgeSpaceToRight;
      const lengthForThisStr = ammDoc.font.widthOfTextAtSize(str, fontSize);

      let strList;
      let yoffsets;
      if (lengthForThisStr > spaceForThisWord) {
        // console.log("\nBig");
        // console.log(index, distances);
        // console.log(
        //   `This len ${spaceForThisWord} word len-chars:${str.length}  len-width:${lengthForThisStr} Str: ${str}`
        // );
        // console.log("\n");
        strList = this.splitStringToListsForLength(
          ammDoc,
          fontSize,
          str,
          spaceForThisWord
        );
        // console.log(strList);
        // console.log("\n");

        const length = strList.length;
        const middle = Math.floor(((length - 1) * fontSize) / 2);
        yoffsets = Array.from(Array(length).keys()).map(
          (index) => middle - index * fontSize
        );
        //console.log(`yoffsets ${yoffsets}`);
      } else {
        strList = [str];
        yoffsets = [0];
      }
      const xdist = distances.reduce((pre, curr) => pre + curr, 0);

      const alignNudge = AMM_ORDER_ITEM_RIGHT_ALIGN[index]
        ? ammDoc.font.widthOfTextAtSize(str, fontSize)
        : 0;

      strList.map((str, index) => {
        ammDoc.page.drawText(str, {
          x: pos.x + xdist - alignNudge,
          y: yval + yoffsets[index],
          size: fontSize,
          font: ammDoc.font,
          color: rgb(0, 0, 0),
        });
      });
    });

    // bar

    const barWidth = AMM_ORDER_ITEM_GAPS.reduce((pre, curr) => pre + curr, 0);
    const smidge = 0;
    ammDoc.page.drawLine({
      start: { x: pos.x - smidge, y: ammDoc.page.getHeight() - pos.y - 5 },
      end: {
        x: pos.x + barWidth + 2 * smidge,
        y: ammDoc.page.getHeight() - pos.y - 5,
      },
      thickness: 1,
      color: rgb(0.5, 0.5, 0.5),
      opacity: 0.3,
    });

    return pos.y + 50;
  }
}
