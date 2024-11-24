"use strict";
(self["webpackChunklive_and_work_be"] = self["webpackChunklive_and_work_be"] || []).push([[3981],{

/***/ 92686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  G: () => (/* reexport */ useContentTypes)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 20 modules
var dist = __webpack_require__(54017);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(88767);
;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useContentTypes/useContentTypes.js



function useContentTypes() {
  const { get } = (0,dist/* useFetchClient */.kY)();
  const { formatAPIError } = (0,dist/* useAPIErrorHandler */.So)();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const queries = (0,es.useQueries)(
    ["components", "content-types"].map((type) => {
      return {
        queryKey: ["content-manager", type],
        async queryFn() {
          const {
            data: { data }
          } = await get(`/content-manager/${type}`);
          return data;
        },
        onError(error) {
          toggleNotification({
            type: "warning",
            message: formatAPIError(error)
          });
        }
      };
    })
  );
  const [components, contentTypes] = queries;
  const isLoading = components.isLoading || contentTypes.isLoading;
  const collectionTypes = react.useMemo(() => {
    return (contentTypes?.data ?? []).filter(
      (contentType) => contentType.kind === "collectionType" && contentType.isDisplayed
    );
  }, [contentTypes?.data]);
  const singleTypes = react.useMemo(() => {
    return (contentTypes?.data ?? []).filter(
      (contentType) => contentType.kind !== "collectionType" && contentType.isDisplayed
    );
  }, [contentTypes?.data]);
  return {
    isLoading,
    components: react.useMemo(() => components?.data ?? [], [components?.data]),
    collectionTypes,
    singleTypes
  };
}

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useContentTypes/index.js



/***/ }),

/***/ 62019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  HomePageCE: () => (/* binding */ HomePageCE),
  "default": () => (/* binding */ HomePage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(16607);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.mjs
var Layout = __webpack_require__(71590);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.mjs
var Main = __webpack_require__(40720);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.mjs
var Grid = __webpack_require__(31988);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.mjs
var GridItem = __webpack_require__(6498);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 20 modules
var dist = __webpack_require__(54017);
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(64593);
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__(97582);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/utils.js
var utils = __webpack_require__(680);
;// CONCATENATED MODULE: ./node_modules/react-intl/lib/src/components/message.js
/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */




function areEqual(prevProps, nextProps) {
    var values = prevProps.values, otherProps = (0,tslib_es6/* __rest */._T)(prevProps, ["values"]);
    var nextValues = nextProps.values, nextOtherProps = (0,tslib_es6/* __rest */._T)(nextProps, ["values"]);
    return ((0,utils/* shallowEqual */.wU)(nextValues, values) &&
        (0,utils/* shallowEqual */.wU)(otherProps, nextOtherProps));
}
function FormattedMessage(props) {
    var intl = (0,useIntl/* default */.Z)();
    var formatMessage = intl.formatMessage, _a = intl.textComponent, Text = _a === void 0 ? react.Fragment : _a;
    var id = props.id, description = props.description, defaultMessage = props.defaultMessage, values = props.values, children = props.children, _b = props.tagName, Component = _b === void 0 ? Text : _b, ignoreTag = props.ignoreTag;
    var descriptor = { id: id, description: description, defaultMessage: defaultMessage };
    var nodes = formatMessage(descriptor, values, {
        ignoreTag: ignoreTag,
    });
    if (typeof children === 'function') {
        return children(Array.isArray(nodes) ? nodes : [nodes]);
    }
    if (Component) {
        return react.createElement(Component, null, react.Children.toArray(nodes));
    }
    return react.createElement(react.Fragment, null, nodes);
}
FormattedMessage.displayName = 'FormattedMessage';
var MemoizedFormattedMessage = react.memo(FormattedMessage, areEqual);
MemoizedFormattedMessage.displayName = 'MemoizedFormattedMessage';
/* harmony default export */ const message = (MemoizedFormattedMessage);

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(89548);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(46449);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(96987);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(10574);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(12473);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowRight.mjs
var ArrowRight = __webpack_require__(98);
// EXTERNAL MODULE: ./.cache/admin/src/components/GuidedTour/layout.js
var layout = __webpack_require__(99571);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./.cache/admin/src/components/GuidedTour/constants.js
var constants = __webpack_require__(16334);
// EXTERNAL MODULE: ./.cache/admin/src/components/GuidedTour/Stepper/StepLine.js
var StepLine = __webpack_require__(43234);
// EXTERNAL MODULE: ./.cache/admin/src/components/GuidedTour/Stepper/StepNumber.js
var StepNumber = __webpack_require__(2364);
;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/Homepage/components/Step.js








const StepHomepage = ({ type, title, number, content, hasLine }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { minWidth: (0,dist/* pxToRem */.Q1)(30), marginRight: 5 }, /* @__PURE__ */ react.createElement(StepNumber/* default */.Z, { type, number })), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h3" }, formatMessage(title))), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "flex-start" }, /* @__PURE__ */ react.createElement(
    Flex/* Flex */.k,
    {
      justifyContent: "center",
      minWidth: (0,dist/* pxToRem */.Q1)(30),
      marginBottom: 3,
      marginTop: 3,
      marginRight: 5
    },
    hasLine && /* @__PURE__ */ react.createElement(StepLine/* default */.Z, { type, minHeight: type === constants/* IS_ACTIVE */.lW ? (0,dist/* pxToRem */.Q1)(85) : (0,dist/* pxToRem */.Q1)(65) })
  ), /* @__PURE__ */ react.createElement(Box/* Box */.x, { marginTop: 2 }, type === constants/* IS_ACTIVE */.lW && content)));
};
StepHomepage.defaultProps = {
  content: void 0,
  number: void 0,
  type: constants/* IS_NOT_DONE */.VM,
  hasLine: true
};
StepHomepage.propTypes = {
  content: (prop_types_default()).node,
  number: (prop_types_default()).number,
  title: prop_types_default().shape({
    id: (prop_types_default()).string,
    defaultMessage: (prop_types_default()).string
  }).isRequired,
  type: prop_types_default().oneOf([constants/* IS_ACTIVE */.lW, constants/* IS_DONE */.hx, constants/* IS_NOT_DONE */.VM]),
  hasLine: (prop_types_default()).bool
};
/* harmony default export */ const Step = (StepHomepage);

;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/Homepage/components/Stepper.js





const getType = (activeSectionIndex, index) => {
  if (activeSectionIndex === -1) {
    return constants/* IS_DONE */.hx;
  }
  if (index < activeSectionIndex) {
    return constants/* IS_DONE */.hx;
  }
  if (index > activeSectionIndex) {
    return constants/* IS_NOT_DONE */.VM;
  }
  return constants/* IS_ACTIVE */.lW;
};
const StepperHomepage = ({ sections, currentSectionKey }) => {
  const activeSectionIndex = sections.findIndex((section) => section.key === currentSectionKey);
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, null, sections.map((section, index) => /* @__PURE__ */ react.createElement(
    Step,
    {
      key: section.key,
      title: section.title,
      content: section.content,
      number: index + 1,
      type: getType(activeSectionIndex, index),
      hasLine: index !== sections.length - 1
    }
  )));
};
StepperHomepage.defaultProps = {
  currentSectionKey: void 0
};
StepperHomepage.propTypes = {
  sections: prop_types_default().arrayOf(
    prop_types_default().shape({
      key: (prop_types_default()).string.isRequired,
      title: prop_types_default().shape({
        id: (prop_types_default()).string,
        defaultMessage: (prop_types_default()).string
      }).isRequired,
      content: (prop_types_default()).node
    })
  ).isRequired,
  currentSectionKey: (prop_types_default()).string
};
/* harmony default export */ const Stepper = (StepperHomepage);

;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/Homepage/index.js







const GuidedTourHomepage = () => {
  const { guidedTourState, setSkipped } = (0,dist/* useGuidedTour */.c1)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const sections = Object.entries(layout/* default */.Z).map(([key, val]) => ({
    key,
    title: val.home.title,
    content: /* @__PURE__ */ react.createElement(
      dist/* LinkButton */.Qj,
      {
        onClick: () => trackUsage(val.home.trackingEvent),
        to: val.home.cta.target,
        endIcon: /* @__PURE__ */ react.createElement(ArrowRight/* default */.Z, null)
      },
      formatMessage(val.home.cta.title)
    )
  }));
  const enrichedSections = sections.map((section) => ({
    isDone: Object.entries(guidedTourState[section.key]).every(([, value]) => value),
    ...section
  }));
  const activeSection = enrichedSections.find((section) => !section.isDone)?.key;
  const handleSkip = () => {
    setSkipped(true);
    trackUsage("didSkipGuidedtour");
  };
  return /* @__PURE__ */ react.createElement(
    Box/* Box */.x,
    {
      hasRadius: true,
      shadow: "tableShadow",
      paddingTop: 7,
      paddingRight: 4,
      paddingLeft: 7,
      paddingBottom: 4,
      background: "neutral0"
    },
    /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 6 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "beta", as: "h2" }, formatMessage({
      id: "app.components.GuidedTour.title",
      defaultMessage: "3 steps to get started"
    })), /* @__PURE__ */ react.createElement(Stepper, { sections, currentSectionKey: activeSection })),
    /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "flex-end" }, /* @__PURE__ */ react.createElement(Button/* Button */.z, { variant: "tertiary", onClick: handleSkip }, formatMessage({ id: "app.components.GuidedTour.skip", defaultMessage: "Skip the tour" })))
  );
};
/* harmony default export */ const Homepage = (GuidedTourHomepage);

;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/utils/isGuidedTourCompleted.js
const isGuidedTourCompleted = (guidedTourState) => Object.entries(guidedTourState).every(
  ([, section]) => Object.entries(section).every(([, step]) => step)
);
/* harmony default export */ const utils_isGuidedTourCompleted = (isGuidedTourCompleted);

// EXTERNAL MODULE: ./.cache/admin/src/hooks/useContentTypes/index.js + 1 modules
var useContentTypes = __webpack_require__(92686);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/useEnterprise.ts
var useEnterprise = __webpack_require__(48232);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/assets/corner-ornament.svg
const corner_ornament_namespaceObject = __webpack_require__.p + "7e9af4fb7e723fcebf1f.svg";
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/InformationSquare.mjs
var InformationSquare = __webpack_require__(36311);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/CodeSquare.mjs
var CodeSquare = __webpack_require__(89776);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/PlaySquare.mjs
var PlaySquare = __webpack_require__(76730);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/FeatherSquare.mjs
var FeatherSquare = __webpack_require__(4900);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/assets/strapi-cloud-background.png
const strapi_cloud_background_namespaceObject = __webpack_require__.p + "27d16aefee06412db90a.png";
;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/assets/strapi-cloud-flags.svg
const strapi_cloud_flags_namespaceObject = __webpack_require__.p + "bb4d0d527bdfb161bc5a.svg";
;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/assets/strapi-cloud-icon.svg
const strapi_cloud_icon_namespaceObject = __webpack_require__.p + "bb3108f7fd1e6179bde1.svg";
;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/CloudBox.js








const BlockLink = styled_components_browser_esm["default"].a`
  text-decoration: none;
`;
const CloudCustomWrapper = (0,styled_components_browser_esm["default"])((0,Box/* Box */.x))`
  background-image: url(${({ backgroundImage }) => backgroundImage});
`;
const CloudIconWrapper = (0,styled_components_browser_esm["default"])((0,Flex/* Flex */.k))`
  background: rgba(255, 255, 255, 0.3);
`;
const CloudBox = () => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  return /* @__PURE__ */ react.createElement(
    BlockLink,
    {
      href: "https://cloud.strapi.io",
      target: "_blank",
      rel: "noopener noreferrer nofollow",
      onClick: () => {
        trackUsage("didClickOnTryStrapiCloudSection");
      }
    },
    /* @__PURE__ */ react.createElement(
      Flex/* Flex */.k,
      {
        shadow: "tableShadow",
        hasRadius: true,
        padding: 6,
        background: "neutral0",
        position: "relative",
        gap: 6
      },
      /* @__PURE__ */ react.createElement(CloudCustomWrapper, { backgroundImage: strapi_cloud_background_namespaceObject, hasRadius: true, padding: 3 }, /* @__PURE__ */ react.createElement(
        CloudIconWrapper,
        {
          width: (0,dist/* pxToRem */.Q1)(32),
          height: (0,dist/* pxToRem */.Q1)(32),
          justifyContent: "center",
          hasRadius: true,
          alignItems: "center"
        },
        /* @__PURE__ */ react.createElement(
          "img",
          {
            src: strapi_cloud_icon_namespaceObject,
            alt: formatMessage({
              id: "app.components.BlockLink.cloud",
              defaultMessage: "Strapi Cloud"
            })
          }
        )
      )),
      /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 1, direction: "column", alignItems: "start" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "semiBold", variant: "pi" }, formatMessage({
        id: "app.components.BlockLink.cloud",
        defaultMessage: "Strapi Cloud"
      }))), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral600" }, formatMessage({
        id: "app.components.BlockLink.cloud.content",
        defaultMessage: "A fully composable, and collaborative platform to boost your team velocity."
      })), /* @__PURE__ */ react.createElement(Box/* Box */.x, { src: strapi_cloud_flags_namespaceObject, position: "absolute", top: 0, right: 0, as: "img" }))
    )
  );
};
/* harmony default export */ const HomePage_CloudBox = (CloudBox);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/ContentBlocks.js







const ContentBlocks_BlockLink = styled_components_browser_esm["default"].a`
  text-decoration: none;
`;
const ContentBlocks = () => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const handleClick = (eventName) => {
    trackUsage(eventName);
  };
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 5 }, /* @__PURE__ */ react.createElement(HomePage_CloudBox, null), /* @__PURE__ */ react.createElement(
    ContentBlocks_BlockLink,
    {
      href: "https://strapi.io/resource-center",
      target: "_blank",
      rel: "noopener noreferrer nofollow",
      onClick: () => handleClick("didClickonReadTheDocumentationSection")
    },
    /* @__PURE__ */ react.createElement(
      dist/* ContentBox */.Y_,
      {
        title: formatMessage({
          id: "global.documentation",
          defaultMessage: "Documentation"
        }),
        subtitle: formatMessage({
          id: "app.components.BlockLink.documentation.content",
          defaultMessage: "Discover the essential concepts, guides and instructions."
        }),
        icon: /* @__PURE__ */ react.createElement(InformationSquare/* default */.Z, null),
        iconBackground: "primary100"
      }
    )
  ), /* @__PURE__ */ react.createElement(
    ContentBlocks_BlockLink,
    {
      href: "https://strapi.io/starters",
      target: "_blank",
      rel: "noopener noreferrer nofollow",
      onClick: () => handleClick("didClickonCodeExampleSection")
    },
    /* @__PURE__ */ react.createElement(
      dist/* ContentBox */.Y_,
      {
        title: formatMessage({
          id: "app.components.BlockLink.code",
          defaultMessage: "Code example"
        }),
        subtitle: formatMessage({
          id: "app.components.BlockLink.code.content",
          defaultMessage: "Learn by using ready-made starters for your projects."
        }),
        icon: /* @__PURE__ */ react.createElement(CodeSquare/* default */.Z, null),
        iconBackground: "warning100"
      }
    )
  ), /* @__PURE__ */ react.createElement(
    ContentBlocks_BlockLink,
    {
      href: "https://strapi.io/blog/categories/tutorials",
      target: "_blank",
      rel: "noopener noreferrer nofollow",
      onClick: () => handleClick("didClickonTutorialSection")
    },
    /* @__PURE__ */ react.createElement(
      dist/* ContentBox */.Y_,
      {
        title: formatMessage({
          id: "app.components.BlockLink.tutorial",
          defaultMessage: "Tutorials"
        }),
        subtitle: formatMessage({
          id: "app.components.BlockLink.tutorial.content",
          defaultMessage: "Follow step-by-step instructions to use and customize Strapi."
        }),
        icon: /* @__PURE__ */ react.createElement(PlaySquare/* default */.Z, null),
        iconBackground: "secondary100"
      }
    )
  ), /* @__PURE__ */ react.createElement(
    ContentBlocks_BlockLink,
    {
      href: "https://strapi.io/blog",
      target: "_blank",
      rel: "noopener noreferrer nofollow",
      onClick: () => handleClick("didClickonBlogSection")
    },
    /* @__PURE__ */ react.createElement(
      dist/* ContentBox */.Y_,
      {
        title: formatMessage({
          id: "app.components.BlockLink.blog",
          defaultMessage: "Blog"
        }),
        subtitle: formatMessage({
          id: "app.components.BlockLink.blog.content",
          defaultMessage: "Read the latest news about Strapi and the ecosystem."
        }),
        icon: /* @__PURE__ */ react.createElement(FeatherSquare/* default */.Z, null),
        iconBackground: "alternative100"
      }
    )
  ));
};
/* harmony default export */ const HomePage_ContentBlocks = (ContentBlocks);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/Link/Link.mjs
var Link = __webpack_require__(29430);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/HomeHeader.js







const WordWrap = (0,styled_components_browser_esm["default"])((0,Typography/* Typography */.Z))`
  word-break: break-word;
`;
const HomeHeader = ({ hasCreatedContentType, onCreateCT }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 6, paddingBottom: 10 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "flex-start", gap: 5 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "h1", variant: "alpha" }, hasCreatedContentType ? formatMessage({
    id: "app.components.HomePage.welcome.again",
    defaultMessage: "Welcome \u{1F44B}"
  }) : formatMessage({
    id: "app.components.HomePage.welcome",
    defaultMessage: "Welcome on board!"
  })), /* @__PURE__ */ react.createElement(WordWrap, { textColor: "neutral600", variant: "epsilon" }, hasCreatedContentType ? formatMessage({
    id: "app.components.HomePage.welcomeBlock.content.again",
    defaultMessage: "We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback."
  }) : formatMessage({
    id: "app.components.HomePage.welcomeBlock.content",
    defaultMessage: "Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!"
  })), hasCreatedContentType ? /* @__PURE__ */ react.createElement(Link/* Link */.r, { isExternal: true, href: "https://strapi.io/blog" }, formatMessage({
    id: "app.components.HomePage.button.blog",
    defaultMessage: "See more on the blog"
  })) : /* @__PURE__ */ react.createElement(Button/* Button */.z, { size: "L", onClick: onCreateCT, endIcon: /* @__PURE__ */ react.createElement(ArrowRight/* default */.Z, null) }, formatMessage({
    id: "app.components.HomePage.create",
    defaultMessage: "Create your first Content type"
  })))));
};
HomeHeader.defaultProps = {
  hasCreatedContentType: void 0,
  onCreateCT: void 0
};
HomeHeader.propTypes = {
  hasCreatedContentType: (prop_types_default()).bool,
  onCreateCT: (prop_types_default()).func
};
/* harmony default export */ const HomePage_HomeHeader = (HomeHeader);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/LinkButton/LinkButton.mjs
var LinkButton = __webpack_require__(94101);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Discord.mjs
var Discord = __webpack_require__(77190);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Reddit.mjs
var Reddit = __webpack_require__(67008);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Strapi.mjs
var Strapi = __webpack_require__(61193);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Twitter.mjs
var Twitter = __webpack_require__(32765);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Discourse.mjs
var Discourse = __webpack_require__(13956);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Github.mjs
var Github = __webpack_require__(10778);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ExternalLink.mjs
var ExternalLink = __webpack_require__(62577);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/SocialLinks.js







const StyledDiscord = (0,styled_components_browser_esm["default"])((0,Discord/* default */.Z))`
  path {
    fill: #7289da !important;
  }
`;
const StyledReddit = (0,styled_components_browser_esm["default"])((0,Reddit/* default */.Z))`
  > path:first-child {
    fill: #ff4500;
  }
`;
const StyledStrapi = (0,styled_components_browser_esm["default"])((0,Strapi/* default */.Z))`
  > path:first-child {
    fill: #4945ff;
  }
  > path:nth-child(2) {
    fill: #fff;
  }
  > path:nth-child(4) {
    fill: #9593ff;
  }
`;
const StyledTwitter = (0,styled_components_browser_esm["default"])((0,Twitter/* default */.Z))`
  path {
    fill: #1da1f2 !important;
  }
`;
const StyledDiscourse = (0,styled_components_browser_esm["default"])((0,Discourse/* default */.Z))`
  > path:first-child {
    fill: #231f20;
  }
  > path:nth-child(2) {
    fill: #fff9ae;
  }
  > path:nth-child(3) {
    fill: #00aeef;
  }
  > path:nth-child(4) {
    fill: #00a94f;
  }
  > path:nth-child(5) {
    fill: #f15d22;
  }
  > path:nth-child(6) {
    fill: #e31b23;
  }
`;
const socialLinks = [
  {
    name: { id: "app.components.HomePage.community.links.github", defaultMessage: "Github" },
    link: "https://github.com/strapi/strapi/",
    icon: /* @__PURE__ */ react.createElement(Github/* default */.Z, { fill: "#7289DA" }),
    alt: "github"
  },
  {
    name: { id: "app.components.HomePage.community.links.discord", defaultMessage: "Discord" },
    link: "https://discord.strapi.io/",
    icon: /* @__PURE__ */ react.createElement(StyledDiscord, null),
    alt: "discord"
  },
  {
    name: { id: "app.components.HomePage.community.links.reddit", defaultMessage: "Reddit" },
    link: "https://www.reddit.com/r/Strapi/",
    icon: /* @__PURE__ */ react.createElement(StyledReddit, null),
    alt: "reddit"
  },
  {
    name: { id: "app.components.HomePage.community.links.twitter", defaultMessage: "Twitter" },
    link: "https://twitter.com/strapijs",
    icon: /* @__PURE__ */ react.createElement(StyledTwitter, null),
    alt: "twitter"
  },
  {
    name: { id: "app.components.HomePage.community.links.forum", defaultMessage: "Forum" },
    link: "https://forum.strapi.io",
    icon: /* @__PURE__ */ react.createElement(StyledDiscourse, null),
    alt: "forum"
  },
  {
    name: { id: "app.components.HomePage.community.links.blog", defaultMessage: "Blog" },
    link: "https://strapi.io/blog?utm_source=referral&utm_medium=admin&utm_campaign=career%20page",
    icon: /* @__PURE__ */ react.createElement(StyledStrapi, null),
    alt: "blog"
  },
  {
    name: {
      id: "app.components.HomePage.community.links.career",
      defaultMessage: "We are hiring!"
    },
    link: "https://strapi.io/careers?utm_source=referral&utm_medium=admin&utm_campaign=blog",
    icon: /* @__PURE__ */ react.createElement(StyledStrapi, null),
    alt: "career"
  }
];
const LinkCustom = (0,styled_components_browser_esm["default"])((0,LinkButton/* LinkButton */.Q))`
  display: flex;
  align-items: center;
  border: none;

  svg {
    width: ${({ theme }) => theme.spaces[6]};
    height: ${({ theme }) => theme.spaces[6]};
  }

  span {
    word-break: keep-all;
  }
`;
const GridGap = (0,styled_components_browser_esm["default"])((0,Grid/* Grid */.r))`
  row-gap: ${({ theme }) => theme.spaces[2]};
  column-gap: ${({ theme }) => theme.spaces[4]};
`;
const SocialLinks = () => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { communityEdition } = (0,dist/* useAppInfo */.L7)();
  const socialLinksExtended = [
    ...socialLinks,
    {
      icon: /* @__PURE__ */ react.createElement(StyledStrapi, null),
      link: communityEdition ? "https://discord.strapi.io" : "https://support.strapi.io/support/home",
      name: {
        id: "Settings.application.get-help",
        defaultMessage: "Get help"
      }
    }
  ];
  return /* @__PURE__ */ react.createElement(
    Box/* Box */.x,
    {
      as: "aside",
      "aria-labelledby": "join-the-community",
      background: "neutral0",
      hasRadius: true,
      paddingRight: 5,
      paddingLeft: 5,
      paddingTop: 6,
      paddingBottom: 6,
      shadow: "tableShadow"
    },
    /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingBottom: 7 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 5 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 3 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h2", id: "join-the-community" }, formatMessage({
      id: "app.components.HomePage.community",
      defaultMessage: "Join the community"
    })), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral600" }, formatMessage({
      id: "app.components.HomePage.community.content",
      defaultMessage: "Discuss with team members, contributors and developers on different channels"
    }))), /* @__PURE__ */ react.createElement(Link/* Link */.r, { href: "https://feedback.strapi.io/", isExternal: true, endIcon: /* @__PURE__ */ react.createElement(ExternalLink/* default */.Z, null) }, formatMessage({
      id: "app.components.HomePage.roadmap",
      defaultMessage: "See our road map"
    })))),
    /* @__PURE__ */ react.createElement(GridGap, null, socialLinksExtended.map(({ icon, link, name }) => {
      return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12, key: name.id }, /* @__PURE__ */ react.createElement(LinkCustom, { size: "L", startIcon: icon, variant: "tertiary", href: link, isExternal: true }, formatMessage(name)));
    }))
  );
};
/* harmony default export */ const HomePage_SocialLinks = (SocialLinks);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/index.js















const LogoContainer = (0,styled_components_browser_esm["default"])((0,Box/* Box */.x))`
  position: absolute;
  top: 0;
  right: 0;

  img {
    width: ${150 / 16}rem;
  }
`;
const HomePageCE = () => {
  const { collectionTypes, singleTypes, isLoading: isLoadingForModels } = (0,useContentTypes/* useContentTypes */.G)();
  const { guidedTourState, isGuidedTourVisible, isSkipped } = (0,dist/* useGuidedTour */.c1)();
  const showGuidedTour = !utils_isGuidedTourCompleted(guidedTourState) && isGuidedTourVisible && !isSkipped;
  const { push } = (0,react_router/* useHistory */.k6)();
  const handleClick = (e) => {
    e.preventDefault();
    push("/plugins/content-type-builder/content-types/create-content-type");
  };
  const hasAlreadyCreatedContentTypes = (0,react.useMemo)(() => {
    const filterContentTypes = (contentTypes) => contentTypes.filter((c) => c.isDisplayed);
    return filterContentTypes(collectionTypes).length > 1 || filterContentTypes(singleTypes).length > 0;
  }, [collectionTypes, singleTypes]);
  if (isLoadingForModels) {
    return /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null);
  }
  return /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(message, { id: "HomePage.helmet.title", defaultMessage: "Homepage" }, (title) => /* @__PURE__ */ react.createElement(Helmet/* Helmet */.q, { title: title[0] })), /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement(LogoContainer, null, /* @__PURE__ */ react.createElement("img", { alt: "", "aria-hidden": true, src: corner_ornament_namespaceObject })), /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 10 }, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, null, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 8, s: 12 }, /* @__PURE__ */ react.createElement(
    HomePage_HomeHeader,
    {
      onCreateCT: handleClick,
      hasCreatedContentType: hasAlreadyCreatedContentTypes
    }
  ))), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 6 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 8, s: 12 }, showGuidedTour ? /* @__PURE__ */ react.createElement(Homepage, null) : /* @__PURE__ */ react.createElement(HomePage_ContentBlocks, null)), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 4, s: 12 }, /* @__PURE__ */ react.createElement(HomePage_SocialLinks, null))))));
};
function HomePageSwitch() {
  const HomePage = (0,useEnterprise/* useEnterprise */.c)(
    HomePageCE,
    // eslint-disable-next-line import/no-cycle
    async () => (await __webpack_require__.e(/* import() */ 8296).then(__webpack_require__.bind(__webpack_require__, 66831))).HomePageEE
  );
  if (!HomePage) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(HomePage, null);
}
/* harmony default export */ const HomePage = (HomePageSwitch);


/***/ }),

/***/ 71590:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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




/***/ })

}]);