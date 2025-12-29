const e = t;
function t(e, t) {
  e -= 137;
  return n()[e];
}
function n() {
  const e = [
    "notifications",
    "payload",
    "action",
    "log",
    "onClicked",
    "sendMessage",
    "99FuOzbb",
    "replace",
    "2175910KmArxy",
    "lastError",
    "function",
    "windowId",
    "substring",
    "clickedText",
    "devicePixelRatio",
    "2957804zJhtYL",
    "message",
    "tab",
    "onInstalled",
    "3734790tJahsK",
    "drawImage",
    "sidePanel",
    "empty",
    "catch",
    "open",
    "captureVisibleTab",
    "setPopup",
    "7296328tFkmgd",
    "download",
    "6913228ARHdHk",
    "18lhZvyk",
    "tabs",
    "2AYXuYh",
    "18ujsDnQ",
    "getBadgeText",
    "onMessage",
    "icons/icon48.png",
    "trim",
    "auto_capture_",
    "result",
    '请右键点击扩展图标，选择"固定"以将其添加到工具栏，方便快速使用！',
    "490766gjpVsl",
    "width",
    "element",
    "reason",
    "untitled",
    "install",
    "1837720zgGUtB",
    "domain",
    "captureComplete",
    "height",
    "runtime",
    "error",
    "convertToBlob",
    "Screenshot skipped: Page cannot be captured (restricted page or tab switched too fast)",
    "addListener",
    "getContext",
    "Auto Capture 已安装",
    "downloads",
    "readAsDataURL",
    "Capture processing failed:",
    "png",
  ];
  return (n = function () {
    return e;
  })();
}
(function () {
  const e = t,
    a = n();
  for (;;)
    try {
      if (
        959754 ===
        (-parseInt(e(183)) / 1) * (parseInt(e(192)) / 2) +
          -parseInt(e(170)) / 3 +
          parseInt(e(166)) / 4 +
          (-parseInt(e(198)) / 5) * (-parseInt(e(184)) / 6) +
          parseInt(e(180)) / 7 +
          (-parseInt(e(178)) / 8) * (-parseInt(e(181)) / 9) +
          (parseInt(e(159)) / 10) * (-parseInt(e(157)) / 11)
      )
        break;
      a.push(a.shift());
    } catch (o) {
      a.push(a.shift());
    }
})(),
  chrome[e(140)][e(169)].addListener((t) => {
    const n = e;
    t[n(195)] === n(197) &&
      chrome[n(153)][n(185)]({}, (e) => {
        const t = n;
        chrome[t(151)].create({
          type: "basic",
          iconUrl: t(187),
          title: t(146),
          message: t(191),
        });
      });
  }),
  chrome[e(153)][e(155)][e(144)]((t) => {
    const n = e;
    chrome[n(172)] && typeof chrome.sidePanel[n(175)] === n(161)
      ? chrome[n(172)][n(175)]({ windowId: t[n(162)] })[n(174)]((e) => {
          const t = n;
          chrome[t(153)][t(177)]({ popup: "index.html" });
        })
      : chrome[n(153)].setPopup({ popup: "index.html" });
  }),
  chrome[e(140)][e(186)][e(144)]((n, a, o) => {
    var s, r;
    const c = e;
    if ("capture" === n[c(153)]) {
      const o = (null == (s = a[c(168)]) ? void 0 : s[c(162)]) ?? null,
        i = (null == (r = a[c(168)]) ? void 0 : r.id) ?? null,
        p = n.needCallback || !1;
      !(async function (n, a, o, s) {
        const r = e;
        try {
          const i = await chrome.tabs[r(176)](a, { format: r(150) }),
            p = await (async function (t, n) {
              const a = e,
                o = await fetch(t),
                s = await o.blob(),
                r = await createImageBitmap(s);
              n[a(165)];
              const c = n.viewportWidth,
                i = n.viewportHeight,
                p = r.width / c,
                l = r.height / i,
                d = n.x * p,
                u = n.y * l,
                h = 0.6 * r[a(193)],
                m = 0.6 * r.height;
              let g = d - h / 2,
                w = u - m / 2;
              g < 0 && (g = 0);
              w < 0 && (w = 0);
              g + h > r[a(193)] && (g = r[a(193)] - h);
              w + m > r[a(139)] && (w = r[a(139)] - m);
              const f = new OffscreenCanvas(h, m);
              return (
                f[a(145)]("2d")[a(171)](r, g, w, h, m, 0, 0, h, m),
                await f[a(142)]({ type: "image/png" })
              );
            })(i, n),
            l = await ((c = p),
            new Promise((e, n) => {
              const a = t,
                o = new FileReader();
              (o.onload = () => e(o[a(190)])), (o.onerror = n), o[a(148)](c);
            })),
            d = (n[r(137)] || "unknown_domain")
              [r(158)](/[\\/:*?"<>|]/g, "_")
              [r(188)](),
            u = r(189) + d,
            h = (n.title || r(196))
              [r(158)](/[\\/:*?"<>|]/g, "_")
              [r(188)]()
              [r(163)](0, 50);
          let m = (n[r(164)] || r(194))[r(158)](/[\\/:*?"<>|]/g, "_");
          (m = m.replace(/\s+/g, " ")[r(188)]()[r(163)](0, 50)),
            m || (m = r(173));
          const g = u + "/auto_capture_" + h + "_" + m + ".png";
          chrome[r(147)][r(179)]({ url: l, filename: g, saveAs: !1 }, (e) => {
            const t = r;
            chrome[t(140)][t(160)],
              s &&
                o &&
                chrome[t(182)]
                  .sendMessage(o, { action: t(138) })
                  [t(174)](() => {});
          });
        } catch (i) {
          i.message && i[r(167)].includes("Cannot access contents"),
            s &&
              o &&
              chrome.tabs[r(156)](o, { action: "captureComplete" })[r(174)](
                () => {}
              );
        }
        var c;
      })(n[c(152)], o, i, p);
    }
  });
