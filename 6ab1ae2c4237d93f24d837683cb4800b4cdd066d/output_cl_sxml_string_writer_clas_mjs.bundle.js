"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopen_table_maintenance"] = self["webpackChunkopen_table_maintenance"] || []).push([["output_cl_sxml_string_writer_clas_mjs"],{

/***/ "./output/cl_sxml_string_writer.clas.mjs":
/*!***********************************************!*\
  !*** ./output/cl_sxml_string_writer.clas.mjs ***!
  \***********************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cl_sxml_string_writer\": () => (/* binding */ cl_sxml_string_writer)\n/* harmony export */ });\nconst {cx_root} = await __webpack_require__.e(/*! import() */ \"output_cx_root_clas_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output/cx_root.clas.mjs\"));\n// cl_sxml_string_writer.clas.abap\nconst constant_1 = new abap.types.Integer().set(1);\nconst constant_2 = new abap.types.Integer().set(2);\nconst constant_3 = new abap.types.Integer().set(3);\nconst constant_4 = new abap.types.Integer().set(4);\nconst constant_5 = new abap.types.Integer().set(5);\nconst constant_6 = new abap.types.Integer().set(6);\nconst constant_7 = new abap.types.Integer().set(7);\nconst constant_8 = new abap.types.Integer().set(8);\nconst constant_9 = new abap.types.Integer().set(9);\nclass cl_sxml_string_writer {\n  async constructor_(INPUT) {\n    this.me = new abap.types.ABAPObject();\n    this.me.set(this);\n    this.mv_output = new abap.types.XString();\n    this.mv_type = new abap.types.Integer();\n    this.mt_stack = new abap.types.Table(new abap.types.String(), {\"withHeader\":false,\"type\":\"STANDARD\",\"isUnique\":false,\"keyFields\":[]});\n    let type = new abap.types.Integer();\n    if (INPUT && INPUT.type) {type.set(INPUT.type);}\n    this.mv_type.set(type);\n    return this;\n  }\n  async create(INPUT) {\n    return cl_sxml_string_writer.create(INPUT);\n  }\n  static async create(INPUT) {\n    let writer = new abap.types.ABAPObject({qualifiedName: \"CL_SXML_STRING_WRITER\"});\n    let type = new abap.types.Integer();\n    if (INPUT && INPUT.type) {type.set(INPUT.type);}\n    if (INPUT === undefined || INPUT.type === undefined) {type = abap.Classes['IF_SXML'].if_sxml$co_xt_xml10;}\n    let ignore_conversion_errors = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    if (INPUT && INPUT.ignore_conversion_errors) {ignore_conversion_errors.set(INPUT.ignore_conversion_errors);}\n    if (INPUT === undefined || INPUT.ignore_conversion_errors === undefined) {ignore_conversion_errors = abap.builtin.abap_false;}\n    let normalizing = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    if (INPUT && INPUT.normalizing) {normalizing.set(INPUT.normalizing);}\n    if (INPUT === undefined || INPUT.normalizing === undefined) {normalizing = abap.builtin.abap_false;}\n    let no_empty_elements = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    if (INPUT && INPUT.no_empty_elements) {no_empty_elements.set(INPUT.no_empty_elements);}\n    if (INPUT === undefined || INPUT.no_empty_elements === undefined) {no_empty_elements = abap.builtin.abap_false;}\n    let encoding = new abap.types.String();\n    if (INPUT && INPUT.encoding) {encoding.set(INPUT.encoding);}\n    if (INPUT === undefined || INPUT.encoding === undefined) {encoding = new abap.types.String().set(`UTF-8`);}\n    writer.set(await (new abap.Classes['CL_SXML_STRING_WRITER']()).constructor_({type: type}));\n    return writer;\n  }\n  async if_sxml_writer$set_option(INPUT) {\n    let option = new abap.types.Integer();\n    if (INPUT && INPUT.option) {option.set(INPUT.option);}\n    let value = new abap.types.Character({qualifiedName: \"ABAP_BOOL\"});\n    if (INPUT && INPUT.value) {value.set(INPUT.value);}\n    if (INPUT === undefined || INPUT.value === undefined) {value = abap.builtin.abap_true;}\n    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));\n  }\n  async get_output() {\n    let output = new abap.types.XString();\n    output.set(this.mv_output);\n    return output;\n  }\n  async append_text(INPUT) {\n    let text = new abap.types.String();\n    if (INPUT && INPUT.text) {text.set(INPUT.text);}\n    let append = new abap.types.XString();\n    append.set((await (await abap.Classes['CL_ABAP_CONV_CODEPAGE'].create_out()).get().if_abap_conv_out$convert({source: text})));\n    abap.statements.concatenate({source: [this.mv_output, append], target: this.mv_output});\n  }\n  async get_text() {\n    let text = new abap.types.String();\n    text.set((await (await abap.Classes['CL_ABAP_CONV_CODEPAGE'].create_in()).get().if_abap_conv_in$convert({source: this.mv_output})));\n    return text;\n  }\n  async if_sxml_writer$open_element(INPUT) {\n    let name = new abap.types.String();\n    if (INPUT && INPUT.name) {name.set(INPUT.name);}\n    let nsuri = new abap.types.String();\n    if (INPUT && INPUT.nsuri) {nsuri.set(INPUT.nsuri);}\n    let prefix = new abap.types.String();\n    if (INPUT && INPUT.prefix) {prefix.set(INPUT.prefix);}\n    let parent = new abap.types.String();\n    parent.set((await this.peek()));\n    if (abap.compare.eq(parent, new abap.types.Character({length: 5}).set('array')) && abap.compare.np((await this.get_text()), new abap.types.Character({length: 2}).set('*['))) {\n      await this.append_text({text: new abap.types.Character({length: 1}).set(',')});\n    }\n    if (abap.compare.eq(parent, new abap.types.Character({length: 6}).set('object')) && abap.compare.np((await this.get_text()), new abap.types.Character({length: 2}).set('*{'))) {\n      await this.append_text({text: new abap.types.Character({length: 1}).set(',')});\n    }\n    abap.statements.append({source: name, target: this.mt_stack});\n    let unique53 = name;\n    if (abap.compare.eq(unique53, new abap.types.Character({length: 6}).set('object'))) {\n      await this.append_text({text: new abap.types.Character({length: 1}).set('{')});\n    } else if (abap.compare.eq(unique53, new abap.types.Character({length: 5}).set('array'))) {\n      await this.append_text({text: new abap.types.Character({length: 1}).set('[')});\n    }\n  }\n  async remove() {\n    let rv_name = new abap.types.String();\n    let index = new abap.types.Integer();\n    index.set(abap.builtin.lines({val: this.mt_stack}));\n    abap.statements.readTable(this.mt_stack,{index: index,into: rv_name});\n    abap.statements.deleteInternal(this.mt_stack,{index: index});\n    return rv_name;\n  }\n  async if_sxml_writer$close_element() {\n    let name = new abap.types.String();\n    name.set((await this.remove()));\n    let unique54 = name;\n    if (abap.compare.eq(unique54, new abap.types.Character({length: 6}).set('object'))) {\n      await this.append_text({text: new abap.types.Character({length: 1}).set('}')});\n    } else if (abap.compare.eq(unique54, new abap.types.Character({length: 5}).set('array'))) {\n      await this.append_text({text: new abap.types.Character({length: 1}).set(']')});\n    }\n  }\n  async if_sxml_writer$write_attribute(INPUT) {\n    let name = new abap.types.String();\n    if (INPUT && INPUT.name) {name.set(INPUT.name);}\n    let nsuri = new abap.types.String();\n    if (INPUT && INPUT.nsuri) {nsuri.set(INPUT.nsuri);}\n    let prefix = new abap.types.String();\n    if (INPUT && INPUT.prefix) {prefix.set(INPUT.prefix);}\n    let value = new abap.types.String();\n    if (INPUT && INPUT.value) {value.set(INPUT.value);}\n    await this.append_text({text: new abap.types.Character({length: 1}).set('\"')});\n    await this.append_text({text: value});\n    await this.append_text({text: new abap.types.Character({length: 2}).set('\":')});\n  }\n  async peek() {\n    let rv_name = new abap.types.String();\n    let index = new abap.types.Integer();\n    index.set(abap.builtin.lines({val: this.mt_stack}));\n    abap.statements.readTable(this.mt_stack,{index: index,into: rv_name});\n    return rv_name;\n  }\n  async if_sxml_writer$write_value(INPUT) {\n    let value = new abap.types.String();\n    if (INPUT && INPUT.value) {value.set(INPUT.value);}\n    let name = new abap.types.String();\n    name.set((await this.peek()));\n    let unique55 = name;\n    if (abap.compare.eq(unique55, new abap.types.Character({length: 3}).set('str'))) {\n      await this.append_text({text: new abap.types.Character({length: 1}).set('\"')});\n      await this.append_text({text: abap.builtin.condense({val: value})});\n      await this.append_text({text: new abap.types.Character({length: 1}).set('\"')});\n    } else if (abap.compare.eq(unique55, new abap.types.Character({length: 3}).set('num'))) {\n      await this.append_text({text: abap.builtin.condense({val: value})});\n    } else {\n      console.dir(name);\n      abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 31}).set('todo_if_sxml_writer_write_value')));\n    }\n  }\n}\nabap.Classes['CL_SXML_STRING_WRITER'] = cl_sxml_string_writer;\n\n//# sourceMappingURL=cl_sxml_string_writer.clas.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://open-table-maintenance/./output/cl_sxml_string_writer.clas.mjs?");

/***/ })

}]);