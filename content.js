const t = o;
!(function () {
  const t = o,
    e = r();
  for (;;)
    try {
      if (
        501135 ===
        parseInt(t(470)) / 1 +
          (-parseInt(t(460)) / 2) * (-parseInt(t(490)) / 3) +
          (parseInt(t(467)) / 4) * (-parseInt(t(447)) / 5) +
          -parseInt(t(476)) / 6 +
          (parseInt(t(452)) / 7) * (parseInt(t(499)) / 8) +
          (parseInt(t(458)) / 9) * (-parseInt(t(457)) / 10) +
          parseInt(t(504)) / 11
      )
        break;
      e.push(e.shift());
    } catch (n) {
      e.push(e.shift());
    }
})();
let e = !1,
  n = null;
function o(t, e) {
  t -= 433;
  return r()[t];
}
function r() {
  const t = [
    "2815ErrQdm",
    "click",
    "fixed",
    "title",
    "height",
    "69083hugfQb",
    "open",
    "runtime",
    "addEventListener",
    "createElement",
    "986770fnqOwN",
    "63BNFAip",
    "toLowerCase",
    "56QwKyFK",
    "status",
    "left",
    "ctrlKey",
    "width",
    "capture",
    "window.open",
    "1316iGsvRC",
    "hostname",
    "location",
    "118754CRBRvN",
    "style",
    "getAttribute",
    "trim",
    "captureComplete",
    "innerHeight",
    "3716058fDXYbu",
    "innerText",
    "rgba(255, 0, 0, 0.5)",
    "shiftKey",
    "tagName",
    "storage",
    "get",
    "target",
    "zIndex",
    "position",
    "backgroundColor",
    "isCapturing",
    "action",
    "metaKey",
    "57009ZmMqtF",
    "40px",
    "closest",
    "_blank",
    "preventDefault",
    "0 0 5px rgba(0,0,0,0.3)",
    "mousedown",
    "appendChild",
    "textContent",
    "168GRccDq",
    "local",
    "top",
    "documentElement",
    "borderRadius",
    "12521927ZwUsGr",
    "onChanged",
    "includes",
    "href",
    "substring",
    "clientY",
    "undefined",
    "removeEventListener",
    "devicePixelRatio",
    "pointerEvents",
    "50%",
    "innerWidth",
    "none",
    "removeChild",
    "addListener",
    "parentNode",
  ];
  return (r = function () {
    return t;
  })();
}
typeof chrome !== t(437) &&
  chrome[t(481)] &&
  (chrome[t(481)][t(500)][t(482)]([t(487)], (t) => {
    e = !!t.isCapturing;
  }),
  chrome[t(481)][t(505)][t(445)]((n, o) => {
    const r = t;
    "local" === o && n.isCapturing && (e = n[r(487)].newValue);
  }),
  chrome.runtime.onMessage[t(445)]((o, r, i) => {
    const a = t;
    "toggleCapture" === o[a(488)] && (e = o[a(461)]),
      o[a(488)] === a(474) && n && (window[a(453)](n, a(493)), (n = null));
  })),
  document[t(455)](
    t(496),
    (r) => {
      const i = t;
      if (!e) return;
      const a = r.clientX,
        s = r[i(436)],
        c = document[i(450)],
        u = window[i(469)][i(468)];
      let l = "";
      r[i(483)] &&
        ((l = r.target[i(477)] || r.target[i(498)] || ""),
        (l = l[i(473)]()),
        !l &&
          (l = r.target[i(472)]("aria-label") || r[i(483)][i(480)][i(459)]()),
        (l = l[i(435)](0, 30)));
      const d = (function (e, n) {
          const o = t;
          if (e[o(463)] || e[o(489)] || e[o(479)]) {
            const t = n[o(492)]("a");
            if (t && t.href) return !0;
          }
          const r = n[o(492)]("a");
          return (
            !(!r || r[o(483)] !== o(493) || !r[o(434)]) ||
            !!(n[o(472)]("onclick") || "")[o(433)](o(466))
          );
        })(r, r.target),
        p = d
          ? (function (e, n) {
              const o = t,
                r = n[o(492)]("a");
              return r && r[o(434)] ? r[o(434)] : null;
            })(0, r.target)
          : null;
      if (d && p) {
        n = p;
        const t = (e) => {
          const n = i;
          e[n(494)](), e.stopPropagation(), document[n(438)](n(448), t, !0);
        };
        document[i(455)]("click", t, !0);
      }
      (function (e, n) {
        const o = t,
          r = document[o(456)]("div");
        (r[o(471)][o(485)] = o(449)),
          (r.style[o(462)] = e - 20 + "px"),
          (r[o(471)][o(501)] = n - 20 + "px"),
          (r[o(471)][o(464)] = o(491)),
          (r[o(471)][o(451)] = o(491)),
          (r.style[o(503)] = o(441)),
          (r[o(471)][o(486)] = o(478)),
          (r[o(471)][o(440)] = o(443)),
          (r[o(471)][o(484)] = "2147483647"),
          (r[o(471)].boxShadow = o(495)),
          document[o(502)][o(497)](r),
          setTimeout(() => {
            const t = o;
            r && r[t(446)] && r[t(446)][t(444)](r);
          }, 1e3);
      })(a, s),
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const t = o;
            chrome[t(454)].sendMessage({
              action: t(465),
              payload: {
                x: a,
                y: s,
                viewportWidth: window[t(442)],
                viewportHeight: window[t(475)],
                devicePixelRatio: window[t(439)],
                title: c,
                domain: u,
                clickedText: l,
              },
              needCallback: !!n,
            });
          });
        });
    },
    !0
  );
