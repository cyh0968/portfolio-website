export default function mergeStrings(options = { delimiter: ' ' }, ...arrayOfStrings) {
  const isDelimiter = typeof options === 'object' && typeof options?.delimiter === 'string';
  const delimiter = isDelimiter ? options.delimiter : ' ';
  if (!isDelimiter && typeof options === 'string') {
    arrayOfStrings.unshift(options);
  }

  if (!arrayOfStrings.length) {
    throw new Error('no string passed!');
  }

  if (arrayOfStrings.length === 1) {
    return arrayOfStrings[0];
  }

  return arrayOfStrings.reduce(
    (mergedStyles, styles) =>
      typeof styles === 'string' ? mergedStyles + delimiter + styles : mergedStyles,
    '',
  );
}
