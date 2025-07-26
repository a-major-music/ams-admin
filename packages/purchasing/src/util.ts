export function removeProps(obj: object, props: string[]): object {
  return JSON.parse(
    JSON.stringify(obj, (k, v) => (props.includes(k) ? undefined : v))
  );
}
