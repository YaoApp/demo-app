function MappingOnline(value, mapping) {
  mapping = mapping || {};
  return mapping[value] || `not-found`;
}
