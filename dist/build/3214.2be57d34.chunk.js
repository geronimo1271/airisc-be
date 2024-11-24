"use strict";
(self["webpackChunklive_and_work_be"] = self["webpackChunklive_and_work_be"] || []).push([[3214],{

/***/ 8066:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = __webpack_require__(85893);
const Flex = __webpack_require__(90291);

const ActionLayout = ({ startActions, endActions }) => {
    if (!startActions && !endActions) {
        return null;
    }
    return (jsxRuntime.jsxs(Flex.Flex, { justifyContent: "space-between", alignItems: "flex-start", paddingBottom: 4, paddingLeft: 10, paddingRight: 10, children: [jsxRuntime.jsx(Flex.Flex, { gap: 2, wrap: "wrap", children: startActions }), jsxRuntime.jsx(Flex.Flex, { gap: 2, shrink: 0, wrap: "wrap", children: endActions })] }));
};

exports.ActionLayout = ActionLayout;


/***/ }),

/***/ 69786:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = __webpack_require__(85893);
const Box = __webpack_require__(60665);

const ContentLayout = ({ children }) => {
    return (jsxRuntime.jsx(Box.Box, { paddingLeft: 10, paddingRight: 10, children: children }));
};

exports.ContentLayout = ContentLayout;


/***/ }),

/***/ 12283:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const styled = __webpack_require__(46449);

const _interopDefault = e => e && e.__esModule ? e : { default: e };

const styled__default = /*#__PURE__*/_interopDefault(styled);

const GridLayout = styled__default.default.div `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({ theme }) => theme.spaces[4]};
`;

exports.GridLayout = GridLayout;


/***/ }),

/***/ 11756:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = __webpack_require__(85893);
const React = __webpack_require__(67294);
const styled = __webpack_require__(46449);
const useElementOnScreen = __webpack_require__(90082);
const useResizeObserver = __webpack_require__(30860);
const Box = __webpack_require__(60665);
const Flex = __webpack_require__(90291);
const Typography = __webpack_require__(4583);

const _interopDefault = e => e && e.__esModule ? e : { default: e };

const React__default = /*#__PURE__*/_interopDefault(React);
const styled__default = /*#__PURE__*/_interopDefault(styled);

const HeaderLayout = (props) => {
    const baseHeaderLayoutRef = React.useRef(null);
    const [headerSize, setHeaderSize] = React.useState(null);
    const [containerRef, isVisible] = useElementOnScreen.useElementOnScreen({
        root: null,
        rootMargin: '0px',
        threshold: 0,
    });
    useResizeObserver.useResizeObserver(containerRef, () => {
        if (containerRef.current) {
            setHeaderSize(containerRef.current.getBoundingClientRect());
        }
    });
    React.useEffect(() => {
        if (baseHeaderLayoutRef.current) {
            setHeaderSize(baseHeaderLayoutRef.current.getBoundingClientRect());
        }
    }, [baseHeaderLayoutRef]);
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", { style: { height: headerSize?.height }, ref: containerRef, children: isVisible && jsxRuntime.jsx(BaseHeaderLayout, { ref: baseHeaderLayoutRef, ...props }) }), !isVisible && jsxRuntime.jsx(BaseHeaderLayout, { ...props, sticky: true, width: headerSize?.width })] }));
};
HeaderLayout.displayName = 'HeaderLayout';
const StickyBox = styled__default.default(Box.Box) `
  width: ${({ width }) => (width ? `${width / 16}rem` : undefined)};
  z-index: ${({ theme }) => theme.zIndices[1]};
`;
const BaseHeaderLayout = React__default.default.forwardRef(({ navigationAction, primaryAction, secondaryAction, subtitle, title, sticky, width, ...props }, ref) => {
    const isSubtitleString = typeof subtitle === 'string';
    if (sticky) {
        return (jsxRuntime.jsx(StickyBox, { paddingLeft: 6, paddingRight: 6, paddingTop: 3, paddingBottom: 3, position: "fixed", top: 0, right: 0, background: "neutral0", shadow: "tableShadow", width: width, "data-strapi-header-sticky": true, children: jsxRuntime.jsxs(Flex.Flex, { justifyContent: "space-between", children: [jsxRuntime.jsxs(Flex.Flex, { children: [navigationAction && jsxRuntime.jsx(Box.Box, { paddingRight: 3, children: navigationAction }), jsxRuntime.jsxs(Box.Box, { children: [jsxRuntime.jsx(Typography.Typography, { variant: "beta", as: "h1", ...props, children: title }), isSubtitleString ? (jsxRuntime.jsx(Typography.Typography, { variant: "pi", textColor: "neutral600", children: subtitle })) : (subtitle)] }), secondaryAction ? jsxRuntime.jsx(Box.Box, { paddingLeft: 4, children: secondaryAction }) : null] }), jsxRuntime.jsx(Flex.Flex, { children: primaryAction ? jsxRuntime.jsx(Box.Box, { paddingLeft: 2, children: primaryAction }) : undefined })] }) }));
    }
    return (jsxRuntime.jsxs(Box.Box, { ref: ref, paddingLeft: 10, paddingRight: 10, paddingBottom: 8, paddingTop: navigationAction ? 6 : 8, background: "neutral100", "data-strapi-header": true, children: [navigationAction ? jsxRuntime.jsx(Box.Box, { paddingBottom: 2, children: navigationAction }) : null, jsxRuntime.jsxs(Flex.Flex, { justifyContent: "space-between", children: [jsxRuntime.jsxs(Flex.Flex, { minWidth: 0, children: [jsxRuntime.jsx(Typography.Typography, { as: "h1", variant: "alpha", ...props, children: title }), secondaryAction ? jsxRuntime.jsx(Box.Box, { paddingLeft: 4, children: secondaryAction }) : null] }), primaryAction] }), isSubtitleString ? (jsxRuntime.jsx(Typography.Typography, { variant: "epsilon", textColor: "neutral600", as: "p", children: subtitle })) : (subtitle)] }));
});

exports.BaseHeaderLayout = BaseHeaderLayout;
exports.HeaderLayout = HeaderLayout;


/***/ }),

/***/ 68:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = __webpack_require__(85893);
const styled = __webpack_require__(46449);
const Box = __webpack_require__(60665);

const _interopDefault = e => e && e.__esModule ? e : { default: e };

const styled__default = /*#__PURE__*/_interopDefault(styled);

const GridContainer = styled__default.default(Box.Box) `
  display: grid;
  grid-template-columns: ${({ hasSideNav }) => (hasSideNav ? `auto 1fr` : '1fr')};
`;
const OverflowingItem = styled__default.default(Box.Box) `
  overflow-x: hidden;
`;
const Layout = ({ sideNav, children }) => {
    return (jsxRuntime.jsxs(GridContainer, { hasSideNav: Boolean(sideNav), children: [sideNav, jsxRuntime.jsx(OverflowingItem, { paddingBottom: 10, children: children })] }));
};

exports.Layout = Layout;


/***/ }),

/***/ 93070:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = __webpack_require__(85893);
const Grid = __webpack_require__(35063);
const GridItem = __webpack_require__(91259);
const Box = __webpack_require__(60665);

const TwoColsLayout = ({ startCol, endCol }) => {
    return (jsxRuntime.jsxs(Grid.Grid, { gap: 4, children: [jsxRuntime.jsx(GridItem.GridItem, { col: 9, s: 12, children: jsxRuntime.jsx(Box.Box, { hasRadius: true, background: "neutral0", shadow: "tableShadow", children: startCol }) }), jsxRuntime.jsx(GridItem.GridItem, { col: 3, s: 12, children: jsxRuntime.jsx(Box.Box, { hasRadius: true, background: "neutral0", shadow: "tableShadow", children: endCol }) })] }));
};

exports.TwoColsLayout = TwoColsLayout;


/***/ }),

/***/ 58136:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const Layout = __webpack_require__(68);
const ActionLayout = __webpack_require__(8066);
const ContentLayout = __webpack_require__(69786);
const HeaderLayout = __webpack_require__(11756);
const TwoColsLayout = __webpack_require__(93070);
const GridLayout = __webpack_require__(12283);



exports.Layout = Layout.Layout;
exports.ActionLayout = ActionLayout.ActionLayout;
exports.ContentLayout = ContentLayout.ContentLayout;
exports.BaseHeaderLayout = HeaderLayout.BaseHeaderLayout;
exports.HeaderLayout = HeaderLayout.HeaderLayout;
exports.TwoColsLayout = TwoColsLayout.TwoColsLayout;
exports.GridLayout = GridLayout.GridLayout;


/***/ }),

/***/ 90082:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const React = __webpack_require__(67294);

const useElementOnScreen = (options) => {
    const containerRef = React.useRef(null);
    const [isVisible, setIsVisible] = React.useState(true);
    const callback = ([entry]) => {
        setIsVisible(entry.isIntersecting);
    };
    React.useEffect(() => {
        const containerEl = containerRef.current;
        const observer = new IntersectionObserver(callback, options);
        if (containerEl) {
            observer.observe(containerRef.current);
        }
        return () => {
            if (containerEl) {
                observer.disconnect();
            }
        };
    }, [containerRef, options]);
    return [containerRef, isVisible];
};

exports.useElementOnScreen = useElementOnScreen;


/***/ }),

/***/ 30860:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const React = __webpack_require__(67294);
const uiPrimitives = __webpack_require__(61299);

const useResizeObserver = (sources, onResize) => {
    const handleResize = uiPrimitives.useCallbackRef(onResize);
    React.useLayoutEffect(() => {
        const resizeObs = new ResizeObserver(handleResize);
        if (Array.isArray(sources)) {
            sources.forEach((source) => {
                if (source.current) {
                    resizeObs.observe(source.current);
                }
            });
        }
        else if (sources.current) {
            resizeObs.observe(sources.current);
        }
        return () => {
            resizeObs.disconnect();
        };
    }, [sources, handleResize]);
};

exports.useResizeObserver = useResizeObserver;


/***/ }),

/***/ 47089:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const e=__webpack_require__(85893),t=s=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...s,children:e.jsx("path",{fill:"#212134",d:"M6.17 18a3 3 0 0 1 5.66 0H22v2H11.83a3 3 0 0 1-5.66 0H2v-2h4.17Zm6-7a3 3 0 0 1 5.66 0H22v2h-4.17a3 3 0 0 1-5.66 0H2v-2h10.17Zm-6-7a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3 3 0 0 1-5.66 0H2V4h4.17Z"})}),i=t;module.exports=i;


/***/ }),

/***/ 75098:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const t=__webpack_require__(85893),e=s=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...s,children:[t.jsx("path",{fill:"#4945FF",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),t.jsx("path",{fill:"#fff",d:"M15.733 8c.343 0 .678.108.963.31.285.202.507.49.639.826.13.337.165.707.098 1.064a1.879 1.879 0 0 1-.474.942 1.705 1.705 0 0 1-.887.504 1.64 1.64 0 0 1-1.002-.105 1.76 1.76 0 0 1-.778-.678A1.924 1.924 0 0 1 14 9.841a1.9 1.9 0 0 1 .508-1.302c.325-.345.766-.539 1.225-.539ZM20 24h-8v-2.265h2.933v-6.23H12.8v-2.266h4.267v8.495H20V24Z"})]}),a=e;module.exports=a;


/***/ }),

/***/ 13214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_App)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(89548);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 20 modules
var dist = __webpack_require__(54017);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-seo/admin/src/pluginId.js
var pluginId = __webpack_require__(53603);
var pluginId_default = /*#__PURE__*/__webpack_require__.n(pluginId);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/index.js
var Box = __webpack_require__(93289);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-seo/admin/src/utils/index.js + 1 modules
var utils = __webpack_require__(29759);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-seo/admin/src/utils/api.js


const fetchSeoComponent = async () => {
  try {
    const data = await (0,dist/* request */.WY)(`/${(pluginId_default())}/component`, { method: "GET" });
    return data;
  } catch (error) {
    return null;
  }
};
const fetchContentTypes = async () => {
  try {
    const data = await (0,dist/* request */.WY)(`/${(pluginId_default())}/content-types`, { method: "GET" });
    return data;
  } catch (error) {
    return null;
  }
};
const createSeoComponent = async () => {
  try {
    const data = await (0,dist/* request */.WY)(
      `/${(pluginId_default())}/component`,
      {
        method: "POST"
      },
      true
    );
    return data.json();
  } catch (error) {
    return null;
  }
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/index.js
var Flex = __webpack_require__(86931);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/LinkButton/LinkButton.mjs
var LinkButton_LinkButton = __webpack_require__(94101);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/index.js
var Typography = __webpack_require__(84704);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/EmptyStateLayout/index.js
var EmptyStateLayout = __webpack_require__(66342);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/index.js
var Table = __webpack_require__(14772);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.js
var Plus = __webpack_require__(46003);
var Plus_default = /*#__PURE__*/__webpack_require__.n(Plus);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-seo/admin/src/components/HomePage/Main/EmptyComponentLayout/illo.js
var illo = __webpack_require__(27589);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box_Box = __webpack_require__(16607);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.mjs
var Stack = __webpack_require__(20232);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Switch/index.js
var Switch = __webpack_require__(37307);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/index.js
var Button = __webpack_require__(35163);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/GridLayout.mjs
var GridLayout = __webpack_require__(91839);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.mjs
var ModalLayout = __webpack_require__(74622);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalHeader.mjs
var ModalHeader = __webpack_require__(36854);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalBody.mjs
var ModalBody = __webpack_require__(71543);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalFooter.mjs
var ModalFooter = __webpack_require__(37022);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Equalizer.js
var Equalizer = __webpack_require__(47089);
var Equalizer_default = /*#__PURE__*/__webpack_require__.n(Equalizer);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/InformationSquare.js
var InformationSquare = __webpack_require__(75098);
var InformationSquare_default = /*#__PURE__*/__webpack_require__.n(InformationSquare);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-seo/admin/src/components/HomePage/Main/SettingsModal/index.js













const settingsAPI = (__webpack_require__(97585)/* ["default"] */ .Z);
const SettingsModal = ({ item }) => {
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const [metaTitle, setMetaTitle] = (0,react.useState)(true);
  const [metaDescription, setMetaDescription] = (0,react.useState)(true);
  const [metaRobots, setMetaRobots] = (0,react.useState)(true);
  const [metaSocial, setMetaSocial] = (0,react.useState)(true);
  const [wordCount, setWordCount] = (0,react.useState)(true);
  const [canonicalUrl, setCanonicalUrl] = (0,react.useState)(true);
  const [keywordDensity, setKeywordDensity] = (0,react.useState)(true);
  const [structuredData, setStructuredData] = (0,react.useState)(true);
  const [alternativeText, setAlternativeText] = (0,react.useState)(true);
  const [lastUpdatedAt, setLastUpdatedAt] = (0,react.useState)(true);
  const [defaultSettings, setDefaultSettings] = (0,react.useState)(null);
  const [isVisible, setIsVisible] = (0,react.useState)(false);
  const { formatMessage } = (0,useIntl/* default */.Z)();
  (0,react.useEffect)(() => {
    const fetchDefaultSettings = async () => {
      const tmpSettings = await settingsAPI.get();
      setDefaultSettings(tmpSettings);
    };
    fetchDefaultSettings();
  }, []);
  const handleOpeningModal = (prev) => {
    const matchingContentType = defaultSettings[item?.uid];
    setMetaTitle(matchingContentType?.seoChecks?.metaTitle);
    setMetaDescription(matchingContentType?.seoChecks?.metaDescription);
    setMetaRobots(matchingContentType?.seoChecks?.metaRobots);
    setMetaSocial(matchingContentType?.seoChecks?.metaSocial);
    setWordCount(matchingContentType?.seoChecks?.wordCount);
    setCanonicalUrl(matchingContentType?.seoChecks?.canonicalUrl);
    setKeywordDensity(matchingContentType?.seoChecks?.keywordDensity);
    setStructuredData(matchingContentType?.seoChecks?.structuredData);
    setAlternativeText(matchingContentType?.seoChecks?.alternativeText);
    setLastUpdatedAt(matchingContentType?.seoChecks?.lastUpdatedAt);
    setIsVisible((prev2) => !prev2);
  };
  const handleSavingSettingsModal = (prev) => {
    const newSettings = {
      ...defaultSettings,
      [item?.uid]: {
        collectionName: defaultSettings[item?.uid]?.collectionName,
        seoChecks: {
          metaTitle,
          metaDescription,
          metaRobots,
          metaSocial,
          wordCount,
          canonicalUrl,
          keywordDensity,
          structuredData,
          alternativeText,
          lastUpdatedAt
        }
      }
    };
    settingsAPI.set(newSettings).then(async () => {
      setDefaultSettings(newSettings);
      setIsVisible((prev2) => !prev2);
    });
    toggleNotification({
      type: "success",
      message: {
        id: "notification.success.settings",
        defaultMessage: `Settings saved for ${defaultSettings[item?.uid]?.collectionName} content-type.`
      }
    });
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    Button.Button,
    {
      variant: "tertiary",
      startIcon: /* @__PURE__ */ react.createElement((Equalizer_default()), null),
      onClick: (prev) => handleOpeningModal(prev)
    },
    formatMessage({
      id: (0,utils/* getTrad */.O)("SEOPage.info.config"),
      defaultMessage: "Settings"
    })
  ), isVisible && /* @__PURE__ */ react.createElement(
    ModalLayout/* ModalLayout */.P,
    {
      onClose: () => setIsVisible((prev) => !prev),
      labelledBy: "title"
    },
    /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.x, null, /* @__PURE__ */ react.createElement(
      Typography.Typography,
      {
        fontWeight: "bold",
        textColor: "neutral800",
        as: "h2",
        id: "title"
      },
      formatMessage({
        id: (0,utils/* getTrad */.O)("SEOPage.info.settings"),
        defaultMessage: "Settings"
      })
    )),
    /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.f, null, /* @__PURE__ */ react.createElement(Box_Box/* Box */.x, { paddingBottom: 8, paddingTop: 4 }, /* @__PURE__ */ react.createElement(
      dist/* ContentBox */.Y_,
      {
        title: formatMessage({
          id: "Information",
          defaultMessage: "Information"
        }),
        subtitle: formatMessage({
          id: (0,utils/* getTrad */.O)("HomePage.info.settings.information"),
          defaultMessage: "Disable SEO checks for this specific content-type."
        }),
        icon: /* @__PURE__ */ react.createElement((InformationSquare_default()), null),
        iconBackground: "primary100"
      }
    )), /* @__PURE__ */ react.createElement(GridLayout/* GridLayout */.M, null, /* @__PURE__ */ react.createElement(
      Box_Box/* Box */.x,
      {
        padding: 4,
        hasRadius: true,
        background: "neutral0",
        shadow: "tableShadow"
      },
      /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 4, padding: 3 }, /* @__PURE__ */ react.createElement(
        Switch.Switch,
        {
          label: "Switch",
          selected: metaTitle,
          onChange: () => setMetaTitle((s) => !s)
        }
      ), /* @__PURE__ */ react.createElement(Typography.Typography, { variant: "delta" }, formatMessage({
        id: (0,utils/* getTrad */.O)("SEOPage.info.settings.meta-title-check"),
        defaultMessage: "Meta Title"
      })))
    ), /* @__PURE__ */ react.createElement(
      Box_Box/* Box */.x,
      {
        padding: 4,
        hasRadius: true,
        background: "neutral0",
        shadow: "tableShadow"
      },
      /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 4, padding: 3 }, /* @__PURE__ */ react.createElement(
        Switch.Switch,
        {
          label: "Switch",
          selected: metaDescription,
          onChange: () => setMetaDescription((s) => !s)
        }
      ), /* @__PURE__ */ react.createElement(Typography.Typography, { variant: "delta" }, formatMessage({
        id: (0,utils/* getTrad */.O)(
          "SEOPage.info.settings.meta-description-check"
        ),
        defaultMessage: "Meta Description"
      })))
    ), /* @__PURE__ */ react.createElement(
      Box_Box/* Box */.x,
      {
        padding: 4,
        hasRadius: true,
        background: "neutral0",
        shadow: "tableShadow"
      },
      /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 4, padding: 3 }, /* @__PURE__ */ react.createElement(
        Switch.Switch,
        {
          label: "Switch",
          selected: metaRobots,
          onChange: () => setMetaRobots((s) => !s)
        }
      ), /* @__PURE__ */ react.createElement(Typography.Typography, { variant: "delta" }, formatMessage({
        id: (0,utils/* getTrad */.O)("SEOPage.info.settings.meta-robots-check"),
        defaultMessage: "Meta Robots"
      })))
    ), /* @__PURE__ */ react.createElement(
      Box_Box/* Box */.x,
      {
        padding: 4,
        hasRadius: true,
        background: "neutral0",
        shadow: "tableShadow"
      },
      /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 4, padding: 3 }, /* @__PURE__ */ react.createElement(
        Switch.Switch,
        {
          label: "Switch",
          selected: metaSocial,
          onChange: () => setMetaSocial((s) => !s)
        }
      ), /* @__PURE__ */ react.createElement(Typography.Typography, { variant: "delta" }, formatMessage({
        id: (0,utils/* getTrad */.O)("SEOPage.info.settings.meta-social-check"),
        defaultMessage: "Meta Social"
      })))
    ), /* @__PURE__ */ react.createElement(
      Box_Box/* Box */.x,
      {
        padding: 4,
        hasRadius: true,
        background: "neutral0",
        shadow: "tableShadow"
      },
      /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 4, padding: 3 }, /* @__PURE__ */ react.createElement(
        Switch.Switch,
        {
          label: "Switch",
          selected: wordCount,
          onChange: () => setWordCount((s) => !s)
        }
      ), /* @__PURE__ */ react.createElement(Typography.Typography, { variant: "delta" }, formatMessage({
        id: (0,utils/* getTrad */.O)("SEOPage.info.settings.word-count-check"),
        defaultMessage: "Word Count"
      })))
    ), /* @__PURE__ */ react.createElement(
      Box_Box/* Box */.x,
      {
        padding: 4,
        hasRadius: true,
        background: "neutral0",
        shadow: "tableShadow"
      },
      /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 4, padding: 3 }, /* @__PURE__ */ react.createElement(
        Switch.Switch,
        {
          label: "Switch",
          selected: canonicalUrl,
          onChange: () => setCanonicalUrl((s) => !s)
        }
      ), /* @__PURE__ */ react.createElement(Typography.Typography, { variant: "delta" }, formatMessage({
        id: (0,utils/* getTrad */.O)("SEOPage.info.settings.canonical-url-check"),
        defaultMessage: "Canonical URL"
      })))
    ), /* @__PURE__ */ react.createElement(
      Box_Box/* Box */.x,
      {
        padding: 4,
        hasRadius: true,
        background: "neutral0",
        shadow: "tableShadow"
      },
      /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 4, padding: 3 }, /* @__PURE__ */ react.createElement(
        Switch.Switch,
        {
          label: "Switch",
          selected: keywordDensity,
          onChange: () => setKeywordDensity((s) => !s)
        }
      ), /* @__PURE__ */ react.createElement(Typography.Typography, { variant: "delta" }, formatMessage({
        id: (0,utils/* getTrad */.O)(
          "SEOPage.info.settings.keyword-density-check"
        ),
        defaultMessage: "Keyword Density"
      })))
    ), /* @__PURE__ */ react.createElement(
      Box_Box/* Box */.x,
      {
        padding: 4,
        hasRadius: true,
        background: "neutral0",
        shadow: "tableShadow"
      },
      /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 4, padding: 3 }, /* @__PURE__ */ react.createElement(
        Switch.Switch,
        {
          label: "Switch",
          selected: structuredData,
          onChange: () => setStructuredData((s) => !s)
        }
      ), /* @__PURE__ */ react.createElement(Typography.Typography, { variant: "delta" }, formatMessage({
        id: (0,utils/* getTrad */.O)(
          "SEOPage.info.settings.structured-data-check"
        ),
        defaultMessage: "Structured Data"
      })))
    ), /* @__PURE__ */ react.createElement(
      Box_Box/* Box */.x,
      {
        padding: 4,
        hasRadius: true,
        background: "neutral0",
        shadow: "tableShadow"
      },
      /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 4, padding: 3 }, /* @__PURE__ */ react.createElement(
        Switch.Switch,
        {
          label: "Switch",
          selected: alternativeText,
          onChange: () => setAlternativeText((s) => !s)
        }
      ), /* @__PURE__ */ react.createElement(Typography.Typography, { variant: "delta" }, formatMessage({
        id: (0,utils/* getTrad */.O)(
          "SEOPage.info.settings.alternative-text-check"
        ),
        defaultMessage: "Alt Text"
      })))
    ), /* @__PURE__ */ react.createElement(
      Box_Box/* Box */.x,
      {
        padding: 4,
        hasRadius: true,
        background: "neutral0",
        shadow: "tableShadow"
      },
      /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 4, padding: 3 }, /* @__PURE__ */ react.createElement(
        Switch.Switch,
        {
          label: "Switch",
          selected: lastUpdatedAt,
          onChange: () => setLastUpdatedAt((s) => !s)
        }
      ), /* @__PURE__ */ react.createElement(Typography.Typography, { variant: "delta" }, formatMessage({
        id: (0,utils/* getTrad */.O)(
          "SEOPage.info.settings.last-updated-at-check"
        ),
        defaultMessage: "Last Updated At"
      })))
    ))),
    /* @__PURE__ */ react.createElement(
      ModalFooter/* ModalFooter */.m,
      {
        startActions: /* @__PURE__ */ react.createElement(
          Button.Button,
          {
            onClick: () => setIsVisible((prev) => !prev),
            variant: "tertiary"
          },
          formatMessage({
            id: (0,utils/* getTrad */.O)("SEOPage.info.settings.cancel.button"),
            defaultMessage: "Cancel"
          })
        ),
        endActions: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Button.Button, { onClick: (prev) => handleSavingSettingsModal(prev) }, formatMessage({
          id: (0,utils/* getTrad */.O)("SEOPage.info.settings.save.button"),
          defaultMessage: "Save"
        })))
      }
    )
  ));
};
/* harmony default export */ const Main_SettingsModal = (SettingsModal);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/index.js
var Tabs = __webpack_require__(63038);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-seo/admin/src/components/HomePage/Main/index.js














const Main = ({ contentTypes }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Box.Box, { padding: 8 }, /* @__PURE__ */ react.createElement(Tabs.TabGroup, { label: "label", id: "tabs", variant: "simple" }, /* @__PURE__ */ react.createElement(Tabs.Tabs, null, /* @__PURE__ */ react.createElement(Tabs.Tab, null, /* @__PURE__ */ react.createElement(Typography.Typography, null, formatMessage({
    id: (0,utils/* getTrad */.O)("SEOPage.tab.collection-type-title"),
    defaultMessage: "Collection Types"
  }))), /* @__PURE__ */ react.createElement(Tabs.Tab, null, /* @__PURE__ */ react.createElement(Typography.Typography, { variant: "omega" }, formatMessage({
    id: (0,utils/* getTrad */.O)("SEOPage.tab.single-type-title"),
    defaultMessage: "Single Types"
  }))), /* @__PURE__ */ react.createElement(Tabs.Tab, null, /* @__PURE__ */ react.createElement(Typography.Typography, { variant: "omega" }, formatMessage({
    id: (0,utils/* getTrad */.O)("SEOPage.tab.plugin-title"),
    defaultMessage: "Plugins"
  })))), /* @__PURE__ */ react.createElement(Tabs.TabPanels, null, /* @__PURE__ */ react.createElement(Tabs.TabPanel, null, /* @__PURE__ */ react.createElement(
    Table.Table,
    {
      colCount: 2,
      rowCount: contentTypes.collectionTypes.length
    },
    /* @__PURE__ */ react.createElement(Table.Thead, null, /* @__PURE__ */ react.createElement(Table.Tr, null, /* @__PURE__ */ react.createElement(Table.Th, null, /* @__PURE__ */ react.createElement(Typography.Typography, { variant: "sigma" }, formatMessage({
      id: (0,utils/* getTrad */.O)("SEOPage.tab-panel.column-name"),
      defaultMessage: "Name"
    }))))),
    /* @__PURE__ */ react.createElement(Table.Tbody, null, contentTypes && contentTypes.collectionTypes && !lodash_default().isEmpty(contentTypes.collectionTypes) ? contentTypes.collectionTypes.map((item) => /* @__PURE__ */ react.createElement(Table.Tr, { key: item.uid }, /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Typography.Typography, { textColor: "neutral800" }, item.globalId)), /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Flex.Flex, { justifyContent: "right", alignItems: "right" }, item.seo ? /* @__PURE__ */ react.createElement(Main_SettingsModal, { item }) : /* @__PURE__ */ react.createElement(
      LinkButton_LinkButton/* LinkButton */.Q,
      {
        startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null),
        variant: "secondary",
        href: `/plugins/content-type-builder/content-types/${item.uid}`
      },
      formatMessage({
        id: (0,utils/* getTrad */.O)("SEOPage.info.add"),
        defaultMessage: "Add component"
      })
    ))))) : /* @__PURE__ */ react.createElement(Box.Box, { padding: 8, background: "neutral0" }, /* @__PURE__ */ react.createElement(
      EmptyStateLayout.EmptyStateLayout,
      {
        icon: /* @__PURE__ */ react.createElement(illo/* Illo */.w, null),
        content: formatMessage({
          id: (0,utils/* getTrad */.O)("SEOPage.info.no-collection-types"),
          defaultMessage: "You don't have any collection-types yet..."
        }),
        action: /* @__PURE__ */ react.createElement(
          LinkButton_LinkButton/* LinkButton */.Q,
          {
            to: "/plugins/content-type-builder",
            variant: "secondary",
            startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null)
          },
          formatMessage({
            id: (0,utils/* getTrad */.O)(
              "SEOPage.info.create-collection-type"
            ),
            defaultMessage: "Create your first collection-type"
          })
        )
      }
    )))
  )), /* @__PURE__ */ react.createElement(Tabs.TabPanel, null, /* @__PURE__ */ react.createElement(Table.Table, { colCount: 2, rowCount: contentTypes.singleTypes.length }, /* @__PURE__ */ react.createElement(Table.Thead, null, /* @__PURE__ */ react.createElement(Table.Tr, null, /* @__PURE__ */ react.createElement(Table.Th, null, /* @__PURE__ */ react.createElement(Typography.Typography, { variant: "sigma" }, formatMessage({
    id: (0,utils/* getTrad */.O)("SEOPage.tab-panel.column-name"),
    defaultMessage: "Name"
  }))))), /* @__PURE__ */ react.createElement(Table.Tbody, null, contentTypes && contentTypes.singleTypes && !lodash_default().isEmpty(contentTypes.singleTypes) ? contentTypes.singleTypes.map((item) => /* @__PURE__ */ react.createElement(Table.Tr, { key: item.uid }, /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Typography.Typography, { textColor: "neutral800" }, item.globalId)), /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Flex.Flex, { justifyContent: "right", alignItems: "right" }, item.seo ? /* @__PURE__ */ react.createElement(Main_SettingsModal, { item }) : /* @__PURE__ */ react.createElement(
    LinkButton_LinkButton/* LinkButton */.Q,
    {
      startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null),
      variant: "secondary",
      href: `/admin/plugins/content-type-builder/content-types/${item.uid}`
    },
    formatMessage({
      id: (0,utils/* getTrad */.O)("SEOPage.info.add"),
      defaultMessage: "Add component"
    })
  ))))) : /* @__PURE__ */ react.createElement(Box.Box, { padding: 8, background: "neutral0" }, /* @__PURE__ */ react.createElement(
    EmptyStateLayout.EmptyStateLayout,
    {
      icon: /* @__PURE__ */ react.createElement(illo/* Illo */.w, null),
      content: formatMessage({
        id: (0,utils/* getTrad */.O)("SEOPage.info.no-single-types"),
        defaultMessage: "You don't have any single-types yet..."
      }),
      action: /* @__PURE__ */ react.createElement(
        LinkButton_LinkButton/* LinkButton */.Q,
        {
          to: "/admin/plugins/content-type-builder",
          variant: "secondary",
          startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null)
        },
        formatMessage({
          id: (0,utils/* getTrad */.O)("SEOPage.info.create-single-type"),
          defaultMessage: "Create your first single-type"
        })
      )
    }
  ))))), /* @__PURE__ */ react.createElement(Tabs.TabPanel, null, /* @__PURE__ */ react.createElement(Table.Table, { colCount: 2, rowCount: contentTypes.plugins.length }, /* @__PURE__ */ react.createElement(Table.Thead, null, /* @__PURE__ */ react.createElement(Table.Tr, null, /* @__PURE__ */ react.createElement(Table.Th, null, /* @__PURE__ */ react.createElement(Typography.Typography, { variant: "sigma" }, formatMessage({
    id: (0,utils/* getTrad */.O)("SEOPage.tab-panel.column-name"),
    defaultMessage: "Name"
  }))))), /* @__PURE__ */ react.createElement(Table.Tbody, null, contentTypes && contentTypes.plugins && !lodash_default().isEmpty(contentTypes.plugins) ? contentTypes.plugins.map((item) => /* @__PURE__ */ react.createElement(Table.Tr, { key: item.uid }, /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Typography.Typography, { textColor: "neutral800" }, item.globalId)), /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Flex.Flex, { justifyContent: "right", alignItems: "right" }, item.seo ? /* @__PURE__ */ react.createElement(Main_SettingsModal, { item }) : /* @__PURE__ */ react.createElement(
    LinkButton_LinkButton/* LinkButton */.Q,
    {
      startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null),
      variant: "secondary",
      href: `/admin/plugins/content-type-builder/content-types/${item.uid}`
    },
    formatMessage({
      id: (0,utils/* getTrad */.O)("SEOPage.info.add"),
      defaultMessage: "Add component"
    })
  ))))) : /* @__PURE__ */ react.createElement(Box.Box, { padding: 8, background: "neutral0" }, /* @__PURE__ */ react.createElement(
    EmptyStateLayout.EmptyStateLayout,
    {
      icon: /* @__PURE__ */ react.createElement(illo/* Illo */.w, null),
      content: formatMessage({
        id: (0,utils/* getTrad */.O)("SEOPage.info.no-plugin-content-type"),
        defaultMessage: "You don't have any plugin content-type yet..."
      })
    }
  )))))))));
};
/* harmony default export */ const HomePage_Main = (Main);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/index.js
var Layout = __webpack_require__(58136);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-seo/admin/src/components/HomePage/Header/index.js







const Header = (seoComponent) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(Box.Box, { background: "neutral100" }, /* @__PURE__ */ react.createElement(
    Layout.BaseHeaderLayout,
    {
      secondaryAction: seoComponent ? null : /* @__PURE__ */ react.createElement(
        LinkButton,
        {
          variant: "tertiary",
          to: "/admin/plugins/content-type-builder/component-categories/shared/shared.seo",
          startIcon: /* @__PURE__ */ react.createElement(Pencil, null)
        },
        formatMessage({
          id: (0,utils/* getTrad */.O)("SEOPage.header.button.edit-component"),
          defaultMessage: "Edit SEO component"
        })
      ),
      title: formatMessage({
        id: (0,utils/* getTrad */.O)("SEOPage.header.title"),
        defaultMessage: "SEO"
      }),
      subtitle: formatMessage({
        id: (0,utils/* getTrad */.O)("SEOPage.header.subtitle"),
        defaultMessage: "Optimize your content to be SEO friendly"
      }),
      as: "h2"
    }
  ));
};
/* harmony default export */ const HomePage_Header = (Header);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-seo/admin/src/pages/HomePage/index.js










const HomePage = () => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { lockAppWithAutoreload, unlockAppWithAutoreload } = (0,dist/* useAutoReloadOverlayBlocker */.Vu)();
  const [isLoading, setIsLoading] = (0,react.useState)(true);
  const [shouldEffect, setShouldEffect] = (0,react.useState)(false);
  const seoComponent = (0,react.useRef)({});
  const contentTypes = (0,react.useRef)({});
  (0,react.useEffect)(() => {
    const fetchData = async () => {
      seoComponent.current = await fetchSeoComponent();
      contentTypes.current = await fetchContentTypes();
      if (!seoComponent.current) {
        try {
          lockAppWithAutoreload();
          await createSeoComponent();
        } catch (error) {
          console.log(error);
        } finally {
          unlockAppWithAutoreload();
          setShouldEffect(true);
        }
      }
    };
    fetchData().then(() => {
      setIsLoading(false);
    });
  }, [shouldEffect]);
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null);
  }
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(HomePage_Header, { seoComponent: seoComponent.current }), /* @__PURE__ */ react.createElement(Box.Box, { paddingLeft: 8, paddingRight: 8 }, /* @__PURE__ */ react.createElement(
    dist/* ContentBox */.Y_,
    {
      title: formatMessage({
        id: "Information",
        defaultMessage: "Information"
      }),
      subtitle: formatMessage({
        id: (0,utils/* getTrad */.O)("HomePage.info.information"),
        defaultMessage: "When adding your SEO component, make sure to name it 'seo' and to include it in the root of your Content-Type."
      }),
      icon: /* @__PURE__ */ react.createElement((InformationSquare_default()), null),
      iconBackground: "primary100"
    }
  )), /* @__PURE__ */ react.createElement(HomePage_Main, { contentTypes: contentTypes.current }));
};
/* harmony default export */ const pages_HomePage = ((0,react.memo)(HomePage));

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-seo/admin/src/permissions.js
var permissions = __webpack_require__(32141);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-seo/admin/src/pages/App/index.js






const App = () => {
  return /* @__PURE__ */ react.createElement(dist/* CheckPagePermissions */.O4, { permissions: permissions/* default */.Z.main }, /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(react_router/* Switch */.rs, null, /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: `/plugins/${(pluginId_default())}`, component: pages_HomePage, exact: true }))));
};
/* harmony default export */ const pages_App = (App);


/***/ }),

/***/ 91839:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ GridLayout)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46449);


const GridLayout = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({ theme }) => theme.spaces[4]};
`;




/***/ })

}]);