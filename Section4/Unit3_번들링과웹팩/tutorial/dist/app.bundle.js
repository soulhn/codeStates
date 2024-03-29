(() => {
  var e = {
      426: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => s });
        var r = n(81),
          o = n.n(r),
          a = n(645),
          i = n.n(a)()(o());
        i.push([
          e.id,
          "/* dist/style.css */\n* {\n  box-sizing: border-box;\n  border: 0;\n  padding: 0;\n  margin: 0;\n}\n\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\ndiv.shout {\n  padding: 12px;\n  margin: 4px;\n  border-radius: 8px;\n  border: 0.5px solid gray;\n}\n",
          "",
        ]);
        const s = i;
      },
      645: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, o, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (i[c] = !0);
                }
              for (var u = 0; u < e.length; u++) {
                var d = [].concat(e[u]);
                (r && i[d[0]]) ||
                  (void 0 !== a && (void 0 === d[5] || (d[1] = "@layer".concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {").concat(d[1], "}")), (d[5] = a)),
                  n && (d[2] ? ((d[1] = "@media ".concat(d[2], " {").concat(d[1], "}")), (d[2] = n)) : (d[2] = n)),
                  o && (d[4] ? ((d[1] = "@supports (".concat(d[4], ") {").concat(d[1], "}")), (d[4] = o)) : (d[4] = "".concat(o))),
                  t.push(d));
              }
            }),
            t
          );
        };
      },
      81: (e) => {
        "use strict";
        e.exports = function (e) {
          return e[1];
        };
      },
      654: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { default: () => h });
        var r = n(379),
          o = n.n(r),
          a = n(795),
          i = n.n(a),
          s = n(569),
          c = n.n(s),
          u = n(565),
          d = n.n(u),
          l = n(216),
          p = n.n(l),
          f = n(589),
          v = n.n(f),
          m = n(426),
          y = {};
        (y.styleTagTransform = v()), (y.setAttributes = d()), (y.insert = c().bind(null, "head")), (y.domAPI = i()), (y.insertStyleElement = p()), o()(m.Z, y);
        const h = m.Z && m.Z.locals ? m.Z.locals : void 0;
      },
      379: (e) => {
        "use strict";
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var a = {}, i = [], s = 0; s < e.length; s++) {
            var c = e[s],
              u = r.base ? c[0] + r.base : c[0],
              d = a[u] || 0,
              l = "".concat(u, " ").concat(d);
            a[u] = d + 1;
            var p = n(l),
              f = { css: c[1], media: c[2], sourceMap: c[3], supports: c[4], layer: c[5] };
            if (-1 !== p) t[p].references++, t[p].updater(f);
            else {
              var v = o(f, r);
              (r.byIndex = s), t.splice(s, 0, { identifier: l, updater: v, references: 1 });
            }
            i.push(l);
          }
          return i;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < a.length; i++) {
              var s = n(a[i]);
              t[s].references--;
            }
            for (var c = r(e, o), u = 0; u < a.length; u++) {
              var d = n(a[u]);
              0 === t[d].references && (t[d].updater(), t.splice(d, 1));
            }
            a = c;
          };
        };
      },
      569: (e) => {
        "use strict";
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          r.appendChild(n);
        };
      },
      216: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        "use strict";
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        "use strict";
        e.exports = function (e) {
          if ("undefined" == typeof document) return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")), n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o && (r += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")), (r += n.css), o && (r += "}"), n.media && (r += "}"), n.supports && (r += "}");
                var a = n.sourceMap;
                a && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        "use strict";
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      942: (e) => {
        const t = {
          once(e) {
            let t,
              n = !1;
            return function (...r) {
              return n || ((n = !0), (t = e(...r))), t;
            };
          },
        };
        e.exports = t;
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { id: r, exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.nc = void 0),
    (() => {
      const e = n(942);
      n(654);
      const t = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas feugiat elit, ac tincidunt neque vestibulum at. Mauris a eros sit amet urna efficitur tempus.",
        r = e.once((...e) => console.log(...e)),
        o = e.once((...e) => {
          document.querySelector("#app").append(
            ...e.map((e) => {
              const t = document.createElement("div");
              return (t.className = "shout"), (t.textContent = e), t;
            })
          );
        });
      r(t), r(t), r(t), r(t), o(t), o(t), o(t), o(t);
    })();
})();
