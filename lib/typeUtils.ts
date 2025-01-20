/**
 * Check if the object has the property.
 * @param obj The object to be checked
 * @param property The property to look for
 * @returns Whether the object has the property
 */
export function hasProperty(
  obj: unknown,
  property: PropertyKey
): obj is { [property: PropertyKey]: unknown } {
  try {
    const val: unknown = (obj as any)[property];
    if (val == undefined) {
      return false;
    } else {
      return true;
    }
  } catch {
    return false;
  }
}
