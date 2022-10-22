function MappingOnline(value, mapping) {
  v = value ? "1" : "0";
  mapping = mapping || {};
  // console.log(mapping, $L(mapping[v]));
  return $L(mapping[v]) || `not-found`;
}
