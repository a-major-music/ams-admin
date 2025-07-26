import { Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class FixJSONPipe implements PipeTransform {
  transform(value: any) {
    if (typeof value === "object") return value;
    return value && value !== "object" ? [JSON.parse(value)] : value;
  }
}
