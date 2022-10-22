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

/**
 * Custom guard
 * @param {*} path
 * @param {*} params
 * @param {*} query
 * @param {*} payload
 * @param {*} headers
 */
function Guard(path, params, query, payload, headers) {
  isTest = headers["Unit-Test"] ? headers["Unit-Test"] : [];
  if (isTest[0] == "yes") {
    throw new Exception("Unit-test throw", 418);
  }
}
