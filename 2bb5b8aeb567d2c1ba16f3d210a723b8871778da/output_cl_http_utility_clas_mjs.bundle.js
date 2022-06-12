"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_http_utility_clas_mjs"],{

/***/ "./output/cl_http_utility.clas.mjs":
/*!*****************************************!*\
  !*** ./output/cl_http_utility.clas.mjs ***!
  \*****************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_http_utility\": () => (/* binding */ cl_http_utility)\n/* harmony export */ });\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/buffer/index.js\")[\"Buffer\"];\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_http_utility.clas.abap\nclass cl_http_utility {\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async string_to_fields(INPUT) {\n    return cl_http_utility.string_to_fields(INPUT);\n  }\n  static async string_to_fields(INPUT) {\n    let fields = new abap.types.Table(new abap.types.Structure({name: new abap.types.String(), value: new abap.types.String()}, \"IHTTPNVP\"), {\"withHeader\":false});\n    let string = new abap.types.String();\n    if (INPUT && INPUT.string) {string.set(INPUT.string);}\n    let tab = new abap.types.Table(new abap.types.String(), {\"withHeader\":false,\"type\":\"STANDARD\",\"isUnique\":false,\"keyFields\":[]});\n    let str = new abap.types.String();\n    let ls_field = new abap.types.Structure({name: new abap.types.String(), value: new abap.types.String()}, \"IHTTPNVP\");\n    abap.statements.split({source: string, at: new abap.types.Character({length: 1}).set('&'), table: tab});\n    for (const unique7 of abap.statements.loop(tab)) {\n      str.set(unique7);\n      abap.statements.split({source: str, at: new abap.types.Character({length: 1}).set('='), targets: [ls_field.get().name,ls_field.get().value]});\n      abap.statements.append({source: ls_field, target: fields});\n    }\n    return fields;\n  }\n  async set_query(INPUT) {\n    return cl_http_utility.set_query(INPUT);\n  }\n  static async set_query(INPUT) {\n    let request = new abap.types.ABAPObject({qualifiedName: \"IF_HTTP_REQUEST\"});\n    if (INPUT && INPUT.request) {request.set(INPUT.request);}\n    let query = new abap.types.String();\n    if (INPUT && INPUT.query) {query.set(INPUT.query);}\n    await request.get().if_http_request$set_form_fields({fields: (await this.string_to_fields({string: query}))});\n  }\n  async fields_to_string(INPUT) {\n    return cl_http_utility.fields_to_string(INPUT);\n  }\n  static async fields_to_string(INPUT) {\n    let string = new abap.types.String();\n    let fields = new abap.types.Table(new abap.types.Structure({name: new abap.types.String(), value: new abap.types.String()}, \"IHTTPNVP\"), {\"withHeader\":false});\n    if (INPUT && INPUT.fields) {fields.set(INPUT.fields);}\n    let tab = new abap.types.Table(new abap.types.String(), {\"withHeader\":false,\"type\":\"STANDARD\",\"isUnique\":false,\"keyFields\":[]});\n    let str = new abap.types.String();\n    let ls_field = new abap.types.Structure({name: new abap.types.String(), value: new abap.types.String()}, \"IHTTPNVP\");\n    for (const unique8 of abap.statements.loop(fields)) {\n      ls_field.set(unique8);\n      str.set(abap.operators.concat(ls_field.get().name,abap.operators.concat(new abap.types.Character({length: 1}).set('='),ls_field.get().value)));\n      abap.statements.append({source: str, target: tab});\n    }\n    string.set(abap.builtin.concat_lines_of({table: tab, sep: new abap.types.Character({length: 1}).set('&')}));\n    return string;\n  }\n  async encode_x_base64(INPUT) {\n    return cl_http_utility.encode_x_base64(INPUT);\n  }\n  static async encode_x_base64(INPUT) {\n    let encoded = new abap.types.String();\n    let data = new abap.types.XString();\n    if (INPUT && INPUT.data) {data.set(INPUT.data);}\n    let buffer = Buffer.from(data.get(), \"hex\");\n    encoded.set(buffer.toString(\"base64\"));\n    return encoded;\n  }\n  async decode_x_base64(INPUT) {\n    return cl_http_utility.decode_x_base64(INPUT);\n  }\n  static async decode_x_base64(INPUT) {\n    let decoded = new abap.types.XString();\n    let encoded = new abap.types.String();\n    if (INPUT && INPUT.encoded) {encoded.set(INPUT.encoded);}\n    let buffer = Buffer.from(encoded.get(), \"base64\");\n    decoded.set(buffer.toString(\"hex\").toUpperCase());\n    return decoded;\n  }\n  async unescape_url(INPUT) {\n    return cl_http_utility.unescape_url(INPUT);\n  }\n  static async unescape_url(INPUT) {\n    let unescaped = new abap.types.String();\n    let escaped = new abap.types.String();\n    if (INPUT && INPUT.escaped) {escaped.set(INPUT.escaped);}\n    unescaped.set(decodeURI(escaped.get()));\n    return unescaped;\n  }\n  async escape_url(INPUT) {\n    return cl_http_utility.escape_url(INPUT);\n  }\n  static async escape_url(INPUT) {\n    let escaped = new abap.types.String();\n    let unescaped = new abap.types.String();\n    if (INPUT && INPUT.unescaped) {unescaped.set(INPUT.unescaped);}\n    escaped.set(encodeURIComponent(unescaped.get()));\n    return escaped;\n  }\n  async encode_base64(INPUT) {\n    return cl_http_utility.encode_base64(INPUT);\n  }\n  static async encode_base64(INPUT) {\n    let encoded = new abap.types.String();\n    let data = new abap.types.String();\n    if (INPUT && INPUT.data) {data.set(INPUT.data);}\n    let buffer = Buffer.from(data.get());\n    encoded.set(buffer.toString(\"base64\"));\n    return encoded;\n  }\n}\nabap.Classes['CL_HTTP_UTILITY'] = cl_http_utility;\n\n//# sourceMappingURL=cl_http_utility.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_http_utility.clas.mjs?");

/***/ })

}]);