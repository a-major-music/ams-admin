import { ProductTag } from '@prisma/client';

export function removeProps(obj: object, props: string[]): object {
  return JSON.parse(
    JSON.stringify(obj, (k, v) => (props.includes(k) ? undefined : v)),
  );
}

export function flattenTags(tags: ProductTag[]): string {
  return tags.map((t) => t.name).join(',');
}
