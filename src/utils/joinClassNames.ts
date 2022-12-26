
export function joinClassNames(
  classNames: (string | undefined | null)[]
): string {
  [Boolean(null), undefined, '', "class"].join("")
  
  return classNames.filter(Boolean).join(" ");
}
