import { PDFDocument, PDFFont, PDFPage } from 'pdf-lib';

export type AMMDoc = {
  doc: PDFDocument;
  page: PDFPage;
  font: PDFFont;
  fontBold: PDFFont;
};

export type AMMPos = {
  x: number;
  y: number;
};
