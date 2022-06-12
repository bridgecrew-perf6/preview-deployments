"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_system_uuid_clas_mjs"],{

/***/ "./output/cl_system_uuid.clas.mjs":
/*!****************************************!*\
  !*** ./output/cl_system_uuid.clas.mjs ***!
  \****************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_system_uuid\": () => (/* binding */ cl_system_uuid)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_system_uuid.clas.abap\nconst constant_4 = new abap.types.Integer().set(4);\nclass cl_system_uuid {\n  async constructor_() {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    return this;\n  }\n  async if_system_uuid_rfc4122_static$create_uuid_c36_by_version(INPUT) {\n    return cl_system_uuid.if_system_uuid_rfc4122_static$create_uuid_c36_by_version(INPUT);\n  }\n  static async if_system_uuid_rfc4122_static$create_uuid_c36_by_version(INPUT) {\n    let uuid = new abap.types.Character({length: 36, qualifiedName: \"SYSUUID_C36\"});\n    let version = new abap.types.Integer();\n    if (INPUT && INPUT.version) {version.set(INPUT.version);}\n    abap.statements.assert(abap.compare.eq(version, constant_4));\n    const crypto = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_crypto-browserify_index_js\"), __webpack_require__.e(\"_d546-_8131-_3fc0-_cd53-_4068-_e7e4-_7bec-_0aec-_fbf1-_ed1b-_d17e\")]).then(__webpack_require__.t.bind(__webpack_require__, /*! crypto */ \"./node_modules/crypto-browserify/index.js\", 19));\n    uuid.set(crypto.randomUUID());\n    return uuid;\n  }\n}\nabap.Classes['CL_SYSTEM_UUID'] = cl_system_uuid;\n\n//# sourceMappingURL=cl_system_uuid.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_system_uuid.clas.mjs?");

/***/ })

}]);