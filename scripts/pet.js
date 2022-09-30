/**
 * Compute Name
 * @param {*} value
 * @param {*} row
 * @returns
 */
function SaveName(field, value, row) {
  return row[field] + "|" + value;
}

/**
 * Compute Status to tag
 * @param {*} value
 * @param {*} row
 * @returns
 */
function SaveTag(field, value, row) {
  return value.label ? value.label : value;
}

/**
 * Compute Status get tag
 * @param {*} value
 * @param {*} row
 * @returns
 */
function GetTag(field, value, row) {
  return {
    label: value,
    field: field,
    name: row.name || "Pet",
    color: "#FF0000",
  };
}

/**
 * before:search Hook
 * @param {*} query
 * @param {*} page
 * @param {*} pagesize
 * @returns []
 */
function BeforeSearch(query, page, pagesize) {
  query = query || {};
  pagesize = 1;
  return [query, page, pagesize];
}

/**
 * Search process
 * @param {*} query
 * @param {*} page
 * @param {*} pagesize
 * @returns
 */
function Search(query, page, pagesize) {
  return Process("models.pet.Paginate", query, page, pagesize);
}

/**
 * After hook
 * @param {*} resp
 * @returns
 */
function AfterSearch(resp) {
  resp["after:hook"] = "AfterSearch";
  return resp;
}
