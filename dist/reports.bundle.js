/* eslint-disable */
(function (exports,main_core,ui_vue3,ui_ears,ui_vue3_pinia) {
  'use strict';

  var storage = {
    name: "Товары",
    filters: [{
      view: "Склады",
      inXml: "Склад",
      using: "storages"
    }],
    parameters: [{
      view: "Дата отчёта",
      inXml: "ДатаОтчета"
    }],
    path: ""
  };
  var settlementsStatement = {
    name: "Расчёты с клиентами",
    filters: [{
      view: "Менеджеры",
      inXml: "ОбъектРасчетов.Менеджер",
      using: "managers"
    }],
    parameters: [{
      view: "Период",
      inXml: "Период"
    }],
    path: ""
  };
  var grossProfit = {
    name: "Валовая прибыль",
    filters: [{
      view: "Менеджеры",
      inXml: "Менеджер",
      using: "managers"
    }],
    parameters: [{
      view: "Период",
      inXml: "Период"
    }],
    path: ""
  };
  var client = {
    name: "Задолженности клиентов",
    filters: [{
      view: "Клиенты",
      inXml: "Партнер",
      using: "clients"
    }],
    parameters: [{
      view: "Дата отчёта",
      inXml: "ДатаОтчета"
    }],
    path: ""
  };
  var templatesJson = {
    storage: storage,
    settlementsStatement: settlementsStatement,
    grossProfit: grossProfit,
    client: client
  };

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { babelHelpers.defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _regeneratorRuntime() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == babelHelpers["typeof"](h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(babelHelpers["typeof"](e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
  function readJsonFile(_x) {
    return _readJsonFile.apply(this, arguments);
  }
  function _readJsonFile() {
    _readJsonFile = babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(filePath) {
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt("return", fetch(filePath).then(function (response) {
              if (!response.ok) {
                throw new Error("Failed to fetch ".concat(filePath, ". Status: ").concat(response.status));
              }
              return response.json();
            }).then(function (data) {
              return data;
            })["catch"](function (error) {
              console.error("Error reading JSON file ".concat(filePath, ":"), error);
              throw error;
            }));
          case 1:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    return _readJsonFile.apply(this, arguments);
  }
  var getWorkPosition = /*#__PURE__*/function () {
    var _ref = babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return BX.rest.callMethod('im.user.get', {});
          case 3:
            response = _context.sent;
            return _context.abrupt("return", response['answer']['result']['work_position']);
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.error('Error fetching data:', _context.t0);
            throw _context.t0;
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 7]]);
    }));
    return function getWorkPosition() {
      return _ref.apply(this, arguments);
    };
  }();
  var getUsersByPosition = /*#__PURE__*/function () {
    var _ref2 = babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(positionToSearch) {
      var response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return BX.rest.callMethod('user.get', {
              filter: {
                'WORK_POSITION': positionToSearch
              }
            });
          case 3:
            response = _context2.sent;
            return _context2.abrupt("return", response['answer']['result']);
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.error('Error fetching data:', _context2.t0);
            throw _context2.t0;
          case 11:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 7]]);
    }));
    return function getUsersByPosition(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var getOneAssData = /*#__PURE__*/function () {
    var _ref3 = babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(workPosition) {
      var response, user, storages, secondName, clients;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return getUsersByPosition(workPosition);
          case 2:
            response = _context3.sent;
            user = response[0];
            if (!(!user || !user['UF_USR_GUID'] || !user['UF_USR_STORAGES3'])) {
              _context3.next = 6;
              break;
            }
            return _context3.abrupt("return", null);
          case 6:
            storages = JSON.parse(user['UF_USR_STORAGES3']);
            secondName = user['SECOND_NAME'] ? user['SECOND_NAME'] : '';
            if (!workPosition.includes("ТП")) {
              _context3.next = 13;
              break;
            }
            _context3.next = 11;
            return getUserClients(user['UF_USR_GUID']);
          case 11:
            clients = _context3.sent;
            return _context3.abrupt("return", {
              'name': user['LAST_NAME'] + ' ' + user['NAME'] + ' ' + secondName + ', ' + workPosition,
              'guid': user['UF_USR_GUID'],
              'storages': storages,
              'clients': clients
            });
          case 13:
            return _context3.abrupt("return", {
              'name': user['LAST_NAME'] + ' ' + user['NAME'] + ' ' + secondName + ', ' + workPosition,
              'guid': user['UF_USR_GUID'],
              'storages': storages
            });
          case 14:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function getOneAssData(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
  var getHierarchy = /*#__PURE__*/function () {
    var _ref4 = babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return readJsonFile('../../local/js/local/reports/src/data/workPositionsConfig.json');
          case 2:
            return _context4.abrupt("return", _context4.sent);
          case 3:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function getHierarchy() {
      return _ref4.apply(this, arguments);
    };
  }();
  var getUserAttrs = /*#__PURE__*/function () {
    var _ref5 = babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var workPos, workPositionsJson, subordinates, userData, userSubs;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return getWorkPosition();
          case 2:
            workPos = _context5.sent;
            _context5.next = 5;
            return readJsonFile('../../local/js/local/reports/src/data/workPositionsConfig.json');
          case 5:
            workPositionsJson = _context5.sent;
            subordinates = getSubordinates(workPositionsJson, workPos);
            if (subordinates) {
              _context5.next = 9;
              break;
            }
            return _context5.abrupt("return", null);
          case 9:
            _context5.next = 11;
            return getOneAssData(workPos);
          case 11:
            userData = _context5.sent;
            _context5.next = 14;
            return getUserManagers(subordinates);
          case 14:
            userSubs = _context5.sent;
            if (Array.isArray(userSubs)) {
              _context5.next = 17;
              break;
            }
            return _context5.abrupt("return", _objectSpread(_objectSpread({}, userData), {}, {
              managers: [userSubs]
            }));
          case 17:
            return _context5.abrupt("return", _objectSpread(_objectSpread({}, userData), {}, {
              managers: userSubs
            }));
          case 18:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function getUserAttrs() {
      return _ref5.apply(this, arguments);
    };
  }();

  /**
   * Функция для поиска подчиненных объекта по ключу во вложенных объектах или массивах.
   * @param {object|array} obj - Исходный объект структуры должностей.
   * @param {string} target - Искомая должность.
   * @returns {any} Возвращается объект либо массив подчинённых. Если пользователь не обладает подчинёнными,
   * возвращается его должность. В случае, если должность отсутствует в структуре, возвращается null.
   */
  var getSubordinates = function getSubordinates(obj, target) {
    // Проверяем, является ли obj массивом
    if (obj && Array.isArray(obj)) {
      // Если obj - массив, проверяем наличие target в массиве
      var result = obj.includes(target) ? target : null;
      return result;
    }

    // Если obj не массив, проверяем, является ли obj объектом
    if (obj && babelHelpers["typeof"](obj) === 'object') {
      // Если obj - объект, проверяем наличие target в качестве ключа
      if (Object.keys(obj).includes(target)) {
        // Если target найден в качестве ключа, возвращаем соответствующее значение
        return obj[target];
      }

      // Если target не найден в качестве ключа, рекурсивно вызываем функцию для каждого элемента объекта
      for (var item in obj) {
        var _result = getSubordinates(obj[item], target);
        // Если результат не null, возвращаем найденное значение
        if (_result) {
          return _result;
        }
      }
    }
    // Если target не найден, возвращаем null
    return null;
  };
  var getUserManagers = /*#__PURE__*/function () {
    var _ref6 = babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(subsObj) {
      var result, _iterator, _step, item, userData, _result2, _i, _Object$keys, _item, tmpData, userSubs, _userData;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            if (!(typeof subsObj === 'string')) {
              _context6.next = 6;
              break;
            }
            _context6.next = 3;
            return getOneAssData(subsObj);
          case 3:
            return _context6.abrupt("return", _context6.sent);
          case 6:
            if (!Array.isArray(subsObj)) {
              _context6.next = 30;
              break;
            }
            result = [];
            _iterator = _createForOfIteratorHelper(subsObj);
            _context6.prev = 9;
            _iterator.s();
          case 11:
            if ((_step = _iterator.n()).done) {
              _context6.next = 19;
              break;
            }
            item = _step.value;
            _context6.next = 15;
            return getOneAssData(item);
          case 15:
            userData = _context6.sent;
            if (userData) {
              result.push(userData);
            }
          case 17:
            _context6.next = 11;
            break;
          case 19:
            _context6.next = 24;
            break;
          case 21:
            _context6.prev = 21;
            _context6.t0 = _context6["catch"](9);
            _iterator.e(_context6.t0);
          case 24:
            _context6.prev = 24;
            _iterator.f();
            return _context6.finish(24);
          case 27:
            return _context6.abrupt("return", result);
          case 30:
            if (!(babelHelpers["typeof"](subsObj) === 'object')) {
              _context6.next = 49;
              break;
            }
            _result2 = [];
            _i = 0, _Object$keys = Object.keys(subsObj);
          case 33:
            if (!(_i < _Object$keys.length)) {
              _context6.next = 48;
              break;
            }
            _item = _Object$keys[_i];
            _context6.next = 37;
            return getOneAssData(_item);
          case 37:
            tmpData = _context6.sent;
            if (tmpData) {
              _context6.next = 40;
              break;
            }
            return _context6.abrupt("continue", 45);
          case 40:
            _context6.next = 42;
            return getUserManagers(subsObj[_item]);
          case 42:
            userSubs = _context6.sent;
            _userData = _objectSpread(_objectSpread({}, tmpData), {}, {
              managers: userSubs
            });
            _result2.push(_userData);
          case 45:
            _i++;
            _context6.next = 33;
            break;
          case 48:
            return _context6.abrupt("return", _result2);
          case 49:
            return _context6.abrupt("return", null);
          case 50:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[9, 21, 24, 27]]);
    }));
    return function getUserManagers(_x4) {
      return _ref6.apply(this, arguments);
    };
  }();
  var getUserClients = /*#__PURE__*/function () {
    var _ref7 = babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(userGuid) {
      var response, result;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return fetch("http://192.168.91.166/1cApi/getPartners/".concat(userGuid), {
              method: 'GET'
            });
          case 3:
            response = _context7.sent;
            _context7.next = 6;
            return response.json();
          case 6:
            result = _context7.sent;
            if (!(result.body.length > 0)) {
              _context7.next = 9;
              break;
            }
            return _context7.abrupt("return", result.body);
          case 9:
            return _context7.abrupt("return", []);
          case 12:
            _context7.prev = 12;
            _context7.t0 = _context7["catch"](0);
            return _context7.abrupt("return", null);
          case 15:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 12]]);
    }));
    return function getUserClients(_x5) {
      return _ref7.apply(this, arguments);
    };
  }();

  var config = {};
  config.bitrix_url = "http://192.168.91.166";
  // config.bitrix_url = "https://bitrix24.martinural.ru";
  config.directorate_stuff = ["Заместитель генерального директора", "Генеральный директор", "Помощник генерального директора", "Начальник отдела розничных продаж", "Специалист по информационным технологиям ", "Начальник отдела /Юридический отдел/", "Логист", "Начальник отдела IT"];

  function _regeneratorRuntime$1() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime$1 = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == babelHelpers["typeof"](h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(babelHelpers["typeof"](e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
  var getCurrentUser = /*#__PURE__*/function () {
    var _ref = babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$1().mark(function _callee() {
      var response;
      return _regeneratorRuntime$1().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return BX.rest.callMethod("im.user.get", {});
          case 3:
            response = _context.sent;
            return _context.abrupt("return", response["answer"]["result"]);
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.error("Error fetching data:", _context.t0);
            throw _context.t0;
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 7]]);
    }));
    return function getCurrentUser() {
      return _ref.apply(this, arguments);
    };
  }();
  var getWorkPosition$1 = /*#__PURE__*/function () {
    var _ref2 = babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$1().mark(function _callee2() {
      var user, workPos;
      return _regeneratorRuntime$1().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return getCurrentUser();
          case 3:
            user = _context2.sent;
            workPos = user["work_position"];
            if (config.directorate_stuff.includes(workPos)) {
              workPos = "Дирекция";
            }
            return _context2.abrupt("return", workPos);
          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            console.error("Error fetching data:", _context2.t0);
            throw _context2.t0;
          case 13:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 9]]);
    }));
    return function getWorkPosition$$1() {
      return _ref2.apply(this, arguments);
    };
  }();
  var getAvailableReports = /*#__PURE__*/function () {
    var _ref3 = babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$1().mark(function _callee3() {
      var user, reportsList;
      return _regeneratorRuntime$1().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return getCurrentUser();
          case 3:
            user = _context3.sent;
            _context3.next = 6;
            return BX.rest.callMethod("im.user.get", {});
          case 6:
            reportsList = _context3.sent;
            _context3.next = 12;
            break;
          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", []);
          case 12:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 9]]);
    }));
    return function getAvailableReports() {
      return _ref3.apply(this, arguments);
    };
  }();
  var getUsersByPosition$1 = /*#__PURE__*/function () {
    var _ref4 = babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$1().mark(function _callee4(positionToSearch) {
      var response;
      return _regeneratorRuntime$1().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return BX.rest.callMethod("user.get", {
              filter: {
                WORK_POSITION: positionToSearch
              }
            });
          case 3:
            response = _context4.sent;
            return _context4.abrupt("return", response["answer"]["result"]);
          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            console.error("Error fetching data:", _context4.t0);
            throw _context4.t0;
          case 11:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 7]]);
    }));
    return function getUsersByPosition$$1(_x) {
      return _ref4.apply(this, arguments);
    };
  }();
  var collectDefaultData = /*#__PURE__*/function () {
    var _ref5 = babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$1().mark(function _callee5(workPos) {
      var response, userData, storages, secondName;
      return _regeneratorRuntime$1().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return getUsersByPosition$1(workPos);
          case 2:
            response = _context5.sent;
            userData = response[0];
            if (!(!userData || !userData["UF_USR_GUID"] || !userData["UF_USR_STORAGES3"])) {
              _context5.next = 6;
              break;
            }
            return _context5.abrupt("return", null);
          case 6:
            storages = JSON.parse(userData["UF_USR_STORAGES3"]);
            secondName = userData["SECOND_NAME"] ? userData["SECOND_NAME"] : "";
            return _context5.abrupt("return", {
              name: userData["LAST_NAME"] + " " + userData["NAME"] + " " + secondName + ", " + workPos,
              guid: userData["UF_USR_GUID"],
              storages: storages
            });
          case 9:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function collectDefaultData(_x2) {
      return _ref5.apply(this, arguments);
    };
  }();
  var createFilename = /*#__PURE__*/function () {
    var _ref6 = babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$1().mark(function _callee6(reportName) {
      var user, userId, currentDate;
      return _regeneratorRuntime$1().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return getCurrentUser();
          case 2:
            user = _context6.sent;
            userId = user["id"];
            currentDate = new Date();
            return _context6.abrupt("return", userId + reportName + currentDate.getFullYear() + currentDate.getMonth() + currentDate.getDay() + currentDate.getTime());
          case 6:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return function createFilename(_x3) {
      return _ref6.apply(this, arguments);
    };
  }();
  var getReportFrom1C = /*#__PURE__*/function () {
    var _ref7 = babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$1().mark(function _callee7(xml, filename) {
      var storageId, formData, serializer, response;
      return _regeneratorRuntime$1().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return getUserDiskId();
          case 2:
            storageId = _context7.sent;
            formData = new FormData();
            serializer = new XMLSerializer();
            formData.append("xml", serializer.serializeToString(xml));
            formData.append("filename", filename);
            formData.append("storageId", storageId);
            _context7.next = 10;
            return fetch(config.bitrix_url + "/1cApi/getReport", {
              method: "POST",
              body: formData
            });
          case 10:
            response = _context7.sent;
            return _context7.abrupt("return", response.text());
          case 12:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }));
    return function getReportFrom1C(_x4, _x5) {
      return _ref7.apply(this, arguments);
    };
  }();
  var downloadReportFile = /*#__PURE__*/function () {
    var _ref8 = babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$1().mark(function _callee8(fileId) {
      return _regeneratorRuntime$1().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            BX.rest.callMethod("disk.file.get", {
              id: fileId
            }, function (result) {
              if (result.error()) {
                console.log(result.error());
              } else {
                console.log(result.data());
                var response = result.data();
                var url = response["DOWNLOAD_URL"];
                var link = document.createElement("a");
                link.href = url;
                link.download = response["NAME"];
                document.body.appendChild(link);
                link.click();
                window.URL.revokeObjectURL(url);
              }
            });
          case 1:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    return function downloadReportFile(_x6) {
      return _ref8.apply(this, arguments);
    };
  }();
  var goToEdit = /*#__PURE__*/function () {
    var _ref9 = babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$1().mark(function _callee9(fileId) {
      var linkToEdit, currentSlider;
      return _regeneratorRuntime$1().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            linkToEdit = BX.util.add_url_param("/bitrix/services/main/ajax.php", {
              action: "disk.api.documentService.goToPreview",
              serviceCode: "onlyoffice",
              objectId: fileId,
              attachedObjectId: 0,
              versionId: 0,
              IFRAME: "Y",
              IFRAME_TYPE: "SIDE_SLIDER"
            });
            currentSlider = BX.SidePanel.Instance.getSliderByWindow(window);
            if (!currentSlider) {
              BX.SidePanel.Instance.open(linkToEdit, {
                width: "100%",
                cacheable: false,
                allowChangeHistory: false,
                data: {
                  documentEditor: true
                }
              });
            } else {
              currentSlider.setContent('<iframe src="' + linkToEdit + '" width="100%" height="100%"></iframe>');
              currentSlider.setTitle("Заголовок слайдера");
            }
          case 3:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    }));
    return function goToEdit(_x7) {
      return _ref9.apply(this, arguments);
    };
  }();
  var getUserClients$1 = /*#__PURE__*/function () {
    var _ref10 = babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$1().mark(function _callee10(userGuid) {
      var response, result;
      return _regeneratorRuntime$1().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return fetch(config.bitrix_url + "/1cApi/getPartners/".concat(userGuid), {
              method: "GET"
            });
          case 3:
            response = _context10.sent;
            _context10.next = 6;
            return response.json();
          case 6:
            result = _context10.sent;
            if (!(result.body.length > 0)) {
              _context10.next = 9;
              break;
            }
            return _context10.abrupt("return", result.body);
          case 9:
            return _context10.abrupt("return", []);
          case 12:
            _context10.prev = 12;
            _context10.t0 = _context10["catch"](0);
            return _context10.abrupt("return", null);
          case 15:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[0, 12]]);
    }));
    return function getUserClients$$1(_x8) {
      return _ref10.apply(this, arguments);
    };
  }();
  var getHierarchy$1 = /*#__PURE__*/function () {
    var _ref11 = babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$1().mark(function _callee11() {
      return _regeneratorRuntime$1().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return readJsonFile("../../local/js/local/reports/src/data/workPositionsConfig.json");
          case 2:
            return _context11.abrupt("return", _context11.sent);
          case 3:
          case "end":
            return _context11.stop();
        }
      }, _callee11);
    }));
    return function getHierarchy$$1() {
      return _ref11.apply(this, arguments);
    };
  }();
  var getUserDiskId = /*#__PURE__*/function () {
    var _ref12 = babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$1().mark(function _callee12() {
      var user, userId, response2;
      return _regeneratorRuntime$1().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return getCurrentUser();
          case 2:
            user = _context12.sent;
            userId = user["id"];
            _context12.next = 6;
            return BX.rest.callMethod("disk.storage.getlist", {
              filter: {
                ENTITY_ID: userId
              }
            });
          case 6:
            response2 = _context12.sent;
            return _context12.abrupt("return", response2["answer"]["result"][0]["ID"]);
          case 8:
          case "end":
            return _context12.stop();
        }
      }, _callee12);
    }));
    return function getUserDiskId() {
      return _ref12.apply(this, arguments);
    };
  }();
  var getHierarchyFrom1C = /*#__PURE__*/function () {
    var _ref13 = babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$1().mark(function _callee13() {
      var response;
      return _regeneratorRuntime$1().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return fetch(config.bitrix_url + "/1cApi/getHierarchy/", {
              method: "GET"
            });
          case 2:
            response = _context13.sent;
            return _context13.abrupt("return", response.json());
          case 4:
          case "end":
            return _context13.stop();
        }
      }, _callee13);
    }));
    return function getHierarchyFrom1C() {
      return _ref13.apply(this, arguments);
    };
  }();

  var getSubordinates1$1 = function getSubordinates1(obj, target) {
    if (obj && Array.isArray(obj)) {
      // Если obj - массив, проверяем наличие target в массиве
      return null;
    }
    // Проверяем, является ли obj объектом
    if (obj && babelHelpers["typeof"](obj) === 'object') {
      // Если obj - объект, проверяем наличие target в качестве ключа
      if (Object.keys(obj).includes(target)) {
        // Если target найден в качестве ключа, возвращаем соответствующее значение
        return Array.isArray(obj[target]) ? obj[target] : Object.keys(obj[target]);
      }

      // Если target не найден в качестве ключа, рекурсивно вызываем функцию для каждого элемента объекта
      for (var item in obj) {
        var result = getSubordinates1(obj[item], target);
        // Если результат не null, возвращаем найденное значение
        if (result !== null) {
          return result;
        }
      }
    }
    // Если target не найден, возвращаем null
    return null;
  };

  function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }
  function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { babelHelpers.defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _regeneratorRuntime$2() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime$2 = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == babelHelpers["typeof"](h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(babelHelpers["typeof"](e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
  var useReportsStore = ui_vue3_pinia.defineStore("reports", {
    state: function state() {
      return {
        userAttrs: null,
        userAttrsTest: null,
        workPosition: null,
        templates: null,
        modalActive: false,
        reportType: null,
        activeRepStructure: null,
        error: null,
        hierarchyStructure: null,
        availableReports: null,
        currentTableBody: null,
        currentTableParams: null,
        currentFilename: null,
        modalFilterLoading: false
      };
    },
    actions: {
      setUserAttrs: function setUserAttrs(value) {
        this.userAttrs = value;
      },
      setTemplatesConfig: function setTemplatesConfig(value) {
        this.templatesConfig = value;
      },
      setWorkPosition: function setWorkPosition() {
        var _this = this;
        return babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$2().mark(function _callee() {
          return _regeneratorRuntime$2().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return getWorkPosition$1();
              case 2:
                _this.workPosition = _context.sent;
              case 3:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      },
      setTemplates: function setTemplates(value) {
        this.templates = value;
      },
      setActiveReport: function setActiveReport(value) {
        this.activeRepStructure = templatesJson[value];
        this.reportType = value;
        this.toggleModal();
      },
      setCurrentFilename: function setCurrentFilename(filename) {
        this.currentFilename = filename;
      },
      toggleModal: function toggleModal() {
        this.modalActive = !this.modalActive;
      },
      addTableData: function addTableData(tableData, tableParams) {
        this.currentTableParams = tableParams;
        this.currentPage = 0;
        var checkSize = tableData.length / this.pageSize;
        // this.currentTableHeader = tableData.splice(0, 2);
        this.currentTableBody = tableData;
      },
      switchCurrentTable: function switchCurrentTable(pageNum) {
        this.currentPage = pageNum;
        var startIndex = this.pageSize * pageNum;
        if (pageNum === this.pagesCount) {
          var lastIndex = this.allTableData.length;
          this.currentTableBody = this.allTableData.slice(startIndex, lastIndex);
          return;
        }
        var endIndex = startIndex + this.pageSize;
        this.currentTableBody = this.allTableData.slice(startIndex, endIndex);
      },
      handleCloseModal: function handleCloseModal() {
        this.activeRepStructure = null;
        this.reportType = null;
        this.modalActive = false;
      },
      loadData: function loadData(field) {
        var _this2 = this;
        return babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$2().mark(function _callee2() {
          return _regeneratorRuntime$2().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (!["managers", "clients"].includes(field)) {
                  _context2.next = 5;
                  break;
                }
                _context2.next = 3;
                return _this2.loadManagersData();
              case 3:
                _context2.next = 7;
                break;
              case 5:
                _context2.next = 7;
                return _this2.loadDefaultData();
              case 7:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      loadDefaultData: function loadDefaultData() {
        var _arguments = arguments,
          _this3 = this;
        return babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$2().mark(function _callee3() {
          var workPos;
          return _regeneratorRuntime$2().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                workPos = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : null;
                if (!(workPos === null)) {
                  _context3.next = 5;
                  break;
                }
                _context3.next = 4;
                return getWorkPosition$1();
              case 4:
                workPos = _context3.sent;
              case 5:
                _context3.next = 7;
                return collectDefaultData(workPos);
              case 7:
                _this3.userAttrsTest = _context3.sent;
              case 8:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      asyncLoadClients: function asyncLoadClients(storeTarget, guid) {
        var _this4 = this;
        return babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$2().mark(function _callee4() {
          var storeData;
          return _regeneratorRuntime$2().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                storeData = _this4.findItemById(_this4.userAttrsTest, storeTarget);
                if (!storeData) {
                  _context4.next = 6;
                  break;
                }
                if (!(!storeData.clients || storeData.clients.length === 0)) {
                  _context4.next = 6;
                  break;
                }
                _context4.next = 5;
                return getUserClients$1(guid);
              case 5:
                storeData.clients = _context4.sent;
              case 6:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      asyncLoadData: function asyncLoadData() {
        var _arguments2 = arguments,
          _this5 = this;
        return babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$2().mark(function _callee5() {
          var workPos, target, tmpWorkPos, clients, storeData, subs, _iterator, _step, _loop;
          return _regeneratorRuntime$2().wrap(function _callee5$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                workPos = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : null;
                target = _arguments2.length > 1 && _arguments2[1] !== undefined ? _arguments2[1] : null;
                _context6.next = 4;
                return _this5.setHierarchyStructure();
              case 4:
                if (workPos) {
                  _context6.next = 8;
                  break;
                }
                _context6.next = 7;
                return getWorkPosition$1();
              case 7:
                workPos = _context6.sent;
              case 8:
                if (!(_this5.userAttrsTest === null)) {
                  _context6.next = 20;
                  break;
                }
                _context6.next = 11;
                return collectDefaultData(workPos);
              case 11:
                _this5.userAttrsTest = _context6.sent;
                _context6.next = 14;
                return getWorkPosition$1();
              case 14:
                tmpWorkPos = _context6.sent;
                if (!(tmpWorkPos.includes("ТП") && !target)) {
                  _context6.next = 20;
                  break;
                }
                _context6.next = 18;
                return getUserClients$1(_this5.userAttrsTest["guid"]);
              case 18:
                clients = _context6.sent;
                _this5.userAttrsTest["managers"] = [_objectSpread$1(_objectSpread$1({}, _this5.userAttrsTest), {}, {
                  clients: clients
                })];
              case 20:
                storeData = _this5.userAttrsTest;
                if (target) {
                  storeData = _this5.findItemById(_this5.userAttrsTest, target) || storeData;
                }
                subs = getSubordinates1$1(_this5.hierarchyStructure, workPos);
                if (!(subs && subs.length > 0)) {
                  _context6.next = 42;
                  break;
                }
                _iterator = _createForOfIteratorHelper$1(subs);
                _context6.prev = 25;
                _loop = /*#__PURE__*/_regeneratorRuntime$2().mark(function _loop() {
                  var item, itemAttrs, check;
                  return _regeneratorRuntime$2().wrap(function _loop$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                      case 0:
                        item = _step.value;
                        _context5.next = 3;
                        return collectDefaultData(item);
                      case 3:
                        itemAttrs = _context5.sent;
                        if (itemAttrs) {
                          _context5.next = 6;
                          break;
                        }
                        return _context5.abrupt("return", 1);
                      case 6:
                        if (!storeData.managers) {
                          storeData.managers = [];
                        }
                        check = storeData.managers.find(function (manager) {
                          return manager.name === itemAttrs.name;
                        });
                        if (!check) {
                          storeData.managers.push(itemAttrs);
                        }
                        if (item.includes("ТП")) {
                          _this5.asyncLoadClients(itemAttrs.name, itemAttrs.guid);
                        }
                        _context5.next = 12;
                        return _this5.asyncLoadData(item, itemAttrs.name);
                      case 12:
                      case "end":
                        return _context5.stop();
                    }
                  }, _loop);
                });
                _iterator.s();
              case 28:
                if ((_step = _iterator.n()).done) {
                  _context6.next = 34;
                  break;
                }
                return _context6.delegateYield(_loop(), "t0", 30);
              case 30:
                if (!_context6.t0) {
                  _context6.next = 32;
                  break;
                }
                return _context6.abrupt("continue", 32);
              case 32:
                _context6.next = 28;
                break;
              case 34:
                _context6.next = 39;
                break;
              case 36:
                _context6.prev = 36;
                _context6.t1 = _context6["catch"](25);
                _iterator.e(_context6.t1);
              case 39:
                _context6.prev = 39;
                _iterator.f();
                return _context6.finish(39);
              case 42:
              case "end":
                return _context6.stop();
            }
          }, _callee5, null, [[25, 36, 39, 42]]);
        }))();
      },
      setHierarchyStructure: function setHierarchyStructure() {
        var _this6 = this;
        return babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$2().mark(function _callee6() {
          return _regeneratorRuntime$2().wrap(function _callee6$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                if (_this6.hierarchyStructure) {
                  _context7.next = 4;
                  break;
                }
                _context7.next = 3;
                return getHierarchy$1();
              case 3:
                _this6.hierarchyStructure = _context7.sent;
              case 4:
              case "end":
                return _context7.stop();
            }
          }, _callee6);
        }))();
      },
      findItemById: function findItemById(data, name) {
        if (babelHelpers["typeof"](data) === "object") {
          if (data.name === name) {
            return data;
          }
          if (data.managers && Array.isArray(data.managers)) {
            var _iterator2 = _createForOfIteratorHelper$1(data.managers),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var manager = _step2.value;
                var foundItem = this.findItemById(manager, name);
                if (foundItem !== null) {
                  return foundItem;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }
        return null;
      }
    }
  });

  var TemplateItem = {
    props: {
      imageSrc: {
        type: String,
        required: false
      },
      templateName: {
        type: String,
        required: true
      },
      handleItemClick: {
        type: Function,
        required: false
      }
    },
    template: "\n      <div @click=\"handleItemClick\" class=\"item__container\">\n              <template v-if=\"imageSrc\">\n                <img :src=\"'../local/js/local/reports/public/' + templateName + '.svg'\" alt=\"Task Image\">\n              </template>\n      <!--        <p>{{ templateName }}</p>-->\n      {{ templateName }}\n      </div>",
    styles: "\n    /* \u0412\u0430\u0448\u0438 \u0441\u0442\u0438\u043B\u0438 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 Item */\n    .item__container {\n      /* \u0441\u0442\u0438\u043B\u0438 */\n    }\n  "
  };

  function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), !0).forEach(function (r) { babelHelpers.defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  var TemplatesList = {
    components: {
      TemplateItem: TemplateItem
    },
    methods: _objectSpread$2(_objectSpread$2({}, ui_vue3_pinia.mapActions(useReportsStore, ['setActiveReport', 'toggleModal'])), {}, {
      onClickItem: function onClickItem(item) {
        this.setActiveReport(item);
      }
    }),
    computed: {
      templates: function templates() {
        return templatesJson;
      }
    },
    mounted: function mounted() {
      var ears = new ui_ears.Ears({
        container: document.querySelector(".templates__container"),
        smallSize: false,
        noScrollbar: true
      });
      ears.init();
    },
    template: "\n<!--      <h1 class = \"text_name\">\u041E\u0442\u0447\u0451\u0442\u044B</h1>-->\n    <div>\n      <div class=\"templates__container\">\n      <TemplateItem\n          v-for=\"item in Object.keys(templates)\"\n          :imageSrc=\"'../local/js/local/reports/public/report.svg'\"\n          :templateName=\"templates[item].name\"\n          :handleItemClick=\"()=>onClickItem(item)\"\n      />\n      </div>\n    </div>\n    ",
    styles: "\n    /* \u0412\u0430\u0448\u0438 \u0441\u0442\u0438\u043B\u0438 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 Item */\n    .templates__container {\n      display: flex;\n      flex-direction: row;\n    }"
  };

  function formatDate(dateString) {
    var date = new Date(dateString);
    date.setHours(23);
    date.setMinutes(59);
    date.setSeconds(59);
    return date.toISOString().slice(0, 19).replace(' ', 'T');
  }
  function reformXmlField(xmlObject, fieldName, value) {
    var parser = new DOMParser();
    var serializer = new XMLSerializer();

    // Найти элемент с нужным полем
    var fieldElement = xmlObject.querySelector(fieldName);
    if (fieldElement) {
      if (Array.isArray(value)) {
        // Если значение является массивом, дублировать текущее значение и добавить переданные значения
        var currentValue = fieldElement.textContent;
        value.forEach(function (item, index) {
          var clonedElement = fieldElement.cloneNode(true);
          clonedElement.textContent = item.guid;

          // Добавить новый элемент после текущего элемента
          fieldElement.parentNode.insertBefore(clonedElement, fieldElement.nextSibling);
        });
        fieldElement.parentNode.removeChild(fieldElement);
      } else {
        // Просто установить новое значение, если передано одно значение
        fieldElement.textContent = value.guid;
      }
      var updatedXmlString = serializer.serializeToString(xmlObject);

      // Вернуть обновленный XML-документ в виде строки
      return xmlObject;
    } else {
      console.error("Field '".concat(fieldName, "' not found in the XML object."));
    }
  }
  function reformXmlPeriod(xmlDoc, field, startDate, endDate) {
    console.log(field);
    var periodElement = Array.from(xmlDoc.querySelectorAll('dataParameters item parameter')).find(function (item) {
      return item.textContent === field;
    });
    var endDateElement = xmlDoc.querySelector('dataParameters');
    var parentElement = periodElement.closest('item');
    var startTag = parentElement.querySelector('value startDate');
    var endTag = parentElement.querySelector('value endDate');
    console.log(startTag, endTag);
    startTag.textContent = formatDate(startDate);
    endTag.textContent = formatDate(endDate);
    return xmlDoc;
  }
  function reformXmlDate(xmlDoc, date) {
    var periodElement = Array.from(xmlDoc.querySelectorAll('dataParameters item parameter')).find(function (item) {
      return item.textContent === 'ДатаОтчета';
    });
    var parentElement = periodElement.closest('item');
    var dateTag = parentElement.querySelector('value');
    dateTag.textContent = formatDate(date);
    return xmlDoc;
  }

  var DropdownMenu = {
    props: {
      menuText: {
        type: String,
        required: true
      },
      checkboxAction: {
        type: Function,
        required: true
      },
      checkboxState: {
        type: String,
        required: true
      },
      dropdownLength: {
        type: Number,
        required: true
      }
    },
    data: function data() {
      return {
        isDropdownVisible: false
      };
    },
    computed: {
      uniqueId: function uniqueId() {
        return this.stringToHash(this.menuText);
      },
      isSlotNotEmpty: function isSlotNotEmpty() {
        return true;
      }
    },
    methods: {
      toggleDropdown: function toggleDropdown(event) {
        this.isDropdownVisible = !this.isDropdownVisible;
        if (event) {
          event.stopPropagation();
        }
      },
      stringToHash: function stringToHash(str) {
        var hash = 0;
        if (str.length === 0) return hash;
        for (var i = 0; i < str.length; i++) {
          var _char = str.charCodeAt(i);
          hash = (hash << 5) - hash + _char;
          hash = hash & hash;
        }
        return hash;
      }
    },
    template: "\n      <template v-if=\"isSlotNotEmpty\">\n        <div class=\"dropdown__container\">\n          <div :class=\"isDropdownVisible? 'dropdown__menuButton_opened' : 'dropdown__menuButton'\">\n            <span class=\"dropdown__menuButton__arrow\" @click=\"toggleDropdown\">\n                <img :src=\"isDropdownVisible ?\n                '../local/js/local/reports/public/minus.svg'\n                :\n                '../local/js/local/reports/public/plus.svg'\"\n                     alt=\"&darr;\"\n                >\n            </span>\n            <div class=\"dropdown__menuButton__text\" @click=\"toggleDropdown\">{{ menuText }}</div>\n            <div class=\"dropdown__menuButton__checkbox\">\n              <input type=\"checkbox\" v-model=\"checkboxState\" @change=\"checkboxAction\" :id=\"uniqueId\">\n              <label :for=\"uniqueId\">\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435</label>\n            </div>\n          </div>\n          <div class=\"dropdown__menu\"\n               :style=\"{ \n                'display': isDropdownVisible ? 'block' : 'none'}\"\n          >\n            <template v-if=\"isDropdownVisible\">\n              <slot>\n                <div class=\"selectorItems__option\"> \u041E\u0442\u0441\u0443\u0441\u0442\u0432\u0443\u044E\u0442 \u0434\u0430\u043D\u043D\u044B\u0435...</div>\n              </slot>\n            </template>\n          </div>\n        </div>\n      </template>\n    "
  };

  var DropdownOptions = {
    props: {
      options: {
        type: Array,
        required: true
      },
      checkOption: {
        type: Function,
        required: true
      },
      containerHeight: {
        type: Number,
        required: true
      },
      scrollContainerRef: {
        type: Object,
        required: true
      },
      selectItem: {
        type: Function,
        required: true
      }
    },
    data: function data() {
      return {
        isLoading: true
      };
    },
    mounted: function mounted() {
      this.isLoading = false;
    },
    template: "\n    <template v-if=\"isLoading\">\n      <div>\n        \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...\n      </div>\n    </template>\n    <template v-else>\n      <div \n      v-for=\"(item, index) in options\" \n      :key=\"index\" \n      class=\"selectorItems__option\" \n      :class=\"checkOption(item) ? 'selected' : ''\"\n      @click=\"selectItem(item)\">\n      <span v-if=\"checkOption(item)\">\n        <img src=\"../local/js/local/reports/public/checked.svg\" alt=\"&darr;\">\n      </span>\n        {{ item.name }}\n      </div>\n      <template v-if=\"options.length===0\">\n        <div class=\"selectorItems__option\">\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432</div>\n      </template>\n    </template>\n  "
  };

  function getOptions(dataArray, field) {
    var resultOptions = [];
    if (field === 'managers') {
      var managersCheck = dataArray.some(function (item) {
        return 'managers' in item;
      });
      // Рекурсивно вызываем getOptions для поля "managers"
      if (managersCheck) {
        dataArray.forEach(function (item) {
          if ('managers' in item) {
            resultOptions.push.apply(resultOptions, babelHelpers.toConsumableArray(getOptions(item.managers, field)));
          }
        });
      } else {
        return dataArray;
      }
    } else if (field === 'clients') {
      // Проверяем наличие ключей "managers" и "clients" в каждом элементе массива
      var _managersCheck = dataArray.some(function (item) {
        return 'managers' in item;
      });
      var clientsCheck = dataArray.some(function (item) {
        return 'clients' in item;
      });
      console.log(_managersCheck, clientsCheck);
      // Рекурсивно вызываем getOptions для поля "managers", если есть
      if (_managersCheck) {
        var tmpMngrs = getOptions(dataArray, 'managers');
        console.log(tmpMngrs);
        tmpMngrs.forEach(function (item) {
          resultOptions.push.apply(resultOptions, babelHelpers.toConsumableArray(item.clients));
        });
      } else if (clientsCheck) {
        // Если есть поле "clients", добавляем его значения в resultOptions
        dataArray.forEach(function (item) {
          if ('clients' in item) {
            resultOptions.push.apply(resultOptions, babelHelpers.toConsumableArray(item.clients));
          }
        });
      }
    } else {
      return dataArray;
    }
    return resultOptions.filter(function (item) {
      return item !== null;
    });
  }

  function ownKeys$3(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread$3(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$3(Object(t), !0).forEach(function (r) { babelHelpers.defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  var ModalSelectorItems = {
    name: "ModalSelectorItems",
    props: {
      filterField: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      options: {
        type: Array,
        required: true
      },
      onSelect: {
        type: Function,
        required: false
      },
      onRemove: {
        type: Function,
        required: false
      },
      selectAllAction: {
        type: Function,
        required: false
      },
      removeAllAction: {
        type: Function,
        required: false
      },
      checkOption: {
        type: Function,
        required: false
      },
      parentCheckboxState: {
        type: Boolean,
        required: false
      },
      scrollContainerRef: {
        type: Object,
        required: true
      }
    },
    data: function data() {
      return {
        selectedItems: [],
        isDropdownVisible: false,
        selectAll: false,
        isDropdownReady: true
      };
    },
    components: {
      DropdownMenu: DropdownMenu,
      DropdownOptions: DropdownOptions
    },
    watch: {
      parentCheckboxState: function parentCheckboxState(newValue, oldValue) {
        this.selectAll = newValue;
      }
    },
    computed: {
      optionsLoaded: function optionsLoaded() {
        return this.options;
      }
    },
    methods: _objectSpread$3(_objectSpread$3({}, ui_vue3_pinia.mapActions(useReportsStore, ["asyncLoadData"])), {}, {
      toggleDropdown: function toggleDropdown() {
        this.isDropdownVisible = !this.isDropdownVisible;
      },
      toggleSelectAll: function toggleSelectAll(options) {
        this.selectAll = !this.selectAll;
        var tmpOptions = getOptions(options, this.filterField);
        if (this.selectAll) {
          this.selectAllAction(tmpOptions);
        } else {
          this.removeAllAction(tmpOptions);
        }
      },
      addItem: function addItem(item) {
        if (!this.selectedItems.find(function (option) {
          return option.guid === item.guid;
        })) {
          this.selectedItems.push(item);
          if (this.onSelect) this.onSelect(item);
        } else {
          this.removeItem(item);
        }
      },
      removeItem: function removeItem(item) {
        this.selectedItems = this.selectedItems.filter(function (option) {
          return option.guid !== item.guid;
        });
        if (this.onRemove) this.onRemove(item);
      },
      isSelected: function isSelected(option) {
        return this.selectedItems.some(function (item) {
          return item.guid === option.guid;
        });
      },
      isRecursive: function isRecursive() {
        var filterCheck = this.filterField === "managers" || this.filterField === "clients";
        var managersCheck = this.options.length > 0 && this.options[0].managers !== undefined;
        return filterCheck && managersCheck;
      },
      handleDropdownReady: function handleDropdownReady() {
        this.isDropdownReady = true;
      }
    }),
    template: "\n    <div class=\"selectorItems__options\">\n      <template v-if=\"optionsLoaded\">\n          <DropdownMenu\n              v-show=\"isDropdownReady\"\n              :menuText=\"title\"\n              :checkboxAction=\"()=>toggleSelectAll(options)\"\n              :checkboxState=\"selectAll\"\n              :dropdownLength=\"options.length > 20 ? 20 : options.length\"\n              @dropdownReady=\"handleDropdownReady\"\n          >\n            <template v-slot:default>\n              <template v-if=\"!isRecursive() && filterField !== 'clients'\">\n                <DropdownOptions\n                    :options=\"options\"\n                    :checkOption=\"checkOption\"\n                    :containerHeight=\"400\"\n                    :scrollContainerRef=\"scrollContainerRef\"\n                    :selectItem=\"addItem\"\n                />\n              </template>\n              <template v-for=\"(item, index) in options\">\n                <template v-if=\"isRecursive()\">\n                  <ModalSelectorItems\n                      :filterField=\"filterField\"\n                      :title=\"item.name\"\n                      :options=\"item.managers\"\n                      :onSelect=\"onSelect\"\n                      :onRemove=\"onRemove\"\n                      :selectAllAction=\"selectAllAction\"\n                      :removeAllAction=\"removeAllAction\"\n                      :checkOption=\"(option) => checkOption(option)\"\n                      :parentCheckboxState=\"selectAll\"\n                      :scrollContainerRef=\"scrollContainerRef\"\n                  />\n                </template>\n                <template v-else-if=\"!isRecursive() && filterField === 'clients'\">\n                  <ModalSelectorItems\n                      :filterField=\"'default'\"\n                      :title=\"item.name\"\n                      :options=\"item.clients? item.clients: []\"\n                      :onSelect=\"onSelect\"\n                      :onRemove=\"onRemove\"\n                      :selectAllAction=\"selectAllAction\"\n                      :removeAllAction=\"removeAllAction\"\n                      :checkOption=\"(option) => checkOption(option)\"\n                      :parentCheckboxState=\"selectAll\"\n                      :scrollContainerRef=\"scrollContainerRef\"\n                  />\n                </template>\n              </template>\n            </template>\n            <template v-else>\n              \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...\n            </template>\n          </DropdownMenu>\n          <div v-if=\"!isDropdownReady\">\n            \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...\n          </div>\n      </template>\n    </div>\n  "
  };

  var ModalSelectedItems = {
    props: {
      selectedItems: {
        type: Array,
        required: true
      },
      removeItem: {
        type: Function,
        required: true
      },
      removeAll: {
        type: Function,
        required: false
      }
    },
    template: "\n      <div class=\"selectedItems__mainContainer\">\n      <template v-if=\"selectedItems.length > 0\">\n        <div\n            class=\"selectedItems__item\"\n            v-for=\"(item, index) in selectedItems\"\n            @click=\"() => removeItem(item)\"\n        >\n          {{ item['name'] }}\n        </div>\n      </template>\n      <template v-else>\n        <div>\u0417\u0434\u0435\u0441\u044C \u0431\u0443\u0434\u0443\u0442 \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u044B \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B</div>\n      </template>\n      </div>\n    "
  };

  function _regeneratorRuntime$3() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime$3 = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == babelHelpers["typeof"](h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(babelHelpers["typeof"](e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
  function ownKeys$4(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread$4(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$4(Object(t), !0).forEach(function (r) { babelHelpers.defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  var ModalForm = {
    components: {
      ModalSelectorItems: ModalSelectorItems,
      ModalSelectedItems: ModalSelectedItems
    },
    data: function data() {
      return {
        selectedItems: {},
        selectingError: null,
        isLoading: false,
        startDate: "",
        currentDate: "",
        ContainerRefArray: []
      };
    },
    mounted: function mounted() {
      var _this = this;
      var currentDate = new Date();
      if (!this.optionsLoaded) {
        this.asyncLoadData();
      }
      var startDateTime = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate(), 0, 0, 0);
      this.startDate = startDateTime.toISOString().slice(0, 16);
      this.currentDate = currentDate.toISOString().slice(0, 16);
      this.activeRepStructure.filters.map(function (item) {
        if (!_this.selectedItems[item.using]) {
          _this.selectedItems[item.using] = [];
        }
      });
    },
    computed: _objectSpread$4(_objectSpread$4({}, ui_vue3_pinia.mapState(useReportsStore, ["userAttrs", "templates", "reportType", "userAttrsTest", "activeRepStructure"])), {}, {
      // ...mapGetters(useReportsStore, ["activeRepStructure"]),
      optionsLoaded: function optionsLoaded() {
        return this.userAttrsTest;
      }
    }),
    updated: function updated() {
      var _this2 = this;
      return babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$3().mark(function _callee() {
        return _regeneratorRuntime$3().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this2.$nextTick();
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    methods: _objectSpread$4(_objectSpread$4({}, ui_vue3_pinia.mapActions(useReportsStore, ["toggleModal", "addTableData", "setCurrentFilename", "asyncLoadData"])), {}, {
      addRef: function addRef(el) {
        if (el) {
          this.ContainerRefArray.push(el);
        }
      },
      closeDateTimePicker: function closeDateTimePicker(event) {
        var datetimePicker = event.target;
        datetimePicker.blur();
      },
      filterSelectItem: function filterSelectItem(section, item) {
        if (!this.selectedItems[section]) {
          this.selectedItems[section] = [];
        }
        if (!this.selectedItems[section].find(function (option) {
          return option["guid"] === item["guid"];
        })) {
          this.selectedItems[section] = [].concat(babelHelpers.toConsumableArray(this.selectedItems[section]), [item]);
        } else {
          this.filterRemoveItem(section, item);
        }
      },
      filterRemoveItem: function filterRemoveItem(section, item) {
        this.selectedItems[section] = this.selectedItems[section].filter(function (option) {
          return option["guid"] !== item["guid"];
        });
      },
      filterClear: function filterClear(section, options) {
        var _this3 = this;
        options.forEach(function (option) {
          _this3.selectedItems[section] = _this3.selectedItems[section].filter(function (item) {
            return item.guid !== option.guid;
          });
        });
      },
      filterSelectAll: function filterSelectAll(section, options) {
        var _this4 = this;
        if (!this.selectedItems[section]) {
          this.selectedItems[section] = [];
        }
        options.forEach(function (option) {
          if (!_this4.selectedItems[section].find(function (item) {
            return item.guid === option.guid;
          })) {
            _this4.selectedItems[section].push(option);
          }
        });
      },
      filterCheckOption: function filterCheckOption(section, option) {
        if (!this.selectedItems[section]) {
          return false;
        }
        return this.selectedItems[section].find(function (element) {
          return element.guid === option.guid;
        });
      },
      xmlReform: function xmlReform() {
        var _this5 = this;
        return babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$3().mark(function _callee2() {
          var checkAllFilters, parser, xmlDoc, filterItemLeft, _loop, index, _index, paramType, paramField, fileName, response, _JSON$parse, file, data;
          return _regeneratorRuntime$3().wrap(function _callee2$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                checkAllFilters = Object.keys(_this5.selectedItems).length > 0;
                if (_this5.activeRepStructure.filters.find(function (item, index) {
                  return _this5.selectedItems[item.using].length > 0;
                })) {
                  _context3.next = 4;
                  break;
                }
                _this5.selectingError = "Выбраны не все параметры отчёта";
                return _context3.abrupt("return");
              case 4:
                parser = new DOMParser();
                xmlDoc = parser.parseFromString(_this5.templates[_this5.reportType], "text/xml");
                filterItemLeft = xmlDoc.querySelectorAll("filter item left");
                _loop = /*#__PURE__*/_regeneratorRuntime$3().mark(function _loop() {
                  var filterSection, filterItemLeftArray, targetTag, parentItemElement, rightElement, updatedElement;
                  return _regeneratorRuntime$3().wrap(function _loop$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        filterSection = _this5.activeRepStructure.filters[index];
                        if (!(!_this5.selectedItems[filterSection.using] || _this5.selectedItems[filterSection.using].length < 1)) {
                          _context2.next = 3;
                          break;
                        }
                        return _context2.abrupt("return", 1);
                      case 3:
                        filterItemLeftArray = Array.from(filterItemLeft);
                        targetTag = filterItemLeftArray.find(function (item) {
                          return item.textContent === filterSection.inXml;
                        });
                        parentItemElement = targetTag.closest("item");
                        rightElement = parentItemElement.querySelector("right");
                        updatedElement = reformXmlField(parentItemElement, "right", _this5.selectedItems[filterSection.using]);
                        parentItemElement.parentNode.replaceChild(updatedElement, parentItemElement);
                      case 9:
                      case "end":
                        return _context2.stop();
                    }
                  }, _loop);
                });
                _context3.t0 = _regeneratorRuntime$3().keys(_this5.activeRepStructure.filters);
              case 9:
                if ((_context3.t1 = _context3.t0()).done) {
                  _context3.next = 16;
                  break;
                }
                index = _context3.t1.value;
                return _context3.delegateYield(_loop(), "t2", 12);
              case 12:
                if (!_context3.t2) {
                  _context3.next = 14;
                  break;
                }
                return _context3.abrupt("continue", 9);
              case 14:
                _context3.next = 9;
                break;
              case 16:
                for (_index in _this5.activeRepStructure.parameters) {
                  paramType = _this5.activeRepStructure.parameters[_index].view;
                  paramField = _this5.activeRepStructure.parameters[_index].inXml;
                  if (paramType === "Период" || paramType === "Период отгрузки") {
                    xmlDoc = reformXmlPeriod(xmlDoc, paramField, _this5.startDate, _this5.currentDate);
                  } else if (paramType === "Дата отчёта") {
                    xmlDoc = reformXmlDate(xmlDoc, _this5.currentDate);
                  }
                }
                _this5.isLoading = !_this5.isLoading;
                _context3.next = 20;
                return createFilename(_this5.reportType);
              case 20:
                fileName = _context3.sent;
                _context3.next = 23;
                return getReportFrom1C(xmlDoc, fileName);
              case 23:
                response = _context3.sent;
                _JSON$parse = JSON.parse(response), file = _JSON$parse.file, data = _JSON$parse.data;
                _this5.setCurrentFilename(file);
                _this5.addTableData(JSON.parse(data), _this5.selectedItems);
                _this5.isLoading = !_this5.isLoading;
                _this5.toggleModal();
              case 29:
              case "end":
                return _context3.stop();
            }
          }, _callee2);
        }))();
      }
    }),
    template: "\n    <div class=\"modal__overlay\">\n      <template v-if=\"isLoading\">\n        <div class=\"modal__loading\">\n        </div>\n      </template>\n      <template v-else-if=\"optionsLoaded\">\n        <div class=\"modal__container\">\n          <div class=\"modal__content\">\n            <h1 class=\"modal__headers\">{{ activeRepStructure.name }}</h1>\n            <template v-for=\"(item, index) in activeRepStructure['parameters']\">\n              <h2 class=\"modal__headers\">{{ item.view }}</h2>\n              <template v-if=\"['\u041F\u0435\u0440\u0438\u043E\u0434', '\u041F\u0435\u0440\u0438\u043E\u0434 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0438'].includes(item.view)\">\n                <div class=\"datetime-input-container\">\n                  <div class=\"datetime-input-group\">\n                    <label for=\"startDateTime\">\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u0430\u0442\u0430:</label>\n                    <input\n                        type=\"datetime-local\"\n                        id=\"startDateTime\"\n                        v-model=\"startDate\"\n                        class=\"datetime-input\"\n                        @input=\"closeDateTimePicker\"\n                    >\n                  </div>\n                  <div class=\"datetime-input-group\">\n                    <label for=\"endDateTime\">\u041A\u043E\u043D\u0435\u0447\u043D\u0430\u044F \u0434\u0430\u0442\u0430:</label>\n                    <input\n                        type=\"datetime-local\"\n                        id=\"endDateTime\"\n                        v-model=\"currentDate\"\n                        class=\"datetime-input\"\n                        @input=\"closeDateTimePicker\"\n                    />\n                  </div>\n                </div>\n              </template>\n              <template v-else-if=\"item.view === '\u0414\u0430\u0442\u0430 \u043E\u0442\u0447\u0451\u0442\u0430'\">\n                <div class=\"datetime-input-container\">\n                  <div class=\"datetime-input-group\">\n                    <label for=\"startDateTime\">\u0414\u0430\u0442\u0430:</label>\n                    <input\n                        type=\"datetime-local\"\n                        id=\"startDateTime\"\n                        v-model=\"currentDate\"\n                        class=\"datetime-input\"\n                        @input=\"closeDateTimePicker\"\n                    >\n                  </div>\n                </div>\n              </template>\n            </template>\n            <h2 class=\"modal__headers\" v-if=\"activeRepStructure['filters'].length > 0\">\u0424\u0438\u043B\u044C\u0442\u0440 \u0440\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u043E\u0432</h2>\n            <template v-if=\"selectingError\">\n              <h3>{{ selectingError }}</h3>\n            </template>\n            <template v-for=\"(item,index) in activeRepStructure['filters']\" :key=\"index\">\n              <h3 class=\"modal__headers\">{{ item.view }}</h3>\n              <template v-if=\"optionsLoaded\">\n                <ModalSelectedItems\n                    :selectedItems=\"selectedItems[item.using]?selectedItems[item.using]: []\"\n                    :removeItem=\"(option) => filterRemoveItem(item.using, option)\"\n                    :removeAll=\"()=>filterClear(item.using, userAttrsTest[item['using']])\"\n                />\n                <div class=\"modal__selectors\" :ref=\"addRef\">\n                  <template v-if=\"['clients', 'managers'].includes(item.using)\">\n                    <ModalSelectorItems\n                        :filterField=\"item.using\"\n                        :title=\"'\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B'\"\n                        :options=\"userAttrsTest['managers']?userAttrsTest['managers']:userAttrsTest[item.using]\"\n                        :onSelect=\"(option) => filterSelectItem(item.using, option)\"\n                        :onRemove=\"(option) => filterRemoveItem(item.using, option)\"\n                        :selectAllAction=\"(options)=>filterSelectAll(item.using, options)\"\n                        :removeAllAction=\"(options)=>filterClear(item.using, options)\"\n                        :checkOption=\"(option) => filterCheckOption(item.using, option)\"\n                        :parentCheckboxState=\"false\"\n                        :scrollContainerRef=\"ContainerRefArray[index]\"\n                    />\n                  </template>\n                  <template v-else>\n                    <ModalSelectorItems\n                        :filterField=\"item.using\"\n                        :title=\"'\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B'\"\n                        :options=\"userAttrsTest[item.using]\"\n                        :onSelect=\"(option) => filterSelectItem(item.using, option)\"\n                        :onRemove=\"(option) => filterRemoveItem(item.using, option)\"\n                        :selectAllAction=\"(options)=>filterSelectAll(item.using, options)\"\n                        :removeAllAction=\"(options)=>filterClear(item.using, options)\"\n                        :checkOption=\"(option) => filterCheckOption(item.using, option)\"\n                        :parentCheckboxState=\"false\"\n                        :scrollContainerRef=\"ContainerRefArray[index]\"\n                    />\n                  </template>\n                </div>\n              </template>\n              <template>\n                Zagruzka\n              </template>\n            </template>\n          </div>\n          <div class=\"modal__buttons\">\n            <button class=\"ui-btn ui-btn-danger-light\" @click=\"()=>toggleModal()\">\u041E\u0442\u043C\u0435\u043D\u0430</button>\n            <button class=\"ui-btn ui-btn-success-light\" @click=\"xmlReform\">\u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0442\u0447\u0435\u0442</button>\n          </div>\n        </div>\n      </template>\n    </div>\n  "
  };

  var Pagination = {
    props: {
      currentPage: {
        type: Number,
        require: true
      },
      pagesCount: {
        type: Number,
        require: true
      },
      selectPageAction: {
        type: Function,
        require: true
      }
    },
    methods: {
      switchNext: function switchNext() {
        if (this.currentPage >= this.pagesCount - 1) {
          return;
        }
        var tmpPageNum = this.currentPage + 1;
        this.selectPageAction(tmpPageNum);
        return;
      },
      switchBack: function switchBack() {
        var tmpPageNum = this.currentPage - 1;
        if (this.currentPage <= 0) {
          return;
        }
        this.selectPageAction(tmpPageNum);
        return;
      }
    },
    template: "\n      <div class=\"pagination__container\">\n      <ul class=\"pagination__list\">\n        <li @click=\"() => selectPageAction(0)\" >\n          <img :src=\"'../local/js/local/reports/public/doubleleftarrow.svg'\" alt=\"Task Image\">\n        </li>\n        <li @click=\"switchBack\">\n          <img :src=\"'../local/js/local/reports/public/leftarrow.svg'\" alt=\"Task Image\">\n        </li>\n        <template v-for=\"(n, i) in pagesCount\">\n          <template v-if=\"Number(i) === currentPage\">\n            <li @click=\"() => selectPageAction(i)\" class=\"pagination__currentItem\">\n              {{ n }}\n            </li>\n          </template>\n          <template v-else>\n            <li @click=\"selectPageAction(i)\">\n              {{ n }}\n            </li>\n          </template>\n        </template>\n        <li @click=\"switchNext\">\n          <img :src=\"'../local/js/local/reports/public/rightarrow.svg'\" alt=\"Task Image\">\n        </li>\n        <li @click=\"() => selectPageAction(pagesCount-1)\">\n          <img :src=\"'../local/js/local/reports/public/doublerightarrow.svg'\" alt=\"Task Image\">\n        </li>\n      </ul>\n      </div>\n    "
  };

  var TableBody = {
    name: 'TableBody',
    props: {
      options: {
        type: Array,
        required: true
      },
      rowLevel: {
        type: Number,
        required: true
      }
    },
    data: function data() {
      return {
        collapsedRows: new Set() // Множество для хранения индексов скрытых строк
      };
    },
    methods: {
      checkHiddenRows: function checkHiddenRows(rowNum) {
        var currentLevel = this.options[rowNum][0];

        // Проверяем, что индекс следующей строки в пределах массива и уровень вложенности следующей строки не равен текущему уровню
        if (rowNum + 1 < this.options.length && this.options[rowNum + 1][0] !== currentLevel) {
          // Ищем индекс следующей строки с таким же уровнем вложенности
          var endIndex = this.options.slice(rowNum + 1).findIndex(function (item, index) {
            return item[0] === currentLevel;
          });
          // Если индекс найден, возвращаем срез массива строк
          if (endIndex !== -1) {
            return this.options.slice(rowNum + 1, rowNum + 1 + endIndex);
          } else {
            return this.options.slice(rowNum + 1);
          }
        }
        return null;
      },
      toggleRow: function toggleRow(rowNum) {
        if (this.collapsedRows.has(rowNum)) {
          this.collapsedRows["delete"](rowNum); // Если строка скрыта, удаляем ее из множества скрытых строк
        } else {
          this.collapsedRows.add(rowNum); // Если строка видима, добавляем ее в множество скрытых строк
        }
        console.log(this.collapsedRows);
      },
      isRowCollapsed: function isRowCollapsed(rowNum) {
        return this.collapsedRows.has(rowNum); // Проверяем, скрыта ли строка
      }
    },
    computed: {
      thisLevelIndexes: function thisLevelIndexes() {
        var _this = this;
        return this.options.map(function (value, index) {
          return {
            value: value,
            index: index
          };
        }).filter(function (item) {
          return item.value[0] === _this.rowLevel;
        }).map(function (item) {
          return item.index;
        });
      }
    },
    mounted: function mounted() {
      var _this2 = this;
      this.thisLevelIndexes.forEach(function (item, index) {
        if (_this2.checkHiddenRows(item)) {
          _this2.toggleRow(item);
        }
      });
    },
    template: "\n      <template v-for=\"(row, rowNum) in thisLevelIndexes\">\n        <tr v-if=\"!isRowCollapsed(row) && !checkHiddenRows(row)\">\n          <td v-for=\"(cell, cellIndex) in options[row]\">\n            <template v-if=\"cellIndex===0\">\n              {{ ' ' }}\n            </template>\n            <template v-else>\n              {{ cell === '#NULL!' ? ' ' : cell }}\n            </template>\n          </td>\n        </tr>\n        <tr v-if=\"checkHiddenRows(row)\" @click=\"toggleRow(row)\">\n          <template v-for=\"(cell,cellIndex) in options[row]\">\n            <td>\n              <template v-if=\"cellIndex===0\">\n                <span>\n                <img :src=\"!isRowCollapsed(row) ?\n                '../local/js/local/reports/public/minus.svg'\n                :\n                '../local/js/local/reports/public/plus.svg'\"\n                     alt=\"&darr;\"\n                     style=\"width: 15px;\"\n                >\n                </span>\n              </template>\n              <template v-else>\n                {{ cell === '#NULL!' ? ' ' : cell }}\n              </template>\n            </td>\n          </template>\n        </tr>\n        <TableBody\n            v-if=\"checkHiddenRows(row) && !isRowCollapsed(row)\"\n            :options=\"checkHiddenRows(row)\"\n            :rowLevel=\"rowLevel+1\"\n        />\n      </template>\n    "
  };

  function ownKeys$5(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread$5(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$5(Object(t), !0).forEach(function (r) { babelHelpers.defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  var ReportTable = {
    // props: {
    //     sheetsData: {
    //         type: Object,
    //         required: true
    //     },
    //     sheetsNames: {
    //         type: Array,
    //         required: true,
    //     }
    // },
    computed: _objectSpread$5({}, ui_vue3_pinia.mapState(useReportsStore, ["currentTableBody", "currentFilename", "currentTableParams", "activeRepStructure", "reportType"])),
    methods: {
      downloadExcelFile: function downloadExcelFile() {
        return downloadReportFile(this.currentFilename);
      },
      goToViewExcelFile: function goToViewExcelFile() {
        return goToEdit(this.currentFilename);
      }
    },
    components: {
      Pagination: Pagination,
      TableBody: TableBody
    },
    mounted: function mounted() {
      var ears = new ui_ears.Ears({
        container: document.querySelector(".table__content"),
        smallSize: false,
        noScrollbar: true
      });
      ears.init();
    },
    template: "\n    <div class=\"table__MainContainer\">\n      <div class=\"table__Container\">\n        <div class=\"table__buttonsContainer\">\n          <button class=\"downloadButton ui-btn ui-btn-secondary\" @click=\"downloadExcelFile\">\u0421\u043A\u0430\u0447\u0430\u0442\u044C\n          </button>\n          <button class=\"downloadButton ui-btn ui-btn-secondary\" @click=\"goToViewExcelFile\">\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440\u0435\n          </button>\n        </div>\n        <div class=\"table__content\">\n<!--          <div class=\"table__params\">-->\n<!--            <template v-if=\"currentTableParams\">-->\n<!--              <h1>{{ activeRepStructure['name'] }}</h1>-->\n<!--              <div v-for=\"(value, key) in currentTableParams\" :key=\"key\">-->\n<!--                <h2>{{ activeRepStructure['filters'].find(item=>item.using === key)['view'] }}: </h2>-->\n<!--                <h3>-->\n<!--                  <span v-for=\"(item, index) in value\" :key=\"index\">{{ item.name }}, </span>-->\n<!--                </h3>-->\n<!--              </div>-->\n<!--            </template>-->\n<!--          </div>-->\n          <table>\n            <tbody>\n            <TableBody\n                :options=\"currentTableBody\"\n                :rowLevel=\"0\"\n            />\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  "
  };

  function ownKeys$6(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread$6(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$6(Object(t), !0).forEach(function (r) { babelHelpers.defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  var ReportsMain = {
    computed: _objectSpread$6({}, ui_vue3_pinia.mapState(useReportsStore, ["modalActive", "currentTableBody"])),
    data: function data() {
      return {
        loading: true
      };
    },
    components: {
      TemplatesList: TemplatesList,
      ModalForm: ModalForm,
      ReportTable: ReportTable
    },
    methods: {
      check: function check() {
        console.log(getUserDiskId());
      }
    },
    template: "\n      <div>\n<!--        <button @click=\"check\">AAAAAAAA</button>-->\n      </div>\n      <div class=\"reports__container\">\n        <TemplatesList/>\n        <template v-if=\"currentTableBody\">\n          <ReportTable/>\n        </template>\n        <template v-else>\n          <div class=\"noReport__container\">\n            <div class=\"noReport__Text\">\n              \u041D\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u044B\u0445 \u043E\u0442\u0447\u0451\u0442\u043E\u0432...\n            </div>\n          </div>\n        </template>\n        <ModalForm\n            v-if=\"modalActive\"\n        />\n      </div>\n    "
  };

  function _regeneratorRuntime$4() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime$4 = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == babelHelpers["typeof"](h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(babelHelpers["typeof"](e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
  function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
  function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
  function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
  function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
  var _application = /*#__PURE__*/new WeakMap();
  var _loadingContainer = /*#__PURE__*/new WeakMap();
  var Reports = /*#__PURE__*/function () {
    function Reports(rootNode) {
      babelHelpers.classCallCheck(this, Reports);
      _classPrivateFieldInitSpec(this, _application, void 0);
      _classPrivateFieldInitSpec(this, _loadingContainer, void 0);
      this.rootNode = document.querySelector(rootNode);
      this.pinia = ui_vue3_pinia.createPinia();
      this.attachTemplate().then(function (r) {
        return console.log('Ready');
      });
    }
    babelHelpers.createClass(Reports, [{
      key: "loadUserData",
      value: function () {
        var _loadUserData = babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$4().mark(function _callee() {
          var projectPath, templates, storageXml, storage_desk, route_list, settlementsStatement, grossProfit, client, debit, points_visit, sale_tp_client, sale_tp_nomenclature, reportsStore;
          return _regeneratorRuntime$4().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                // const start = new Date();
                _classPrivateFieldSet(_loadingContainer, this, document.createElement('div'));
                _classPrivateFieldGet(_loadingContainer, this).classList.add('loading-wheel');
                this.rootNode.appendChild(_classPrivateFieldGet(_loadingContainer, this));
                projectPath = '/local/js/local/reports';
                templates = {};
                _context.next = 7;
                return fetch(projectPath + '/src/data/storage.xml');
              case 7:
                storageXml = _context.sent;
                _context.next = 10;
                return storageXml.text();
              case 10:
                templates['storage'] = _context.sent;
                _context.next = 13;
                return fetch(projectPath + '/src/data/storage_desk.xml');
              case 13:
                storage_desk = _context.sent;
                _context.next = 16;
                return storage_desk.text();
              case 16:
                templates['storage_desk'] = _context.sent;
                _context.next = 19;
                return fetch(projectPath + '/src/data/route_list.xml');
              case 19:
                route_list = _context.sent;
                _context.next = 22;
                return route_list.text();
              case 22:
                templates['route_list'] = _context.sent;
                _context.next = 25;
                return fetch(projectPath + '/src/data/settlementsStatement.xml');
              case 25:
                settlementsStatement = _context.sent;
                _context.next = 28;
                return settlementsStatement.text();
              case 28:
                templates['settlementsStatement'] = _context.sent;
                _context.next = 31;
                return fetch(projectPath + '/src/data/grossProfit.xml');
              case 31:
                grossProfit = _context.sent;
                _context.next = 34;
                return grossProfit.text();
              case 34:
                templates['grossProfit'] = _context.sent;
                _context.next = 37;
                return fetch(projectPath + '/src/data/client.xml');
              case 37:
                client = _context.sent;
                _context.next = 40;
                return client.text();
              case 40:
                templates['client'] = _context.sent;
                _context.next = 43;
                return fetch(projectPath + '/src/data/debit.xml');
              case 43:
                debit = _context.sent;
                _context.next = 46;
                return debit.text();
              case 46:
                templates['debit'] = _context.sent;
                _context.next = 49;
                return fetch(projectPath + '/src/data/points_visit.xml');
              case 49:
                points_visit = _context.sent;
                _context.next = 52;
                return points_visit.text();
              case 52:
                templates['points_visit'] = _context.sent;
                _context.next = 55;
                return fetch(projectPath + '/src/data/sale_tp_client.xml');
              case 55:
                sale_tp_client = _context.sent;
                _context.next = 58;
                return sale_tp_client.text();
              case 58:
                templates['sale_tp_client'] = _context.sent;
                _context.next = 61;
                return fetch(projectPath + '/src/data/sale_tp_nomenclature.xml');
              case 61:
                sale_tp_nomenclature = _context.sent;
                _context.next = 64;
                return sale_tp_nomenclature.text();
              case 64:
                templates['sale_tp_nomenclature'] = _context.sent;
                reportsStore = useReportsStore(this.pinia);
                reportsStore.setTemplates(templates);
                this.rootNode.removeChild(_classPrivateFieldGet(_loadingContainer, this));
                _classPrivateFieldSet(_loadingContainer, this, null);
              case 69:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function loadUserData() {
          return _loadUserData.apply(this, arguments);
        }
        return loadUserData;
      }()
    }, {
      key: "attachTemplate",
      value: function () {
        var _attachTemplate = babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$4().mark(function _callee2() {
          var context;
          return _regeneratorRuntime$4().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                context = this;
                _context2.next = 3;
                return this.loadUserData();
              case 3:
                _classPrivateFieldSet(_application, this, ui_vue3.BitrixVue.createApp({
                  name: 'Reports',
                  components: {
                    ReportsMain: ReportsMain
                  },
                  beforeCreate: function beforeCreate() {
                    this.$bitrix.Application.set(context);
                  },
                  template: '<ReportsMain/>'
                }));
                _classPrivateFieldGet(_application, this).use(this.pinia);
                _classPrivateFieldGet(_application, this).mount(this.rootNode);
              case 6:
              case "end":
                return _context2.stop();
            }
          }, _callee2, this);
        }));
        function attachTemplate() {
          return _attachTemplate.apply(this, arguments);
        }
        return attachTemplate;
      }()
    }, {
      key: "detachTemplate",
      value: function detachTemplate() {
        if (_classPrivateFieldGet(_application, this)) {
          _classPrivateFieldGet(_application, this).unmount();
        }
      }
    }]);
    return Reports;
  }();

  exports.Reports = Reports;

}((this.BX = this.BX || {}),BX,BX.Vue3,BX.UI,BX.Vue3.Pinia));
//# sourceMappingURL=reports.bundle.js.map
