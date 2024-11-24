(self["webpackChunklive_and_work_be"] = self["webpackChunklive_and_work_be"] || []).push([[6750],{

/***/ 8066:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ 22647:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = __webpack_require__(85893);
const React = __webpack_require__(67294);
const icons = __webpack_require__(89952);
const reactRouterDom = __webpack_require__(75621);
const styled = __webpack_require__(46449);
const utils = __webpack_require__(69186);
const Typography = __webpack_require__(4583);
const Box = __webpack_require__(60665);

const _interopDefault = e => e && e.__esModule ? e : { default: e };

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
  if (e) {
    for (const k in e) {
      if (k !== 'default') {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}

const React__namespace = /*#__PURE__*/_interopNamespace(React);
const styled__default = /*#__PURE__*/_interopDefault(styled);

const LinkWrapper = styled__default.default.a `
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : undefined)};
  color: ${({ disabled, theme }) => (disabled ? theme.colors.neutral600 : theme.colors.primary600)};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10 / 16}rem;
  }

  ${Typography.Typography} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary500};
  }

  &:active {
    color: ${({ theme }) => theme.colors.primary700};
  }

  ${utils.buttonFocusStyle};
`;
const IconWrapper = styled__default.default(Box.Box) `
  display: flex;
`;
const Link = React__namespace.forwardRef(({ children, href, to, disabled = false, startIcon, endIcon, ...restProps }, ref) => {
    const target = href ? '_blank' : undefined;
    const rel = href ? 'noreferrer noopener' : undefined;
    return (jsxRuntime.jsxs(LinkWrapper, { as: to && !disabled ? reactRouterDom.NavLink : 'a', target: target, rel: rel, to: disabled ? undefined : to, href: disabled ? '#' : href, disabled: disabled, ref: ref, ...restProps, children: [startIcon && (jsxRuntime.jsx(IconWrapper, { as: "span", "aria-hidden": true, paddingRight: 2, children: startIcon })), jsxRuntime.jsx(Typography.Typography, { children: children }), endIcon && !href && (jsxRuntime.jsx(IconWrapper, { as: "span", "aria-hidden": true, paddingLeft: 2, children: endIcon })), href && (jsxRuntime.jsx(IconWrapper, { as: "span", "aria-hidden": true, paddingLeft: 2, children: jsxRuntime.jsx(icons.ExternalLink, {}) }))] }));
});

exports.Link = Link;


/***/ }),

/***/ 82922:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const Link = __webpack_require__(22647);



exports.Link = Link.Link;


/***/ }),

/***/ 90082:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


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

"use strict";


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

/***/ 64609:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
const t=__webpack_require__(85893),r=e=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...e,children:t.jsx("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),s=r;module.exports=s;


/***/ }),

/***/ 89100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(88767);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.mjs
var Layout = __webpack_require__(71590);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-menus/admin/src/utils/index.js + 16 modules
var utils = __webpack_require__(53937);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/lodash/pick.js
var pick = __webpack_require__(78718);
var pick_default = /*#__PURE__*/__webpack_require__.n(pick);
// EXTERNAL MODULE: ./node_modules/lodash/uniq.js
var uniq = __webpack_require__(44908);
var uniq_default = /*#__PURE__*/__webpack_require__.n(uniq);
// EXTERNAL MODULE: ./node_modules/lodash/uniqueId.js
var uniqueId = __webpack_require__(73955);
var uniqueId_default = /*#__PURE__*/__webpack_require__.n(uniqueId);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(41054);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 20 modules
var dist = __webpack_require__(54017);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LiveRegions/useNotifyAT.mjs
var useNotifyAT = __webpack_require__(334);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/index.js
var Box = __webpack_require__(93289);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/index.js
var Button = __webpack_require__(35163);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Link/index.js
var Link = __webpack_require__(82922);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/index.js
var Stack = __webpack_require__(42919);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/index.js
var dist_Layout = __webpack_require__(58136);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.js
var ArrowLeft = __webpack_require__(64609);
var ArrowLeft_default = /*#__PURE__*/__webpack_require__.n(ArrowLeft);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.js
var Check = __webpack_require__(82752);
var Check_default = /*#__PURE__*/__webpack_require__.n(Check);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-menus/admin/src/components/index.js + 24 modules
var components = __webpack_require__(96695);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-menus/admin/src/constants.js
var constants = __webpack_require__(9138);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-menus/admin/src/coreComponents/index.js + 28 modules
var coreComponents = __webpack_require__(15391);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-menus/admin/src/hooks/index.js + 5 modules
var hooks = __webpack_require__(83290);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-menus/admin/src/pages/EditView/form-layout.js

const targetOptions = ["_blank", "_parent", "_self", "_top"];
const menu = [
  {
    input: {
      intlLabel: {
        id: (0,utils/* getTrad */.OB)("form.label.title"),
        defaultMessage: "Title"
      },
      name: "title",
      type: "text",
      required: true
    },
    grid: {
      col: 6,
      s: 12
    }
  },
  {
    input: {
      intlLabel: {
        id: (0,utils/* getTrad */.OB)("form.label.slug"),
        defaultMessage: "Slug"
      },
      name: "slug",
      type: "uid",
      contentTypeUID: "plugin::menus.menu",
      attribute: {
        targetField: "title"
      },
      required: true
    },
    grid: {
      col: 6,
      s: 12
    }
  }
];
const menuItem = [
  {
    input: {
      intlLabel: {
        id: (0,utils/* getTrad */.OB)("form.label.title"),
        defaultMessage: "Title"
      },
      name: "title",
      type: "text",
      placeholder: {
        id: (0,utils/* getTrad */.OB)("form.placeholder.untitled"),
        defaultMessage: "Untitled"
      },
      required: true
    }
  },
  {
    input: {
      intlLabel: {
        id: (0,utils/* getTrad */.OB)("form.label.url"),
        defaultMessage: "URL"
      },
      name: "url",
      type: "text"
    }
  },
  {
    input: {
      intlLabel: {
        id: (0,utils/* getTrad */.OB)("form.label.target"),
        defaultMessage: "Target"
      },
      name: "target",
      type: "select",
      options: targetOptions.map((option) => ({
        key: option,
        value: option,
        metadatas: {
          intlLabel: {
            id: (0,utils/* getTrad */.OB)(`form.label.option.${option}`),
            defaultMessage: option
          }
        }
      }))
    },
    grid: {
      col: 6
    }
  }
];
/* harmony default export */ const form_layout = ({
  menu,
  menuItem
});

// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var yup_es = __webpack_require__(87561);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-menus/admin/src/pages/EditView/form-schema.js




const itemSchema = yup_es/* object */.Ry().shape({
  order: yup_es/* number */.Rx(dist/* translatedErrors */.I0.number).required(dist/* translatedErrors */.I0.required),
  title: yup_es/* string */.Z_(dist/* translatedErrors */.I0.string).required(dist/* translatedErrors */.I0.required),
  url: yup_es/* string */.Z_(dist/* translatedErrors */.I0.string).test(
    "is-url",
    (0,utils/* getTrad */.OB)("error.url.invalid"),
    (value) => !!(!value || constants/* URL_ABSOLUTE_REGEX */.Ks.test(value) || constants/* URL_RELATIVE_REGEX */.dM.test(value) || constants/* URL_MAILTO_REGEX */.jv.test(value) || constants/* URL_TEL_REGEX */.kR.test(value))
  ).nullable(),
  target: yup_es/* string */.Z_(dist/* translatedErrors */.I0.string).nullable()
});
const schema = yup_es/* object */.Ry().shape({
  title: yup_es/* string */.Z_(dist/* translatedErrors */.I0.string).nullable().required(dist/* translatedErrors */.I0.required),
  slug: yup_es/* string */.Z_(dist/* translatedErrors */.I0.string).nullable().required(dist/* translatedErrors */.I0.required),
  items: yup_es/* array */.IX().of(itemSchema)
});
/* harmony default export */ const form_schema = (schema);

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-menus/admin/src/pages/EditView/index.js

























const CLONE_QUERY_KEY = "menus-clone-{id}";
const CREATE_QUERY_KEY = "menus-create";
const EDIT_QUERY_KEY = "menus-edit-{id}";
const defaultValues = {
  title: "",
  slug: "",
  items: []
};
function renderDragLayerItem({ type, item }) {
  const [actualType] = type.split("_");
  switch (actualType) {
    case constants/* DRAG_ITEM_TYPES */.ZV.RELATION:
      return /* @__PURE__ */ react.createElement(
        coreComponents/* RelationDragPreview */.oI,
        {
          displayedValue: item.displayedValue,
          status: item.status,
          width: item.width
        }
      );
    default:
      return null;
  }
}
const EditView = ({ history, location, match }) => {
  const { id } = match.params;
  const fetchClient = (0,dist/* useFetchClient */.kY)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { notifyStatus } = (0,useNotifyAT/* useNotifyAT */.G)();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const { lockApp, unlockApp } = (0,dist/* useOverlayBlocker */.o1)();
  const queryClient = (0,es.useQueryClient)();
  const {
    data: { config, schema }
  } = (0,hooks/* usePluginConfig */.ZH)();
  const customLayouts = get_default()(config, "layouts.menuItem", {});
  const menuItemLayout = (0,react.useMemo)(() => {
    return (0,utils/* getFieldsLayout */.Vi)(form_layout.menuItem, customLayouts, schema);
  }, [customLayouts, schema]);
  const menuItemFields = Object.values(menuItemLayout).flat();
  const mediaFields = (0,react.useMemo)(() => {
    return (0,utils/* getFieldsByType */.Bi)(schema.menuItem, ["media"]);
  }, [schema.menuItem]);
  const isCreating = !id;
  const isCloning = location.pathname.split("/").includes("clone");
  let headerTitle = formatMessage({
    id: (0,utils/* getTrad */.OB)("edit.header.title"),
    defaultMessage: "Edit menu"
  });
  let queryKey = EDIT_QUERY_KEY.replace("{id}", id);
  if (isCreating) {
    headerTitle = formatMessage({
      id: (0,utils/* getTrad */.OB)("create.header.title"),
      defaultMessage: "Create menu"
    });
    queryKey = CREATE_QUERY_KEY;
  }
  if (isCloning) {
    headerTitle = formatMessage({
      id: (0,utils/* getTrad */.OB)("clone.header.title"),
      defaultMessage: "Clone menu"
    });
    queryKey = CLONE_QUERY_KEY.replace("{id}", id);
  }
  const getMenu = async (id2) => {
    const { data: data2 } = await fetchClient.get(
      (0,utils/* getRequestUrl */.IF)(id2, {
        populate: uniq_default()(["items", "items.parent", ...mediaFields.map((field) => `items.${field}`)])
      })
    );
    return data2;
  };
  const { status, data } = (0,es.useQuery)(queryKey, () => getMenu(id), {
    enabled: !isCreating,
    select: (data2) => (0,utils/* transformResponse */.m5)(data2),
    onSuccess: () => {
      notifyStatus(
        formatMessage({
          id: (0,utils/* getTrad */.OB)("ui.loaded"),
          defaultMessage: "Data has been loaded"
        })
      );
    },
    onError: () => {
      toggleNotification({
        type: "warning",
        message: {
          id: (0,utils/* getTrad */.OB)("ui.error"),
          defaultMessage: "An error occured"
        }
      });
    }
  });
  const submitMutation = (0,es.useMutation)(
    (body) => {
      if (isCloning) {
        const menuData = pick_default()(body.data, ["title", "slug"], {});
        const menuItemIdMap = body.data.items.map((item) => ({
          id: item.id,
          createId: uniqueId_default()("create")
        }));
        const menuItemsData = body.data.items.map((item) => {
          const createMap = menuItemIdMap.find((_item) => _item.id === item.id);
          const parentMap = menuItemIdMap.find((_item) => _item.id === item.parent?.id);
          const createId = createMap ? createMap.createId : null;
          const parent = parentMap ? { id: parentMap.createId } : null;
          return {
            ...(0,utils/* sanitizeEntity */.oW)(item),
            id: createId,
            parent
          };
        });
        const clonedBody = {
          data: {
            ...menuData,
            items: menuItemsData
          }
        };
        return fetchClient.post((0,utils/* getRequestUrl */.IF)(), clonedBody);
      }
      if (isCreating) {
        return fetchClient.post((0,utils/* getRequestUrl */.IF)(), body);
      }
      return fetchClient.put((0,utils/* getRequestUrl */.IF)(id), body);
    },
    {
      refetchActive: true,
      onSuccess: async () => {
        await queryClient.invalidateQueries(queryKey);
        toggleNotification({
          type: "success",
          message: {
            id: (0,utils/* getTrad */.OB)("ui.saved"),
            defaultMessage: "Saved"
          }
        });
      },
      onError: () => {
        toggleNotification({
          type: "warning",
          message: {
            id: (0,utils/* getTrad */.OB)("ui.error"),
            defaultMessage: "An error occured"
          }
        });
      },
      onSettled: () => {
        unlockApp();
      }
    }
  );
  const onSubmit = async (body, { setErrors }) => {
    lockApp();
    try {
      const sanitizedBody = (0,utils/* sanitizeEntity */.oW)(body);
      const sanitizedMenuData = (0,utils/* sanitizeFormData */.BR)(sanitizedBody, data, form_layout.menu, isCloning);
      const sanitizedMenuItemsData = get_default()(sanitizedBody, "items", []).map((item) => {
        const sanitizedItem = (0,utils/* sanitizeEntity */.oW)(item);
        const prevItem = get_default()(data, "items", []).find((_item) => _item.id === sanitizedItem.id);
        return (0,utils/* sanitizeFormData */.BR)(sanitizedItem, prevItem, menuItemFields, isCloning);
      });
      const res = await submitMutation.mutateAsync({
        data: {
          ...sanitizedMenuData,
          items: sanitizedMenuItemsData
        }
      });
      if ((isCreating || isCloning) && res?.data?.data?.id) {
        history.push(`/plugins/${utils/* pluginId */.aw}/edit/${res.data.data.id}`);
      }
    } catch (err) {
      unlockApp();
      const errorDetails = err?.response?.data?.error?.details;
      if (errorDetails) {
        setErrors(errorDetails);
      } else {
        console.error(err);
      }
    }
  };
  return /* @__PURE__ */ react.createElement(components/* Layout */.Ar, { isLoading: !isCreating && status !== "success", title: headerTitle }, /* @__PURE__ */ react.createElement(coreComponents/* DragLayer */.rE, { renderItem: renderDragLayerItem }), /* @__PURE__ */ react.createElement(
    formik_esm/* Formik */.J9,
    {
      onSubmit,
      initialValues: data ?? defaultValues,
      validateOnChange: false,
      validationSchema: form_schema,
      enableReinitialize: true
    },
    ({ handleSubmit }) => {
      return /* @__PURE__ */ react.createElement(dist/* Form */.l0, { onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(components/* MenuDataProvider */.Cp, { isCreatingEntry: isCreating, isCloningEntry: isCloning, menu: data }, ({ dirty, isSubmitting }) => {
        return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
          dist_Layout.HeaderLayout,
          {
            title: headerTitle,
            navigationAction: /* @__PURE__ */ react.createElement(Link.Link, { startIcon: /* @__PURE__ */ react.createElement((ArrowLeft_default()), null), to: `/plugins/${utils/* pluginId */.aw}` }, formatMessage({
              id: (0,utils/* getTrad */.OB)("ui.goBack"),
              defaultMessage: "Go back"
            })),
            primaryAction: /* @__PURE__ */ react.createElement(
              Button.Button,
              {
                type: "submit",
                disabled: !dirty || isSubmitting,
                loading: isSubmitting,
                startIcon: /* @__PURE__ */ react.createElement((Check_default()), null),
                size: "L"
              },
              formatMessage({
                id: (0,utils/* getTrad */.OB)("ui.save"),
                defaultMessage: "Save"
              })
            )
          }
        ), /* @__PURE__ */ react.createElement(dist_Layout.ContentLayout, null, /* @__PURE__ */ react.createElement(Box.Box, { paddingBottom: 10 }, /* @__PURE__ */ react.createElement(Stack.Stack, { spacing: 8 }, /* @__PURE__ */ react.createElement(components/* Section */.$0, null, /* @__PURE__ */ react.createElement(components/* FormLayout */.lt, { fields: form_layout.menu, schema: schema.menu })), /* @__PURE__ */ react.createElement(components/* MenuItemsManager */.qT, { fields: menuItemLayout })))));
      }));
    }
  ));
};
EditView.propTypes = {
  history: prop_types_default().shape({
    push: (prop_types_default()).func
  }).isRequired,
  location: prop_types_default().shape({
    pathname: (prop_types_default()).string
  }).isRequired,
  match: prop_types_default().shape({
    params: prop_types_default().shape({
      id: (prop_types_default()).string
    })
  }).isRequired
};
/* harmony default export */ const pages_EditView = ((0,react.memo)(EditView));

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.js
var Plus = __webpack_require__(46003);
var Plus_default = /*#__PURE__*/__webpack_require__.n(Plus);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-menus/admin/src/pages/IndexView/index.js













const QUERY_KEY = "menus-index";
const PrimaryAction = ({ children, onClick, size, variant }) => /* @__PURE__ */ react.createElement(Button.Button, { onClick, startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null), variant, size }, children);
PrimaryAction.defaultProps = {
  size: "L",
  variant: "default"
};
PrimaryAction.propTypes = {
  children: (prop_types_default()).node.isRequired,
  onClick: (prop_types_default()).func.isRequired,
  size: (prop_types_default()).string,
  variant: (prop_types_default()).string
};
const IndexView = ({ history }) => {
  const fetchClient = (0,dist/* useFetchClient */.kY)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { notifyStatus } = (0,useNotifyAT/* useNotifyAT */.G)();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const { lockApp, unlockApp } = (0,dist/* useOverlayBlocker */.o1)();
  const queryClient = (0,es.useQueryClient)();
  const [{ query }] = (0,dist/* useQueryParams */.Kx)();
  const pageSize = get_default()(query, "pageSize", 10);
  const page = get_default()(query, "page", 1) * pageSize - pageSize;
  const getAllMenus = async () => {
    const { data: data2 } = await fetchClient.get(
      (0,utils/* getRequestUrl */.IF)(null, {
        populate: "*",
        pagination: {
          start: page,
          limit: pageSize
        }
      })
    );
    return data2;
  };
  const { data, refetch, status } = (0,es.useQuery)(QUERY_KEY, () => getAllMenus(), {
    onSuccess: () => {
      notifyStatus(
        formatMessage({
          id: (0,utils/* getTrad */.OB)("ui.loaded"),
          defaultMessage: "Data has been loaded"
        })
      );
    },
    onError: () => {
      toggleNotification({
        type: "warning",
        message: {
          id: (0,utils/* getTrad */.OB)("ui.error"),
          defaultMessage: "An error occured"
        }
      });
    }
  });
  (0,react.useEffect)(() => {
    refetch();
  }, [page, pageSize, refetch]);
  const deleteMutation = (0,es.useMutation)((id) => fetchClient.delete((0,utils/* getRequestUrl */.IF)(id)), {
    onSuccess: async () => {
      await queryClient.invalidateQueries(QUERY_KEY);
      toggleNotification({
        type: "success",
        message: {
          id: (0,utils/* getTrad */.OB)("ui.deleted.menu"),
          defaultMessage: "Menu has been deleted"
        }
      });
    },
    onError: (err) => {
      if (err?.response?.data?.data) {
        toggleNotification({
          type: "warning",
          message: err.response.data.data
        });
      } else {
        toggleNotification({
          type: "warning",
          message: {
            id: (0,utils/* getTrad */.OB)("ui.error"),
            defaultMessage: "An error occured"
          }
        });
      }
    },
    onSettled: () => {
      unlockApp();
    }
  });
  const onClickCreate = () => history.push(`/plugins/${utils/* pluginId */.aw}/create`);
  const onConfirmDelete = async (id) => {
    lockApp();
    try {
      await deleteMutation.mutateAsync(id);
    } catch (err) {
      unlockApp();
    }
  };
  const isLoading = status !== "success";
  const pageCount = data?.meta?.total ? Math.ceil(data.meta.total / data.meta.limit) : 1;
  const tableHeaders = [
    {
      name: "title",
      key: "title",
      metadatas: {
        label: formatMessage({
          id: (0,utils/* getTrad */.OB)("form.label.title"),
          defaultMessage: "Title"
        }),
        sortable: true
      }
    },
    {
      name: "slug",
      key: "slug",
      metadatas: {
        label: formatMessage({
          id: (0,utils/* getTrad */.OB)("form.label.slug"),
          defaultMessage: "Slug"
        }),
        sortable: true
      }
    },
    {
      name: "items",
      key: "items",
      metadatas: {
        label: formatMessage({
          id: (0,utils/* getTrad */.OB)("form.label.items"),
          defaultMessage: "Items"
        }),
        sortable: false
      }
    }
  ];
  return /* @__PURE__ */ react.createElement(
    components/* Layout */.Ar,
    {
      isLoading,
      title: formatMessage({
        id: (0,utils/* getTrad */.OB)("plugin.name"),
        defaultMessage: utils/* pluginName */.oy
      })
    },
    /* @__PURE__ */ react.createElement(
      dist_Layout.HeaderLayout,
      {
        title: formatMessage({
          id: (0,utils/* getTrad */.OB)("plugin.name"),
          defaultMessage: utils/* pluginName */.oy
        }),
        subtitle: formatMessage({
          id: (0,utils/* getTrad */.OB)("index.header.subtitle"),
          defaultMessage: "Customize the structure of menus and menu items"
        }),
        primaryAction: /* @__PURE__ */ react.createElement(PrimaryAction, { onClick: onClickCreate }, formatMessage({
          id: (0,utils/* getTrad */.OB)("ui.create.menu"),
          defaultMessage: "Create new menu"
        }))
      }
    ),
    /* @__PURE__ */ react.createElement(dist_Layout.ContentLayout, null, /* @__PURE__ */ react.createElement(Box.Box, { paddingBottom: 10 }, !!data?.data?.length ? /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      dist/* DynamicTable */.tM,
      {
        contentType: "menus",
        isLoading,
        headers: tableHeaders,
        rows: data.data,
        action: /* @__PURE__ */ react.createElement(PrimaryAction, { onClick: onClickCreate, size: "S", variant: "secondary" }, formatMessage({
          id: (0,utils/* getTrad */.OB)("ui.create.menu"),
          defaultMessage: "Create new menu"
        })),
        onConfirmDelete
      },
      /* @__PURE__ */ react.createElement(
        components/* MenuRows */.XS,
        {
          data: data.data ?? [],
          onClickClone: (id) => history.push(`/plugins/${utils/* pluginId */.aw}/clone/${id}`),
          onClickEdit: (id) => history.push(`/plugins/${utils/* pluginId */.aw}/edit/${id}`)
        }
      )
    ), /* @__PURE__ */ react.createElement(components/* PaginationFooter */.eO, { pagination: { pageCount } })) : /* @__PURE__ */ react.createElement(
      dist/* EmptyStateLayout */.x7,
      {
        content: {
          id: (0,utils/* getTrad */.OB)("index.state.empty"),
          defaultMessage: "No menus found"
        },
        action: /* @__PURE__ */ react.createElement(PrimaryAction, { onClick: onClickCreate, size: "S", variant: "secondary" }, formatMessage({
          id: (0,utils/* getTrad */.OB)("ui.create.menu"),
          defaultMessage: "Create new menu"
        }))
      }
    )))
  );
};
IndexView.propTypes = {
  history: prop_types_default().shape({
    push: (prop_types_default()).func
  }).isRequired
};
/* harmony default export */ const pages_IndexView = ((0,react.memo)(IndexView));

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.mjs
var Main = __webpack_require__(40720);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs + 2 modules
var HeaderLayout = __webpack_require__(90731);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.mjs
var ContentLayout = __webpack_require__(34726);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/EmptyStateLayout/EmptyStateLayout.mjs
var EmptyStateLayout = __webpack_require__(96912);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowRight.mjs
var ArrowRight = __webpack_require__(98);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/EmptyPictures.mjs
var EmptyPictures = __webpack_require__(18857);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-menus/admin/src/pages/NotFound/index.js






const NotFound = () => {
  (0,dist/* useFocusWhenNavigate */.go)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, { labelledBy: "title" }, /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      id: "title",
      title: formatMessage({
        id: "content-manager.pageNotFound",
        defaultMessage: "Page not found"
      })
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(
    EmptyStateLayout/* EmptyStateLayout */.x,
    {
      action: /* @__PURE__ */ react.createElement(dist/* LinkButton */.Qj, { variant: "secondary", endIcon: /* @__PURE__ */ react.createElement(ArrowRight/* default */.Z, null), to: `/plugins/${utils/* pluginId */.aw}` }, formatMessage({
        id: "app.components.NotFoundPage.back",
        defaultMessage: "Back to homepage"
      })),
      content: formatMessage({
        id: "app.page.not.found",
        defaultMessage: "Oops! We can't seem to find the page you're looging for..."
      }),
      hasRadius: true,
      icon: /* @__PURE__ */ react.createElement(EmptyPictures/* default */.Z, { width: "10rem" }),
      shadow: "tableShadow"
    }
  )));
};
/* harmony default export */ const pages_NotFound = (NotFound);

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-menus/admin/src/pages/App/index.js








const queryClient = new es.QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});
const App = () => {
  return /* @__PURE__ */ react.createElement(es.QueryClientProvider, { client: queryClient }, /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(react_router/* Switch */.rs, null, /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: `/plugins/${utils/* pluginId */.aw}`, component: pages_IndexView, exact: true }), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: `/plugins/${utils/* pluginId */.aw}/create`, component: pages_EditView, exact: true }), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: `/plugins/${utils/* pluginId */.aw}/clone/:id`, component: pages_EditView, exact: true }), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: `/plugins/${utils/* pluginId */.aw}/edit/:id`, component: pages_EditView, exact: true }), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: "", component: pages_NotFound }))));
};
/* harmony default export */ const pages_App = (App);


/***/ }),

/***/ 44908:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseUniq = __webpack_require__(45652);

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

module.exports = uniq;


/***/ }),

/***/ 34726:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ ContentLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16607);



const ContentLayout = ({ children }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .x, { paddingLeft: 10, paddingRight: 10, children: children }));
};




/***/ }),

/***/ 90731:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  T: () => (/* binding */ HeaderLayout)
});

// UNUSED EXPORTS: BaseHeaderLayout

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(46449);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/hooks/useElementOnScreen.mjs


const useElementOnScreen = (options) => {
    const containerRef = (0,react.useRef)(null);
    const [isVisible, setIsVisible] = (0,react.useState)(true);
    const callback = ([entry]) => {
        setIsVisible(entry.isIntersecting);
    };
    (0,react.useEffect)(() => {
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



// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var dist = __webpack_require__(79698);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/hooks/useResizeObserver.mjs



const useResizeObserver = (sources, onResize) => {
    const handleResize = (0,dist/* useCallbackRef */.W)(onResize);
    (0,react.useLayoutEffect)(() => {
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



// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(16607);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(96987);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(10574);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs









const HeaderLayout = (props) => {
    const baseHeaderLayoutRef = (0,react.useRef)(null);
    const [headerSize, setHeaderSize] = (0,react.useState)(null);
    const [containerRef, isVisible] = useElementOnScreen({
        root: null,
        rootMargin: '0px',
        threshold: 0,
    });
    useResizeObserver(containerRef, () => {
        if (containerRef.current) {
            setHeaderSize(containerRef.current.getBoundingClientRect());
        }
    });
    (0,react.useEffect)(() => {
        if (baseHeaderLayoutRef.current) {
            setHeaderSize(baseHeaderLayoutRef.current.getBoundingClientRect());
        }
    }, [baseHeaderLayoutRef]);
    return ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)("div", { style: { height: headerSize?.height }, ref: containerRef, children: isVisible && (0,jsx_runtime.jsx)(BaseHeaderLayout, { ref: baseHeaderLayoutRef, ...props }) }), !isVisible && (0,jsx_runtime.jsx)(BaseHeaderLayout, { ...props, sticky: true, width: headerSize?.width })] }));
};
HeaderLayout.displayName = 'HeaderLayout';
const StickyBox = (0,styled_components_browser_esm["default"])((0,Box/* Box */.x)) `
  width: ${({ width }) => (width ? `${width / 16}rem` : undefined)};
  z-index: ${({ theme }) => theme.zIndices[1]};
`;
const BaseHeaderLayout = react.forwardRef(({ navigationAction, primaryAction, secondaryAction, subtitle, title, sticky, width, ...props }, ref) => {
    const isSubtitleString = typeof subtitle === 'string';
    if (sticky) {
        return ((0,jsx_runtime.jsx)(StickyBox, { paddingLeft: 6, paddingRight: 6, paddingTop: 3, paddingBottom: 3, position: "fixed", top: 0, right: 0, background: "neutral0", shadow: "tableShadow", width: width, "data-strapi-header-sticky": true, children: (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { justifyContent: "space-between", children: [(0,jsx_runtime.jsxs)(Flex/* Flex */.k, { children: [navigationAction && (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingRight: 3, children: navigationAction }), (0,jsx_runtime.jsxs)(Box/* Box */.x, { children: [(0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "beta", as: "h1", ...props, children: title }), isSubtitleString ? ((0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral600", children: subtitle })) : (subtitle)] }), secondaryAction ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 4, children: secondaryAction }) : null] }), (0,jsx_runtime.jsx)(Flex/* Flex */.k, { children: primaryAction ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 2, children: primaryAction }) : undefined })] }) }));
    }
    return ((0,jsx_runtime.jsxs)(Box/* Box */.x, { ref: ref, paddingLeft: 10, paddingRight: 10, paddingBottom: 8, paddingTop: navigationAction ? 6 : 8, background: "neutral100", "data-strapi-header": true, children: [navigationAction ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingBottom: 2, children: navigationAction }) : null, (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { justifyContent: "space-between", children: [(0,jsx_runtime.jsxs)(Flex/* Flex */.k, { minWidth: 0, children: [(0,jsx_runtime.jsx)(Typography/* Typography */.Z, { as: "h1", variant: "alpha", ...props, children: title }), secondaryAction ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 4, children: secondaryAction }) : null] }), primaryAction] }), isSubtitleString ? ((0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "epsilon", textColor: "neutral600", as: "p", children: subtitle })) : (subtitle)] }));
});




/***/ }),

/***/ 71590:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46449);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16607);




const GridContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x)) `
  display: grid;
  grid-template-columns: ${({ hasSideNav }) => (hasSideNav ? `auto 1fr` : '1fr')};
`;
const OverflowingItem = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x)) `
  overflow-x: hidden;
`;
const Layout = ({ sideNav, children }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(GridContainer, { hasSideNav: Boolean(sideNav), children: [sideNav, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OverflowingItem, { paddingBottom: 10, children: children })] }));
};




/***/ }),

/***/ 40720:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46449);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16607);




const MainWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x)) `
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`;
const Main = ({ labelledBy = 'main-content-title', ...props }) => {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MainWrapper, { "aria-labelledby": labelledBy, as: "main", id: "main-content", tabIndex: -1, ...props });
};




/***/ })

}]);