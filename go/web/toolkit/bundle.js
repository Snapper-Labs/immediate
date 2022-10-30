"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i5 = decorators.length - 1, decorator; i5 >= 0; i5--)
      if (decorator = decorators[i5])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // node_modules/showdown/dist/showdown.js
  var require_showdown = __commonJS({
    "node_modules/showdown/dist/showdown.js"(exports, module) {
      (function() {
        function getDefaultOpts(simple) {
          "use strict";
          var defaultOptions = {
            omitExtraWLInCodeBlocks: {
              defaultValue: false,
              describe: "Omit the default extra whiteline added to code blocks",
              type: "boolean"
            },
            noHeaderId: {
              defaultValue: false,
              describe: "Turn on/off generated header id",
              type: "boolean"
            },
            prefixHeaderId: {
              defaultValue: false,
              describe: "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
              type: "string"
            },
            rawPrefixHeaderId: {
              defaultValue: false,
              describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
              type: "boolean"
            },
            ghCompatibleHeaderId: {
              defaultValue: false,
              describe: "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
              type: "boolean"
            },
            rawHeaderId: {
              defaultValue: false,
              describe: `Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids`,
              type: "boolean"
            },
            headerLevelStart: {
              defaultValue: false,
              describe: "The header blocks level start",
              type: "integer"
            },
            parseImgDimensions: {
              defaultValue: false,
              describe: "Turn on/off image dimension parsing",
              type: "boolean"
            },
            simplifiedAutoLink: {
              defaultValue: false,
              describe: "Turn on/off GFM autolink style",
              type: "boolean"
            },
            excludeTrailingPunctuationFromURLs: {
              defaultValue: false,
              describe: "Excludes trailing punctuation from links generated with autoLinking",
              type: "boolean"
            },
            literalMidWordUnderscores: {
              defaultValue: false,
              describe: "Parse midword underscores as literal underscores",
              type: "boolean"
            },
            literalMidWordAsterisks: {
              defaultValue: false,
              describe: "Parse midword asterisks as literal asterisks",
              type: "boolean"
            },
            strikethrough: {
              defaultValue: false,
              describe: "Turn on/off strikethrough support",
              type: "boolean"
            },
            tables: {
              defaultValue: false,
              describe: "Turn on/off tables support",
              type: "boolean"
            },
            tablesHeaderId: {
              defaultValue: false,
              describe: "Add an id to table headers",
              type: "boolean"
            },
            ghCodeBlocks: {
              defaultValue: true,
              describe: "Turn on/off GFM fenced code blocks support",
              type: "boolean"
            },
            tasklists: {
              defaultValue: false,
              describe: "Turn on/off GFM tasklist support",
              type: "boolean"
            },
            smoothLivePreview: {
              defaultValue: false,
              describe: "Prevents weird effects in live previews due to incomplete input",
              type: "boolean"
            },
            smartIndentationFix: {
              defaultValue: false,
              describe: "Tries to smartly fix indentation in es6 strings",
              type: "boolean"
            },
            disableForced4SpacesIndentedSublists: {
              defaultValue: false,
              describe: "Disables the requirement of indenting nested sublists by 4 spaces",
              type: "boolean"
            },
            simpleLineBreaks: {
              defaultValue: false,
              describe: "Parses simple line breaks as <br> (GFM Style)",
              type: "boolean"
            },
            requireSpaceBeforeHeadingText: {
              defaultValue: false,
              describe: "Makes adding a space between `#` and the header text mandatory (GFM Style)",
              type: "boolean"
            },
            ghMentions: {
              defaultValue: false,
              describe: "Enables github @mentions",
              type: "boolean"
            },
            ghMentionsLink: {
              defaultValue: "https://github.com/{u}",
              describe: "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
              type: "string"
            },
            encodeEmails: {
              defaultValue: true,
              describe: "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
              type: "boolean"
            },
            openLinksInNewWindow: {
              defaultValue: false,
              describe: "Open all links in new windows",
              type: "boolean"
            },
            backslashEscapesHTMLTags: {
              defaultValue: false,
              describe: "Support for HTML Tag escaping. ex: <div>foo</div>",
              type: "boolean"
            },
            emoji: {
              defaultValue: false,
              describe: "Enable emoji support. Ex: `this is a :smile: emoji`",
              type: "boolean"
            },
            underline: {
              defaultValue: false,
              describe: "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
              type: "boolean"
            },
            ellipsis: {
              defaultValue: true,
              describe: "Replaces three dots with the ellipsis unicode character",
              type: "boolean"
            },
            completeHTMLDocument: {
              defaultValue: false,
              describe: "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
              type: "boolean"
            },
            metadata: {
              defaultValue: false,
              describe: "Enable support for document metadata (defined at the top of the document between `\xAB\xAB\xAB` and `\xBB\xBB\xBB` or between `---` and `---`).",
              type: "boolean"
            },
            splitAdjacentBlockquotes: {
              defaultValue: false,
              describe: "Split adjacent blockquote blocks",
              type: "boolean"
            }
          };
          if (simple === false) {
            return JSON.parse(JSON.stringify(defaultOptions));
          }
          var ret = {};
          for (var opt in defaultOptions) {
            if (defaultOptions.hasOwnProperty(opt)) {
              ret[opt] = defaultOptions[opt].defaultValue;
            }
          }
          return ret;
        }
        function allOptionsOn() {
          "use strict";
          var options = getDefaultOpts(true), ret = {};
          for (var opt in options) {
            if (options.hasOwnProperty(opt)) {
              ret[opt] = true;
            }
          }
          return ret;
        }
        var showdown2 = {}, parsers = {}, extensions = {}, globalOptions = getDefaultOpts(true), setFlavor = "vanilla", flavor = {
          github: {
            omitExtraWLInCodeBlocks: true,
            simplifiedAutoLink: true,
            excludeTrailingPunctuationFromURLs: true,
            literalMidWordUnderscores: true,
            strikethrough: true,
            tables: true,
            tablesHeaderId: true,
            ghCodeBlocks: true,
            tasklists: true,
            disableForced4SpacesIndentedSublists: true,
            simpleLineBreaks: true,
            requireSpaceBeforeHeadingText: true,
            ghCompatibleHeaderId: true,
            ghMentions: true,
            backslashEscapesHTMLTags: true,
            emoji: true,
            splitAdjacentBlockquotes: true
          },
          original: {
            noHeaderId: true,
            ghCodeBlocks: false
          },
          ghost: {
            omitExtraWLInCodeBlocks: true,
            parseImgDimensions: true,
            simplifiedAutoLink: true,
            excludeTrailingPunctuationFromURLs: true,
            literalMidWordUnderscores: true,
            strikethrough: true,
            tables: true,
            tablesHeaderId: true,
            ghCodeBlocks: true,
            tasklists: true,
            smoothLivePreview: true,
            simpleLineBreaks: true,
            requireSpaceBeforeHeadingText: true,
            ghMentions: false,
            encodeEmails: true
          },
          vanilla: getDefaultOpts(true),
          allOn: allOptionsOn()
        };
        showdown2.helper = {};
        showdown2.extensions = {};
        showdown2.setOption = function(key, value) {
          "use strict";
          globalOptions[key] = value;
          return this;
        };
        showdown2.getOption = function(key) {
          "use strict";
          return globalOptions[key];
        };
        showdown2.getOptions = function() {
          "use strict";
          return globalOptions;
        };
        showdown2.resetOptions = function() {
          "use strict";
          globalOptions = getDefaultOpts(true);
        };
        showdown2.setFlavor = function(name) {
          "use strict";
          if (!flavor.hasOwnProperty(name)) {
            throw Error(name + " flavor was not found");
          }
          showdown2.resetOptions();
          var preset = flavor[name];
          setFlavor = name;
          for (var option in preset) {
            if (preset.hasOwnProperty(option)) {
              globalOptions[option] = preset[option];
            }
          }
        };
        showdown2.getFlavor = function() {
          "use strict";
          return setFlavor;
        };
        showdown2.getFlavorOptions = function(name) {
          "use strict";
          if (flavor.hasOwnProperty(name)) {
            return flavor[name];
          }
        };
        showdown2.getDefaultOptions = function(simple) {
          "use strict";
          return getDefaultOpts(simple);
        };
        showdown2.subParser = function(name, func) {
          "use strict";
          if (showdown2.helper.isString(name)) {
            if (typeof func !== "undefined") {
              parsers[name] = func;
            } else {
              if (parsers.hasOwnProperty(name)) {
                return parsers[name];
              } else {
                throw Error("SubParser named " + name + " not registered!");
              }
            }
          }
        };
        showdown2.extension = function(name, ext) {
          "use strict";
          if (!showdown2.helper.isString(name)) {
            throw Error("Extension 'name' must be a string");
          }
          name = showdown2.helper.stdExtName(name);
          if (showdown2.helper.isUndefined(ext)) {
            if (!extensions.hasOwnProperty(name)) {
              throw Error("Extension named " + name + " is not registered!");
            }
            return extensions[name];
          } else {
            if (typeof ext === "function") {
              ext = ext();
            }
            if (!showdown2.helper.isArray(ext)) {
              ext = [ext];
            }
            var validExtension = validate(ext, name);
            if (validExtension.valid) {
              extensions[name] = ext;
            } else {
              throw Error(validExtension.error);
            }
          }
        };
        showdown2.getAllExtensions = function() {
          "use strict";
          return extensions;
        };
        showdown2.removeExtension = function(name) {
          "use strict";
          delete extensions[name];
        };
        showdown2.resetExtensions = function() {
          "use strict";
          extensions = {};
        };
        function validate(extension, name) {
          "use strict";
          var errMsg = name ? "Error in " + name + " extension->" : "Error in unnamed extension", ret = {
            valid: true,
            error: ""
          };
          if (!showdown2.helper.isArray(extension)) {
            extension = [extension];
          }
          for (var i5 = 0; i5 < extension.length; ++i5) {
            var baseMsg = errMsg + " sub-extension " + i5 + ": ", ext = extension[i5];
            if (typeof ext !== "object") {
              ret.valid = false;
              ret.error = baseMsg + "must be an object, but " + typeof ext + " given";
              return ret;
            }
            if (!showdown2.helper.isString(ext.type)) {
              ret.valid = false;
              ret.error = baseMsg + 'property "type" must be a string, but ' + typeof ext.type + " given";
              return ret;
            }
            var type = ext.type = ext.type.toLowerCase();
            if (type === "language") {
              type = ext.type = "lang";
            }
            if (type === "html") {
              type = ext.type = "output";
            }
            if (type !== "lang" && type !== "output" && type !== "listener") {
              ret.valid = false;
              ret.error = baseMsg + "type " + type + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"';
              return ret;
            }
            if (type === "listener") {
              if (showdown2.helper.isUndefined(ext.listeners)) {
                ret.valid = false;
                ret.error = baseMsg + '. Extensions of type "listener" must have a property called "listeners"';
                return ret;
              }
            } else {
              if (showdown2.helper.isUndefined(ext.filter) && showdown2.helper.isUndefined(ext.regex)) {
                ret.valid = false;
                ret.error = baseMsg + type + ' extensions must define either a "regex" property or a "filter" method';
                return ret;
              }
            }
            if (ext.listeners) {
              if (typeof ext.listeners !== "object") {
                ret.valid = false;
                ret.error = baseMsg + '"listeners" property must be an object but ' + typeof ext.listeners + " given";
                return ret;
              }
              for (var ln in ext.listeners) {
                if (ext.listeners.hasOwnProperty(ln)) {
                  if (typeof ext.listeners[ln] !== "function") {
                    ret.valid = false;
                    ret.error = baseMsg + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + ln + " must be a function but " + typeof ext.listeners[ln] + " given";
                    return ret;
                  }
                }
              }
            }
            if (ext.filter) {
              if (typeof ext.filter !== "function") {
                ret.valid = false;
                ret.error = baseMsg + '"filter" must be a function, but ' + typeof ext.filter + " given";
                return ret;
              }
            } else if (ext.regex) {
              if (showdown2.helper.isString(ext.regex)) {
                ext.regex = new RegExp(ext.regex, "g");
              }
              if (!(ext.regex instanceof RegExp)) {
                ret.valid = false;
                ret.error = baseMsg + '"regex" property must either be a string or a RegExp object, but ' + typeof ext.regex + " given";
                return ret;
              }
              if (showdown2.helper.isUndefined(ext.replace)) {
                ret.valid = false;
                ret.error = baseMsg + '"regex" extensions must implement a replace string or function';
                return ret;
              }
            }
          }
          return ret;
        }
        showdown2.validateExtension = function(ext) {
          "use strict";
          var validateExtension = validate(ext, null);
          if (!validateExtension.valid) {
            console.warn(validateExtension.error);
            return false;
          }
          return true;
        };
        if (!showdown2.hasOwnProperty("helper")) {
          showdown2.helper = {};
        }
        showdown2.helper.isString = function(a3) {
          "use strict";
          return typeof a3 === "string" || a3 instanceof String;
        };
        showdown2.helper.isFunction = function(a3) {
          "use strict";
          var getType = {};
          return a3 && getType.toString.call(a3) === "[object Function]";
        };
        showdown2.helper.isArray = function(a3) {
          "use strict";
          return Array.isArray(a3);
        };
        showdown2.helper.isUndefined = function(value) {
          "use strict";
          return typeof value === "undefined";
        };
        showdown2.helper.forEach = function(obj, callback) {
          "use strict";
          if (showdown2.helper.isUndefined(obj)) {
            throw new Error("obj param is required");
          }
          if (showdown2.helper.isUndefined(callback)) {
            throw new Error("callback param is required");
          }
          if (!showdown2.helper.isFunction(callback)) {
            throw new Error("callback param must be a function/closure");
          }
          if (typeof obj.forEach === "function") {
            obj.forEach(callback);
          } else if (showdown2.helper.isArray(obj)) {
            for (var i5 = 0; i5 < obj.length; i5++) {
              callback(obj[i5], i5, obj);
            }
          } else if (typeof obj === "object") {
            for (var prop in obj) {
              if (obj.hasOwnProperty(prop)) {
                callback(obj[prop], prop, obj);
              }
            }
          } else {
            throw new Error("obj does not seem to be an array or an iterable object");
          }
        };
        showdown2.helper.stdExtName = function(s5) {
          "use strict";
          return s5.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase();
        };
        function escapeCharactersCallback(wholeMatch, m1) {
          "use strict";
          var charCodeToEscape = m1.charCodeAt(0);
          return "\xA8E" + charCodeToEscape + "E";
        }
        showdown2.helper.escapeCharactersCallback = escapeCharactersCallback;
        showdown2.helper.escapeCharacters = function(text, charsToEscape, afterBackslash) {
          "use strict";
          var regexString = "([" + charsToEscape.replace(/([\[\]\\])/g, "\\$1") + "])";
          if (afterBackslash) {
            regexString = "\\\\" + regexString;
          }
          var regex = new RegExp(regexString, "g");
          text = text.replace(regex, escapeCharactersCallback);
          return text;
        };
        showdown2.helper.unescapeHTMLEntities = function(txt) {
          "use strict";
          return txt.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
        };
        var rgxFindMatchPos = function(str, left, right, flags) {
          "use strict";
          var f2 = flags || "", g2 = f2.indexOf("g") > -1, x2 = new RegExp(left + "|" + right, "g" + f2.replace(/g/g, "")), l5 = new RegExp(left, f2.replace(/g/g, "")), pos = [], t4, s5, m2, start, end;
          do {
            t4 = 0;
            while (m2 = x2.exec(str)) {
              if (l5.test(m2[0])) {
                if (!t4++) {
                  s5 = x2.lastIndex;
                  start = s5 - m2[0].length;
                }
              } else if (t4) {
                if (!--t4) {
                  end = m2.index + m2[0].length;
                  var obj = {
                    left: { start, end: s5 },
                    match: { start: s5, end: m2.index },
                    right: { start: m2.index, end },
                    wholeMatch: { start, end }
                  };
                  pos.push(obj);
                  if (!g2) {
                    return pos;
                  }
                }
              }
            }
          } while (t4 && (x2.lastIndex = s5));
          return pos;
        };
        showdown2.helper.matchRecursiveRegExp = function(str, left, right, flags) {
          "use strict";
          var matchPos = rgxFindMatchPos(str, left, right, flags), results = [];
          for (var i5 = 0; i5 < matchPos.length; ++i5) {
            results.push([
              str.slice(matchPos[i5].wholeMatch.start, matchPos[i5].wholeMatch.end),
              str.slice(matchPos[i5].match.start, matchPos[i5].match.end),
              str.slice(matchPos[i5].left.start, matchPos[i5].left.end),
              str.slice(matchPos[i5].right.start, matchPos[i5].right.end)
            ]);
          }
          return results;
        };
        showdown2.helper.replaceRecursiveRegExp = function(str, replacement, left, right, flags) {
          "use strict";
          if (!showdown2.helper.isFunction(replacement)) {
            var repStr = replacement;
            replacement = function() {
              return repStr;
            };
          }
          var matchPos = rgxFindMatchPos(str, left, right, flags), finalStr = str, lng = matchPos.length;
          if (lng > 0) {
            var bits = [];
            if (matchPos[0].wholeMatch.start !== 0) {
              bits.push(str.slice(0, matchPos[0].wholeMatch.start));
            }
            for (var i5 = 0; i5 < lng; ++i5) {
              bits.push(
                replacement(
                  str.slice(matchPos[i5].wholeMatch.start, matchPos[i5].wholeMatch.end),
                  str.slice(matchPos[i5].match.start, matchPos[i5].match.end),
                  str.slice(matchPos[i5].left.start, matchPos[i5].left.end),
                  str.slice(matchPos[i5].right.start, matchPos[i5].right.end)
                )
              );
              if (i5 < lng - 1) {
                bits.push(str.slice(matchPos[i5].wholeMatch.end, matchPos[i5 + 1].wholeMatch.start));
              }
            }
            if (matchPos[lng - 1].wholeMatch.end < str.length) {
              bits.push(str.slice(matchPos[lng - 1].wholeMatch.end));
            }
            finalStr = bits.join("");
          }
          return finalStr;
        };
        showdown2.helper.regexIndexOf = function(str, regex, fromIndex) {
          "use strict";
          if (!showdown2.helper.isString(str)) {
            throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
          }
          if (regex instanceof RegExp === false) {
            throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
          }
          var indexOf = str.substring(fromIndex || 0).search(regex);
          return indexOf >= 0 ? indexOf + (fromIndex || 0) : indexOf;
        };
        showdown2.helper.splitAtIndex = function(str, index) {
          "use strict";
          if (!showdown2.helper.isString(str)) {
            throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
          }
          return [str.substring(0, index), str.substring(index)];
        };
        showdown2.helper.encodeEmailAddress = function(mail) {
          "use strict";
          var encode = [
            function(ch) {
              return "&#" + ch.charCodeAt(0) + ";";
            },
            function(ch) {
              return "&#x" + ch.charCodeAt(0).toString(16) + ";";
            },
            function(ch) {
              return ch;
            }
          ];
          mail = mail.replace(/./g, function(ch) {
            if (ch === "@") {
              ch = encode[Math.floor(Math.random() * 2)](ch);
            } else {
              var r4 = Math.random();
              ch = r4 > 0.9 ? encode[2](ch) : r4 > 0.45 ? encode[1](ch) : encode[0](ch);
            }
            return ch;
          });
          return mail;
        };
        showdown2.helper.padEnd = function padEnd(str, targetLength, padString) {
          "use strict";
          targetLength = targetLength >> 0;
          padString = String(padString || " ");
          if (str.length > targetLength) {
            return String(str);
          } else {
            targetLength = targetLength - str.length;
            if (targetLength > padString.length) {
              padString += padString.repeat(targetLength / padString.length);
            }
            return String(str) + padString.slice(0, targetLength);
          }
        };
        if (typeof console === "undefined") {
          console = {
            warn: function(msg) {
              "use strict";
              alert(msg);
            },
            log: function(msg) {
              "use strict";
              alert(msg);
            },
            error: function(msg) {
              "use strict";
              throw msg;
            }
          };
        }
        showdown2.helper.regexes = {
          asteriskDashAndColon: /([*_:~])/g
        };
        showdown2.helper.emojis = {
          "+1": "\u{1F44D}",
          "-1": "\u{1F44E}",
          "100": "\u{1F4AF}",
          "1234": "\u{1F522}",
          "1st_place_medal": "\u{1F947}",
          "2nd_place_medal": "\u{1F948}",
          "3rd_place_medal": "\u{1F949}",
          "8ball": "\u{1F3B1}",
          "a": "\u{1F170}\uFE0F",
          "ab": "\u{1F18E}",
          "abc": "\u{1F524}",
          "abcd": "\u{1F521}",
          "accept": "\u{1F251}",
          "aerial_tramway": "\u{1F6A1}",
          "airplane": "\u2708\uFE0F",
          "alarm_clock": "\u23F0",
          "alembic": "\u2697\uFE0F",
          "alien": "\u{1F47D}",
          "ambulance": "\u{1F691}",
          "amphora": "\u{1F3FA}",
          "anchor": "\u2693\uFE0F",
          "angel": "\u{1F47C}",
          "anger": "\u{1F4A2}",
          "angry": "\u{1F620}",
          "anguished": "\u{1F627}",
          "ant": "\u{1F41C}",
          "apple": "\u{1F34E}",
          "aquarius": "\u2652\uFE0F",
          "aries": "\u2648\uFE0F",
          "arrow_backward": "\u25C0\uFE0F",
          "arrow_double_down": "\u23EC",
          "arrow_double_up": "\u23EB",
          "arrow_down": "\u2B07\uFE0F",
          "arrow_down_small": "\u{1F53D}",
          "arrow_forward": "\u25B6\uFE0F",
          "arrow_heading_down": "\u2935\uFE0F",
          "arrow_heading_up": "\u2934\uFE0F",
          "arrow_left": "\u2B05\uFE0F",
          "arrow_lower_left": "\u2199\uFE0F",
          "arrow_lower_right": "\u2198\uFE0F",
          "arrow_right": "\u27A1\uFE0F",
          "arrow_right_hook": "\u21AA\uFE0F",
          "arrow_up": "\u2B06\uFE0F",
          "arrow_up_down": "\u2195\uFE0F",
          "arrow_up_small": "\u{1F53C}",
          "arrow_upper_left": "\u2196\uFE0F",
          "arrow_upper_right": "\u2197\uFE0F",
          "arrows_clockwise": "\u{1F503}",
          "arrows_counterclockwise": "\u{1F504}",
          "art": "\u{1F3A8}",
          "articulated_lorry": "\u{1F69B}",
          "artificial_satellite": "\u{1F6F0}",
          "astonished": "\u{1F632}",
          "athletic_shoe": "\u{1F45F}",
          "atm": "\u{1F3E7}",
          "atom_symbol": "\u269B\uFE0F",
          "avocado": "\u{1F951}",
          "b": "\u{1F171}\uFE0F",
          "baby": "\u{1F476}",
          "baby_bottle": "\u{1F37C}",
          "baby_chick": "\u{1F424}",
          "baby_symbol": "\u{1F6BC}",
          "back": "\u{1F519}",
          "bacon": "\u{1F953}",
          "badminton": "\u{1F3F8}",
          "baggage_claim": "\u{1F6C4}",
          "baguette_bread": "\u{1F956}",
          "balance_scale": "\u2696\uFE0F",
          "balloon": "\u{1F388}",
          "ballot_box": "\u{1F5F3}",
          "ballot_box_with_check": "\u2611\uFE0F",
          "bamboo": "\u{1F38D}",
          "banana": "\u{1F34C}",
          "bangbang": "\u203C\uFE0F",
          "bank": "\u{1F3E6}",
          "bar_chart": "\u{1F4CA}",
          "barber": "\u{1F488}",
          "baseball": "\u26BE\uFE0F",
          "basketball": "\u{1F3C0}",
          "basketball_man": "\u26F9\uFE0F",
          "basketball_woman": "\u26F9\uFE0F&zwj;\u2640\uFE0F",
          "bat": "\u{1F987}",
          "bath": "\u{1F6C0}",
          "bathtub": "\u{1F6C1}",
          "battery": "\u{1F50B}",
          "beach_umbrella": "\u{1F3D6}",
          "bear": "\u{1F43B}",
          "bed": "\u{1F6CF}",
          "bee": "\u{1F41D}",
          "beer": "\u{1F37A}",
          "beers": "\u{1F37B}",
          "beetle": "\u{1F41E}",
          "beginner": "\u{1F530}",
          "bell": "\u{1F514}",
          "bellhop_bell": "\u{1F6CE}",
          "bento": "\u{1F371}",
          "biking_man": "\u{1F6B4}",
          "bike": "\u{1F6B2}",
          "biking_woman": "\u{1F6B4}&zwj;\u2640\uFE0F",
          "bikini": "\u{1F459}",
          "biohazard": "\u2623\uFE0F",
          "bird": "\u{1F426}",
          "birthday": "\u{1F382}",
          "black_circle": "\u26AB\uFE0F",
          "black_flag": "\u{1F3F4}",
          "black_heart": "\u{1F5A4}",
          "black_joker": "\u{1F0CF}",
          "black_large_square": "\u2B1B\uFE0F",
          "black_medium_small_square": "\u25FE\uFE0F",
          "black_medium_square": "\u25FC\uFE0F",
          "black_nib": "\u2712\uFE0F",
          "black_small_square": "\u25AA\uFE0F",
          "black_square_button": "\u{1F532}",
          "blonde_man": "\u{1F471}",
          "blonde_woman": "\u{1F471}&zwj;\u2640\uFE0F",
          "blossom": "\u{1F33C}",
          "blowfish": "\u{1F421}",
          "blue_book": "\u{1F4D8}",
          "blue_car": "\u{1F699}",
          "blue_heart": "\u{1F499}",
          "blush": "\u{1F60A}",
          "boar": "\u{1F417}",
          "boat": "\u26F5\uFE0F",
          "bomb": "\u{1F4A3}",
          "book": "\u{1F4D6}",
          "bookmark": "\u{1F516}",
          "bookmark_tabs": "\u{1F4D1}",
          "books": "\u{1F4DA}",
          "boom": "\u{1F4A5}",
          "boot": "\u{1F462}",
          "bouquet": "\u{1F490}",
          "bowing_man": "\u{1F647}",
          "bow_and_arrow": "\u{1F3F9}",
          "bowing_woman": "\u{1F647}&zwj;\u2640\uFE0F",
          "bowling": "\u{1F3B3}",
          "boxing_glove": "\u{1F94A}",
          "boy": "\u{1F466}",
          "bread": "\u{1F35E}",
          "bride_with_veil": "\u{1F470}",
          "bridge_at_night": "\u{1F309}",
          "briefcase": "\u{1F4BC}",
          "broken_heart": "\u{1F494}",
          "bug": "\u{1F41B}",
          "building_construction": "\u{1F3D7}",
          "bulb": "\u{1F4A1}",
          "bullettrain_front": "\u{1F685}",
          "bullettrain_side": "\u{1F684}",
          "burrito": "\u{1F32F}",
          "bus": "\u{1F68C}",
          "business_suit_levitating": "\u{1F574}",
          "busstop": "\u{1F68F}",
          "bust_in_silhouette": "\u{1F464}",
          "busts_in_silhouette": "\u{1F465}",
          "butterfly": "\u{1F98B}",
          "cactus": "\u{1F335}",
          "cake": "\u{1F370}",
          "calendar": "\u{1F4C6}",
          "call_me_hand": "\u{1F919}",
          "calling": "\u{1F4F2}",
          "camel": "\u{1F42B}",
          "camera": "\u{1F4F7}",
          "camera_flash": "\u{1F4F8}",
          "camping": "\u{1F3D5}",
          "cancer": "\u264B\uFE0F",
          "candle": "\u{1F56F}",
          "candy": "\u{1F36C}",
          "canoe": "\u{1F6F6}",
          "capital_abcd": "\u{1F520}",
          "capricorn": "\u2651\uFE0F",
          "car": "\u{1F697}",
          "card_file_box": "\u{1F5C3}",
          "card_index": "\u{1F4C7}",
          "card_index_dividers": "\u{1F5C2}",
          "carousel_horse": "\u{1F3A0}",
          "carrot": "\u{1F955}",
          "cat": "\u{1F431}",
          "cat2": "\u{1F408}",
          "cd": "\u{1F4BF}",
          "chains": "\u26D3",
          "champagne": "\u{1F37E}",
          "chart": "\u{1F4B9}",
          "chart_with_downwards_trend": "\u{1F4C9}",
          "chart_with_upwards_trend": "\u{1F4C8}",
          "checkered_flag": "\u{1F3C1}",
          "cheese": "\u{1F9C0}",
          "cherries": "\u{1F352}",
          "cherry_blossom": "\u{1F338}",
          "chestnut": "\u{1F330}",
          "chicken": "\u{1F414}",
          "children_crossing": "\u{1F6B8}",
          "chipmunk": "\u{1F43F}",
          "chocolate_bar": "\u{1F36B}",
          "christmas_tree": "\u{1F384}",
          "church": "\u26EA\uFE0F",
          "cinema": "\u{1F3A6}",
          "circus_tent": "\u{1F3AA}",
          "city_sunrise": "\u{1F307}",
          "city_sunset": "\u{1F306}",
          "cityscape": "\u{1F3D9}",
          "cl": "\u{1F191}",
          "clamp": "\u{1F5DC}",
          "clap": "\u{1F44F}",
          "clapper": "\u{1F3AC}",
          "classical_building": "\u{1F3DB}",
          "clinking_glasses": "\u{1F942}",
          "clipboard": "\u{1F4CB}",
          "clock1": "\u{1F550}",
          "clock10": "\u{1F559}",
          "clock1030": "\u{1F565}",
          "clock11": "\u{1F55A}",
          "clock1130": "\u{1F566}",
          "clock12": "\u{1F55B}",
          "clock1230": "\u{1F567}",
          "clock130": "\u{1F55C}",
          "clock2": "\u{1F551}",
          "clock230": "\u{1F55D}",
          "clock3": "\u{1F552}",
          "clock330": "\u{1F55E}",
          "clock4": "\u{1F553}",
          "clock430": "\u{1F55F}",
          "clock5": "\u{1F554}",
          "clock530": "\u{1F560}",
          "clock6": "\u{1F555}",
          "clock630": "\u{1F561}",
          "clock7": "\u{1F556}",
          "clock730": "\u{1F562}",
          "clock8": "\u{1F557}",
          "clock830": "\u{1F563}",
          "clock9": "\u{1F558}",
          "clock930": "\u{1F564}",
          "closed_book": "\u{1F4D5}",
          "closed_lock_with_key": "\u{1F510}",
          "closed_umbrella": "\u{1F302}",
          "cloud": "\u2601\uFE0F",
          "cloud_with_lightning": "\u{1F329}",
          "cloud_with_lightning_and_rain": "\u26C8",
          "cloud_with_rain": "\u{1F327}",
          "cloud_with_snow": "\u{1F328}",
          "clown_face": "\u{1F921}",
          "clubs": "\u2663\uFE0F",
          "cocktail": "\u{1F378}",
          "coffee": "\u2615\uFE0F",
          "coffin": "\u26B0\uFE0F",
          "cold_sweat": "\u{1F630}",
          "comet": "\u2604\uFE0F",
          "computer": "\u{1F4BB}",
          "computer_mouse": "\u{1F5B1}",
          "confetti_ball": "\u{1F38A}",
          "confounded": "\u{1F616}",
          "confused": "\u{1F615}",
          "congratulations": "\u3297\uFE0F",
          "construction": "\u{1F6A7}",
          "construction_worker_man": "\u{1F477}",
          "construction_worker_woman": "\u{1F477}&zwj;\u2640\uFE0F",
          "control_knobs": "\u{1F39B}",
          "convenience_store": "\u{1F3EA}",
          "cookie": "\u{1F36A}",
          "cool": "\u{1F192}",
          "policeman": "\u{1F46E}",
          "copyright": "\xA9\uFE0F",
          "corn": "\u{1F33D}",
          "couch_and_lamp": "\u{1F6CB}",
          "couple": "\u{1F46B}",
          "couple_with_heart_woman_man": "\u{1F491}",
          "couple_with_heart_man_man": "\u{1F468}&zwj;\u2764\uFE0F&zwj;\u{1F468}",
          "couple_with_heart_woman_woman": "\u{1F469}&zwj;\u2764\uFE0F&zwj;\u{1F469}",
          "couplekiss_man_man": "\u{1F468}&zwj;\u2764\uFE0F&zwj;\u{1F48B}&zwj;\u{1F468}",
          "couplekiss_man_woman": "\u{1F48F}",
          "couplekiss_woman_woman": "\u{1F469}&zwj;\u2764\uFE0F&zwj;\u{1F48B}&zwj;\u{1F469}",
          "cow": "\u{1F42E}",
          "cow2": "\u{1F404}",
          "cowboy_hat_face": "\u{1F920}",
          "crab": "\u{1F980}",
          "crayon": "\u{1F58D}",
          "credit_card": "\u{1F4B3}",
          "crescent_moon": "\u{1F319}",
          "cricket": "\u{1F3CF}",
          "crocodile": "\u{1F40A}",
          "croissant": "\u{1F950}",
          "crossed_fingers": "\u{1F91E}",
          "crossed_flags": "\u{1F38C}",
          "crossed_swords": "\u2694\uFE0F",
          "crown": "\u{1F451}",
          "cry": "\u{1F622}",
          "crying_cat_face": "\u{1F63F}",
          "crystal_ball": "\u{1F52E}",
          "cucumber": "\u{1F952}",
          "cupid": "\u{1F498}",
          "curly_loop": "\u27B0",
          "currency_exchange": "\u{1F4B1}",
          "curry": "\u{1F35B}",
          "custard": "\u{1F36E}",
          "customs": "\u{1F6C3}",
          "cyclone": "\u{1F300}",
          "dagger": "\u{1F5E1}",
          "dancer": "\u{1F483}",
          "dancing_women": "\u{1F46F}",
          "dancing_men": "\u{1F46F}&zwj;\u2642\uFE0F",
          "dango": "\u{1F361}",
          "dark_sunglasses": "\u{1F576}",
          "dart": "\u{1F3AF}",
          "dash": "\u{1F4A8}",
          "date": "\u{1F4C5}",
          "deciduous_tree": "\u{1F333}",
          "deer": "\u{1F98C}",
          "department_store": "\u{1F3EC}",
          "derelict_house": "\u{1F3DA}",
          "desert": "\u{1F3DC}",
          "desert_island": "\u{1F3DD}",
          "desktop_computer": "\u{1F5A5}",
          "male_detective": "\u{1F575}\uFE0F",
          "diamond_shape_with_a_dot_inside": "\u{1F4A0}",
          "diamonds": "\u2666\uFE0F",
          "disappointed": "\u{1F61E}",
          "disappointed_relieved": "\u{1F625}",
          "dizzy": "\u{1F4AB}",
          "dizzy_face": "\u{1F635}",
          "do_not_litter": "\u{1F6AF}",
          "dog": "\u{1F436}",
          "dog2": "\u{1F415}",
          "dollar": "\u{1F4B5}",
          "dolls": "\u{1F38E}",
          "dolphin": "\u{1F42C}",
          "door": "\u{1F6AA}",
          "doughnut": "\u{1F369}",
          "dove": "\u{1F54A}",
          "dragon": "\u{1F409}",
          "dragon_face": "\u{1F432}",
          "dress": "\u{1F457}",
          "dromedary_camel": "\u{1F42A}",
          "drooling_face": "\u{1F924}",
          "droplet": "\u{1F4A7}",
          "drum": "\u{1F941}",
          "duck": "\u{1F986}",
          "dvd": "\u{1F4C0}",
          "e-mail": "\u{1F4E7}",
          "eagle": "\u{1F985}",
          "ear": "\u{1F442}",
          "ear_of_rice": "\u{1F33E}",
          "earth_africa": "\u{1F30D}",
          "earth_americas": "\u{1F30E}",
          "earth_asia": "\u{1F30F}",
          "egg": "\u{1F95A}",
          "eggplant": "\u{1F346}",
          "eight_pointed_black_star": "\u2734\uFE0F",
          "eight_spoked_asterisk": "\u2733\uFE0F",
          "electric_plug": "\u{1F50C}",
          "elephant": "\u{1F418}",
          "email": "\u2709\uFE0F",
          "end": "\u{1F51A}",
          "envelope_with_arrow": "\u{1F4E9}",
          "euro": "\u{1F4B6}",
          "european_castle": "\u{1F3F0}",
          "european_post_office": "\u{1F3E4}",
          "evergreen_tree": "\u{1F332}",
          "exclamation": "\u2757\uFE0F",
          "expressionless": "\u{1F611}",
          "eye": "\u{1F441}",
          "eye_speech_bubble": "\u{1F441}&zwj;\u{1F5E8}",
          "eyeglasses": "\u{1F453}",
          "eyes": "\u{1F440}",
          "face_with_head_bandage": "\u{1F915}",
          "face_with_thermometer": "\u{1F912}",
          "fist_oncoming": "\u{1F44A}",
          "factory": "\u{1F3ED}",
          "fallen_leaf": "\u{1F342}",
          "family_man_woman_boy": "\u{1F46A}",
          "family_man_boy": "\u{1F468}&zwj;\u{1F466}",
          "family_man_boy_boy": "\u{1F468}&zwj;\u{1F466}&zwj;\u{1F466}",
          "family_man_girl": "\u{1F468}&zwj;\u{1F467}",
          "family_man_girl_boy": "\u{1F468}&zwj;\u{1F467}&zwj;\u{1F466}",
          "family_man_girl_girl": "\u{1F468}&zwj;\u{1F467}&zwj;\u{1F467}",
          "family_man_man_boy": "\u{1F468}&zwj;\u{1F468}&zwj;\u{1F466}",
          "family_man_man_boy_boy": "\u{1F468}&zwj;\u{1F468}&zwj;\u{1F466}&zwj;\u{1F466}",
          "family_man_man_girl": "\u{1F468}&zwj;\u{1F468}&zwj;\u{1F467}",
          "family_man_man_girl_boy": "\u{1F468}&zwj;\u{1F468}&zwj;\u{1F467}&zwj;\u{1F466}",
          "family_man_man_girl_girl": "\u{1F468}&zwj;\u{1F468}&zwj;\u{1F467}&zwj;\u{1F467}",
          "family_man_woman_boy_boy": "\u{1F468}&zwj;\u{1F469}&zwj;\u{1F466}&zwj;\u{1F466}",
          "family_man_woman_girl": "\u{1F468}&zwj;\u{1F469}&zwj;\u{1F467}",
          "family_man_woman_girl_boy": "\u{1F468}&zwj;\u{1F469}&zwj;\u{1F467}&zwj;\u{1F466}",
          "family_man_woman_girl_girl": "\u{1F468}&zwj;\u{1F469}&zwj;\u{1F467}&zwj;\u{1F467}",
          "family_woman_boy": "\u{1F469}&zwj;\u{1F466}",
          "family_woman_boy_boy": "\u{1F469}&zwj;\u{1F466}&zwj;\u{1F466}",
          "family_woman_girl": "\u{1F469}&zwj;\u{1F467}",
          "family_woman_girl_boy": "\u{1F469}&zwj;\u{1F467}&zwj;\u{1F466}",
          "family_woman_girl_girl": "\u{1F469}&zwj;\u{1F467}&zwj;\u{1F467}",
          "family_woman_woman_boy": "\u{1F469}&zwj;\u{1F469}&zwj;\u{1F466}",
          "family_woman_woman_boy_boy": "\u{1F469}&zwj;\u{1F469}&zwj;\u{1F466}&zwj;\u{1F466}",
          "family_woman_woman_girl": "\u{1F469}&zwj;\u{1F469}&zwj;\u{1F467}",
          "family_woman_woman_girl_boy": "\u{1F469}&zwj;\u{1F469}&zwj;\u{1F467}&zwj;\u{1F466}",
          "family_woman_woman_girl_girl": "\u{1F469}&zwj;\u{1F469}&zwj;\u{1F467}&zwj;\u{1F467}",
          "fast_forward": "\u23E9",
          "fax": "\u{1F4E0}",
          "fearful": "\u{1F628}",
          "feet": "\u{1F43E}",
          "female_detective": "\u{1F575}\uFE0F&zwj;\u2640\uFE0F",
          "ferris_wheel": "\u{1F3A1}",
          "ferry": "\u26F4",
          "field_hockey": "\u{1F3D1}",
          "file_cabinet": "\u{1F5C4}",
          "file_folder": "\u{1F4C1}",
          "film_projector": "\u{1F4FD}",
          "film_strip": "\u{1F39E}",
          "fire": "\u{1F525}",
          "fire_engine": "\u{1F692}",
          "fireworks": "\u{1F386}",
          "first_quarter_moon": "\u{1F313}",
          "first_quarter_moon_with_face": "\u{1F31B}",
          "fish": "\u{1F41F}",
          "fish_cake": "\u{1F365}",
          "fishing_pole_and_fish": "\u{1F3A3}",
          "fist_raised": "\u270A",
          "fist_left": "\u{1F91B}",
          "fist_right": "\u{1F91C}",
          "flags": "\u{1F38F}",
          "flashlight": "\u{1F526}",
          "fleur_de_lis": "\u269C\uFE0F",
          "flight_arrival": "\u{1F6EC}",
          "flight_departure": "\u{1F6EB}",
          "floppy_disk": "\u{1F4BE}",
          "flower_playing_cards": "\u{1F3B4}",
          "flushed": "\u{1F633}",
          "fog": "\u{1F32B}",
          "foggy": "\u{1F301}",
          "football": "\u{1F3C8}",
          "footprints": "\u{1F463}",
          "fork_and_knife": "\u{1F374}",
          "fountain": "\u26F2\uFE0F",
          "fountain_pen": "\u{1F58B}",
          "four_leaf_clover": "\u{1F340}",
          "fox_face": "\u{1F98A}",
          "framed_picture": "\u{1F5BC}",
          "free": "\u{1F193}",
          "fried_egg": "\u{1F373}",
          "fried_shrimp": "\u{1F364}",
          "fries": "\u{1F35F}",
          "frog": "\u{1F438}",
          "frowning": "\u{1F626}",
          "frowning_face": "\u2639\uFE0F",
          "frowning_man": "\u{1F64D}&zwj;\u2642\uFE0F",
          "frowning_woman": "\u{1F64D}",
          "middle_finger": "\u{1F595}",
          "fuelpump": "\u26FD\uFE0F",
          "full_moon": "\u{1F315}",
          "full_moon_with_face": "\u{1F31D}",
          "funeral_urn": "\u26B1\uFE0F",
          "game_die": "\u{1F3B2}",
          "gear": "\u2699\uFE0F",
          "gem": "\u{1F48E}",
          "gemini": "\u264A\uFE0F",
          "ghost": "\u{1F47B}",
          "gift": "\u{1F381}",
          "gift_heart": "\u{1F49D}",
          "girl": "\u{1F467}",
          "globe_with_meridians": "\u{1F310}",
          "goal_net": "\u{1F945}",
          "goat": "\u{1F410}",
          "golf": "\u26F3\uFE0F",
          "golfing_man": "\u{1F3CC}\uFE0F",
          "golfing_woman": "\u{1F3CC}\uFE0F&zwj;\u2640\uFE0F",
          "gorilla": "\u{1F98D}",
          "grapes": "\u{1F347}",
          "green_apple": "\u{1F34F}",
          "green_book": "\u{1F4D7}",
          "green_heart": "\u{1F49A}",
          "green_salad": "\u{1F957}",
          "grey_exclamation": "\u2755",
          "grey_question": "\u2754",
          "grimacing": "\u{1F62C}",
          "grin": "\u{1F601}",
          "grinning": "\u{1F600}",
          "guardsman": "\u{1F482}",
          "guardswoman": "\u{1F482}&zwj;\u2640\uFE0F",
          "guitar": "\u{1F3B8}",
          "gun": "\u{1F52B}",
          "haircut_woman": "\u{1F487}",
          "haircut_man": "\u{1F487}&zwj;\u2642\uFE0F",
          "hamburger": "\u{1F354}",
          "hammer": "\u{1F528}",
          "hammer_and_pick": "\u2692",
          "hammer_and_wrench": "\u{1F6E0}",
          "hamster": "\u{1F439}",
          "hand": "\u270B",
          "handbag": "\u{1F45C}",
          "handshake": "\u{1F91D}",
          "hankey": "\u{1F4A9}",
          "hatched_chick": "\u{1F425}",
          "hatching_chick": "\u{1F423}",
          "headphones": "\u{1F3A7}",
          "hear_no_evil": "\u{1F649}",
          "heart": "\u2764\uFE0F",
          "heart_decoration": "\u{1F49F}",
          "heart_eyes": "\u{1F60D}",
          "heart_eyes_cat": "\u{1F63B}",
          "heartbeat": "\u{1F493}",
          "heartpulse": "\u{1F497}",
          "hearts": "\u2665\uFE0F",
          "heavy_check_mark": "\u2714\uFE0F",
          "heavy_division_sign": "\u2797",
          "heavy_dollar_sign": "\u{1F4B2}",
          "heavy_heart_exclamation": "\u2763\uFE0F",
          "heavy_minus_sign": "\u2796",
          "heavy_multiplication_x": "\u2716\uFE0F",
          "heavy_plus_sign": "\u2795",
          "helicopter": "\u{1F681}",
          "herb": "\u{1F33F}",
          "hibiscus": "\u{1F33A}",
          "high_brightness": "\u{1F506}",
          "high_heel": "\u{1F460}",
          "hocho": "\u{1F52A}",
          "hole": "\u{1F573}",
          "honey_pot": "\u{1F36F}",
          "horse": "\u{1F434}",
          "horse_racing": "\u{1F3C7}",
          "hospital": "\u{1F3E5}",
          "hot_pepper": "\u{1F336}",
          "hotdog": "\u{1F32D}",
          "hotel": "\u{1F3E8}",
          "hotsprings": "\u2668\uFE0F",
          "hourglass": "\u231B\uFE0F",
          "hourglass_flowing_sand": "\u23F3",
          "house": "\u{1F3E0}",
          "house_with_garden": "\u{1F3E1}",
          "houses": "\u{1F3D8}",
          "hugs": "\u{1F917}",
          "hushed": "\u{1F62F}",
          "ice_cream": "\u{1F368}",
          "ice_hockey": "\u{1F3D2}",
          "ice_skate": "\u26F8",
          "icecream": "\u{1F366}",
          "id": "\u{1F194}",
          "ideograph_advantage": "\u{1F250}",
          "imp": "\u{1F47F}",
          "inbox_tray": "\u{1F4E5}",
          "incoming_envelope": "\u{1F4E8}",
          "tipping_hand_woman": "\u{1F481}",
          "information_source": "\u2139\uFE0F",
          "innocent": "\u{1F607}",
          "interrobang": "\u2049\uFE0F",
          "iphone": "\u{1F4F1}",
          "izakaya_lantern": "\u{1F3EE}",
          "jack_o_lantern": "\u{1F383}",
          "japan": "\u{1F5FE}",
          "japanese_castle": "\u{1F3EF}",
          "japanese_goblin": "\u{1F47A}",
          "japanese_ogre": "\u{1F479}",
          "jeans": "\u{1F456}",
          "joy": "\u{1F602}",
          "joy_cat": "\u{1F639}",
          "joystick": "\u{1F579}",
          "kaaba": "\u{1F54B}",
          "key": "\u{1F511}",
          "keyboard": "\u2328\uFE0F",
          "keycap_ten": "\u{1F51F}",
          "kick_scooter": "\u{1F6F4}",
          "kimono": "\u{1F458}",
          "kiss": "\u{1F48B}",
          "kissing": "\u{1F617}",
          "kissing_cat": "\u{1F63D}",
          "kissing_closed_eyes": "\u{1F61A}",
          "kissing_heart": "\u{1F618}",
          "kissing_smiling_eyes": "\u{1F619}",
          "kiwi_fruit": "\u{1F95D}",
          "koala": "\u{1F428}",
          "koko": "\u{1F201}",
          "label": "\u{1F3F7}",
          "large_blue_circle": "\u{1F535}",
          "large_blue_diamond": "\u{1F537}",
          "large_orange_diamond": "\u{1F536}",
          "last_quarter_moon": "\u{1F317}",
          "last_quarter_moon_with_face": "\u{1F31C}",
          "latin_cross": "\u271D\uFE0F",
          "laughing": "\u{1F606}",
          "leaves": "\u{1F343}",
          "ledger": "\u{1F4D2}",
          "left_luggage": "\u{1F6C5}",
          "left_right_arrow": "\u2194\uFE0F",
          "leftwards_arrow_with_hook": "\u21A9\uFE0F",
          "lemon": "\u{1F34B}",
          "leo": "\u264C\uFE0F",
          "leopard": "\u{1F406}",
          "level_slider": "\u{1F39A}",
          "libra": "\u264E\uFE0F",
          "light_rail": "\u{1F688}",
          "link": "\u{1F517}",
          "lion": "\u{1F981}",
          "lips": "\u{1F444}",
          "lipstick": "\u{1F484}",
          "lizard": "\u{1F98E}",
          "lock": "\u{1F512}",
          "lock_with_ink_pen": "\u{1F50F}",
          "lollipop": "\u{1F36D}",
          "loop": "\u27BF",
          "loud_sound": "\u{1F50A}",
          "loudspeaker": "\u{1F4E2}",
          "love_hotel": "\u{1F3E9}",
          "love_letter": "\u{1F48C}",
          "low_brightness": "\u{1F505}",
          "lying_face": "\u{1F925}",
          "m": "\u24C2\uFE0F",
          "mag": "\u{1F50D}",
          "mag_right": "\u{1F50E}",
          "mahjong": "\u{1F004}\uFE0F",
          "mailbox": "\u{1F4EB}",
          "mailbox_closed": "\u{1F4EA}",
          "mailbox_with_mail": "\u{1F4EC}",
          "mailbox_with_no_mail": "\u{1F4ED}",
          "man": "\u{1F468}",
          "man_artist": "\u{1F468}&zwj;\u{1F3A8}",
          "man_astronaut": "\u{1F468}&zwj;\u{1F680}",
          "man_cartwheeling": "\u{1F938}&zwj;\u2642\uFE0F",
          "man_cook": "\u{1F468}&zwj;\u{1F373}",
          "man_dancing": "\u{1F57A}",
          "man_facepalming": "\u{1F926}&zwj;\u2642\uFE0F",
          "man_factory_worker": "\u{1F468}&zwj;\u{1F3ED}",
          "man_farmer": "\u{1F468}&zwj;\u{1F33E}",
          "man_firefighter": "\u{1F468}&zwj;\u{1F692}",
          "man_health_worker": "\u{1F468}&zwj;\u2695\uFE0F",
          "man_in_tuxedo": "\u{1F935}",
          "man_judge": "\u{1F468}&zwj;\u2696\uFE0F",
          "man_juggling": "\u{1F939}&zwj;\u2642\uFE0F",
          "man_mechanic": "\u{1F468}&zwj;\u{1F527}",
          "man_office_worker": "\u{1F468}&zwj;\u{1F4BC}",
          "man_pilot": "\u{1F468}&zwj;\u2708\uFE0F",
          "man_playing_handball": "\u{1F93E}&zwj;\u2642\uFE0F",
          "man_playing_water_polo": "\u{1F93D}&zwj;\u2642\uFE0F",
          "man_scientist": "\u{1F468}&zwj;\u{1F52C}",
          "man_shrugging": "\u{1F937}&zwj;\u2642\uFE0F",
          "man_singer": "\u{1F468}&zwj;\u{1F3A4}",
          "man_student": "\u{1F468}&zwj;\u{1F393}",
          "man_teacher": "\u{1F468}&zwj;\u{1F3EB}",
          "man_technologist": "\u{1F468}&zwj;\u{1F4BB}",
          "man_with_gua_pi_mao": "\u{1F472}",
          "man_with_turban": "\u{1F473}",
          "tangerine": "\u{1F34A}",
          "mans_shoe": "\u{1F45E}",
          "mantelpiece_clock": "\u{1F570}",
          "maple_leaf": "\u{1F341}",
          "martial_arts_uniform": "\u{1F94B}",
          "mask": "\u{1F637}",
          "massage_woman": "\u{1F486}",
          "massage_man": "\u{1F486}&zwj;\u2642\uFE0F",
          "meat_on_bone": "\u{1F356}",
          "medal_military": "\u{1F396}",
          "medal_sports": "\u{1F3C5}",
          "mega": "\u{1F4E3}",
          "melon": "\u{1F348}",
          "memo": "\u{1F4DD}",
          "men_wrestling": "\u{1F93C}&zwj;\u2642\uFE0F",
          "menorah": "\u{1F54E}",
          "mens": "\u{1F6B9}",
          "metal": "\u{1F918}",
          "metro": "\u{1F687}",
          "microphone": "\u{1F3A4}",
          "microscope": "\u{1F52C}",
          "milk_glass": "\u{1F95B}",
          "milky_way": "\u{1F30C}",
          "minibus": "\u{1F690}",
          "minidisc": "\u{1F4BD}",
          "mobile_phone_off": "\u{1F4F4}",
          "money_mouth_face": "\u{1F911}",
          "money_with_wings": "\u{1F4B8}",
          "moneybag": "\u{1F4B0}",
          "monkey": "\u{1F412}",
          "monkey_face": "\u{1F435}",
          "monorail": "\u{1F69D}",
          "moon": "\u{1F314}",
          "mortar_board": "\u{1F393}",
          "mosque": "\u{1F54C}",
          "motor_boat": "\u{1F6E5}",
          "motor_scooter": "\u{1F6F5}",
          "motorcycle": "\u{1F3CD}",
          "motorway": "\u{1F6E3}",
          "mount_fuji": "\u{1F5FB}",
          "mountain": "\u26F0",
          "mountain_biking_man": "\u{1F6B5}",
          "mountain_biking_woman": "\u{1F6B5}&zwj;\u2640\uFE0F",
          "mountain_cableway": "\u{1F6A0}",
          "mountain_railway": "\u{1F69E}",
          "mountain_snow": "\u{1F3D4}",
          "mouse": "\u{1F42D}",
          "mouse2": "\u{1F401}",
          "movie_camera": "\u{1F3A5}",
          "moyai": "\u{1F5FF}",
          "mrs_claus": "\u{1F936}",
          "muscle": "\u{1F4AA}",
          "mushroom": "\u{1F344}",
          "musical_keyboard": "\u{1F3B9}",
          "musical_note": "\u{1F3B5}",
          "musical_score": "\u{1F3BC}",
          "mute": "\u{1F507}",
          "nail_care": "\u{1F485}",
          "name_badge": "\u{1F4DB}",
          "national_park": "\u{1F3DE}",
          "nauseated_face": "\u{1F922}",
          "necktie": "\u{1F454}",
          "negative_squared_cross_mark": "\u274E",
          "nerd_face": "\u{1F913}",
          "neutral_face": "\u{1F610}",
          "new": "\u{1F195}",
          "new_moon": "\u{1F311}",
          "new_moon_with_face": "\u{1F31A}",
          "newspaper": "\u{1F4F0}",
          "newspaper_roll": "\u{1F5DE}",
          "next_track_button": "\u23ED",
          "ng": "\u{1F196}",
          "no_good_man": "\u{1F645}&zwj;\u2642\uFE0F",
          "no_good_woman": "\u{1F645}",
          "night_with_stars": "\u{1F303}",
          "no_bell": "\u{1F515}",
          "no_bicycles": "\u{1F6B3}",
          "no_entry": "\u26D4\uFE0F",
          "no_entry_sign": "\u{1F6AB}",
          "no_mobile_phones": "\u{1F4F5}",
          "no_mouth": "\u{1F636}",
          "no_pedestrians": "\u{1F6B7}",
          "no_smoking": "\u{1F6AD}",
          "non-potable_water": "\u{1F6B1}",
          "nose": "\u{1F443}",
          "notebook": "\u{1F4D3}",
          "notebook_with_decorative_cover": "\u{1F4D4}",
          "notes": "\u{1F3B6}",
          "nut_and_bolt": "\u{1F529}",
          "o": "\u2B55\uFE0F",
          "o2": "\u{1F17E}\uFE0F",
          "ocean": "\u{1F30A}",
          "octopus": "\u{1F419}",
          "oden": "\u{1F362}",
          "office": "\u{1F3E2}",
          "oil_drum": "\u{1F6E2}",
          "ok": "\u{1F197}",
          "ok_hand": "\u{1F44C}",
          "ok_man": "\u{1F646}&zwj;\u2642\uFE0F",
          "ok_woman": "\u{1F646}",
          "old_key": "\u{1F5DD}",
          "older_man": "\u{1F474}",
          "older_woman": "\u{1F475}",
          "om": "\u{1F549}",
          "on": "\u{1F51B}",
          "oncoming_automobile": "\u{1F698}",
          "oncoming_bus": "\u{1F68D}",
          "oncoming_police_car": "\u{1F694}",
          "oncoming_taxi": "\u{1F696}",
          "open_file_folder": "\u{1F4C2}",
          "open_hands": "\u{1F450}",
          "open_mouth": "\u{1F62E}",
          "open_umbrella": "\u2602\uFE0F",
          "ophiuchus": "\u26CE",
          "orange_book": "\u{1F4D9}",
          "orthodox_cross": "\u2626\uFE0F",
          "outbox_tray": "\u{1F4E4}",
          "owl": "\u{1F989}",
          "ox": "\u{1F402}",
          "package": "\u{1F4E6}",
          "page_facing_up": "\u{1F4C4}",
          "page_with_curl": "\u{1F4C3}",
          "pager": "\u{1F4DF}",
          "paintbrush": "\u{1F58C}",
          "palm_tree": "\u{1F334}",
          "pancakes": "\u{1F95E}",
          "panda_face": "\u{1F43C}",
          "paperclip": "\u{1F4CE}",
          "paperclips": "\u{1F587}",
          "parasol_on_ground": "\u26F1",
          "parking": "\u{1F17F}\uFE0F",
          "part_alternation_mark": "\u303D\uFE0F",
          "partly_sunny": "\u26C5\uFE0F",
          "passenger_ship": "\u{1F6F3}",
          "passport_control": "\u{1F6C2}",
          "pause_button": "\u23F8",
          "peace_symbol": "\u262E\uFE0F",
          "peach": "\u{1F351}",
          "peanuts": "\u{1F95C}",
          "pear": "\u{1F350}",
          "pen": "\u{1F58A}",
          "pencil2": "\u270F\uFE0F",
          "penguin": "\u{1F427}",
          "pensive": "\u{1F614}",
          "performing_arts": "\u{1F3AD}",
          "persevere": "\u{1F623}",
          "person_fencing": "\u{1F93A}",
          "pouting_woman": "\u{1F64E}",
          "phone": "\u260E\uFE0F",
          "pick": "\u26CF",
          "pig": "\u{1F437}",
          "pig2": "\u{1F416}",
          "pig_nose": "\u{1F43D}",
          "pill": "\u{1F48A}",
          "pineapple": "\u{1F34D}",
          "ping_pong": "\u{1F3D3}",
          "pisces": "\u2653\uFE0F",
          "pizza": "\u{1F355}",
          "place_of_worship": "\u{1F6D0}",
          "plate_with_cutlery": "\u{1F37D}",
          "play_or_pause_button": "\u23EF",
          "point_down": "\u{1F447}",
          "point_left": "\u{1F448}",
          "point_right": "\u{1F449}",
          "point_up": "\u261D\uFE0F",
          "point_up_2": "\u{1F446}",
          "police_car": "\u{1F693}",
          "policewoman": "\u{1F46E}&zwj;\u2640\uFE0F",
          "poodle": "\u{1F429}",
          "popcorn": "\u{1F37F}",
          "post_office": "\u{1F3E3}",
          "postal_horn": "\u{1F4EF}",
          "postbox": "\u{1F4EE}",
          "potable_water": "\u{1F6B0}",
          "potato": "\u{1F954}",
          "pouch": "\u{1F45D}",
          "poultry_leg": "\u{1F357}",
          "pound": "\u{1F4B7}",
          "rage": "\u{1F621}",
          "pouting_cat": "\u{1F63E}",
          "pouting_man": "\u{1F64E}&zwj;\u2642\uFE0F",
          "pray": "\u{1F64F}",
          "prayer_beads": "\u{1F4FF}",
          "pregnant_woman": "\u{1F930}",
          "previous_track_button": "\u23EE",
          "prince": "\u{1F934}",
          "princess": "\u{1F478}",
          "printer": "\u{1F5A8}",
          "purple_heart": "\u{1F49C}",
          "purse": "\u{1F45B}",
          "pushpin": "\u{1F4CC}",
          "put_litter_in_its_place": "\u{1F6AE}",
          "question": "\u2753",
          "rabbit": "\u{1F430}",
          "rabbit2": "\u{1F407}",
          "racehorse": "\u{1F40E}",
          "racing_car": "\u{1F3CE}",
          "radio": "\u{1F4FB}",
          "radio_button": "\u{1F518}",
          "radioactive": "\u2622\uFE0F",
          "railway_car": "\u{1F683}",
          "railway_track": "\u{1F6E4}",
          "rainbow": "\u{1F308}",
          "rainbow_flag": "\u{1F3F3}\uFE0F&zwj;\u{1F308}",
          "raised_back_of_hand": "\u{1F91A}",
          "raised_hand_with_fingers_splayed": "\u{1F590}",
          "raised_hands": "\u{1F64C}",
          "raising_hand_woman": "\u{1F64B}",
          "raising_hand_man": "\u{1F64B}&zwj;\u2642\uFE0F",
          "ram": "\u{1F40F}",
          "ramen": "\u{1F35C}",
          "rat": "\u{1F400}",
          "record_button": "\u23FA",
          "recycle": "\u267B\uFE0F",
          "red_circle": "\u{1F534}",
          "registered": "\xAE\uFE0F",
          "relaxed": "\u263A\uFE0F",
          "relieved": "\u{1F60C}",
          "reminder_ribbon": "\u{1F397}",
          "repeat": "\u{1F501}",
          "repeat_one": "\u{1F502}",
          "rescue_worker_helmet": "\u26D1",
          "restroom": "\u{1F6BB}",
          "revolving_hearts": "\u{1F49E}",
          "rewind": "\u23EA",
          "rhinoceros": "\u{1F98F}",
          "ribbon": "\u{1F380}",
          "rice": "\u{1F35A}",
          "rice_ball": "\u{1F359}",
          "rice_cracker": "\u{1F358}",
          "rice_scene": "\u{1F391}",
          "right_anger_bubble": "\u{1F5EF}",
          "ring": "\u{1F48D}",
          "robot": "\u{1F916}",
          "rocket": "\u{1F680}",
          "rofl": "\u{1F923}",
          "roll_eyes": "\u{1F644}",
          "roller_coaster": "\u{1F3A2}",
          "rooster": "\u{1F413}",
          "rose": "\u{1F339}",
          "rosette": "\u{1F3F5}",
          "rotating_light": "\u{1F6A8}",
          "round_pushpin": "\u{1F4CD}",
          "rowing_man": "\u{1F6A3}",
          "rowing_woman": "\u{1F6A3}&zwj;\u2640\uFE0F",
          "rugby_football": "\u{1F3C9}",
          "running_man": "\u{1F3C3}",
          "running_shirt_with_sash": "\u{1F3BD}",
          "running_woman": "\u{1F3C3}&zwj;\u2640\uFE0F",
          "sa": "\u{1F202}\uFE0F",
          "sagittarius": "\u2650\uFE0F",
          "sake": "\u{1F376}",
          "sandal": "\u{1F461}",
          "santa": "\u{1F385}",
          "satellite": "\u{1F4E1}",
          "saxophone": "\u{1F3B7}",
          "school": "\u{1F3EB}",
          "school_satchel": "\u{1F392}",
          "scissors": "\u2702\uFE0F",
          "scorpion": "\u{1F982}",
          "scorpius": "\u264F\uFE0F",
          "scream": "\u{1F631}",
          "scream_cat": "\u{1F640}",
          "scroll": "\u{1F4DC}",
          "seat": "\u{1F4BA}",
          "secret": "\u3299\uFE0F",
          "see_no_evil": "\u{1F648}",
          "seedling": "\u{1F331}",
          "selfie": "\u{1F933}",
          "shallow_pan_of_food": "\u{1F958}",
          "shamrock": "\u2618\uFE0F",
          "shark": "\u{1F988}",
          "shaved_ice": "\u{1F367}",
          "sheep": "\u{1F411}",
          "shell": "\u{1F41A}",
          "shield": "\u{1F6E1}",
          "shinto_shrine": "\u26E9",
          "ship": "\u{1F6A2}",
          "shirt": "\u{1F455}",
          "shopping": "\u{1F6CD}",
          "shopping_cart": "\u{1F6D2}",
          "shower": "\u{1F6BF}",
          "shrimp": "\u{1F990}",
          "signal_strength": "\u{1F4F6}",
          "six_pointed_star": "\u{1F52F}",
          "ski": "\u{1F3BF}",
          "skier": "\u26F7",
          "skull": "\u{1F480}",
          "skull_and_crossbones": "\u2620\uFE0F",
          "sleeping": "\u{1F634}",
          "sleeping_bed": "\u{1F6CC}",
          "sleepy": "\u{1F62A}",
          "slightly_frowning_face": "\u{1F641}",
          "slightly_smiling_face": "\u{1F642}",
          "slot_machine": "\u{1F3B0}",
          "small_airplane": "\u{1F6E9}",
          "small_blue_diamond": "\u{1F539}",
          "small_orange_diamond": "\u{1F538}",
          "small_red_triangle": "\u{1F53A}",
          "small_red_triangle_down": "\u{1F53B}",
          "smile": "\u{1F604}",
          "smile_cat": "\u{1F638}",
          "smiley": "\u{1F603}",
          "smiley_cat": "\u{1F63A}",
          "smiling_imp": "\u{1F608}",
          "smirk": "\u{1F60F}",
          "smirk_cat": "\u{1F63C}",
          "smoking": "\u{1F6AC}",
          "snail": "\u{1F40C}",
          "snake": "\u{1F40D}",
          "sneezing_face": "\u{1F927}",
          "snowboarder": "\u{1F3C2}",
          "snowflake": "\u2744\uFE0F",
          "snowman": "\u26C4\uFE0F",
          "snowman_with_snow": "\u2603\uFE0F",
          "sob": "\u{1F62D}",
          "soccer": "\u26BD\uFE0F",
          "soon": "\u{1F51C}",
          "sos": "\u{1F198}",
          "sound": "\u{1F509}",
          "space_invader": "\u{1F47E}",
          "spades": "\u2660\uFE0F",
          "spaghetti": "\u{1F35D}",
          "sparkle": "\u2747\uFE0F",
          "sparkler": "\u{1F387}",
          "sparkles": "\u2728",
          "sparkling_heart": "\u{1F496}",
          "speak_no_evil": "\u{1F64A}",
          "speaker": "\u{1F508}",
          "speaking_head": "\u{1F5E3}",
          "speech_balloon": "\u{1F4AC}",
          "speedboat": "\u{1F6A4}",
          "spider": "\u{1F577}",
          "spider_web": "\u{1F578}",
          "spiral_calendar": "\u{1F5D3}",
          "spiral_notepad": "\u{1F5D2}",
          "spoon": "\u{1F944}",
          "squid": "\u{1F991}",
          "stadium": "\u{1F3DF}",
          "star": "\u2B50\uFE0F",
          "star2": "\u{1F31F}",
          "star_and_crescent": "\u262A\uFE0F",
          "star_of_david": "\u2721\uFE0F",
          "stars": "\u{1F320}",
          "station": "\u{1F689}",
          "statue_of_liberty": "\u{1F5FD}",
          "steam_locomotive": "\u{1F682}",
          "stew": "\u{1F372}",
          "stop_button": "\u23F9",
          "stop_sign": "\u{1F6D1}",
          "stopwatch": "\u23F1",
          "straight_ruler": "\u{1F4CF}",
          "strawberry": "\u{1F353}",
          "stuck_out_tongue": "\u{1F61B}",
          "stuck_out_tongue_closed_eyes": "\u{1F61D}",
          "stuck_out_tongue_winking_eye": "\u{1F61C}",
          "studio_microphone": "\u{1F399}",
          "stuffed_flatbread": "\u{1F959}",
          "sun_behind_large_cloud": "\u{1F325}",
          "sun_behind_rain_cloud": "\u{1F326}",
          "sun_behind_small_cloud": "\u{1F324}",
          "sun_with_face": "\u{1F31E}",
          "sunflower": "\u{1F33B}",
          "sunglasses": "\u{1F60E}",
          "sunny": "\u2600\uFE0F",
          "sunrise": "\u{1F305}",
          "sunrise_over_mountains": "\u{1F304}",
          "surfing_man": "\u{1F3C4}",
          "surfing_woman": "\u{1F3C4}&zwj;\u2640\uFE0F",
          "sushi": "\u{1F363}",
          "suspension_railway": "\u{1F69F}",
          "sweat": "\u{1F613}",
          "sweat_drops": "\u{1F4A6}",
          "sweat_smile": "\u{1F605}",
          "sweet_potato": "\u{1F360}",
          "swimming_man": "\u{1F3CA}",
          "swimming_woman": "\u{1F3CA}&zwj;\u2640\uFE0F",
          "symbols": "\u{1F523}",
          "synagogue": "\u{1F54D}",
          "syringe": "\u{1F489}",
          "taco": "\u{1F32E}",
          "tada": "\u{1F389}",
          "tanabata_tree": "\u{1F38B}",
          "taurus": "\u2649\uFE0F",
          "taxi": "\u{1F695}",
          "tea": "\u{1F375}",
          "telephone_receiver": "\u{1F4DE}",
          "telescope": "\u{1F52D}",
          "tennis": "\u{1F3BE}",
          "tent": "\u26FA\uFE0F",
          "thermometer": "\u{1F321}",
          "thinking": "\u{1F914}",
          "thought_balloon": "\u{1F4AD}",
          "ticket": "\u{1F3AB}",
          "tickets": "\u{1F39F}",
          "tiger": "\u{1F42F}",
          "tiger2": "\u{1F405}",
          "timer_clock": "\u23F2",
          "tipping_hand_man": "\u{1F481}&zwj;\u2642\uFE0F",
          "tired_face": "\u{1F62B}",
          "tm": "\u2122\uFE0F",
          "toilet": "\u{1F6BD}",
          "tokyo_tower": "\u{1F5FC}",
          "tomato": "\u{1F345}",
          "tongue": "\u{1F445}",
          "top": "\u{1F51D}",
          "tophat": "\u{1F3A9}",
          "tornado": "\u{1F32A}",
          "trackball": "\u{1F5B2}",
          "tractor": "\u{1F69C}",
          "traffic_light": "\u{1F6A5}",
          "train": "\u{1F68B}",
          "train2": "\u{1F686}",
          "tram": "\u{1F68A}",
          "triangular_flag_on_post": "\u{1F6A9}",
          "triangular_ruler": "\u{1F4D0}",
          "trident": "\u{1F531}",
          "triumph": "\u{1F624}",
          "trolleybus": "\u{1F68E}",
          "trophy": "\u{1F3C6}",
          "tropical_drink": "\u{1F379}",
          "tropical_fish": "\u{1F420}",
          "truck": "\u{1F69A}",
          "trumpet": "\u{1F3BA}",
          "tulip": "\u{1F337}",
          "tumbler_glass": "\u{1F943}",
          "turkey": "\u{1F983}",
          "turtle": "\u{1F422}",
          "tv": "\u{1F4FA}",
          "twisted_rightwards_arrows": "\u{1F500}",
          "two_hearts": "\u{1F495}",
          "two_men_holding_hands": "\u{1F46C}",
          "two_women_holding_hands": "\u{1F46D}",
          "u5272": "\u{1F239}",
          "u5408": "\u{1F234}",
          "u55b6": "\u{1F23A}",
          "u6307": "\u{1F22F}\uFE0F",
          "u6708": "\u{1F237}\uFE0F",
          "u6709": "\u{1F236}",
          "u6e80": "\u{1F235}",
          "u7121": "\u{1F21A}\uFE0F",
          "u7533": "\u{1F238}",
          "u7981": "\u{1F232}",
          "u7a7a": "\u{1F233}",
          "umbrella": "\u2614\uFE0F",
          "unamused": "\u{1F612}",
          "underage": "\u{1F51E}",
          "unicorn": "\u{1F984}",
          "unlock": "\u{1F513}",
          "up": "\u{1F199}",
          "upside_down_face": "\u{1F643}",
          "v": "\u270C\uFE0F",
          "vertical_traffic_light": "\u{1F6A6}",
          "vhs": "\u{1F4FC}",
          "vibration_mode": "\u{1F4F3}",
          "video_camera": "\u{1F4F9}",
          "video_game": "\u{1F3AE}",
          "violin": "\u{1F3BB}",
          "virgo": "\u264D\uFE0F",
          "volcano": "\u{1F30B}",
          "volleyball": "\u{1F3D0}",
          "vs": "\u{1F19A}",
          "vulcan_salute": "\u{1F596}",
          "walking_man": "\u{1F6B6}",
          "walking_woman": "\u{1F6B6}&zwj;\u2640\uFE0F",
          "waning_crescent_moon": "\u{1F318}",
          "waning_gibbous_moon": "\u{1F316}",
          "warning": "\u26A0\uFE0F",
          "wastebasket": "\u{1F5D1}",
          "watch": "\u231A\uFE0F",
          "water_buffalo": "\u{1F403}",
          "watermelon": "\u{1F349}",
          "wave": "\u{1F44B}",
          "wavy_dash": "\u3030\uFE0F",
          "waxing_crescent_moon": "\u{1F312}",
          "wc": "\u{1F6BE}",
          "weary": "\u{1F629}",
          "wedding": "\u{1F492}",
          "weight_lifting_man": "\u{1F3CB}\uFE0F",
          "weight_lifting_woman": "\u{1F3CB}\uFE0F&zwj;\u2640\uFE0F",
          "whale": "\u{1F433}",
          "whale2": "\u{1F40B}",
          "wheel_of_dharma": "\u2638\uFE0F",
          "wheelchair": "\u267F\uFE0F",
          "white_check_mark": "\u2705",
          "white_circle": "\u26AA\uFE0F",
          "white_flag": "\u{1F3F3}\uFE0F",
          "white_flower": "\u{1F4AE}",
          "white_large_square": "\u2B1C\uFE0F",
          "white_medium_small_square": "\u25FD\uFE0F",
          "white_medium_square": "\u25FB\uFE0F",
          "white_small_square": "\u25AB\uFE0F",
          "white_square_button": "\u{1F533}",
          "wilted_flower": "\u{1F940}",
          "wind_chime": "\u{1F390}",
          "wind_face": "\u{1F32C}",
          "wine_glass": "\u{1F377}",
          "wink": "\u{1F609}",
          "wolf": "\u{1F43A}",
          "woman": "\u{1F469}",
          "woman_artist": "\u{1F469}&zwj;\u{1F3A8}",
          "woman_astronaut": "\u{1F469}&zwj;\u{1F680}",
          "woman_cartwheeling": "\u{1F938}&zwj;\u2640\uFE0F",
          "woman_cook": "\u{1F469}&zwj;\u{1F373}",
          "woman_facepalming": "\u{1F926}&zwj;\u2640\uFE0F",
          "woman_factory_worker": "\u{1F469}&zwj;\u{1F3ED}",
          "woman_farmer": "\u{1F469}&zwj;\u{1F33E}",
          "woman_firefighter": "\u{1F469}&zwj;\u{1F692}",
          "woman_health_worker": "\u{1F469}&zwj;\u2695\uFE0F",
          "woman_judge": "\u{1F469}&zwj;\u2696\uFE0F",
          "woman_juggling": "\u{1F939}&zwj;\u2640\uFE0F",
          "woman_mechanic": "\u{1F469}&zwj;\u{1F527}",
          "woman_office_worker": "\u{1F469}&zwj;\u{1F4BC}",
          "woman_pilot": "\u{1F469}&zwj;\u2708\uFE0F",
          "woman_playing_handball": "\u{1F93E}&zwj;\u2640\uFE0F",
          "woman_playing_water_polo": "\u{1F93D}&zwj;\u2640\uFE0F",
          "woman_scientist": "\u{1F469}&zwj;\u{1F52C}",
          "woman_shrugging": "\u{1F937}&zwj;\u2640\uFE0F",
          "woman_singer": "\u{1F469}&zwj;\u{1F3A4}",
          "woman_student": "\u{1F469}&zwj;\u{1F393}",
          "woman_teacher": "\u{1F469}&zwj;\u{1F3EB}",
          "woman_technologist": "\u{1F469}&zwj;\u{1F4BB}",
          "woman_with_turban": "\u{1F473}&zwj;\u2640\uFE0F",
          "womans_clothes": "\u{1F45A}",
          "womans_hat": "\u{1F452}",
          "women_wrestling": "\u{1F93C}&zwj;\u2640\uFE0F",
          "womens": "\u{1F6BA}",
          "world_map": "\u{1F5FA}",
          "worried": "\u{1F61F}",
          "wrench": "\u{1F527}",
          "writing_hand": "\u270D\uFE0F",
          "x": "\u274C",
          "yellow_heart": "\u{1F49B}",
          "yen": "\u{1F4B4}",
          "yin_yang": "\u262F\uFE0F",
          "yum": "\u{1F60B}",
          "zap": "\u26A1\uFE0F",
          "zipper_mouth_face": "\u{1F910}",
          "zzz": "\u{1F4A4}",
          "octocat": '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
          "showdown": `<span style="font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>`
        };
        showdown2.Converter = function(converterOptions) {
          "use strict";
          var options = {}, langExtensions = [], outputModifiers = [], listeners = {}, setConvFlavor = setFlavor, metadata = {
            parsed: {},
            raw: "",
            format: ""
          };
          _constructor();
          function _constructor() {
            converterOptions = converterOptions || {};
            for (var gOpt in globalOptions) {
              if (globalOptions.hasOwnProperty(gOpt)) {
                options[gOpt] = globalOptions[gOpt];
              }
            }
            if (typeof converterOptions === "object") {
              for (var opt in converterOptions) {
                if (converterOptions.hasOwnProperty(opt)) {
                  options[opt] = converterOptions[opt];
                }
              }
            } else {
              throw Error("Converter expects the passed parameter to be an object, but " + typeof converterOptions + " was passed instead.");
            }
            if (options.extensions) {
              showdown2.helper.forEach(options.extensions, _parseExtension);
            }
          }
          function _parseExtension(ext, name) {
            name = name || null;
            if (showdown2.helper.isString(ext)) {
              ext = showdown2.helper.stdExtName(ext);
              name = ext;
              if (showdown2.extensions[ext]) {
                console.warn("DEPRECATION WARNING: " + ext + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!");
                legacyExtensionLoading(showdown2.extensions[ext], ext);
                return;
              } else if (!showdown2.helper.isUndefined(extensions[ext])) {
                ext = extensions[ext];
              } else {
                throw Error('Extension "' + ext + '" could not be loaded. It was either not found or is not a valid extension.');
              }
            }
            if (typeof ext === "function") {
              ext = ext();
            }
            if (!showdown2.helper.isArray(ext)) {
              ext = [ext];
            }
            var validExt = validate(ext, name);
            if (!validExt.valid) {
              throw Error(validExt.error);
            }
            for (var i5 = 0; i5 < ext.length; ++i5) {
              switch (ext[i5].type) {
                case "lang":
                  langExtensions.push(ext[i5]);
                  break;
                case "output":
                  outputModifiers.push(ext[i5]);
                  break;
              }
              if (ext[i5].hasOwnProperty("listeners")) {
                for (var ln in ext[i5].listeners) {
                  if (ext[i5].listeners.hasOwnProperty(ln)) {
                    listen(ln, ext[i5].listeners[ln]);
                  }
                }
              }
            }
          }
          function legacyExtensionLoading(ext, name) {
            if (typeof ext === "function") {
              ext = ext(new showdown2.Converter());
            }
            if (!showdown2.helper.isArray(ext)) {
              ext = [ext];
            }
            var valid = validate(ext, name);
            if (!valid.valid) {
              throw Error(valid.error);
            }
            for (var i5 = 0; i5 < ext.length; ++i5) {
              switch (ext[i5].type) {
                case "lang":
                  langExtensions.push(ext[i5]);
                  break;
                case "output":
                  outputModifiers.push(ext[i5]);
                  break;
                default:
                  throw Error("Extension loader error: Type unrecognized!!!");
              }
            }
          }
          function listen(name, callback) {
            if (!showdown2.helper.isString(name)) {
              throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof name + " given");
            }
            if (typeof callback !== "function") {
              throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof callback + " given");
            }
            if (!listeners.hasOwnProperty(name)) {
              listeners[name] = [];
            }
            listeners[name].push(callback);
          }
          function rTrimInputText(text) {
            var rsp = text.match(/^\s*/)[0].length, rgx = new RegExp("^\\s{0," + rsp + "}", "gm");
            return text.replace(rgx, "");
          }
          this._dispatch = function dispatch(evtName, text, options2, globals) {
            if (listeners.hasOwnProperty(evtName)) {
              for (var ei = 0; ei < listeners[evtName].length; ++ei) {
                var nText = listeners[evtName][ei](evtName, text, this, options2, globals);
                if (nText && typeof nText !== "undefined") {
                  text = nText;
                }
              }
            }
            return text;
          };
          this.listen = function(name, callback) {
            listen(name, callback);
            return this;
          };
          this.makeHtml = function(text) {
            if (!text) {
              return text;
            }
            var globals = {
              gHtmlBlocks: [],
              gHtmlMdBlocks: [],
              gHtmlSpans: [],
              gUrls: {},
              gTitles: {},
              gDimensions: {},
              gListLevel: 0,
              hashLinkCounts: {},
              langExtensions,
              outputModifiers,
              converter: this,
              ghCodeBlocks: [],
              metadata: {
                parsed: {},
                raw: "",
                format: ""
              }
            };
            text = text.replace(/¨/g, "\xA8T");
            text = text.replace(/\$/g, "\xA8D");
            text = text.replace(/\r\n/g, "\n");
            text = text.replace(/\r/g, "\n");
            text = text.replace(/\u00A0/g, "&nbsp;");
            if (options.smartIndentationFix) {
              text = rTrimInputText(text);
            }
            text = "\n\n" + text + "\n\n";
            text = showdown2.subParser("detab")(text, options, globals);
            text = text.replace(/^[ \t]+$/mg, "");
            showdown2.helper.forEach(langExtensions, function(ext) {
              text = showdown2.subParser("runExtension")(ext, text, options, globals);
            });
            text = showdown2.subParser("metadata")(text, options, globals);
            text = showdown2.subParser("hashPreCodeTags")(text, options, globals);
            text = showdown2.subParser("githubCodeBlocks")(text, options, globals);
            text = showdown2.subParser("hashHTMLBlocks")(text, options, globals);
            text = showdown2.subParser("hashCodeTags")(text, options, globals);
            text = showdown2.subParser("stripLinkDefinitions")(text, options, globals);
            text = showdown2.subParser("blockGamut")(text, options, globals);
            text = showdown2.subParser("unhashHTMLSpans")(text, options, globals);
            text = showdown2.subParser("unescapeSpecialChars")(text, options, globals);
            text = text.replace(/¨D/g, "$$");
            text = text.replace(/¨T/g, "\xA8");
            text = showdown2.subParser("completeHTMLDocument")(text, options, globals);
            showdown2.helper.forEach(outputModifiers, function(ext) {
              text = showdown2.subParser("runExtension")(ext, text, options, globals);
            });
            metadata = globals.metadata;
            return text;
          };
          this.makeMarkdown = this.makeMd = function(src, HTMLParser) {
            src = src.replace(/\r\n/g, "\n");
            src = src.replace(/\r/g, "\n");
            src = src.replace(/>[ \t]+</, ">\xA8NBSP;<");
            if (!HTMLParser) {
              if (window && window.document) {
                HTMLParser = window.document;
              } else {
                throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
              }
            }
            var doc = HTMLParser.createElement("div");
            doc.innerHTML = src;
            var globals = {
              preList: substitutePreCodeTags(doc)
            };
            clean(doc);
            var nodes = doc.childNodes, mdDoc = "";
            for (var i5 = 0; i5 < nodes.length; i5++) {
              mdDoc += showdown2.subParser("makeMarkdown.node")(nodes[i5], globals);
            }
            function clean(node) {
              for (var n6 = 0; n6 < node.childNodes.length; ++n6) {
                var child = node.childNodes[n6];
                if (child.nodeType === 3) {
                  if (!/\S/.test(child.nodeValue) && !/^[ ]+$/.test(child.nodeValue)) {
                    node.removeChild(child);
                    --n6;
                  } else {
                    child.nodeValue = child.nodeValue.split("\n").join(" ");
                    child.nodeValue = child.nodeValue.replace(/(\s)+/g, "$1");
                  }
                } else if (child.nodeType === 1) {
                  clean(child);
                }
              }
            }
            function substitutePreCodeTags(doc2) {
              var pres = doc2.querySelectorAll("pre"), presPH = [];
              for (var i6 = 0; i6 < pres.length; ++i6) {
                if (pres[i6].childElementCount === 1 && pres[i6].firstChild.tagName.toLowerCase() === "code") {
                  var content = pres[i6].firstChild.innerHTML.trim(), language = pres[i6].firstChild.getAttribute("data-language") || "";
                  if (language === "") {
                    var classes = pres[i6].firstChild.className.split(" ");
                    for (var c3 = 0; c3 < classes.length; ++c3) {
                      var matches = classes[c3].match(/^language-(.+)$/);
                      if (matches !== null) {
                        language = matches[1];
                        break;
                      }
                    }
                  }
                  content = showdown2.helper.unescapeHTMLEntities(content);
                  presPH.push(content);
                  pres[i6].outerHTML = '<precode language="' + language + '" precodenum="' + i6.toString() + '"></precode>';
                } else {
                  presPH.push(pres[i6].innerHTML);
                  pres[i6].innerHTML = "";
                  pres[i6].setAttribute("prenum", i6.toString());
                }
              }
              return presPH;
            }
            return mdDoc;
          };
          this.setOption = function(key, value) {
            options[key] = value;
          };
          this.getOption = function(key) {
            return options[key];
          };
          this.getOptions = function() {
            return options;
          };
          this.addExtension = function(extension, name) {
            name = name || null;
            _parseExtension(extension, name);
          };
          this.useExtension = function(extensionName) {
            _parseExtension(extensionName);
          };
          this.setFlavor = function(name) {
            if (!flavor.hasOwnProperty(name)) {
              throw Error(name + " flavor was not found");
            }
            var preset = flavor[name];
            setConvFlavor = name;
            for (var option in preset) {
              if (preset.hasOwnProperty(option)) {
                options[option] = preset[option];
              }
            }
          };
          this.getFlavor = function() {
            return setConvFlavor;
          };
          this.removeExtension = function(extension) {
            if (!showdown2.helper.isArray(extension)) {
              extension = [extension];
            }
            for (var a3 = 0; a3 < extension.length; ++a3) {
              var ext = extension[a3];
              for (var i5 = 0; i5 < langExtensions.length; ++i5) {
                if (langExtensions[i5] === ext) {
                  langExtensions.splice(i5, 1);
                }
              }
              for (var ii = 0; ii < outputModifiers.length; ++ii) {
                if (outputModifiers[ii] === ext) {
                  outputModifiers.splice(ii, 1);
                }
              }
            }
          };
          this.getAllExtensions = function() {
            return {
              language: langExtensions,
              output: outputModifiers
            };
          };
          this.getMetadata = function(raw) {
            if (raw) {
              return metadata.raw;
            } else {
              return metadata.parsed;
            }
          };
          this.getMetadataFormat = function() {
            return metadata.format;
          };
          this._setMetadataPair = function(key, value) {
            metadata.parsed[key] = value;
          };
          this._setMetadataFormat = function(format) {
            metadata.format = format;
          };
          this._setMetadataRaw = function(raw) {
            metadata.raw = raw;
          };
        };
        showdown2.subParser("anchors", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("anchors.before", text, options, globals);
          var writeAnchorTag = function(wholeMatch, linkText, linkId, url, m5, m6, title) {
            if (showdown2.helper.isUndefined(title)) {
              title = "";
            }
            linkId = linkId.toLowerCase();
            if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
              url = "";
            } else if (!url) {
              if (!linkId) {
                linkId = linkText.toLowerCase().replace(/ ?\n/g, " ");
              }
              url = "#" + linkId;
              if (!showdown2.helper.isUndefined(globals.gUrls[linkId])) {
                url = globals.gUrls[linkId];
                if (!showdown2.helper.isUndefined(globals.gTitles[linkId])) {
                  title = globals.gTitles[linkId];
                }
              } else {
                return wholeMatch;
              }
            }
            url = url.replace(showdown2.helper.regexes.asteriskDashAndColon, showdown2.helper.escapeCharactersCallback);
            var result = '<a href="' + url + '"';
            if (title !== "" && title !== null) {
              title = title.replace(/"/g, "&quot;");
              title = title.replace(showdown2.helper.regexes.asteriskDashAndColon, showdown2.helper.escapeCharactersCallback);
              result += ' title="' + title + '"';
            }
            if (options.openLinksInNewWindow && !/^#/.test(url)) {
              result += ' rel="noopener noreferrer" target="\xA8E95Eblank"';
            }
            result += ">" + linkText + "</a>";
            return result;
          };
          text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, writeAnchorTag);
          text = text.replace(
            /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
            writeAnchorTag
          );
          text = text.replace(
            /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
            writeAnchorTag
          );
          text = text.replace(/\[([^\[\]]+)]()()()()()/g, writeAnchorTag);
          if (options.ghMentions) {
            text = text.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi, function(wm, st, escape, mentions, username) {
              if (escape === "\\") {
                return st + mentions;
              }
              if (!showdown2.helper.isString(options.ghMentionsLink)) {
                throw new Error("ghMentionsLink option must be a string");
              }
              var lnk = options.ghMentionsLink.replace(/\{u}/g, username), target = "";
              if (options.openLinksInNewWindow) {
                target = ' rel="noopener noreferrer" target="\xA8E95Eblank"';
              }
              return st + '<a href="' + lnk + '"' + target + ">" + mentions + "</a>";
            });
          }
          text = globals.converter._dispatch("anchors.after", text, options, globals);
          return text;
        });
        var simpleURLRegex = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi, simpleURLRegex2 = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi, delimUrlRegex = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi, simpleMailRegex = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi, delimMailRegex = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, replaceLink = function(options) {
          "use strict";
          return function(wm, leadingMagicChars, link, m2, m3, trailingPunctuation, trailingMagicChars) {
            link = link.replace(showdown2.helper.regexes.asteriskDashAndColon, showdown2.helper.escapeCharactersCallback);
            var lnkTxt = link, append = "", target = "", lmc = leadingMagicChars || "", tmc = trailingMagicChars || "";
            if (/^www\./i.test(link)) {
              link = link.replace(/^www\./i, "http://www.");
            }
            if (options.excludeTrailingPunctuationFromURLs && trailingPunctuation) {
              append = trailingPunctuation;
            }
            if (options.openLinksInNewWindow) {
              target = ' rel="noopener noreferrer" target="\xA8E95Eblank"';
            }
            return lmc + '<a href="' + link + '"' + target + ">" + lnkTxt + "</a>" + append + tmc;
          };
        }, replaceMail = function(options, globals) {
          "use strict";
          return function(wholeMatch, b2, mail) {
            var href = "mailto:";
            b2 = b2 || "";
            mail = showdown2.subParser("unescapeSpecialChars")(mail, options, globals);
            if (options.encodeEmails) {
              href = showdown2.helper.encodeEmailAddress(href + mail);
              mail = showdown2.helper.encodeEmailAddress(mail);
            } else {
              href = href + mail;
            }
            return b2 + '<a href="' + href + '">' + mail + "</a>";
          };
        };
        showdown2.subParser("autoLinks", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("autoLinks.before", text, options, globals);
          text = text.replace(delimUrlRegex, replaceLink(options));
          text = text.replace(delimMailRegex, replaceMail(options, globals));
          text = globals.converter._dispatch("autoLinks.after", text, options, globals);
          return text;
        });
        showdown2.subParser("simplifiedAutoLinks", function(text, options, globals) {
          "use strict";
          if (!options.simplifiedAutoLink) {
            return text;
          }
          text = globals.converter._dispatch("simplifiedAutoLinks.before", text, options, globals);
          if (options.excludeTrailingPunctuationFromURLs) {
            text = text.replace(simpleURLRegex2, replaceLink(options));
          } else {
            text = text.replace(simpleURLRegex, replaceLink(options));
          }
          text = text.replace(simpleMailRegex, replaceMail(options, globals));
          text = globals.converter._dispatch("simplifiedAutoLinks.after", text, options, globals);
          return text;
        });
        showdown2.subParser("blockGamut", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("blockGamut.before", text, options, globals);
          text = showdown2.subParser("blockQuotes")(text, options, globals);
          text = showdown2.subParser("headers")(text, options, globals);
          text = showdown2.subParser("horizontalRule")(text, options, globals);
          text = showdown2.subParser("lists")(text, options, globals);
          text = showdown2.subParser("codeBlocks")(text, options, globals);
          text = showdown2.subParser("tables")(text, options, globals);
          text = showdown2.subParser("hashHTMLBlocks")(text, options, globals);
          text = showdown2.subParser("paragraphs")(text, options, globals);
          text = globals.converter._dispatch("blockGamut.after", text, options, globals);
          return text;
        });
        showdown2.subParser("blockQuotes", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("blockQuotes.before", text, options, globals);
          text = text + "\n\n";
          var rgx = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
          if (options.splitAdjacentBlockquotes) {
            rgx = /^ {0,3}>[\s\S]*?(?:\n\n)/gm;
          }
          text = text.replace(rgx, function(bq) {
            bq = bq.replace(/^[ \t]*>[ \t]?/gm, "");
            bq = bq.replace(/¨0/g, "");
            bq = bq.replace(/^[ \t]+$/gm, "");
            bq = showdown2.subParser("githubCodeBlocks")(bq, options, globals);
            bq = showdown2.subParser("blockGamut")(bq, options, globals);
            bq = bq.replace(/(^|\n)/g, "$1  ");
            bq = bq.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(wholeMatch, m1) {
              var pre = m1;
              pre = pre.replace(/^  /mg, "\xA80");
              pre = pre.replace(/¨0/g, "");
              return pre;
            });
            return showdown2.subParser("hashBlock")("<blockquote>\n" + bq + "\n</blockquote>", options, globals);
          });
          text = globals.converter._dispatch("blockQuotes.after", text, options, globals);
          return text;
        });
        showdown2.subParser("codeBlocks", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("codeBlocks.before", text, options, globals);
          text += "\xA80";
          var pattern = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
          text = text.replace(pattern, function(wholeMatch, m1, m2) {
            var codeblock = m1, nextChar = m2, end = "\n";
            codeblock = showdown2.subParser("outdent")(codeblock, options, globals);
            codeblock = showdown2.subParser("encodeCode")(codeblock, options, globals);
            codeblock = showdown2.subParser("detab")(codeblock, options, globals);
            codeblock = codeblock.replace(/^\n+/g, "");
            codeblock = codeblock.replace(/\n+$/g, "");
            if (options.omitExtraWLInCodeBlocks) {
              end = "";
            }
            codeblock = "<pre><code>" + codeblock + end + "</code></pre>";
            return showdown2.subParser("hashBlock")(codeblock, options, globals) + nextChar;
          });
          text = text.replace(/¨0/, "");
          text = globals.converter._dispatch("codeBlocks.after", text, options, globals);
          return text;
        });
        showdown2.subParser("codeSpans", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("codeSpans.before", text, options, globals);
          if (typeof text === "undefined") {
            text = "";
          }
          text = text.replace(
            /(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
            function(wholeMatch, m1, m2, m3) {
              var c3 = m3;
              c3 = c3.replace(/^([ \t]*)/g, "");
              c3 = c3.replace(/[ \t]*$/g, "");
              c3 = showdown2.subParser("encodeCode")(c3, options, globals);
              c3 = m1 + "<code>" + c3 + "</code>";
              c3 = showdown2.subParser("hashHTMLSpans")(c3, options, globals);
              return c3;
            }
          );
          text = globals.converter._dispatch("codeSpans.after", text, options, globals);
          return text;
        });
        showdown2.subParser("completeHTMLDocument", function(text, options, globals) {
          "use strict";
          if (!options.completeHTMLDocument) {
            return text;
          }
          text = globals.converter._dispatch("completeHTMLDocument.before", text, options, globals);
          var doctype = "html", doctypeParsed = "<!DOCTYPE HTML>\n", title = "", charset = '<meta charset="utf-8">\n', lang = "", metadata = "";
          if (typeof globals.metadata.parsed.doctype !== "undefined") {
            doctypeParsed = "<!DOCTYPE " + globals.metadata.parsed.doctype + ">\n";
            doctype = globals.metadata.parsed.doctype.toString().toLowerCase();
            if (doctype === "html" || doctype === "html5") {
              charset = '<meta charset="utf-8">';
            }
          }
          for (var meta in globals.metadata.parsed) {
            if (globals.metadata.parsed.hasOwnProperty(meta)) {
              switch (meta.toLowerCase()) {
                case "doctype":
                  break;
                case "title":
                  title = "<title>" + globals.metadata.parsed.title + "</title>\n";
                  break;
                case "charset":
                  if (doctype === "html" || doctype === "html5") {
                    charset = '<meta charset="' + globals.metadata.parsed.charset + '">\n';
                  } else {
                    charset = '<meta name="charset" content="' + globals.metadata.parsed.charset + '">\n';
                  }
                  break;
                case "language":
                case "lang":
                  lang = ' lang="' + globals.metadata.parsed[meta] + '"';
                  metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
                  break;
                default:
                  metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
              }
            }
          }
          text = doctypeParsed + "<html" + lang + ">\n<head>\n" + title + charset + metadata + "</head>\n<body>\n" + text.trim() + "\n</body>\n</html>";
          text = globals.converter._dispatch("completeHTMLDocument.after", text, options, globals);
          return text;
        });
        showdown2.subParser("detab", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("detab.before", text, options, globals);
          text = text.replace(/\t(?=\t)/g, "    ");
          text = text.replace(/\t/g, "\xA8A\xA8B");
          text = text.replace(/¨B(.+?)¨A/g, function(wholeMatch, m1) {
            var leadingText = m1, numSpaces = 4 - leadingText.length % 4;
            for (var i5 = 0; i5 < numSpaces; i5++) {
              leadingText += " ";
            }
            return leadingText;
          });
          text = text.replace(/¨A/g, "    ");
          text = text.replace(/¨B/g, "");
          text = globals.converter._dispatch("detab.after", text, options, globals);
          return text;
        });
        showdown2.subParser("ellipsis", function(text, options, globals) {
          "use strict";
          if (!options.ellipsis) {
            return text;
          }
          text = globals.converter._dispatch("ellipsis.before", text, options, globals);
          text = text.replace(/\.\.\./g, "\u2026");
          text = globals.converter._dispatch("ellipsis.after", text, options, globals);
          return text;
        });
        showdown2.subParser("emoji", function(text, options, globals) {
          "use strict";
          if (!options.emoji) {
            return text;
          }
          text = globals.converter._dispatch("emoji.before", text, options, globals);
          var emojiRgx = /:([\S]+?):/g;
          text = text.replace(emojiRgx, function(wm, emojiCode) {
            if (showdown2.helper.emojis.hasOwnProperty(emojiCode)) {
              return showdown2.helper.emojis[emojiCode];
            }
            return wm;
          });
          text = globals.converter._dispatch("emoji.after", text, options, globals);
          return text;
        });
        showdown2.subParser("encodeAmpsAndAngles", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("encodeAmpsAndAngles.before", text, options, globals);
          text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;");
          text = text.replace(/<(?![a-z\/?$!])/gi, "&lt;");
          text = text.replace(/</g, "&lt;");
          text = text.replace(/>/g, "&gt;");
          text = globals.converter._dispatch("encodeAmpsAndAngles.after", text, options, globals);
          return text;
        });
        showdown2.subParser("encodeBackslashEscapes", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("encodeBackslashEscapes.before", text, options, globals);
          text = text.replace(/\\(\\)/g, showdown2.helper.escapeCharactersCallback);
          text = text.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g, showdown2.helper.escapeCharactersCallback);
          text = globals.converter._dispatch("encodeBackslashEscapes.after", text, options, globals);
          return text;
        });
        showdown2.subParser("encodeCode", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("encodeCode.before", text, options, globals);
          text = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, showdown2.helper.escapeCharactersCallback);
          text = globals.converter._dispatch("encodeCode.after", text, options, globals);
          return text;
        });
        showdown2.subParser("escapeSpecialCharsWithinTagAttributes", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", text, options, globals);
          var tags = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, comments = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
          text = text.replace(tags, function(wholeMatch) {
            return wholeMatch.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, showdown2.helper.escapeCharactersCallback);
          });
          text = text.replace(comments, function(wholeMatch) {
            return wholeMatch.replace(/([\\`*_~=|])/g, showdown2.helper.escapeCharactersCallback);
          });
          text = globals.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", text, options, globals);
          return text;
        });
        showdown2.subParser("githubCodeBlocks", function(text, options, globals) {
          "use strict";
          if (!options.ghCodeBlocks) {
            return text;
          }
          text = globals.converter._dispatch("githubCodeBlocks.before", text, options, globals);
          text += "\xA80";
          text = text.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function(wholeMatch, delim, language, codeblock) {
            var end = options.omitExtraWLInCodeBlocks ? "" : "\n";
            codeblock = showdown2.subParser("encodeCode")(codeblock, options, globals);
            codeblock = showdown2.subParser("detab")(codeblock, options, globals);
            codeblock = codeblock.replace(/^\n+/g, "");
            codeblock = codeblock.replace(/\n+$/g, "");
            codeblock = "<pre><code" + (language ? ' class="' + language + " language-" + language + '"' : "") + ">" + codeblock + end + "</code></pre>";
            codeblock = showdown2.subParser("hashBlock")(codeblock, options, globals);
            return "\n\n\xA8G" + (globals.ghCodeBlocks.push({ text: wholeMatch, codeblock }) - 1) + "G\n\n";
          });
          text = text.replace(/¨0/, "");
          return globals.converter._dispatch("githubCodeBlocks.after", text, options, globals);
        });
        showdown2.subParser("hashBlock", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("hashBlock.before", text, options, globals);
          text = text.replace(/(^\n+|\n+$)/g, "");
          text = "\n\n\xA8K" + (globals.gHtmlBlocks.push(text) - 1) + "K\n\n";
          text = globals.converter._dispatch("hashBlock.after", text, options, globals);
          return text;
        });
        showdown2.subParser("hashCodeTags", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("hashCodeTags.before", text, options, globals);
          var repFunc = function(wholeMatch, match, left, right) {
            var codeblock = left + showdown2.subParser("encodeCode")(match, options, globals) + right;
            return "\xA8C" + (globals.gHtmlSpans.push(codeblock) - 1) + "C";
          };
          text = showdown2.helper.replaceRecursiveRegExp(text, repFunc, "<code\\b[^>]*>", "</code>", "gim");
          text = globals.converter._dispatch("hashCodeTags.after", text, options, globals);
          return text;
        });
        showdown2.subParser("hashElement", function(text, options, globals) {
          "use strict";
          return function(wholeMatch, m1) {
            var blockText = m1;
            blockText = blockText.replace(/\n\n/g, "\n");
            blockText = blockText.replace(/^\n/, "");
            blockText = blockText.replace(/\n+$/g, "");
            blockText = "\n\n\xA8K" + (globals.gHtmlBlocks.push(blockText) - 1) + "K\n\n";
            return blockText;
          };
        });
        showdown2.subParser("hashHTMLBlocks", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("hashHTMLBlocks.before", text, options, globals);
          var blockTags = [
            "pre",
            "div",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "blockquote",
            "table",
            "dl",
            "ol",
            "ul",
            "script",
            "noscript",
            "form",
            "fieldset",
            "iframe",
            "math",
            "style",
            "section",
            "header",
            "footer",
            "nav",
            "article",
            "aside",
            "address",
            "audio",
            "canvas",
            "figure",
            "hgroup",
            "output",
            "video",
            "p"
          ], repFunc = function(wholeMatch, match, left, right) {
            var txt = wholeMatch;
            if (left.search(/\bmarkdown\b/) !== -1) {
              txt = left + globals.converter.makeHtml(match) + right;
            }
            return "\n\n\xA8K" + (globals.gHtmlBlocks.push(txt) - 1) + "K\n\n";
          };
          if (options.backslashEscapesHTMLTags) {
            text = text.replace(/\\<(\/?[^>]+?)>/g, function(wm, inside) {
              return "&lt;" + inside + "&gt;";
            });
          }
          for (var i5 = 0; i5 < blockTags.length; ++i5) {
            var opTagPos, rgx1 = new RegExp("^ {0,3}(<" + blockTags[i5] + "\\b[^>]*>)", "im"), patLeft = "<" + blockTags[i5] + "\\b[^>]*>", patRight = "</" + blockTags[i5] + ">";
            while ((opTagPos = showdown2.helper.regexIndexOf(text, rgx1)) !== -1) {
              var subTexts = showdown2.helper.splitAtIndex(text, opTagPos), newSubText1 = showdown2.helper.replaceRecursiveRegExp(subTexts[1], repFunc, patLeft, patRight, "im");
              if (newSubText1 === subTexts[1]) {
                break;
              }
              text = subTexts[0].concat(newSubText1);
            }
          }
          text = text.replace(
            /(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
            showdown2.subParser("hashElement")(text, options, globals)
          );
          text = showdown2.helper.replaceRecursiveRegExp(text, function(txt) {
            return "\n\n\xA8K" + (globals.gHtmlBlocks.push(txt) - 1) + "K\n\n";
          }, "^ {0,3}<!--", "-->", "gm");
          text = text.replace(
            /(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
            showdown2.subParser("hashElement")(text, options, globals)
          );
          text = globals.converter._dispatch("hashHTMLBlocks.after", text, options, globals);
          return text;
        });
        showdown2.subParser("hashHTMLSpans", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("hashHTMLSpans.before", text, options, globals);
          function hashHTMLSpan(html3) {
            return "\xA8C" + (globals.gHtmlSpans.push(html3) - 1) + "C";
          }
          text = text.replace(/<[^>]+?\/>/gi, function(wm) {
            return hashHTMLSpan(wm);
          });
          text = text.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function(wm) {
            return hashHTMLSpan(wm);
          });
          text = text.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function(wm) {
            return hashHTMLSpan(wm);
          });
          text = text.replace(/<[^>]+?>/gi, function(wm) {
            return hashHTMLSpan(wm);
          });
          text = globals.converter._dispatch("hashHTMLSpans.after", text, options, globals);
          return text;
        });
        showdown2.subParser("unhashHTMLSpans", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("unhashHTMLSpans.before", text, options, globals);
          for (var i5 = 0; i5 < globals.gHtmlSpans.length; ++i5) {
            var repText = globals.gHtmlSpans[i5], limit = 0;
            while (/¨C(\d+)C/.test(repText)) {
              var num = RegExp.$1;
              repText = repText.replace("\xA8C" + num + "C", globals.gHtmlSpans[num]);
              if (limit === 10) {
                console.error("maximum nesting of 10 spans reached!!!");
                break;
              }
              ++limit;
            }
            text = text.replace("\xA8C" + i5 + "C", repText);
          }
          text = globals.converter._dispatch("unhashHTMLSpans.after", text, options, globals);
          return text;
        });
        showdown2.subParser("hashPreCodeTags", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("hashPreCodeTags.before", text, options, globals);
          var repFunc = function(wholeMatch, match, left, right) {
            var codeblock = left + showdown2.subParser("encodeCode")(match, options, globals) + right;
            return "\n\n\xA8G" + (globals.ghCodeBlocks.push({ text: wholeMatch, codeblock }) - 1) + "G\n\n";
          };
          text = showdown2.helper.replaceRecursiveRegExp(text, repFunc, "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim");
          text = globals.converter._dispatch("hashPreCodeTags.after", text, options, globals);
          return text;
        });
        showdown2.subParser("headers", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("headers.before", text, options, globals);
          var headerLevelStart = isNaN(parseInt(options.headerLevelStart)) ? 1 : parseInt(options.headerLevelStart), setextRegexH1 = options.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm, setextRegexH2 = options.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
          text = text.replace(setextRegexH1, function(wholeMatch, m1) {
            var spanGamut = showdown2.subParser("spanGamut")(m1, options, globals), hID = options.noHeaderId ? "" : ' id="' + headerId(m1) + '"', hLevel = headerLevelStart, hashBlock = "<h" + hLevel + hID + ">" + spanGamut + "</h" + hLevel + ">";
            return showdown2.subParser("hashBlock")(hashBlock, options, globals);
          });
          text = text.replace(setextRegexH2, function(matchFound, m1) {
            var spanGamut = showdown2.subParser("spanGamut")(m1, options, globals), hID = options.noHeaderId ? "" : ' id="' + headerId(m1) + '"', hLevel = headerLevelStart + 1, hashBlock = "<h" + hLevel + hID + ">" + spanGamut + "</h" + hLevel + ">";
            return showdown2.subParser("hashBlock")(hashBlock, options, globals);
          });
          var atxStyle = options.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
          text = text.replace(atxStyle, function(wholeMatch, m1, m2) {
            var hText = m2;
            if (options.customizedHeaderId) {
              hText = m2.replace(/\s?\{([^{]+?)}\s*$/, "");
            }
            var span = showdown2.subParser("spanGamut")(hText, options, globals), hID = options.noHeaderId ? "" : ' id="' + headerId(m2) + '"', hLevel = headerLevelStart - 1 + m1.length, header = "<h" + hLevel + hID + ">" + span + "</h" + hLevel + ">";
            return showdown2.subParser("hashBlock")(header, options, globals);
          });
          function headerId(m2) {
            var title, prefix;
            if (options.customizedHeaderId) {
              var match = m2.match(/\{([^{]+?)}\s*$/);
              if (match && match[1]) {
                m2 = match[1];
              }
            }
            title = m2;
            if (showdown2.helper.isString(options.prefixHeaderId)) {
              prefix = options.prefixHeaderId;
            } else if (options.prefixHeaderId === true) {
              prefix = "section-";
            } else {
              prefix = "";
            }
            if (!options.rawPrefixHeaderId) {
              title = prefix + title;
            }
            if (options.ghCompatibleHeaderId) {
              title = title.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase();
            } else if (options.rawHeaderId) {
              title = title.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "\xA8").replace(/¨D/g, "$").replace(/["']/g, "-").toLowerCase();
            } else {
              title = title.replace(/[^\w]/g, "").toLowerCase();
            }
            if (options.rawPrefixHeaderId) {
              title = prefix + title;
            }
            if (globals.hashLinkCounts[title]) {
              title = title + "-" + globals.hashLinkCounts[title]++;
            } else {
              globals.hashLinkCounts[title] = 1;
            }
            return title;
          }
          text = globals.converter._dispatch("headers.after", text, options, globals);
          return text;
        });
        showdown2.subParser("horizontalRule", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("horizontalRule.before", text, options, globals);
          var key = showdown2.subParser("hashBlock")("<hr />", options, globals);
          text = text.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, key);
          text = text.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, key);
          text = text.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, key);
          text = globals.converter._dispatch("horizontalRule.after", text, options, globals);
          return text;
        });
        showdown2.subParser("images", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("images.before", text, options, globals);
          var inlineRegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, crazyRegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, base64RegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, referenceRegExp = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, refShortcutRegExp = /!\[([^\[\]]+)]()()()()()/g;
          function writeImageTagBase64(wholeMatch, altText, linkId, url, width, height, m5, title) {
            url = url.replace(/\s/g, "");
            return writeImageTag(wholeMatch, altText, linkId, url, width, height, m5, title);
          }
          function writeImageTag(wholeMatch, altText, linkId, url, width, height, m5, title) {
            var gUrls = globals.gUrls, gTitles = globals.gTitles, gDims = globals.gDimensions;
            linkId = linkId.toLowerCase();
            if (!title) {
              title = "";
            }
            if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
              url = "";
            } else if (url === "" || url === null) {
              if (linkId === "" || linkId === null) {
                linkId = altText.toLowerCase().replace(/ ?\n/g, " ");
              }
              url = "#" + linkId;
              if (!showdown2.helper.isUndefined(gUrls[linkId])) {
                url = gUrls[linkId];
                if (!showdown2.helper.isUndefined(gTitles[linkId])) {
                  title = gTitles[linkId];
                }
                if (!showdown2.helper.isUndefined(gDims[linkId])) {
                  width = gDims[linkId].width;
                  height = gDims[linkId].height;
                }
              } else {
                return wholeMatch;
              }
            }
            altText = altText.replace(/"/g, "&quot;").replace(showdown2.helper.regexes.asteriskDashAndColon, showdown2.helper.escapeCharactersCallback);
            url = url.replace(showdown2.helper.regexes.asteriskDashAndColon, showdown2.helper.escapeCharactersCallback);
            var result = '<img src="' + url + '" alt="' + altText + '"';
            if (title && showdown2.helper.isString(title)) {
              title = title.replace(/"/g, "&quot;").replace(showdown2.helper.regexes.asteriskDashAndColon, showdown2.helper.escapeCharactersCallback);
              result += ' title="' + title + '"';
            }
            if (width && height) {
              width = width === "*" ? "auto" : width;
              height = height === "*" ? "auto" : height;
              result += ' width="' + width + '"';
              result += ' height="' + height + '"';
            }
            result += " />";
            return result;
          }
          text = text.replace(referenceRegExp, writeImageTag);
          text = text.replace(base64RegExp, writeImageTagBase64);
          text = text.replace(crazyRegExp, writeImageTag);
          text = text.replace(inlineRegExp, writeImageTag);
          text = text.replace(refShortcutRegExp, writeImageTag);
          text = globals.converter._dispatch("images.after", text, options, globals);
          return text;
        });
        showdown2.subParser("italicsAndBold", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("italicsAndBold.before", text, options, globals);
          function parseInside(txt, left, right) {
            return left + txt + right;
          }
          if (options.literalMidWordUnderscores) {
            text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function(wm, txt) {
              return parseInside(txt, "<strong><em>", "</em></strong>");
            });
            text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function(wm, txt) {
              return parseInside(txt, "<strong>", "</strong>");
            });
            text = text.replace(/\b_(\S[\s\S]*?)_\b/g, function(wm, txt) {
              return parseInside(txt, "<em>", "</em>");
            });
          } else {
            text = text.replace(/___(\S[\s\S]*?)___/g, function(wm, m2) {
              return /\S$/.test(m2) ? parseInside(m2, "<strong><em>", "</em></strong>") : wm;
            });
            text = text.replace(/__(\S[\s\S]*?)__/g, function(wm, m2) {
              return /\S$/.test(m2) ? parseInside(m2, "<strong>", "</strong>") : wm;
            });
            text = text.replace(/_([^\s_][\s\S]*?)_/g, function(wm, m2) {
              return /\S$/.test(m2) ? parseInside(m2, "<em>", "</em>") : wm;
            });
          }
          if (options.literalMidWordAsterisks) {
            text = text.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function(wm, lead, txt) {
              return parseInside(txt, lead + "<strong><em>", "</em></strong>");
            });
            text = text.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function(wm, lead, txt) {
              return parseInside(txt, lead + "<strong>", "</strong>");
            });
            text = text.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function(wm, lead, txt) {
              return parseInside(txt, lead + "<em>", "</em>");
            });
          } else {
            text = text.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function(wm, m2) {
              return /\S$/.test(m2) ? parseInside(m2, "<strong><em>", "</em></strong>") : wm;
            });
            text = text.replace(/\*\*(\S[\s\S]*?)\*\*/g, function(wm, m2) {
              return /\S$/.test(m2) ? parseInside(m2, "<strong>", "</strong>") : wm;
            });
            text = text.replace(/\*([^\s*][\s\S]*?)\*/g, function(wm, m2) {
              return /\S$/.test(m2) ? parseInside(m2, "<em>", "</em>") : wm;
            });
          }
          text = globals.converter._dispatch("italicsAndBold.after", text, options, globals);
          return text;
        });
        showdown2.subParser("lists", function(text, options, globals) {
          "use strict";
          function processListItems(listStr, trimTrailing) {
            globals.gListLevel++;
            listStr = listStr.replace(/\n{2,}$/, "\n");
            listStr += "\xA80";
            var rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm, isParagraphed = /\n[ \t]*\n(?!¨0)/.test(listStr);
            if (options.disableForced4SpacesIndentedSublists) {
              rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm;
            }
            listStr = listStr.replace(rgx, function(wholeMatch, m1, m2, m3, m4, taskbtn, checked) {
              checked = checked && checked.trim() !== "";
              var item = showdown2.subParser("outdent")(m4, options, globals), bulletStyle = "";
              if (taskbtn && options.tasklists) {
                bulletStyle = ' class="task-list-item" style="list-style-type: none;"';
                item = item.replace(/^[ \t]*\[(x|X| )?]/m, function() {
                  var otp = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
                  if (checked) {
                    otp += " checked";
                  }
                  otp += ">";
                  return otp;
                });
              }
              item = item.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function(wm2) {
                return "\xA8A" + wm2;
              });
              if (m1 || item.search(/\n{2,}/) > -1) {
                item = showdown2.subParser("githubCodeBlocks")(item, options, globals);
                item = showdown2.subParser("blockGamut")(item, options, globals);
              } else {
                item = showdown2.subParser("lists")(item, options, globals);
                item = item.replace(/\n$/, "");
                item = showdown2.subParser("hashHTMLBlocks")(item, options, globals);
                item = item.replace(/\n\n+/g, "\n\n");
                if (isParagraphed) {
                  item = showdown2.subParser("paragraphs")(item, options, globals);
                } else {
                  item = showdown2.subParser("spanGamut")(item, options, globals);
                }
              }
              item = item.replace("\xA8A", "");
              item = "<li" + bulletStyle + ">" + item + "</li>\n";
              return item;
            });
            listStr = listStr.replace(/¨0/g, "");
            globals.gListLevel--;
            if (trimTrailing) {
              listStr = listStr.replace(/\s+$/, "");
            }
            return listStr;
          }
          function styleStartNumber(list, listType) {
            if (listType === "ol") {
              var res = list.match(/^ *(\d+)\./);
              if (res && res[1] !== "1") {
                return ' start="' + res[1] + '"';
              }
            }
            return "";
          }
          function parseConsecutiveLists(list, listType, trimTrailing) {
            var olRgx = options.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm, ulRgx = options.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm, counterRxg = listType === "ul" ? olRgx : ulRgx, result = "";
            if (list.search(counterRxg) !== -1) {
              (function parseCL(txt) {
                var pos = txt.search(counterRxg), style3 = styleStartNumber(list, listType);
                if (pos !== -1) {
                  result += "\n\n<" + listType + style3 + ">\n" + processListItems(txt.slice(0, pos), !!trimTrailing) + "</" + listType + ">\n";
                  listType = listType === "ul" ? "ol" : "ul";
                  counterRxg = listType === "ul" ? olRgx : ulRgx;
                  parseCL(txt.slice(pos));
                } else {
                  result += "\n\n<" + listType + style3 + ">\n" + processListItems(txt, !!trimTrailing) + "</" + listType + ">\n";
                }
              })(list);
            } else {
              var style2 = styleStartNumber(list, listType);
              result = "\n\n<" + listType + style2 + ">\n" + processListItems(list, !!trimTrailing) + "</" + listType + ">\n";
            }
            return result;
          }
          text = globals.converter._dispatch("lists.before", text, options, globals);
          text += "\xA80";
          if (globals.gListLevel) {
            text = text.replace(
              /^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
              function(wholeMatch, list, m2) {
                var listType = m2.search(/[*+-]/g) > -1 ? "ul" : "ol";
                return parseConsecutiveLists(list, listType, true);
              }
            );
          } else {
            text = text.replace(
              /(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
              function(wholeMatch, m1, list, m3) {
                var listType = m3.search(/[*+-]/g) > -1 ? "ul" : "ol";
                return parseConsecutiveLists(list, listType, false);
              }
            );
          }
          text = text.replace(/¨0/, "");
          text = globals.converter._dispatch("lists.after", text, options, globals);
          return text;
        });
        showdown2.subParser("metadata", function(text, options, globals) {
          "use strict";
          if (!options.metadata) {
            return text;
          }
          text = globals.converter._dispatch("metadata.before", text, options, globals);
          function parseMetadataContents(content) {
            globals.metadata.raw = content;
            content = content.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
            content = content.replace(/\n {4}/g, " ");
            content.replace(/^([\S ]+): +([\s\S]+?)$/gm, function(wm, key, value) {
              globals.metadata.parsed[key] = value;
              return "";
            });
          }
          text = text.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function(wholematch, format, content) {
            parseMetadataContents(content);
            return "\xA8M";
          });
          text = text.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function(wholematch, format, content) {
            if (format) {
              globals.metadata.format = format;
            }
            parseMetadataContents(content);
            return "\xA8M";
          });
          text = text.replace(/¨M/g, "");
          text = globals.converter._dispatch("metadata.after", text, options, globals);
          return text;
        });
        showdown2.subParser("outdent", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("outdent.before", text, options, globals);
          text = text.replace(/^(\t|[ ]{1,4})/gm, "\xA80");
          text = text.replace(/¨0/g, "");
          text = globals.converter._dispatch("outdent.after", text, options, globals);
          return text;
        });
        showdown2.subParser("paragraphs", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("paragraphs.before", text, options, globals);
          text = text.replace(/^\n+/g, "");
          text = text.replace(/\n+$/g, "");
          var grafs = text.split(/\n{2,}/g), grafsOut = [], end = grafs.length;
          for (var i5 = 0; i5 < end; i5++) {
            var str = grafs[i5];
            if (str.search(/¨(K|G)(\d+)\1/g) >= 0) {
              grafsOut.push(str);
            } else if (str.search(/\S/) >= 0) {
              str = showdown2.subParser("spanGamut")(str, options, globals);
              str = str.replace(/^([ \t]*)/g, "<p>");
              str += "</p>";
              grafsOut.push(str);
            }
          }
          end = grafsOut.length;
          for (i5 = 0; i5 < end; i5++) {
            var blockText = "", grafsOutIt = grafsOut[i5], codeFlag = false;
            while (/¨(K|G)(\d+)\1/.test(grafsOutIt)) {
              var delim = RegExp.$1, num = RegExp.$2;
              if (delim === "K") {
                blockText = globals.gHtmlBlocks[num];
              } else {
                if (codeFlag) {
                  blockText = showdown2.subParser("encodeCode")(globals.ghCodeBlocks[num].text, options, globals);
                } else {
                  blockText = globals.ghCodeBlocks[num].codeblock;
                }
              }
              blockText = blockText.replace(/\$/g, "$$$$");
              grafsOutIt = grafsOutIt.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, blockText);
              if (/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(grafsOutIt)) {
                codeFlag = true;
              }
            }
            grafsOut[i5] = grafsOutIt;
          }
          text = grafsOut.join("\n");
          text = text.replace(/^\n+/g, "");
          text = text.replace(/\n+$/g, "");
          return globals.converter._dispatch("paragraphs.after", text, options, globals);
        });
        showdown2.subParser("runExtension", function(ext, text, options, globals) {
          "use strict";
          if (ext.filter) {
            text = ext.filter(text, globals.converter, options);
          } else if (ext.regex) {
            var re = ext.regex;
            if (!(re instanceof RegExp)) {
              re = new RegExp(re, "g");
            }
            text = text.replace(re, ext.replace);
          }
          return text;
        });
        showdown2.subParser("spanGamut", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("spanGamut.before", text, options, globals);
          text = showdown2.subParser("codeSpans")(text, options, globals);
          text = showdown2.subParser("escapeSpecialCharsWithinTagAttributes")(text, options, globals);
          text = showdown2.subParser("encodeBackslashEscapes")(text, options, globals);
          text = showdown2.subParser("images")(text, options, globals);
          text = showdown2.subParser("anchors")(text, options, globals);
          text = showdown2.subParser("autoLinks")(text, options, globals);
          text = showdown2.subParser("simplifiedAutoLinks")(text, options, globals);
          text = showdown2.subParser("emoji")(text, options, globals);
          text = showdown2.subParser("underline")(text, options, globals);
          text = showdown2.subParser("italicsAndBold")(text, options, globals);
          text = showdown2.subParser("strikethrough")(text, options, globals);
          text = showdown2.subParser("ellipsis")(text, options, globals);
          text = showdown2.subParser("hashHTMLSpans")(text, options, globals);
          text = showdown2.subParser("encodeAmpsAndAngles")(text, options, globals);
          if (options.simpleLineBreaks) {
            if (!/\n\n¨K/.test(text)) {
              text = text.replace(/\n+/g, "<br />\n");
            }
          } else {
            text = text.replace(/  +\n/g, "<br />\n");
          }
          text = globals.converter._dispatch("spanGamut.after", text, options, globals);
          return text;
        });
        showdown2.subParser("strikethrough", function(text, options, globals) {
          "use strict";
          function parseInside(txt) {
            if (options.simplifiedAutoLink) {
              txt = showdown2.subParser("simplifiedAutoLinks")(txt, options, globals);
            }
            return "<del>" + txt + "</del>";
          }
          if (options.strikethrough) {
            text = globals.converter._dispatch("strikethrough.before", text, options, globals);
            text = text.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function(wm, txt) {
              return parseInside(txt);
            });
            text = globals.converter._dispatch("strikethrough.after", text, options, globals);
          }
          return text;
        });
        showdown2.subParser("stripLinkDefinitions", function(text, options, globals) {
          "use strict";
          var regex = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, base64Regex = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;
          text += "\xA80";
          var replaceFunc = function(wholeMatch, linkId, url, width, height, blankLines, title) {
            linkId = linkId.toLowerCase();
            if (text.toLowerCase().split(linkId).length - 1 < 2) {
              return wholeMatch;
            }
            if (url.match(/^data:.+?\/.+?;base64,/)) {
              globals.gUrls[linkId] = url.replace(/\s/g, "");
            } else {
              globals.gUrls[linkId] = showdown2.subParser("encodeAmpsAndAngles")(url, options, globals);
            }
            if (blankLines) {
              return blankLines + title;
            } else {
              if (title) {
                globals.gTitles[linkId] = title.replace(/"|'/g, "&quot;");
              }
              if (options.parseImgDimensions && width && height) {
                globals.gDimensions[linkId] = {
                  width,
                  height
                };
              }
            }
            return "";
          };
          text = text.replace(base64Regex, replaceFunc);
          text = text.replace(regex, replaceFunc);
          text = text.replace(/¨0/, "");
          return text;
        });
        showdown2.subParser("tables", function(text, options, globals) {
          "use strict";
          if (!options.tables) {
            return text;
          }
          var tableRgx = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, singeColTblRgx = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;
          function parseStyles(sLine) {
            if (/^:[ \t]*--*$/.test(sLine)) {
              return ' style="text-align:left;"';
            } else if (/^--*[ \t]*:[ \t]*$/.test(sLine)) {
              return ' style="text-align:right;"';
            } else if (/^:[ \t]*--*[ \t]*:$/.test(sLine)) {
              return ' style="text-align:center;"';
            } else {
              return "";
            }
          }
          function parseHeaders(header, style2) {
            var id = "";
            header = header.trim();
            if (options.tablesHeaderId || options.tableHeaderId) {
              id = ' id="' + header.replace(/ /g, "_").toLowerCase() + '"';
            }
            header = showdown2.subParser("spanGamut")(header, options, globals);
            return "<th" + id + style2 + ">" + header + "</th>\n";
          }
          function parseCells(cell, style2) {
            var subText = showdown2.subParser("spanGamut")(cell, options, globals);
            return "<td" + style2 + ">" + subText + "</td>\n";
          }
          function buildTable(headers, cells) {
            var tb = "<table>\n<thead>\n<tr>\n", tblLgn = headers.length;
            for (var i5 = 0; i5 < tblLgn; ++i5) {
              tb += headers[i5];
            }
            tb += "</tr>\n</thead>\n<tbody>\n";
            for (i5 = 0; i5 < cells.length; ++i5) {
              tb += "<tr>\n";
              for (var ii = 0; ii < tblLgn; ++ii) {
                tb += cells[i5][ii];
              }
              tb += "</tr>\n";
            }
            tb += "</tbody>\n</table>\n";
            return tb;
          }
          function parseTable(rawTable) {
            var i5, tableLines = rawTable.split("\n");
            for (i5 = 0; i5 < tableLines.length; ++i5) {
              if (/^ {0,3}\|/.test(tableLines[i5])) {
                tableLines[i5] = tableLines[i5].replace(/^ {0,3}\|/, "");
              }
              if (/\|[ \t]*$/.test(tableLines[i5])) {
                tableLines[i5] = tableLines[i5].replace(/\|[ \t]*$/, "");
              }
              tableLines[i5] = showdown2.subParser("codeSpans")(tableLines[i5], options, globals);
            }
            var rawHeaders = tableLines[0].split("|").map(function(s5) {
              return s5.trim();
            }), rawStyles = tableLines[1].split("|").map(function(s5) {
              return s5.trim();
            }), rawCells = [], headers = [], styles = [], cells = [];
            tableLines.shift();
            tableLines.shift();
            for (i5 = 0; i5 < tableLines.length; ++i5) {
              if (tableLines[i5].trim() === "") {
                continue;
              }
              rawCells.push(
                tableLines[i5].split("|").map(function(s5) {
                  return s5.trim();
                })
              );
            }
            if (rawHeaders.length < rawStyles.length) {
              return rawTable;
            }
            for (i5 = 0; i5 < rawStyles.length; ++i5) {
              styles.push(parseStyles(rawStyles[i5]));
            }
            for (i5 = 0; i5 < rawHeaders.length; ++i5) {
              if (showdown2.helper.isUndefined(styles[i5])) {
                styles[i5] = "";
              }
              headers.push(parseHeaders(rawHeaders[i5], styles[i5]));
            }
            for (i5 = 0; i5 < rawCells.length; ++i5) {
              var row = [];
              for (var ii = 0; ii < headers.length; ++ii) {
                if (showdown2.helper.isUndefined(rawCells[i5][ii])) {
                }
                row.push(parseCells(rawCells[i5][ii], styles[ii]));
              }
              cells.push(row);
            }
            return buildTable(headers, cells);
          }
          text = globals.converter._dispatch("tables.before", text, options, globals);
          text = text.replace(/\\(\|)/g, showdown2.helper.escapeCharactersCallback);
          text = text.replace(tableRgx, parseTable);
          text = text.replace(singeColTblRgx, parseTable);
          text = globals.converter._dispatch("tables.after", text, options, globals);
          return text;
        });
        showdown2.subParser("underline", function(text, options, globals) {
          "use strict";
          if (!options.underline) {
            return text;
          }
          text = globals.converter._dispatch("underline.before", text, options, globals);
          if (options.literalMidWordUnderscores) {
            text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function(wm, txt) {
              return "<u>" + txt + "</u>";
            });
            text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function(wm, txt) {
              return "<u>" + txt + "</u>";
            });
          } else {
            text = text.replace(/___(\S[\s\S]*?)___/g, function(wm, m2) {
              return /\S$/.test(m2) ? "<u>" + m2 + "</u>" : wm;
            });
            text = text.replace(/__(\S[\s\S]*?)__/g, function(wm, m2) {
              return /\S$/.test(m2) ? "<u>" + m2 + "</u>" : wm;
            });
          }
          text = text.replace(/(_)/g, showdown2.helper.escapeCharactersCallback);
          text = globals.converter._dispatch("underline.after", text, options, globals);
          return text;
        });
        showdown2.subParser("unescapeSpecialChars", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("unescapeSpecialChars.before", text, options, globals);
          text = text.replace(/¨E(\d+)E/g, function(wholeMatch, m1) {
            var charCodeToReplace = parseInt(m1);
            return String.fromCharCode(charCodeToReplace);
          });
          text = globals.converter._dispatch("unescapeSpecialChars.after", text, options, globals);
          return text;
        });
        showdown2.subParser("makeMarkdown.blockquote", function(node, globals) {
          "use strict";
          var txt = "";
          if (node.hasChildNodes()) {
            var children = node.childNodes, childrenLength = children.length;
            for (var i5 = 0; i5 < childrenLength; ++i5) {
              var innerTxt = showdown2.subParser("makeMarkdown.node")(children[i5], globals);
              if (innerTxt === "") {
                continue;
              }
              txt += innerTxt;
            }
          }
          txt = txt.trim();
          txt = "> " + txt.split("\n").join("\n> ");
          return txt;
        });
        showdown2.subParser("makeMarkdown.codeBlock", function(node, globals) {
          "use strict";
          var lang = node.getAttribute("language"), num = node.getAttribute("precodenum");
          return "```" + lang + "\n" + globals.preList[num] + "\n```";
        });
        showdown2.subParser("makeMarkdown.codeSpan", function(node) {
          "use strict";
          return "`" + node.innerHTML + "`";
        });
        showdown2.subParser("makeMarkdown.emphasis", function(node, globals) {
          "use strict";
          var txt = "";
          if (node.hasChildNodes()) {
            txt += "*";
            var children = node.childNodes, childrenLength = children.length;
            for (var i5 = 0; i5 < childrenLength; ++i5) {
              txt += showdown2.subParser("makeMarkdown.node")(children[i5], globals);
            }
            txt += "*";
          }
          return txt;
        });
        showdown2.subParser("makeMarkdown.header", function(node, globals, headerLevel) {
          "use strict";
          var headerMark = new Array(headerLevel + 1).join("#"), txt = "";
          if (node.hasChildNodes()) {
            txt = headerMark + " ";
            var children = node.childNodes, childrenLength = children.length;
            for (var i5 = 0; i5 < childrenLength; ++i5) {
              txt += showdown2.subParser("makeMarkdown.node")(children[i5], globals);
            }
          }
          return txt;
        });
        showdown2.subParser("makeMarkdown.hr", function() {
          "use strict";
          return "---";
        });
        showdown2.subParser("makeMarkdown.image", function(node) {
          "use strict";
          var txt = "";
          if (node.hasAttribute("src")) {
            txt += "![" + node.getAttribute("alt") + "](";
            txt += "<" + node.getAttribute("src") + ">";
            if (node.hasAttribute("width") && node.hasAttribute("height")) {
              txt += " =" + node.getAttribute("width") + "x" + node.getAttribute("height");
            }
            if (node.hasAttribute("title")) {
              txt += ' "' + node.getAttribute("title") + '"';
            }
            txt += ")";
          }
          return txt;
        });
        showdown2.subParser("makeMarkdown.links", function(node, globals) {
          "use strict";
          var txt = "";
          if (node.hasChildNodes() && node.hasAttribute("href")) {
            var children = node.childNodes, childrenLength = children.length;
            txt = "[";
            for (var i5 = 0; i5 < childrenLength; ++i5) {
              txt += showdown2.subParser("makeMarkdown.node")(children[i5], globals);
            }
            txt += "](";
            txt += "<" + node.getAttribute("href") + ">";
            if (node.hasAttribute("title")) {
              txt += ' "' + node.getAttribute("title") + '"';
            }
            txt += ")";
          }
          return txt;
        });
        showdown2.subParser("makeMarkdown.list", function(node, globals, type) {
          "use strict";
          var txt = "";
          if (!node.hasChildNodes()) {
            return "";
          }
          var listItems = node.childNodes, listItemsLenght = listItems.length, listNum = node.getAttribute("start") || 1;
          for (var i5 = 0; i5 < listItemsLenght; ++i5) {
            if (typeof listItems[i5].tagName === "undefined" || listItems[i5].tagName.toLowerCase() !== "li") {
              continue;
            }
            var bullet = "";
            if (type === "ol") {
              bullet = listNum.toString() + ". ";
            } else {
              bullet = "- ";
            }
            txt += bullet + showdown2.subParser("makeMarkdown.listItem")(listItems[i5], globals);
            ++listNum;
          }
          txt += "\n<!-- -->\n";
          return txt.trim();
        });
        showdown2.subParser("makeMarkdown.listItem", function(node, globals) {
          "use strict";
          var listItemTxt = "";
          var children = node.childNodes, childrenLenght = children.length;
          for (var i5 = 0; i5 < childrenLenght; ++i5) {
            listItemTxt += showdown2.subParser("makeMarkdown.node")(children[i5], globals);
          }
          if (!/\n$/.test(listItemTxt)) {
            listItemTxt += "\n";
          } else {
            listItemTxt = listItemTxt.split("\n").join("\n    ").replace(/^ {4}$/gm, "").replace(/\n\n+/g, "\n\n");
          }
          return listItemTxt;
        });
        showdown2.subParser("makeMarkdown.node", function(node, globals, spansOnly) {
          "use strict";
          spansOnly = spansOnly || false;
          var txt = "";
          if (node.nodeType === 3) {
            return showdown2.subParser("makeMarkdown.txt")(node, globals);
          }
          if (node.nodeType === 8) {
            return "<!--" + node.data + "-->\n\n";
          }
          if (node.nodeType !== 1) {
            return "";
          }
          var tagName = node.tagName.toLowerCase();
          switch (tagName) {
            case "h1":
              if (!spansOnly) {
                txt = showdown2.subParser("makeMarkdown.header")(node, globals, 1) + "\n\n";
              }
              break;
            case "h2":
              if (!spansOnly) {
                txt = showdown2.subParser("makeMarkdown.header")(node, globals, 2) + "\n\n";
              }
              break;
            case "h3":
              if (!spansOnly) {
                txt = showdown2.subParser("makeMarkdown.header")(node, globals, 3) + "\n\n";
              }
              break;
            case "h4":
              if (!spansOnly) {
                txt = showdown2.subParser("makeMarkdown.header")(node, globals, 4) + "\n\n";
              }
              break;
            case "h5":
              if (!spansOnly) {
                txt = showdown2.subParser("makeMarkdown.header")(node, globals, 5) + "\n\n";
              }
              break;
            case "h6":
              if (!spansOnly) {
                txt = showdown2.subParser("makeMarkdown.header")(node, globals, 6) + "\n\n";
              }
              break;
            case "p":
              if (!spansOnly) {
                txt = showdown2.subParser("makeMarkdown.paragraph")(node, globals) + "\n\n";
              }
              break;
            case "blockquote":
              if (!spansOnly) {
                txt = showdown2.subParser("makeMarkdown.blockquote")(node, globals) + "\n\n";
              }
              break;
            case "hr":
              if (!spansOnly) {
                txt = showdown2.subParser("makeMarkdown.hr")(node, globals) + "\n\n";
              }
              break;
            case "ol":
              if (!spansOnly) {
                txt = showdown2.subParser("makeMarkdown.list")(node, globals, "ol") + "\n\n";
              }
              break;
            case "ul":
              if (!spansOnly) {
                txt = showdown2.subParser("makeMarkdown.list")(node, globals, "ul") + "\n\n";
              }
              break;
            case "precode":
              if (!spansOnly) {
                txt = showdown2.subParser("makeMarkdown.codeBlock")(node, globals) + "\n\n";
              }
              break;
            case "pre":
              if (!spansOnly) {
                txt = showdown2.subParser("makeMarkdown.pre")(node, globals) + "\n\n";
              }
              break;
            case "table":
              if (!spansOnly) {
                txt = showdown2.subParser("makeMarkdown.table")(node, globals) + "\n\n";
              }
              break;
            case "code":
              txt = showdown2.subParser("makeMarkdown.codeSpan")(node, globals);
              break;
            case "em":
            case "i":
              txt = showdown2.subParser("makeMarkdown.emphasis")(node, globals);
              break;
            case "strong":
            case "b":
              txt = showdown2.subParser("makeMarkdown.strong")(node, globals);
              break;
            case "del":
              txt = showdown2.subParser("makeMarkdown.strikethrough")(node, globals);
              break;
            case "a":
              txt = showdown2.subParser("makeMarkdown.links")(node, globals);
              break;
            case "img":
              txt = showdown2.subParser("makeMarkdown.image")(node, globals);
              break;
            default:
              txt = node.outerHTML + "\n\n";
          }
          return txt;
        });
        showdown2.subParser("makeMarkdown.paragraph", function(node, globals) {
          "use strict";
          var txt = "";
          if (node.hasChildNodes()) {
            var children = node.childNodes, childrenLength = children.length;
            for (var i5 = 0; i5 < childrenLength; ++i5) {
              txt += showdown2.subParser("makeMarkdown.node")(children[i5], globals);
            }
          }
          txt = txt.trim();
          return txt;
        });
        showdown2.subParser("makeMarkdown.pre", function(node, globals) {
          "use strict";
          var num = node.getAttribute("prenum");
          return "<pre>" + globals.preList[num] + "</pre>";
        });
        showdown2.subParser("makeMarkdown.strikethrough", function(node, globals) {
          "use strict";
          var txt = "";
          if (node.hasChildNodes()) {
            txt += "~~";
            var children = node.childNodes, childrenLength = children.length;
            for (var i5 = 0; i5 < childrenLength; ++i5) {
              txt += showdown2.subParser("makeMarkdown.node")(children[i5], globals);
            }
            txt += "~~";
          }
          return txt;
        });
        showdown2.subParser("makeMarkdown.strong", function(node, globals) {
          "use strict";
          var txt = "";
          if (node.hasChildNodes()) {
            txt += "**";
            var children = node.childNodes, childrenLength = children.length;
            for (var i5 = 0; i5 < childrenLength; ++i5) {
              txt += showdown2.subParser("makeMarkdown.node")(children[i5], globals);
            }
            txt += "**";
          }
          return txt;
        });
        showdown2.subParser("makeMarkdown.table", function(node, globals) {
          "use strict";
          var txt = "", tableArray = [[], []], headings = node.querySelectorAll("thead>tr>th"), rows = node.querySelectorAll("tbody>tr"), i5, ii;
          for (i5 = 0; i5 < headings.length; ++i5) {
            var headContent = showdown2.subParser("makeMarkdown.tableCell")(headings[i5], globals), allign = "---";
            if (headings[i5].hasAttribute("style")) {
              var style2 = headings[i5].getAttribute("style").toLowerCase().replace(/\s/g, "");
              switch (style2) {
                case "text-align:left;":
                  allign = ":---";
                  break;
                case "text-align:right;":
                  allign = "---:";
                  break;
                case "text-align:center;":
                  allign = ":---:";
                  break;
              }
            }
            tableArray[0][i5] = headContent.trim();
            tableArray[1][i5] = allign;
          }
          for (i5 = 0; i5 < rows.length; ++i5) {
            var r4 = tableArray.push([]) - 1, cols = rows[i5].getElementsByTagName("td");
            for (ii = 0; ii < headings.length; ++ii) {
              var cellContent = " ";
              if (typeof cols[ii] !== "undefined") {
                cellContent = showdown2.subParser("makeMarkdown.tableCell")(cols[ii], globals);
              }
              tableArray[r4].push(cellContent);
            }
          }
          var cellSpacesCount = 3;
          for (i5 = 0; i5 < tableArray.length; ++i5) {
            for (ii = 0; ii < tableArray[i5].length; ++ii) {
              var strLen = tableArray[i5][ii].length;
              if (strLen > cellSpacesCount) {
                cellSpacesCount = strLen;
              }
            }
          }
          for (i5 = 0; i5 < tableArray.length; ++i5) {
            for (ii = 0; ii < tableArray[i5].length; ++ii) {
              if (i5 === 1) {
                if (tableArray[i5][ii].slice(-1) === ":") {
                  tableArray[i5][ii] = showdown2.helper.padEnd(tableArray[i5][ii].slice(-1), cellSpacesCount - 1, "-") + ":";
                } else {
                  tableArray[i5][ii] = showdown2.helper.padEnd(tableArray[i5][ii], cellSpacesCount, "-");
                }
              } else {
                tableArray[i5][ii] = showdown2.helper.padEnd(tableArray[i5][ii], cellSpacesCount);
              }
            }
            txt += "| " + tableArray[i5].join(" | ") + " |\n";
          }
          return txt.trim();
        });
        showdown2.subParser("makeMarkdown.tableCell", function(node, globals) {
          "use strict";
          var txt = "";
          if (!node.hasChildNodes()) {
            return "";
          }
          var children = node.childNodes, childrenLength = children.length;
          for (var i5 = 0; i5 < childrenLength; ++i5) {
            txt += showdown2.subParser("makeMarkdown.node")(children[i5], globals, true);
          }
          return txt.trim();
        });
        showdown2.subParser("makeMarkdown.txt", function(node) {
          "use strict";
          var txt = node.nodeValue;
          txt = txt.replace(/ +/g, " ");
          txt = txt.replace(/¨NBSP;/g, " ");
          txt = showdown2.helper.unescapeHTMLEntities(txt);
          txt = txt.replace(/([*_~|`])/g, "\\$1");
          txt = txt.replace(/^(\s*)>/g, "\\$1>");
          txt = txt.replace(/^#/gm, "\\#");
          txt = txt.replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3");
          txt = txt.replace(/^( {0,3}\d+)\./gm, "$1\\.");
          txt = txt.replace(/^( {0,3})([+-])/gm, "$1\\$2");
          txt = txt.replace(/]([\s]*)\(/g, "\\]$1\\(");
          txt = txt.replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:");
          return txt;
        });
        var root2 = this;
        if (typeof define === "function" && define.amd) {
          define(function() {
            "use strict";
            return showdown2;
          });
        } else if (typeof module !== "undefined" && module.exports) {
          module.exports = showdown2;
        } else {
          root2.showdown = showdown2;
        }
      }).call(exports);
    }
  });

  // node_modules/@lit/reactive-element/css-tag.js
  var t = window;
  var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = Symbol();
  var n = /* @__PURE__ */ new WeakMap();
  var o = class {
    constructor(t4, e9, n6) {
      if (this._$cssResult$ = true, n6 !== s)
        throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t4, this.t = e9;
    }
    get styleSheet() {
      let t4 = this.o;
      const s5 = this.t;
      if (e && void 0 === t4) {
        const e9 = void 0 !== s5 && 1 === s5.length;
        e9 && (t4 = n.get(s5)), void 0 === t4 && ((this.o = t4 = new CSSStyleSheet()).replaceSync(this.cssText), e9 && n.set(s5, t4));
      }
      return t4;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t4) => new o("string" == typeof t4 ? t4 : t4 + "", void 0, s);
  var i = (t4, ...e9) => {
    const n6 = 1 === t4.length ? t4[0] : e9.reduce((e10, s5, n7) => e10 + ((t5) => {
      if (true === t5._$cssResult$)
        return t5.cssText;
      if ("number" == typeof t5)
        return t5;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t5 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s5) + t4[n7 + 1], t4[0]);
    return new o(n6, t4, s);
  };
  var S = (s5, n6) => {
    e ? s5.adoptedStyleSheets = n6.map((t4) => t4 instanceof CSSStyleSheet ? t4 : t4.styleSheet) : n6.forEach((e9) => {
      const n7 = document.createElement("style"), o7 = t.litNonce;
      void 0 !== o7 && n7.setAttribute("nonce", o7), n7.textContent = e9.cssText, s5.appendChild(n7);
    });
  };
  var c = e ? (t4) => t4 : (t4) => t4 instanceof CSSStyleSheet ? ((t5) => {
    let e9 = "";
    for (const s5 of t5.cssRules)
      e9 += s5.cssText;
    return r(e9);
  })(t4) : t4;

  // node_modules/@lit/reactive-element/reactive-element.js
  var s2;
  var e2 = window;
  var r2 = e2.trustedTypes;
  var h = r2 ? r2.emptyScript : "";
  var o2 = e2.reactiveElementPolyfillSupport;
  var n2 = { toAttribute(t4, i5) {
    switch (i5) {
      case Boolean:
        t4 = t4 ? h : null;
        break;
      case Object:
      case Array:
        t4 = null == t4 ? t4 : JSON.stringify(t4);
    }
    return t4;
  }, fromAttribute(t4, i5) {
    let s5 = t4;
    switch (i5) {
      case Boolean:
        s5 = null !== t4;
        break;
      case Number:
        s5 = null === t4 ? null : Number(t4);
        break;
      case Object:
      case Array:
        try {
          s5 = JSON.parse(t4);
        } catch (t5) {
          s5 = null;
        }
    }
    return s5;
  } };
  var a = (t4, i5) => i5 !== t4 && (i5 == i5 || t4 == t4);
  var l = { attribute: true, type: String, converter: n2, reflect: false, hasChanged: a };
  var d = class extends HTMLElement {
    constructor() {
      super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this.u();
    }
    static addInitializer(t4) {
      var i5;
      null !== (i5 = this.h) && void 0 !== i5 || (this.h = []), this.h.push(t4);
    }
    static get observedAttributes() {
      this.finalize();
      const t4 = [];
      return this.elementProperties.forEach((i5, s5) => {
        const e9 = this._$Ep(s5, i5);
        void 0 !== e9 && (this._$Ev.set(e9, s5), t4.push(e9));
      }), t4;
    }
    static createProperty(t4, i5 = l) {
      if (i5.state && (i5.attribute = false), this.finalize(), this.elementProperties.set(t4, i5), !i5.noAccessor && !this.prototype.hasOwnProperty(t4)) {
        const s5 = "symbol" == typeof t4 ? Symbol() : "__" + t4, e9 = this.getPropertyDescriptor(t4, s5, i5);
        void 0 !== e9 && Object.defineProperty(this.prototype, t4, e9);
      }
    }
    static getPropertyDescriptor(t4, i5, s5) {
      return { get() {
        return this[i5];
      }, set(e9) {
        const r4 = this[t4];
        this[i5] = e9, this.requestUpdate(t4, r4, s5);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t4) {
      return this.elementProperties.get(t4) || l;
    }
    static finalize() {
      if (this.hasOwnProperty("finalized"))
        return false;
      this.finalized = true;
      const t4 = Object.getPrototypeOf(this);
      if (t4.finalize(), this.elementProperties = new Map(t4.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
        const t5 = this.properties, i5 = [...Object.getOwnPropertyNames(t5), ...Object.getOwnPropertySymbols(t5)];
        for (const s5 of i5)
          this.createProperty(s5, t5[s5]);
      }
      return this.elementStyles = this.finalizeStyles(this.styles), true;
    }
    static finalizeStyles(i5) {
      const s5 = [];
      if (Array.isArray(i5)) {
        const e9 = new Set(i5.flat(1 / 0).reverse());
        for (const i6 of e9)
          s5.unshift(c(i6));
      } else
        void 0 !== i5 && s5.push(c(i5));
      return s5;
    }
    static _$Ep(t4, i5) {
      const s5 = i5.attribute;
      return false === s5 ? void 0 : "string" == typeof s5 ? s5 : "string" == typeof t4 ? t4.toLowerCase() : void 0;
    }
    u() {
      var t4;
      this._$E_ = new Promise((t5) => this.enableUpdating = t5), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), null === (t4 = this.constructor.h) || void 0 === t4 || t4.forEach((t5) => t5(this));
    }
    addController(t4) {
      var i5, s5;
      (null !== (i5 = this._$ES) && void 0 !== i5 ? i5 : this._$ES = []).push(t4), void 0 !== this.renderRoot && this.isConnected && (null === (s5 = t4.hostConnected) || void 0 === s5 || s5.call(t4));
    }
    removeController(t4) {
      var i5;
      null === (i5 = this._$ES) || void 0 === i5 || i5.splice(this._$ES.indexOf(t4) >>> 0, 1);
    }
    _$Eg() {
      this.constructor.elementProperties.forEach((t4, i5) => {
        this.hasOwnProperty(i5) && (this._$Ei.set(i5, this[i5]), delete this[i5]);
      });
    }
    createRenderRoot() {
      var t4;
      const s5 = null !== (t4 = this.shadowRoot) && void 0 !== t4 ? t4 : this.attachShadow(this.constructor.shadowRootOptions);
      return S(s5, this.constructor.elementStyles), s5;
    }
    connectedCallback() {
      var t4;
      void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (t4 = this._$ES) || void 0 === t4 || t4.forEach((t5) => {
        var i5;
        return null === (i5 = t5.hostConnected) || void 0 === i5 ? void 0 : i5.call(t5);
      });
    }
    enableUpdating(t4) {
    }
    disconnectedCallback() {
      var t4;
      null === (t4 = this._$ES) || void 0 === t4 || t4.forEach((t5) => {
        var i5;
        return null === (i5 = t5.hostDisconnected) || void 0 === i5 ? void 0 : i5.call(t5);
      });
    }
    attributeChangedCallback(t4, i5, s5) {
      this._$AK(t4, s5);
    }
    _$EO(t4, i5, s5 = l) {
      var e9;
      const r4 = this.constructor._$Ep(t4, s5);
      if (void 0 !== r4 && true === s5.reflect) {
        const h3 = (void 0 !== (null === (e9 = s5.converter) || void 0 === e9 ? void 0 : e9.toAttribute) ? s5.converter : n2).toAttribute(i5, s5.type);
        this._$El = t4, null == h3 ? this.removeAttribute(r4) : this.setAttribute(r4, h3), this._$El = null;
      }
    }
    _$AK(t4, i5) {
      var s5;
      const e9 = this.constructor, r4 = e9._$Ev.get(t4);
      if (void 0 !== r4 && this._$El !== r4) {
        const t5 = e9.getPropertyOptions(r4), h3 = "function" == typeof t5.converter ? { fromAttribute: t5.converter } : void 0 !== (null === (s5 = t5.converter) || void 0 === s5 ? void 0 : s5.fromAttribute) ? t5.converter : n2;
        this._$El = r4, this[r4] = h3.fromAttribute(i5, t5.type), this._$El = null;
      }
    }
    requestUpdate(t4, i5, s5) {
      let e9 = true;
      void 0 !== t4 && (((s5 = s5 || this.constructor.getPropertyOptions(t4)).hasChanged || a)(this[t4], i5) ? (this._$AL.has(t4) || this._$AL.set(t4, i5), true === s5.reflect && this._$El !== t4 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t4, s5))) : e9 = false), !this.isUpdatePending && e9 && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
      this.isUpdatePending = true;
      try {
        await this._$E_;
      } catch (t5) {
        Promise.reject(t5);
      }
      const t4 = this.scheduleUpdate();
      return null != t4 && await t4, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var t4;
      if (!this.isUpdatePending)
        return;
      this.hasUpdated, this._$Ei && (this._$Ei.forEach((t5, i6) => this[i6] = t5), this._$Ei = void 0);
      let i5 = false;
      const s5 = this._$AL;
      try {
        i5 = this.shouldUpdate(s5), i5 ? (this.willUpdate(s5), null === (t4 = this._$ES) || void 0 === t4 || t4.forEach((t5) => {
          var i6;
          return null === (i6 = t5.hostUpdate) || void 0 === i6 ? void 0 : i6.call(t5);
        }), this.update(s5)) : this._$Ek();
      } catch (t5) {
        throw i5 = false, this._$Ek(), t5;
      }
      i5 && this._$AE(s5);
    }
    willUpdate(t4) {
    }
    _$AE(t4) {
      var i5;
      null === (i5 = this._$ES) || void 0 === i5 || i5.forEach((t5) => {
        var i6;
        return null === (i6 = t5.hostUpdated) || void 0 === i6 ? void 0 : i6.call(t5);
      }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t4)), this.updated(t4);
    }
    _$Ek() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$E_;
    }
    shouldUpdate(t4) {
      return true;
    }
    update(t4) {
      void 0 !== this._$EC && (this._$EC.forEach((t5, i5) => this._$EO(i5, this[i5], t5)), this._$EC = void 0), this._$Ek();
    }
    updated(t4) {
    }
    firstUpdated(t4) {
    }
  };
  d.finalized = true, d.elementProperties = /* @__PURE__ */ new Map(), d.elementStyles = [], d.shadowRootOptions = { mode: "open" }, null == o2 || o2({ ReactiveElement: d }), (null !== (s2 = e2.reactiveElementVersions) && void 0 !== s2 ? s2 : e2.reactiveElementVersions = []).push("1.4.1");

  // node_modules/lit-html/lit-html.js
  var t2;
  var i2 = window;
  var s3 = i2.trustedTypes;
  var e3 = s3 ? s3.createPolicy("lit-html", { createHTML: (t4) => t4 }) : void 0;
  var o3 = `lit$${(Math.random() + "").slice(9)}$`;
  var n3 = "?" + o3;
  var l2 = `<${n3}>`;
  var h2 = document;
  var r3 = (t4 = "") => h2.createComment(t4);
  var d2 = (t4) => null === t4 || "object" != typeof t4 && "function" != typeof t4;
  var u = Array.isArray;
  var c2 = (t4) => u(t4) || "function" == typeof (null == t4 ? void 0 : t4[Symbol.iterator]);
  var v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var a2 = /-->/g;
  var f = />/g;
  var _ = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var m = /'/g;
  var p = /"/g;
  var $ = /^(?:script|style|textarea|title)$/i;
  var g = (t4) => (i5, ...s5) => ({ _$litType$: t4, strings: i5, values: s5 });
  var y = g(1);
  var w = g(2);
  var x = Symbol.for("lit-noChange");
  var b = Symbol.for("lit-nothing");
  var T = /* @__PURE__ */ new WeakMap();
  var A = h2.createTreeWalker(h2, 129, null, false);
  var E = (t4, i5) => {
    const s5 = t4.length - 1, n6 = [];
    let h3, r4 = 2 === i5 ? "<svg>" : "", d3 = v;
    for (let i6 = 0; i6 < s5; i6++) {
      const s6 = t4[i6];
      let e9, u3, c3 = -1, g2 = 0;
      for (; g2 < s6.length && (d3.lastIndex = g2, u3 = d3.exec(s6), null !== u3); )
        g2 = d3.lastIndex, d3 === v ? "!--" === u3[1] ? d3 = a2 : void 0 !== u3[1] ? d3 = f : void 0 !== u3[2] ? ($.test(u3[2]) && (h3 = RegExp("</" + u3[2], "g")), d3 = _) : void 0 !== u3[3] && (d3 = _) : d3 === _ ? ">" === u3[0] ? (d3 = null != h3 ? h3 : v, c3 = -1) : void 0 === u3[1] ? c3 = -2 : (c3 = d3.lastIndex - u3[2].length, e9 = u3[1], d3 = void 0 === u3[3] ? _ : '"' === u3[3] ? p : m) : d3 === p || d3 === m ? d3 = _ : d3 === a2 || d3 === f ? d3 = v : (d3 = _, h3 = void 0);
      const y2 = d3 === _ && t4[i6 + 1].startsWith("/>") ? " " : "";
      r4 += d3 === v ? s6 + l2 : c3 >= 0 ? (n6.push(e9), s6.slice(0, c3) + "$lit$" + s6.slice(c3) + o3 + y2) : s6 + o3 + (-2 === c3 ? (n6.push(void 0), i6) : y2);
    }
    const u2 = r4 + (t4[s5] || "<?>") + (2 === i5 ? "</svg>" : "");
    if (!Array.isArray(t4) || !t4.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return [void 0 !== e3 ? e3.createHTML(u2) : u2, n6];
  };
  var C = class {
    constructor({ strings: t4, _$litType$: i5 }, e9) {
      let l5;
      this.parts = [];
      let h3 = 0, d3 = 0;
      const u2 = t4.length - 1, c3 = this.parts, [v2, a3] = E(t4, i5);
      if (this.el = C.createElement(v2, e9), A.currentNode = this.el.content, 2 === i5) {
        const t5 = this.el.content, i6 = t5.firstChild;
        i6.remove(), t5.append(...i6.childNodes);
      }
      for (; null !== (l5 = A.nextNode()) && c3.length < u2; ) {
        if (1 === l5.nodeType) {
          if (l5.hasAttributes()) {
            const t5 = [];
            for (const i6 of l5.getAttributeNames())
              if (i6.endsWith("$lit$") || i6.startsWith(o3)) {
                const s5 = a3[d3++];
                if (t5.push(i6), void 0 !== s5) {
                  const t6 = l5.getAttribute(s5.toLowerCase() + "$lit$").split(o3), i7 = /([.?@])?(.*)/.exec(s5);
                  c3.push({ type: 1, index: h3, name: i7[2], strings: t6, ctor: "." === i7[1] ? M : "?" === i7[1] ? k : "@" === i7[1] ? H : S2 });
                } else
                  c3.push({ type: 6, index: h3 });
              }
            for (const i6 of t5)
              l5.removeAttribute(i6);
          }
          if ($.test(l5.tagName)) {
            const t5 = l5.textContent.split(o3), i6 = t5.length - 1;
            if (i6 > 0) {
              l5.textContent = s3 ? s3.emptyScript : "";
              for (let s5 = 0; s5 < i6; s5++)
                l5.append(t5[s5], r3()), A.nextNode(), c3.push({ type: 2, index: ++h3 });
              l5.append(t5[i6], r3());
            }
          }
        } else if (8 === l5.nodeType)
          if (l5.data === n3)
            c3.push({ type: 2, index: h3 });
          else {
            let t5 = -1;
            for (; -1 !== (t5 = l5.data.indexOf(o3, t5 + 1)); )
              c3.push({ type: 7, index: h3 }), t5 += o3.length - 1;
          }
        h3++;
      }
    }
    static createElement(t4, i5) {
      const s5 = h2.createElement("template");
      return s5.innerHTML = t4, s5;
    }
  };
  function P(t4, i5, s5 = t4, e9) {
    var o7, n6, l5, h3;
    if (i5 === x)
      return i5;
    let r4 = void 0 !== e9 ? null === (o7 = s5._$Co) || void 0 === o7 ? void 0 : o7[e9] : s5._$Cl;
    const u2 = d2(i5) ? void 0 : i5._$litDirective$;
    return (null == r4 ? void 0 : r4.constructor) !== u2 && (null === (n6 = null == r4 ? void 0 : r4._$AO) || void 0 === n6 || n6.call(r4, false), void 0 === u2 ? r4 = void 0 : (r4 = new u2(t4), r4._$AT(t4, s5, e9)), void 0 !== e9 ? (null !== (l5 = (h3 = s5)._$Co) && void 0 !== l5 ? l5 : h3._$Co = [])[e9] = r4 : s5._$Cl = r4), void 0 !== r4 && (i5 = P(t4, r4._$AS(t4, i5.values), r4, e9)), i5;
  }
  var V = class {
    constructor(t4, i5) {
      this.u = [], this._$AN = void 0, this._$AD = t4, this._$AM = i5;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    v(t4) {
      var i5;
      const { el: { content: s5 }, parts: e9 } = this._$AD, o7 = (null !== (i5 = null == t4 ? void 0 : t4.creationScope) && void 0 !== i5 ? i5 : h2).importNode(s5, true);
      A.currentNode = o7;
      let n6 = A.nextNode(), l5 = 0, r4 = 0, d3 = e9[0];
      for (; void 0 !== d3; ) {
        if (l5 === d3.index) {
          let i6;
          2 === d3.type ? i6 = new N(n6, n6.nextSibling, this, t4) : 1 === d3.type ? i6 = new d3.ctor(n6, d3.name, d3.strings, this, t4) : 6 === d3.type && (i6 = new I(n6, this, t4)), this.u.push(i6), d3 = e9[++r4];
        }
        l5 !== (null == d3 ? void 0 : d3.index) && (n6 = A.nextNode(), l5++);
      }
      return o7;
    }
    p(t4) {
      let i5 = 0;
      for (const s5 of this.u)
        void 0 !== s5 && (void 0 !== s5.strings ? (s5._$AI(t4, s5, i5), i5 += s5.strings.length - 2) : s5._$AI(t4[i5])), i5++;
    }
  };
  var N = class {
    constructor(t4, i5, s5, e9) {
      var o7;
      this.type = 2, this._$AH = b, this._$AN = void 0, this._$AA = t4, this._$AB = i5, this._$AM = s5, this.options = e9, this._$Cm = null === (o7 = null == e9 ? void 0 : e9.isConnected) || void 0 === o7 || o7;
    }
    get _$AU() {
      var t4, i5;
      return null !== (i5 = null === (t4 = this._$AM) || void 0 === t4 ? void 0 : t4._$AU) && void 0 !== i5 ? i5 : this._$Cm;
    }
    get parentNode() {
      let t4 = this._$AA.parentNode;
      const i5 = this._$AM;
      return void 0 !== i5 && 11 === t4.nodeType && (t4 = i5.parentNode), t4;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t4, i5 = this) {
      t4 = P(this, t4, i5), d2(t4) ? t4 === b || null == t4 || "" === t4 ? (this._$AH !== b && this._$AR(), this._$AH = b) : t4 !== this._$AH && t4 !== x && this.g(t4) : void 0 !== t4._$litType$ ? this.$(t4) : void 0 !== t4.nodeType ? this.T(t4) : c2(t4) ? this.k(t4) : this.g(t4);
    }
    O(t4, i5 = this._$AB) {
      return this._$AA.parentNode.insertBefore(t4, i5);
    }
    T(t4) {
      this._$AH !== t4 && (this._$AR(), this._$AH = this.O(t4));
    }
    g(t4) {
      this._$AH !== b && d2(this._$AH) ? this._$AA.nextSibling.data = t4 : this.T(h2.createTextNode(t4)), this._$AH = t4;
    }
    $(t4) {
      var i5;
      const { values: s5, _$litType$: e9 } = t4, o7 = "number" == typeof e9 ? this._$AC(t4) : (void 0 === e9.el && (e9.el = C.createElement(e9.h, this.options)), e9);
      if ((null === (i5 = this._$AH) || void 0 === i5 ? void 0 : i5._$AD) === o7)
        this._$AH.p(s5);
      else {
        const t5 = new V(o7, this), i6 = t5.v(this.options);
        t5.p(s5), this.T(i6), this._$AH = t5;
      }
    }
    _$AC(t4) {
      let i5 = T.get(t4.strings);
      return void 0 === i5 && T.set(t4.strings, i5 = new C(t4)), i5;
    }
    k(t4) {
      u(this._$AH) || (this._$AH = [], this._$AR());
      const i5 = this._$AH;
      let s5, e9 = 0;
      for (const o7 of t4)
        e9 === i5.length ? i5.push(s5 = new N(this.O(r3()), this.O(r3()), this, this.options)) : s5 = i5[e9], s5._$AI(o7), e9++;
      e9 < i5.length && (this._$AR(s5 && s5._$AB.nextSibling, e9), i5.length = e9);
    }
    _$AR(t4 = this._$AA.nextSibling, i5) {
      var s5;
      for (null === (s5 = this._$AP) || void 0 === s5 || s5.call(this, false, true, i5); t4 && t4 !== this._$AB; ) {
        const i6 = t4.nextSibling;
        t4.remove(), t4 = i6;
      }
    }
    setConnected(t4) {
      var i5;
      void 0 === this._$AM && (this._$Cm = t4, null === (i5 = this._$AP) || void 0 === i5 || i5.call(this, t4));
    }
  };
  var S2 = class {
    constructor(t4, i5, s5, e9, o7) {
      this.type = 1, this._$AH = b, this._$AN = void 0, this.element = t4, this.name = i5, this._$AM = e9, this.options = o7, s5.length > 2 || "" !== s5[0] || "" !== s5[1] ? (this._$AH = Array(s5.length - 1).fill(new String()), this.strings = s5) : this._$AH = b;
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t4, i5 = this, s5, e9) {
      const o7 = this.strings;
      let n6 = false;
      if (void 0 === o7)
        t4 = P(this, t4, i5, 0), n6 = !d2(t4) || t4 !== this._$AH && t4 !== x, n6 && (this._$AH = t4);
      else {
        const e10 = t4;
        let l5, h3;
        for (t4 = o7[0], l5 = 0; l5 < o7.length - 1; l5++)
          h3 = P(this, e10[s5 + l5], i5, l5), h3 === x && (h3 = this._$AH[l5]), n6 || (n6 = !d2(h3) || h3 !== this._$AH[l5]), h3 === b ? t4 = b : t4 !== b && (t4 += (null != h3 ? h3 : "") + o7[l5 + 1]), this._$AH[l5] = h3;
      }
      n6 && !e9 && this.j(t4);
    }
    j(t4) {
      t4 === b ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t4 ? t4 : "");
    }
  };
  var M = class extends S2 {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t4) {
      this.element[this.name] = t4 === b ? void 0 : t4;
    }
  };
  var R = s3 ? s3.emptyScript : "";
  var k = class extends S2 {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t4) {
      t4 && t4 !== b ? this.element.setAttribute(this.name, R) : this.element.removeAttribute(this.name);
    }
  };
  var H = class extends S2 {
    constructor(t4, i5, s5, e9, o7) {
      super(t4, i5, s5, e9, o7), this.type = 5;
    }
    _$AI(t4, i5 = this) {
      var s5;
      if ((t4 = null !== (s5 = P(this, t4, i5, 0)) && void 0 !== s5 ? s5 : b) === x)
        return;
      const e9 = this._$AH, o7 = t4 === b && e9 !== b || t4.capture !== e9.capture || t4.once !== e9.once || t4.passive !== e9.passive, n6 = t4 !== b && (e9 === b || o7);
      o7 && this.element.removeEventListener(this.name, this, e9), n6 && this.element.addEventListener(this.name, this, t4), this._$AH = t4;
    }
    handleEvent(t4) {
      var i5, s5;
      "function" == typeof this._$AH ? this._$AH.call(null !== (s5 = null === (i5 = this.options) || void 0 === i5 ? void 0 : i5.host) && void 0 !== s5 ? s5 : this.element, t4) : this._$AH.handleEvent(t4);
    }
  };
  var I = class {
    constructor(t4, i5, s5) {
      this.element = t4, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s5;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t4) {
      P(this, t4);
    }
  };
  var z = i2.litHtmlPolyfillSupport;
  null == z || z(C, N), (null !== (t2 = i2.litHtmlVersions) && void 0 !== t2 ? t2 : i2.litHtmlVersions = []).push("2.4.0");
  var Z = (t4, i5, s5) => {
    var e9, o7;
    const n6 = null !== (e9 = null == s5 ? void 0 : s5.renderBefore) && void 0 !== e9 ? e9 : i5;
    let l5 = n6._$litPart$;
    if (void 0 === l5) {
      const t5 = null !== (o7 = null == s5 ? void 0 : s5.renderBefore) && void 0 !== o7 ? o7 : null;
      n6._$litPart$ = l5 = new N(i5.insertBefore(r3(), t5), t5, void 0, null != s5 ? s5 : {});
    }
    return l5._$AI(t4), l5;
  };

  // node_modules/lit-element/lit-element.js
  var l3;
  var o4;
  var s4 = class extends d {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      var t4, e9;
      const i5 = super.createRenderRoot();
      return null !== (t4 = (e9 = this.renderOptions).renderBefore) && void 0 !== t4 || (e9.renderBefore = i5.firstChild), i5;
    }
    update(t4) {
      const i5 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t4), this._$Do = Z(i5, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      var t4;
      super.connectedCallback(), null === (t4 = this._$Do) || void 0 === t4 || t4.setConnected(true);
    }
    disconnectedCallback() {
      var t4;
      super.disconnectedCallback(), null === (t4 = this._$Do) || void 0 === t4 || t4.setConnected(false);
    }
    render() {
      return x;
    }
  };
  s4.finalized = true, s4._$litElement$ = true, null === (l3 = globalThis.litElementHydrateSupport) || void 0 === l3 || l3.call(globalThis, { LitElement: s4 });
  var n4 = globalThis.litElementPolyfillSupport;
  null == n4 || n4({ LitElement: s4 });
  (null !== (o4 = globalThis.litElementVersions) && void 0 !== o4 ? o4 : globalThis.litElementVersions = []).push("3.2.2");

  // node_modules/@lit/reactive-element/decorators/custom-element.js
  var e4 = (e9) => (n6) => "function" == typeof n6 ? ((e10, n7) => (customElements.define(e10, n7), n7))(e9, n6) : ((e10, n7) => {
    const { kind: t4, elements: s5 } = n7;
    return { kind: t4, elements: s5, finisher(n8) {
      customElements.define(e10, n8);
    } };
  })(e9, n6);

  // node_modules/@lit/reactive-element/decorators/property.js
  var i3 = (i5, e9) => "method" === e9.kind && e9.descriptor && !("value" in e9.descriptor) ? { ...e9, finisher(n6) {
    n6.createProperty(e9.key, i5);
  } } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e9.key, initializer() {
    "function" == typeof e9.initializer && (this[e9.key] = e9.initializer.call(this));
  }, finisher(n6) {
    n6.createProperty(e9.key, i5);
  } };
  function e5(e9) {
    return (n6, t4) => void 0 !== t4 ? ((i5, e10, n7) => {
      e10.constructor.createProperty(n7, i5);
    })(e9, n6, t4) : i3(e9, n6);
  }

  // node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
  var n5;
  var e6 = null != (null === (n5 = window.HTMLSlotElement) || void 0 === n5 ? void 0 : n5.prototype.assignedElements) ? (o7, n6) => o7.assignedElements(n6) : (o7, n6) => o7.assignedNodes(n6).filter((o8) => o8.nodeType === Node.ELEMENT_NODE);

  // node_modules/lit-html/directive.js
  var t3 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
  var e7 = (t4) => (...e9) => ({ _$litDirective$: t4, values: e9 });
  var i4 = class {
    constructor(t4) {
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(t4, e9, i5) {
      this._$Ct = t4, this._$AM = e9, this._$Ci = i5;
    }
    _$AS(t4, e9) {
      return this.update(t4, e9);
    }
    update(t4, e9) {
      return this.render(...e9);
    }
  };

  // node_modules/lit-html/directives/unsafe-html.js
  var e8 = class extends i4 {
    constructor(i5) {
      if (super(i5), this.it = b, i5.type !== t3.CHILD)
        throw Error(this.constructor.directiveName + "() can only be used in child bindings");
    }
    render(r4) {
      if (r4 === b || null == r4)
        return this._t = void 0, this.it = r4;
      if (r4 === x)
        return r4;
      if ("string" != typeof r4)
        throw Error(this.constructor.directiveName + "() called with a non-string value");
      if (r4 === this.it)
        return this._t;
      this.it = r4;
      const s5 = [r4];
      return s5.raw = s5, this._t = { _$litType$: this.constructor.resultType, strings: s5, values: [] };
    }
  };
  e8.directiveName = "unsafeHTML", e8.resultType = 1;
  var o6 = e7(e8);

  // src/Markdown.ts
  var import_showdown = __toESM(require_showdown());
  var Markdown = class extends s4 {
    constructor() {
      super(...arguments);
      this.markdown = "# Test";
    }
    render() {
      const rawHtml = new import_showdown.default.Converter().makeHtml(this.markdown);
      console.log(`rawHtml is: ${rawHtml}`);
      return y`${o6(rawHtml)}`;
    }
  };
  __decorateClass([
    e5()
  ], Markdown.prototype, "markdown", 2);
  Markdown = __decorateClass([
    e4("itk-markdown")
  ], Markdown);

  // src/Button.ts
  var Button = class extends s4 {
    constructor() {
      super(...arguments);
      this.label = "";
    }
    render() {
      return y`<vaadin-button @click=${this._onClick}>${this.label}</button>`;
    }
    _onClick(e9) {
      this.dispatchEvent(e9);
    }
  };
  __decorateClass([
    e5()
  ], Button.prototype, "label", 2);
  Button = __decorateClass([
    e4("itk-button")
  ], Button);

  // node_modules/@vaadin/vaadin-lumo-styles/version.js
  var Lumo = class extends HTMLElement {
    static get version() {
      return "23.2.7";
    }
  };
  customElements.define("vaadin-lumo-styles", Lumo);

  // node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js
  var ThemePropertyMixin = (superClass) => class VaadinThemePropertyMixin extends superClass {
    static get properties() {
      return {
        theme: {
          type: String,
          reflectToAttribute: true,
          observer: "__deprecatedThemePropertyChanged"
        },
        _theme: {
          type: String,
          readOnly: true
        }
      };
    }
    __deprecatedThemePropertyChanged(theme) {
      this._set_theme(theme);
    }
  };

  // node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js
  var themeRegistry = [];
  function registerStyles(themeFor, styles, options = {}) {
    if (themeFor) {
      if (hasThemes(themeFor)) {
        console.warn(`The custom element definition for "${themeFor}"
      was finalized before a style module was registered.
      Make sure to add component specific style modules before
      importing the corresponding custom element.`);
      }
    }
    styles = flattenStyles(styles);
    if (window.Vaadin && window.Vaadin.styleModules) {
      window.Vaadin.styleModules.registerStyles(themeFor, styles, options);
    } else {
      themeRegistry.push({
        themeFor,
        styles,
        include: options.include,
        moduleId: options.moduleId
      });
    }
  }
  function getAllThemes() {
    if (window.Vaadin && window.Vaadin.styleModules) {
      return window.Vaadin.styleModules.getAllThemes();
    }
    return themeRegistry;
  }
  function matchesThemeFor(themeFor, tagName) {
    return (themeFor || "").split(" ").some((themeForToken) => {
      return new RegExp(`^${themeForToken.split("*").join(".*")}$`).test(tagName);
    });
  }
  function getIncludePriority(moduleName = "") {
    let includePriority = 0;
    if (moduleName.startsWith("lumo-") || moduleName.startsWith("material-")) {
      includePriority = 1;
    } else if (moduleName.startsWith("vaadin-")) {
      includePriority = 2;
    }
    return includePriority;
  }
  function flattenStyles(styles = []) {
    return [styles].flat(Infinity).filter((style2) => {
      if (style2 instanceof o) {
        return true;
      }
      console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`.");
      return false;
    });
  }
  function getIncludedStyles(theme) {
    const includedStyles = [];
    if (theme.include) {
      [].concat(theme.include).forEach((includeModuleId) => {
        const includedTheme = getAllThemes().find((s5) => s5.moduleId === includeModuleId);
        if (includedTheme) {
          includedStyles.push(...getIncludedStyles(includedTheme), ...includedTheme.styles);
        } else {
          console.warn(`Included moduleId ${includeModuleId} not found in style registry`);
        }
      }, theme.styles);
    }
    return includedStyles;
  }
  function addStylesToTemplate(styles, template5) {
    const styleEl = document.createElement("style");
    styleEl.innerHTML = styles.map((style2) => style2.cssText).join("\n");
    template5.content.appendChild(styleEl);
  }
  function getThemes(tagName) {
    const defaultModuleName = `${tagName}-default-theme`;
    const themes = getAllThemes().filter((theme) => theme.moduleId !== defaultModuleName && matchesThemeFor(theme.themeFor, tagName)).map((theme) => ({
      ...theme,
      styles: [...getIncludedStyles(theme), ...theme.styles],
      includePriority: getIncludePriority(theme.moduleId)
    })).sort((themeA, themeB) => themeB.includePriority - themeA.includePriority);
    if (themes.length > 0) {
      return themes;
    }
    return getAllThemes().filter((theme) => theme.moduleId === defaultModuleName);
  }
  function hasThemes(tagName) {
    return classHasThemes(customElements.get(tagName));
  }
  function classHasThemes(elementClass) {
    return elementClass && Object.prototype.hasOwnProperty.call(elementClass, "__themes");
  }
  var ThemableMixin = (superClass) => class VaadinThemableMixin extends ThemePropertyMixin(superClass) {
    static finalize() {
      super.finalize();
      if (this.elementStyles) {
        return;
      }
      const template5 = this.prototype._template;
      if (!template5 || classHasThemes(this)) {
        return;
      }
      addStylesToTemplate(this.getStylesForThis(), template5);
    }
    static finalizeStyles(styles) {
      const themeStyles = this.getStylesForThis();
      return styles ? [...super.finalizeStyles(styles), ...themeStyles] : themeStyles;
    }
    static getStylesForThis() {
      const parent = Object.getPrototypeOf(this.prototype);
      const inheritedThemes = (parent ? parent.constructor.__themes : []) || [];
      this.__themes = [...inheritedThemes, ...getThemes(this.is)];
      const themeStyles = this.__themes.flatMap((theme) => theme.styles);
      return themeStyles.filter((style2, index) => index === themeStyles.lastIndexOf(style2));
    }
  };

  // node_modules/@vaadin/vaadin-lumo-styles/color.js
  var colorBase = i`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;
  }
`;
  var $tpl = document.createElement("template");
  $tpl.innerHTML = `<style>${colorBase.toString().replace(":host", "html")}</style>`;
  document.head.appendChild($tpl.content);
  var color = i`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`;
  registerStyles("", color, { moduleId: "lumo-color" });
  var colorLegacy = i`
  :host {
    color: var(--lumo-body-text-color) !important;
    background-color: var(--lumo-base-color) !important;
  }
`;
  registerStyles("", [color, colorLegacy], { moduleId: "lumo-color-legacy" });

  // node_modules/@vaadin/vaadin-lumo-styles/font-icons.js
  var template = document.createElement("template");
  template.innerHTML = `
  <style>
    @font-face {
      font-family: 'lumo-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }

    html {
      --lumo-icons-align-center: "\\ea01";
      --lumo-icons-align-left: "\\ea02";
      --lumo-icons-align-right: "\\ea03";
      --lumo-icons-angle-down: "\\ea04";
      --lumo-icons-angle-left: "\\ea05";
      --lumo-icons-angle-right: "\\ea06";
      --lumo-icons-angle-up: "\\ea07";
      --lumo-icons-arrow-down: "\\ea08";
      --lumo-icons-arrow-left: "\\ea09";
      --lumo-icons-arrow-right: "\\ea0a";
      --lumo-icons-arrow-up: "\\ea0b";
      --lumo-icons-bar-chart: "\\ea0c";
      --lumo-icons-bell: "\\ea0d";
      --lumo-icons-calendar: "\\ea0e";
      --lumo-icons-checkmark: "\\ea0f";
      --lumo-icons-chevron-down: "\\ea10";
      --lumo-icons-chevron-left: "\\ea11";
      --lumo-icons-chevron-right: "\\ea12";
      --lumo-icons-chevron-up: "\\ea13";
      --lumo-icons-clock: "\\ea14";
      --lumo-icons-cog: "\\ea15";
      --lumo-icons-cross: "\\ea16";
      --lumo-icons-download: "\\ea17";
      --lumo-icons-dropdown: "\\ea18";
      --lumo-icons-edit: "\\ea19";
      --lumo-icons-error: "\\ea1a";
      --lumo-icons-eye: "\\ea1b";
      --lumo-icons-eye-disabled: "\\ea1c";
      --lumo-icons-menu: "\\ea1d";
      --lumo-icons-minus: "\\ea1e";
      --lumo-icons-ordered-list: "\\ea1f";
      --lumo-icons-phone: "\\ea20";
      --lumo-icons-photo: "\\ea21";
      --lumo-icons-play: "\\ea22";
      --lumo-icons-plus: "\\ea23";
      --lumo-icons-redo: "\\ea24";
      --lumo-icons-reload: "\\ea25";
      --lumo-icons-search: "\\ea26";
      --lumo-icons-undo: "\\ea27";
      --lumo-icons-unordered-list: "\\ea28";
      --lumo-icons-upload: "\\ea29";
      --lumo-icons-user: "\\ea2a";
    }
  </style>
`;
  document.head.appendChild(template.content);

  // node_modules/@vaadin/vaadin-lumo-styles/sizing.js
  var sizing = i`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`;
  var $tpl2 = document.createElement("template");
  $tpl2.innerHTML = `<style>${sizing.toString().replace(":host", "html")}</style>`;
  document.head.appendChild($tpl2.content);

  // node_modules/@vaadin/vaadin-lumo-styles/spacing.js
  var spacing = i`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`;
  var $tpl3 = document.createElement("template");
  $tpl3.innerHTML = `<style>${spacing.toString().replace(":host", "html")}</style>`;
  document.head.appendChild($tpl3.content);

  // node_modules/@vaadin/vaadin-lumo-styles/style.js
  var style = i`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */
    --lumo-border-radius: 0.25em; /* Deprecated */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`;
  var $tpl4 = document.createElement("template");
  $tpl4.innerHTML = `<style>${style.toString().replace(":host", "html")}</style>`;
  document.head.appendChild($tpl4.content);

  // node_modules/@vaadin/vaadin-lumo-styles/typography.js
  var font = i`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`;
  var typography = i`
  html,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size, var(--lumo-font-size-m));
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-top: 1.25em;
  }

  h1 {
    font-size: var(--lumo-font-size-xxxl);
    margin-bottom: 0.75em;
  }

  h2 {
    font-size: var(--lumo-font-size-xxl);
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: var(--lumo-font-size-xl);
    margin-bottom: 0.5em;
  }

  h4 {
    font-size: var(--lumo-font-size-l);
    margin-bottom: 0.5em;
  }

  h5 {
    font-size: var(--lumo-font-size-m);
    margin-bottom: 0.25em;
  }

  h6 {
    font-size: var(--lumo-font-size-xs);
    margin-bottom: 0;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;
  registerStyles("", typography, { moduleId: "lumo-typography" });
  var $tpl5 = document.createElement("template");
  $tpl5.innerHTML = `<style>${font.toString().replace(":host", "html")}</style>`;
  document.head.appendChild($tpl5.content);

  // node_modules/@vaadin/checkbox/theme/lumo/vaadin-checkbox-styles.js
  registerStyles(
    "vaadin-checkbox",
    i`
    :host {
      color: var(--lumo-body-text-color);
      font-size: var(--lumo-font-size-m);
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
    }

    :host([has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    }

    [part='checkbox'] {
      width: calc(var(--lumo-size-m) / 2);
      height: calc(var(--lumo-size-m) / 2);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: var(--lumo-border-radius-s);
      background-color: var(--lumo-contrast-20pct);
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      line-height: 1.2;
      cursor: var(--lumo-clickable-cursor);
      flex: none;
    }

    :host([indeterminate]) [part='checkbox'],
    :host([checked]) [part='checkbox'] {
      background-color: var(--lumo-primary-color);
    }

    /* Needed to align the checkbox nicely on the baseline */
    [part='checkbox']::before {
      content: '\\2003';
    }

    /* Checkmark */
    [part='checkbox']::after {
      pointer-events: none;
      font-family: 'lumo-icons';
      content: var(--lumo-icons-checkmark);
      color: var(--lumo-primary-contrast-color);
      font-size: calc(var(--lumo-size-m) / 2 + 2px);
      line-height: 1;
      position: absolute;
      top: -1px;
      left: -1px;
      contain: content;
      opacity: 0;
    }

    :host([checked]) [part='checkbox']::after {
      opacity: 1;
    }

    /* Indeterminate checkmark */
    :host([indeterminate]) [part='checkbox']::after {
      content: '';
      opacity: 1;
      top: 45%;
      height: 10%;
      left: 22%;
      right: 22%;
      width: auto;
      border: 0;
      background-color: var(--lumo-primary-contrast-color);
    }

    /* Focus ring */
    :host([focus-ring]) [part='checkbox'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='checkbox'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='checkbox']::after {
      color: var(--lumo-contrast-30pct);
    }

    :host([indeterminate][disabled]) [part='checkbox']::after {
      background-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
      pointer-events: none;
      color: transparent;
      display: inline-block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
    }

    /* Hover */
    :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
      background-color: var(--lumo-contrast-30pct);
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
        background-color: var(--lumo-contrast-20pct);
      }
    }

    /* Active */
    :host([active]) [part='checkbox'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='checkbox'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='checkbox']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }
  `,
    { moduleId: "lumo-checkbox" }
  );

  // node_modules/@polymer/polymer/lib/utils/boot.js
  window.JSCompiler_renameProperty = function(prop, obj) {
    return prop;
  };

  // node_modules/@polymer/polymer/lib/utils/resolve-url.js
  var CSS_URL_RX = /(url\()([^)]*)(\))/g;
  var ABS_URL = /(^\/[^\/])|(^#)|(^[\w-\d]*:)/;
  var workingURL;
  var resolveDoc;
  function resolveUrl(url, baseURI) {
    if (url && ABS_URL.test(url)) {
      return url;
    }
    if (url === "//") {
      return url;
    }
    if (workingURL === void 0) {
      workingURL = false;
      try {
        const u2 = new URL("b", "http://a");
        u2.pathname = "c%20d";
        workingURL = u2.href === "http://a/c%20d";
      } catch (e9) {
      }
    }
    if (!baseURI) {
      baseURI = document.baseURI || window.location.href;
    }
    if (workingURL) {
      try {
        return new URL(url, baseURI).href;
      } catch (e9) {
        return url;
      }
    }
    if (!resolveDoc) {
      resolveDoc = document.implementation.createHTMLDocument("temp");
      resolveDoc.base = resolveDoc.createElement("base");
      resolveDoc.head.appendChild(resolveDoc.base);
      resolveDoc.anchor = resolveDoc.createElement("a");
      resolveDoc.body.appendChild(resolveDoc.anchor);
    }
    resolveDoc.base.href = baseURI;
    resolveDoc.anchor.href = url;
    return resolveDoc.anchor.href || url;
  }
  function resolveCss(cssText, baseURI) {
    return cssText.replace(CSS_URL_RX, function(m2, pre, url, post) {
      return pre + "'" + resolveUrl(url.replace(/["']/g, ""), baseURI) + "'" + post;
    });
  }
  function pathFromUrl(url) {
    return url.substring(0, url.lastIndexOf("/") + 1);
  }

  // node_modules/@polymer/polymer/lib/utils/settings.js
  var useShadow = !window.ShadyDOM || !window.ShadyDOM.inUse;
  var useNativeCSSProperties = Boolean(!window.ShadyCSS || window.ShadyCSS.nativeCss);
  var useNativeCustomElements = !window.customElements.polyfillWrapFlushCallback;
  var supportsAdoptingStyleSheets = useShadow && "adoptedStyleSheets" in Document.prototype && "replaceSync" in CSSStyleSheet.prototype && (() => {
    try {
      const sheet = new CSSStyleSheet();
      sheet.replaceSync("");
      const host = document.createElement("div");
      host.attachShadow({ mode: "open" });
      host.shadowRoot.adoptedStyleSheets = [sheet];
      return host.shadowRoot.adoptedStyleSheets[0] === sheet;
    } catch (e9) {
      return false;
    }
  })();
  var rootPath = window.Polymer && window.Polymer.rootPath || pathFromUrl(document.baseURI || window.location.href);
  var sanitizeDOMValue = window.Polymer && window.Polymer.sanitizeDOMValue || void 0;
  var passiveTouchGestures = window.Polymer && window.Polymer.setPassiveTouchGestures || false;
  var strictTemplatePolicy = window.Polymer && window.Polymer.strictTemplatePolicy || false;
  var allowTemplateFromDomModule = window.Polymer && window.Polymer.allowTemplateFromDomModule || false;
  var legacyOptimizations = window.Polymer && window.Polymer.legacyOptimizations || false;
  var legacyWarnings = window.Polymer && window.Polymer.legacyWarnings || false;
  var syncInitialRender = window.Polymer && window.Polymer.syncInitialRender || false;
  var legacyUndefined = window.Polymer && window.Polymer.legacyUndefined || false;
  var orderedComputed = window.Polymer && window.Polymer.orderedComputed || false;
  var cancelSyntheticClickEvents = true;
  var setCancelSyntheticClickEvents = function(useCancelSyntheticClickEvents) {
    cancelSyntheticClickEvents = useCancelSyntheticClickEvents;
  };
  var removeNestedTemplates = window.Polymer && window.Polymer.removeNestedTemplates || false;
  var fastDomIf = window.Polymer && window.Polymer.fastDomIf || false;
  var suppressTemplateNotifications = window.Polymer && window.Polymer.suppressTemplateNotifications || false;
  var legacyNoObservedAttributes = window.Polymer && window.Polymer.legacyNoObservedAttributes || false;
  var useAdoptedStyleSheetsWithBuiltCSS = window.Polymer && window.Polymer.useAdoptedStyleSheetsWithBuiltCSS || false;

  // node_modules/@polymer/polymer/lib/utils/mixin.js
  var dedupeId = 0;
  function MixinFunction() {
  }
  MixinFunction.prototype.__mixinApplications;
  MixinFunction.prototype.__mixinSet;
  var dedupingMixin = function(mixin) {
    let mixinApplications = mixin.__mixinApplications;
    if (!mixinApplications) {
      mixinApplications = /* @__PURE__ */ new WeakMap();
      mixin.__mixinApplications = mixinApplications;
    }
    let mixinDedupeId = dedupeId++;
    function dedupingMixin2(base) {
      let baseSet = base.__mixinSet;
      if (baseSet && baseSet[mixinDedupeId]) {
        return base;
      }
      let map = mixinApplications;
      let extended = map.get(base);
      if (!extended) {
        extended = mixin(base);
        map.set(base, extended);
        let mixinSet = Object.create(extended.__mixinSet || baseSet || null);
        mixinSet[mixinDedupeId] = true;
        extended.__mixinSet = mixinSet;
      }
      return extended;
    }
    return dedupingMixin2;
  };

  // node_modules/@polymer/polymer/lib/elements/dom-module.js
  var modules = {};
  var lcModules = {};
  function setModule(id, module) {
    modules[id] = lcModules[id.toLowerCase()] = module;
  }
  function findModule(id) {
    return modules[id] || lcModules[id.toLowerCase()];
  }
  function styleOutsideTemplateCheck(inst) {
    if (inst.querySelector("style")) {
      console.warn("dom-module %s has style outside template", inst.id);
    }
  }
  var DomModule = class extends HTMLElement {
    static get observedAttributes() {
      return ["id"];
    }
    static import(id, selector) {
      if (id) {
        let m2 = findModule(id);
        if (m2 && selector) {
          return m2.querySelector(selector);
        }
        return m2;
      }
      return null;
    }
    attributeChangedCallback(name, old, value, namespace) {
      if (old !== value) {
        this.register();
      }
    }
    get assetpath() {
      if (!this.__assetpath) {
        const owner = window.HTMLImports && HTMLImports.importForElement ? HTMLImports.importForElement(this) || document : this.ownerDocument;
        const url = resolveUrl(
          this.getAttribute("assetpath") || "",
          owner.baseURI
        );
        this.__assetpath = pathFromUrl(url);
      }
      return this.__assetpath;
    }
    register(id) {
      id = id || this.id;
      if (id) {
        if (strictTemplatePolicy && findModule(id) !== void 0) {
          setModule(id, null);
          throw new Error(`strictTemplatePolicy: dom-module ${id} re-registered`);
        }
        this.id = id;
        setModule(id, this);
        styleOutsideTemplateCheck(this);
      }
    }
  };
  DomModule.prototype["modules"] = modules;
  customElements.define("dom-module", DomModule);

  // node_modules/@polymer/polymer/lib/utils/style-gather.js
  var MODULE_STYLE_LINK_SELECTOR = "link[rel=import][type~=css]";
  var INCLUDE_ATTR = "include";
  var SHADY_UNSCOPED_ATTR = "shady-unscoped";
  function importModule(moduleId) {
    return DomModule.import(moduleId);
  }
  function styleForImport(importDoc) {
    let container = importDoc.body ? importDoc.body : importDoc;
    const importCss = resolveCss(
      container.textContent,
      importDoc.baseURI
    );
    const style2 = document.createElement("style");
    style2.textContent = importCss;
    return style2;
  }
  function stylesFromModules(moduleIds) {
    const modules2 = moduleIds.trim().split(/\s+/);
    const styles = [];
    for (let i5 = 0; i5 < modules2.length; i5++) {
      styles.push(...stylesFromModule(modules2[i5]));
    }
    return styles;
  }
  function stylesFromModule(moduleId) {
    const m2 = importModule(moduleId);
    if (!m2) {
      console.warn("Could not find style data in module named", moduleId);
      return [];
    }
    if (m2._styles === void 0) {
      const styles = [];
      styles.push(..._stylesFromModuleImports(m2));
      const template5 = m2.querySelector("template");
      if (template5) {
        styles.push(...stylesFromTemplate(
          template5,
          m2.assetpath
        ));
      }
      m2._styles = styles;
    }
    return m2._styles;
  }
  function stylesFromTemplate(template5, baseURI) {
    if (!template5._styles) {
      const styles = [];
      const e$ = template5.content.querySelectorAll("style");
      for (let i5 = 0; i5 < e$.length; i5++) {
        let e9 = e$[i5];
        let include = e9.getAttribute(INCLUDE_ATTR);
        if (include) {
          styles.push(...stylesFromModules(include).filter(function(item, index, self) {
            return self.indexOf(item) === index;
          }));
        }
        if (baseURI) {
          e9.textContent = resolveCss(e9.textContent, baseURI);
        }
        styles.push(e9);
      }
      template5._styles = styles;
    }
    return template5._styles;
  }
  function stylesFromModuleImports(moduleId) {
    let m2 = importModule(moduleId);
    return m2 ? _stylesFromModuleImports(m2) : [];
  }
  function _stylesFromModuleImports(module) {
    const styles = [];
    const p$ = module.querySelectorAll(MODULE_STYLE_LINK_SELECTOR);
    for (let i5 = 0; i5 < p$.length; i5++) {
      let p2 = p$[i5];
      if (p2.import) {
        const importDoc = p2.import;
        const unscoped = p2.hasAttribute(SHADY_UNSCOPED_ATTR);
        if (unscoped && !importDoc._unscopedStyle) {
          const style2 = styleForImport(importDoc);
          style2.setAttribute(SHADY_UNSCOPED_ATTR, "");
          importDoc._unscopedStyle = style2;
        } else if (!importDoc._style) {
          importDoc._style = styleForImport(importDoc);
        }
        styles.push(unscoped ? importDoc._unscopedStyle : importDoc._style);
      }
    }
    return styles;
  }

  // node_modules/@polymer/polymer/lib/utils/wrap.js
  var wrap = window["ShadyDOM"] && window["ShadyDOM"]["noPatch"] && window["ShadyDOM"]["wrap"] ? window["ShadyDOM"]["wrap"] : window["ShadyDOM"] ? (n6) => ShadyDOM["patch"](n6) : (n6) => n6;

  // node_modules/@polymer/polymer/lib/utils/path.js
  function isPath(path) {
    return path.indexOf(".") >= 0;
  }
  function root(path) {
    let dotIndex = path.indexOf(".");
    if (dotIndex === -1) {
      return path;
    }
    return path.slice(0, dotIndex);
  }
  function isAncestor(base, path) {
    return base.indexOf(path + ".") === 0;
  }
  function isDescendant(base, path) {
    return path.indexOf(base + ".") === 0;
  }
  function translate(base, newBase, path) {
    return newBase + path.slice(base.length);
  }
  function normalize(path) {
    if (Array.isArray(path)) {
      let parts = [];
      for (let i5 = 0; i5 < path.length; i5++) {
        let args = path[i5].toString().split(".");
        for (let j = 0; j < args.length; j++) {
          parts.push(args[j]);
        }
      }
      return parts.join(".");
    } else {
      return path;
    }
  }
  function split(path) {
    if (Array.isArray(path)) {
      return normalize(path).split(".");
    }
    return path.toString().split(".");
  }
  function get(root2, path, info) {
    let prop = root2;
    let parts = split(path);
    for (let i5 = 0; i5 < parts.length; i5++) {
      if (!prop) {
        return;
      }
      let part = parts[i5];
      prop = prop[part];
    }
    if (info) {
      info.path = parts.join(".");
    }
    return prop;
  }
  function set(root2, path, value) {
    let prop = root2;
    let parts = split(path);
    let last = parts[parts.length - 1];
    if (parts.length > 1) {
      for (let i5 = 0; i5 < parts.length - 1; i5++) {
        let part = parts[i5];
        prop = prop[part];
        if (!prop) {
          return;
        }
      }
      prop[last] = value;
    } else {
      prop[path] = value;
    }
    return parts.join(".");
  }

  // node_modules/@polymer/polymer/lib/utils/case-map.js
  var caseMap = {};
  var DASH_TO_CAMEL = /-[a-z]/g;
  var CAMEL_TO_DASH = /([A-Z])/g;
  function dashToCamelCase(dash) {
    return caseMap[dash] || (caseMap[dash] = dash.indexOf("-") < 0 ? dash : dash.replace(
      DASH_TO_CAMEL,
      (m2) => m2[1].toUpperCase()
    ));
  }
  function camelToDashCase(camel) {
    return caseMap[camel] || (caseMap[camel] = camel.replace(CAMEL_TO_DASH, "-$1").toLowerCase());
  }

  // node_modules/@polymer/polymer/lib/utils/async.js
  var microtaskCurrHandle = 0;
  var microtaskLastHandle = 0;
  var microtaskCallbacks = [];
  var microtaskNodeContent = 0;
  var microtaskScheduled = false;
  var microtaskNode = document.createTextNode("");
  new window.MutationObserver(microtaskFlush).observe(microtaskNode, { characterData: true });
  function microtaskFlush() {
    microtaskScheduled = false;
    const len = microtaskCallbacks.length;
    for (let i5 = 0; i5 < len; i5++) {
      let cb = microtaskCallbacks[i5];
      if (cb) {
        try {
          cb();
        } catch (e9) {
          setTimeout(() => {
            throw e9;
          });
        }
      }
    }
    microtaskCallbacks.splice(0, len);
    microtaskLastHandle += len;
  }
  var microTask = {
    run(callback) {
      if (!microtaskScheduled) {
        microtaskScheduled = true;
        microtaskNode.textContent = microtaskNodeContent++;
      }
      microtaskCallbacks.push(callback);
      return microtaskCurrHandle++;
    },
    cancel(handle) {
      const idx = handle - microtaskLastHandle;
      if (idx >= 0) {
        if (!microtaskCallbacks[idx]) {
          throw new Error("invalid async handle: " + handle);
        }
        microtaskCallbacks[idx] = null;
      }
    }
  };

  // node_modules/@polymer/polymer/lib/mixins/properties-changed.js
  var microtask = microTask;
  var PropertiesChanged = dedupingMixin(
    (superClass) => {
      class PropertiesChanged2 extends superClass {
        static createProperties(props) {
          const proto2 = this.prototype;
          for (let prop in props) {
            if (!(prop in proto2)) {
              proto2._createPropertyAccessor(prop);
            }
          }
        }
        static attributeNameForProperty(property) {
          return property.toLowerCase();
        }
        static typeForProperty(name) {
        }
        _createPropertyAccessor(property, readOnly) {
          this._addPropertyToAttributeMap(property);
          if (!this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor", this))) {
            this.__dataHasAccessor = Object.assign({}, this.__dataHasAccessor);
          }
          if (!this.__dataHasAccessor[property]) {
            this.__dataHasAccessor[property] = true;
            this._definePropertyAccessor(property, readOnly);
          }
        }
        _addPropertyToAttributeMap(property) {
          if (!this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes", this))) {
            this.__dataAttributes = Object.assign({}, this.__dataAttributes);
          }
          let attr = this.__dataAttributes[property];
          if (!attr) {
            attr = this.constructor.attributeNameForProperty(property);
            this.__dataAttributes[attr] = property;
          }
          return attr;
        }
        _definePropertyAccessor(property, readOnly) {
          Object.defineProperty(this, property, {
            get() {
              return this.__data[property];
            },
            set: readOnly ? function() {
            } : function(value) {
              if (this._setPendingProperty(property, value, true)) {
                this._invalidateProperties();
              }
            }
          });
        }
        constructor() {
          super();
          this.__dataEnabled = false;
          this.__dataReady = false;
          this.__dataInvalid = false;
          this.__data = {};
          this.__dataPending = null;
          this.__dataOld = null;
          this.__dataInstanceProps = null;
          this.__dataCounter = 0;
          this.__serializing = false;
          this._initializeProperties();
        }
        ready() {
          this.__dataReady = true;
          this._flushProperties();
        }
        _initializeProperties() {
          for (let p2 in this.__dataHasAccessor) {
            if (this.hasOwnProperty(p2)) {
              this.__dataInstanceProps = this.__dataInstanceProps || {};
              this.__dataInstanceProps[p2] = this[p2];
              delete this[p2];
            }
          }
        }
        _initializeInstanceProperties(props) {
          Object.assign(this, props);
        }
        _setProperty(property, value) {
          if (this._setPendingProperty(property, value)) {
            this._invalidateProperties();
          }
        }
        _getProperty(property) {
          return this.__data[property];
        }
        _setPendingProperty(property, value, ext) {
          let old = this.__data[property];
          let changed = this._shouldPropertyChange(property, value, old);
          if (changed) {
            if (!this.__dataPending) {
              this.__dataPending = {};
              this.__dataOld = {};
            }
            if (this.__dataOld && !(property in this.__dataOld)) {
              this.__dataOld[property] = old;
            }
            this.__data[property] = value;
            this.__dataPending[property] = value;
          }
          return changed;
        }
        _isPropertyPending(property) {
          return !!(this.__dataPending && this.__dataPending.hasOwnProperty(property));
        }
        _invalidateProperties() {
          if (!this.__dataInvalid && this.__dataReady) {
            this.__dataInvalid = true;
            microtask.run(() => {
              if (this.__dataInvalid) {
                this.__dataInvalid = false;
                this._flushProperties();
              }
            });
          }
        }
        _enableProperties() {
          if (!this.__dataEnabled) {
            this.__dataEnabled = true;
            if (this.__dataInstanceProps) {
              this._initializeInstanceProperties(this.__dataInstanceProps);
              this.__dataInstanceProps = null;
            }
            this.ready();
          }
        }
        _flushProperties() {
          this.__dataCounter++;
          const props = this.__data;
          const changedProps = this.__dataPending;
          const old = this.__dataOld;
          if (this._shouldPropertiesChange(props, changedProps, old)) {
            this.__dataPending = null;
            this.__dataOld = null;
            this._propertiesChanged(props, changedProps, old);
          }
          this.__dataCounter--;
        }
        _shouldPropertiesChange(currentProps, changedProps, oldProps) {
          return Boolean(changedProps);
        }
        _propertiesChanged(currentProps, changedProps, oldProps) {
        }
        _shouldPropertyChange(property, value, old) {
          return old !== value && (old === old || value === value);
        }
        attributeChangedCallback(name, old, value, namespace) {
          if (old !== value) {
            this._attributeToProperty(name, value);
          }
          if (super.attributeChangedCallback) {
            super.attributeChangedCallback(name, old, value, namespace);
          }
        }
        _attributeToProperty(attribute, value, type) {
          if (!this.__serializing) {
            const map = this.__dataAttributes;
            const property = map && map[attribute] || attribute;
            this[property] = this._deserializeValue(value, type || this.constructor.typeForProperty(property));
          }
        }
        _propertyToAttribute(property, attribute, value) {
          this.__serializing = true;
          value = arguments.length < 3 ? this[property] : value;
          this._valueToNodeAttribute(
            this,
            value,
            attribute || this.constructor.attributeNameForProperty(property)
          );
          this.__serializing = false;
        }
        _valueToNodeAttribute(node, value, attribute) {
          const str = this._serializeValue(value);
          if (attribute === "class" || attribute === "name" || attribute === "slot") {
            node = wrap(node);
          }
          if (str === void 0) {
            node.removeAttribute(attribute);
          } else {
            node.setAttribute(
              attribute,
              str === "" && window.trustedTypes ? window.trustedTypes.emptyScript : str
            );
          }
        }
        _serializeValue(value) {
          switch (typeof value) {
            case "boolean":
              return value ? "" : void 0;
            default:
              return value != null ? value.toString() : void 0;
          }
        }
        _deserializeValue(value, type) {
          switch (type) {
            case Boolean:
              return value !== null;
            case Number:
              return Number(value);
            default:
              return value;
          }
        }
      }
      return PropertiesChanged2;
    }
  );

  // node_modules/@polymer/polymer/lib/mixins/property-accessors.js
  var nativeProperties = {};
  var proto = HTMLElement.prototype;
  while (proto) {
    let props = Object.getOwnPropertyNames(proto);
    for (let i5 = 0; i5 < props.length; i5++) {
      nativeProperties[props[i5]] = true;
    }
    proto = Object.getPrototypeOf(proto);
  }
  var isTrustedType = (() => {
    if (!window.trustedTypes) {
      return () => false;
    }
    return (val) => trustedTypes.isHTML(val) || trustedTypes.isScript(val) || trustedTypes.isScriptURL(val);
  })();
  function saveAccessorValue(model, property) {
    if (!nativeProperties[property]) {
      let value = model[property];
      if (value !== void 0) {
        if (model.__data) {
          model._setPendingProperty(property, value);
        } else {
          if (!model.__dataProto) {
            model.__dataProto = {};
          } else if (!model.hasOwnProperty(JSCompiler_renameProperty("__dataProto", model))) {
            model.__dataProto = Object.create(model.__dataProto);
          }
          model.__dataProto[property] = value;
        }
      }
    }
  }
  var PropertyAccessors = dedupingMixin((superClass) => {
    const base = PropertiesChanged(superClass);
    class PropertyAccessors2 extends base {
      static createPropertiesForAttributes() {
        let a$ = this.observedAttributes;
        for (let i5 = 0; i5 < a$.length; i5++) {
          this.prototype._createPropertyAccessor(dashToCamelCase(a$[i5]));
        }
      }
      static attributeNameForProperty(property) {
        return camelToDashCase(property);
      }
      _initializeProperties() {
        if (this.__dataProto) {
          this._initializeProtoProperties(this.__dataProto);
          this.__dataProto = null;
        }
        super._initializeProperties();
      }
      _initializeProtoProperties(props) {
        for (let p2 in props) {
          this._setProperty(p2, props[p2]);
        }
      }
      _ensureAttribute(attribute, value) {
        const el = this;
        if (!el.hasAttribute(attribute)) {
          this._valueToNodeAttribute(el, value, attribute);
        }
      }
      _serializeValue(value) {
        switch (typeof value) {
          case "object":
            if (value instanceof Date) {
              return value.toString();
            } else if (value) {
              if (isTrustedType(value)) {
                return value;
              }
              try {
                return JSON.stringify(value);
              } catch (x2) {
                return "";
              }
            }
          default:
            return super._serializeValue(value);
        }
      }
      _deserializeValue(value, type) {
        let outValue;
        switch (type) {
          case Object:
            try {
              outValue = JSON.parse(value);
            } catch (x2) {
              outValue = value;
            }
            break;
          case Array:
            try {
              outValue = JSON.parse(value);
            } catch (x2) {
              outValue = null;
              console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${value}`);
            }
            break;
          case Date:
            outValue = isNaN(value) ? String(value) : Number(value);
            outValue = new Date(outValue);
            break;
          default:
            outValue = super._deserializeValue(value, type);
            break;
        }
        return outValue;
      }
      _definePropertyAccessor(property, readOnly) {
        saveAccessorValue(this, property);
        super._definePropertyAccessor(property, readOnly);
      }
      _hasAccessor(property) {
        return this.__dataHasAccessor && this.__dataHasAccessor[property];
      }
      _isPropertyPending(prop) {
        return Boolean(this.__dataPending && prop in this.__dataPending);
      }
    }
    return PropertyAccessors2;
  });

  // node_modules/@polymer/polymer/lib/mixins/template-stamp.js
  var templateExtensions = {
    "dom-if": true,
    "dom-repeat": true
  };
  var placeholderBugDetect = false;
  var placeholderBug = false;
  function hasPlaceholderBug() {
    if (!placeholderBugDetect) {
      placeholderBugDetect = true;
      const t4 = document.createElement("textarea");
      t4.placeholder = "a";
      placeholderBug = t4.placeholder === t4.textContent;
    }
    return placeholderBug;
  }
  function fixPlaceholder(node) {
    if (hasPlaceholderBug() && node.localName === "textarea" && node.placeholder && node.placeholder === node.textContent) {
      node.textContent = null;
    }
  }
  var copyAttributeWithTemplateEventPolicy = (() => {
    const polymerTemplateEventAttributePolicy = window.trustedTypes && window.trustedTypes.createPolicy(
      "polymer-template-event-attribute-policy",
      {
        createScript: (x2) => x2
      }
    );
    return (dest, src, name) => {
      const value = src.getAttribute(name);
      if (polymerTemplateEventAttributePolicy && name.startsWith("on-")) {
        dest.setAttribute(
          name,
          polymerTemplateEventAttributePolicy.createScript(value, name)
        );
        return;
      }
      dest.setAttribute(name, value);
    };
  })();
  function wrapTemplateExtension(node) {
    let is = node.getAttribute("is");
    if (is && templateExtensions[is]) {
      let t4 = node;
      t4.removeAttribute("is");
      node = t4.ownerDocument.createElement(is);
      t4.parentNode.replaceChild(node, t4);
      node.appendChild(t4);
      while (t4.attributes.length) {
        const { name } = t4.attributes[0];
        copyAttributeWithTemplateEventPolicy(node, t4, name);
        t4.removeAttribute(name);
      }
    }
    return node;
  }
  function findTemplateNode(root2, nodeInfo) {
    let parent = nodeInfo.parentInfo && findTemplateNode(root2, nodeInfo.parentInfo);
    if (parent) {
      for (let n6 = parent.firstChild, i5 = 0; n6; n6 = n6.nextSibling) {
        if (nodeInfo.parentIndex === i5++) {
          return n6;
        }
      }
    } else {
      return root2;
    }
  }
  function applyIdToMap(inst, map, node, nodeInfo) {
    if (nodeInfo.id) {
      map[nodeInfo.id] = node;
    }
  }
  function applyEventListener(inst, node, nodeInfo) {
    if (nodeInfo.events && nodeInfo.events.length) {
      for (let j = 0, e$ = nodeInfo.events, e9; j < e$.length && (e9 = e$[j]); j++) {
        inst._addMethodEventListenerToNode(node, e9.name, e9.value, inst);
      }
    }
  }
  function applyTemplateInfo(inst, node, nodeInfo, parentTemplateInfo) {
    if (nodeInfo.templateInfo) {
      node._templateInfo = nodeInfo.templateInfo;
      node._parentTemplateInfo = parentTemplateInfo;
    }
  }
  function createNodeEventHandler(context, eventName, methodName) {
    context = context._methodHost || context;
    let handler = function(e9) {
      if (context[methodName]) {
        context[methodName](e9, e9.detail);
      } else {
        console.warn("listener method `" + methodName + "` not defined");
      }
    };
    return handler;
  }
  var TemplateStamp = dedupingMixin(
    (superClass) => {
      class TemplateStamp2 extends superClass {
        static _parseTemplate(template5, outerTemplateInfo) {
          if (!template5._templateInfo) {
            let templateInfo = template5._templateInfo = {};
            templateInfo.nodeInfoList = [];
            templateInfo.nestedTemplate = Boolean(outerTemplateInfo);
            templateInfo.stripWhiteSpace = outerTemplateInfo && outerTemplateInfo.stripWhiteSpace || template5.hasAttribute && template5.hasAttribute("strip-whitespace");
            this._parseTemplateContent(
              template5,
              templateInfo,
              { parent: null }
            );
          }
          return template5._templateInfo;
        }
        static _parseTemplateContent(template5, templateInfo, nodeInfo) {
          return this._parseTemplateNode(template5.content, templateInfo, nodeInfo);
        }
        static _parseTemplateNode(node, templateInfo, nodeInfo) {
          let noted = false;
          let element = node;
          if (element.localName == "template" && !element.hasAttribute("preserve-content")) {
            noted = this._parseTemplateNestedTemplate(element, templateInfo, nodeInfo) || noted;
          } else if (element.localName === "slot") {
            templateInfo.hasInsertionPoint = true;
          }
          fixPlaceholder(element);
          if (element.firstChild) {
            this._parseTemplateChildNodes(element, templateInfo, nodeInfo);
          }
          if (element.hasAttributes && element.hasAttributes()) {
            noted = this._parseTemplateNodeAttributes(element, templateInfo, nodeInfo) || noted;
          }
          return noted || nodeInfo.noted;
        }
        static _parseTemplateChildNodes(root2, templateInfo, nodeInfo) {
          if (root2.localName === "script" || root2.localName === "style") {
            return;
          }
          for (let node = root2.firstChild, parentIndex = 0, next; node; node = next) {
            if (node.localName == "template") {
              node = wrapTemplateExtension(node);
            }
            next = node.nextSibling;
            if (node.nodeType === Node.TEXT_NODE) {
              let n6 = next;
              while (n6 && n6.nodeType === Node.TEXT_NODE) {
                node.textContent += n6.textContent;
                next = n6.nextSibling;
                root2.removeChild(n6);
                n6 = next;
              }
              if (templateInfo.stripWhiteSpace && !node.textContent.trim()) {
                root2.removeChild(node);
                continue;
              }
            }
            let childInfo = { parentIndex, parentInfo: nodeInfo };
            if (this._parseTemplateNode(node, templateInfo, childInfo)) {
              childInfo.infoIndex = templateInfo.nodeInfoList.push(childInfo) - 1;
            }
            if (node.parentNode) {
              parentIndex++;
            }
          }
        }
        static _parseTemplateNestedTemplate(node, outerTemplateInfo, nodeInfo) {
          let element = node;
          let templateInfo = this._parseTemplate(element, outerTemplateInfo);
          let content = templateInfo.content = element.content.ownerDocument.createDocumentFragment();
          content.appendChild(element.content);
          nodeInfo.templateInfo = templateInfo;
          return true;
        }
        static _parseTemplateNodeAttributes(node, templateInfo, nodeInfo) {
          let noted = false;
          let attrs = Array.from(node.attributes);
          for (let i5 = attrs.length - 1, a3; a3 = attrs[i5]; i5--) {
            noted = this._parseTemplateNodeAttribute(node, templateInfo, nodeInfo, a3.name, a3.value) || noted;
          }
          return noted;
        }
        static _parseTemplateNodeAttribute(node, templateInfo, nodeInfo, name, value) {
          if (name.slice(0, 3) === "on-") {
            node.removeAttribute(name);
            nodeInfo.events = nodeInfo.events || [];
            nodeInfo.events.push({
              name: name.slice(3),
              value
            });
            return true;
          } else if (name === "id") {
            nodeInfo.id = value;
            return true;
          }
          return false;
        }
        static _contentForTemplate(template5) {
          let templateInfo = template5._templateInfo;
          return templateInfo && templateInfo.content || template5.content;
        }
        _stampTemplate(template5, templateInfo) {
          if (template5 && !template5.content && window.HTMLTemplateElement && HTMLTemplateElement.decorate) {
            HTMLTemplateElement.decorate(template5);
          }
          templateInfo = templateInfo || this.constructor._parseTemplate(template5);
          let nodeInfo = templateInfo.nodeInfoList;
          let content = templateInfo.content || template5.content;
          let dom = document.importNode(content, true);
          dom.__noInsertionPoint = !templateInfo.hasInsertionPoint;
          let nodes = dom.nodeList = new Array(nodeInfo.length);
          dom.$ = {};
          for (let i5 = 0, l5 = nodeInfo.length, info; i5 < l5 && (info = nodeInfo[i5]); i5++) {
            let node = nodes[i5] = findTemplateNode(dom, info);
            applyIdToMap(this, dom.$, node, info);
            applyTemplateInfo(this, node, info, templateInfo);
            applyEventListener(this, node, info);
          }
          dom = dom;
          return dom;
        }
        _addMethodEventListenerToNode(node, eventName, methodName, context) {
          context = context || node;
          let handler = createNodeEventHandler(context, eventName, methodName);
          this._addEventListenerToNode(node, eventName, handler);
          return handler;
        }
        _addEventListenerToNode(node, eventName, handler) {
          node.addEventListener(eventName, handler);
        }
        _removeEventListenerFromNode(node, eventName, handler) {
          node.removeEventListener(eventName, handler);
        }
      }
      return TemplateStamp2;
    }
  );

  // node_modules/@polymer/polymer/lib/mixins/property-effects.js
  var dedupeId2 = 0;
  var NOOP = [];
  var TYPES = {
    COMPUTE: "__computeEffects",
    REFLECT: "__reflectEffects",
    NOTIFY: "__notifyEffects",
    PROPAGATE: "__propagateEffects",
    OBSERVE: "__observeEffects",
    READ_ONLY: "__readOnly"
  };
  var COMPUTE_INFO = "__computeInfo";
  var capitalAttributeRegex = /[A-Z]/;
  function ensureOwnEffectMap(model, type, cloneArrays) {
    let effects = model[type];
    if (!effects) {
      effects = model[type] = {};
    } else if (!model.hasOwnProperty(type)) {
      effects = model[type] = Object.create(model[type]);
      if (cloneArrays) {
        for (let p2 in effects) {
          let protoFx = effects[p2];
          let instFx = effects[p2] = Array(protoFx.length);
          for (let i5 = 0; i5 < protoFx.length; i5++) {
            instFx[i5] = protoFx[i5];
          }
        }
      }
    }
    return effects;
  }
  function runEffects(inst, effects, props, oldProps, hasPaths, extraArgs) {
    if (effects) {
      let ran = false;
      const id = dedupeId2++;
      for (let prop in props) {
        let rootProperty = hasPaths ? root(prop) : prop;
        let fxs = effects[rootProperty];
        if (fxs) {
          for (let i5 = 0, l5 = fxs.length, fx; i5 < l5 && (fx = fxs[i5]); i5++) {
            if ((!fx.info || fx.info.lastRun !== id) && (!hasPaths || pathMatchesTrigger(prop, fx.trigger))) {
              if (fx.info) {
                fx.info.lastRun = id;
              }
              fx.fn(inst, prop, props, oldProps, fx.info, hasPaths, extraArgs);
              ran = true;
            }
          }
        }
      }
      return ran;
    }
    return false;
  }
  function runEffectsForProperty(inst, effects, dedupeId3, prop, props, oldProps, hasPaths, extraArgs) {
    let ran = false;
    let rootProperty = hasPaths ? root(prop) : prop;
    let fxs = effects[rootProperty];
    if (fxs) {
      for (let i5 = 0, l5 = fxs.length, fx; i5 < l5 && (fx = fxs[i5]); i5++) {
        if ((!fx.info || fx.info.lastRun !== dedupeId3) && (!hasPaths || pathMatchesTrigger(prop, fx.trigger))) {
          if (fx.info) {
            fx.info.lastRun = dedupeId3;
          }
          fx.fn(inst, prop, props, oldProps, fx.info, hasPaths, extraArgs);
          ran = true;
        }
      }
    }
    return ran;
  }
  function pathMatchesTrigger(path, trigger) {
    if (trigger) {
      let triggerPath = trigger.name;
      return triggerPath == path || !!(trigger.structured && isAncestor(triggerPath, path)) || !!(trigger.wildcard && isDescendant(triggerPath, path));
    } else {
      return true;
    }
  }
  function runObserverEffect(inst, property, props, oldProps, info) {
    let fn = typeof info.method === "string" ? inst[info.method] : info.method;
    let changedProp = info.property;
    if (fn) {
      fn.call(inst, inst.__data[changedProp], oldProps[changedProp]);
    } else if (!info.dynamicFn) {
      console.warn("observer method `" + info.method + "` not defined");
    }
  }
  function runNotifyEffects(inst, notifyProps, props, oldProps, hasPaths) {
    let fxs = inst[TYPES.NOTIFY];
    let notified;
    let id = dedupeId2++;
    for (let prop in notifyProps) {
      if (notifyProps[prop]) {
        if (fxs && runEffectsForProperty(inst, fxs, id, prop, props, oldProps, hasPaths)) {
          notified = true;
        } else if (hasPaths && notifyPath(inst, prop, props)) {
          notified = true;
        }
      }
    }
    let host;
    if (notified && (host = inst.__dataHost) && host._invalidateProperties) {
      host._invalidateProperties();
    }
  }
  function notifyPath(inst, path, props) {
    let rootProperty = root(path);
    if (rootProperty !== path) {
      let eventName = camelToDashCase(rootProperty) + "-changed";
      dispatchNotifyEvent(inst, eventName, props[path], path);
      return true;
    }
    return false;
  }
  function dispatchNotifyEvent(inst, eventName, value, path) {
    let detail = {
      value,
      queueProperty: true
    };
    if (path) {
      detail.path = path;
    }
    wrap(inst).dispatchEvent(new CustomEvent(eventName, { detail }));
  }
  function runNotifyEffect(inst, property, props, oldProps, info, hasPaths) {
    let rootProperty = hasPaths ? root(property) : property;
    let path = rootProperty != property ? property : null;
    let value = path ? get(inst, path) : inst.__data[property];
    if (path && value === void 0) {
      value = props[property];
    }
    dispatchNotifyEvent(inst, info.eventName, value, path);
  }
  function handleNotification(event, inst, fromProp, toPath, negate) {
    let value;
    let detail = event.detail;
    let fromPath = detail && detail.path;
    if (fromPath) {
      toPath = translate(fromProp, toPath, fromPath);
      value = detail && detail.value;
    } else {
      value = event.currentTarget[fromProp];
    }
    value = negate ? !value : value;
    if (!inst[TYPES.READ_ONLY] || !inst[TYPES.READ_ONLY][toPath]) {
      if (inst._setPendingPropertyOrPath(toPath, value, true, Boolean(fromPath)) && (!detail || !detail.queueProperty)) {
        inst._invalidateProperties();
      }
    }
  }
  function runReflectEffect(inst, property, props, oldProps, info) {
    let value = inst.__data[property];
    if (sanitizeDOMValue) {
      value = sanitizeDOMValue(value, info.attrName, "attribute", inst);
    }
    inst._propertyToAttribute(property, info.attrName, value);
  }
  function runComputedEffects(inst, changedProps, oldProps, hasPaths) {
    let computeEffects = inst[TYPES.COMPUTE];
    if (computeEffects) {
      if (orderedComputed) {
        dedupeId2++;
        const order = getComputedOrder(inst);
        const queue = [];
        for (let p2 in changedProps) {
          enqueueEffectsFor(p2, computeEffects, queue, order, hasPaths);
        }
        let info;
        while (info = queue.shift()) {
          if (runComputedEffect(inst, "", changedProps, oldProps, info)) {
            enqueueEffectsFor(info.methodInfo, computeEffects, queue, order, hasPaths);
          }
        }
        Object.assign(oldProps, inst.__dataOld);
        Object.assign(changedProps, inst.__dataPending);
        inst.__dataPending = null;
      } else {
        let inputProps = changedProps;
        while (runEffects(inst, computeEffects, inputProps, oldProps, hasPaths)) {
          Object.assign(oldProps, inst.__dataOld);
          Object.assign(changedProps, inst.__dataPending);
          inputProps = inst.__dataPending;
          inst.__dataPending = null;
        }
      }
    }
  }
  var insertEffect = (info, queue, order) => {
    let start = 0;
    let end = queue.length - 1;
    let idx = -1;
    while (start <= end) {
      const mid = start + end >> 1;
      const cmp = order.get(queue[mid].methodInfo) - order.get(info.methodInfo);
      if (cmp < 0) {
        start = mid + 1;
      } else if (cmp > 0) {
        end = mid - 1;
      } else {
        idx = mid;
        break;
      }
    }
    if (idx < 0) {
      idx = end + 1;
    }
    queue.splice(idx, 0, info);
  };
  var enqueueEffectsFor = (prop, computeEffects, queue, order, hasPaths) => {
    const rootProperty = hasPaths ? root(prop) : prop;
    const fxs = computeEffects[rootProperty];
    if (fxs) {
      for (let i5 = 0; i5 < fxs.length; i5++) {
        const fx = fxs[i5];
        if (fx.info.lastRun !== dedupeId2 && (!hasPaths || pathMatchesTrigger(prop, fx.trigger))) {
          fx.info.lastRun = dedupeId2;
          insertEffect(fx.info, queue, order);
        }
      }
    }
  };
  function getComputedOrder(inst) {
    let ordered = inst.constructor.__orderedComputedDeps;
    if (!ordered) {
      ordered = /* @__PURE__ */ new Map();
      const effects = inst[TYPES.COMPUTE];
      let { counts, ready, total } = dependencyCounts(inst);
      let curr;
      while (curr = ready.shift()) {
        ordered.set(curr, ordered.size);
        const computedByCurr = effects[curr];
        if (computedByCurr) {
          computedByCurr.forEach((fx) => {
            const computedProp = fx.info.methodInfo;
            --total;
            if (--counts[computedProp] === 0) {
              ready.push(computedProp);
            }
          });
        }
      }
      if (total !== 0) {
        const el = inst;
        console.warn(`Computed graph for ${el.localName} incomplete; circular?`);
      }
      inst.constructor.__orderedComputedDeps = ordered;
    }
    return ordered;
  }
  function dependencyCounts(inst) {
    const infoForComputed = inst[COMPUTE_INFO];
    const counts = {};
    const computedDeps = inst[TYPES.COMPUTE];
    const ready = [];
    let total = 0;
    for (let p2 in infoForComputed) {
      const info = infoForComputed[p2];
      total += counts[p2] = info.args.filter((a3) => !a3.literal).length + (info.dynamicFn ? 1 : 0);
    }
    for (let p2 in computedDeps) {
      if (!infoForComputed[p2]) {
        ready.push(p2);
      }
    }
    return { counts, ready, total };
  }
  function runComputedEffect(inst, property, changedProps, oldProps, info) {
    let result = runMethodEffect(inst, property, changedProps, oldProps, info);
    if (result === NOOP) {
      return false;
    }
    let computedProp = info.methodInfo;
    if (inst.__dataHasAccessor && inst.__dataHasAccessor[computedProp]) {
      return inst._setPendingProperty(computedProp, result, true);
    } else {
      inst[computedProp] = result;
      return false;
    }
  }
  function computeLinkedPaths(inst, path, value) {
    let links = inst.__dataLinkedPaths;
    if (links) {
      let link;
      for (let a3 in links) {
        let b2 = links[a3];
        if (isDescendant(a3, path)) {
          link = translate(a3, b2, path);
          inst._setPendingPropertyOrPath(link, value, true, true);
        } else if (isDescendant(b2, path)) {
          link = translate(b2, a3, path);
          inst._setPendingPropertyOrPath(link, value, true, true);
        }
      }
    }
  }
  function addBinding(constructor, templateInfo, nodeInfo, kind, target, parts, literal) {
    nodeInfo.bindings = nodeInfo.bindings || [];
    let binding = { kind, target, parts, literal, isCompound: parts.length !== 1 };
    nodeInfo.bindings.push(binding);
    if (shouldAddListener(binding)) {
      let { event, negate } = binding.parts[0];
      binding.listenerEvent = event || camelToDashCase(target) + "-changed";
      binding.listenerNegate = negate;
    }
    let index = templateInfo.nodeInfoList.length;
    for (let i5 = 0; i5 < binding.parts.length; i5++) {
      let part = binding.parts[i5];
      part.compoundIndex = i5;
      addEffectForBindingPart(constructor, templateInfo, binding, part, index);
    }
  }
  function addEffectForBindingPart(constructor, templateInfo, binding, part, index) {
    if (!part.literal) {
      if (binding.kind === "attribute" && binding.target[0] === "-") {
        console.warn("Cannot set attribute " + binding.target + ' because "-" is not a valid attribute starting character');
      } else {
        let dependencies = part.dependencies;
        let info = { index, binding, part, evaluator: constructor };
        for (let j = 0; j < dependencies.length; j++) {
          let trigger = dependencies[j];
          if (typeof trigger == "string") {
            trigger = parseArg(trigger);
            trigger.wildcard = true;
          }
          constructor._addTemplatePropertyEffect(templateInfo, trigger.rootProperty, {
            fn: runBindingEffect,
            info,
            trigger
          });
        }
      }
    }
  }
  function runBindingEffect(inst, path, props, oldProps, info, hasPaths, nodeList) {
    let node = nodeList[info.index];
    let binding = info.binding;
    let part = info.part;
    if (hasPaths && part.source && path.length > part.source.length && binding.kind == "property" && !binding.isCompound && node.__isPropertyEffectsClient && node.__dataHasAccessor && node.__dataHasAccessor[binding.target]) {
      let value = props[path];
      path = translate(part.source, binding.target, path);
      if (node._setPendingPropertyOrPath(path, value, false, true)) {
        inst._enqueueClient(node);
      }
    } else {
      let value = info.evaluator._evaluateBinding(inst, part, path, props, oldProps, hasPaths);
      if (value !== NOOP) {
        applyBindingValue(inst, node, binding, part, value);
      }
    }
  }
  function applyBindingValue(inst, node, binding, part, value) {
    value = computeBindingValue(node, value, binding, part);
    if (sanitizeDOMValue) {
      value = sanitizeDOMValue(value, binding.target, binding.kind, node);
    }
    if (binding.kind == "attribute") {
      inst._valueToNodeAttribute(node, value, binding.target);
    } else {
      let prop = binding.target;
      if (node.__isPropertyEffectsClient && node.__dataHasAccessor && node.__dataHasAccessor[prop]) {
        if (!node[TYPES.READ_ONLY] || !node[TYPES.READ_ONLY][prop]) {
          if (node._setPendingProperty(prop, value)) {
            inst._enqueueClient(node);
          }
        }
      } else {
        inst._setUnmanagedPropertyToNode(node, prop, value);
      }
    }
  }
  function computeBindingValue(node, value, binding, part) {
    if (binding.isCompound) {
      let storage = node.__dataCompoundStorage[binding.target];
      storage[part.compoundIndex] = value;
      value = storage.join("");
    }
    if (binding.kind !== "attribute") {
      if (binding.target === "textContent" || binding.target === "value" && (node.localName === "input" || node.localName === "textarea")) {
        value = value == void 0 ? "" : value;
      }
    }
    return value;
  }
  function shouldAddListener(binding) {
    return Boolean(binding.target) && binding.kind != "attribute" && binding.kind != "text" && !binding.isCompound && binding.parts[0].mode === "{";
  }
  function setupBindings(inst, templateInfo) {
    let { nodeList, nodeInfoList } = templateInfo;
    if (nodeInfoList.length) {
      for (let i5 = 0; i5 < nodeInfoList.length; i5++) {
        let info = nodeInfoList[i5];
        let node = nodeList[i5];
        let bindings = info.bindings;
        if (bindings) {
          for (let i6 = 0; i6 < bindings.length; i6++) {
            let binding = bindings[i6];
            setupCompoundStorage(node, binding);
            addNotifyListener(node, inst, binding);
          }
        }
        node.__dataHost = inst;
      }
    }
  }
  function setupCompoundStorage(node, binding) {
    if (binding.isCompound) {
      let storage = node.__dataCompoundStorage || (node.__dataCompoundStorage = {});
      let parts = binding.parts;
      let literals = new Array(parts.length);
      for (let j = 0; j < parts.length; j++) {
        literals[j] = parts[j].literal;
      }
      let target = binding.target;
      storage[target] = literals;
      if (binding.literal && binding.kind == "property") {
        if (target === "className") {
          node = wrap(node);
        }
        node[target] = binding.literal;
      }
    }
  }
  function addNotifyListener(node, inst, binding) {
    if (binding.listenerEvent) {
      let part = binding.parts[0];
      node.addEventListener(binding.listenerEvent, function(e9) {
        handleNotification(e9, inst, binding.target, part.source, part.negate);
      });
    }
  }
  function createMethodEffect(model, sig, type, effectFn, methodInfo, dynamicFn) {
    dynamicFn = sig.static || dynamicFn && (typeof dynamicFn !== "object" || dynamicFn[sig.methodName]);
    let info = {
      methodName: sig.methodName,
      args: sig.args,
      methodInfo,
      dynamicFn
    };
    for (let i5 = 0, arg; i5 < sig.args.length && (arg = sig.args[i5]); i5++) {
      if (!arg.literal) {
        model._addPropertyEffect(arg.rootProperty, type, {
          fn: effectFn,
          info,
          trigger: arg
        });
      }
    }
    if (dynamicFn) {
      model._addPropertyEffect(sig.methodName, type, {
        fn: effectFn,
        info
      });
    }
    return info;
  }
  function runMethodEffect(inst, property, props, oldProps, info) {
    let context = inst._methodHost || inst;
    let fn = context[info.methodName];
    if (fn) {
      let args = inst._marshalArgs(info.args, property, props);
      return args === NOOP ? NOOP : fn.apply(context, args);
    } else if (!info.dynamicFn) {
      console.warn("method `" + info.methodName + "` not defined");
    }
  }
  var emptyArray = [];
  var IDENT = "(?:[a-zA-Z_$][\\w.:$\\-*]*)";
  var NUMBER = "(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)";
  var SQUOTE_STRING = "(?:'(?:[^'\\\\]|\\\\.)*')";
  var DQUOTE_STRING = '(?:"(?:[^"\\\\]|\\\\.)*")';
  var STRING = "(?:" + SQUOTE_STRING + "|" + DQUOTE_STRING + ")";
  var ARGUMENT = "(?:(" + IDENT + "|" + NUMBER + "|" + STRING + ")\\s*)";
  var ARGUMENTS = "(?:" + ARGUMENT + "(?:,\\s*" + ARGUMENT + ")*)";
  var ARGUMENT_LIST = "(?:\\(\\s*(?:" + ARGUMENTS + "?)\\)\\s*)";
  var BINDING = "(" + IDENT + "\\s*" + ARGUMENT_LIST + "?)";
  var OPEN_BRACKET = "(\\[\\[|{{)\\s*";
  var CLOSE_BRACKET = "(?:]]|}})";
  var NEGATE = "(?:(!)\\s*)?";
  var EXPRESSION = OPEN_BRACKET + NEGATE + BINDING + CLOSE_BRACKET;
  var bindingRegex = new RegExp(EXPRESSION, "g");
  function literalFromParts(parts) {
    let s5 = "";
    for (let i5 = 0; i5 < parts.length; i5++) {
      let literal = parts[i5].literal;
      s5 += literal || "";
    }
    return s5;
  }
  function parseMethod(expression) {
    let m2 = expression.match(/([^\s]+?)\(([\s\S]*)\)/);
    if (m2) {
      let methodName = m2[1];
      let sig = { methodName, static: true, args: emptyArray };
      if (m2[2].trim()) {
        let args = m2[2].replace(/\\,/g, "&comma;").split(",");
        return parseArgs(args, sig);
      } else {
        return sig;
      }
    }
    return null;
  }
  function parseArgs(argList, sig) {
    sig.args = argList.map(function(rawArg) {
      let arg = parseArg(rawArg);
      if (!arg.literal) {
        sig.static = false;
      }
      return arg;
    }, this);
    return sig;
  }
  function parseArg(rawArg) {
    let arg = rawArg.trim().replace(/&comma;/g, ",").replace(/\\(.)/g, "$1");
    let a3 = {
      name: arg,
      value: "",
      literal: false
    };
    let fc = arg[0];
    if (fc === "-") {
      fc = arg[1];
    }
    if (fc >= "0" && fc <= "9") {
      fc = "#";
    }
    switch (fc) {
      case "'":
      case '"':
        a3.value = arg.slice(1, -1);
        a3.literal = true;
        break;
      case "#":
        a3.value = Number(arg);
        a3.literal = true;
        break;
    }
    if (!a3.literal) {
      a3.rootProperty = root(arg);
      a3.structured = isPath(arg);
      if (a3.structured) {
        a3.wildcard = arg.slice(-2) == ".*";
        if (a3.wildcard) {
          a3.name = arg.slice(0, -2);
        }
      }
    }
    return a3;
  }
  function getArgValue(data, props, path) {
    let value = get(data, path);
    if (value === void 0) {
      value = props[path];
    }
    return value;
  }
  function notifySplices(inst, array, path, splices) {
    const splicesData = { indexSplices: splices };
    if (legacyUndefined && !inst._overrideLegacyUndefined) {
      array.splices = splicesData;
    }
    inst.notifyPath(path + ".splices", splicesData);
    inst.notifyPath(path + ".length", array.length);
    if (legacyUndefined && !inst._overrideLegacyUndefined) {
      splicesData.indexSplices = [];
    }
  }
  function notifySplice(inst, array, path, index, addedCount, removed) {
    notifySplices(inst, array, path, [{
      index,
      addedCount,
      removed,
      object: array,
      type: "splice"
    }]);
  }
  function upper(name) {
    return name[0].toUpperCase() + name.substring(1);
  }
  var PropertyEffects = dedupingMixin((superClass) => {
    const propertyEffectsBase = TemplateStamp(PropertyAccessors(superClass));
    class PropertyEffects2 extends propertyEffectsBase {
      constructor() {
        super();
        this.__isPropertyEffectsClient = true;
        this.__dataClientsReady;
        this.__dataPendingClients;
        this.__dataToNotify;
        this.__dataLinkedPaths;
        this.__dataHasPaths;
        this.__dataCompoundStorage;
        this.__dataHost;
        this.__dataTemp;
        this.__dataClientsInitialized;
        this.__data;
        this.__dataPending;
        this.__dataOld;
        this.__computeEffects;
        this.__computeInfo;
        this.__reflectEffects;
        this.__notifyEffects;
        this.__propagateEffects;
        this.__observeEffects;
        this.__readOnly;
        this.__templateInfo;
        this._overrideLegacyUndefined;
      }
      get PROPERTY_EFFECT_TYPES() {
        return TYPES;
      }
      _initializeProperties() {
        super._initializeProperties();
        this._registerHost();
        this.__dataClientsReady = false;
        this.__dataPendingClients = null;
        this.__dataToNotify = null;
        this.__dataLinkedPaths = null;
        this.__dataHasPaths = false;
        this.__dataCompoundStorage = this.__dataCompoundStorage || null;
        this.__dataHost = this.__dataHost || null;
        this.__dataTemp = {};
        this.__dataClientsInitialized = false;
      }
      _registerHost() {
        if (hostStack.length) {
          let host = hostStack[hostStack.length - 1];
          host._enqueueClient(this);
          this.__dataHost = host;
        }
      }
      _initializeProtoProperties(props) {
        this.__data = Object.create(props);
        this.__dataPending = Object.create(props);
        this.__dataOld = {};
      }
      _initializeInstanceProperties(props) {
        let readOnly = this[TYPES.READ_ONLY];
        for (let prop in props) {
          if (!readOnly || !readOnly[prop]) {
            this.__dataPending = this.__dataPending || {};
            this.__dataOld = this.__dataOld || {};
            this.__data[prop] = this.__dataPending[prop] = props[prop];
          }
        }
      }
      _addPropertyEffect(property, type, effect) {
        this._createPropertyAccessor(property, type == TYPES.READ_ONLY);
        let effects = ensureOwnEffectMap(this, type, true)[property];
        if (!effects) {
          effects = this[type][property] = [];
        }
        effects.push(effect);
      }
      _removePropertyEffect(property, type, effect) {
        let effects = ensureOwnEffectMap(this, type, true)[property];
        let idx = effects.indexOf(effect);
        if (idx >= 0) {
          effects.splice(idx, 1);
        }
      }
      _hasPropertyEffect(property, type) {
        let effects = this[type];
        return Boolean(effects && effects[property]);
      }
      _hasReadOnlyEffect(property) {
        return this._hasPropertyEffect(property, TYPES.READ_ONLY);
      }
      _hasNotifyEffect(property) {
        return this._hasPropertyEffect(property, TYPES.NOTIFY);
      }
      _hasReflectEffect(property) {
        return this._hasPropertyEffect(property, TYPES.REFLECT);
      }
      _hasComputedEffect(property) {
        return this._hasPropertyEffect(property, TYPES.COMPUTE);
      }
      _setPendingPropertyOrPath(path, value, shouldNotify, isPathNotification) {
        if (isPathNotification || root(Array.isArray(path) ? path[0] : path) !== path) {
          if (!isPathNotification) {
            let old = get(this, path);
            path = set(this, path, value);
            if (!path || !super._shouldPropertyChange(path, value, old)) {
              return false;
            }
          }
          this.__dataHasPaths = true;
          if (this._setPendingProperty(path, value, shouldNotify)) {
            computeLinkedPaths(this, path, value);
            return true;
          }
        } else {
          if (this.__dataHasAccessor && this.__dataHasAccessor[path]) {
            return this._setPendingProperty(path, value, shouldNotify);
          } else {
            this[path] = value;
          }
        }
        return false;
      }
      _setUnmanagedPropertyToNode(node, prop, value) {
        if (value !== node[prop] || typeof value == "object") {
          if (prop === "className") {
            node = wrap(node);
          }
          node[prop] = value;
        }
      }
      _setPendingProperty(property, value, shouldNotify) {
        let propIsPath = this.__dataHasPaths && isPath(property);
        let prevProps = propIsPath ? this.__dataTemp : this.__data;
        if (this._shouldPropertyChange(property, value, prevProps[property])) {
          if (!this.__dataPending) {
            this.__dataPending = {};
            this.__dataOld = {};
          }
          if (!(property in this.__dataOld)) {
            this.__dataOld[property] = this.__data[property];
          }
          if (propIsPath) {
            this.__dataTemp[property] = value;
          } else {
            this.__data[property] = value;
          }
          this.__dataPending[property] = value;
          if (propIsPath || this[TYPES.NOTIFY] && this[TYPES.NOTIFY][property]) {
            this.__dataToNotify = this.__dataToNotify || {};
            this.__dataToNotify[property] = shouldNotify;
          }
          return true;
        }
        return false;
      }
      _setProperty(property, value) {
        if (this._setPendingProperty(property, value, true)) {
          this._invalidateProperties();
        }
      }
      _invalidateProperties() {
        if (this.__dataReady) {
          this._flushProperties();
        }
      }
      _enqueueClient(client) {
        this.__dataPendingClients = this.__dataPendingClients || [];
        if (client !== this) {
          this.__dataPendingClients.push(client);
        }
      }
      _flushClients() {
        if (!this.__dataClientsReady) {
          this.__dataClientsReady = true;
          this._readyClients();
          this.__dataReady = true;
        } else {
          this.__enableOrFlushClients();
        }
      }
      __enableOrFlushClients() {
        let clients = this.__dataPendingClients;
        if (clients) {
          this.__dataPendingClients = null;
          for (let i5 = 0; i5 < clients.length; i5++) {
            let client = clients[i5];
            if (!client.__dataEnabled) {
              client._enableProperties();
            } else if (client.__dataPending) {
              client._flushProperties();
            }
          }
        }
      }
      _readyClients() {
        this.__enableOrFlushClients();
      }
      setProperties(props, setReadOnly) {
        for (let path in props) {
          if (setReadOnly || !this[TYPES.READ_ONLY] || !this[TYPES.READ_ONLY][path]) {
            this._setPendingPropertyOrPath(path, props[path], true);
          }
        }
        this._invalidateProperties();
      }
      ready() {
        this._flushProperties();
        if (!this.__dataClientsReady) {
          this._flushClients();
        }
        if (this.__dataPending) {
          this._flushProperties();
        }
      }
      _propertiesChanged(currentProps, changedProps, oldProps) {
        let hasPaths = this.__dataHasPaths;
        this.__dataHasPaths = false;
        let notifyProps;
        runComputedEffects(this, changedProps, oldProps, hasPaths);
        notifyProps = this.__dataToNotify;
        this.__dataToNotify = null;
        this._propagatePropertyChanges(changedProps, oldProps, hasPaths);
        this._flushClients();
        runEffects(this, this[TYPES.REFLECT], changedProps, oldProps, hasPaths);
        runEffects(this, this[TYPES.OBSERVE], changedProps, oldProps, hasPaths);
        if (notifyProps) {
          runNotifyEffects(this, notifyProps, changedProps, oldProps, hasPaths);
        }
        if (this.__dataCounter == 1) {
          this.__dataTemp = {};
        }
      }
      _propagatePropertyChanges(changedProps, oldProps, hasPaths) {
        if (this[TYPES.PROPAGATE]) {
          runEffects(this, this[TYPES.PROPAGATE], changedProps, oldProps, hasPaths);
        }
        if (this.__templateInfo) {
          this._runEffectsForTemplate(this.__templateInfo, changedProps, oldProps, hasPaths);
        }
      }
      _runEffectsForTemplate(templateInfo, changedProps, oldProps, hasPaths) {
        const baseRunEffects = (changedProps2, hasPaths2) => {
          runEffects(
            this,
            templateInfo.propertyEffects,
            changedProps2,
            oldProps,
            hasPaths2,
            templateInfo.nodeList
          );
          for (let info = templateInfo.firstChild; info; info = info.nextSibling) {
            this._runEffectsForTemplate(info, changedProps2, oldProps, hasPaths2);
          }
        };
        if (templateInfo.runEffects) {
          templateInfo.runEffects(baseRunEffects, changedProps, hasPaths);
        } else {
          baseRunEffects(changedProps, hasPaths);
        }
      }
      linkPaths(to, from) {
        to = normalize(to);
        from = normalize(from);
        this.__dataLinkedPaths = this.__dataLinkedPaths || {};
        this.__dataLinkedPaths[to] = from;
      }
      unlinkPaths(path) {
        path = normalize(path);
        if (this.__dataLinkedPaths) {
          delete this.__dataLinkedPaths[path];
        }
      }
      notifySplices(path, splices) {
        let info = { path: "" };
        let array = get(this, path, info);
        notifySplices(this, array, info.path, splices);
      }
      get(path, root2) {
        return get(root2 || this, path);
      }
      set(path, value, root2) {
        if (root2) {
          set(root2, path, value);
        } else {
          if (!this[TYPES.READ_ONLY] || !this[TYPES.READ_ONLY][path]) {
            if (this._setPendingPropertyOrPath(path, value, true)) {
              this._invalidateProperties();
            }
          }
        }
      }
      push(path, ...items) {
        let info = { path: "" };
        let array = get(this, path, info);
        let len = array.length;
        let ret = array.push(...items);
        if (items.length) {
          notifySplice(this, array, info.path, len, items.length, []);
        }
        return ret;
      }
      pop(path) {
        let info = { path: "" };
        let array = get(this, path, info);
        let hadLength = Boolean(array.length);
        let ret = array.pop();
        if (hadLength) {
          notifySplice(this, array, info.path, array.length, 0, [ret]);
        }
        return ret;
      }
      splice(path, start, deleteCount, ...items) {
        let info = { path: "" };
        let array = get(this, path, info);
        if (start < 0) {
          start = array.length - Math.floor(-start);
        } else if (start) {
          start = Math.floor(start);
        }
        let ret;
        if (arguments.length === 2) {
          ret = array.splice(start);
        } else {
          ret = array.splice(start, deleteCount, ...items);
        }
        if (items.length || ret.length) {
          notifySplice(this, array, info.path, start, items.length, ret);
        }
        return ret;
      }
      shift(path) {
        let info = { path: "" };
        let array = get(this, path, info);
        let hadLength = Boolean(array.length);
        let ret = array.shift();
        if (hadLength) {
          notifySplice(this, array, info.path, 0, 0, [ret]);
        }
        return ret;
      }
      unshift(path, ...items) {
        let info = { path: "" };
        let array = get(this, path, info);
        let ret = array.unshift(...items);
        if (items.length) {
          notifySplice(this, array, info.path, 0, items.length, []);
        }
        return ret;
      }
      notifyPath(path, value) {
        let propPath;
        if (arguments.length == 1) {
          let info = { path: "" };
          value = get(this, path, info);
          propPath = info.path;
        } else if (Array.isArray(path)) {
          propPath = normalize(path);
        } else {
          propPath = path;
        }
        if (this._setPendingPropertyOrPath(propPath, value, true, true)) {
          this._invalidateProperties();
        }
      }
      _createReadOnlyProperty(property, protectedSetter) {
        this._addPropertyEffect(property, TYPES.READ_ONLY);
        if (protectedSetter) {
          this["_set" + upper(property)] = function(value) {
            this._setProperty(property, value);
          };
        }
      }
      _createPropertyObserver(property, method, dynamicFn) {
        let info = { property, method, dynamicFn: Boolean(dynamicFn) };
        this._addPropertyEffect(property, TYPES.OBSERVE, {
          fn: runObserverEffect,
          info,
          trigger: { name: property }
        });
        if (dynamicFn) {
          this._addPropertyEffect(method, TYPES.OBSERVE, {
            fn: runObserverEffect,
            info,
            trigger: { name: method }
          });
        }
      }
      _createMethodObserver(expression, dynamicFn) {
        let sig = parseMethod(expression);
        if (!sig) {
          throw new Error("Malformed observer expression '" + expression + "'");
        }
        createMethodEffect(this, sig, TYPES.OBSERVE, runMethodEffect, null, dynamicFn);
      }
      _createNotifyingProperty(property) {
        this._addPropertyEffect(property, TYPES.NOTIFY, {
          fn: runNotifyEffect,
          info: {
            eventName: camelToDashCase(property) + "-changed",
            property
          }
        });
      }
      _createReflectedProperty(property) {
        let attr = this.constructor.attributeNameForProperty(property);
        if (attr[0] === "-") {
          console.warn("Property " + property + " cannot be reflected to attribute " + attr + ' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.');
        } else {
          this._addPropertyEffect(property, TYPES.REFLECT, {
            fn: runReflectEffect,
            info: {
              attrName: attr
            }
          });
        }
      }
      _createComputedProperty(property, expression, dynamicFn) {
        let sig = parseMethod(expression);
        if (!sig) {
          throw new Error("Malformed computed expression '" + expression + "'");
        }
        const info = createMethodEffect(this, sig, TYPES.COMPUTE, runComputedEffect, property, dynamicFn);
        ensureOwnEffectMap(this, COMPUTE_INFO)[property] = info;
      }
      _marshalArgs(args, path, props) {
        const data = this.__data;
        const values = [];
        for (let i5 = 0, l5 = args.length; i5 < l5; i5++) {
          let { name, structured, wildcard, value, literal } = args[i5];
          if (!literal) {
            if (wildcard) {
              const matches = isDescendant(name, path);
              const pathValue = getArgValue(data, props, matches ? path : name);
              value = {
                path: matches ? path : name,
                value: pathValue,
                base: matches ? get(data, name) : pathValue
              };
            } else {
              value = structured ? getArgValue(data, props, name) : data[name];
            }
          }
          if (legacyUndefined && !this._overrideLegacyUndefined && value === void 0 && args.length > 1) {
            return NOOP;
          }
          values[i5] = value;
        }
        return values;
      }
      static addPropertyEffect(property, type, effect) {
        this.prototype._addPropertyEffect(property, type, effect);
      }
      static createPropertyObserver(property, method, dynamicFn) {
        this.prototype._createPropertyObserver(property, method, dynamicFn);
      }
      static createMethodObserver(expression, dynamicFn) {
        this.prototype._createMethodObserver(expression, dynamicFn);
      }
      static createNotifyingProperty(property) {
        this.prototype._createNotifyingProperty(property);
      }
      static createReadOnlyProperty(property, protectedSetter) {
        this.prototype._createReadOnlyProperty(property, protectedSetter);
      }
      static createReflectedProperty(property) {
        this.prototype._createReflectedProperty(property);
      }
      static createComputedProperty(property, expression, dynamicFn) {
        this.prototype._createComputedProperty(property, expression, dynamicFn);
      }
      static bindTemplate(template5) {
        return this.prototype._bindTemplate(template5);
      }
      _bindTemplate(template5, instanceBinding) {
        let templateInfo = this.constructor._parseTemplate(template5);
        let wasPreBound = this.__preBoundTemplateInfo == templateInfo;
        if (!wasPreBound) {
          for (let prop in templateInfo.propertyEffects) {
            this._createPropertyAccessor(prop);
          }
        }
        if (instanceBinding) {
          templateInfo = Object.create(templateInfo);
          templateInfo.wasPreBound = wasPreBound;
          if (!this.__templateInfo) {
            this.__templateInfo = templateInfo;
          } else {
            const parent = template5._parentTemplateInfo || this.__templateInfo;
            const previous = parent.lastChild;
            templateInfo.parent = parent;
            parent.lastChild = templateInfo;
            templateInfo.previousSibling = previous;
            if (previous) {
              previous.nextSibling = templateInfo;
            } else {
              parent.firstChild = templateInfo;
            }
          }
        } else {
          this.__preBoundTemplateInfo = templateInfo;
        }
        return templateInfo;
      }
      static _addTemplatePropertyEffect(templateInfo, prop, effect) {
        let hostProps = templateInfo.hostProps = templateInfo.hostProps || {};
        hostProps[prop] = true;
        let effects = templateInfo.propertyEffects = templateInfo.propertyEffects || {};
        let propEffects = effects[prop] = effects[prop] || [];
        propEffects.push(effect);
      }
      _stampTemplate(template5, templateInfo) {
        templateInfo = templateInfo || this._bindTemplate(template5, true);
        hostStack.push(this);
        let dom = super._stampTemplate(template5, templateInfo);
        hostStack.pop();
        templateInfo.nodeList = dom.nodeList;
        if (!templateInfo.wasPreBound) {
          let nodes = templateInfo.childNodes = [];
          for (let n6 = dom.firstChild; n6; n6 = n6.nextSibling) {
            nodes.push(n6);
          }
        }
        dom.templateInfo = templateInfo;
        setupBindings(this, templateInfo);
        if (this.__dataClientsReady) {
          this._runEffectsForTemplate(templateInfo, this.__data, null, false);
          this._flushClients();
        }
        return dom;
      }
      _removeBoundDom(dom) {
        const templateInfo = dom.templateInfo;
        const { previousSibling, nextSibling, parent } = templateInfo;
        if (previousSibling) {
          previousSibling.nextSibling = nextSibling;
        } else if (parent) {
          parent.firstChild = nextSibling;
        }
        if (nextSibling) {
          nextSibling.previousSibling = previousSibling;
        } else if (parent) {
          parent.lastChild = previousSibling;
        }
        templateInfo.nextSibling = templateInfo.previousSibling = null;
        let nodes = templateInfo.childNodes;
        for (let i5 = 0; i5 < nodes.length; i5++) {
          let node = nodes[i5];
          wrap(wrap(node).parentNode).removeChild(node);
        }
      }
      static _parseTemplateNode(node, templateInfo, nodeInfo) {
        let noted = propertyEffectsBase._parseTemplateNode.call(
          this,
          node,
          templateInfo,
          nodeInfo
        );
        if (node.nodeType === Node.TEXT_NODE) {
          let parts = this._parseBindings(node.textContent, templateInfo);
          if (parts) {
            node.textContent = literalFromParts(parts) || " ";
            addBinding(this, templateInfo, nodeInfo, "text", "textContent", parts);
            noted = true;
          }
        }
        return noted;
      }
      static _parseTemplateNodeAttribute(node, templateInfo, nodeInfo, name, value) {
        let parts = this._parseBindings(value, templateInfo);
        if (parts) {
          let origName = name;
          let kind = "property";
          if (capitalAttributeRegex.test(name)) {
            kind = "attribute";
          } else if (name[name.length - 1] == "$") {
            name = name.slice(0, -1);
            kind = "attribute";
          }
          let literal = literalFromParts(parts);
          if (literal && kind == "attribute") {
            if (name == "class" && node.hasAttribute("class")) {
              literal += " " + node.getAttribute(name);
            }
            node.setAttribute(name, literal);
          }
          if (kind == "attribute" && origName == "disable-upgrade$") {
            node.setAttribute(name, "");
          }
          if (node.localName === "input" && origName === "value") {
            node.setAttribute(origName, "");
          }
          node.removeAttribute(origName);
          if (kind === "property") {
            name = dashToCamelCase(name);
          }
          addBinding(this, templateInfo, nodeInfo, kind, name, parts, literal);
          return true;
        } else {
          return propertyEffectsBase._parseTemplateNodeAttribute.call(
            this,
            node,
            templateInfo,
            nodeInfo,
            name,
            value
          );
        }
      }
      static _parseTemplateNestedTemplate(node, templateInfo, nodeInfo) {
        let noted = propertyEffectsBase._parseTemplateNestedTemplate.call(
          this,
          node,
          templateInfo,
          nodeInfo
        );
        const parent = node.parentNode;
        const nestedTemplateInfo = nodeInfo.templateInfo;
        const isDomIf = parent.localName === "dom-if";
        const isDomRepeat = parent.localName === "dom-repeat";
        if (removeNestedTemplates && (isDomIf || isDomRepeat)) {
          parent.removeChild(node);
          nodeInfo = nodeInfo.parentInfo;
          nodeInfo.templateInfo = nestedTemplateInfo;
          nodeInfo.noted = true;
          noted = false;
        }
        let hostProps = nestedTemplateInfo.hostProps;
        if (fastDomIf && isDomIf) {
          if (hostProps) {
            templateInfo.hostProps = Object.assign(templateInfo.hostProps || {}, hostProps);
            if (!removeNestedTemplates) {
              nodeInfo.parentInfo.noted = true;
            }
          }
        } else {
          let mode = "{";
          for (let source in hostProps) {
            let parts = [{ mode, source, dependencies: [source], hostProp: true }];
            addBinding(this, templateInfo, nodeInfo, "property", "_host_" + source, parts);
          }
        }
        return noted;
      }
      static _parseBindings(text, templateInfo) {
        let parts = [];
        let lastIndex = 0;
        let m2;
        while ((m2 = bindingRegex.exec(text)) !== null) {
          if (m2.index > lastIndex) {
            parts.push({ literal: text.slice(lastIndex, m2.index) });
          }
          let mode = m2[1][0];
          let negate = Boolean(m2[2]);
          let source = m2[3].trim();
          let customEvent = false, notifyEvent = "", colon = -1;
          if (mode == "{" && (colon = source.indexOf("::")) > 0) {
            notifyEvent = source.substring(colon + 2);
            source = source.substring(0, colon);
            customEvent = true;
          }
          let signature = parseMethod(source);
          let dependencies = [];
          if (signature) {
            let { args, methodName } = signature;
            for (let i5 = 0; i5 < args.length; i5++) {
              let arg = args[i5];
              if (!arg.literal) {
                dependencies.push(arg);
              }
            }
            let dynamicFns = templateInfo.dynamicFns;
            if (dynamicFns && dynamicFns[methodName] || signature.static) {
              dependencies.push(methodName);
              signature.dynamicFn = true;
            }
          } else {
            dependencies.push(source);
          }
          parts.push({
            source,
            mode,
            negate,
            customEvent,
            signature,
            dependencies,
            event: notifyEvent
          });
          lastIndex = bindingRegex.lastIndex;
        }
        if (lastIndex && lastIndex < text.length) {
          let literal = text.substring(lastIndex);
          if (literal) {
            parts.push({
              literal
            });
          }
        }
        if (parts.length) {
          return parts;
        } else {
          return null;
        }
      }
      static _evaluateBinding(inst, part, path, props, oldProps, hasPaths) {
        let value;
        if (part.signature) {
          value = runMethodEffect(inst, path, props, oldProps, part.signature);
        } else if (path != part.source) {
          value = get(inst, part.source);
        } else {
          if (hasPaths && isPath(path)) {
            value = get(inst, path);
          } else {
            value = inst.__data[path];
          }
        }
        if (part.negate) {
          value = !value;
        }
        return value;
      }
    }
    return PropertyEffects2;
  });
  var hostStack = [];

  // node_modules/@polymer/polymer/lib/utils/telemetry.js
  var instanceCount = 0;
  function incrementInstanceCount() {
    instanceCount++;
  }
  var registrations = [];
  function register(prototype) {
    registrations.push(prototype);
  }

  // node_modules/@polymer/polymer/lib/mixins/properties-mixin.js
  function normalizeProperties(props) {
    const output = {};
    for (let p2 in props) {
      const o7 = props[p2];
      output[p2] = typeof o7 === "function" ? { type: o7 } : o7;
    }
    return output;
  }
  var PropertiesMixin = dedupingMixin((superClass) => {
    const base = PropertiesChanged(superClass);
    function superPropertiesClass(constructor) {
      const superCtor = Object.getPrototypeOf(constructor);
      return superCtor.prototype instanceof PropertiesMixin2 ? superCtor : null;
    }
    function ownProperties(constructor) {
      if (!constructor.hasOwnProperty(JSCompiler_renameProperty("__ownProperties", constructor))) {
        let props = null;
        if (constructor.hasOwnProperty(JSCompiler_renameProperty("properties", constructor))) {
          const properties = constructor.properties;
          if (properties) {
            props = normalizeProperties(properties);
          }
        }
        constructor.__ownProperties = props;
      }
      return constructor.__ownProperties;
    }
    class PropertiesMixin2 extends base {
      static get observedAttributes() {
        if (!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes", this))) {
          register(this.prototype);
          const props = this._properties;
          this.__observedAttributes = props ? Object.keys(props).map((p2) => this.prototype._addPropertyToAttributeMap(p2)) : [];
        }
        return this.__observedAttributes;
      }
      static finalize() {
        if (!this.hasOwnProperty(JSCompiler_renameProperty("__finalized", this))) {
          const superCtor = superPropertiesClass(this);
          if (superCtor) {
            superCtor.finalize();
          }
          this.__finalized = true;
          this._finalizeClass();
        }
      }
      static _finalizeClass() {
        const props = ownProperties(this);
        if (props) {
          this.createProperties(props);
        }
      }
      static get _properties() {
        if (!this.hasOwnProperty(
          JSCompiler_renameProperty("__properties", this)
        )) {
          const superCtor = superPropertiesClass(this);
          this.__properties = Object.assign(
            {},
            superCtor && superCtor._properties,
            ownProperties(this)
          );
        }
        return this.__properties;
      }
      static typeForProperty(name) {
        const info = this._properties[name];
        return info && info.type;
      }
      _initializeProperties() {
        incrementInstanceCount();
        this.constructor.finalize();
        super._initializeProperties();
      }
      connectedCallback() {
        if (super.connectedCallback) {
          super.connectedCallback();
        }
        this._enableProperties();
      }
      disconnectedCallback() {
        if (super.disconnectedCallback) {
          super.disconnectedCallback();
        }
      }
    }
    return PropertiesMixin2;
  });

  // node_modules/@polymer/polymer/lib/mixins/element-mixin.js
  var version = "3.5.1";
  var builtCSS = window.ShadyCSS && window.ShadyCSS["cssBuild"];
  var ElementMixin = dedupingMixin((base) => {
    const polymerElementBase = PropertiesMixin(PropertyEffects(base));
    function propertyDefaults(constructor) {
      if (!constructor.hasOwnProperty(
        JSCompiler_renameProperty("__propertyDefaults", constructor)
      )) {
        constructor.__propertyDefaults = null;
        let props = constructor._properties;
        for (let p2 in props) {
          let info = props[p2];
          if ("value" in info) {
            constructor.__propertyDefaults = constructor.__propertyDefaults || {};
            constructor.__propertyDefaults[p2] = info;
          }
        }
      }
      return constructor.__propertyDefaults;
    }
    function ownObservers(constructor) {
      if (!constructor.hasOwnProperty(
        JSCompiler_renameProperty("__ownObservers", constructor)
      )) {
        constructor.__ownObservers = constructor.hasOwnProperty(
          JSCompiler_renameProperty("observers", constructor)
        ) ? constructor.observers : null;
      }
      return constructor.__ownObservers;
    }
    function createPropertyFromConfig(proto2, name, info, allProps) {
      if (info.computed) {
        info.readOnly = true;
      }
      if (info.computed) {
        if (proto2._hasReadOnlyEffect(name)) {
          console.warn(`Cannot redefine computed property '${name}'.`);
        } else {
          proto2._createComputedProperty(name, info.computed, allProps);
        }
      }
      if (info.readOnly && !proto2._hasReadOnlyEffect(name)) {
        proto2._createReadOnlyProperty(name, !info.computed);
      } else if (info.readOnly === false && proto2._hasReadOnlyEffect(name)) {
        console.warn(`Cannot make readOnly property '${name}' non-readOnly.`);
      }
      if (info.reflectToAttribute && !proto2._hasReflectEffect(name)) {
        proto2._createReflectedProperty(name);
      } else if (info.reflectToAttribute === false && proto2._hasReflectEffect(name)) {
        console.warn(`Cannot make reflected property '${name}' non-reflected.`);
      }
      if (info.notify && !proto2._hasNotifyEffect(name)) {
        proto2._createNotifyingProperty(name);
      } else if (info.notify === false && proto2._hasNotifyEffect(name)) {
        console.warn(`Cannot make notify property '${name}' non-notify.`);
      }
      if (info.observer) {
        proto2._createPropertyObserver(name, info.observer, allProps[info.observer]);
      }
      proto2._addPropertyToAttributeMap(name);
    }
    function processElementStyles(klass, template5, is, baseURI) {
      if (!builtCSS) {
        const templateStyles = template5.content.querySelectorAll("style");
        const stylesWithImports = stylesFromTemplate(template5);
        const linkedStyles = stylesFromModuleImports(is);
        const firstTemplateChild = template5.content.firstElementChild;
        for (let idx = 0; idx < linkedStyles.length; idx++) {
          let s5 = linkedStyles[idx];
          s5.textContent = klass._processStyleText(s5.textContent, baseURI);
          template5.content.insertBefore(s5, firstTemplateChild);
        }
        let templateStyleIndex = 0;
        for (let i5 = 0; i5 < stylesWithImports.length; i5++) {
          let s5 = stylesWithImports[i5];
          let templateStyle = templateStyles[templateStyleIndex];
          if (templateStyle !== s5) {
            s5 = s5.cloneNode(true);
            templateStyle.parentNode.insertBefore(s5, templateStyle);
          } else {
            templateStyleIndex++;
          }
          s5.textContent = klass._processStyleText(s5.textContent, baseURI);
        }
      }
      if (window.ShadyCSS) {
        window.ShadyCSS.prepareTemplate(template5, is);
      }
      if (useAdoptedStyleSheetsWithBuiltCSS && builtCSS && supportsAdoptingStyleSheets) {
        const styles = template5.content.querySelectorAll("style");
        if (styles) {
          let css = "";
          Array.from(styles).forEach((s5) => {
            css += s5.textContent;
            s5.parentNode.removeChild(s5);
          });
          klass._styleSheet = new CSSStyleSheet();
          klass._styleSheet.replaceSync(css);
        }
      }
    }
    function getTemplateFromDomModule(is) {
      let template5 = null;
      if (is && (!strictTemplatePolicy || allowTemplateFromDomModule)) {
        template5 = DomModule.import(is, "template");
        if (strictTemplatePolicy && !template5) {
          throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${is}`);
        }
      }
      return template5;
    }
    class PolymerElement2 extends polymerElementBase {
      static get polymerElementVersion() {
        return version;
      }
      static _finalizeClass() {
        polymerElementBase._finalizeClass.call(this);
        const observers = ownObservers(this);
        if (observers) {
          this.createObservers(observers, this._properties);
        }
        this._prepareTemplate();
      }
      static _prepareTemplate() {
        let template5 = this.template;
        if (template5) {
          if (typeof template5 === "string") {
            console.error("template getter must return HTMLTemplateElement");
            template5 = null;
          } else if (!legacyOptimizations) {
            template5 = template5.cloneNode(true);
          }
        }
        this.prototype._template = template5;
      }
      static createProperties(props) {
        for (let p2 in props) {
          createPropertyFromConfig(
            this.prototype,
            p2,
            props[p2],
            props
          );
        }
      }
      static createObservers(observers, dynamicFns) {
        const proto2 = this.prototype;
        for (let i5 = 0; i5 < observers.length; i5++) {
          proto2._createMethodObserver(observers[i5], dynamicFns);
        }
      }
      static get template() {
        if (!this.hasOwnProperty(JSCompiler_renameProperty("_template", this))) {
          let protoTemplate = this.prototype.hasOwnProperty(
            JSCompiler_renameProperty("_template", this.prototype)
          ) ? this.prototype._template : void 0;
          if (typeof protoTemplate === "function") {
            protoTemplate = protoTemplate();
          }
          this._template = protoTemplate !== void 0 ? protoTemplate : this.hasOwnProperty(JSCompiler_renameProperty("is", this)) && getTemplateFromDomModule(this.is) || Object.getPrototypeOf(this.prototype).constructor.template;
        }
        return this._template;
      }
      static set template(value) {
        this._template = value;
      }
      static get importPath() {
        if (!this.hasOwnProperty(JSCompiler_renameProperty("_importPath", this))) {
          const meta = this.importMeta;
          if (meta) {
            this._importPath = pathFromUrl(meta.url);
          } else {
            const module = DomModule.import(this.is);
            this._importPath = module && module.assetpath || Object.getPrototypeOf(this.prototype).constructor.importPath;
          }
        }
        return this._importPath;
      }
      constructor() {
        super();
        this._template;
        this._importPath;
        this.rootPath;
        this.importPath;
        this.root;
        this.$;
      }
      _initializeProperties() {
        this.constructor.finalize();
        this.constructor._finalizeTemplate(this.localName);
        super._initializeProperties();
        this.rootPath = rootPath;
        this.importPath = this.constructor.importPath;
        let p$ = propertyDefaults(this.constructor);
        if (!p$) {
          return;
        }
        for (let p2 in p$) {
          let info = p$[p2];
          if (this._canApplyPropertyDefault(p2)) {
            let value = typeof info.value == "function" ? info.value.call(this) : info.value;
            if (this._hasAccessor(p2)) {
              this._setPendingProperty(p2, value, true);
            } else {
              this[p2] = value;
            }
          }
        }
      }
      _canApplyPropertyDefault(property) {
        return !this.hasOwnProperty(property);
      }
      static _processStyleText(cssText, baseURI) {
        return resolveCss(cssText, baseURI);
      }
      static _finalizeTemplate(is) {
        const template5 = this.prototype._template;
        if (template5 && !template5.__polymerFinalized) {
          template5.__polymerFinalized = true;
          const importPath = this.importPath;
          const baseURI = importPath ? resolveUrl(importPath) : "";
          processElementStyles(this, template5, is, baseURI);
          this.prototype._bindTemplate(template5);
        }
      }
      connectedCallback() {
        if (window.ShadyCSS && this._template) {
          window.ShadyCSS.styleElement(this);
        }
        super.connectedCallback();
      }
      ready() {
        if (this._template) {
          this.root = this._stampTemplate(this._template);
          this.$ = this.root.$;
        }
        super.ready();
      }
      _readyClients() {
        if (this._template) {
          this.root = this._attachDom(this.root);
        }
        super._readyClients();
      }
      _attachDom(dom) {
        const n6 = wrap(this);
        if (n6.attachShadow) {
          if (dom) {
            if (!n6.shadowRoot) {
              n6.attachShadow({ mode: "open", shadyUpgradeFragment: dom });
              n6.shadowRoot.appendChild(dom);
              if (this.constructor._styleSheet) {
                n6.shadowRoot.adoptedStyleSheets = [this.constructor._styleSheet];
              }
            }
            if (syncInitialRender && window.ShadyDOM) {
              window.ShadyDOM.flushInitial(n6.shadowRoot);
            }
            return n6.shadowRoot;
          }
          return null;
        } else {
          throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.");
        }
      }
      updateStyles(properties) {
        if (window.ShadyCSS) {
          window.ShadyCSS.styleSubtree(this, properties);
        }
      }
      resolveUrl(url, base2) {
        if (!base2 && this.importPath) {
          base2 = resolveUrl(this.importPath);
        }
        return resolveUrl(url, base2);
      }
      static _parseTemplateContent(template5, templateInfo, nodeInfo) {
        templateInfo.dynamicFns = templateInfo.dynamicFns || this._properties;
        return polymerElementBase._parseTemplateContent.call(
          this,
          template5,
          templateInfo,
          nodeInfo
        );
      }
      static _addTemplatePropertyEffect(templateInfo, prop, effect) {
        if (legacyWarnings && !(prop in this._properties) && !(effect.info.part.signature && effect.info.part.signature.static) && !effect.info.part.hostProp && !templateInfo.nestedTemplate) {
          console.warn(`Property '${prop}' used in template but not declared in 'properties'; attribute will not be observed.`);
        }
        return polymerElementBase._addTemplatePropertyEffect.call(
          this,
          templateInfo,
          prop,
          effect
        );
      }
    }
    return PolymerElement2;
  });

  // node_modules/@polymer/polymer/lib/utils/html-tag.js
  var policy = window.trustedTypes && trustedTypes.createPolicy("polymer-html-literal", { createHTML: (s5) => s5 });
  var LiteralString = class {
    constructor(strings, values) {
      assertValidTemplateStringParameters(strings, values);
      const string = values.reduce(
        (acc, v2, idx) => acc + literalValue(v2) + strings[idx + 1],
        strings[0]
      );
      this.value = string.toString();
    }
    toString() {
      return this.value;
    }
  };
  function literalValue(value) {
    if (value instanceof LiteralString) {
      return value.value;
    } else {
      throw new Error(
        `non-literal value passed to Polymer's htmlLiteral function: ${value}`
      );
    }
  }
  function htmlValue(value) {
    if (value instanceof HTMLTemplateElement) {
      return value.innerHTML;
    } else if (value instanceof LiteralString) {
      return literalValue(value);
    } else {
      throw new Error(
        `non-template value passed to Polymer's html function: ${value}`
      );
    }
  }
  var html = function html2(strings, ...values) {
    assertValidTemplateStringParameters(strings, values);
    const template5 = document.createElement("template");
    let value = values.reduce(
      (acc, v2, idx) => acc + htmlValue(v2) + strings[idx + 1],
      strings[0]
    );
    if (policy) {
      value = policy.createHTML(value);
    }
    template5.innerHTML = value;
    return template5;
  };
  var assertValidTemplateStringParameters = (strings, values) => {
    if (!Array.isArray(strings) || !Array.isArray(strings.raw) || values.length !== strings.length - 1) {
      throw new TypeError("Invalid call to the html template tag");
    }
  };

  // node_modules/@polymer/polymer/polymer-element.js
  var PolymerElement = ElementMixin(HTMLElement);

  // node_modules/@vaadin/component-base/src/disabled-mixin.js
  var DisabledMixin = dedupingMixin(
    (superclass) => class DisabledMixinClass extends superclass {
      static get properties() {
        return {
          disabled: {
            type: Boolean,
            value: false,
            observer: "_disabledChanged",
            reflectToAttribute: true
          }
        };
      }
      _disabledChanged(disabled) {
        this._setAriaDisabled(disabled);
      }
      _setAriaDisabled(disabled) {
        if (disabled) {
          this.setAttribute("aria-disabled", "true");
        } else {
          this.removeAttribute("aria-disabled");
        }
      }
      click() {
        if (!this.disabled) {
          super.click();
        }
      }
    }
  );

  // node_modules/@vaadin/component-base/src/async.js
  var microtaskCurrHandle2 = 0;
  var microtaskLastHandle2 = 0;
  var microtaskCallbacks2 = [];
  var microtaskNodeContent2 = 0;
  var microtaskScheduled2 = false;
  var microtaskNode2 = document.createTextNode("");
  new window.MutationObserver(microtaskFlush2).observe(microtaskNode2, { characterData: true });
  function microtaskFlush2() {
    microtaskScheduled2 = false;
    const len = microtaskCallbacks2.length;
    for (let i5 = 0; i5 < len; i5++) {
      const cb = microtaskCallbacks2[i5];
      if (cb) {
        try {
          cb();
        } catch (e9) {
          setTimeout(() => {
            throw e9;
          });
        }
      }
    }
    microtaskCallbacks2.splice(0, len);
    microtaskLastHandle2 += len;
  }
  var timeOut = {
    after(delay) {
      return {
        run(fn) {
          return window.setTimeout(fn, delay);
        },
        cancel(handle) {
          window.clearTimeout(handle);
        }
      };
    },
    run(fn, delay) {
      return window.setTimeout(fn, delay);
    },
    cancel(handle) {
      window.clearTimeout(handle);
    }
  };
  var animationFrame = {
    run(fn) {
      return window.requestAnimationFrame(fn);
    },
    cancel(handle) {
      window.cancelAnimationFrame(handle);
    }
  };
  var idlePeriod = {
    run(fn) {
      return window.requestIdleCallback ? window.requestIdleCallback(fn) : window.setTimeout(fn, 16);
    },
    cancel(handle) {
      if (window.cancelIdleCallback) {
        window.cancelIdleCallback(handle);
      } else {
        window.clearTimeout(handle);
      }
    }
  };
  var microTask2 = {
    run(callback) {
      if (!microtaskScheduled2) {
        microtaskScheduled2 = true;
        microtaskNode2.textContent = microtaskNodeContent2;
        microtaskNodeContent2 += 1;
      }
      microtaskCallbacks2.push(callback);
      const result = microtaskCurrHandle2;
      microtaskCurrHandle2 += 1;
      return result;
    },
    cancel(handle) {
      const idx = handle - microtaskLastHandle2;
      if (idx >= 0) {
        if (!microtaskCallbacks2[idx]) {
          throw new Error(`invalid async handle: ${handle}`);
        }
        microtaskCallbacks2[idx] = null;
      }
    }
  };

  // node_modules/@vaadin/component-base/src/gestures.js
  var passiveTouchGestures2 = false;
  var wrap2 = (node) => node;
  var HAS_NATIVE_TA = typeof document.head.style.touchAction === "string";
  var GESTURE_KEY = "__polymerGestures";
  var HANDLED_OBJ = "__polymerGesturesHandled";
  var TOUCH_ACTION = "__polymerGesturesTouchAction";
  var TAP_DISTANCE = 25;
  var TRACK_DISTANCE = 5;
  var TRACK_LENGTH = 2;
  var MOUSE_EVENTS = ["mousedown", "mousemove", "mouseup", "click"];
  var MOUSE_WHICH_TO_BUTTONS = [0, 1, 4, 2];
  var MOUSE_HAS_BUTTONS = function() {
    try {
      return new MouseEvent("test", { buttons: 1 }).buttons === 1;
    } catch (e9) {
      return false;
    }
  }();
  function isMouseEvent(name) {
    return MOUSE_EVENTS.indexOf(name) > -1;
  }
  var supportsPassive = false;
  (function() {
    try {
      const opts = Object.defineProperty({}, "passive", {
        get() {
          supportsPassive = true;
        }
      });
      window.addEventListener("test", null, opts);
      window.removeEventListener("test", null, opts);
    } catch (e9) {
    }
  })();
  function PASSIVE_TOUCH(eventName) {
    if (isMouseEvent(eventName) || eventName === "touchend") {
      return;
    }
    if (HAS_NATIVE_TA && supportsPassive && passiveTouchGestures2) {
      return { passive: true };
    }
  }
  var IS_TOUCH_ONLY = navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);
  var canBeDisabled = {
    button: true,
    command: true,
    fieldset: true,
    input: true,
    keygen: true,
    optgroup: true,
    option: true,
    select: true,
    textarea: true
  };
  function hasLeftMouseButton(ev) {
    const type = ev.type;
    if (!isMouseEvent(type)) {
      return false;
    }
    if (type === "mousemove") {
      let buttons = ev.buttons === void 0 ? 1 : ev.buttons;
      if (ev instanceof window.MouseEvent && !MOUSE_HAS_BUTTONS) {
        buttons = MOUSE_WHICH_TO_BUTTONS[ev.which] || 0;
      }
      return Boolean(buttons & 1);
    }
    const button2 = ev.button === void 0 ? 0 : ev.button;
    return button2 === 0;
  }
  function isSyntheticClick(ev) {
    if (ev.type === "click") {
      if (ev.detail === 0) {
        return true;
      }
      const t4 = _findOriginalTarget(ev);
      if (!t4.nodeType || t4.nodeType !== Node.ELEMENT_NODE) {
        return true;
      }
      const bcr = t4.getBoundingClientRect();
      const x2 = ev.pageX, y2 = ev.pageY;
      return !(x2 >= bcr.left && x2 <= bcr.right && y2 >= bcr.top && y2 <= bcr.bottom);
    }
    return false;
  }
  var POINTERSTATE = {
    mouse: {
      target: null,
      mouseIgnoreJob: null
    },
    touch: {
      x: 0,
      y: 0,
      id: -1,
      scrollDecided: false
    }
  };
  function firstTouchAction(ev) {
    let ta = "auto";
    const path = getComposedPath(ev);
    for (let i5 = 0, n6; i5 < path.length; i5++) {
      n6 = path[i5];
      if (n6[TOUCH_ACTION]) {
        ta = n6[TOUCH_ACTION];
        break;
      }
    }
    return ta;
  }
  function trackDocument(stateObj, movefn, upfn) {
    stateObj.movefn = movefn;
    stateObj.upfn = upfn;
    document.addEventListener("mousemove", movefn);
    document.addEventListener("mouseup", upfn);
  }
  function untrackDocument(stateObj) {
    document.removeEventListener("mousemove", stateObj.movefn);
    document.removeEventListener("mouseup", stateObj.upfn);
    stateObj.movefn = null;
    stateObj.upfn = null;
  }
  var getComposedPath = window.ShadyDOM && window.ShadyDOM.noPatch ? window.ShadyDOM.composedPath : (event) => event.composedPath && event.composedPath() || [];
  var gestures = {};
  var recognizers = [];
  function deepTargetFind(x2, y2) {
    let node = document.elementFromPoint(x2, y2);
    let next = node;
    while (next && next.shadowRoot && !window.ShadyDOM) {
      const oldNext = next;
      next = next.shadowRoot.elementFromPoint(x2, y2);
      if (oldNext === next) {
        break;
      }
      if (next) {
        node = next;
      }
    }
    return node;
  }
  function _findOriginalTarget(ev) {
    const path = getComposedPath(ev);
    return path.length > 0 ? path[0] : ev.target;
  }
  function _handleNative(ev) {
    const type = ev.type;
    const node = ev.currentTarget;
    const gobj = node[GESTURE_KEY];
    if (!gobj) {
      return;
    }
    const gs = gobj[type];
    if (!gs) {
      return;
    }
    if (!ev[HANDLED_OBJ]) {
      ev[HANDLED_OBJ] = {};
      if (type.startsWith("touch")) {
        const t4 = ev.changedTouches[0];
        if (type === "touchstart") {
          if (ev.touches.length === 1) {
            POINTERSTATE.touch.id = t4.identifier;
          }
        }
        if (POINTERSTATE.touch.id !== t4.identifier) {
          return;
        }
        if (!HAS_NATIVE_TA) {
          if (type === "touchstart" || type === "touchmove") {
            _handleTouchAction(ev);
          }
        }
      }
    }
    const handled = ev[HANDLED_OBJ];
    if (handled.skip) {
      return;
    }
    for (let i5 = 0, r4; i5 < recognizers.length; i5++) {
      r4 = recognizers[i5];
      if (gs[r4.name] && !handled[r4.name]) {
        if (r4.flow && r4.flow.start.indexOf(ev.type) > -1 && r4.reset) {
          r4.reset();
        }
      }
    }
    for (let i5 = 0, r4; i5 < recognizers.length; i5++) {
      r4 = recognizers[i5];
      if (gs[r4.name] && !handled[r4.name]) {
        handled[r4.name] = true;
        r4[type](ev);
      }
    }
  }
  function _handleTouchAction(ev) {
    const t4 = ev.changedTouches[0];
    const type = ev.type;
    if (type === "touchstart") {
      POINTERSTATE.touch.x = t4.clientX;
      POINTERSTATE.touch.y = t4.clientY;
      POINTERSTATE.touch.scrollDecided = false;
    } else if (type === "touchmove") {
      if (POINTERSTATE.touch.scrollDecided) {
        return;
      }
      POINTERSTATE.touch.scrollDecided = true;
      const ta = firstTouchAction(ev);
      let shouldPrevent = false;
      const dx = Math.abs(POINTERSTATE.touch.x - t4.clientX);
      const dy = Math.abs(POINTERSTATE.touch.y - t4.clientY);
      if (!ev.cancelable) {
      } else if (ta === "none") {
        shouldPrevent = true;
      } else if (ta === "pan-x") {
        shouldPrevent = dy > dx;
      } else if (ta === "pan-y") {
        shouldPrevent = dx > dy;
      }
      if (shouldPrevent) {
        ev.preventDefault();
      } else {
        prevent("track");
      }
    }
  }
  function addListener(node, evType, handler) {
    if (gestures[evType]) {
      _add(node, evType, handler);
      return true;
    }
    return false;
  }
  function _add(node, evType, handler) {
    const recognizer = gestures[evType];
    const deps = recognizer.deps;
    const name = recognizer.name;
    let gobj = node[GESTURE_KEY];
    if (!gobj) {
      node[GESTURE_KEY] = gobj = {};
    }
    for (let i5 = 0, dep, gd; i5 < deps.length; i5++) {
      dep = deps[i5];
      if (IS_TOUCH_ONLY && isMouseEvent(dep) && dep !== "click") {
        continue;
      }
      gd = gobj[dep];
      if (!gd) {
        gobj[dep] = gd = { _count: 0 };
      }
      if (gd._count === 0) {
        node.addEventListener(dep, _handleNative, PASSIVE_TOUCH(dep));
      }
      gd[name] = (gd[name] || 0) + 1;
      gd._count = (gd._count || 0) + 1;
    }
    node.addEventListener(evType, handler);
    if (recognizer.touchAction) {
      setTouchAction(node, recognizer.touchAction);
    }
  }
  function register2(recog) {
    recognizers.push(recog);
    for (let i5 = 0; i5 < recog.emits.length; i5++) {
      gestures[recog.emits[i5]] = recog;
    }
  }
  function _findRecognizerByEvent(evName) {
    for (let i5 = 0, r4; i5 < recognizers.length; i5++) {
      r4 = recognizers[i5];
      for (let j = 0, n6; j < r4.emits.length; j++) {
        n6 = r4.emits[j];
        if (n6 === evName) {
          return r4;
        }
      }
    }
    return null;
  }
  function setTouchAction(node, value) {
    if (HAS_NATIVE_TA && node instanceof HTMLElement) {
      microTask2.run(() => {
        node.style.touchAction = value;
      });
    }
    node[TOUCH_ACTION] = value;
  }
  function _fire(target, type, detail) {
    const ev = new Event(type, { bubbles: true, cancelable: true, composed: true });
    ev.detail = detail;
    wrap2(target).dispatchEvent(ev);
    if (ev.defaultPrevented) {
      const preventer = detail.preventer || detail.sourceEvent;
      if (preventer && preventer.preventDefault) {
        preventer.preventDefault();
      }
    }
  }
  function prevent(evName) {
    const recognizer = _findRecognizerByEvent(evName);
    if (recognizer.info) {
      recognizer.info.prevent = true;
    }
  }
  register2({
    name: "downup",
    deps: ["mousedown", "touchstart", "touchend"],
    flow: {
      start: ["mousedown", "touchstart"],
      end: ["mouseup", "touchend"]
    },
    emits: ["down", "up"],
    info: {
      movefn: null,
      upfn: null
    },
    reset() {
      untrackDocument(this.info);
    },
    mousedown(e9) {
      if (!hasLeftMouseButton(e9)) {
        return;
      }
      const t4 = _findOriginalTarget(e9);
      const self = this;
      const movefn = (e10) => {
        if (!hasLeftMouseButton(e10)) {
          downupFire("up", t4, e10);
          untrackDocument(self.info);
        }
      };
      const upfn = (e10) => {
        if (hasLeftMouseButton(e10)) {
          downupFire("up", t4, e10);
        }
        untrackDocument(self.info);
      };
      trackDocument(this.info, movefn, upfn);
      downupFire("down", t4, e9);
    },
    touchstart(e9) {
      downupFire("down", _findOriginalTarget(e9), e9.changedTouches[0], e9);
    },
    touchend(e9) {
      downupFire("up", _findOriginalTarget(e9), e9.changedTouches[0], e9);
    }
  });
  function downupFire(type, target, event, preventer) {
    if (!target) {
      return;
    }
    _fire(target, type, {
      x: event.clientX,
      y: event.clientY,
      sourceEvent: event,
      preventer,
      prevent(e9) {
        return prevent(e9);
      }
    });
  }
  register2({
    name: "track",
    touchAction: "none",
    deps: ["mousedown", "touchstart", "touchmove", "touchend"],
    flow: {
      start: ["mousedown", "touchstart"],
      end: ["mouseup", "touchend"]
    },
    emits: ["track"],
    info: {
      x: 0,
      y: 0,
      state: "start",
      started: false,
      moves: [],
      addMove(move) {
        if (this.moves.length > TRACK_LENGTH) {
          this.moves.shift();
        }
        this.moves.push(move);
      },
      movefn: null,
      upfn: null,
      prevent: false
    },
    reset() {
      this.info.state = "start";
      this.info.started = false;
      this.info.moves = [];
      this.info.x = 0;
      this.info.y = 0;
      this.info.prevent = false;
      untrackDocument(this.info);
    },
    mousedown(e9) {
      if (!hasLeftMouseButton(e9)) {
        return;
      }
      const t4 = _findOriginalTarget(e9);
      const self = this;
      const movefn = (e10) => {
        const x2 = e10.clientX, y2 = e10.clientY;
        if (trackHasMovedEnough(self.info, x2, y2)) {
          self.info.state = self.info.started ? e10.type === "mouseup" ? "end" : "track" : "start";
          if (self.info.state === "start") {
            prevent("tap");
          }
          self.info.addMove({ x: x2, y: y2 });
          if (!hasLeftMouseButton(e10)) {
            self.info.state = "end";
            untrackDocument(self.info);
          }
          if (t4) {
            trackFire(self.info, t4, e10);
          }
          self.info.started = true;
        }
      };
      const upfn = (e10) => {
        if (self.info.started) {
          movefn(e10);
        }
        untrackDocument(self.info);
      };
      trackDocument(this.info, movefn, upfn);
      this.info.x = e9.clientX;
      this.info.y = e9.clientY;
    },
    touchstart(e9) {
      const ct = e9.changedTouches[0];
      this.info.x = ct.clientX;
      this.info.y = ct.clientY;
    },
    touchmove(e9) {
      const t4 = _findOriginalTarget(e9);
      const ct = e9.changedTouches[0];
      const x2 = ct.clientX, y2 = ct.clientY;
      if (trackHasMovedEnough(this.info, x2, y2)) {
        if (this.info.state === "start") {
          prevent("tap");
        }
        this.info.addMove({ x: x2, y: y2 });
        trackFire(this.info, t4, ct);
        this.info.state = "track";
        this.info.started = true;
      }
    },
    touchend(e9) {
      const t4 = _findOriginalTarget(e9);
      const ct = e9.changedTouches[0];
      if (this.info.started) {
        this.info.state = "end";
        this.info.addMove({ x: ct.clientX, y: ct.clientY });
        trackFire(this.info, t4, ct);
      }
    }
  });
  function trackHasMovedEnough(info, x2, y2) {
    if (info.prevent) {
      return false;
    }
    if (info.started) {
      return true;
    }
    const dx = Math.abs(info.x - x2);
    const dy = Math.abs(info.y - y2);
    return dx >= TRACK_DISTANCE || dy >= TRACK_DISTANCE;
  }
  function trackFire(info, target, touch) {
    if (!target) {
      return;
    }
    const secondlast = info.moves[info.moves.length - 2];
    const lastmove = info.moves[info.moves.length - 1];
    const dx = lastmove.x - info.x;
    const dy = lastmove.y - info.y;
    let ddx, ddy = 0;
    if (secondlast) {
      ddx = lastmove.x - secondlast.x;
      ddy = lastmove.y - secondlast.y;
    }
    _fire(target, "track", {
      state: info.state,
      x: touch.clientX,
      y: touch.clientY,
      dx,
      dy,
      ddx,
      ddy,
      sourceEvent: touch,
      hover() {
        return deepTargetFind(touch.clientX, touch.clientY);
      }
    });
  }
  register2({
    name: "tap",
    deps: ["mousedown", "click", "touchstart", "touchend"],
    flow: {
      start: ["mousedown", "touchstart"],
      end: ["click", "touchend"]
    },
    emits: ["tap"],
    info: {
      x: NaN,
      y: NaN,
      prevent: false
    },
    reset() {
      this.info.x = NaN;
      this.info.y = NaN;
      this.info.prevent = false;
    },
    mousedown(e9) {
      if (hasLeftMouseButton(e9)) {
        this.info.x = e9.clientX;
        this.info.y = e9.clientY;
      }
    },
    click(e9) {
      if (hasLeftMouseButton(e9)) {
        trackForward(this.info, e9);
      }
    },
    touchstart(e9) {
      const touch = e9.changedTouches[0];
      this.info.x = touch.clientX;
      this.info.y = touch.clientY;
    },
    touchend(e9) {
      trackForward(this.info, e9.changedTouches[0], e9);
    }
  });
  function trackForward(info, e9, preventer) {
    const dx = Math.abs(e9.clientX - info.x);
    const dy = Math.abs(e9.clientY - info.y);
    const t4 = _findOriginalTarget(preventer || e9);
    if (!t4 || canBeDisabled[t4.localName] && t4.hasAttribute("disabled")) {
      return;
    }
    if (isNaN(dx) || isNaN(dy) || dx <= TAP_DISTANCE && dy <= TAP_DISTANCE || isSyntheticClick(e9)) {
      if (!info.prevent) {
        _fire(t4, "tap", {
          x: e9.clientX,
          y: e9.clientY,
          sourceEvent: e9,
          preventer
        });
      }
    }
  }

  // node_modules/@vaadin/component-base/src/keyboard-mixin.js
  var KeyboardMixin = dedupingMixin(
    (superclass) => class KeyboardMixinClass extends superclass {
      ready() {
        super.ready();
        this.addEventListener("keydown", (event) => {
          this._onKeyDown(event);
        });
        this.addEventListener("keyup", (event) => {
          this._onKeyUp(event);
        });
      }
      _onKeyDown(event) {
        switch (event.key) {
          case "Enter":
            this._onEnter(event);
            break;
          case "Escape":
            this._onEscape(event);
            break;
          default:
            break;
        }
      }
      _onKeyUp(_event) {
      }
      _onEnter(_event) {
      }
      _onEscape(_event) {
      }
    }
  );

  // node_modules/@vaadin/component-base/src/active-mixin.js
  var ActiveMixin = (superclass) => class ActiveMixinClass extends DisabledMixin(KeyboardMixin(superclass)) {
    get _activeKeys() {
      return [" "];
    }
    ready() {
      super.ready();
      addListener(this, "down", (event) => {
        if (this._shouldSetActive(event)) {
          this._setActive(true);
        }
      });
      addListener(this, "up", () => {
        this._setActive(false);
      });
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this._setActive(false);
    }
    _shouldSetActive(_event) {
      return !this.disabled;
    }
    _onKeyDown(event) {
      super._onKeyDown(event);
      if (this._shouldSetActive(event) && this._activeKeys.includes(event.key)) {
        this._setActive(true);
        document.addEventListener(
          "keyup",
          (e9) => {
            if (this._activeKeys.includes(e9.key)) {
              this._setActive(false);
            }
          },
          { once: true }
        );
      }
    }
    _setActive(active) {
      this.toggleAttribute("active", active);
    }
  };

  // node_modules/@vaadin/component-base/src/controller-mixin.js
  var ControllerMixin = dedupingMixin(
    (superClass) => class ControllerMixinClass extends superClass {
      constructor() {
        super();
        this.__controllers = /* @__PURE__ */ new Set();
      }
      connectedCallback() {
        super.connectedCallback();
        this.__controllers.forEach((c3) => {
          if (c3.hostConnected) {
            c3.hostConnected();
          }
        });
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        this.__controllers.forEach((c3) => {
          if (c3.hostDisconnected) {
            c3.hostDisconnected();
          }
        });
      }
      addController(controller) {
        this.__controllers.add(controller);
        if (this.$ !== void 0 && this.isConnected && controller.hostConnected) {
          controller.hostConnected();
        }
      }
      removeController(controller) {
        this.__controllers.delete(controller);
      }
    }
  );

  // node_modules/@vaadin/vaadin-development-mode-detector/vaadin-development-mode-detector.js
  var DEV_MODE_CODE_REGEXP = /\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i;
  var FlowClients = window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients;
  function isMinified() {
    function test() {
      return true;
    }
    return uncommentAndRun(test);
  }
  function isDevelopmentMode() {
    try {
      if (isForcedDevelopmentMode()) {
        return true;
      }
      if (!isLocalhost()) {
        return false;
      }
      if (FlowClients) {
        return !isFlowProductionMode();
      }
      return !isMinified();
    } catch (e9) {
      return false;
    }
  }
  function isForcedDevelopmentMode() {
    return localStorage.getItem("vaadin.developmentmode.force");
  }
  function isLocalhost() {
    return ["localhost", "127.0.0.1"].indexOf(window.location.hostname) >= 0;
  }
  function isFlowProductionMode() {
    if (FlowClients) {
      const productionModeApps = Object.keys(FlowClients).map((key) => FlowClients[key]).filter((client) => client.productionMode);
      if (productionModeApps.length > 0) {
        return true;
      }
    }
    return false;
  }
  function uncommentAndRun(callback, args) {
    if (typeof callback !== "function") {
      return;
    }
    const match = DEV_MODE_CODE_REGEXP.exec(callback.toString());
    if (match) {
      try {
        callback = new Function(match[1]);
      } catch (e9) {
        console.log("vaadin-development-mode-detector: uncommentAndRun() failed", e9);
      }
    }
    return callback(args);
  }
  window["Vaadin"] = window["Vaadin"] || {};
  var runIfDevelopmentMode = function(callback, args) {
    if (window.Vaadin.developmentMode) {
      return uncommentAndRun(callback, args);
    }
  };
  if (window.Vaadin.developmentMode === void 0) {
    window.Vaadin.developmentMode = isDevelopmentMode();
  }

  // node_modules/@vaadin/vaadin-usage-statistics/vaadin-usage-statistics-collect.js
  function maybeGatherAndSendStats() {
  }
  var usageStatistics = function() {
    if (typeof runIfDevelopmentMode === "function") {
      return runIfDevelopmentMode(maybeGatherAndSendStats);
    }
  };

  // node_modules/@vaadin/component-base/src/debounce.js
  var Debouncer = class {
    static debounce(debouncer, asyncModule, callback) {
      if (debouncer instanceof Debouncer) {
        debouncer._cancelAsync();
      } else {
        debouncer = new Debouncer();
      }
      debouncer.setConfig(asyncModule, callback);
      return debouncer;
    }
    constructor() {
      this._asyncModule = null;
      this._callback = null;
      this._timer = null;
    }
    setConfig(asyncModule, callback) {
      this._asyncModule = asyncModule;
      this._callback = callback;
      this._timer = this._asyncModule.run(() => {
        this._timer = null;
        debouncerQueue.delete(this);
        this._callback();
      });
    }
    cancel() {
      if (this.isActive()) {
        this._cancelAsync();
        debouncerQueue.delete(this);
      }
    }
    _cancelAsync() {
      if (this.isActive()) {
        this._asyncModule.cancel(this._timer);
        this._timer = null;
      }
    }
    flush() {
      if (this.isActive()) {
        this.cancel();
        this._callback();
      }
    }
    isActive() {
      return this._timer != null;
    }
  };
  var debouncerQueue = /* @__PURE__ */ new Set();
  function enqueueDebouncer(debouncer) {
    debouncerQueue.add(debouncer);
  }
  function flushDebouncers() {
    const didFlush = Boolean(debouncerQueue.size);
    debouncerQueue.forEach((debouncer) => {
      try {
        debouncer.flush();
      } catch (e9) {
        setTimeout(() => {
          throw e9;
        });
      }
    });
    return didFlush;
  }
  var flush = () => {
    let debouncers;
    do {
      debouncers = flushDebouncers();
    } while (debouncers);
  };

  // node_modules/@vaadin/component-base/src/dir-helper.js
  var DirHelper = class {
    static detectScrollType() {
      const dummy = document.createElement("div");
      dummy.textContent = "ABCD";
      dummy.dir = "rtl";
      dummy.style.fontSize = "14px";
      dummy.style.width = "4px";
      dummy.style.height = "1px";
      dummy.style.position = "absolute";
      dummy.style.top = "-1000px";
      dummy.style.overflow = "scroll";
      document.body.appendChild(dummy);
      let cachedType = "reverse";
      if (dummy.scrollLeft > 0) {
        cachedType = "default";
      } else {
        dummy.scrollLeft = 2;
        if (dummy.scrollLeft < 2) {
          cachedType = "negative";
        }
      }
      document.body.removeChild(dummy);
      return cachedType;
    }
    static getNormalizedScrollLeft(scrollType2, direction, element) {
      const { scrollLeft } = element;
      if (direction !== "rtl" || !scrollType2) {
        return scrollLeft;
      }
      switch (scrollType2) {
        case "negative":
          return element.scrollWidth - element.clientWidth + scrollLeft;
        case "reverse":
          return element.scrollWidth - element.clientWidth - scrollLeft;
        default:
          return scrollLeft;
      }
    }
    static setNormalizedScrollLeft(scrollType2, direction, element, scrollLeft) {
      if (direction !== "rtl" || !scrollType2) {
        element.scrollLeft = scrollLeft;
        return;
      }
      switch (scrollType2) {
        case "negative":
          element.scrollLeft = element.clientWidth - element.scrollWidth + scrollLeft;
          break;
        case "reverse":
          element.scrollLeft = element.scrollWidth - element.clientWidth - scrollLeft;
          break;
        default:
          element.scrollLeft = scrollLeft;
          break;
      }
    }
  };

  // node_modules/@vaadin/component-base/src/dir-mixin.js
  var directionSubscribers = [];
  function directionUpdater() {
    const documentDir = getDocumentDir();
    directionSubscribers.forEach((element) => {
      alignDirs(element, documentDir);
    });
  }
  var scrollType;
  var directionObserver = new MutationObserver(directionUpdater);
  directionObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["dir"] });
  function alignDirs(element, documentDir, elementDir = element.getAttribute("dir")) {
    if (documentDir) {
      element.setAttribute("dir", documentDir);
    } else if (elementDir != null) {
      element.removeAttribute("dir");
    }
  }
  function getDocumentDir() {
    return document.documentElement.getAttribute("dir");
  }
  var DirMixin = (superClass) => class VaadinDirMixin extends superClass {
    static get properties() {
      return {
        dir: {
          type: String,
          value: "",
          reflectToAttribute: true,
          converter: {
            fromAttribute: (attr) => {
              return !attr ? "" : attr;
            },
            toAttribute: (prop) => {
              return prop === "" ? null : prop;
            }
          }
        }
      };
    }
    static finalize() {
      super.finalize();
      if (!scrollType) {
        scrollType = DirHelper.detectScrollType();
      }
    }
    connectedCallback() {
      super.connectedCallback();
      if (!this.hasAttribute("dir") || this.__restoreSubscription) {
        this.__subscribe();
        alignDirs(this, getDocumentDir(), null);
      }
    }
    attributeChangedCallback(name, oldValue, newValue) {
      super.attributeChangedCallback(name, oldValue, newValue);
      if (name !== "dir") {
        return;
      }
      const documentDir = getDocumentDir();
      const newValueEqlDocDir = newValue === documentDir && directionSubscribers.indexOf(this) === -1;
      const newValueEmptied = !newValue && oldValue && directionSubscribers.indexOf(this) === -1;
      const newDiffValue = newValue !== documentDir && oldValue === documentDir;
      if (newValueEqlDocDir || newValueEmptied) {
        this.__subscribe();
        alignDirs(this, documentDir, newValue);
      } else if (newDiffValue) {
        this.__unsubscribe();
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.__restoreSubscription = directionSubscribers.includes(this);
      this.__unsubscribe();
    }
    _valueToNodeAttribute(node, value, attribute) {
      if (attribute === "dir" && value === "" && !node.hasAttribute("dir")) {
        return;
      }
      super._valueToNodeAttribute(node, value, attribute);
    }
    _attributeToProperty(attribute, value, type) {
      if (attribute === "dir" && !value) {
        this.dir = "";
      } else {
        super._attributeToProperty(attribute, value, type);
      }
    }
    __subscribe() {
      if (!directionSubscribers.includes(this)) {
        directionSubscribers.push(this);
      }
    }
    __unsubscribe() {
      if (directionSubscribers.includes(this)) {
        directionSubscribers.splice(directionSubscribers.indexOf(this), 1);
      }
    }
    __getNormalizedScrollLeft(element) {
      return DirHelper.getNormalizedScrollLeft(scrollType, this.getAttribute("dir") || "ltr", element);
    }
    __setNormalizedScrollLeft(element, scrollLeft) {
      return DirHelper.setNormalizedScrollLeft(scrollType, this.getAttribute("dir") || "ltr", element, scrollLeft);
    }
  };

  // node_modules/@vaadin/component-base/src/element-mixin.js
  setCancelSyntheticClickEvents(false);
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.registrations = window.Vaadin.registrations || [];
  window.Vaadin.developmentModeCallback = window.Vaadin.developmentModeCallback || {};
  window.Vaadin.developmentModeCallback["vaadin-usage-statistics"] = function() {
    usageStatistics();
  };
  var statsJob;
  var registered = /* @__PURE__ */ new Set();
  var ElementMixin2 = (superClass) => class VaadinElementMixin extends DirMixin(superClass) {
    static get version() {
      return "23.2.7";
    }
    static finalize() {
      super.finalize();
      const { is } = this;
      if (is && !registered.has(is)) {
        window.Vaadin.registrations.push(this);
        registered.add(is);
        if (window.Vaadin.developmentModeCallback) {
          statsJob = Debouncer.debounce(statsJob, idlePeriod, () => {
            window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]();
          });
          enqueueDebouncer(statsJob);
        }
      }
    }
    constructor() {
      super();
      if (document.doctype === null) {
        console.warn(
          'Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.'
        );
      }
    }
  };

  // node_modules/@vaadin/component-base/src/focus-utils.js
  var keyboardActive = false;
  window.addEventListener(
    "keydown",
    () => {
      keyboardActive = true;
    },
    { capture: true }
  );
  window.addEventListener(
    "mousedown",
    () => {
      keyboardActive = false;
    },
    { capture: true }
  );
  function isKeyboardActive() {
    return keyboardActive;
  }
  function isElementFocused(element) {
    return element.getRootNode().activeElement === element;
  }

  // node_modules/@vaadin/field-base/src/delegate-state-mixin.js
  var DelegateStateMixin = dedupingMixin(
    (superclass) => class DelegateStateMixinClass extends superclass {
      static get properties() {
        return {
          stateTarget: {
            type: Object,
            observer: "_stateTargetChanged"
          }
        };
      }
      static get delegateAttrs() {
        return [];
      }
      static get delegateProps() {
        return [];
      }
      ready() {
        super.ready();
        this._createDelegateAttrsObserver();
        this._createDelegatePropsObserver();
      }
      _stateTargetChanged(target) {
        if (target) {
          this._ensureAttrsDelegated();
          this._ensurePropsDelegated();
        }
      }
      _createDelegateAttrsObserver() {
        this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`);
      }
      _createDelegatePropsObserver() {
        this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`);
      }
      _ensureAttrsDelegated() {
        this.constructor.delegateAttrs.forEach((name) => {
          this._delegateAttribute(name, this[name]);
        });
      }
      _ensurePropsDelegated() {
        this.constructor.delegateProps.forEach((name) => {
          this._delegateProperty(name, this[name]);
        });
      }
      _delegateAttrsChanged(...values) {
        this.constructor.delegateAttrs.forEach((name, index) => {
          this._delegateAttribute(name, values[index]);
        });
      }
      _delegatePropsChanged(...values) {
        this.constructor.delegateProps.forEach((name, index) => {
          this._delegateProperty(name, values[index]);
        });
      }
      _delegateAttribute(name, value) {
        if (!this.stateTarget) {
          return;
        }
        if (name === "invalid") {
          this._delegateAttribute("aria-invalid", value ? "true" : false);
        }
        if (typeof value === "boolean") {
          this.stateTarget.toggleAttribute(name, value);
        } else if (value) {
          this.stateTarget.setAttribute(name, value);
        } else {
          this.stateTarget.removeAttribute(name);
        }
      }
      _delegateProperty(name, value) {
        if (!this.stateTarget) {
          return;
        }
        this.stateTarget[name] = value;
      }
    }
  );

  // node_modules/@vaadin/field-base/src/input-mixin.js
  var InputMixin = dedupingMixin(
    (superclass) => class InputMixinClass extends superclass {
      static get properties() {
        return {
          inputElement: {
            type: Object,
            readOnly: true,
            observer: "_inputElementChanged"
          },
          type: {
            type: String,
            readOnly: true
          },
          value: {
            type: String,
            value: "",
            observer: "_valueChanged",
            notify: true
          },
          _hasInputValue: {
            type: Boolean,
            value: false,
            observer: "_hasInputValueChanged"
          }
        };
      }
      constructor() {
        super();
        this._boundOnInput = this.__onInput.bind(this);
        this._boundOnChange = this._onChange.bind(this);
      }
      clear() {
        this.value = "";
      }
      _addInputListeners(input) {
        input.addEventListener("input", this._boundOnInput);
        input.addEventListener("change", this._boundOnChange);
      }
      _removeInputListeners(input) {
        input.removeEventListener("input", this._boundOnInput);
        input.removeEventListener("change", this._boundOnChange);
      }
      _forwardInputValue(value) {
        if (!this.inputElement) {
          return;
        }
        if (value != null) {
          this.inputElement.value = value;
        } else {
          this.inputElement.value = "";
        }
      }
      _inputElementChanged(input, oldInput) {
        if (input) {
          this._addInputListeners(input);
        } else if (oldInput) {
          this._removeInputListeners(oldInput);
        }
      }
      _hasInputValueChanged(hasValue, oldHasValue) {
        if (hasValue || oldHasValue) {
          this.dispatchEvent(new CustomEvent("has-input-value-changed"));
        }
      }
      __onInput(event) {
        const target = event.composedPath()[0];
        this._hasInputValue = target.value.length > 0;
        this._onInput(event);
      }
      _onInput(event) {
        const target = event.composedPath()[0];
        this.__userInput = event.isTrusted;
        this.value = target.value;
        this.__userInput = false;
      }
      _onChange(_event) {
      }
      _toggleHasValue(hasValue) {
        this.toggleAttribute("has-value", hasValue);
      }
      _valueChanged(newVal, oldVal) {
        this._toggleHasValue(this._hasValue);
        if (newVal === "" && oldVal === void 0) {
          return;
        }
        if (this.__userInput) {
          return;
        }
        this._forwardInputValue(newVal);
      }
      get _hasValue() {
        return this.value != null && this.value !== "";
      }
    }
  );

  // node_modules/@vaadin/field-base/src/checked-mixin.js
  var CheckedMixin = dedupingMixin(
    (superclass) => class CheckedMixinClass extends DelegateStateMixin(DisabledMixin(InputMixin(superclass))) {
      static get properties() {
        return {
          checked: {
            type: Boolean,
            value: false,
            notify: true,
            reflectToAttribute: true
          }
        };
      }
      static get delegateProps() {
        return [...super.delegateProps, "checked"];
      }
      _onChange(event) {
        const input = event.target;
        this._toggleChecked(input.checked);
        if (!isElementFocused(input)) {
          input.focus();
        }
      }
      _toggleChecked(checked) {
        this.checked = checked;
      }
    }
  );

  // node_modules/@vaadin/component-base/src/focus-mixin.js
  var FocusMixin = dedupingMixin(
    (superclass) => class FocusMixinClass extends superclass {
      get _keyboardActive() {
        return isKeyboardActive();
      }
      ready() {
        this.addEventListener("focusin", (e9) => {
          if (this._shouldSetFocus(e9)) {
            this._setFocused(true);
          }
        });
        this.addEventListener("focusout", (e9) => {
          if (this._shouldRemoveFocus(e9)) {
            this._setFocused(false);
          }
        });
        super.ready();
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        if (this.hasAttribute("focused")) {
          this._setFocused(false);
        }
      }
      _setFocused(focused) {
        this.toggleAttribute("focused", focused);
        this.toggleAttribute("focus-ring", focused && this._keyboardActive);
      }
      _shouldSetFocus(_event) {
        return true;
      }
      _shouldRemoveFocus(_event) {
        return true;
      }
    }
  );

  // node_modules/@vaadin/component-base/src/tabindex-mixin.js
  var TabindexMixin = (superclass) => class TabindexMixinClass extends DisabledMixin(superclass) {
    static get properties() {
      return {
        tabindex: {
          type: Number,
          reflectToAttribute: true,
          observer: "_tabindexChanged"
        },
        _lastTabIndex: {
          type: Number
        }
      };
    }
    _disabledChanged(disabled, oldDisabled) {
      super._disabledChanged(disabled, oldDisabled);
      if (disabled) {
        if (this.tabindex !== void 0) {
          this._lastTabIndex = this.tabindex;
        }
        this.tabindex = -1;
      } else if (oldDisabled) {
        this.tabindex = this._lastTabIndex;
      }
    }
    _tabindexChanged(tabindex) {
      if (this.disabled && tabindex !== -1) {
        this._lastTabIndex = tabindex;
        this.tabindex = -1;
      }
    }
  };

  // node_modules/@vaadin/field-base/src/delegate-focus-mixin.js
  var DelegateFocusMixin = dedupingMixin(
    (superclass) => class DelegateFocusMixinClass extends FocusMixin(TabindexMixin(superclass)) {
      static get properties() {
        return {
          autofocus: {
            type: Boolean
          },
          focusElement: {
            type: Object,
            readOnly: true,
            observer: "_focusElementChanged"
          },
          _lastTabIndex: {
            value: 0
          }
        };
      }
      constructor() {
        super();
        this._boundOnBlur = this._onBlur.bind(this);
        this._boundOnFocus = this._onFocus.bind(this);
      }
      ready() {
        super.ready();
        if (this.autofocus && !this.disabled) {
          requestAnimationFrame(() => {
            this.focus();
            this.setAttribute("focus-ring", "");
          });
        }
      }
      focus() {
        if (!this.focusElement || this.disabled) {
          return;
        }
        this.focusElement.focus();
        this._setFocused(true);
      }
      blur() {
        if (!this.focusElement) {
          return;
        }
        this.focusElement.blur();
        this._setFocused(false);
      }
      click() {
        if (this.focusElement && !this.disabled) {
          this.focusElement.click();
        }
      }
      _focusElementChanged(element, oldElement) {
        if (element) {
          element.disabled = this.disabled;
          this._addFocusListeners(element);
          this.__forwardTabIndex(this.tabindex);
        } else if (oldElement) {
          this._removeFocusListeners(oldElement);
        }
      }
      _addFocusListeners(element) {
        element.addEventListener("blur", this._boundOnBlur);
        element.addEventListener("focus", this._boundOnFocus);
      }
      _removeFocusListeners(element) {
        element.removeEventListener("blur", this._boundOnBlur);
        element.removeEventListener("focus", this._boundOnFocus);
      }
      _onFocus(event) {
        event.stopPropagation();
        this.dispatchEvent(new Event("focus"));
      }
      _onBlur(event) {
        event.stopPropagation();
        this.dispatchEvent(new Event("blur"));
      }
      _shouldSetFocus(event) {
        return event.target === this.focusElement;
      }
      _disabledChanged(disabled, oldDisabled) {
        super._disabledChanged(disabled, oldDisabled);
        if (this.focusElement) {
          this.focusElement.disabled = disabled;
        }
        if (disabled) {
          this.blur();
        }
      }
      _tabindexChanged(tabindex) {
        this.__forwardTabIndex(tabindex);
      }
      __forwardTabIndex(tabindex) {
        if (tabindex !== void 0 && this.focusElement) {
          this.focusElement.tabIndex = tabindex;
          if (tabindex !== -1) {
            this.tabindex = void 0;
          }
        }
        if (this.disabled && tabindex) {
          if (tabindex !== -1) {
            this._lastTabIndex = tabindex;
          }
          this.tabindex = void 0;
        }
      }
    }
  );

  // node_modules/@polymer/polymer/lib/utils/array-splice.js
  function newSplice(index, removed, addedCount) {
    return {
      index,
      removed,
      addedCount
    };
  }
  var EDIT_LEAVE = 0;
  var EDIT_UPDATE = 1;
  var EDIT_ADD = 2;
  var EDIT_DELETE = 3;
  function calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd) {
    let rowCount = oldEnd - oldStart + 1;
    let columnCount = currentEnd - currentStart + 1;
    let distances = new Array(rowCount);
    for (let i5 = 0; i5 < rowCount; i5++) {
      distances[i5] = new Array(columnCount);
      distances[i5][0] = i5;
    }
    for (let j = 0; j < columnCount; j++)
      distances[0][j] = j;
    for (let i5 = 1; i5 < rowCount; i5++) {
      for (let j = 1; j < columnCount; j++) {
        if (equals(current[currentStart + j - 1], old[oldStart + i5 - 1]))
          distances[i5][j] = distances[i5 - 1][j - 1];
        else {
          let north = distances[i5 - 1][j] + 1;
          let west = distances[i5][j - 1] + 1;
          distances[i5][j] = north < west ? north : west;
        }
      }
    }
    return distances;
  }
  function spliceOperationsFromEditDistances(distances) {
    let i5 = distances.length - 1;
    let j = distances[0].length - 1;
    let current = distances[i5][j];
    let edits = [];
    while (i5 > 0 || j > 0) {
      if (i5 == 0) {
        edits.push(EDIT_ADD);
        j--;
        continue;
      }
      if (j == 0) {
        edits.push(EDIT_DELETE);
        i5--;
        continue;
      }
      let northWest = distances[i5 - 1][j - 1];
      let west = distances[i5 - 1][j];
      let north = distances[i5][j - 1];
      let min;
      if (west < north)
        min = west < northWest ? west : northWest;
      else
        min = north < northWest ? north : northWest;
      if (min == northWest) {
        if (northWest == current) {
          edits.push(EDIT_LEAVE);
        } else {
          edits.push(EDIT_UPDATE);
          current = northWest;
        }
        i5--;
        j--;
      } else if (min == west) {
        edits.push(EDIT_DELETE);
        i5--;
        current = west;
      } else {
        edits.push(EDIT_ADD);
        j--;
        current = north;
      }
    }
    edits.reverse();
    return edits;
  }
  function calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd) {
    let prefixCount = 0;
    let suffixCount = 0;
    let splice;
    let minLength = Math.min(currentEnd - currentStart, oldEnd - oldStart);
    if (currentStart == 0 && oldStart == 0)
      prefixCount = sharedPrefix(current, old, minLength);
    if (currentEnd == current.length && oldEnd == old.length)
      suffixCount = sharedSuffix(current, old, minLength - prefixCount);
    currentStart += prefixCount;
    oldStart += prefixCount;
    currentEnd -= suffixCount;
    oldEnd -= suffixCount;
    if (currentEnd - currentStart == 0 && oldEnd - oldStart == 0)
      return [];
    if (currentStart == currentEnd) {
      splice = newSplice(currentStart, [], 0);
      while (oldStart < oldEnd)
        splice.removed.push(old[oldStart++]);
      return [splice];
    } else if (oldStart == oldEnd)
      return [newSplice(currentStart, [], currentEnd - currentStart)];
    let ops = spliceOperationsFromEditDistances(
      calcEditDistances(
        current,
        currentStart,
        currentEnd,
        old,
        oldStart,
        oldEnd
      )
    );
    splice = void 0;
    let splices = [];
    let index = currentStart;
    let oldIndex = oldStart;
    for (let i5 = 0; i5 < ops.length; i5++) {
      switch (ops[i5]) {
        case EDIT_LEAVE:
          if (splice) {
            splices.push(splice);
            splice = void 0;
          }
          index++;
          oldIndex++;
          break;
        case EDIT_UPDATE:
          if (!splice)
            splice = newSplice(index, [], 0);
          splice.addedCount++;
          index++;
          splice.removed.push(old[oldIndex]);
          oldIndex++;
          break;
        case EDIT_ADD:
          if (!splice)
            splice = newSplice(index, [], 0);
          splice.addedCount++;
          index++;
          break;
        case EDIT_DELETE:
          if (!splice)
            splice = newSplice(index, [], 0);
          splice.removed.push(old[oldIndex]);
          oldIndex++;
          break;
      }
    }
    if (splice) {
      splices.push(splice);
    }
    return splices;
  }
  function sharedPrefix(current, old, searchLength) {
    for (let i5 = 0; i5 < searchLength; i5++)
      if (!equals(current[i5], old[i5]))
        return i5;
    return searchLength;
  }
  function sharedSuffix(current, old, searchLength) {
    let index1 = current.length;
    let index2 = old.length;
    let count = 0;
    while (count < searchLength && equals(current[--index1], old[--index2]))
      count++;
    return count;
  }
  function calculateSplices(current, previous) {
    return calcSplices(
      current,
      0,
      current.length,
      previous,
      0,
      previous.length
    );
  }
  function equals(currentValue, previousValue) {
    return currentValue === previousValue;
  }

  // node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js
  function isSlot(node) {
    return node.localName === "slot";
  }
  var FlattenedNodesObserver = class {
    static getFlattenedNodes(node) {
      const wrapped = wrap(node);
      if (isSlot(node)) {
        node = node;
        return wrapped.assignedNodes({ flatten: true });
      } else {
        return Array.from(wrapped.childNodes).map((node2) => {
          if (isSlot(node2)) {
            node2 = node2;
            return wrap(node2).assignedNodes({ flatten: true });
          } else {
            return [node2];
          }
        }).reduce((a3, b2) => a3.concat(b2), []);
      }
    }
    constructor(target, callback) {
      this._shadyChildrenObserver = null;
      this._nativeChildrenObserver = null;
      this._connected = false;
      this._target = target;
      this.callback = callback;
      this._effectiveNodes = [];
      this._observer = null;
      this._scheduled = false;
      this._boundSchedule = () => {
        this._schedule();
      };
      this.connect();
      this._schedule();
    }
    connect() {
      if (isSlot(this._target)) {
        this._listenSlots([this._target]);
      } else if (wrap(this._target).children) {
        this._listenSlots(
          wrap(this._target).children
        );
        if (window.ShadyDOM) {
          this._shadyChildrenObserver = window.ShadyDOM.observeChildren(this._target, (mutations) => {
            this._processMutations(mutations);
          });
        } else {
          this._nativeChildrenObserver = new MutationObserver((mutations) => {
            this._processMutations(mutations);
          });
          this._nativeChildrenObserver.observe(this._target, { childList: true });
        }
      }
      this._connected = true;
    }
    disconnect() {
      if (isSlot(this._target)) {
        this._unlistenSlots([this._target]);
      } else if (wrap(this._target).children) {
        this._unlistenSlots(
          wrap(this._target).children
        );
        if (window.ShadyDOM && this._shadyChildrenObserver) {
          window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver);
          this._shadyChildrenObserver = null;
        } else if (this._nativeChildrenObserver) {
          this._nativeChildrenObserver.disconnect();
          this._nativeChildrenObserver = null;
        }
      }
      this._connected = false;
    }
    _schedule() {
      if (!this._scheduled) {
        this._scheduled = true;
        microTask.run(() => this.flush());
      }
    }
    _processMutations(mutations) {
      this._processSlotMutations(mutations);
      this.flush();
    }
    _processSlotMutations(mutations) {
      if (mutations) {
        for (let i5 = 0; i5 < mutations.length; i5++) {
          let mutation = mutations[i5];
          if (mutation.addedNodes) {
            this._listenSlots(mutation.addedNodes);
          }
          if (mutation.removedNodes) {
            this._unlistenSlots(mutation.removedNodes);
          }
        }
      }
    }
    flush() {
      if (!this._connected) {
        return false;
      }
      if (window.ShadyDOM) {
        ShadyDOM.flush();
      }
      if (this._nativeChildrenObserver) {
        this._processSlotMutations(this._nativeChildrenObserver.takeRecords());
      } else if (this._shadyChildrenObserver) {
        this._processSlotMutations(this._shadyChildrenObserver.takeRecords());
      }
      this._scheduled = false;
      let info = {
        target: this._target,
        addedNodes: [],
        removedNodes: []
      };
      let newNodes = this.constructor.getFlattenedNodes(this._target);
      let splices = calculateSplices(
        newNodes,
        this._effectiveNodes
      );
      for (let i5 = 0, s5; i5 < splices.length && (s5 = splices[i5]); i5++) {
        for (let j = 0, n6; j < s5.removed.length && (n6 = s5.removed[j]); j++) {
          info.removedNodes.push(n6);
        }
      }
      for (let i5 = 0, s5; i5 < splices.length && (s5 = splices[i5]); i5++) {
        for (let j = s5.index; j < s5.index + s5.addedCount; j++) {
          info.addedNodes.push(newNodes[j]);
        }
      }
      this._effectiveNodes = newNodes;
      let didFlush = false;
      if (info.addedNodes.length || info.removedNodes.length) {
        didFlush = true;
        this.callback.call(this._target, info);
      }
      return didFlush;
    }
    _listenSlots(nodeList) {
      for (let i5 = 0; i5 < nodeList.length; i5++) {
        let n6 = nodeList[i5];
        if (isSlot(n6)) {
          n6.addEventListener("slotchange", this._boundSchedule);
        }
      }
    }
    _unlistenSlots(nodeList) {
      for (let i5 = 0; i5 < nodeList.length; i5++) {
        let n6 = nodeList[i5];
        if (isSlot(n6)) {
          n6.removeEventListener("slotchange", this._boundSchedule);
        }
      }
    }
  };

  // node_modules/@vaadin/component-base/src/unique-id-utils.js
  var uniqueId = 0;
  function generateUniqueId() {
    return uniqueId++;
  }

  // node_modules/@vaadin/component-base/src/slot-controller.js
  var SlotController = class extends EventTarget {
    static generateId(slotName, host) {
      const prefix = slotName || "default";
      return `${prefix}-${host.localName}-${generateUniqueId()}`;
    }
    constructor(host, slotName, slotFactory, slotInitializer, useUniqueId) {
      super();
      this.host = host;
      this.slotName = slotName;
      this.slotFactory = slotFactory;
      this.slotInitializer = slotInitializer;
      if (useUniqueId) {
        this.defaultId = SlotController.generateId(slotName, host);
      }
    }
    hostConnected() {
      if (!this.initialized) {
        let node = this.getSlotChild();
        if (!node) {
          node = this.attachDefaultNode();
        } else {
          this.node = node;
          this.initCustomNode(node);
        }
        this.initNode(node);
        this.observe();
        this.initialized = true;
      }
    }
    attachDefaultNode() {
      const { host, slotName, slotFactory } = this;
      let node = this.defaultNode;
      if (!node && slotFactory) {
        node = slotFactory(host);
        if (node instanceof Element) {
          if (slotName !== "") {
            node.setAttribute("slot", slotName);
          }
          this.node = node;
          this.defaultNode = node;
        }
      }
      if (node) {
        host.appendChild(node);
      }
      return node;
    }
    getSlotChild() {
      const { slotName } = this;
      return Array.from(this.host.childNodes).find((node) => {
        return node.nodeType === Node.ELEMENT_NODE && node.slot === slotName || node.nodeType === Node.TEXT_NODE && node.textContent.trim() && slotName === "";
      });
    }
    initNode(node) {
      const { slotInitializer } = this;
      if (slotInitializer) {
        slotInitializer(this.host, node);
      }
    }
    initCustomNode(_node) {
    }
    teardownNode(_node) {
    }
    observe() {
      const { slotName } = this;
      const selector = slotName === "" ? "slot:not([name])" : `slot[name=${slotName}]`;
      const slot = this.host.shadowRoot.querySelector(selector);
      this.__slotObserver = new FlattenedNodesObserver(slot, (info) => {
        const current = this.node;
        const newNode = info.addedNodes.find((node) => node !== current);
        if (info.removedNodes.length) {
          info.removedNodes.forEach((node) => {
            this.teardownNode(node);
          });
        }
        if (newNode) {
          if (current && current.isConnected) {
            this.host.removeChild(current);
          }
          this.node = newNode;
          if (newNode !== this.defaultNode) {
            this.initCustomNode(newNode);
            this.initNode(newNode);
          }
        }
      });
    }
  };

  // node_modules/@vaadin/field-base/src/input-controller.js
  var InputController = class extends SlotController {
    constructor(host, callback) {
      super(
        host,
        "input",
        () => document.createElement("input"),
        (host2, node) => {
          if (host2.value) {
            node.setAttribute("value", host2.value);
          }
          if (host2.type) {
            node.setAttribute("type", host2.type);
          }
          node.id = this.defaultId;
          if (typeof callback === "function") {
            callback(node);
          }
        },
        true
      );
    }
  };

  // node_modules/@vaadin/field-base/src/label-controller.js
  var LabelController = class extends SlotController {
    constructor(host) {
      super(
        host,
        "label",
        () => document.createElement("label"),
        (_host, node) => {
          this.__updateLabelId(node);
          this.__updateDefaultLabel(this.label);
          this.__observeLabel(node);
        },
        true
      );
    }
    get labelId() {
      return this.node.id;
    }
    initCustomNode(labelNode) {
      this.__updateLabelId(labelNode);
      const hasLabel = this.__hasLabel(labelNode);
      this.__toggleHasLabel(hasLabel);
    }
    teardownNode(node) {
      if (this.__labelObserver) {
        this.__labelObserver.disconnect();
      }
      let labelNode = this.getSlotChild();
      if (!labelNode && node !== this.defaultNode) {
        labelNode = this.attachDefaultNode();
        this.initNode(labelNode);
      }
      const hasLabel = this.__hasLabel(labelNode);
      this.__toggleHasLabel(hasLabel);
    }
    setLabel(label) {
      this.label = label;
      this.__updateDefaultLabel(label);
    }
    __hasLabel(labelNode) {
      if (!labelNode) {
        return false;
      }
      return labelNode.children.length > 0 || this.__isNotEmpty(labelNode.textContent);
    }
    __isNotEmpty(label) {
      return Boolean(label && label.trim() !== "");
    }
    __observeLabel(labelNode) {
      this.__labelObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          const target = mutation.target;
          const isLabelMutation = target === this.node;
          if (mutation.type === "attributes") {
            if (isLabelMutation && target.id !== this.defaultId) {
              this.__updateLabelId(target);
            }
          } else if (isLabelMutation || target.parentElement === this.node) {
            const hasLabel = this.__hasLabel(this.node);
            this.__toggleHasLabel(hasLabel);
          }
        });
      });
      this.__labelObserver.observe(labelNode, {
        attributes: true,
        attributeFilter: ["id"],
        childList: true,
        subtree: true,
        characterData: true
      });
    }
    __toggleHasLabel(hasLabel) {
      this.host.toggleAttribute("has-label", hasLabel);
      this.dispatchEvent(
        new CustomEvent("label-changed", {
          detail: {
            hasLabel,
            node: this.node
          }
        })
      );
    }
    __updateDefaultLabel(label) {
      if (this.defaultNode) {
        this.defaultNode.textContent = label;
        if (this.defaultNode === this.node) {
          const hasLabel = this.__isNotEmpty(label);
          this.__toggleHasLabel(hasLabel);
        }
      }
    }
    __updateLabelId(labelNode) {
      if (!labelNode.id) {
        labelNode.id = this.defaultId;
      }
    }
  };

  // node_modules/@vaadin/field-base/src/label-mixin.js
  var LabelMixin = dedupingMixin(
    (superclass) => class LabelMixinClass extends ControllerMixin(superclass) {
      static get properties() {
        return {
          label: {
            type: String,
            observer: "_labelChanged"
          }
        };
      }
      get _labelId() {
        return this._labelController.labelId;
      }
      get _labelNode() {
        return this._labelController.node;
      }
      constructor() {
        super();
        this._labelController = new LabelController(this);
      }
      ready() {
        super.ready();
        this.addController(this._labelController);
      }
      _labelChanged(label) {
        this._labelController.setLabel(label);
      }
    }
  );

  // node_modules/@vaadin/field-base/src/labelled-input-controller.js
  var LabelledInputController = class {
    constructor(input, labelController) {
      this.input = input;
      this.__preventDuplicateLabelClick = this.__preventDuplicateLabelClick.bind(this);
      labelController.addEventListener("label-changed", (event) => {
        this.__initLabel(event.detail.node);
      });
      this.__initLabel(labelController.node);
    }
    __initLabel(label) {
      if (label) {
        label.addEventListener("click", this.__preventDuplicateLabelClick);
        if (this.input) {
          label.setAttribute("for", this.input.id);
        }
      }
    }
    __preventDuplicateLabelClick() {
      const inputClickHandler = (e9) => {
        e9.stopImmediatePropagation();
        this.input.removeEventListener("click", inputClickHandler);
      };
      this.input.addEventListener("click", inputClickHandler);
    }
  };

  // node_modules/@vaadin/field-base/src/slot-target-controller.js
  var SlotTargetController = class {
    constructor(sourceSlot, targetFactory, callback) {
      this.sourceSlot = sourceSlot;
      this.targetFactory = targetFactory;
      this.copyCallback = callback;
      if (sourceSlot) {
        sourceSlot.addEventListener("slotchange", () => {
          if (this.__copying) {
            this.__copying = false;
          } else {
            this.__checkAndCopyNodesToSlotTarget();
          }
        });
      }
    }
    hostConnected() {
      this.__sourceSlotObserver = new MutationObserver(() => this.__checkAndCopyNodesToSlotTarget());
      if (!this.__copying) {
        this.__checkAndCopyNodesToSlotTarget();
      }
    }
    __checkAndCopyNodesToSlotTarget() {
      this.__sourceSlotObserver.disconnect();
      const slotTarget = this.targetFactory();
      if (!slotTarget) {
        return;
      }
      if (this.__slotTargetClones) {
        this.__slotTargetClones.forEach((node) => {
          if (node.parentElement === slotTarget) {
            slotTarget.removeChild(node);
          }
        });
        delete this.__slotTargetClones;
      }
      const nodes = this.sourceSlot.assignedNodes({ flatten: true }).filter((node) => !(node.nodeType === Node.TEXT_NODE && node.textContent.trim() === ""));
      if (nodes.length > 0) {
        slotTarget.innerHTML = "";
        this.__copying = true;
        this.__copyNodesToSlotTarget(nodes, slotTarget);
      }
    }
    __copyNodesToSlotTarget(nodes, slotTarget) {
      this.__slotTargetClones = this.__slotTargetClones || [];
      nodes.forEach((node) => {
        const clone = node.cloneNode(true);
        this.__slotTargetClones.push(clone);
        slotTarget.appendChild(clone);
        this.__sourceSlotObserver.observe(node, {
          attributes: true,
          childList: true,
          subtree: true,
          characterData: true
        });
      });
      if (typeof this.copyCallback === "function") {
        this.copyCallback(nodes);
      }
    }
  };

  // node_modules/@vaadin/checkbox/src/vaadin-checkbox.js
  var Checkbox = class extends LabelMixin(
    CheckedMixin(DelegateFocusMixin(ActiveMixin(ElementMixin2(ThemableMixin(ControllerMixin(PolymerElement))))))
  ) {
    static get is() {
      return "vaadin-checkbox";
    }
    static get template() {
      return html`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([disabled]) {
          -webkit-tap-highlight-color: transparent;
        }

        .vaadin-checkbox-container {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: baseline;
        }

        .vaadin-checkbox-wrapper {
          position: relative;
          height: 100%;
        }

        /* visually hidden */
        ::slotted(input) {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: inherit;
          margin: 0;
        }
      </style>
      <div class="vaadin-checkbox-container">
        <div class="vaadin-checkbox-wrapper">
          <div part="checkbox"></div>
          <slot name="input"></slot>
        </div>

        <slot name="label"></slot>

        <div style="display: none !important">
          <slot id="noop"></slot>
        </div>
      </div>
    `;
    }
    static get properties() {
      return {
        indeterminate: {
          type: Boolean,
          notify: true,
          value: false,
          reflectToAttribute: true
        },
        name: {
          type: String,
          value: ""
        }
      };
    }
    static get delegateProps() {
      return [...super.delegateProps, "indeterminate"];
    }
    static get delegateAttrs() {
      return [...super.delegateAttrs, "name"];
    }
    constructor() {
      super();
      this._setType("checkbox");
      this.value = "on";
    }
    ready() {
      super.ready();
      this.addController(
        new InputController(this, (input) => {
          this._setInputElement(input);
          this._setFocusElement(input);
          this.stateTarget = input;
          this.ariaTarget = input;
        })
      );
      this.addController(new LabelledInputController(this.inputElement, this._labelController));
      this.addController(
        new SlotTargetController(
          this.$.noop,
          () => this._labelController.node,
          () => this.__warnDeprecated()
        )
      );
    }
    __warnDeprecated() {
      console.warn(
        `WARNING: Since Vaadin 22, placing the label as a direct child of a <vaadin-checkbox> is deprecated.
Please use <label slot="label"> wrapper or the label property instead.`
      );
    }
    _shouldSetActive(event) {
      if (event.target.localName === "a") {
        return false;
      }
      return super._shouldSetActive(event);
    }
    _toggleChecked(checked) {
      if (this.indeterminate) {
        this.indeterminate = false;
      }
      super._toggleChecked(checked);
    }
  };
  customElements.define(Checkbox.is, Checkbox);

  // node_modules/@vaadin/grid/theme/lumo/vaadin-grid-styles.js
  registerStyles(
    "vaadin-grid",
    i`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-s);
      color: var(--lumo-body-text-color);
      background-color: var(--lumo-base-color);
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      /* For internal use only */
      --_lumo-grid-border-color: var(--lumo-contrast-20pct);
      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
      --_lumo-grid-border-width: 1px;
      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
    }

    /* No (outer) border */

    :host(:not([theme~='no-border'])) {
      border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
    }

    :host([disabled]) {
      opacity: 0.7;
    }

    /* Cell styles */

    [part~='cell'] {
      min-height: var(--lumo-size-m);
      background-color: var(--lumo-base-color);
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      cursor: default;
      padding: var(--lumo-space-xs) var(--lumo-space-m);
    }

    /* Apply row borders by default and introduce the "no-row-borders" variant */
    :host(:not([theme~='no-row-borders'])) [part~='cell']:not([part~='details-cell']) {
      border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Hide first body row top border */
    :host(:not([theme~='no-row-borders'])) [part='row'][first] [part~='cell']:not([part~='details-cell']) {
      border-top: 0;
      min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
    }

    /* Focus-ring */

    [part~='row'] {
      position: relative;
    }

    [part~='row']:focus,
    [part~='cell']:focus {
      outline: none;
    }

    :host([navigating]) [part~='row']:focus::before,
    :host([navigating]) [part~='cell']:focus::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    :host([navigating]) [part~='row']:focus::before {
      transform: translateX(calc(-1 * var(--_grid-horizontal-scroll-position)));
      z-index: 3;
    }

    /* Drag and Drop styles */
    :host([dragover])::after {
      content: '';
      position: absolute;
      z-index: 100;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] {
      z-index: 100 !important;
    }

    [part~='row'][dragover] [part~='cell'] {
      overflow: visible;
    }

    [part~='row'][dragover] [part~='cell']::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: calc(var(--_lumo-grid-border-width) + 2px);
      pointer-events: none;
      background: var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] [part~='cell'][last-frozen]::after {
      right: -1px;
    }

    :host([theme~='no-row-borders']) [dragover] [part~='cell']::after {
      height: 2px;
    }

    [part~='row'][dragover='below'] [part~='cell']::after {
      top: 100%;
      bottom: auto;
      margin-top: -1px;
    }

    :host([all-rows-visible]) [part~='row'][last][dragover='below'] [part~='cell']::after {
      height: 1px;
    }

    [part~='row'][dragover='above'] [part~='cell']::after {
      top: auto;
      bottom: 100%;
      margin-bottom: -1px;
    }

    [part~='row'][details-opened][dragover='below'] [part~='cell']:not([part~='details-cell'])::after,
    [part~='row'][details-opened][dragover='above'] [part~='details-cell']::after {
      display: none;
    }

    [part~='row'][dragover][dragover='on-top'] [part~='cell']::after {
      height: 100%;
      opacity: 0.5;
    }

    [part~='row'][dragstart] [part~='cell'] {
      border: none !important;
      box-shadow: none !important;
    }

    [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    #scroller [part~='row'][dragstart]:not([dragstart=''])::after {
      display: block;
      position: absolute;
      left: var(--_grid-drag-start-x);
      top: var(--_grid-drag-start-y);
      z-index: 100;
      content: attr(dragstart);
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: calc(var(--lumo-space-xs) * 0.8);
      color: var(--lumo-error-contrast-color);
      background-color: var(--lumo-error-color);
      border-radius: var(--lumo-border-radius-m);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      font-weight: 500;
      text-transform: initial;
      letter-spacing: initial;
      min-width: calc(var(--lumo-size-s) * 0.7);
      text-align: center;
    }

    /* Headers and footers */

    [part~='header-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='reorder-ghost'] {
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
    }

    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content) {
      font-weight: 400;
    }

    [part='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-xl);
    }

    /* Header borders */

    /* Hide first header row top border */
    :host(:not([theme~='no-row-borders'])) [part='row']:first-child [part~='header-cell'] {
      border-top: 0;
    }

    [part='row']:last-child [part~='header-cell'] {
      border-bottom: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='top']) [part='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-border-color);
    }

    /* Footer borders */

    [part='row']:first-child [part~='footer-cell'] {
      border-top: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='bottom']) [part='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-border-color);
    }

    /* Column reordering */

    :host([reordering]) [part~='cell'] {
      background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='allowed'] {
      background: var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='dragging'] {
      background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
    }

    [part~='reorder-ghost'] {
      opacity: 0.85;
      box-shadow: var(--lumo-box-shadow-s);
      /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
      padding: var(--lumo-space-s) var(--lumo-space-m) !important;
    }

    /* Column resizing */

    [part='resize-handle'] {
      width: 3px;
      background-color: var(--lumo-primary-color-50pct);
      opacity: 0;
      transition: opacity 0.2s;
    }

    :host(:not([reordering])) *:not([column-resizing]) [part~='cell']:hover [part='resize-handle'],
    [part='resize-handle']:active {
      opacity: 1;
      transition-delay: 0.15s;
    }

    /* Column borders */

    :host([theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Frozen columns */

    [last-frozen] {
      border-right: var(--_lumo-grid-border-width) solid transparent;
      overflow: hidden;
    }

    :host([overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }

    [first-frozen-to-end] {
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    /* Row stripes */

    :host([theme~='row-stripes']) [part~='row']:not([odd]) [part~='body-cell'],
    :host([theme~='row-stripes']) [part~='row']:not([odd]) [part~='details-cell'] {
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      background-repeat: repeat-x;
    }

    /* Selected row */

    /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
    :host(:not([reordering])) [part~='row'][selected] {
      z-index: 1;
    }

    :host(:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
      background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
      background-repeat: repeat;
    }

    /* Cover the border of an unselected row */
    :host(:not([theme~='no-row-borders'])) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
      box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
    }

    /* Compact */

    :host([theme~='compact']) [part='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='compact']) [part~='cell'] {
      min-height: var(--lumo-size-s);
    }

    :host([theme~='compact']) [part='row'][first] [part~='cell']:not([part~='details-cell']) {
      min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
    }

    :host([theme~='compact']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      padding: var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Wrap cell contents */

    :host([theme~='wrap-cell-content']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      white-space: normal;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    :host([dir='rtl'][theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    :host([dir='rtl']) [last-frozen] {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl']) [first-frozen-to-end] {
      border-left: none;
      border-right: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl'][overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    :host([dir='rtl'][overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }
  `,
    { moduleId: "lumo-grid" }
  );

  // node_modules/@vaadin/component-base/src/templates.js
  function processTemplates(component) {
    if (window.Vaadin && window.Vaadin.templateRendererCallback) {
      window.Vaadin.templateRendererCallback(component);
      return;
    }
    if (component.querySelector("template")) {
      console.warn(
        `WARNING: <template> inside <${component.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`
      );
    }
  }

  // node_modules/@vaadin/grid/src/vaadin-grid-column.js
  var ColumnBaseMixin = (superClass) => class ColumnBaseMixin extends superClass {
    static get properties() {
      return {
        resizable: {
          type: Boolean,
          value() {
            if (this.localName === "vaadin-grid-column-group") {
              return;
            }
            const parent = this.parentNode;
            if (parent && parent.localName === "vaadin-grid-column-group") {
              return parent.resizable || false;
            }
            return false;
          }
        },
        frozen: {
          type: Boolean,
          value: false
        },
        frozenToEnd: {
          type: Boolean,
          value: false
        },
        hidden: {
          type: Boolean,
          value: false
        },
        header: {
          type: String
        },
        textAlign: {
          type: String
        },
        _lastFrozen: {
          type: Boolean,
          value: false
        },
        _firstFrozenToEnd: {
          type: Boolean,
          value: false
        },
        _order: Number,
        _reorderStatus: Boolean,
        _emptyCells: Array,
        _headerCell: Object,
        _footerCell: Object,
        _grid: Object,
        __initialized: {
          type: Boolean,
          value: true
        },
        headerRenderer: Function,
        _headerRenderer: {
          type: Function,
          computed: "_computeHeaderRenderer(headerRenderer, header, __initialized)"
        },
        footerRenderer: Function,
        _footerRenderer: {
          type: Function,
          computed: "_computeFooterRenderer(footerRenderer, __initialized)"
        },
        __gridColumnElement: {
          type: Boolean,
          value: true
        }
      };
    }
    static get observers() {
      return [
        "_widthChanged(width, _headerCell, _footerCell, _cells.*)",
        "_frozenChanged(frozen, _headerCell, _footerCell, _cells.*)",
        "_frozenToEndChanged(frozenToEnd, _headerCell, _footerCell, _cells.*)",
        "_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*)",
        "_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell)",
        "_orderChanged(_order, _headerCell, _footerCell, _cells.*)",
        "_lastFrozenChanged(_lastFrozen)",
        "_firstFrozenToEndChanged(_firstFrozenToEnd)",
        "_onRendererOrBindingChanged(_renderer, _cells, _cells.*, path)",
        "_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header)",
        "_onFooterRendererOrBindingChanged(_footerRenderer, _footerCell)",
        "_resizableChanged(resizable, _headerCell)",
        "_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*)",
        "_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)"
      ];
    }
    connectedCallback() {
      super.connectedCallback();
      requestAnimationFrame(() => {
        if (!this._grid) {
          return;
        }
        this._allCells.forEach((cell) => {
          if (!cell._content.parentNode) {
            this._grid.appendChild(cell._content);
          }
        });
      });
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      requestAnimationFrame(() => {
        if (this._grid) {
          return;
        }
        this._allCells.forEach((cell) => {
          if (cell._content.parentNode) {
            cell._content.parentNode.removeChild(cell._content);
          }
        });
      });
      this._gridValue = void 0;
    }
    ready() {
      super.ready();
      processTemplates(this);
    }
    _findHostGrid() {
      let el = this;
      while (el && !/^vaadin.*grid(-pro)?$/.test(el.localName)) {
        el = el.assignedSlot ? el.assignedSlot.parentNode : el.parentNode;
      }
      return el || void 0;
    }
    get _grid() {
      if (!this._gridValue) {
        this._gridValue = this._findHostGrid();
      }
      return this._gridValue;
    }
    get _allCells() {
      return [].concat(this._cells || []).concat(this._emptyCells || []).concat(this._headerCell).concat(this._footerCell).filter((cell) => cell);
    }
    _renderHeaderAndFooter() {
      this._renderHeaderCellContent(this._headerRenderer, this._headerCell);
      this._renderFooterCellContent(this._footerRenderer, this._footerCell);
    }
    _flexGrowChanged(flexGrow) {
      if (this.parentElement && this.parentElement._columnPropChanged) {
        this.parentElement._columnPropChanged("flexGrow");
      }
      this._allCells.forEach((cell) => {
        cell.style.flexGrow = flexGrow;
      });
    }
    _orderChanged(order) {
      this._allCells.forEach((cell) => {
        cell.style.order = order;
      });
    }
    _widthChanged(width) {
      if (this.parentElement && this.parentElement._columnPropChanged) {
        this.parentElement._columnPropChanged("width");
      }
      this._allCells.forEach((cell) => {
        cell.style.width = width;
      });
    }
    _frozenChanged(frozen) {
      if (this.parentElement && this.parentElement._columnPropChanged) {
        this.parentElement._columnPropChanged("frozen", frozen);
      }
      this._allCells.forEach((cell) => cell.toggleAttribute("frozen", frozen));
      if (this._grid && this._grid._frozenCellsChanged) {
        this._grid._frozenCellsChanged();
      }
    }
    _frozenToEndChanged(frozenToEnd) {
      if (this.parentElement && this.parentElement._columnPropChanged) {
        this.parentElement._columnPropChanged("frozenToEnd", frozenToEnd);
      }
      this._allCells.forEach((cell) => {
        if (this._grid && cell.parentElement === this._grid.$.sizer) {
          return;
        }
        cell.toggleAttribute("frozen-to-end", frozenToEnd);
      });
      if (this._grid && this._grid._frozenCellsChanged) {
        this._grid._frozenCellsChanged();
      }
    }
    _lastFrozenChanged(lastFrozen) {
      this._allCells.forEach((cell) => cell.toggleAttribute("last-frozen", lastFrozen));
      if (this.parentElement && this.parentElement._columnPropChanged) {
        this.parentElement._lastFrozen = lastFrozen;
      }
    }
    _firstFrozenToEndChanged(firstFrozenToEnd) {
      this._allCells.forEach((cell) => {
        if (this._grid && cell.parentElement === this._grid.$.sizer) {
          return;
        }
        cell.toggleAttribute("first-frozen-to-end", firstFrozenToEnd);
      });
      if (this.parentElement && this.parentElement._columnPropChanged) {
        this.parentElement._firstFrozenToEnd = firstFrozenToEnd;
      }
    }
    _generateHeader(path) {
      return path.substr(path.lastIndexOf(".") + 1).replace(/([A-Z])/g, "-$1").toLowerCase().replace(/-/g, " ").replace(/^./, (match) => match.toUpperCase());
    }
    _reorderStatusChanged(reorderStatus) {
      this._allCells.forEach((cell) => cell.setAttribute("reorder-status", reorderStatus));
    }
    _resizableChanged(resizable, headerCell) {
      if (resizable === void 0 || headerCell === void 0) {
        return;
      }
      if (headerCell) {
        [headerCell].concat(this._emptyCells).forEach((cell) => {
          if (cell) {
            const existingHandle = cell.querySelector('[part~="resize-handle"]');
            if (existingHandle) {
              cell.removeChild(existingHandle);
            }
            if (resizable) {
              const handle = document.createElement("div");
              handle.setAttribute("part", "resize-handle");
              cell.appendChild(handle);
            }
          }
        });
      }
    }
    _textAlignChanged(textAlign) {
      if (textAlign === void 0) {
        return;
      }
      if (["start", "end", "center"].indexOf(textAlign) === -1) {
        console.warn('textAlign can only be set as "start", "end" or "center"');
        return;
      }
      let textAlignFallback;
      if (getComputedStyle(this._grid).direction === "ltr") {
        if (textAlign === "start") {
          textAlignFallback = "left";
        } else if (textAlign === "end") {
          textAlignFallback = "right";
        }
      } else if (textAlign === "start") {
        textAlignFallback = "right";
      } else if (textAlign === "end") {
        textAlignFallback = "left";
      }
      this._allCells.forEach((cell) => {
        cell._content.style.textAlign = textAlign;
        if (getComputedStyle(cell._content).textAlign !== textAlign) {
          cell._content.style.textAlign = textAlignFallback;
        }
      });
    }
    _hiddenChanged(hidden) {
      if (this.parentElement && this.parentElement._columnPropChanged) {
        this.parentElement._columnPropChanged("hidden", hidden);
      }
      if (!!hidden !== !!this._previousHidden && this._grid) {
        if (hidden === true) {
          this._allCells.forEach((cell) => {
            if (cell._content.parentNode) {
              cell._content.parentNode.removeChild(cell._content);
            }
          });
        }
        this._grid._debouncerHiddenChanged = Debouncer.debounce(
          this._grid._debouncerHiddenChanged,
          animationFrame,
          () => {
            if (this._grid && this._grid._renderColumnTree) {
              this._grid._renderColumnTree(this._grid._columnTree);
            }
          }
        );
        if (this._grid._updateFrozenColumn) {
          this._grid._updateFrozenColumn();
        }
        if (this._grid._resetKeyboardNavigation) {
          this._grid._resetKeyboardNavigation();
        }
      }
      this._previousHidden = hidden;
    }
    _runRenderer(renderer, cell, model) {
      const args = [cell._content, this];
      if (model && model.item) {
        args.push(model);
      }
      renderer.apply(this, args);
    }
    __renderCellsContent(renderer, cells) {
      if (this.hidden || !this._grid) {
        return;
      }
      cells.forEach((cell) => {
        if (!cell.parentElement) {
          return;
        }
        const model = this._grid.__getRowModel(cell.parentElement);
        if (!renderer) {
          return;
        }
        if (cell._renderer !== renderer) {
          this._clearCellContent(cell);
        }
        cell._renderer = renderer;
        if (model.item || renderer === this._headerRenderer || renderer === this._footerRenderer) {
          this._runRenderer(renderer, cell, model);
        }
      });
    }
    _clearCellContent(cell) {
      cell._content.innerHTML = "";
      delete cell._content._$litPart$;
    }
    _renderHeaderCellContent(headerRenderer, headerCell) {
      if (!headerCell || !headerRenderer) {
        return;
      }
      this.__renderCellsContent(headerRenderer, [headerCell]);
      if (this._grid) {
        this._grid.__updateHeaderFooterRowVisibility(headerCell.parentElement);
      }
    }
    _onHeaderRendererOrBindingChanged(headerRenderer, headerCell, ..._bindings) {
      this._renderHeaderCellContent(headerRenderer, headerCell);
    }
    _renderBodyCellsContent(renderer, cells) {
      if (!cells || !renderer) {
        return;
      }
      this.__renderCellsContent(renderer, cells);
    }
    _onRendererOrBindingChanged(renderer, cells, ..._bindings) {
      this._renderBodyCellsContent(renderer, cells);
    }
    _renderFooterCellContent(footerRenderer, footerCell) {
      if (!footerCell || !footerRenderer) {
        return;
      }
      this.__renderCellsContent(footerRenderer, [footerCell]);
      if (this._grid) {
        this._grid.__updateHeaderFooterRowVisibility(footerCell.parentElement);
      }
    }
    _onFooterRendererOrBindingChanged(footerRenderer, footerCell) {
      this._renderFooterCellContent(footerRenderer, footerCell);
    }
    __setTextContent(node, textContent) {
      if (node.textContent !== textContent) {
        node.textContent = textContent;
      }
    }
    __textHeaderRenderer() {
      this.__setTextContent(this._headerCell._content, this.header);
    }
    _defaultHeaderRenderer() {
      if (!this.path) {
        return;
      }
      this.__setTextContent(this._headerCell._content, this._generateHeader(this.path));
    }
    _defaultRenderer(root2, _owner, { item }) {
      if (!this.path) {
        return;
      }
      this.__setTextContent(root2, this.get(this.path, item));
    }
    _defaultFooterRenderer() {
    }
    _computeHeaderRenderer(headerRenderer, header) {
      if (headerRenderer) {
        return headerRenderer;
      }
      if (header !== void 0 && header !== null) {
        return this.__textHeaderRenderer;
      }
      return this._defaultHeaderRenderer;
    }
    _computeRenderer(renderer) {
      if (renderer) {
        return renderer;
      }
      return this._defaultRenderer;
    }
    _computeFooterRenderer(footerRenderer) {
      if (footerRenderer) {
        return footerRenderer;
      }
      return this._defaultFooterRenderer;
    }
  };
  var GridColumn = class extends ColumnBaseMixin(DirMixin(PolymerElement)) {
    static get is() {
      return "vaadin-grid-column";
    }
    static get properties() {
      return {
        width: {
          type: String,
          value: "100px"
        },
        flexGrow: {
          type: Number,
          value: 1
        },
        renderer: Function,
        _renderer: {
          type: Function,
          computed: "_computeRenderer(renderer, __initialized)"
        },
        path: {
          type: String
        },
        autoWidth: {
          type: Boolean,
          value: false
        },
        _cells: Array
      };
    }
  };
  customElements.define(GridColumn.is, GridColumn);

  // node_modules/@vaadin/grid/src/vaadin-grid-styles.js
  registerStyles(
    "vaadin-grid",
    i`
    @keyframes vaadin-grid-appear {
      to {
        opacity: 1;
      }
    }

    :host {
      display: block;
      animation: 1ms vaadin-grid-appear;
      height: 400px;
      flex: 1 1 auto;
      align-self: stretch;
      position: relative;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host([disabled]) {
      pointer-events: none;
    }

    #scroller {
      display: block;
      transform: translateY(0);
      width: auto;
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    :host([all-rows-visible]) {
      height: auto;
      align-self: flex-start;
      flex-grow: 0;
      width: 100%;
    }

    :host([all-rows-visible]) #scroller {
      width: 100%;
      height: 100%;
      position: relative;
    }

    :host([all-rows-visible]) #items {
      min-height: 1px;
    }

    #table {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow: auto;
      position: relative;
      outline: none;
      /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
      z-index: 0;
    }

    #header,
    #footer {
      display: block;
      position: -webkit-sticky;
      position: sticky;
      left: 0;
      overflow: visible;
      width: 100%;
      z-index: 1;
    }

    #header {
      top: 0;
    }

    th {
      text-align: inherit;
    }

    /* Safari doesn't work with "inherit" */
    [safari] th {
      text-align: initial;
    }

    #footer {
      bottom: 0;
    }

    #items {
      flex-grow: 1;
      flex-shrink: 0;
      display: block;
      position: -webkit-sticky;
      position: sticky;
      width: 100%;
      left: 0;
      overflow: visible;
    }

    [part~='row'] {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
    }

    [part~='row'][loading] [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
      opacity: 0;
    }

    #items [part~='row'] {
      position: absolute;
    }

    #items [part~='row']:empty {
      height: 100%;
    }

    [part~='cell']:not([part~='details-cell']) {
      flex-shrink: 0;
      flex-grow: 1;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      position: relative;
      align-items: center;
      padding: 0;
      white-space: nowrap;
    }

    [part~='details-cell'] {
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [hidden] {
      display: none !important;
    }

    [frozen],
    [frozen-to-end] {
      z-index: 2;
      will-change: transform;
    }

    [no-scrollbars][safari] #table,
    [no-scrollbars][firefox] #table {
      overflow: hidden;
    }

    /* Reordering styles */
    :host([reordering]) [part~='cell'] ::slotted(vaadin-grid-cell-content),
    :host([reordering]) [part~='resize-handle'],
    #scroller[no-content-pointer-events] [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      pointer-events: none;
    }

    [part~='reorder-ghost'] {
      visibility: hidden;
      position: fixed;
      pointer-events: none;
      opacity: 0.5;

      /* Prevent overflowing the grid in Firefox */
      top: 0;
      left: 0;
    }

    :host([reordering]) {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Resizing styles */
    [part~='resize-handle'] {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      cursor: col-resize;
      z-index: 1;
    }

    [part~='resize-handle']::before {
      position: absolute;
      content: '';
      height: 100%;
      width: 35px;
      transform: translateX(-50%);
    }

    [last-column] [part~='resize-handle']::before,
    [last-frozen] [part~='resize-handle']::before {
      width: 18px;
      transform: none;
      right: 0;
    }

    [frozen-to-end] [part~='resize-handle'] {
      left: 0;
      right: auto;
    }

    [frozen-to-end] [part~='resize-handle']::before {
      left: 0;
      right: auto;
    }

    [first-frozen-to-end] [part~='resize-handle']::before {
      width: 18px;
      transform: none;
    }

    /* Hide resize handle if scrolled to end */
    :host(:not([overflow~='end'])) [first-frozen-to-end] [part~='resize-handle'] {
      display: none;
    }

    #scroller[column-resizing] {
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Sizer styles */
    #sizer {
      display: flex;
      position: absolute;
      visibility: hidden;
    }

    #sizer [part~='details-cell'] {
      display: none !important;
    }

    #sizer [part~='cell'][hidden] {
      display: none !important;
    }

    #sizer [part~='cell'] {
      display: block;
      flex-shrink: 0;
      line-height: 0;
      height: 0 !important;
      min-height: 0 !important;
      max-height: 0 !important;
      padding: 0 !important;
      border: none !important;
    }

    #sizer [part~='cell']::before {
      content: '-';
    }

    #sizer [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: none !important;
    }

    /* RTL specific styles */

    :host([dir='rtl']) #items,
    :host([dir='rtl']) #header,
    :host([dir='rtl']) #footer {
      left: auto;
    }

    :host([dir='rtl']) [part~='reorder-ghost'] {
      left: auto;
      right: 0;
    }

    :host([dir='rtl']) [part~='resize-handle'] {
      left: 0;
      right: auto;
    }

    :host([dir='rtl']) [part~='resize-handle']::before {
      transform: translateX(50%);
    }

    :host([dir='rtl']) [last-column] [part~='resize-handle']::before,
    :host([dir='rtl']) [last-frozen] [part~='resize-handle']::before {
      left: 0;
      right: auto;
    }

    :host([dir='rtl']) [frozen-to-end] [part~='resize-handle'] {
      right: 0;
      left: auto;
    }

    :host([dir='rtl']) [frozen-to-end] [part~='resize-handle']::before {
      right: 0;
      left: auto;
    }
  `,
    { moduleId: "vaadin-grid-styles" }
  );

  // node_modules/@polymer/polymer/lib/utils/render-status.js
  var scheduled = false;
  var beforeRenderQueue = [];
  var afterRenderQueue = [];
  function schedule() {
    scheduled = true;
    requestAnimationFrame(function() {
      scheduled = false;
      flushQueue(beforeRenderQueue);
      setTimeout(function() {
        runQueue(afterRenderQueue);
      });
    });
  }
  function flushQueue(queue) {
    while (queue.length) {
      callMethod(queue.shift());
    }
  }
  function runQueue(queue) {
    for (let i5 = 0, l5 = queue.length; i5 < l5; i5++) {
      callMethod(queue.shift());
    }
  }
  function callMethod(info) {
    const context = info[0];
    const callback = info[1];
    const args = info[2];
    try {
      callback.apply(context, args);
    } catch (e9) {
      setTimeout(() => {
        throw e9;
      });
    }
  }
  function beforeNextRender(context, callback, args) {
    if (!scheduled) {
      schedule();
    }
    beforeRenderQueue.push([context, callback, args]);
  }

  // node_modules/@vaadin/component-base/src/browser-utils.js
  var testUserAgent = (regexp) => regexp.test(navigator.userAgent);
  var testPlatform = (regexp) => regexp.test(navigator.platform);
  var testVendor = (regexp) => regexp.test(navigator.vendor);
  var isAndroid = testUserAgent(/Android/);
  var isChrome = testUserAgent(/Chrome/) && testVendor(/Google Inc/);
  var isFirefox = testUserAgent(/Firefox/);
  var isIPad = testPlatform(/^iPad/) || testPlatform(/^Mac/) && navigator.maxTouchPoints > 1;
  var isIPhone = testPlatform(/^iPhone/);
  var isIOS = isIPhone || isIPad;
  var isSafari = testUserAgent(/^((?!chrome|android).)*safari/i);
  var isTouch = (() => {
    try {
      document.createEvent("TouchEvent");
      return true;
    } catch (e9) {
      return false;
    }
  })();

  // node_modules/@vaadin/component-base/src/iron-list-core.js
  var IOS = navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/);
  var IOS_TOUCH_SCROLLING = IOS && IOS[1] >= 8;
  var DEFAULT_PHYSICAL_COUNT = 3;
  var ironList = {
    _ratio: 0.5,
    _scrollerPaddingTop: 0,
    _scrollPosition: 0,
    _physicalSize: 0,
    _physicalAverage: 0,
    _physicalAverageCount: 0,
    _physicalTop: 0,
    _virtualCount: 0,
    _estScrollHeight: 0,
    _scrollHeight: 0,
    _viewportHeight: 0,
    _viewportWidth: 0,
    _physicalItems: null,
    _physicalSizes: null,
    _firstVisibleIndexVal: null,
    _lastVisibleIndexVal: null,
    _maxPages: 2,
    _templateCost: 0,
    get _physicalBottom() {
      return this._physicalTop + this._physicalSize;
    },
    get _scrollBottom() {
      return this._scrollPosition + this._viewportHeight;
    },
    get _virtualEnd() {
      return this._virtualStart + this._physicalCount - 1;
    },
    get _hiddenContentSize() {
      return this._physicalSize - this._viewportHeight;
    },
    get _maxScrollTop() {
      return this._estScrollHeight - this._viewportHeight + this._scrollOffset;
    },
    get _maxVirtualStart() {
      const virtualCount = this._virtualCount;
      return Math.max(0, virtualCount - this._physicalCount);
    },
    get _virtualStart() {
      return this._virtualStartVal || 0;
    },
    set _virtualStart(val) {
      val = this._clamp(val, 0, this._maxVirtualStart);
      this._virtualStartVal = val;
    },
    get _physicalStart() {
      return this._physicalStartVal || 0;
    },
    set _physicalStart(val) {
      val %= this._physicalCount;
      if (val < 0) {
        val = this._physicalCount + val;
      }
      this._physicalStartVal = val;
    },
    get _physicalEnd() {
      return (this._physicalStart + this._physicalCount - 1) % this._physicalCount;
    },
    get _physicalCount() {
      return this._physicalCountVal || 0;
    },
    set _physicalCount(val) {
      this._physicalCountVal = val;
    },
    get _optPhysicalSize() {
      return this._viewportHeight === 0 ? Infinity : this._viewportHeight * this._maxPages;
    },
    get _isVisible() {
      return Boolean(this.offsetWidth || this.offsetHeight);
    },
    get firstVisibleIndex() {
      let idx = this._firstVisibleIndexVal;
      if (idx == null) {
        let physicalOffset = this._physicalTop + this._scrollOffset;
        idx = this._iterateItems((pidx, vidx) => {
          physicalOffset += this._getPhysicalSizeIncrement(pidx);
          if (physicalOffset > this._scrollPosition) {
            return vidx;
          }
        }) || 0;
        this._firstVisibleIndexVal = idx;
      }
      return idx;
    },
    get lastVisibleIndex() {
      let idx = this._lastVisibleIndexVal;
      if (idx == null) {
        let physicalOffset = this._physicalTop + this._scrollOffset;
        this._iterateItems((pidx, vidx) => {
          if (physicalOffset < this._scrollBottom) {
            idx = vidx;
          }
          physicalOffset += this._getPhysicalSizeIncrement(pidx);
        });
        this._lastVisibleIndexVal = idx;
      }
      return idx;
    },
    get _scrollOffset() {
      return this._scrollerPaddingTop + this.scrollOffset;
    },
    _scrollHandler() {
      const scrollTop = Math.max(0, Math.min(this._maxScrollTop, this._scrollTop));
      let delta = scrollTop - this._scrollPosition;
      const isScrollingDown = delta >= 0;
      this._scrollPosition = scrollTop;
      this._firstVisibleIndexVal = null;
      this._lastVisibleIndexVal = null;
      if (Math.abs(delta) > this._physicalSize && this._physicalSize > 0) {
        delta -= this._scrollOffset;
        const idxAdjustment = Math.round(delta / this._physicalAverage);
        this._virtualStart += idxAdjustment;
        this._physicalStart += idxAdjustment;
        this._physicalTop = Math.min(Math.floor(this._virtualStart) * this._physicalAverage, this._scrollPosition);
        this._update();
      } else if (this._physicalCount > 0) {
        const reusables = this._getReusables(isScrollingDown);
        if (isScrollingDown) {
          this._physicalTop = reusables.physicalTop;
          this._virtualStart += reusables.indexes.length;
          this._physicalStart += reusables.indexes.length;
        } else {
          this._virtualStart -= reusables.indexes.length;
          this._physicalStart -= reusables.indexes.length;
        }
        this._update(reusables.indexes, isScrollingDown ? null : reusables.indexes);
        this._debounce("_increasePoolIfNeeded", this._increasePoolIfNeeded.bind(this, 0), microTask2);
      }
    },
    _getReusables(fromTop) {
      let ith, offsetContent, physicalItemHeight;
      const idxs = [];
      const protectedOffsetContent = this._hiddenContentSize * this._ratio;
      const virtualStart = this._virtualStart;
      const virtualEnd = this._virtualEnd;
      const physicalCount = this._physicalCount;
      let top = this._physicalTop + this._scrollOffset;
      const bottom = this._physicalBottom + this._scrollOffset;
      const scrollTop = this._scrollPosition;
      const scrollBottom = this._scrollBottom;
      if (fromTop) {
        ith = this._physicalStart;
        offsetContent = scrollTop - top;
      } else {
        ith = this._physicalEnd;
        offsetContent = bottom - scrollBottom;
      }
      while (true) {
        physicalItemHeight = this._getPhysicalSizeIncrement(ith);
        offsetContent -= physicalItemHeight;
        if (idxs.length >= physicalCount || offsetContent <= protectedOffsetContent) {
          break;
        }
        if (fromTop) {
          if (virtualEnd + idxs.length + 1 >= this._virtualCount) {
            break;
          }
          if (top + physicalItemHeight >= scrollTop - this._scrollOffset) {
            break;
          }
          idxs.push(ith);
          top += physicalItemHeight;
          ith = (ith + 1) % physicalCount;
        } else {
          if (virtualStart - idxs.length <= 0) {
            break;
          }
          if (top + this._physicalSize - physicalItemHeight <= scrollBottom) {
            break;
          }
          idxs.push(ith);
          top -= physicalItemHeight;
          ith = ith === 0 ? physicalCount - 1 : ith - 1;
        }
      }
      return { indexes: idxs, physicalTop: top - this._scrollOffset };
    },
    _update(itemSet, movingUp) {
      if (itemSet && itemSet.length === 0 || this._physicalCount === 0) {
        return;
      }
      this._assignModels(itemSet);
      this._updateMetrics(itemSet);
      if (movingUp) {
        while (movingUp.length) {
          const idx = movingUp.pop();
          this._physicalTop -= this._getPhysicalSizeIncrement(idx);
        }
      }
      this._positionItems();
      this._updateScrollerSize();
    },
    _isClientFull() {
      return this._scrollBottom !== 0 && this._physicalBottom - 1 >= this._scrollBottom && this._physicalTop <= this._scrollPosition;
    },
    _increasePoolIfNeeded(count) {
      const nextPhysicalCount = this._clamp(
        this._physicalCount + count,
        DEFAULT_PHYSICAL_COUNT,
        this._virtualCount - this._virtualStart
      );
      const delta = nextPhysicalCount - this._physicalCount;
      let nextIncrease = Math.round(this._physicalCount * 0.5);
      if (delta < 0) {
        return;
      }
      if (delta > 0) {
        const ts = window.performance.now();
        [].push.apply(this._physicalItems, this._createPool(delta));
        for (let i5 = 0; i5 < delta; i5++) {
          this._physicalSizes.push(0);
        }
        this._physicalCount += delta;
        if (this._physicalStart > this._physicalEnd && this._isIndexRendered(this._focusedVirtualIndex) && this._getPhysicalIndex(this._focusedVirtualIndex) < this._physicalEnd) {
          this._physicalStart += delta;
        }
        this._update();
        this._templateCost = (window.performance.now() - ts) / delta;
        nextIncrease = Math.round(this._physicalCount * 0.5);
      }
      if (this._virtualEnd >= this._virtualCount - 1 || nextIncrease === 0) {
      } else if (!this._isClientFull()) {
        this._debounce("_increasePoolIfNeeded", this._increasePoolIfNeeded.bind(this, nextIncrease), microTask2);
      } else if (this._physicalSize < this._optPhysicalSize) {
        this._debounce(
          "_increasePoolIfNeeded",
          this._increasePoolIfNeeded.bind(this, this._clamp(Math.round(50 / this._templateCost), 1, nextIncrease)),
          idlePeriod
        );
      }
    },
    _render() {
      if (!this.isAttached || !this._isVisible) {
        return;
      }
      if (this._physicalCount !== 0) {
        const reusables = this._getReusables(true);
        this._physicalTop = reusables.physicalTop;
        this._virtualStart += reusables.indexes.length;
        this._physicalStart += reusables.indexes.length;
        this._update(reusables.indexes);
        this._update();
        this._increasePoolIfNeeded(0);
      } else if (this._virtualCount > 0) {
        this.updateViewportBoundaries();
        this._increasePoolIfNeeded(DEFAULT_PHYSICAL_COUNT);
      }
    },
    _itemsChanged(change) {
      if (change.path === "items") {
        this._virtualStart = 0;
        this._physicalTop = 0;
        this._virtualCount = this.items ? this.items.length : 0;
        this._physicalIndexForKey = {};
        this._firstVisibleIndexVal = null;
        this._lastVisibleIndexVal = null;
        this._physicalCount = this._physicalCount || 0;
        this._physicalItems = this._physicalItems || [];
        this._physicalSizes = this._physicalSizes || [];
        this._physicalStart = 0;
        if (this._scrollTop > this._scrollOffset) {
          this._resetScrollPosition(0);
        }
        this._debounce("_render", this._render, animationFrame);
      }
    },
    _iterateItems(fn, itemSet) {
      let pidx, vidx, rtn, i5;
      if (arguments.length === 2 && itemSet) {
        for (i5 = 0; i5 < itemSet.length; i5++) {
          pidx = itemSet[i5];
          vidx = this._computeVidx(pidx);
          if ((rtn = fn.call(this, pidx, vidx)) != null) {
            return rtn;
          }
        }
      } else {
        pidx = this._physicalStart;
        vidx = this._virtualStart;
        for (; pidx < this._physicalCount; pidx++, vidx++) {
          if ((rtn = fn.call(this, pidx, vidx)) != null) {
            return rtn;
          }
        }
        for (pidx = 0; pidx < this._physicalStart; pidx++, vidx++) {
          if ((rtn = fn.call(this, pidx, vidx)) != null) {
            return rtn;
          }
        }
      }
    },
    _computeVidx(pidx) {
      if (pidx >= this._physicalStart) {
        return this._virtualStart + (pidx - this._physicalStart);
      }
      return this._virtualStart + (this._physicalCount - this._physicalStart) + pidx;
    },
    _updateMetrics(itemSet) {
      flush();
      let newPhysicalSize = 0;
      let oldPhysicalSize = 0;
      const prevAvgCount = this._physicalAverageCount;
      const prevPhysicalAvg = this._physicalAverage;
      this._iterateItems((pidx, vidx) => {
        oldPhysicalSize += this._physicalSizes[pidx];
        this._physicalSizes[pidx] = this._physicalItems[pidx].offsetHeight;
        newPhysicalSize += this._physicalSizes[pidx];
        this._physicalAverageCount += this._physicalSizes[pidx] ? 1 : 0;
      }, itemSet);
      this._physicalSize = this._physicalSize + newPhysicalSize - oldPhysicalSize;
      if (this._physicalAverageCount !== prevAvgCount) {
        this._physicalAverage = Math.round(
          (prevPhysicalAvg * prevAvgCount + newPhysicalSize) / this._physicalAverageCount
        );
      }
    },
    _positionItems() {
      this._adjustScrollPosition();
      let y2 = this._physicalTop;
      this._iterateItems((pidx) => {
        this.translate3d(0, `${y2}px`, 0, this._physicalItems[pidx]);
        y2 += this._physicalSizes[pidx];
      });
    },
    _getPhysicalSizeIncrement(pidx) {
      return this._physicalSizes[pidx];
    },
    _adjustScrollPosition() {
      const deltaHeight = this._virtualStart === 0 ? this._physicalTop : Math.min(this._scrollPosition + this._physicalTop, 0);
      if (deltaHeight !== 0) {
        this._physicalTop -= deltaHeight;
        const scrollTop = this._scrollPosition;
        if (!IOS_TOUCH_SCROLLING && scrollTop > 0) {
          this._resetScrollPosition(scrollTop - deltaHeight);
        }
      }
    },
    _resetScrollPosition(pos) {
      if (this.scrollTarget && pos >= 0) {
        this._scrollTop = pos;
        this._scrollPosition = this._scrollTop;
      }
    },
    _updateScrollerSize(forceUpdate) {
      this._estScrollHeight = this._physicalBottom + Math.max(this._virtualCount - this._physicalCount - this._virtualStart, 0) * this._physicalAverage;
      forceUpdate = forceUpdate || this._scrollHeight === 0;
      forceUpdate = forceUpdate || this._scrollPosition >= this._estScrollHeight - this._physicalSize;
      if (forceUpdate || Math.abs(this._estScrollHeight - this._scrollHeight) >= this._viewportHeight) {
        this.$.items.style.height = `${this._estScrollHeight}px`;
        this._scrollHeight = this._estScrollHeight;
      }
    },
    scrollToIndex(idx) {
      if (typeof idx !== "number" || idx < 0 || idx > this.items.length - 1) {
        return;
      }
      flush();
      if (this._physicalCount === 0) {
        return;
      }
      idx = this._clamp(idx, 0, this._virtualCount - 1);
      if (!this._isIndexRendered(idx) || idx >= this._maxVirtualStart) {
        this._virtualStart = idx - 1;
      }
      this._assignModels();
      this._updateMetrics();
      this._physicalTop = this._virtualStart * this._physicalAverage;
      let currentTopItem = this._physicalStart;
      let currentVirtualItem = this._virtualStart;
      let targetOffsetTop = 0;
      const hiddenContentSize = this._hiddenContentSize;
      while (currentVirtualItem < idx && targetOffsetTop <= hiddenContentSize) {
        targetOffsetTop += this._getPhysicalSizeIncrement(currentTopItem);
        currentTopItem = (currentTopItem + 1) % this._physicalCount;
        currentVirtualItem += 1;
      }
      this._updateScrollerSize(true);
      this._positionItems();
      this._resetScrollPosition(this._physicalTop + this._scrollOffset + targetOffsetTop);
      this._increasePoolIfNeeded(0);
      this._firstVisibleIndexVal = null;
      this._lastVisibleIndexVal = null;
    },
    _resetAverage() {
      this._physicalAverage = 0;
      this._physicalAverageCount = 0;
    },
    _resizeHandler() {
      this._debounce(
        "_render",
        () => {
          this._firstVisibleIndexVal = null;
          this._lastVisibleIndexVal = null;
          if (this._isVisible) {
            this.updateViewportBoundaries();
            this.toggleScrollListener(true);
            this._resetAverage();
            this._render();
          } else {
            this.toggleScrollListener(false);
          }
        },
        animationFrame
      );
    },
    _isIndexRendered(idx) {
      return idx >= this._virtualStart && idx <= this._virtualEnd;
    },
    _getPhysicalIndex(vidx) {
      return (this._physicalStart + (vidx - this._virtualStart)) % this._physicalCount;
    },
    _clamp(v2, min, max) {
      return Math.min(max, Math.max(min, v2));
    },
    _debounce(name, cb, asyncModule) {
      this._debouncers = this._debouncers || {};
      this._debouncers[name] = Debouncer.debounce(this._debouncers[name], asyncModule, cb.bind(this));
      enqueueDebouncer(this._debouncers[name]);
    }
  };

  // node_modules/@vaadin/component-base/src/virtualizer-iron-list-adapter.js
  var MAX_VIRTUAL_COUNT = 1e5;
  var OFFSET_ADJUST_MIN_THRESHOLD = 1e3;
  var IronListAdapter = class {
    constructor({ createElements, updateElement, scrollTarget, scrollContainer, elementsContainer, reorderElements }) {
      this.isAttached = true;
      this._vidxOffset = 0;
      this.createElements = createElements;
      this.updateElement = updateElement;
      this.scrollTarget = scrollTarget;
      this.scrollContainer = scrollContainer;
      this.elementsContainer = elementsContainer || scrollContainer;
      this.reorderElements = reorderElements;
      this._maxPages = 1.3;
      this.__placeholderHeight = 200;
      this.__elementHeightQueue = Array(10);
      this.timeouts = {
        SCROLL_REORDER: 500,
        IGNORE_WHEEL: 500
      };
      this.__resizeObserver = new ResizeObserver(() => this._resizeHandler());
      if (getComputedStyle(this.scrollTarget).overflow === "visible") {
        this.scrollTarget.style.overflow = "auto";
      }
      if (getComputedStyle(this.scrollContainer).position === "static") {
        this.scrollContainer.style.position = "relative";
      }
      this.__resizeObserver.observe(this.scrollTarget);
      this.scrollTarget.addEventListener("scroll", () => this._scrollHandler());
      this._scrollLineHeight = this._getScrollLineHeight();
      this.scrollTarget.addEventListener("wheel", (e9) => this.__onWheel(e9));
      if (this.reorderElements) {
        this.scrollTarget.addEventListener("mousedown", () => {
          this.__mouseDown = true;
        });
        this.scrollTarget.addEventListener("mouseup", () => {
          this.__mouseDown = false;
          if (this.__pendingReorder) {
            this.__reorderElements();
          }
        });
      }
    }
    get scrollOffset() {
      return 0;
    }
    get adjustedFirstVisibleIndex() {
      return this.firstVisibleIndex + this._vidxOffset;
    }
    get adjustedLastVisibleIndex() {
      return this.lastVisibleIndex + this._vidxOffset;
    }
    scrollToIndex(index) {
      if (typeof index !== "number" || isNaN(index) || this.size === 0 || !this.scrollTarget.offsetHeight) {
        return;
      }
      index = this._clamp(index, 0, this.size - 1);
      const visibleElementCount = this.__getVisibleElements().length;
      let targetVirtualIndex = Math.floor(index / this.size * this._virtualCount);
      if (this._virtualCount - targetVirtualIndex < visibleElementCount) {
        targetVirtualIndex = this._virtualCount - (this.size - index);
        this._vidxOffset = this.size - this._virtualCount;
      } else if (targetVirtualIndex < visibleElementCount) {
        if (index < OFFSET_ADJUST_MIN_THRESHOLD) {
          targetVirtualIndex = index;
          this._vidxOffset = 0;
        } else {
          targetVirtualIndex = OFFSET_ADJUST_MIN_THRESHOLD;
          this._vidxOffset = index - targetVirtualIndex;
        }
      } else {
        this._vidxOffset = index - targetVirtualIndex;
      }
      this.__skipNextVirtualIndexAdjust = true;
      super.scrollToIndex(targetVirtualIndex);
      if (this.adjustedFirstVisibleIndex !== index && this._scrollTop < this._maxScrollTop && !this.grid) {
        this._scrollTop -= this.__getIndexScrollOffset(index) || 0;
      }
      this._scrollHandler();
    }
    flush() {
      if (this.scrollTarget.offsetHeight === 0) {
        return;
      }
      this._resizeHandler();
      flush();
      this._scrollHandler();
      if (this.__scrollReorderDebouncer) {
        this.__scrollReorderDebouncer.flush();
      }
      if (this.__debouncerWheelAnimationFrame) {
        this.__debouncerWheelAnimationFrame.flush();
      }
    }
    update(startIndex = 0, endIndex = this.size - 1) {
      this.__getVisibleElements().forEach((el) => {
        if (el.__virtualIndex >= startIndex && el.__virtualIndex <= endIndex) {
          this.__updateElement(el, el.__virtualIndex, true);
        }
      });
    }
    __updateElement(el, index, forceSameIndexUpdates) {
      if (el.style.paddingTop) {
        el.style.paddingTop = "";
      }
      if (!this.__preventElementUpdates && (el.__lastUpdatedIndex !== index || forceSameIndexUpdates)) {
        this.updateElement(el, index);
        el.__lastUpdatedIndex = index;
      }
      const elementHeight = el.offsetHeight;
      if (elementHeight === 0) {
        el.style.paddingTop = `${this.__placeholderHeight}px`;
        requestAnimationFrame(() => this._resizeHandler());
      } else {
        this.__elementHeightQueue.push(elementHeight);
        this.__elementHeightQueue.shift();
        const filteredHeights = this.__elementHeightQueue.filter((h3) => h3 !== void 0);
        this.__placeholderHeight = Math.round(filteredHeights.reduce((a3, b2) => a3 + b2, 0) / filteredHeights.length);
      }
    }
    __getIndexScrollOffset(index) {
      const element = this.__getVisibleElements().find((el) => el.__virtualIndex === index);
      return element ? this.scrollTarget.getBoundingClientRect().top - element.getBoundingClientRect().top : void 0;
    }
    get size() {
      return this.__size;
    }
    set size(size) {
      if (size === this.size) {
        return;
      }
      this.__preventElementUpdates = true;
      let fvi;
      let fviOffsetBefore;
      if (size > 0) {
        fvi = this.adjustedFirstVisibleIndex;
        fviOffsetBefore = this.__getIndexScrollOffset(fvi);
      }
      this.__size = size;
      flush();
      this._itemsChanged({
        path: "items"
      });
      flush();
      if (size > 0) {
        fvi = Math.min(fvi, size - 1);
        this.scrollToIndex(fvi);
        const fviOffsetAfter = this.__getIndexScrollOffset(fvi);
        if (fviOffsetBefore !== void 0 && fviOffsetAfter !== void 0) {
          this._scrollTop += fviOffsetBefore - fviOffsetAfter;
        }
      }
      if (!this.elementsContainer.children.length) {
        requestAnimationFrame(() => this._resizeHandler());
      }
      this.__preventElementUpdates = false;
      this._resizeHandler();
      flush();
    }
    get _scrollTop() {
      return this.scrollTarget.scrollTop;
    }
    set _scrollTop(top) {
      this.scrollTarget.scrollTop = top;
    }
    get items() {
      return {
        length: Math.min(this.size, MAX_VIRTUAL_COUNT)
      };
    }
    get offsetHeight() {
      return this.scrollTarget.offsetHeight;
    }
    get $() {
      return {
        items: this.scrollContainer
      };
    }
    updateViewportBoundaries() {
      const styles = window.getComputedStyle(this.scrollTarget);
      this._scrollerPaddingTop = this.scrollTarget === this ? 0 : parseInt(styles["padding-top"], 10);
      this._isRTL = Boolean(styles.direction === "rtl");
      this._viewportWidth = this.elementsContainer.offsetWidth;
      this._viewportHeight = this.scrollTarget.offsetHeight;
      this._scrollPageHeight = this._viewportHeight - this._scrollLineHeight;
      if (this.grid) {
        this._updateGridMetrics();
      }
    }
    setAttribute() {
    }
    _createPool(size) {
      const physicalItems = this.createElements(size);
      const fragment = document.createDocumentFragment();
      physicalItems.forEach((el) => {
        el.style.position = "absolute";
        fragment.appendChild(el);
        this.__resizeObserver.observe(el);
      });
      this.elementsContainer.appendChild(fragment);
      return physicalItems;
    }
    _assignModels(itemSet) {
      this._iterateItems((pidx, vidx) => {
        const el = this._physicalItems[pidx];
        el.hidden = vidx >= this.size;
        if (!el.hidden) {
          el.__virtualIndex = vidx + (this._vidxOffset || 0);
          this.__updateElement(el, el.__virtualIndex);
        } else {
          delete el.__lastUpdatedIndex;
        }
      }, itemSet);
    }
    _isClientFull() {
      setTimeout(() => {
        this.__clientFull = true;
      });
      return this.__clientFull || super._isClientFull();
    }
    translate3d(_x, y2, _z, el) {
      el.style.transform = `translateY(${y2})`;
    }
    toggleScrollListener() {
    }
    _scrollHandler() {
      this._adjustVirtualIndexOffset(this._scrollTop - (this.__previousScrollTop || 0));
      const delta = this.scrollTarget.scrollTop - this._scrollPosition;
      super._scrollHandler();
      if (this._physicalCount !== 0) {
        const isScrollingDown = delta >= 0;
        const reusables = this._getReusables(!isScrollingDown);
        if (reusables.indexes.length) {
          this._physicalTop = reusables.physicalTop;
          if (isScrollingDown) {
            this._virtualStart -= reusables.indexes.length;
            this._physicalStart -= reusables.indexes.length;
          } else {
            this._virtualStart += reusables.indexes.length;
            this._physicalStart += reusables.indexes.length;
          }
          this._resizeHandler();
        }
      }
      if (this.reorderElements) {
        this.__scrollReorderDebouncer = Debouncer.debounce(
          this.__scrollReorderDebouncer,
          timeOut.after(this.timeouts.SCROLL_REORDER),
          () => this.__reorderElements()
        );
      }
      this.__previousScrollTop = this._scrollTop;
      if (this._scrollTop === 0 && this.firstVisibleIndex !== 0) {
        this._scrollTop = 1;
      }
    }
    __onWheel(e9) {
      if (e9.ctrlKey || this._hasScrolledAncestor(e9.target, e9.deltaX, e9.deltaY)) {
        return;
      }
      let deltaY = e9.deltaY;
      if (e9.deltaMode === WheelEvent.DOM_DELTA_LINE) {
        deltaY *= this._scrollLineHeight;
      } else if (e9.deltaMode === WheelEvent.DOM_DELTA_PAGE) {
        deltaY *= this._scrollPageHeight;
      }
      this._deltaYAcc = this._deltaYAcc || 0;
      if (this._wheelAnimationFrame) {
        this._deltaYAcc += deltaY;
        e9.preventDefault();
        return;
      }
      deltaY += this._deltaYAcc;
      this._deltaYAcc = 0;
      this._wheelAnimationFrame = true;
      this.__debouncerWheelAnimationFrame = Debouncer.debounce(
        this.__debouncerWheelAnimationFrame,
        animationFrame,
        () => {
          this._wheelAnimationFrame = false;
        }
      );
      const momentum = Math.abs(e9.deltaX) + Math.abs(deltaY);
      if (this._canScroll(this.scrollTarget, e9.deltaX, deltaY)) {
        e9.preventDefault();
        this.scrollTarget.scrollTop += deltaY;
        this.scrollTarget.scrollLeft += e9.deltaX;
        this._hasResidualMomentum = true;
        this._ignoreNewWheel = true;
        this._debouncerIgnoreNewWheel = Debouncer.debounce(
          this._debouncerIgnoreNewWheel,
          timeOut.after(this.timeouts.IGNORE_WHEEL),
          () => {
            this._ignoreNewWheel = false;
          }
        );
      } else if (this._hasResidualMomentum && momentum <= this._previousMomentum || this._ignoreNewWheel) {
        e9.preventDefault();
      } else if (momentum > this._previousMomentum) {
        this._hasResidualMomentum = false;
      }
      this._previousMomentum = momentum;
    }
    _hasScrolledAncestor(el, deltaX, deltaY) {
      if (el === this.scrollTarget || el === this.scrollTarget.getRootNode().host) {
        return false;
      } else if (this._canScroll(el, deltaX, deltaY) && ["auto", "scroll"].indexOf(getComputedStyle(el).overflow) !== -1) {
        return true;
      } else if (el !== this && el.parentElement) {
        return this._hasScrolledAncestor(el.parentElement, deltaX, deltaY);
      }
    }
    _canScroll(el, deltaX, deltaY) {
      return deltaY > 0 && el.scrollTop < el.scrollHeight - el.offsetHeight || deltaY < 0 && el.scrollTop > 0 || deltaX > 0 && el.scrollLeft < el.scrollWidth - el.offsetWidth || deltaX < 0 && el.scrollLeft > 0;
    }
    _getScrollLineHeight() {
      const el = document.createElement("div");
      el.style.fontSize = "initial";
      el.style.display = "none";
      document.body.appendChild(el);
      const fontSize = window.getComputedStyle(el).fontSize;
      document.body.removeChild(el);
      return fontSize ? window.parseInt(fontSize) : void 0;
    }
    __getVisibleElements() {
      return Array.from(this.elementsContainer.children).filter((element) => !element.hidden);
    }
    __reorderElements() {
      if (this.__mouseDown) {
        this.__pendingReorder = true;
        return;
      }
      this.__pendingReorder = false;
      const adjustedVirtualStart = this._virtualStart + (this._vidxOffset || 0);
      const visibleElements = this.__getVisibleElements();
      const elementWithFocus = visibleElements.find(
        (element) => element.contains(this.elementsContainer.getRootNode().activeElement) || element.contains(this.scrollTarget.getRootNode().activeElement)
      );
      const targetElement = elementWithFocus || visibleElements[0];
      if (!targetElement) {
        return;
      }
      const targetPhysicalIndex = targetElement.__virtualIndex - adjustedVirtualStart;
      const delta = visibleElements.indexOf(targetElement) - targetPhysicalIndex;
      if (delta > 0) {
        for (let i5 = 0; i5 < delta; i5++) {
          this.elementsContainer.appendChild(visibleElements[i5]);
        }
      } else if (delta < 0) {
        for (let i5 = visibleElements.length + delta; i5 < visibleElements.length; i5++) {
          this.elementsContainer.insertBefore(visibleElements[i5], visibleElements[0]);
        }
      }
      if (isSafari) {
        const { transform } = this.scrollTarget.style;
        this.scrollTarget.style.transform = "translateZ(0)";
        setTimeout(() => {
          this.scrollTarget.style.transform = transform;
        });
      }
    }
    _adjustVirtualIndexOffset(delta) {
      if (this._virtualCount >= this.size) {
        this._vidxOffset = 0;
      } else if (this.__skipNextVirtualIndexAdjust) {
        this.__skipNextVirtualIndexAdjust = false;
      } else if (Math.abs(delta) > 1e4) {
        const scale = this._scrollTop / (this.scrollTarget.scrollHeight - this.scrollTarget.offsetHeight);
        const offset = scale * this.size;
        this._vidxOffset = Math.round(offset - scale * this._virtualCount);
      } else {
        const oldOffset = this._vidxOffset;
        const threshold = OFFSET_ADJUST_MIN_THRESHOLD;
        const maxShift = 100;
        if (this._scrollTop === 0) {
          this._vidxOffset = 0;
          if (oldOffset !== this._vidxOffset) {
            super.scrollToIndex(0);
          }
        } else if (this.firstVisibleIndex < threshold && this._vidxOffset > 0) {
          this._vidxOffset -= Math.min(this._vidxOffset, maxShift);
          super.scrollToIndex(this.firstVisibleIndex + (oldOffset - this._vidxOffset));
        }
        const maxOffset = this.size - this._virtualCount;
        if (this._scrollTop >= this._maxScrollTop && this._maxScrollTop > 0) {
          this._vidxOffset = maxOffset;
          if (oldOffset !== this._vidxOffset) {
            super.scrollToIndex(this._virtualCount - 1);
          }
        } else if (this.firstVisibleIndex > this._virtualCount - threshold && this._vidxOffset < maxOffset) {
          this._vidxOffset += Math.min(maxOffset - this._vidxOffset, maxShift);
          super.scrollToIndex(this.firstVisibleIndex - (this._vidxOffset - oldOffset));
        }
      }
    }
  };
  Object.setPrototypeOf(IronListAdapter.prototype, ironList);

  // node_modules/@vaadin/component-base/src/virtualizer.js
  var Virtualizer = class {
    constructor(config) {
      this.__adapter = new IronListAdapter(config);
    }
    get size() {
      return this.__adapter.size;
    }
    set size(size) {
      this.__adapter.size = size;
    }
    scrollToIndex(index) {
      this.__adapter.scrollToIndex(index);
    }
    update(startIndex = 0, endIndex = this.size - 1) {
      this.__adapter.update(startIndex, endIndex);
    }
    flush() {
      this.__adapter.flush();
    }
    get firstVisibleIndex() {
      return this.__adapter.adjustedFirstVisibleIndex;
    }
    get lastVisibleIndex() {
      return this.__adapter.adjustedLastVisibleIndex;
    }
  };

  // node_modules/@vaadin/grid/src/vaadin-grid-a11y-mixin.js
  var A11yMixin = (superClass) => class A11yMixin extends superClass {
    static get observers() {
      return ["_a11yUpdateGridSize(size, _columnTree, _columnTree.*)"];
    }
    _a11yGetHeaderRowCount(_columnTree) {
      return _columnTree.filter((level) => level.some((col) => col.headerRenderer || col.path || col.header)).length;
    }
    _a11yGetFooterRowCount(_columnTree) {
      return _columnTree.filter((level) => level.some((col) => col.headerRenderer)).length;
    }
    _a11yUpdateGridSize(size, _columnTree) {
      if (size === void 0 || _columnTree === void 0) {
        return;
      }
      const bodyColumns = _columnTree[_columnTree.length - 1];
      this.$.table.setAttribute(
        "aria-rowcount",
        size + this._a11yGetHeaderRowCount(_columnTree) + this._a11yGetFooterRowCount(_columnTree)
      );
      this.$.table.setAttribute("aria-colcount", bodyColumns && bodyColumns.length || 0);
      this._a11yUpdateHeaderRows();
      this._a11yUpdateFooterRows();
    }
    _a11yUpdateHeaderRows() {
      Array.from(this.$.header.children).forEach(
        (headerRow, index) => headerRow.setAttribute("aria-rowindex", index + 1)
      );
    }
    _a11yUpdateFooterRows() {
      Array.from(this.$.footer.children).forEach(
        (footerRow, index) => footerRow.setAttribute("aria-rowindex", this._a11yGetHeaderRowCount(this._columnTree) + this.size + index + 1)
      );
    }
    _a11yUpdateRowRowindex(row, index) {
      row.setAttribute("aria-rowindex", index + this._a11yGetHeaderRowCount(this._columnTree) + 1);
    }
    _a11yUpdateRowSelected(row, selected) {
      row.setAttribute("aria-selected", Boolean(selected));
      Array.from(row.children).forEach((cell) => cell.setAttribute("aria-selected", Boolean(selected)));
    }
    _a11yUpdateRowExpanded(row) {
      if (this.__isRowExpandable(row)) {
        row.setAttribute("aria-expanded", "false");
      } else if (this.__isRowCollapsible(row)) {
        row.setAttribute("aria-expanded", "true");
      } else {
        row.removeAttribute("aria-expanded");
      }
    }
    _a11yUpdateRowLevel(row, level) {
      if (level > 0 || this.__isRowCollapsible(row) || this.__isRowExpandable(row)) {
        row.setAttribute("aria-level", level + 1);
      } else {
        row.removeAttribute("aria-level");
      }
    }
    _a11ySetRowDetailsCell(row, detailsCell) {
      Array.from(row.children).forEach((cell) => {
        if (cell !== detailsCell) {
          cell.setAttribute("aria-controls", detailsCell.id);
        }
      });
    }
    _a11yUpdateCellColspan(cell, colspan) {
      cell.setAttribute("aria-colspan", Number(colspan));
    }
    _a11yUpdateSorters() {
      Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach((sorter) => {
        let cellContent = sorter.parentNode;
        while (cellContent && cellContent.localName !== "vaadin-grid-cell-content") {
          cellContent = cellContent.parentNode;
        }
        if (cellContent && cellContent.assignedSlot) {
          const cell = cellContent.assignedSlot.parentNode;
          cell.setAttribute(
            "aria-sort",
            {
              asc: "ascending",
              desc: "descending"
            }[String(sorter.direction)] || "none"
          );
        }
      });
    }
  };

  // node_modules/@vaadin/grid/src/vaadin-grid-active-item-mixin.js
  var ActiveItemMixin = (superClass) => class ActiveItemMixin extends superClass {
    static get properties() {
      return {
        activeItem: {
          type: Object,
          notify: true,
          value: null
        }
      };
    }
    ready() {
      super.ready();
      this.$.scroller.addEventListener("click", this._onClick.bind(this));
      this.addEventListener("cell-activate", this._activateItem.bind(this));
      this.addEventListener("row-activate", this._activateItem.bind(this));
    }
    _activateItem(e9) {
      const model = e9.detail.model;
      const clickedItem = model ? model.item : null;
      if (clickedItem) {
        this.activeItem = !this._itemsEqual(this.activeItem, clickedItem) ? clickedItem : null;
      }
    }
    _onClick(e9) {
      if (e9.defaultPrevented) {
        return;
      }
      const path = e9.composedPath();
      const cell = path[path.indexOf(this.$.table) - 3];
      if (!cell || cell.getAttribute("part").indexOf("details-cell") > -1) {
        return;
      }
      const cellContent = cell._content;
      const activeElement = this.getRootNode().activeElement;
      const cellContentHasFocus = cellContent.contains(activeElement);
      if (!cellContentHasFocus && !this._isFocusable(e9.target)) {
        this.dispatchEvent(
          new CustomEvent("cell-activate", {
            detail: {
              model: this.__getRowModel(cell.parentElement)
            }
          })
        );
      }
    }
    _isFocusable(target) {
      return isFocusable(target);
    }
  };
  var isFocusable = (target) => {
    if (!target.parentNode) {
      return false;
    }
    const focusables = Array.from(
      target.parentNode.querySelectorAll(
        "[tabindex], button, input, select, textarea, object, iframe, label, a[href], area[href]"
      )
    ).filter((element) => element.getAttribute("part") !== "cell body-cell");
    const isFocusableElement = focusables.includes(target);
    return !target.disabled && isFocusableElement;
  };

  // node_modules/@vaadin/grid/src/array-data-provider.js
  function get2(path, object) {
    return path.split(".").reduce((obj, property) => obj[property], object);
  }
  function checkPaths(arrayToCheck, action, items) {
    if (items.length === 0) {
      return false;
    }
    let result = true;
    arrayToCheck.forEach(({ path }) => {
      if (!path || path.indexOf(".") === -1) {
        return;
      }
      const parentProperty = path.replace(/\.[^.]*$/, "");
      if (get2(parentProperty, items[0]) === void 0) {
        console.warn(`Path "${path}" used for ${action} does not exist in all of the items, ${action} is disabled.`);
        result = false;
      }
    });
    return result;
  }
  function multiSort(items, sortOrders) {
    return items.sort((a3, b2) => {
      return sortOrders.map((sortOrder) => {
        if (sortOrder.direction === "asc") {
          return compare(get2(sortOrder.path, a3), get2(sortOrder.path, b2));
        } else if (sortOrder.direction === "desc") {
          return compare(get2(sortOrder.path, b2), get2(sortOrder.path, a3));
        }
        return 0;
      }).reduce((p2, n6) => {
        return p2 !== 0 ? p2 : n6;
      }, 0);
    });
  }
  function normalizeEmptyValue(value) {
    if ([void 0, null].indexOf(value) >= 0) {
      return "";
    } else if (isNaN(value)) {
      return value.toString();
    }
    return value;
  }
  function compare(a3, b2) {
    a3 = normalizeEmptyValue(a3);
    b2 = normalizeEmptyValue(b2);
    if (a3 < b2) {
      return -1;
    }
    if (a3 > b2) {
      return 1;
    }
    return 0;
  }
  function filter(items, filters) {
    return items.filter((item) => {
      return filters.every((filter2) => {
        const value = normalizeEmptyValue(get2(filter2.path, item));
        const filterValueLowercase = normalizeEmptyValue(filter2.value).toString().toLowerCase();
        return value.toString().toLowerCase().includes(filterValueLowercase);
      });
    });
  }
  var createArrayDataProvider = (allItems) => {
    return (params, callback) => {
      let items = allItems ? [...allItems] : [];
      if (params.filters && checkPaths(params.filters, "filtering", items)) {
        items = filter(items, params.filters);
      }
      if (Array.isArray(params.sortOrders) && params.sortOrders.length && checkPaths(params.sortOrders, "sorting", items)) {
        items = multiSort(items, params.sortOrders);
      }
      const count = Math.min(items.length, params.pageSize);
      const start = params.page * count;
      const end = start + count;
      const slice = items.slice(start, end);
      callback(slice, items.length);
    };
  };

  // node_modules/@vaadin/grid/src/vaadin-grid-array-data-provider-mixin.js
  var ArrayDataProviderMixin = (superClass) => class ArrayDataProviderMixin extends superClass {
    static get properties() {
      return {
        items: Array
      };
    }
    static get observers() {
      return ["__dataProviderOrItemsChanged(dataProvider, items, isAttached, items.*, _filters, _sorters)"];
    }
    __setArrayDataProvider(items) {
      const arrayDataProvider = createArrayDataProvider(this.items, {});
      arrayDataProvider.__items = items;
      this.setProperties({
        _arrayDataProvider: arrayDataProvider,
        size: items.length,
        dataProvider: arrayDataProvider
      });
    }
    __dataProviderOrItemsChanged(dataProvider, items, isAttached) {
      if (!isAttached) {
        return;
      }
      if (this._arrayDataProvider) {
        if (dataProvider !== this._arrayDataProvider) {
          this.setProperties({
            _arrayDataProvider: void 0,
            items: void 0
          });
        } else if (!items) {
          this.setProperties({
            _arrayDataProvider: void 0,
            dataProvider: void 0,
            size: 0
          });
          this.clearCache();
        } else if (this._arrayDataProvider.__items === items) {
          this.clearCache();
          this.size = this._effectiveSize;
        } else {
          this.__setArrayDataProvider(items);
        }
      } else if (items) {
        this.__setArrayDataProvider(items);
      }
    }
  };

  // node_modules/@vaadin/grid/src/vaadin-grid-helpers.js
  function updateColumnOrders(columns, scope, baseOrder) {
    let c3 = 1;
    columns.forEach((column) => {
      if (c3 % 10 === 0) {
        c3 += 1;
      }
      column._order = baseOrder + c3 * scope;
      c3 += 1;
    });
  }

  // node_modules/@vaadin/grid/src/vaadin-grid-column-reordering-mixin.js
  var ColumnReorderingMixin = (superClass) => class ColumnReorderingMixin extends superClass {
    static get properties() {
      return {
        columnReorderingAllowed: {
          type: Boolean,
          value: false
        },
        _orderBaseScope: {
          type: Number,
          value: 1e7
        }
      };
    }
    static get observers() {
      return ["_updateOrders(_columnTree, _columnTree.*)"];
    }
    ready() {
      super.ready();
      addListener(this, "track", this._onTrackEvent);
      this._reorderGhost = this.shadowRoot.querySelector('[part="reorder-ghost"]');
      this.addEventListener("touchstart", this._onTouchStart.bind(this));
      this.addEventListener("touchmove", this._onTouchMove.bind(this));
      this.addEventListener("touchend", this._onTouchEnd.bind(this));
      this.addEventListener("contextmenu", this._onContextMenu.bind(this));
    }
    _onContextMenu(e9) {
      if (this.hasAttribute("reordering")) {
        e9.preventDefault();
      }
    }
    _onTouchStart(e9) {
      this._startTouchReorderTimeout = setTimeout(() => {
        this._onTrackStart({
          detail: {
            x: e9.touches[0].clientX,
            y: e9.touches[0].clientY
          }
        });
      }, 100);
    }
    _onTouchMove(e9) {
      if (this._draggedColumn) {
        e9.preventDefault();
      }
      clearTimeout(this._startTouchReorderTimeout);
    }
    _onTouchEnd() {
      clearTimeout(this._startTouchReorderTimeout);
      this._onTrackEnd();
    }
    _onTrackEvent(e9) {
      if (e9.detail.state === "start") {
        const path = e9.composedPath();
        const headerCell = path[path.indexOf(this.$.header) - 2];
        if (!headerCell || !headerCell._content) {
          return;
        }
        if (headerCell._content.contains(this.getRootNode().activeElement)) {
          return;
        }
        if (this.$.scroller.hasAttribute("column-resizing")) {
          return;
        }
        if (!this._touchDevice) {
          this._onTrackStart(e9);
        }
      } else if (e9.detail.state === "track") {
        this._onTrack(e9);
      } else if (e9.detail.state === "end") {
        this._onTrackEnd(e9);
      }
    }
    _onTrackStart(e9) {
      if (!this.columnReorderingAllowed) {
        return;
      }
      const path = e9.composedPath && e9.composedPath();
      if (path && path.filter((node) => node.hasAttribute && node.hasAttribute("draggable"))[0]) {
        return;
      }
      const headerCell = this._cellFromPoint(e9.detail.x, e9.detail.y);
      if (!headerCell || headerCell.getAttribute("part").indexOf("header-cell") === -1) {
        return;
      }
      this.toggleAttribute("reordering", true);
      this._draggedColumn = headerCell._column;
      while (this._draggedColumn.parentElement.childElementCount === 1) {
        this._draggedColumn = this._draggedColumn.parentElement;
      }
      this._setSiblingsReorderStatus(this._draggedColumn, "allowed");
      this._draggedColumn._reorderStatus = "dragging";
      this._updateGhost(headerCell);
      this._reorderGhost.style.visibility = "visible";
      this._updateGhostPosition(e9.detail.x, this._touchDevice ? e9.detail.y - 50 : e9.detail.y);
      this._autoScroller();
    }
    _onTrack(e9) {
      if (!this._draggedColumn) {
        return;
      }
      const targetCell = this._cellFromPoint(e9.detail.x, e9.detail.y);
      if (!targetCell) {
        return;
      }
      const targetColumn = this._getTargetColumn(targetCell, this._draggedColumn);
      if (this._isSwapAllowed(this._draggedColumn, targetColumn) && this._isSwappableByPosition(targetColumn, e9.detail.x)) {
        const columnTreeLevel = this._columnTree.findIndex((level) => level.includes(targetColumn));
        const levelColumnsInOrder = this._getColumnsInOrder(columnTreeLevel);
        const startIndex = levelColumnsInOrder.indexOf(this._draggedColumn);
        const endIndex = levelColumnsInOrder.indexOf(targetColumn);
        const direction = startIndex < endIndex ? 1 : -1;
        for (let i5 = startIndex; i5 !== endIndex; i5 += direction) {
          this._swapColumnOrders(this._draggedColumn, levelColumnsInOrder[i5 + direction]);
        }
      }
      this._updateGhostPosition(e9.detail.x, this._touchDevice ? e9.detail.y - 50 : e9.detail.y);
      this._lastDragClientX = e9.detail.x;
    }
    _onTrackEnd() {
      if (!this._draggedColumn) {
        return;
      }
      this.toggleAttribute("reordering", false);
      this._draggedColumn._reorderStatus = "";
      this._setSiblingsReorderStatus(this._draggedColumn, "");
      this._draggedColumn = null;
      this._lastDragClientX = null;
      this._reorderGhost.style.visibility = "hidden";
      this.dispatchEvent(
        new CustomEvent("column-reorder", {
          detail: {
            columns: this._getColumnsInOrder()
          }
        })
      );
    }
    _getColumnsInOrder(headerLevel = this._columnTree.length - 1) {
      return this._columnTree[headerLevel].filter((c3) => !c3.hidden).sort((b2, a3) => b2._order - a3._order);
    }
    _cellFromPoint(x2, y2) {
      x2 = x2 || 0;
      y2 = y2 || 0;
      if (!this._draggedColumn) {
        this.$.scroller.toggleAttribute("no-content-pointer-events", true);
      }
      const cell = this.shadowRoot.elementFromPoint(x2, y2);
      this.$.scroller.toggleAttribute("no-content-pointer-events", false);
      if (cell && cell._column) {
        return cell;
      }
    }
    _updateGhostPosition(eventClientX, eventClientY) {
      const ghostRect = this._reorderGhost.getBoundingClientRect();
      const targetLeft = eventClientX - ghostRect.width / 2;
      const targetTop = eventClientY - ghostRect.height / 2;
      const _left = parseInt(this._reorderGhost._left || 0);
      const _top = parseInt(this._reorderGhost._top || 0);
      this._reorderGhost._left = _left - (ghostRect.left - targetLeft);
      this._reorderGhost._top = _top - (ghostRect.top - targetTop);
      this._reorderGhost.style.transform = `translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`;
    }
    _updateGhost(cell) {
      const ghost = this._reorderGhost;
      ghost.textContent = cell._content.innerText;
      const style2 = window.getComputedStyle(cell);
      [
        "boxSizing",
        "display",
        "width",
        "height",
        "background",
        "alignItems",
        "padding",
        "border",
        "flex-direction",
        "overflow"
      ].forEach((propertyName) => {
        ghost.style[propertyName] = style2[propertyName];
      });
      return ghost;
    }
    _updateOrders(columnTree, splices) {
      if (columnTree === void 0 || splices === void 0) {
        return;
      }
      columnTree[0].forEach((column) => {
        column._order = 0;
      });
      updateColumnOrders(columnTree[0], this._orderBaseScope, 0);
    }
    _setSiblingsReorderStatus(column, status) {
      Array.from(column.parentNode.children).filter((child) => /column/.test(child.localName) && this._isSwapAllowed(child, column)).forEach((sibling) => {
        sibling._reorderStatus = status;
      });
    }
    _autoScroller() {
      if (this._lastDragClientX) {
        const rightDiff = this._lastDragClientX - this.getBoundingClientRect().right + 50;
        const leftDiff = this.getBoundingClientRect().left - this._lastDragClientX + 50;
        if (rightDiff > 0) {
          this.$.table.scrollLeft += rightDiff / 10;
        } else if (leftDiff > 0) {
          this.$.table.scrollLeft -= leftDiff / 10;
        }
      }
      if (this._draggedColumn) {
        setTimeout(() => this._autoScroller(), 10);
      }
    }
    _isSwapAllowed(column1, column2) {
      if (column1 && column2) {
        const differentColumns = column1 !== column2;
        const sameParent = column1.parentElement === column2.parentElement;
        const sameFrozen = column1.frozen && column2.frozen || column1.frozenToEnd && column2.frozenToEnd || !column1.frozen && !column1.frozenToEnd && !column2.frozen && !column2.frozenToEnd;
        return differentColumns && sameParent && sameFrozen;
      }
    }
    _isSwappableByPosition(targetColumn, clientX) {
      const targetCell = Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).filter(
        (cell) => targetColumn.contains(cell._column)
      )[0];
      const sourceCellRect = this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect();
      const targetRect = targetCell.getBoundingClientRect();
      if (targetRect.left > sourceCellRect.left) {
        return clientX > targetRect.right - sourceCellRect.width;
      }
      return clientX < targetRect.left + sourceCellRect.width;
    }
    _swapColumnOrders(column1, column2) {
      const _order = column1._order;
      column1._order = column2._order;
      column2._order = _order;
      this._updateFrozenColumn();
      this._updateFirstAndLastColumn();
    }
    _getTargetColumn(targetCell, draggedColumn) {
      if (targetCell && draggedColumn) {
        let candidate = targetCell._column;
        while (candidate.parentElement !== draggedColumn.parentElement && candidate !== this) {
          candidate = candidate.parentElement;
        }
        if (candidate.parentElement === draggedColumn.parentElement) {
          return candidate;
        }
        return targetCell._column;
      }
    }
  };

  // node_modules/@vaadin/grid/src/vaadin-grid-column-resizing-mixin.js
  var ColumnResizingMixin = (superClass) => class ColumnResizingMixin extends superClass {
    ready() {
      super.ready();
      const scroller = this.$.scroller;
      addListener(scroller, "track", this._onHeaderTrack.bind(this));
      scroller.addEventListener("touchmove", (e9) => scroller.hasAttribute("column-resizing") && e9.preventDefault());
      scroller.addEventListener(
        "contextmenu",
        (e9) => e9.target.getAttribute("part") === "resize-handle" && e9.preventDefault()
      );
      scroller.addEventListener(
        "mousedown",
        (e9) => e9.target.getAttribute("part") === "resize-handle" && e9.preventDefault()
      );
    }
    _onHeaderTrack(e9) {
      const handle = e9.target;
      if (handle.getAttribute("part") === "resize-handle") {
        const cell = handle.parentElement;
        let column = cell._column;
        this.$.scroller.toggleAttribute("column-resizing", true);
        while (column.localName === "vaadin-grid-column-group") {
          column = column._childColumns.slice(0).sort((a3, b2) => a3._order - b2._order).filter((column2) => !column2.hidden).pop();
        }
        const eventX = e9.detail.x;
        const columnRowCells = Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]'));
        const targetCell = columnRowCells.filter((cell2) => cell2._column === column)[0];
        if (targetCell.offsetWidth) {
          const style2 = getComputedStyle(targetCell._content);
          const minWidth = 10 + parseInt(style2.paddingLeft) + parseInt(style2.paddingRight) + parseInt(style2.borderLeftWidth) + parseInt(style2.borderRightWidth) + parseInt(style2.marginLeft) + parseInt(style2.marginRight);
          let maxWidth;
          const cellWidth = targetCell.offsetWidth;
          const cellRect = targetCell.getBoundingClientRect();
          if (targetCell.hasAttribute("frozen-to-end")) {
            maxWidth = cellWidth + (this.__isRTL ? eventX - cellRect.right : cellRect.left - eventX);
          } else {
            maxWidth = cellWidth + (this.__isRTL ? cellRect.left - eventX : eventX - cellRect.right);
          }
          column.width = `${Math.max(minWidth, maxWidth)}px`;
          column.flexGrow = 0;
        }
        columnRowCells.sort((a3, b2) => a3._column._order - b2._column._order).forEach((cell2, index, array) => {
          if (index < array.indexOf(targetCell)) {
            cell2._column.width = `${cell2.offsetWidth}px`;
            cell2._column.flexGrow = 0;
          }
        });
        const cellFrozenToEnd = this._frozenToEndCells[0];
        if (cellFrozenToEnd && this.$.table.scrollWidth > this.$.table.offsetWidth) {
          const frozenRect = cellFrozenToEnd.getBoundingClientRect();
          const offset = eventX - (this.__isRTL ? frozenRect.right : frozenRect.left);
          if (this.__isRTL && offset <= 0 || !this.__isRTL && offset >= 0) {
            this.$.table.scrollLeft += offset;
          }
        }
        if (e9.detail.state === "end") {
          this.$.scroller.toggleAttribute("column-resizing", false);
          this.dispatchEvent(
            new CustomEvent("column-resize", {
              detail: { resizedColumn: column }
            })
          );
        }
        this._resizeHandler();
      }
    }
  };

  // node_modules/@vaadin/grid/src/vaadin-grid-data-provider-mixin.js
  var ItemCache = class ItemCache2 {
    constructor(grid, parentCache, parentItem) {
      this.grid = grid;
      this.parentCache = parentCache;
      this.parentItem = parentItem;
      this.itemCaches = {};
      this.items = {};
      this.effectiveSize = 0;
      this.size = 0;
      this.pendingRequests = {};
    }
    isLoading() {
      return Boolean(
        Object.keys(this.pendingRequests).length || Object.keys(this.itemCaches).filter((index) => {
          return this.itemCaches[index].isLoading();
        })[0]
      );
    }
    getItemForIndex(index) {
      const { cache, scaledIndex } = this.getCacheAndIndex(index);
      return cache.items[scaledIndex];
    }
    updateSize() {
      this.effectiveSize = !this.parentItem || this.grid._isExpanded(this.parentItem) ? this.size + Object.keys(this.itemCaches).reduce((prev, curr) => {
        const subCache = this.itemCaches[curr];
        subCache.updateSize();
        return prev + subCache.effectiveSize;
      }, 0) : 0;
    }
    ensureSubCacheForScaledIndex(scaledIndex) {
      if (!this.itemCaches[scaledIndex]) {
        const subCache = new ItemCache2(this.grid, this, this.items[scaledIndex]);
        this.itemCaches[scaledIndex] = subCache;
        this.grid._loadPage(0, subCache);
      }
    }
    getCacheAndIndex(index) {
      let thisLevelIndex = index;
      const keys = Object.keys(this.itemCaches);
      for (let i5 = 0; i5 < keys.length; i5++) {
        const expandedIndex = Number(keys[i5]);
        const subCache = this.itemCaches[expandedIndex];
        if (thisLevelIndex <= expandedIndex) {
          return { cache: this, scaledIndex: thisLevelIndex };
        } else if (thisLevelIndex <= expandedIndex + subCache.effectiveSize) {
          return subCache.getCacheAndIndex(thisLevelIndex - expandedIndex - 1);
        }
        thisLevelIndex -= subCache.effectiveSize;
      }
      return { cache: this, scaledIndex: thisLevelIndex };
    }
  };
  var DataProviderMixin = (superClass) => class DataProviderMixin extends superClass {
    static get properties() {
      return {
        size: {
          type: Number,
          notify: true
        },
        pageSize: {
          type: Number,
          value: 50,
          observer: "_pageSizeChanged"
        },
        dataProvider: {
          type: Object,
          notify: true,
          observer: "_dataProviderChanged"
        },
        loading: {
          type: Boolean,
          notify: true,
          readOnly: true,
          reflectToAttribute: true
        },
        _cache: {
          type: Object,
          value() {
            const cache = new ItemCache(this);
            return cache;
          }
        },
        _hasData: {
          type: Boolean,
          value: false
        },
        itemHasChildrenPath: {
          type: String,
          value: "children"
        },
        itemIdPath: {
          type: String,
          value: null
        },
        expandedItems: {
          type: Object,
          notify: true,
          value: () => []
        },
        __expandedKeys: {
          type: Object,
          computed: "__computeExpandedKeys(itemIdPath, expandedItems.*)"
        }
      };
    }
    static get observers() {
      return ["_sizeChanged(size)", "_expandedItemsChanged(expandedItems.*)"];
    }
    _sizeChanged(size) {
      const delta = size - this._cache.size;
      this._cache.size += delta;
      this._cache.effectiveSize += delta;
      this._effectiveSize = this._cache.effectiveSize;
    }
    _getItem(index, el) {
      if (index >= this._effectiveSize) {
        return;
      }
      el.index = index;
      const { cache, scaledIndex } = this._cache.getCacheAndIndex(index);
      const item = cache.items[scaledIndex];
      if (item) {
        el.toggleAttribute("loading", false);
        this._updateItem(el, item);
        if (this._isExpanded(item)) {
          cache.ensureSubCacheForScaledIndex(scaledIndex);
        }
      } else {
        el.toggleAttribute("loading", true);
        this._loadPage(this._getPageForIndex(scaledIndex), cache);
      }
    }
    getItemId(item) {
      return this.itemIdPath ? this.get(this.itemIdPath, item) : item;
    }
    _isExpanded(item) {
      return this.__expandedKeys.has(this.getItemId(item));
    }
    _expandedItemsChanged() {
      this._cache.updateSize();
      this._effectiveSize = this._cache.effectiveSize;
      this.__updateVisibleRows();
    }
    __computeExpandedKeys(itemIdPath, expandedItems) {
      const expanded = expandedItems.base || [];
      const expandedKeys = /* @__PURE__ */ new Set();
      expanded.forEach((item) => {
        expandedKeys.add(this.getItemId(item));
      });
      return expandedKeys;
    }
    expandItem(item) {
      if (!this._isExpanded(item)) {
        this.expandedItems = [...this.expandedItems, item];
      }
    }
    collapseItem(item) {
      if (this._isExpanded(item)) {
        this.expandedItems = this.expandedItems.filter((i5) => !this._itemsEqual(i5, item));
      }
    }
    _getIndexLevel(index) {
      let { cache } = this._cache.getCacheAndIndex(index);
      let level = 0;
      while (cache.parentCache) {
        cache = cache.parentCache;
        level += 1;
      }
      return level;
    }
    _loadPage(page, cache) {
      if (!cache.pendingRequests[page] && this.dataProvider) {
        this._setLoading(true);
        cache.pendingRequests[page] = true;
        const params = {
          page,
          pageSize: this.pageSize,
          sortOrders: this._mapSorters(),
          filters: this._mapFilters(),
          parentItem: cache.parentItem
        };
        this.dataProvider(params, (items, size) => {
          if (size !== void 0) {
            cache.size = size;
          } else if (params.parentItem) {
            cache.size = items.length;
          }
          const currentItems = Array.from(this.$.items.children).map((row) => row._item);
          items.forEach((item, itemsIndex) => {
            const itemIndex = page * this.pageSize + itemsIndex;
            cache.items[itemIndex] = item;
            if (this._isExpanded(item) && currentItems.indexOf(item) > -1) {
              cache.ensureSubCacheForScaledIndex(itemIndex);
            }
          });
          this._hasData = true;
          delete cache.pendingRequests[page];
          this._debouncerApplyCachedData = Debouncer.debounce(this._debouncerApplyCachedData, timeOut.after(0), () => {
            this._setLoading(false);
            this._cache.updateSize();
            this._effectiveSize = this._cache.effectiveSize;
            Array.from(this.$.items.children).filter((row) => !row.hidden).forEach((row) => {
              const cachedItem = this._cache.getItemForIndex(row.index);
              if (cachedItem) {
                this._getItem(row.index, row);
              }
            });
            this.__scrollToPendingIndex();
          });
          if (!this._cache.isLoading()) {
            this._debouncerApplyCachedData.flush();
          }
          this.__itemsReceived();
        });
      }
    }
    _getPageForIndex(index) {
      return Math.floor(index / this.pageSize);
    }
    clearCache() {
      this._cache = new ItemCache(this);
      this._cache.size = this.size || 0;
      this._cache.updateSize();
      this._hasData = false;
      this.__updateVisibleRows();
      if (!this._effectiveSize) {
        this._loadPage(0, this._cache);
      }
    }
    _pageSizeChanged(pageSize, oldPageSize) {
      if (oldPageSize !== void 0 && pageSize !== oldPageSize) {
        this.clearCache();
      }
    }
    _checkSize() {
      if (this.size === void 0 && this._effectiveSize === 0) {
        console.warn(
          "The <vaadin-grid> needs the total number of items in order to display rows. Set the total number of items to the `size` property, or provide the total number of items in the second argument of the `dataProvider`\u2019s `callback` call."
        );
      }
    }
    _dataProviderChanged(dataProvider, oldDataProvider) {
      if (oldDataProvider !== void 0) {
        this.clearCache();
      }
      this._ensureFirstPageLoaded();
      this._debouncerCheckSize = Debouncer.debounce(
        this._debouncerCheckSize,
        timeOut.after(2e3),
        this._checkSize.bind(this)
      );
    }
    _ensureFirstPageLoaded() {
      if (!this._hasData) {
        this._loadPage(0, this._cache);
      }
    }
    _itemsEqual(item1, item2) {
      return this.getItemId(item1) === this.getItemId(item2);
    }
    _getItemIndexInArray(item, array) {
      let result = -1;
      array.forEach((i5, idx) => {
        if (this._itemsEqual(i5, item)) {
          result = idx;
        }
      });
      return result;
    }
    scrollToIndex(index) {
      super.scrollToIndex(index);
      if (!isNaN(index) && (this._cache.isLoading() || !this.clientHeight)) {
        this.__pendingScrollToIndex = index;
      }
    }
    __scrollToPendingIndex() {
      if (this.__pendingScrollToIndex && this.$.items.children.length) {
        const index = this.__pendingScrollToIndex;
        delete this.__pendingScrollToIndex;
        this.scrollToIndex(index);
      }
    }
  };

  // node_modules/@vaadin/grid/src/vaadin-grid-drag-and-drop-mixin.js
  var DropMode = {
    BETWEEN: "between",
    ON_TOP: "on-top",
    ON_TOP_OR_BETWEEN: "on-top-or-between",
    ON_GRID: "on-grid"
  };
  var DropLocation = {
    ON_TOP: "on-top",
    ABOVE: "above",
    BELOW: "below",
    EMPTY: "empty"
  };
  var usesDnDPolyfill = !("draggable" in document.createElement("div"));
  var DragAndDropMixin = (superClass) => class DragAndDropMixin extends superClass {
    static get properties() {
      return {
        dropMode: String,
        rowsDraggable: Boolean,
        dragFilter: Function,
        dropFilter: Function,
        __dndAutoScrollThreshold: {
          value: 50
        }
      };
    }
    static get observers() {
      return ["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter, loading)"];
    }
    ready() {
      super.ready();
      this.$.table.addEventListener("dragstart", this._onDragStart.bind(this));
      this.$.table.addEventListener("dragend", this._onDragEnd.bind(this));
      this.$.table.addEventListener("dragover", this._onDragOver.bind(this));
      this.$.table.addEventListener("dragleave", this._onDragLeave.bind(this));
      this.$.table.addEventListener("drop", this._onDrop.bind(this));
      this.$.table.addEventListener("dragenter", (e9) => {
        if (this.dropMode) {
          e9.preventDefault();
          e9.stopPropagation();
        }
      });
    }
    _onDragStart(e9) {
      if (this.rowsDraggable) {
        let row = e9.target;
        if (row.localName === "vaadin-grid-cell-content") {
          row = row.assignedSlot.parentNode.parentNode;
        }
        if (row.parentNode !== this.$.items) {
          return;
        }
        e9.stopPropagation();
        this.toggleAttribute("dragging-rows", true);
        if (this._safari) {
          const transform = row.style.transform;
          row.style.top = /translateY\((.*)\)/.exec(transform)[1];
          row.style.transform = "none";
          requestAnimationFrame(() => {
            row.style.top = "";
            row.style.transform = transform;
          });
        }
        const rowRect = row.getBoundingClientRect();
        if (usesDnDPolyfill) {
          e9.dataTransfer.setDragImage(row);
        } else {
          e9.dataTransfer.setDragImage(row, e9.clientX - rowRect.left, e9.clientY - rowRect.top);
        }
        let rows = [row];
        if (this._isSelected(row._item)) {
          rows = this.__getViewportRows().filter((row2) => this._isSelected(row2._item)).filter((row2) => !this.dragFilter || this.dragFilter(this.__getRowModel(row2)));
        }
        e9.dataTransfer.setData("text", this.__formatDefaultTransferData(rows));
        row.setAttribute("dragstart", rows.length > 1 ? rows.length : "");
        this.style.setProperty("--_grid-drag-start-x", `${e9.clientX - rowRect.left + 20}px`);
        this.style.setProperty("--_grid-drag-start-y", `${e9.clientY - rowRect.top + 10}px`);
        requestAnimationFrame(() => {
          row.removeAttribute("dragstart");
          this.updateStyles({ "--_grid-drag-start-x": "", "--_grid-drag-start-y": "" });
        });
        const event = new CustomEvent("grid-dragstart", {
          detail: {
            draggedItems: rows.map((row2) => row2._item),
            setDragData: (type, data) => e9.dataTransfer.setData(type, data),
            setDraggedItemsCount: (count) => row.setAttribute("dragstart", count)
          }
        });
        event.originalEvent = e9;
        this.dispatchEvent(event);
      }
    }
    _onDragEnd(e9) {
      this.toggleAttribute("dragging-rows", false);
      e9.stopPropagation();
      const event = new CustomEvent("grid-dragend");
      event.originalEvent = e9;
      this.dispatchEvent(event);
    }
    _onDragLeave(e9) {
      e9.stopPropagation();
      this._clearDragStyles();
    }
    _onDragOver(e9) {
      if (this.dropMode) {
        this._dropLocation = void 0;
        this._dragOverItem = void 0;
        if (this.__dndAutoScroll(e9.clientY)) {
          this._clearDragStyles();
          return;
        }
        let row = e9.composedPath().filter((node) => node.localName === "tr")[0];
        if (!this._effectiveSize || this.dropMode === DropMode.ON_GRID) {
          this._dropLocation = DropLocation.EMPTY;
        } else if (!row || row.parentNode !== this.$.items) {
          if (row) {
            return;
          } else if (this.dropMode === DropMode.BETWEEN || this.dropMode === DropMode.ON_TOP_OR_BETWEEN) {
            row = Array.from(this.$.items.children).filter((row2) => !row2.hidden).pop();
            this._dropLocation = DropLocation.BELOW;
          } else {
            return;
          }
        } else {
          const rowRect = row.getBoundingClientRect();
          this._dropLocation = DropLocation.ON_TOP;
          if (this.dropMode === DropMode.BETWEEN) {
            const dropAbove = e9.clientY - rowRect.top < rowRect.bottom - e9.clientY;
            this._dropLocation = dropAbove ? DropLocation.ABOVE : DropLocation.BELOW;
          } else if (this.dropMode === DropMode.ON_TOP_OR_BETWEEN) {
            if (e9.clientY - rowRect.top < rowRect.height / 3) {
              this._dropLocation = DropLocation.ABOVE;
            } else if (e9.clientY - rowRect.top > rowRect.height / 3 * 2) {
              this._dropLocation = DropLocation.BELOW;
            }
          }
        }
        if (row && row.hasAttribute("drop-disabled")) {
          this._dropLocation = void 0;
          return;
        }
        e9.stopPropagation();
        e9.preventDefault();
        if (this._dropLocation === DropLocation.EMPTY) {
          this.toggleAttribute("dragover", true);
        } else if (row) {
          this._dragOverItem = row._item;
          if (row.getAttribute("dragover") !== this._dropLocation) {
            row.setAttribute("dragover", this._dropLocation);
          }
        } else {
          this._clearDragStyles();
        }
      }
    }
    __dndAutoScroll(clientY) {
      if (this.__dndAutoScrolling) {
        return true;
      }
      const headerBottom = this.$.header.getBoundingClientRect().bottom;
      const footerTop = this.$.footer.getBoundingClientRect().top;
      const topDiff = headerBottom - clientY + this.__dndAutoScrollThreshold;
      const bottomDiff = clientY - footerTop + this.__dndAutoScrollThreshold;
      let scrollTopDelta = 0;
      if (bottomDiff > 0) {
        scrollTopDelta = bottomDiff * 2;
      } else if (topDiff > 0) {
        scrollTopDelta = -topDiff * 2;
      }
      if (scrollTopDelta) {
        const scrollTop = this.$.table.scrollTop;
        this.$.table.scrollTop += scrollTopDelta;
        const scrollTopChanged = scrollTop !== this.$.table.scrollTop;
        if (scrollTopChanged) {
          this.__dndAutoScrolling = true;
          setTimeout(() => {
            this.__dndAutoScrolling = false;
          }, 20);
          return true;
        }
      }
    }
    __getViewportRows() {
      const headerBottom = this.$.header.getBoundingClientRect().bottom;
      const footerTop = this.$.footer.getBoundingClientRect().top;
      return Array.from(this.$.items.children).filter((row) => {
        const rowRect = row.getBoundingClientRect();
        return rowRect.bottom > headerBottom && rowRect.top < footerTop;
      });
    }
    _clearDragStyles() {
      this.removeAttribute("dragover");
      Array.from(this.$.items.children).forEach((row) => row.removeAttribute("dragover"));
    }
    _onDrop(e9) {
      if (this.dropMode) {
        e9.stopPropagation();
        e9.preventDefault();
        const dragData = e9.dataTransfer.types && Array.from(e9.dataTransfer.types).map((type) => {
          return {
            type,
            data: e9.dataTransfer.getData(type)
          };
        });
        this._clearDragStyles();
        const event = new CustomEvent("grid-drop", {
          bubbles: e9.bubbles,
          cancelable: e9.cancelable,
          detail: {
            dropTargetItem: this._dragOverItem,
            dropLocation: this._dropLocation,
            dragData
          }
        });
        event.originalEvent = e9;
        this.dispatchEvent(event);
      }
    }
    __formatDefaultTransferData(rows) {
      return rows.map((row) => {
        return Array.from(row.children).filter((cell) => !cell.hidden && cell.getAttribute("part").indexOf("details-cell") === -1).sort((a3, b2) => {
          return a3._column._order > b2._column._order ? 1 : -1;
        }).map((cell) => cell._content.textContent.trim()).filter((content) => content).join("	");
      }).join("\n");
    }
    _dragDropAccessChanged() {
      this.filterDragAndDrop();
    }
    filterDragAndDrop() {
      Array.from(this.$.items.children).filter((row) => !row.hidden).forEach((row) => {
        this._filterDragAndDrop(row, this.__getRowModel(row));
      });
    }
    _filterDragAndDrop(row, model) {
      const loading = this.loading || row.hasAttribute("loading");
      const dragDisabled = !this.rowsDraggable || loading || this.dragFilter && !this.dragFilter(model);
      const dropDisabled = !this.dropMode || loading || this.dropFilter && !this.dropFilter(model);
      const draggableElements = Array.from(row.children).map((cell) => cell._content);
      draggableElements.forEach((e9) => {
        if (dragDisabled) {
          e9.removeAttribute("draggable");
        } else {
          e9.setAttribute("draggable", true);
        }
      });
      row.toggleAttribute("drag-disabled", !!dragDisabled);
      row.toggleAttribute("drop-disabled", !!dropDisabled);
    }
  };

  // node_modules/@vaadin/grid/src/vaadin-grid-dynamic-columns-mixin.js
  function arrayEquals(arr1, arr2) {
    if (!arr1 || !arr2 || arr1.length !== arr2.length) {
      return false;
    }
    for (let i5 = 0, l5 = arr1.length; i5 < l5; i5++) {
      if (arr1[i5] instanceof Array && arr2[i5] instanceof Array) {
        if (!arrayEquals(arr1[i5], arr2[i5])) {
          return false;
        }
      } else if (arr1[i5] !== arr2[i5]) {
        return false;
      }
    }
    return true;
  }
  var DynamicColumnsMixin = (superClass) => class DynamicColumnsMixin extends superClass {
    static get properties() {
      return {
        _columnTree: Object
      };
    }
    ready() {
      super.ready();
      this._addNodeObserver();
    }
    _hasColumnGroups(columns) {
      for (let i5 = 0; i5 < columns.length; i5++) {
        if (columns[i5].localName === "vaadin-grid-column-group") {
          return true;
        }
      }
      return false;
    }
    _getChildColumns(el) {
      return FlattenedNodesObserver.getFlattenedNodes(el).filter(this._isColumnElement);
    }
    _flattenColumnGroups(columns) {
      return columns.map((col) => {
        if (col.localName === "vaadin-grid-column-group") {
          return this._getChildColumns(col);
        }
        return [col];
      }).reduce((prev, curr) => {
        return prev.concat(curr);
      }, []);
    }
    _getColumnTree() {
      const rootColumns = FlattenedNodesObserver.getFlattenedNodes(this).filter(this._isColumnElement);
      const columnTree = [rootColumns];
      let c3 = rootColumns;
      while (this._hasColumnGroups(c3)) {
        c3 = this._flattenColumnGroups(c3);
        columnTree.push(c3);
      }
      return columnTree;
    }
    _updateColumnTree() {
      const columnTree = this._getColumnTree();
      if (!arrayEquals(columnTree, this._columnTree)) {
        this._columnTree = columnTree;
      }
    }
    _addNodeObserver() {
      this._observer = new FlattenedNodesObserver(this, (info) => {
        const hasColumnElements = (nodeCollection) => nodeCollection.filter(this._isColumnElement).length > 0;
        if (hasColumnElements(info.addedNodes) || hasColumnElements(info.removedNodes)) {
          const allRemovedCells = info.removedNodes.flatMap((c3) => c3._allCells);
          const filterNotConnected = (element) => allRemovedCells.filter((cell) => cell._content.contains(element)).length;
          this.__removeSorters(this._sorters.filter(filterNotConnected));
          this.__removeFilters(this._filters.filter(filterNotConnected));
          this._updateColumnTree();
        }
        this._debouncerCheckImports = Debouncer.debounce(
          this._debouncerCheckImports,
          timeOut.after(2e3),
          this._checkImports.bind(this)
        );
        this._ensureFirstPageLoaded();
      });
    }
    _checkImports() {
      [
        "vaadin-grid-column-group",
        "vaadin-grid-filter",
        "vaadin-grid-filter-column",
        "vaadin-grid-tree-toggle",
        "vaadin-grid-selection-column",
        "vaadin-grid-sort-column",
        "vaadin-grid-sorter"
      ].forEach((elementName) => {
        const element = this.querySelector(elementName);
        if (element && !(element instanceof PolymerElement)) {
          console.warn(`Make sure you have imported the required module for <${elementName}> element.`);
        }
      });
    }
    _updateFirstAndLastColumn() {
      Array.from(this.shadowRoot.querySelectorAll("tr")).forEach((row) => this._updateFirstAndLastColumnForRow(row));
    }
    _updateFirstAndLastColumnForRow(row) {
      Array.from(row.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort((a3, b2) => {
        return a3._column._order - b2._column._order;
      }).forEach((cell, cellIndex, children) => {
        cell.toggleAttribute("first-column", cellIndex === 0);
        cell.toggleAttribute("last-column", cellIndex === children.length - 1);
      });
    }
    _isColumnElement(node) {
      return node.nodeType === Node.ELEMENT_NODE && /\bcolumn\b/.test(node.localName);
    }
  };

  // node_modules/@vaadin/grid/src/vaadin-grid-event-context-mixin.js
  var EventContextMixin = (superClass) => class EventContextMixin extends superClass {
    getEventContext(event) {
      const context = {};
      const path = event.__composedPath || event.composedPath();
      const cell = path[path.indexOf(this.$.table) - 3];
      if (!cell) {
        return context;
      }
      context.section = ["body", "header", "footer", "details"].filter(
        (section) => cell.getAttribute("part").indexOf(section) > -1
      )[0];
      if (cell._column) {
        context.column = cell._column;
      }
      if (context.section === "body" || context.section === "details") {
        Object.assign(context, this.__getRowModel(cell.parentElement));
      }
      return context;
    }
  };

  // node_modules/@vaadin/grid/src/vaadin-grid-filter-mixin.js
  var FilterMixin = (superClass) => class FilterMixin extends superClass {
    static get properties() {
      return {
        _filters: {
          type: Array,
          value: () => []
        }
      };
    }
    ready() {
      super.ready();
      this.addEventListener("filter-changed", this._filterChanged.bind(this));
    }
    _filterChanged(e9) {
      e9.stopPropagation();
      this.__addFilter(e9.target);
      this.__applyFilters();
    }
    __removeFilters(filtersToRemove) {
      if (filtersToRemove.length === 0) {
        return;
      }
      this._filters = this._filters.filter((filter2) => filtersToRemove.indexOf(filter2) < 0);
      this.__applyFilters();
    }
    __addFilter(filter2) {
      const filterIndex = this._filters.indexOf(filter2);
      if (filterIndex === -1) {
        this._filters.push(filter2);
      }
    }
    __applyFilters() {
      if (this.dataProvider && this.isAttached) {
        this.clearCache();
      }
    }
    _mapFilters() {
      return this._filters.map((filter2) => {
        return {
          path: filter2.path,
          value: filter2.value
        };
      });
    }
  };

  // node_modules/@vaadin/grid/src/vaadin-grid-keyboard-navigation-mixin.js
  var KeyboardNavigationMixin = (superClass) => class KeyboardNavigationMixin extends superClass {
    static get properties() {
      return {
        _headerFocusable: {
          type: Object,
          observer: "_focusableChanged"
        },
        _itemsFocusable: {
          type: Object,
          observer: "_focusableChanged"
        },
        _footerFocusable: {
          type: Object,
          observer: "_focusableChanged"
        },
        _navigatingIsHidden: Boolean,
        _focusedItemIndex: {
          type: Number,
          value: 0
        },
        _focusedColumnOrder: Number,
        interacting: {
          type: Boolean,
          value: false,
          reflectToAttribute: true,
          readOnly: true,
          observer: "_interactingChanged"
        }
      };
    }
    ready() {
      super.ready();
      if (this._ios || this._android) {
        return;
      }
      this.addEventListener("keydown", this._onKeyDown);
      this.addEventListener("keyup", this._onKeyUp);
      this.addEventListener("focusin", this._onFocusIn);
      this.addEventListener("focusout", this._onFocusOut);
      this.$.table.addEventListener("focusin", this._onContentFocusIn.bind(this));
      this.addEventListener("mousedown", () => {
        this.toggleAttribute("navigating", false);
        this._isMousedown = true;
        this._focusedColumnOrder = void 0;
      });
      this.addEventListener("mouseup", () => {
        this._isMousedown = false;
      });
    }
    get __rowFocusMode() {
      return this.__isRow(this._itemsFocusable) || this.__isRow(this._headerFocusable) || this.__isRow(this._footerFocusable);
    }
    set __rowFocusMode(value) {
      ["_itemsFocusable", "_footerFocusable", "_headerFocusable"].forEach((focusable) => {
        if (value && this.__isCell(this[focusable])) {
          this[focusable] = this[focusable].parentElement;
        } else if (!value && this.__isRow(this[focusable])) {
          this[focusable] = this[focusable].firstElementChild;
        }
      });
    }
    _focusableChanged(focusable, oldFocusable) {
      if (oldFocusable) {
        oldFocusable.setAttribute("tabindex", "-1");
      }
      if (focusable) {
        this._updateGridSectionFocusTarget(focusable);
      }
    }
    _interactingChanged() {
      this._updateGridSectionFocusTarget(this._headerFocusable);
      this._updateGridSectionFocusTarget(this._itemsFocusable);
      this._updateGridSectionFocusTarget(this._footerFocusable);
    }
    __updateItemsFocusable() {
      if (!this._itemsFocusable) {
        return;
      }
      const wasFocused = this.shadowRoot.activeElement === this._itemsFocusable;
      this._getVisibleRows().forEach((row) => {
        if (row.index === this._focusedItemIndex) {
          if (this.__rowFocusMode) {
            this._itemsFocusable = row;
          } else if (this._itemsFocusable.parentElement) {
            const cellIndex = [...this._itemsFocusable.parentElement.children].indexOf(this._itemsFocusable);
            this._itemsFocusable = row.children[cellIndex];
          }
        }
      });
      if (wasFocused) {
        this._itemsFocusable.focus();
      }
    }
    _onKeyDown(e9) {
      const key = e9.key;
      let keyGroup;
      switch (key) {
        case "ArrowUp":
        case "ArrowDown":
        case "ArrowLeft":
        case "ArrowRight":
        case "PageUp":
        case "PageDown":
        case "Home":
        case "End":
          keyGroup = "Navigation";
          break;
        case "Enter":
        case "Escape":
        case "F2":
          keyGroup = "Interaction";
          break;
        case "Tab":
          keyGroup = "Tab";
          break;
        case " ":
          keyGroup = "Space";
          break;
        default:
          break;
      }
      this._detectInteracting(e9);
      if (this.interacting && keyGroup !== "Interaction") {
        keyGroup = void 0;
      }
      if (keyGroup) {
        this[`_on${keyGroup}KeyDown`](e9, key);
      }
    }
    _ensureScrolledToIndex(index) {
      const targetRowInDom = [...this.$.items.children].find((child) => child.index === index);
      if (!targetRowInDom) {
        this.scrollToIndex(index);
      } else {
        this.__scrollIntoViewport(index);
      }
    }
    __isRowExpandable(row) {
      if (this.itemHasChildrenPath) {
        const item = row._item;
        return item && this.get(this.itemHasChildrenPath, item) && !this._isExpanded(item);
      }
    }
    __isRowCollapsible(row) {
      return this._isExpanded(row._item);
    }
    __isDetailsCell(element) {
      return element.matches('[part~="details-cell"]');
    }
    __isCell(element) {
      return element instanceof HTMLTableCellElement;
    }
    __isRow(element) {
      return element instanceof HTMLTableRowElement;
    }
    __getIndexOfChildElement(el) {
      return Array.prototype.indexOf.call(el.parentNode.children, el);
    }
    _onNavigationKeyDown(e9, key) {
      e9.preventDefault();
      const visibleItemsCount = this._lastVisibleIndex - this._firstVisibleIndex - 1;
      let dx = 0, dy = 0;
      switch (key) {
        case "ArrowRight":
          dx = this.__isRTL ? -1 : 1;
          break;
        case "ArrowLeft":
          dx = this.__isRTL ? 1 : -1;
          break;
        case "Home":
          if (this.__rowFocusMode) {
            dy = -Infinity;
          } else if (e9.ctrlKey) {
            dy = -Infinity;
          } else {
            dx = -Infinity;
          }
          break;
        case "End":
          if (this.__rowFocusMode) {
            dy = Infinity;
          } else if (e9.ctrlKey) {
            dy = Infinity;
          } else {
            dx = Infinity;
          }
          break;
        case "ArrowDown":
          dy = 1;
          break;
        case "ArrowUp":
          dy = -1;
          break;
        case "PageDown":
          dy = visibleItemsCount;
          break;
        case "PageUp":
          dy = -visibleItemsCount;
          break;
        default:
          break;
      }
      const activeRow = e9.composedPath().find((el) => this.__isRow(el));
      const activeCell = e9.composedPath().find((el) => this.__isCell(el));
      if (this.__rowFocusMode && !activeRow || !this.__rowFocusMode && !activeCell) {
        return;
      }
      const forwardsKey = this.__isRTL ? "ArrowLeft" : "ArrowRight";
      const backwardsKey = this.__isRTL ? "ArrowRight" : "ArrowLeft";
      if (key === forwardsKey) {
        if (this.__rowFocusMode) {
          if (this.__isRowExpandable(activeRow)) {
            this.expandItem(activeRow._item);
            return;
          }
          this.__rowFocusMode = false;
          this._onCellNavigation(activeRow.firstElementChild, 0, 0);
          return;
        }
      } else if (key === backwardsKey) {
        if (this.__rowFocusMode) {
          if (this.__isRowCollapsible(activeRow)) {
            this.collapseItem(activeRow._item);
            return;
          }
        } else {
          const activeRowCells = [...activeRow.children].sort((a3, b2) => a3._order - b2._order);
          if (activeCell === activeRowCells[0] || this.__isDetailsCell(activeCell)) {
            this.__rowFocusMode = true;
            this._onRowNavigation(activeRow, 0);
            return;
          }
        }
      }
      if (this.__rowFocusMode) {
        this._onRowNavigation(activeRow, dy);
      } else {
        this._onCellNavigation(activeCell, dx, dy);
      }
    }
    _onRowNavigation(activeRow, dy) {
      const { dstRow } = this.__navigateRows(dy, activeRow);
      if (dstRow) {
        dstRow.focus();
      }
    }
    __getIndexInGroup(row, bodyFallbackIndex) {
      const rowGroup = row.parentNode;
      if (rowGroup === this.$.items) {
        return bodyFallbackIndex !== void 0 ? bodyFallbackIndex : row.index;
      }
      return this.__getIndexOfChildElement(row);
    }
    __navigateRows(dy, activeRow, activeCell) {
      const currentRowIndex = this.__getIndexInGroup(activeRow, this._focusedItemIndex);
      const activeRowGroup = activeRow.parentNode;
      const maxRowIndex = (activeRowGroup === this.$.items ? this._effectiveSize : activeRowGroup.children.length) - 1;
      let dstRowIndex = Math.max(0, Math.min(currentRowIndex + dy, maxRowIndex));
      if (activeRowGroup !== this.$.items) {
        if (dstRowIndex > currentRowIndex) {
          while (dstRowIndex < maxRowIndex && activeRowGroup.children[dstRowIndex].hidden) {
            dstRowIndex += 1;
          }
        } else if (dstRowIndex < currentRowIndex) {
          while (dstRowIndex > 0 && activeRowGroup.children[dstRowIndex].hidden) {
            dstRowIndex -= 1;
          }
        }
        this.toggleAttribute("navigating", true);
        return { dstRow: activeRowGroup.children[dstRowIndex] };
      }
      let dstIsRowDetails = false;
      if (activeCell) {
        const isRowDetails = this.__isDetailsCell(activeCell);
        if (activeRowGroup === this.$.items) {
          const item = activeRow._item;
          const dstItem = this._cache.getItemForIndex(dstRowIndex);
          if (isRowDetails) {
            dstIsRowDetails = dy === 0;
          } else {
            dstIsRowDetails = dy === 1 && this._isDetailsOpened(item) || dy === -1 && dstRowIndex !== currentRowIndex && this._isDetailsOpened(dstItem);
          }
          if (dstIsRowDetails !== isRowDetails && (dy === 1 && dstIsRowDetails || dy === -1 && !dstIsRowDetails)) {
            dstRowIndex = currentRowIndex;
          }
        }
      }
      this._ensureScrolledToIndex(dstRowIndex);
      this._focusedItemIndex = dstRowIndex;
      this.toggleAttribute("navigating", true);
      return {
        dstRow: [...activeRowGroup.children].find((el) => !el.hidden && el.index === dstRowIndex),
        dstIsRowDetails
      };
    }
    _onCellNavigation(activeCell, dx, dy) {
      const activeRow = activeCell.parentNode;
      const { dstRow, dstIsRowDetails } = this.__navigateRows(dy, activeRow, activeCell);
      if (!dstRow) {
        return;
      }
      const columnIndex = this.__getIndexOfChildElement(activeCell);
      const isCurrentCellRowDetails = this.__isDetailsCell(activeCell);
      const activeRowGroup = activeRow.parentNode;
      const currentRowIndex = this.__getIndexInGroup(activeRow, this._focusedItemIndex);
      if (this._focusedColumnOrder === void 0) {
        if (isCurrentCellRowDetails) {
          this._focusedColumnOrder = 0;
        } else {
          this._focusedColumnOrder = this._getColumns(activeRowGroup, currentRowIndex).filter((c3) => !c3.hidden)[columnIndex]._order;
        }
      }
      if (dstIsRowDetails) {
        const dstCell = [...dstRow.children].find((el) => this.__isDetailsCell(el));
        dstCell.focus();
      } else {
        const dstRowIndex = this.__getIndexInGroup(dstRow, this._focusedItemIndex);
        const dstColumns = this._getColumns(activeRowGroup, dstRowIndex).filter((c3) => !c3.hidden);
        const dstSortedColumnOrders = dstColumns.map((c3) => c3._order).sort((b2, a3) => b2 - a3);
        const maxOrderedColumnIndex = dstSortedColumnOrders.length - 1;
        const orderedColumnIndex = dstSortedColumnOrders.indexOf(
          dstSortedColumnOrders.slice(0).sort((b2, a3) => Math.abs(b2 - this._focusedColumnOrder) - Math.abs(a3 - this._focusedColumnOrder))[0]
        );
        const dstOrderedColumnIndex = dy === 0 && isCurrentCellRowDetails ? orderedColumnIndex : Math.max(0, Math.min(orderedColumnIndex + dx, maxOrderedColumnIndex));
        if (dstOrderedColumnIndex !== orderedColumnIndex) {
          this._focusedColumnOrder = void 0;
        }
        const columnIndexByOrder = dstColumns.reduce((acc, col, i5) => {
          acc[col._order] = i5;
          return acc;
        }, {});
        const dstColumnIndex = columnIndexByOrder[dstSortedColumnOrders[dstOrderedColumnIndex]];
        const dstCell = dstRow.children[dstColumnIndex];
        this._scrollHorizontallyToCell(dstCell);
        dstCell.focus();
      }
    }
    _onInteractionKeyDown(e9, key) {
      const localTarget = e9.composedPath()[0];
      const localTargetIsTextInput = localTarget.localName === "input" && !/^(button|checkbox|color|file|image|radio|range|reset|submit)$/i.test(localTarget.type);
      let wantInteracting;
      switch (key) {
        case "Enter":
          wantInteracting = this.interacting ? !localTargetIsTextInput : true;
          break;
        case "Escape":
          wantInteracting = false;
          break;
        case "F2":
          wantInteracting = !this.interacting;
          break;
        default:
          break;
      }
      const { cell } = this._getGridEventLocation(e9);
      if (this.interacting !== wantInteracting && cell !== null) {
        if (wantInteracting) {
          const focusTarget = cell._content.querySelector("[focus-target]") || [...cell._content.querySelectorAll("*")].find((node) => this._isFocusable(node));
          if (focusTarget) {
            e9.preventDefault();
            focusTarget.focus();
            this._setInteracting(true);
            this.toggleAttribute("navigating", false);
          }
        } else {
          e9.preventDefault();
          this._focusedColumnOrder = void 0;
          cell.focus();
          this._setInteracting(false);
          this.toggleAttribute("navigating", true);
        }
      }
    }
    _predictFocusStepTarget(srcElement, step) {
      const tabOrder = [
        this.$.table,
        this._headerFocusable,
        this._itemsFocusable,
        this._footerFocusable,
        this.$.focusexit
      ];
      let index = tabOrder.indexOf(srcElement);
      index += step;
      while (index >= 0 && index <= tabOrder.length - 1) {
        let rowElement = tabOrder[index];
        if (rowElement && !this.__rowFocusMode) {
          rowElement = tabOrder[index].parentNode;
        }
        if (!rowElement || rowElement.hidden) {
          index += step;
        } else {
          break;
        }
      }
      return tabOrder[index];
    }
    _onTabKeyDown(e9) {
      const focusTarget = this._predictFocusStepTarget(e9.composedPath()[0], e9.shiftKey ? -1 : 1);
      if (!focusTarget) {
        return;
      }
      e9.stopPropagation();
      if (focusTarget === this.$.table) {
        this.$.table.focus();
      } else if (focusTarget === this.$.focusexit) {
        this.$.focusexit.focus();
      } else if (focusTarget === this._itemsFocusable) {
        let itemsFocusTarget = focusTarget;
        const targetRow = this.__isRow(focusTarget) ? focusTarget : focusTarget.parentNode;
        this._ensureScrolledToIndex(this._focusedItemIndex);
        if (targetRow.index !== this._focusedItemIndex && this.__isCell(focusTarget)) {
          const columnIndex = Array.from(targetRow.children).indexOf(this._itemsFocusable);
          const focusedItemRow = Array.from(this.$.items.children).find(
            (row) => !row.hidden && row.index === this._focusedItemIndex
          );
          if (focusedItemRow) {
            itemsFocusTarget = focusedItemRow.children[columnIndex];
          }
        }
        e9.preventDefault();
        itemsFocusTarget.focus();
      } else {
        e9.preventDefault();
        focusTarget.focus();
      }
      this.toggleAttribute("navigating", true);
    }
    _onSpaceKeyDown(e9) {
      e9.preventDefault();
      const element = e9.composedPath()[0];
      const isRow = this.__isRow(element);
      if (isRow || !element._content || !element._content.firstElementChild) {
        this.dispatchEvent(
          new CustomEvent(isRow ? "row-activate" : "cell-activate", {
            detail: {
              model: this.__getRowModel(isRow ? element : element.parentElement)
            }
          })
        );
      }
    }
    _onKeyUp(e9) {
      if (!/^( |SpaceBar)$/.test(e9.key) || this.interacting) {
        return;
      }
      e9.preventDefault();
      const cell = e9.composedPath()[0];
      if (cell._content && cell._content.firstElementChild) {
        const wasNavigating = this.hasAttribute("navigating");
        cell._content.firstElementChild.click();
        this.toggleAttribute("navigating", wasNavigating);
      }
    }
    _onFocusIn(e9) {
      if (!this._isMousedown) {
        this.toggleAttribute("navigating", true);
      }
      const rootTarget = e9.composedPath()[0];
      if (rootTarget === this.$.table || rootTarget === this.$.focusexit) {
        this._predictFocusStepTarget(rootTarget, rootTarget === this.$.table ? 1 : -1).focus();
        this._setInteracting(false);
      } else {
        this._detectInteracting(e9);
      }
    }
    _onFocusOut(e9) {
      this.toggleAttribute("navigating", false);
      this._detectInteracting(e9);
    }
    _onContentFocusIn(e9) {
      const { section, cell, row } = this._getGridEventLocation(e9);
      this._detectInteracting(e9);
      if (section && (cell || row)) {
        this._activeRowGroup = section;
        if (this.$.header === section) {
          this._headerFocusable = this.__rowFocusMode ? row : cell;
        } else if (this.$.items === section) {
          this._itemsFocusable = this.__rowFocusMode ? row : cell;
        } else if (this.$.footer === section) {
          this._footerFocusable = this.__rowFocusMode ? row : cell;
        }
        if (cell) {
          const context = this.getEventContext(e9);
          cell.dispatchEvent(new CustomEvent("cell-focus", { bubbles: true, composed: true, detail: { context } }));
        }
      }
      this._detectFocusedItemIndex(e9);
    }
    _detectInteracting(e9) {
      const isInteracting = e9.composedPath().some((el) => el.localName === "vaadin-grid-cell-content");
      this._setInteracting(isInteracting);
      this.__updateHorizontalScrollPosition();
    }
    _detectFocusedItemIndex(e9) {
      const { section, row } = this._getGridEventLocation(e9);
      if (section === this.$.items) {
        this._focusedItemIndex = row.index;
      }
    }
    _updateGridSectionFocusTarget(focusTarget) {
      if (!focusTarget) {
        return;
      }
      const section = this._getGridSectionFromFocusTarget(focusTarget);
      const isInteractingWithinActiveSection = this.interacting && section === this._activeRowGroup;
      focusTarget.tabIndex = isInteractingWithinActiveSection ? -1 : 0;
    }
    _preventScrollerRotatingCellFocus(row, index) {
      if (row.index === this._focusedItemIndex && this.hasAttribute("navigating") && this._activeRowGroup === this.$.items) {
        this._navigatingIsHidden = true;
        this.toggleAttribute("navigating", false);
      }
      if (index === this._focusedItemIndex && this._navigatingIsHidden) {
        this._navigatingIsHidden = false;
        this.toggleAttribute("navigating", true);
      }
    }
    _getColumns(rowGroup, rowIndex) {
      let columnTreeLevel = this._columnTree.length - 1;
      if (rowGroup === this.$.header) {
        columnTreeLevel = rowIndex;
      } else if (rowGroup === this.$.footer) {
        columnTreeLevel = this._columnTree.length - 1 - rowIndex;
      }
      return this._columnTree[columnTreeLevel];
    }
    __isValidFocusable(element) {
      return this.$.table.contains(element) && element.offsetHeight;
    }
    _resetKeyboardNavigation() {
      ["header", "footer"].forEach((section) => {
        if (!this.__isValidFocusable(this[`_${section}Focusable`])) {
          const firstVisibleRow = [...this.$[section].children].find((row) => row.offsetHeight);
          const firstVisibleCell = firstVisibleRow ? [...firstVisibleRow.children].find((cell) => !cell.hidden) : null;
          if (firstVisibleRow && firstVisibleCell) {
            this[`_${section}Focusable`] = this.__rowFocusMode ? firstVisibleRow : firstVisibleCell;
          }
        }
      });
      if (!this.__isValidFocusable(this._itemsFocusable) && this.$.items.firstElementChild) {
        const firstVisibleRow = this.__getFirstVisibleItem();
        const firstVisibleCell = firstVisibleRow ? [...firstVisibleRow.children].find((cell) => !cell.hidden) : null;
        if (firstVisibleCell && firstVisibleRow) {
          delete this._focusedColumnOrder;
          this._itemsFocusable = this.__rowFocusMode ? firstVisibleRow : firstVisibleCell;
        }
      } else {
        this.__updateItemsFocusable();
      }
    }
    _scrollHorizontallyToCell(dstCell) {
      if (dstCell.hasAttribute("frozen") || dstCell.hasAttribute("frozen-to-end") || this.__isDetailsCell(dstCell)) {
        return;
      }
      const dstCellRect = dstCell.getBoundingClientRect();
      const dstRow = dstCell.parentNode;
      const dstCellIndex = Array.from(dstRow.children).indexOf(dstCell);
      const tableRect = this.$.table.getBoundingClientRect();
      let leftBoundary = tableRect.left, rightBoundary = tableRect.right;
      for (let i5 = dstCellIndex - 1; i5 >= 0; i5--) {
        const cell = dstRow.children[i5];
        if (cell.hasAttribute("hidden") || this.__isDetailsCell(cell)) {
          continue;
        }
        if (cell.hasAttribute("frozen") || cell.hasAttribute("frozen-to-end")) {
          leftBoundary = cell.getBoundingClientRect().right;
          break;
        }
      }
      for (let i5 = dstCellIndex + 1; i5 < dstRow.children.length; i5++) {
        const cell = dstRow.children[i5];
        if (cell.hasAttribute("hidden") || this.__isDetailsCell(cell)) {
          continue;
        }
        if (cell.hasAttribute("frozen") || cell.hasAttribute("frozen-to-end")) {
          rightBoundary = cell.getBoundingClientRect().left;
          break;
        }
      }
      if (dstCellRect.left < leftBoundary) {
        this.$.table.scrollLeft += Math.round(dstCellRect.left - leftBoundary);
      }
      if (dstCellRect.right > rightBoundary) {
        this.$.table.scrollLeft += Math.round(dstCellRect.right - rightBoundary);
      }
    }
    _getGridEventLocation(e9) {
      const path = e9.composedPath();
      const tableIndex = path.indexOf(this.$.table);
      const section = tableIndex >= 1 ? path[tableIndex - 1] : null;
      const row = tableIndex >= 2 ? path[tableIndex - 2] : null;
      const cell = tableIndex >= 3 ? path[tableIndex - 3] : null;
      return {
        section,
        row,
        cell
      };
    }
    _getGridSectionFromFocusTarget(focusTarget) {
      if (focusTarget === this._headerFocusable) {
        return this.$.header;
      }
      if (focusTarget === this._itemsFocusable) {
        return this.$.items;
      }
      if (focusTarget === this._footerFocusable) {
        return this.$.footer;
      }
      return null;
    }
  };

  // node_modules/@vaadin/grid/src/vaadin-grid-row-details-mixin.js
  var RowDetailsMixin = (superClass) => class RowDetailsMixin extends superClass {
    static get properties() {
      return {
        detailsOpenedItems: {
          type: Array,
          value: () => []
        },
        rowDetailsRenderer: Function,
        _detailsCells: {
          type: Array
        }
      };
    }
    static get observers() {
      return [
        "_detailsOpenedItemsChanged(detailsOpenedItems.*, rowDetailsRenderer)",
        "_rowDetailsRendererChanged(rowDetailsRenderer)"
      ];
    }
    ready() {
      super.ready();
      this._detailsCellResizeObserver = new ResizeObserver((entries) => {
        entries.forEach(({ target: cell }) => {
          this._updateDetailsCellHeight(cell.parentElement);
        });
        this.__virtualizer.__adapter._resizeHandler();
      });
    }
    _rowDetailsRendererChanged(rowDetailsRenderer) {
      if (!rowDetailsRenderer) {
        return;
      }
      if (this._columnTree) {
        Array.from(this.$.items.children).forEach((row) => {
          if (!row.querySelector("[part~=details-cell]")) {
            this._updateRow(row, this._columnTree[this._columnTree.length - 1]);
            const isDetailsOpened = this._isDetailsOpened(row._item);
            this._toggleDetailsCell(row, isDetailsOpened);
          }
        });
      }
    }
    _detailsOpenedItemsChanged(changeRecord, rowDetailsRenderer) {
      if (changeRecord.path === "detailsOpenedItems.length" || !changeRecord.value) {
        return;
      }
      [...this.$.items.children].forEach((row) => {
        if (row.hasAttribute("details-opened")) {
          this._updateItem(row, row._item);
          return;
        }
        if (rowDetailsRenderer && this._isDetailsOpened(row._item)) {
          this._updateItem(row, row._item);
        }
      });
    }
    _configureDetailsCell(cell) {
      cell.setAttribute("part", "cell details-cell");
      cell.toggleAttribute("frozen", true);
      this._detailsCellResizeObserver.observe(cell);
    }
    _toggleDetailsCell(row, detailsOpened) {
      const cell = row.querySelector('[part~="details-cell"]');
      if (!cell) {
        return;
      }
      cell.hidden = !detailsOpened;
      if (cell.hidden) {
        return;
      }
      if (this.rowDetailsRenderer) {
        cell._renderer = this.rowDetailsRenderer;
      }
    }
    _updateDetailsCellHeight(row) {
      const cell = row.querySelector('[part~="details-cell"]');
      if (!cell) {
        return;
      }
      if (cell.hidden) {
        row.style.removeProperty("padding-bottom");
      } else {
        row.style.setProperty("padding-bottom", `${cell.offsetHeight}px`);
      }
    }
    _updateDetailsCellHeights() {
      [...this.$.items.children].forEach((row) => {
        this._updateDetailsCellHeight(row);
      });
    }
    _isDetailsOpened(item) {
      return this.detailsOpenedItems && this._getItemIndexInArray(item, this.detailsOpenedItems) !== -1;
    }
    openItemDetails(item) {
      if (!this._isDetailsOpened(item)) {
        this.detailsOpenedItems = [...this.detailsOpenedItems, item];
      }
    }
    closeItemDetails(item) {
      if (this._isDetailsOpened(item)) {
        this.detailsOpenedItems = this.detailsOpenedItems.filter((i5) => !this._itemsEqual(i5, item));
      }
    }
  };

  // node_modules/@vaadin/component-base/src/resize-mixin.js
  var observer = new ResizeObserver((entries) => {
    setTimeout(() => {
      entries.forEach((entry) => {
        if (entry.target.resizables) {
          entry.target.resizables.forEach((resizable) => {
            resizable._onResize(entry.contentRect);
          });
        } else {
          entry.target._onResize(entry.contentRect);
        }
      });
    });
  });
  var ResizeMixin = dedupingMixin(
    (superclass) => class ResizeMixinClass extends superclass {
      connectedCallback() {
        super.connectedCallback();
        observer.observe(this);
        if (this._observeParent) {
          const parent = this.parentNode instanceof ShadowRoot ? this.parentNode.host : this.parentNode;
          if (!parent.resizables) {
            parent.resizables = /* @__PURE__ */ new Set();
            observer.observe(parent);
          }
          parent.resizables.add(this);
          this.__parent = parent;
        }
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        observer.unobserve(this);
        const parent = this.__parent;
        if (this._observeParent && parent) {
          const resizables = parent.resizables;
          if (resizables) {
            resizables.delete(this);
            if (resizables.size === 0) {
              observer.unobserve(parent);
            }
          }
          this.__parent = null;
        }
      }
      get _observeParent() {
        return false;
      }
      _onResize(_contentRect) {
      }
      notifyResize() {
        console.warn(
          `WARNING: Since Vaadin 23, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.`
        );
      }
    }
  );

  // node_modules/@vaadin/grid/src/vaadin-grid-scroll-mixin.js
  var timeouts = {
    SCROLLING: 500
  };
  var ScrollMixin = (superClass) => class ScrollMixin extends ResizeMixin(superClass) {
    static get properties() {
      return {
        _frozenCells: {
          type: Array,
          value: () => []
        },
        _frozenToEndCells: {
          type: Array,
          value: () => []
        },
        _rowWithFocusedElement: Element
      };
    }
    get _scrollTop() {
      return this.$.table.scrollTop;
    }
    set _scrollTop(top) {
      this.$.table.scrollTop = top;
    }
    get _scrollLeft() {
      return this.$.table.scrollLeft;
    }
    ready() {
      super.ready();
      this.scrollTarget = this.$.table;
      this.$.items.addEventListener("focusin", (e9) => {
        const itemsIndex = e9.composedPath().indexOf(this.$.items);
        this._rowWithFocusedElement = e9.composedPath()[itemsIndex - 1];
      });
      this.$.items.addEventListener("focusout", () => {
        this._rowWithFocusedElement = void 0;
      });
      this.$.table.addEventListener("scroll", () => this._afterScroll());
    }
    _onResize() {
      this._updateOverflow();
      this.__updateHorizontalScrollPosition();
    }
    scrollToIndex(index) {
      index = Math.min(this._effectiveSize - 1, Math.max(0, index));
      this.__virtualizer.scrollToIndex(index);
      this.__scrollIntoViewport(index);
    }
    __scrollIntoViewport(index) {
      const rowElement = [...this.$.items.children].find((child) => child.index === index);
      if (rowElement) {
        const dstRect = rowElement.getBoundingClientRect();
        const footerTop = this.$.footer.getBoundingClientRect().top;
        const headerBottom = this.$.header.getBoundingClientRect().bottom;
        if (dstRect.bottom > footerTop) {
          this.$.table.scrollTop += dstRect.bottom - footerTop;
        } else if (dstRect.top < headerBottom) {
          this.$.table.scrollTop -= headerBottom - dstRect.top;
        }
      }
    }
    _scheduleScrolling() {
      if (!this._scrollingFrame) {
        this._scrollingFrame = requestAnimationFrame(() => this.$.scroller.toggleAttribute("scrolling", true));
      }
      this._debounceScrolling = Debouncer.debounce(this._debounceScrolling, timeOut.after(timeouts.SCROLLING), () => {
        cancelAnimationFrame(this._scrollingFrame);
        delete this._scrollingFrame;
        this.$.scroller.toggleAttribute("scrolling", false);
      });
    }
    _afterScroll() {
      this.__updateHorizontalScrollPosition();
      if (!this.hasAttribute("reordering")) {
        this._scheduleScrolling();
      }
      this._updateOverflow();
    }
    _updateOverflow() {
      let overflow = "";
      const table = this.$.table;
      if (table.scrollTop < table.scrollHeight - table.clientHeight) {
        overflow += " bottom";
      }
      if (table.scrollTop > 0) {
        overflow += " top";
      }
      const scrollLeft = this.__getNormalizedScrollLeft(table);
      if (scrollLeft > 0) {
        overflow += " start";
      }
      if (scrollLeft < table.scrollWidth - table.clientWidth) {
        overflow += " end";
      }
      if (this.__isRTL) {
        overflow = overflow.replace(/start|end/gi, (matched) => {
          return matched === "start" ? "end" : "start";
        });
      }
      if (table.scrollLeft < table.scrollWidth - table.clientWidth) {
        overflow += " right";
      }
      if (table.scrollLeft > 0) {
        overflow += " left";
      }
      this._debounceOverflow = Debouncer.debounce(this._debounceOverflow, animationFrame, () => {
        const value = overflow.trim();
        if (value.length > 0 && this.getAttribute("overflow") !== value) {
          this.setAttribute("overflow", value);
        } else if (value.length === 0 && this.hasAttribute("overflow")) {
          this.removeAttribute("overflow");
        }
      });
    }
    _frozenCellsChanged() {
      this._debouncerCacheElements = Debouncer.debounce(this._debouncerCacheElements, microTask2, () => {
        Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach((cell) => {
          cell.style.transform = "";
        });
        this._frozenCells = Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]"));
        this._frozenToEndCells = Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen-to-end]"));
        this.__updateHorizontalScrollPosition();
      });
      this._updateFrozenColumn();
    }
    _updateFrozenColumn() {
      if (!this._columnTree) {
        return;
      }
      const columnsRow = this._columnTree[this._columnTree.length - 1].slice(0);
      columnsRow.sort((a3, b2) => {
        return a3._order - b2._order;
      });
      let lastFrozen;
      let firstFrozenToEnd;
      for (let i5 = 0; i5 < columnsRow.length; i5++) {
        const col = columnsRow[i5];
        col._lastFrozen = false;
        col._firstFrozenToEnd = false;
        if (firstFrozenToEnd === void 0 && col.frozenToEnd && !col.hidden) {
          firstFrozenToEnd = i5;
        }
        if (col.frozen && !col.hidden) {
          lastFrozen = i5;
        }
      }
      if (lastFrozen !== void 0) {
        columnsRow[lastFrozen]._lastFrozen = true;
      }
      if (firstFrozenToEnd !== void 0) {
        columnsRow[firstFrozenToEnd]._firstFrozenToEnd = true;
      }
    }
    __updateHorizontalScrollPosition() {
      const scrollWidth = this.$.table.scrollWidth;
      const clientWidth = this.$.table.clientWidth;
      const scrollLeft = Math.max(0, this.$.table.scrollLeft);
      const normalizedScrollLeft = this.__getNormalizedScrollLeft(this.$.table);
      const transform = `translate(${-scrollLeft}px, 0)`;
      this.$.header.style.transform = transform;
      this.$.footer.style.transform = transform;
      this.$.items.style.transform = transform;
      const x2 = this.__isRTL ? normalizedScrollLeft + clientWidth - scrollWidth : scrollLeft;
      const transformFrozen = `translate(${x2}px, 0)`;
      for (let i5 = 0; i5 < this._frozenCells.length; i5++) {
        this._frozenCells[i5].style.transform = transformFrozen;
      }
      const remaining = this.__isRTL ? normalizedScrollLeft : scrollLeft + clientWidth - scrollWidth;
      const transformFrozenToEnd = `translate(${remaining}px, 0)`;
      for (let i5 = 0; i5 < this._frozenToEndCells.length; i5++) {
        this._frozenToEndCells[i5].style.transform = transformFrozenToEnd;
      }
      if (this.hasAttribute("navigating") && this.__rowFocusMode) {
        this.$.table.style.setProperty("--_grid-horizontal-scroll-position", `${-x2}px`);
      }
    }
  };

  // node_modules/@vaadin/grid/src/vaadin-grid-selection-mixin.js
  var SelectionMixin = (superClass) => class SelectionMixin extends superClass {
    static get properties() {
      return {
        selectedItems: {
          type: Object,
          notify: true,
          value: () => []
        },
        __selectedKeys: {
          type: Object,
          computed: "__computeSelectedKeys(itemIdPath, selectedItems.*)"
        }
      };
    }
    static get observers() {
      return ["__selectedItemsChanged(itemIdPath, selectedItems.*)"];
    }
    _isSelected(item) {
      return this.__selectedKeys.has(this.getItemId(item));
    }
    selectItem(item) {
      if (!this._isSelected(item)) {
        this.selectedItems = [...this.selectedItems, item];
      }
    }
    deselectItem(item) {
      if (this._isSelected(item)) {
        this.selectedItems = this.selectedItems.filter((i5) => !this._itemsEqual(i5, item));
      }
    }
    _toggleItem(item) {
      if (!this._isSelected(item)) {
        this.selectItem(item);
      } else {
        this.deselectItem(item);
      }
    }
    __selectedItemsChanged() {
      this.requestContentUpdate();
    }
    __computeSelectedKeys(itemIdPath, selectedItems) {
      const selected = selectedItems.base || [];
      const selectedKeys = /* @__PURE__ */ new Set();
      selected.forEach((item) => {
        selectedKeys.add(this.getItemId(item));
      });
      return selectedKeys;
    }
  };

  // node_modules/@vaadin/grid/src/vaadin-grid-sort-mixin.js
  var defaultMultiSortPriority = "prepend";
  var SortMixin = (superClass) => class SortMixin extends superClass {
    static get properties() {
      return {
        multiSort: {
          type: Boolean,
          value: false
        },
        multiSortPriority: {
          type: String,
          value: () => defaultMultiSortPriority
        },
        _sorters: {
          type: Array,
          value: () => []
        },
        _previousSorters: {
          type: Array,
          value: () => []
        }
      };
    }
    static setDefaultMultiSortPriority(priority) {
      defaultMultiSortPriority = ["append", "prepend"].includes(priority) ? priority : "prepend";
    }
    ready() {
      super.ready();
      this.addEventListener("sorter-changed", this._onSorterChanged);
    }
    _onSorterChanged(e9) {
      const sorter = e9.target;
      e9.stopPropagation();
      sorter._grid = this;
      this.__updateSorter(sorter);
      this.__applySorters();
    }
    __removeSorters(sortersToRemove) {
      if (sortersToRemove.length === 0) {
        return;
      }
      this._sorters = this._sorters.filter((sorter) => sortersToRemove.indexOf(sorter) < 0);
      if (this.multiSort) {
        this.__updateSortOrders();
      }
      this.__applySorters();
    }
    __updateSortOrders() {
      this._sorters.forEach((sorter, index) => {
        sorter._order = this._sorters.length > 1 ? index : null;
      });
    }
    __appendSorter(sorter) {
      if (!sorter.direction) {
        this._removeArrayItem(this._sorters, sorter);
      } else if (!this._sorters.includes(sorter)) {
        this._sorters.push(sorter);
      }
      this.__updateSortOrders();
    }
    __prependSorter(sorter) {
      this._removeArrayItem(this._sorters, sorter);
      if (sorter.direction) {
        this._sorters.unshift(sorter);
      }
      this.__updateSortOrders();
    }
    __updateSorter(sorter) {
      if (!sorter.direction && this._sorters.indexOf(sorter) === -1) {
        return;
      }
      sorter._order = null;
      if (this.multiSort) {
        if (this.multiSortPriority === "append") {
          this.__appendSorter(sorter);
        } else {
          this.__prependSorter(sorter);
        }
      } else if (sorter.direction) {
        const otherSorters = this._sorters.filter((s5) => s5 !== sorter);
        this._sorters = [sorter];
        otherSorters.forEach((sorter2) => {
          sorter2._order = null;
          sorter2.direction = null;
        });
      }
    }
    __applySorters() {
      if (this.dataProvider && this.isAttached && JSON.stringify(this._previousSorters) !== JSON.stringify(this._mapSorters())) {
        this.clearCache();
      }
      this._a11yUpdateSorters();
      this._previousSorters = this._mapSorters();
    }
    _mapSorters() {
      return this._sorters.map((sorter) => {
        return {
          path: sorter.path,
          direction: sorter.direction
        };
      });
    }
    _removeArrayItem(array, item) {
      const index = array.indexOf(item);
      if (index > -1) {
        array.splice(index, 1);
      }
    }
  };

  // node_modules/@vaadin/grid/src/vaadin-grid-styling-mixin.js
  var StylingMixin = (superClass) => class StylingMixin extends superClass {
    static get properties() {
      return {
        cellClassNameGenerator: Function
      };
    }
    static get observers() {
      return ["__cellClassNameGeneratorChanged(cellClassNameGenerator)"];
    }
    __cellClassNameGeneratorChanged() {
      this.generateCellClassNames();
    }
    generateCellClassNames() {
      Array.from(this.$.items.children).filter((row) => !row.hidden && !row.hasAttribute("loading")).forEach((row) => this._generateCellClassNames(row, this.__getRowModel(row)));
    }
    _generateCellClassNames(row, model) {
      Array.from(row.children).forEach((cell) => {
        if (cell.__generatedClasses) {
          cell.__generatedClasses.forEach((className) => cell.classList.remove(className));
        }
        if (this.cellClassNameGenerator) {
          const result = this.cellClassNameGenerator(cell._column, model);
          cell.__generatedClasses = result && result.split(" ").filter((className) => className.length > 0);
          if (cell.__generatedClasses) {
            cell.__generatedClasses.forEach((className) => cell.classList.add(className));
          }
        }
      });
    }
  };

  // node_modules/@vaadin/grid/src/vaadin-grid.js
  var Grid = class extends ElementMixin2(
    ThemableMixin(
      DataProviderMixin(
        ArrayDataProviderMixin(
          DynamicColumnsMixin(
            ActiveItemMixin(
              ScrollMixin(
                SelectionMixin(
                  SortMixin(
                    RowDetailsMixin(
                      KeyboardNavigationMixin(
                        A11yMixin(
                          FilterMixin(
                            ColumnReorderingMixin(
                              ColumnResizingMixin(
                                EventContextMixin(DragAndDropMixin(StylingMixin(TabindexMixin(PolymerElement))))
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  ) {
    static get template() {
      return html`
      <div
        id="scroller"
        safari$="[[_safari]]"
        ios$="[[_ios]]"
        loading$="[[loading]]"
        column-reordering-allowed$="[[columnReorderingAllowed]]"
      >
        <table id="table" role="treegrid" aria-multiselectable="true" tabindex="0">
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost"></div>
      </div>

      <div id="focusexit" tabindex="0"></div>
    `;
    }
    static get is() {
      return "vaadin-grid";
    }
    static get observers() {
      return [
        "_columnTreeChanged(_columnTree, _columnTree.*)",
        "_effectiveSizeChanged(_effectiveSize, __virtualizer, _hasData, _columnTree)"
      ];
    }
    static get properties() {
      return {
        _safari: {
          type: Boolean,
          value: isSafari
        },
        _ios: {
          type: Boolean,
          value: isIOS
        },
        _firefox: {
          type: Boolean,
          value: isFirefox
        },
        _android: {
          type: Boolean,
          value: isAndroid
        },
        _touchDevice: {
          type: Boolean,
          value: isTouch
        },
        allRowsVisible: {
          type: Boolean,
          value: false,
          reflectToAttribute: true
        },
        _recalculateColumnWidthOnceLoadingFinished: {
          type: Boolean,
          value: true
        },
        isAttached: {
          value: false
        },
        __gridElement: {
          type: Boolean,
          value: true
        }
      };
    }
    constructor() {
      super();
      this.addEventListener("animationend", this._onAnimationEnd);
    }
    connectedCallback() {
      super.connectedCallback();
      this.isAttached = true;
      this.recalculateColumnWidths();
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.isAttached = false;
    }
    __getFirstVisibleItem() {
      return this._getVisibleRows().find((row) => this._isInViewport(row));
    }
    get _firstVisibleIndex() {
      const firstVisibleItem = this.__getFirstVisibleItem();
      return firstVisibleItem ? firstVisibleItem.index : void 0;
    }
    __getLastVisibleItem() {
      return this._getVisibleRows().reverse().find((row) => this._isInViewport(row));
    }
    get _lastVisibleIndex() {
      const lastVisibleItem = this.__getLastVisibleItem();
      return lastVisibleItem ? lastVisibleItem.index : void 0;
    }
    _isInViewport(item) {
      const scrollTargetRect = this.$.table.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      const headerHeight = this.$.header.getBoundingClientRect().height;
      const footerHeight = this.$.footer.getBoundingClientRect().height;
      return itemRect.bottom > scrollTargetRect.top + headerHeight && itemRect.top < scrollTargetRect.bottom - footerHeight;
    }
    _getVisibleRows() {
      return Array.from(this.$.items.children).filter((item) => !item.hidden).sort((a3, b2) => a3.index - b2.index);
    }
    ready() {
      super.ready();
      this.__virtualizer = new Virtualizer({
        createElements: this._createScrollerRows.bind(this),
        updateElement: this._updateScrollerItem.bind(this),
        scrollContainer: this.$.items,
        scrollTarget: this.$.table,
        reorderElements: true
      });
      new ResizeObserver(() => setTimeout(() => this.__updateFooterPositioning())).observe(this.$.footer);
      processTemplates(this);
    }
    attributeChangedCallback(name, oldValue, newValue) {
      super.attributeChangedCallback(name, oldValue, newValue);
      if (name === "dir") {
        this.__isRTL = newValue === "rtl";
      }
    }
    __getBodyCellCoordinates(cell) {
      if (this.$.items.contains(cell) && cell.localName === "td") {
        return {
          item: cell.parentElement._item,
          column: cell._column
        };
      }
    }
    __focusBodyCell({ item, column }) {
      const row = this._getVisibleRows().find((row2) => row2._item === item);
      const cell = row && [...row.children].find((cell2) => cell2._column === column);
      if (cell) {
        cell.focus();
      }
    }
    _effectiveSizeChanged(effectiveSize, virtualizer, hasData, columnTree) {
      if (virtualizer && hasData && columnTree) {
        const cell = this.shadowRoot.activeElement;
        const cellCoordinates = this.__getBodyCellCoordinates(cell);
        virtualizer.size = effectiveSize;
        virtualizer.update();
        virtualizer.flush();
        if (cellCoordinates && cell.parentElement.hidden) {
          this.__focusBodyCell(cellCoordinates);
        }
        this._resetKeyboardNavigation();
      }
    }
    __hasRowsWithClientHeight() {
      return !!Array.from(this.$.items.children).filter((row) => row.clientHeight).length;
    }
    __itemsReceived() {
      if (this._recalculateColumnWidthOnceLoadingFinished && !this._cache.isLoading() && this.__hasRowsWithClientHeight()) {
        this._recalculateColumnWidthOnceLoadingFinished = false;
        this.recalculateColumnWidths();
      }
    }
    __getIntrinsicWidth(col) {
      const initialWidth = col.width;
      const initialFlexGrow = col.flexGrow;
      col.width = "auto";
      col.flexGrow = 0;
      const width = col._allCells.filter((cell) => {
        return !this.$.items.contains(cell) || this._isInViewport(cell.parentElement);
      }).reduce((width2, cell) => {
        return Math.max(width2, cell.offsetWidth + 1);
      }, 0);
      col.flexGrow = initialFlexGrow;
      col.width = initialWidth;
      return width;
    }
    __getDistributedWidth(col, innerColumn) {
      if (col == null || col === this) {
        return 0;
      }
      const columnWidth = Math.max(this.__getIntrinsicWidth(col), this.__getDistributedWidth(col.parentElement, col));
      if (!innerColumn) {
        return columnWidth;
      }
      const columnGroup = col;
      const columnGroupWidth = columnWidth;
      const sumOfWidthOfAllChildColumns = columnGroup._visibleChildColumns.map((col2) => this.__getIntrinsicWidth(col2)).reduce((sum, curr) => sum + curr, 0);
      const extraNecessarySpaceForGridColumnGroup = Math.max(0, columnGroupWidth - sumOfWidthOfAllChildColumns);
      const proportionOfExtraSpace = this.__getIntrinsicWidth(innerColumn) / sumOfWidthOfAllChildColumns;
      const shareOfInnerColumnFromNecessaryExtraSpace = proportionOfExtraSpace * extraNecessarySpaceForGridColumnGroup;
      return this.__getIntrinsicWidth(innerColumn) + shareOfInnerColumnFromNecessaryExtraSpace;
    }
    _recalculateColumnWidths(cols) {
      this.__virtualizer.flush();
      if (this._debouncerHiddenChanged) {
        this._debouncerHiddenChanged.flush();
      }
      cols.forEach((col) => {
        col.width = `${this.__getDistributedWidth(col)}px`;
      });
    }
    recalculateColumnWidths() {
      if (!this._columnTree) {
        return;
      }
      if (this._cache.isLoading()) {
        this._recalculateColumnWidthOnceLoadingFinished = true;
      } else {
        const cols = this._getColumns().filter((col) => !col.hidden && col.autoWidth);
        this._recalculateColumnWidths(cols);
      }
    }
    _createScrollerRows(count) {
      const rows = [];
      for (let i5 = 0; i5 < count; i5++) {
        const row = document.createElement("tr");
        row.setAttribute("part", "row");
        row.setAttribute("role", "row");
        row.setAttribute("tabindex", "-1");
        if (this._columnTree) {
          this._updateRow(row, this._columnTree[this._columnTree.length - 1], "body", false, true);
        }
        rows.push(row);
      }
      if (this._columnTree) {
        this._columnTree[this._columnTree.length - 1].forEach(
          (c3) => c3.isConnected && c3.notifyPath && c3.notifyPath("_cells.*", c3._cells)
        );
      }
      beforeNextRender(this, () => {
        this._updateFirstAndLastColumn();
        this._resetKeyboardNavigation();
        this._afterScroll();
        this.__itemsReceived();
      });
      return rows;
    }
    _createCell(tagName) {
      const contentId = this._contentIndex = this._contentIndex + 1 || 0;
      const slotName = `vaadin-grid-cell-content-${contentId}`;
      const cellContent = document.createElement("vaadin-grid-cell-content");
      cellContent.setAttribute("slot", slotName);
      const cell = document.createElement(tagName);
      cell.id = slotName.replace("-content-", "-");
      cell.setAttribute("tabindex", "-1");
      cell.setAttribute("role", tagName === "td" ? "gridcell" : "columnheader");
      const slot = document.createElement("slot");
      slot.setAttribute("name", slotName);
      cell.appendChild(slot);
      cell._content = cellContent;
      cellContent.addEventListener("mousedown", () => {
        if (isChrome) {
          const mouseUpListener = (event) => {
            const contentContainsFocusedElement = cellContent.contains(this.getRootNode().activeElement);
            const mouseUpWithinCell = event.composedPath().includes(cellContent);
            if (!contentContainsFocusedElement && mouseUpWithinCell) {
              cell.focus();
            }
            document.removeEventListener("mouseup", mouseUpListener, true);
          };
          document.addEventListener("mouseup", mouseUpListener, true);
        } else {
          setTimeout(() => {
            if (!cellContent.contains(this.getRootNode().activeElement)) {
              cell.focus();
            }
          });
        }
      });
      return cell;
    }
    _updateRow(row, columns, section, isColumnRow, noNotify) {
      section = section || "body";
      const contentsFragment = document.createDocumentFragment();
      Array.from(row.children).forEach((cell) => {
        cell._vacant = true;
      });
      row.innerHTML = "";
      columns.filter((column) => !column.hidden).forEach((column, index, cols) => {
        let cell;
        if (section === "body") {
          column._cells = column._cells || [];
          cell = column._cells.filter((cell2) => cell2._vacant)[0];
          if (!cell) {
            cell = this._createCell("td");
            column._cells.push(cell);
          }
          cell.setAttribute("part", "cell body-cell");
          row.appendChild(cell);
          if (index === cols.length - 1 && this.rowDetailsRenderer) {
            this._detailsCells = this._detailsCells || [];
            const detailsCell = this._detailsCells.filter((cell2) => cell2._vacant)[0] || this._createCell("td");
            if (this._detailsCells.indexOf(detailsCell) === -1) {
              this._detailsCells.push(detailsCell);
            }
            if (!detailsCell._content.parentElement) {
              contentsFragment.appendChild(detailsCell._content);
            }
            this._configureDetailsCell(detailsCell);
            row.appendChild(detailsCell);
            this._a11ySetRowDetailsCell(row, detailsCell);
            detailsCell._vacant = false;
          }
          if (column.notifyPath && !noNotify) {
            column.notifyPath("_cells.*", column._cells);
          }
        } else {
          const tagName = section === "header" ? "th" : "td";
          if (isColumnRow || column.localName === "vaadin-grid-column-group") {
            cell = column[`_${section}Cell`] || this._createCell(tagName);
            cell._column = column;
            row.appendChild(cell);
            column[`_${section}Cell`] = cell;
          } else {
            column._emptyCells = column._emptyCells || [];
            cell = column._emptyCells.filter((cell2) => cell2._vacant)[0] || this._createCell(tagName);
            cell._column = column;
            row.appendChild(cell);
            if (column._emptyCells.indexOf(cell) === -1) {
              column._emptyCells.push(cell);
            }
          }
          cell.setAttribute("part", `cell ${section}-cell`);
          this.__updateHeaderFooterRowVisibility(row);
        }
        if (!cell._content.parentElement) {
          contentsFragment.appendChild(cell._content);
        }
        cell._vacant = false;
        cell._column = column;
      });
      this.appendChild(contentsFragment);
      this._frozenCellsChanged();
      this._updateFirstAndLastColumnForRow(row);
    }
    __updateHeaderFooterRowVisibility(row) {
      if (!row) {
        return;
      }
      const visibleRowCells = Array.from(row.children).filter((cell) => {
        const column = cell._column;
        if (column._emptyCells && column._emptyCells.indexOf(cell) > -1) {
          return false;
        }
        if (row.parentElement === this.$.header) {
          if (column.headerRenderer) {
            return true;
          }
          if (column.header === null) {
            return false;
          }
          if (column.path || column.header !== void 0) {
            return true;
          }
        } else if (column.footerRenderer) {
          return true;
        }
        return false;
      });
      if (row.hidden !== !visibleRowCells.length) {
        row.hidden = !visibleRowCells.length;
      }
      this._resetKeyboardNavigation();
    }
    _updateScrollerItem(row, index) {
      this._preventScrollerRotatingCellFocus(row, index);
      if (!this._columnTree) {
        return;
      }
      row.toggleAttribute("first", index === 0);
      row.toggleAttribute("last", index === this._effectiveSize - 1);
      row.toggleAttribute("odd", index % 2);
      this._a11yUpdateRowRowindex(row, index);
      this._getItem(index, row);
    }
    _columnTreeChanged(columnTree) {
      this._renderColumnTree(columnTree);
      this.recalculateColumnWidths();
    }
    _renderColumnTree(columnTree) {
      Array.from(this.$.items.children).forEach(
        (row) => this._updateRow(row, columnTree[columnTree.length - 1], null, false, true)
      );
      while (this.$.header.children.length < columnTree.length) {
        const headerRow = document.createElement("tr");
        headerRow.setAttribute("part", "row");
        headerRow.setAttribute("role", "row");
        headerRow.setAttribute("tabindex", "-1");
        this.$.header.appendChild(headerRow);
        const footerRow = document.createElement("tr");
        footerRow.setAttribute("part", "row");
        footerRow.setAttribute("role", "row");
        footerRow.setAttribute("tabindex", "-1");
        this.$.footer.appendChild(footerRow);
      }
      while (this.$.header.children.length > columnTree.length) {
        this.$.header.removeChild(this.$.header.firstElementChild);
        this.$.footer.removeChild(this.$.footer.firstElementChild);
      }
      Array.from(this.$.header.children).forEach(
        (headerRow, index) => this._updateRow(headerRow, columnTree[index], "header", index === columnTree.length - 1)
      );
      Array.from(this.$.footer.children).forEach(
        (footerRow, index) => this._updateRow(footerRow, columnTree[columnTree.length - 1 - index], "footer", index === 0)
      );
      this._updateRow(this.$.sizer, columnTree[columnTree.length - 1]);
      this._resizeHandler();
      this._frozenCellsChanged();
      this._updateFirstAndLastColumn();
      this._resetKeyboardNavigation();
      this._a11yUpdateHeaderRows();
      this._a11yUpdateFooterRows();
      this.__updateFooterPositioning();
      this.generateCellClassNames();
    }
    __updateFooterPositioning() {
      if (this._firefox && parseFloat(navigator.userAgent.match(/Firefox\/(\d{2,3}.\d)/)[1]) < 99) {
        this.$.items.style.paddingBottom = 0;
        if (!this.allRowsVisible) {
          this.$.items.style.paddingBottom = `${this.$.footer.offsetHeight}px`;
        }
      }
    }
    _updateItem(row, item) {
      row._item = item;
      const model = this.__getRowModel(row);
      this._toggleDetailsCell(row, model.detailsOpened);
      this._a11yUpdateRowLevel(row, model.level);
      this._a11yUpdateRowSelected(row, model.selected);
      row.toggleAttribute("expanded", model.expanded);
      row.toggleAttribute("selected", model.selected);
      row.toggleAttribute("details-opened", model.detailsOpened);
      this._generateCellClassNames(row, model);
      this._filterDragAndDrop(row, model);
      Array.from(row.children).forEach((cell) => {
        if (cell._renderer) {
          const owner = cell._column || this;
          cell._renderer.call(owner, cell._content, owner, model);
        }
      });
      this._updateDetailsCellHeight(row);
      this._a11yUpdateRowExpanded(row, model.expanded);
    }
    _resizeHandler() {
      this._updateDetailsCellHeights();
      this.__updateFooterPositioning();
      this.__updateHorizontalScrollPosition();
    }
    _onAnimationEnd(e9) {
      if (e9.animationName.indexOf("vaadin-grid-appear") === 0) {
        e9.stopPropagation();
        this.__itemsReceived();
        requestAnimationFrame(() => {
          this.__scrollToPendingIndex();
        });
      }
    }
    __getRowModel(row) {
      return {
        index: row.index,
        item: row._item,
        level: this._getIndexLevel(row.index),
        expanded: this._isExpanded(row._item),
        selected: this._isSelected(row._item),
        detailsOpened: !!this.rowDetailsRenderer && this._isDetailsOpened(row._item)
      };
    }
    requestContentUpdate() {
      if (this._columnTree) {
        this._columnTree.forEach((level) => {
          level.forEach((column) => {
            if (column._renderHeaderAndFooter) {
              column._renderHeaderAndFooter();
            }
          });
        });
        this.__updateVisibleRows();
      }
    }
    __updateVisibleRows(start, end) {
      if (this.__virtualizer) {
        this.__virtualizer.update(start, end);
      }
    }
    notifyResize() {
      console.warn(
        `WARNING: Since Vaadin 22, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.`
      );
    }
  };
  customElements.define(Grid.is, Grid);

  // node_modules/@vaadin/grid/src/vaadin-grid-column-group.js
  var GridColumnGroup = class extends ColumnBaseMixin(PolymerElement) {
    static get is() {
      return "vaadin-grid-column-group";
    }
    static get properties() {
      return {
        _childColumns: {
          value() {
            return this._getChildColumns(this);
          }
        },
        flexGrow: {
          type: Number,
          readOnly: true
        },
        width: {
          type: String,
          readOnly: true
        },
        _visibleChildColumns: Array,
        _colSpan: Number,
        _rootColumns: Array
      };
    }
    static get observers() {
      return [
        "_groupFrozenChanged(frozen, _rootColumns)",
        "_groupFrozenToEndChanged(frozenToEnd, _rootColumns)",
        "_groupHiddenChanged(hidden)",
        "_colSpanChanged(_colSpan, _headerCell, _footerCell)",
        "_groupOrderChanged(_order, _rootColumns)",
        "_groupReorderStatusChanged(_reorderStatus, _rootColumns)",
        "_groupResizableChanged(resizable, _rootColumns)"
      ];
    }
    connectedCallback() {
      super.connectedCallback();
      this._addNodeObserver();
      this._updateFlexAndWidth();
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      if (this._observer) {
        this._observer.disconnect();
      }
    }
    _columnPropChanged(path, value) {
      if (path === "hidden") {
        this._preventHiddenSynchronization = true;
        this._updateVisibleChildColumns(this._childColumns);
        this._preventHiddenSynchronization = false;
      }
      if (/flexGrow|width|hidden|_childColumns/.test(path)) {
        this._updateFlexAndWidth();
      }
      if (path === "frozen") {
        this.frozen = this.frozen || value;
      }
      if (path === "lastFrozen") {
        this._lastFrozen = this._lastFrozen || value;
      }
      if (path === "frozenToEnd") {
        this.frozenToEnd = this.frozenToEnd || value;
      }
      if (path === "firstFrozenToEnd") {
        this._firstFrozenToEnd = this._firstFrozenToEnd || value;
      }
    }
    _groupOrderChanged(order, rootColumns) {
      if (rootColumns) {
        const _rootColumns = rootColumns.slice(0);
        if (!order) {
          _rootColumns.forEach((column) => {
            column._order = 0;
          });
          return;
        }
        const trailingZeros = /(0+)$/.exec(order).pop().length;
        const childCountDigits = ~~(Math.log(rootColumns.length) / Math.LN10) + 1;
        const scope = 10 ** (trailingZeros - childCountDigits);
        if (_rootColumns[0] && _rootColumns[0]._order) {
          _rootColumns.sort((a3, b2) => a3._order - b2._order);
        }
        updateColumnOrders(_rootColumns, scope, order);
      }
    }
    _groupReorderStatusChanged(reorderStatus, rootColumns) {
      if (reorderStatus === void 0 || rootColumns === void 0) {
        return;
      }
      rootColumns.forEach((column) => {
        column._reorderStatus = reorderStatus;
      });
    }
    _groupResizableChanged(resizable, rootColumns) {
      if (resizable === void 0 || rootColumns === void 0) {
        return;
      }
      rootColumns.forEach((column) => {
        column.resizable = resizable;
      });
    }
    _updateVisibleChildColumns(childColumns) {
      this._visibleChildColumns = Array.prototype.filter.call(childColumns, (col) => !col.hidden);
      this._colSpan = this._visibleChildColumns.length;
      this._updateAutoHidden();
    }
    _updateFlexAndWidth() {
      if (!this._visibleChildColumns) {
        return;
      }
      if (this._visibleChildColumns.length > 0) {
        const width = this._visibleChildColumns.reduce((prev, curr) => {
          prev += ` + ${(curr.width || "0px").replace("calc", "")}`;
          return prev;
        }, "").substring(3);
        this._setWidth(`calc(${width})`);
      } else {
        this._setWidth("0px");
      }
      this._setFlexGrow(Array.prototype.reduce.call(this._visibleChildColumns, (prev, curr) => prev + curr.flexGrow, 0));
    }
    __scheduleAutoFreezeWarning(columns, frozenProp) {
      if (this._grid) {
        const frozenAttr = frozenProp.replace(/([A-Z])/g, "-$1").toLowerCase();
        const firstColumnFrozen = columns[0][frozenProp] || columns[0].hasAttribute(frozenAttr);
        const allSameFrozen = columns.every((column) => {
          return (column[frozenProp] || column.hasAttribute(frozenAttr)) === firstColumnFrozen;
        });
        if (!allSameFrozen) {
          this._grid.__autoFreezeWarningDebouncer = Debouncer.debounce(
            this._grid.__autoFreezeWarningDebouncer,
            animationFrame,
            () => {
              console.warn(
                `WARNING: Joining ${frozenProp} and non-${frozenProp} Grid columns inside the same column group! This will automatically freeze all the joined columns to avoid rendering issues. If this was intentional, consider marking each joined column explicitly as ${frozenProp}. Otherwise, exclude the ${frozenProp} columns from the joined group.`
              );
            }
          );
        }
      }
    }
    _groupFrozenChanged(frozen, rootColumns) {
      if (rootColumns === void 0 || frozen === void 0) {
        return;
      }
      if (frozen !== false) {
        this.__scheduleAutoFreezeWarning(rootColumns, "frozen");
        Array.from(rootColumns).forEach((col) => {
          col.frozen = frozen;
        });
      }
    }
    _groupFrozenToEndChanged(frozenToEnd, rootColumns) {
      if (rootColumns === void 0 || frozenToEnd === void 0) {
        return;
      }
      if (frozenToEnd !== false) {
        this.__scheduleAutoFreezeWarning(rootColumns, "frozenToEnd");
        Array.from(rootColumns).forEach((col) => {
          col.frozenToEnd = frozenToEnd;
        });
      }
    }
    _groupHiddenChanged(hidden) {
      if (hidden || this.__groupHiddenInitialized) {
        this._synchronizeHidden();
      }
      this.__groupHiddenInitialized = true;
    }
    _updateAutoHidden() {
      const wasAutoHidden = this._autoHidden;
      this._autoHidden = (this._visibleChildColumns || []).length === 0;
      if (wasAutoHidden || this._autoHidden) {
        this.hidden = this._autoHidden;
      }
    }
    _synchronizeHidden() {
      if (this._childColumns && !this._preventHiddenSynchronization) {
        this._childColumns.forEach((column) => {
          column.hidden = this.hidden;
        });
      }
    }
    _colSpanChanged(colSpan, headerCell, footerCell) {
      if (headerCell) {
        headerCell.setAttribute("colspan", colSpan);
        if (this._grid) {
          this._grid._a11yUpdateCellColspan(headerCell, colSpan);
        }
      }
      if (footerCell) {
        footerCell.setAttribute("colspan", colSpan);
        if (this._grid) {
          this._grid._a11yUpdateCellColspan(footerCell, colSpan);
        }
      }
    }
    _getChildColumns(el) {
      return FlattenedNodesObserver.getFlattenedNodes(el).filter(this._isColumnElement);
    }
    _addNodeObserver() {
      this._observer = new FlattenedNodesObserver(this, (info) => {
        if (info.addedNodes.filter(this._isColumnElement).length > 0 || info.removedNodes.filter(this._isColumnElement).length > 0) {
          this._preventHiddenSynchronization = true;
          this._rootColumns = this._getChildColumns(this);
          this._childColumns = this._rootColumns;
          this._updateVisibleChildColumns(this._childColumns);
          this._preventHiddenSynchronization = false;
          microTask2.run(() => {
            if (this._grid && this._grid._updateColumnTree) {
              this._grid._updateColumnTree();
            }
          });
        }
      });
      this._observer.flush();
    }
    _isColumnElement(node) {
      return node.nodeType === Node.ELEMENT_NODE && /\bcolumn\b/.test(node.localName);
    }
  };
  customElements.define(GridColumnGroup.is, GridColumnGroup);

  // node_modules/@vaadin/input-container/theme/lumo/vaadin-input-container-styles.js
  registerStyles(
    "vaadin-input-container",
    i`
    :host {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
      padding: 0 calc(0.375em + var(--lumo-border-radius-m) / 4 - 1px);
      font-weight: 500;
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
    }

    /* Used for hover and activation effects */
    :host::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: inherit;
      pointer-events: none;
      background-color: var(--lumo-contrast-50pct);
      opacity: 0;
      transition: transform 0.15s, opacity 0.2s;
      transform-origin: 100% 0;
    }

    ::slotted(:not([slot$='fix'])) {
      cursor: inherit;
      min-height: var(--lumo-text-field-size, var(--lumo-size-m));
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    /* Read-only */
    :host([readonly]) {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly])::after {
      background-color: transparent;
      opacity: 1;
      border: 1px dashed var(--lumo-contrast-30pct);
    }

    /* Disabled */
    :host([disabled]) {
      background-color: var(--lumo-contrast-5pct);
    }

    :host([disabled]) ::slotted(*) {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    /* Invalid */
    :host([invalid]) {
      background-color: var(--lumo-error-color-10pct);
    }

    :host([invalid])::after {
      background-color: var(--lumo-error-color-50pct);
    }

    /* Slotted icons */
    ::slotted(iron-icon),
    ::slotted(vaadin-icon) {
      color: var(--lumo-contrast-60pct);
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    ::slotted(iron-icon[icon^='vaadin:']),
    ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    /* Text align */
    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
      text-align: start;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
      text-align: end;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }

    /* RTL specific styles */
    :host([dir='rtl'])::after {
      transform-origin: 0% 0;
    }

    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `,
    { moduleId: "lumo-input-container" }
  );

  // node_modules/@vaadin/input-container/src/vaadin-input-container.js
  var InputContainer = class extends ThemableMixin(DirMixin(PolymerElement)) {
    static get is() {
      return "vaadin-input-container";
    }
    static get template() {
      return html`
      <style>
        :host {
          display: flex;
          align-items: center;
          flex: 0 1 auto;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Reset the native input styles */
        ::slotted(input) {
          -webkit-appearance: none;
          -moz-appearance: none;
          flex: auto;
          white-space: nowrap;
          overflow: hidden;
          width: 100%;
          height: 100%;
          outline: none;
          margin: 0;
          padding: 0;
          border: 0;
          border-radius: 0;
          min-width: 0;
          font: inherit;
          line-height: normal;
          color: inherit;
          background-color: transparent;
          /* Disable default invalid style in Firefox */
          box-shadow: none;
        }

        ::slotted(*) {
          flex: none;
        }

        ::slotted(:is(input, textarea))::placeholder {
          /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */
          /* because ::slotted(...)::placeholder does not work in Safari. */
          font: inherit;
          color: inherit;
          /* Override default opacity in Firefox */
          opacity: 1;
        }
      </style>
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `;
    }
    static get properties() {
      return {
        disabled: {
          type: Boolean,
          reflectToAttribute: true
        },
        readonly: {
          type: Boolean,
          reflectToAttribute: true
        },
        invalid: {
          type: Boolean,
          reflectToAttribute: true
        }
      };
    }
    ready() {
      super.ready();
      this.addEventListener("pointerdown", (event) => {
        if (event.target === this) {
          event.preventDefault();
        }
      });
      this.addEventListener("click", (event) => {
        if (event.target === this) {
          this.shadowRoot.querySelector("slot:not([name])").assignedNodes({ flatten: true }).forEach((node) => node.focus && node.focus());
        }
      });
    }
  };
  customElements.define(InputContainer.is, InputContainer);

  // node_modules/@vaadin/vaadin-lumo-styles/mixins/field-button.js
  var fieldButton = i`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;
  registerStyles("", fieldButton, { moduleId: "lumo-field-button" });

  // node_modules/@vaadin/vaadin-lumo-styles/mixins/helper.js
  var helper = i`
  :host([has-helper]) [part='helper-text']::before {
    content: '';
    display: block;
    height: 0.4em;
  }

  [part='helper-text'] {
    display: block;
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  :host([disabled]) [part='helper-text'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
    display: none;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] {
    order: 0;
    padding-bottom: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
    order: 1;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {
    order: 2;
  }

  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
    order: 3;
  }
`;

  // node_modules/@vaadin/vaadin-lumo-styles/mixins/required-field.js
  var requiredField = i`
  [part='label'] {
    align-self: flex-start;
    color: var(--lumo-secondary-text-color);
    font-weight: 500;
    font-size: var(--lumo-font-size-s);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-right: 1em;
    padding-bottom: 0.5em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  :host([required]) [part='required-indicator']::after {
    content: var(--lumo-required-field-indicator, '•');
    transition: opacity 0.2s;
    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([invalid]) [part='required-indicator']::after {
    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-error-text-color);
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host([has-error-message]) [part='error-message']::before,
  :host([has-error-message]) [part='error-message']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='required-indicator']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;
  registerStyles("", requiredField, { moduleId: "lumo-required-field" });

  // node_modules/@vaadin/vaadin-lumo-styles/mixins/input-field-shared.js
  var inputField = i`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--lumo-secondary-text-color);
  }

  /* Hover */
  :host(:hover:not([readonly]):not([focused])) [part='label'] {
    color: var(--lumo-body-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
    opacity: 0.1;
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }

    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0;
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0.2;
    }
  }

  /* Trigger when not focusing using the keyboard */
  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  /* Focus-ring */
  :host([focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  /* Read-only and disabled */
  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {
    opacity: 0;
  }

  /* Disabled style */
  :host([disabled]) {
    pointer-events: none;
  }

  :host([disabled]) [part='label'],
  :host([disabled]) [part='input-field'] ::slotted(*) {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Invalid style */
  :host([invalid][focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
  }

  :host([input-prevented]) [part='input-field'] {
    animation: shake 0.15s infinite;
  }

  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    75% {
      transform: translateX(-4px);
    }
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small']) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small']) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* Slotted content */
  [part='input-field'] ::slotted(:not(iron-icon):not(vaadin-icon):not(input):not(textarea)) {
    color: var(--lumo-secondary-text-color);
    font-weight: 400;
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }
`;
  var inputFieldShared = [requiredField, fieldButton, helper, inputField];
  registerStyles("", inputFieldShared, {
    moduleId: "lumo-input-field-shared-styles"
  });

  // node_modules/@vaadin/text-field/theme/lumo/vaadin-text-field-styles.js
  registerStyles("vaadin-text-field", inputFieldShared, {
    moduleId: "lumo-text-field-styles"
  });

  // node_modules/@vaadin/field-base/src/error-controller.js
  var ErrorController = class extends SlotController {
    constructor(host) {
      super(
        host,
        "error-message",
        () => document.createElement("div"),
        (_host, node) => {
          this.__updateErrorId(node);
          this.__updateHasError();
        },
        true
      );
    }
    get errorId() {
      return this.node && this.node.id;
    }
    setErrorMessage(errorMessage) {
      this.errorMessage = errorMessage;
      this.__updateHasError();
    }
    setInvalid(invalid) {
      this.invalid = invalid;
      this.__updateHasError();
    }
    initCustomNode(errorNode) {
      this.__updateErrorId(errorNode);
      if (errorNode.textContent && !this.errorMessage) {
        this.errorMessage = errorNode.textContent.trim();
      }
      this.__updateHasError();
    }
    teardownNode(node) {
      let errorNode = this.getSlotChild();
      if (!errorNode && node !== this.defaultNode) {
        errorNode = this.attachDefaultNode();
        this.initNode(errorNode);
      }
      this.__updateHasError();
    }
    __isNotEmpty(error) {
      return Boolean(error && error.trim() !== "");
    }
    __updateHasError() {
      const errorNode = this.node;
      const hasError = Boolean(this.invalid && this.__isNotEmpty(this.errorMessage));
      if (errorNode) {
        errorNode.textContent = hasError ? this.errorMessage : "";
        errorNode.hidden = !hasError;
        if (hasError) {
          errorNode.setAttribute("role", "alert");
        } else {
          errorNode.removeAttribute("role");
        }
      }
      this.host.toggleAttribute("has-error-message", hasError);
    }
    __updateErrorId(errorNode) {
      if (!errorNode.id) {
        errorNode.id = this.defaultId;
      }
    }
  };

  // node_modules/@vaadin/component-base/src/dom-utils.js
  function deserializeAttributeValue(value) {
    if (!value) {
      return /* @__PURE__ */ new Set();
    }
    return new Set(value.split(" "));
  }
  function serializeAttributeValue(values) {
    return [...values].join(" ");
  }
  function addValueToAttribute(element, attr, value) {
    const values = deserializeAttributeValue(element.getAttribute(attr));
    values.add(value);
    element.setAttribute(attr, serializeAttributeValue(values));
  }
  function removeValueFromAttribute(element, attr, value) {
    const values = deserializeAttributeValue(element.getAttribute(attr));
    values.delete(value);
    if (values.size === 0) {
      element.removeAttribute(attr);
      return;
    }
    element.setAttribute(attr, serializeAttributeValue(values));
  }

  // node_modules/@vaadin/field-base/src/field-aria-controller.js
  var FieldAriaController = class {
    constructor(host) {
      this.host = host;
      this.__required = false;
    }
    setTarget(target) {
      this.__target = target;
      this.__setAriaRequiredAttribute(this.__required);
      this.__setLabelIdToAriaAttribute(this.__labelId);
      this.__setErrorIdToAriaAttribute(this.__errorId);
      this.__setHelperIdToAriaAttribute(this.__helperId);
    }
    setRequired(required) {
      this.__setAriaRequiredAttribute(required);
      this.__required = required;
    }
    setLabelId(labelId) {
      this.__setLabelIdToAriaAttribute(labelId, this.__labelId);
      this.__labelId = labelId;
    }
    setErrorId(errorId) {
      this.__setErrorIdToAriaAttribute(errorId, this.__errorId);
      this.__errorId = errorId;
    }
    setHelperId(helperId) {
      this.__setHelperIdToAriaAttribute(helperId, this.__helperId);
      this.__helperId = helperId;
    }
    get __isGroupField() {
      return this.__target === this.host;
    }
    __setLabelIdToAriaAttribute(labelId, oldLabelId) {
      this.__setAriaAttributeId("aria-labelledby", labelId, oldLabelId);
    }
    __setErrorIdToAriaAttribute(errorId, oldErrorId) {
      if (this.__isGroupField) {
        this.__setAriaAttributeId("aria-labelledby", errorId, oldErrorId);
      } else {
        this.__setAriaAttributeId("aria-describedby", errorId, oldErrorId);
      }
    }
    __setHelperIdToAriaAttribute(helperId, oldHelperId) {
      if (this.__isGroupField) {
        this.__setAriaAttributeId("aria-labelledby", helperId, oldHelperId);
      } else {
        this.__setAriaAttributeId("aria-describedby", helperId, oldHelperId);
      }
    }
    __setAriaRequiredAttribute(required) {
      if (!this.__target) {
        return;
      }
      if (["input", "textarea"].includes(this.__target.localName)) {
        return;
      }
      if (required) {
        this.__target.setAttribute("aria-required", "true");
      } else {
        this.__target.removeAttribute("aria-required");
      }
    }
    __setAriaAttributeId(attr, newId, oldId) {
      if (!this.__target) {
        return;
      }
      if (oldId) {
        removeValueFromAttribute(this.__target, attr, oldId);
      }
      if (newId) {
        addValueToAttribute(this.__target, attr, newId);
      }
    }
  };

  // node_modules/@vaadin/field-base/src/helper-controller.js
  var HelperController = class extends SlotController {
    constructor(host) {
      super(host, "helper", null, null, true);
    }
    get helperId() {
      return this.node && this.node.id;
    }
    initCustomNode(helperNode) {
      this.__updateHelperId(helperNode);
      this.__observeHelper(helperNode);
      const hasHelper = this.__hasHelper(helperNode);
      this.__toggleHasHelper(hasHelper);
    }
    teardownNode(_node) {
      if (this.__helperIdObserver) {
        this.__helperIdObserver.disconnect();
      }
      const helperNode = this.getSlotChild();
      if (helperNode && helperNode !== this.defaultNode) {
        const hasHelper = this.__hasHelper(helperNode);
        this.__toggleHasHelper(hasHelper);
      } else {
        this.__applyDefaultHelper(this.helperText, helperNode);
      }
    }
    setHelperText(helperText) {
      this.helperText = helperText;
      const helperNode = this.getSlotChild();
      if (!helperNode || helperNode === this.defaultNode) {
        this.__applyDefaultHelper(helperText, helperNode);
      }
    }
    __hasHelper(helperNode) {
      if (!helperNode) {
        return false;
      }
      return helperNode.children.length > 0 || helperNode.nodeType === Node.ELEMENT_NODE && customElements.get(helperNode.localName) || this.__isNotEmpty(helperNode.textContent);
    }
    __isNotEmpty(helperText) {
      return helperText && helperText.trim() !== "";
    }
    __applyDefaultHelper(helperText, helperNode) {
      const hasHelperText = this.__isNotEmpty(helperText);
      if (hasHelperText && !helperNode) {
        this.slotFactory = () => document.createElement("div");
        helperNode = this.attachDefaultNode();
        this.__updateHelperId(helperNode);
        this.__observeHelper(helperNode);
      }
      if (helperNode) {
        helperNode.textContent = helperText;
      }
      this.__toggleHasHelper(hasHelperText);
    }
    __observeHelper(helperNode) {
      this.__helperObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          const target = mutation.target;
          const isHelperMutation = target === this.node;
          if (mutation.type === "attributes") {
            if (isHelperMutation && target.id !== this.defaultId) {
              this.__updateHelperId(target);
            }
          } else if (isHelperMutation || target.parentElement === this.node) {
            const hasHelper = this.__hasHelper(this.node);
            this.__toggleHasHelper(hasHelper);
          }
        });
      });
      this.__helperObserver.observe(helperNode, {
        attributes: true,
        attributeFilter: ["id"],
        childList: true,
        subtree: true,
        characterData: true
      });
    }
    __toggleHasHelper(hasHelper) {
      this.host.toggleAttribute("has-helper", hasHelper);
      this.dispatchEvent(
        new CustomEvent("helper-changed", {
          detail: {
            hasHelper,
            node: this.node
          }
        })
      );
    }
    __updateHelperId(helperNode) {
      if (!helperNode.id) {
        helperNode.id = this.defaultId;
      }
    }
  };

  // node_modules/@vaadin/field-base/src/validate-mixin.js
  var ValidateMixin = dedupingMixin(
    (superclass) => class ValidateMixinClass extends superclass {
      static get properties() {
        return {
          invalid: {
            type: Boolean,
            reflectToAttribute: true,
            notify: true,
            value: false
          },
          required: {
            type: Boolean,
            reflectToAttribute: true
          }
        };
      }
      validate() {
        const isValid = this.checkValidity();
        this._setInvalid(!isValid);
        this.dispatchEvent(new CustomEvent("validated", { detail: { valid: isValid } }));
        return isValid;
      }
      checkValidity() {
        return !this.required || !!this.value;
      }
      _setInvalid(invalid) {
        if (this._shouldSetInvalid(invalid)) {
          this.invalid = invalid;
        }
      }
      _shouldSetInvalid(_invalid) {
        return true;
      }
    }
  );

  // node_modules/@vaadin/field-base/src/field-mixin.js
  var FieldMixin = (superclass) => class FieldMixinClass extends ValidateMixin(LabelMixin(ControllerMixin(superclass))) {
    static get properties() {
      return {
        ariaTarget: {
          type: Object,
          observer: "_ariaTargetChanged"
        },
        errorMessage: {
          type: String,
          observer: "_errorMessageChanged"
        },
        helperText: {
          type: String,
          observer: "_helperTextChanged"
        }
      };
    }
    static get observers() {
      return ["_invalidChanged(invalid)", "_requiredChanged(required)"];
    }
    get _errorId() {
      return this._errorController.errorId;
    }
    get _errorNode() {
      return this._errorController.node;
    }
    get _helperId() {
      return this._helperController.helperId;
    }
    get _helperNode() {
      return this._helperController.node;
    }
    constructor() {
      super();
      this._fieldAriaController = new FieldAriaController(this);
      this._helperController = new HelperController(this);
      this._errorController = new ErrorController(this);
      this._labelController.addEventListener("label-changed", (event) => {
        const { hasLabel, node } = event.detail;
        this.__labelChanged(hasLabel, node);
      });
      this._helperController.addEventListener("helper-changed", (event) => {
        const { hasHelper, node } = event.detail;
        this.__helperChanged(hasHelper, node);
      });
    }
    ready() {
      super.ready();
      this.addController(this._fieldAriaController);
      this.addController(this._helperController);
      this.addController(this._errorController);
    }
    __helperChanged(hasHelper, helperNode) {
      if (hasHelper) {
        this._fieldAriaController.setHelperId(helperNode.id);
      } else {
        this._fieldAriaController.setHelperId(null);
      }
    }
    __labelChanged(hasLabel, labelNode) {
      if (hasLabel) {
        this._fieldAriaController.setLabelId(labelNode.id);
      } else {
        this._fieldAriaController.setLabelId(null);
      }
    }
    _errorMessageChanged(errorMessage) {
      this._errorController.setErrorMessage(errorMessage);
    }
    _helperTextChanged(helperText) {
      this._helperController.setHelperText(helperText);
    }
    _ariaTargetChanged(target) {
      if (target) {
        this._fieldAriaController.setTarget(target);
      }
    }
    _requiredChanged(required) {
      this._fieldAriaController.setRequired(required);
    }
    _invalidChanged(invalid) {
      this._errorController.setInvalid(invalid);
      setTimeout(() => {
        if (invalid) {
          this._fieldAriaController.setErrorId(this._errorController.errorId);
        } else {
          this._fieldAriaController.setErrorId(null);
        }
      });
    }
  };

  // node_modules/@vaadin/field-base/src/input-constraints-mixin.js
  var InputConstraintsMixin = dedupingMixin(
    (superclass) => class InputConstraintsMixinClass extends DelegateStateMixin(ValidateMixin(InputMixin(superclass))) {
      static get constraints() {
        return ["required"];
      }
      static get delegateAttrs() {
        return [...super.delegateAttrs, "required"];
      }
      ready() {
        super.ready();
        this._createConstraintsObserver();
      }
      checkValidity() {
        if (this.inputElement && this._hasValidConstraints(this.constructor.constraints.map((c3) => this[c3]))) {
          return this.inputElement.checkValidity();
        }
        return !this.invalid;
      }
      _hasValidConstraints(constraints) {
        return constraints.some((c3) => this.__isValidConstraint(c3));
      }
      _createConstraintsObserver() {
        this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`);
      }
      _constraintsChanged(stateTarget, ...constraints) {
        if (!stateTarget) {
          return;
        }
        const hasConstraints = this._hasValidConstraints(constraints);
        const isLastConstraintRemoved = this.__previousHasConstraints && !hasConstraints;
        if ((this._hasValue || this.invalid) && hasConstraints) {
          this.validate();
        } else if (isLastConstraintRemoved) {
          this._setInvalid(false);
        }
        this.__previousHasConstraints = hasConstraints;
      }
      _onChange(event) {
        event.stopPropagation();
        this.validate();
        this.dispatchEvent(
          new CustomEvent("change", {
            detail: {
              sourceEvent: event
            },
            bubbles: event.bubbles,
            cancelable: event.cancelable
          })
        );
      }
      __isValidConstraint(constraint) {
        return Boolean(constraint) || constraint === 0;
      }
    }
  );

  // node_modules/@vaadin/field-base/src/slot-styles-mixin.js
  var stylesMap = /* @__PURE__ */ new WeakMap();
  function getRootStyles(root2) {
    if (!stylesMap.has(root2)) {
      stylesMap.set(root2, /* @__PURE__ */ new Set());
    }
    return stylesMap.get(root2);
  }
  function insertStyles(styles, root2) {
    const style2 = document.createElement("style");
    style2.textContent = styles;
    if (root2 === document) {
      document.head.appendChild(style2);
    } else {
      root2.insertBefore(style2, root2.firstChild);
    }
  }
  var SlotStylesMixin = dedupingMixin(
    (superclass) => class SlotStylesMixinClass extends superclass {
      get slotStyles() {
        return {};
      }
      connectedCallback() {
        super.connectedCallback();
        this.__applySlotStyles();
      }
      __applySlotStyles() {
        const root2 = this.getRootNode();
        const rootStyles = getRootStyles(root2);
        this.slotStyles.forEach((styles) => {
          if (!rootStyles.has(styles)) {
            insertStyles(styles, root2);
            rootStyles.add(styles);
          }
        });
      }
    }
  );

  // node_modules/@vaadin/field-base/src/input-control-mixin.js
  var InputControlMixin = (superclass) => class InputControlMixinClass extends SlotStylesMixin(
    DelegateFocusMixin(InputConstraintsMixin(FieldMixin(KeyboardMixin(superclass))))
  ) {
    static get properties() {
      return {
        allowedCharPattern: {
          type: String,
          observer: "_allowedCharPatternChanged"
        },
        autoselect: {
          type: Boolean,
          value: false
        },
        clearButtonVisible: {
          type: Boolean,
          reflectToAttribute: true,
          value: false
        },
        name: {
          type: String,
          reflectToAttribute: true
        },
        placeholder: {
          type: String,
          reflectToAttribute: true
        },
        readonly: {
          type: Boolean,
          value: false,
          reflectToAttribute: true
        },
        title: {
          type: String,
          reflectToAttribute: true
        }
      };
    }
    static get delegateAttrs() {
      return [...super.delegateAttrs, "name", "type", "placeholder", "readonly", "invalid", "title"];
    }
    constructor() {
      super();
      this._boundOnPaste = this._onPaste.bind(this);
      this._boundOnDrop = this._onDrop.bind(this);
      this._boundOnBeforeInput = this._onBeforeInput.bind(this);
    }
    get clearElement() {
      console.warn(`Please implement the 'clearElement' property in <${this.localName}>`);
      return null;
    }
    get slotStyles() {
      return [
        `
          :is(input[slot='input'], textarea[slot='textarea'])::placeholder {
            font: inherit;
            color: inherit;
          }
        `
      ];
    }
    ready() {
      super.ready();
      if (this.clearElement) {
        this.clearElement.addEventListener("click", (e9) => this._onClearButtonClick(e9));
      }
    }
    _onClearButtonClick(event) {
      event.preventDefault();
      this.inputElement.focus();
      this.__clear();
    }
    _onFocus(event) {
      super._onFocus(event);
      if (this.autoselect && this.inputElement) {
        this.inputElement.select();
      }
    }
    _onEscape(event) {
      super._onEscape(event);
      if (this.clearButtonVisible && !!this.value) {
        event.stopPropagation();
        this.__clear();
      }
    }
    _onChange(event) {
      event.stopPropagation();
      this.validate();
      this.dispatchEvent(
        new CustomEvent("change", {
          detail: {
            sourceEvent: event
          },
          bubbles: event.bubbles,
          cancelable: event.cancelable
        })
      );
    }
    __clear() {
      this.clear();
      this.inputElement.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
      this.inputElement.dispatchEvent(new Event("change", { bubbles: true }));
    }
    _addInputListeners(input) {
      super._addInputListeners(input);
      input.addEventListener("paste", this._boundOnPaste);
      input.addEventListener("drop", this._boundOnDrop);
      input.addEventListener("beforeinput", this._boundOnBeforeInput);
    }
    _removeInputListeners(input) {
      super._removeInputListeners(input);
      input.removeEventListener("paste", this._boundOnPaste);
      input.removeEventListener("drop", this._boundOnDrop);
      input.removeEventListener("beforeinput", this._boundOnBeforeInput);
    }
    _onKeyDown(event) {
      super._onKeyDown(event);
      if (this.allowedCharPattern && !this.__shouldAcceptKey(event)) {
        event.preventDefault();
        this._markInputPrevented();
      }
    }
    _markInputPrevented() {
      this.setAttribute("input-prevented", "");
      this._preventInputDebouncer = Debouncer.debounce(this._preventInputDebouncer, timeOut.after(200), () => {
        this.removeAttribute("input-prevented");
      });
    }
    __shouldAcceptKey(event) {
      return event.metaKey || event.ctrlKey || !event.key || event.key.length !== 1 || this.__allowedCharRegExp.test(event.key);
    }
    _onPaste(e9) {
      if (this.allowedCharPattern) {
        const pastedText = e9.clipboardData.getData("text");
        if (!this.__allowedTextRegExp.test(pastedText)) {
          e9.preventDefault();
          this._markInputPrevented();
        }
      }
    }
    _onDrop(e9) {
      if (this.allowedCharPattern) {
        const draggedText = e9.dataTransfer.getData("text");
        if (!this.__allowedTextRegExp.test(draggedText)) {
          e9.preventDefault();
          this._markInputPrevented();
        }
      }
    }
    _onBeforeInput(e9) {
      if (this.allowedCharPattern && e9.data && !this.__allowedTextRegExp.test(e9.data)) {
        e9.preventDefault();
        this._markInputPrevented();
      }
    }
    _allowedCharPatternChanged(charPattern) {
      if (charPattern) {
        try {
          this.__allowedCharRegExp = new RegExp(`^${charPattern}$`);
          this.__allowedTextRegExp = new RegExp(`^${charPattern}*$`);
        } catch (e9) {
          console.error(e9);
        }
      }
    }
  };

  // node_modules/@vaadin/field-base/src/input-field-mixin.js
  var InputFieldMixin = (superclass) => class InputFieldMixinClass extends InputControlMixin(superclass) {
    static get properties() {
      return {
        autocomplete: {
          type: String
        },
        autocorrect: {
          type: String
        },
        autocapitalize: {
          type: String
        }
      };
    }
    static get delegateAttrs() {
      return [...super.delegateAttrs, "autocapitalize", "autocomplete", "autocorrect"];
    }
    _inputElementChanged(input) {
      super._inputElementChanged(input);
      if (input) {
        if (input.value && input.value !== this.value) {
          console.warn(`Please define value on the <${this.localName}> component!`);
          input.value = "";
        }
        if (this.value) {
          input.value = this.value;
        }
      }
    }
    get __data() {
      return this.__dataValue || {};
    }
    set __data(value) {
      this.__dataValue = value;
    }
    _setFocused(focused) {
      super._setFocused(focused);
      if (!focused) {
        this.validate();
      }
    }
    _onInput(event) {
      super._onInput(event);
      if (this.invalid) {
        this.validate();
      }
    }
    _valueChanged(newValue, oldValue) {
      super._valueChanged(newValue, oldValue);
      if (oldValue === void 0) {
        return;
      }
      if (this.invalid) {
        this.validate();
      }
    }
  };

  // node_modules/@vaadin/field-base/src/pattern-mixin.js
  var PatternMixin = (superclass) => class PatternMixinClass extends InputConstraintsMixin(superclass) {
    static get properties() {
      return {
        pattern: {
          type: String
        },
        preventInvalidInput: {
          type: Boolean,
          observer: "_preventInvalidInputChanged"
        }
      };
    }
    static get delegateAttrs() {
      return [...super.delegateAttrs, "pattern"];
    }
    static get constraints() {
      return [...super.constraints, "pattern"];
    }
    _checkInputValue() {
      if (this.preventInvalidInput) {
        const input = this.inputElement;
        if (input && input.value.length > 0 && !this.checkValidity()) {
          input.value = this.value || "";
          this.setAttribute("input-prevented", "");
          this._inputDebouncer = Debouncer.debounce(this._inputDebouncer, timeOut.after(200), () => {
            this.removeAttribute("input-prevented");
          });
        }
      }
    }
    _onInput(event) {
      this._checkInputValue();
      super._onInput(event);
    }
    _preventInvalidInputChanged(preventInvalidInput) {
      if (preventInvalidInput) {
        console.warn(
          `WARNING: Since Vaadin 23.2, "preventInvalidInput" is deprecated. Please use "allowedCharPattern" instead.`
        );
      }
    }
  };

  // node_modules/@vaadin/field-base/src/styles/clear-button-styles.js
  var clearButton = i`
  [part='clear-button'] {
    display: none;
    cursor: default;
  }

  [part='clear-button']::before {
    content: '✕';
  }

  :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {
    display: block;
  }
`;

  // node_modules/@vaadin/field-base/src/styles/field-shared-styles.js
  var fieldShared = i`
  :host {
    display: inline-flex;
    outline: none;
  }

  :host::before {
    content: '\\2003';
    width: 0;
    display: inline-block;
    /* Size and position this element on the same vertical position as the input-field element
          to make vertical align for the host element work as expected */
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:not([has-label])) [part='label'] {
    display: none;
  }
`;

  // node_modules/@vaadin/field-base/src/styles/input-field-container-styles.js
  var inputFieldContainer = i`
  [class$='container'] {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-field-default-width, 12em);
  }
`;

  // node_modules/@vaadin/field-base/src/styles/input-field-shared-styles.js
  var inputFieldShared2 = [fieldShared, inputFieldContainer, clearButton];

  // node_modules/@vaadin/text-field/src/vaadin-text-field.js
  registerStyles("vaadin-text-field", inputFieldShared2, { moduleId: "vaadin-text-field-styles" });
  var TextField = class extends PatternMixin(InputFieldMixin(ThemableMixin(ElementMixin2(PolymerElement)))) {
    static get is() {
      return "vaadin-text-field";
    }
    static get template() {
      return html`
      <style>
        [part='input-field'] {
          flex-grow: 0;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `;
    }
    static get properties() {
      return {
        maxlength: {
          type: Number
        },
        minlength: {
          type: Number
        }
      };
    }
    static get delegateAttrs() {
      return [...super.delegateAttrs, "maxlength", "minlength"];
    }
    static get constraints() {
      return [...super.constraints, "maxlength", "minlength"];
    }
    constructor() {
      super();
      this._setType("text");
    }
    get clearElement() {
      return this.$.clearButton;
    }
    ready() {
      super.ready();
      this.addController(
        new InputController(this, (input) => {
          this._setInputElement(input);
          this._setFocusElement(input);
          this.stateTarget = input;
          this.ariaTarget = input;
        })
      );
      this.addController(new LabelledInputController(this.inputElement, this._labelController));
    }
  };
  customElements.define(TextField.is, TextField);

  // node_modules/@vaadin/grid/src/vaadin-grid-filter.js
  var GridFilter = class extends class extends PolymerElement {
  } {
    static get template() {
      return html`
      <style>
        :host {
          display: inline-flex;
          max-width: 100%;
        }

        #filter {
          width: 100%;
          box-sizing: border-box;
        }
      </style>
      <slot name="filter">
        <vaadin-text-field id="filter" value="{{value}}"></vaadin-text-field>
      </slot>
    `;
    }
    static get is() {
      return "vaadin-grid-filter";
    }
    static get properties() {
      return {
        path: String,
        value: {
          type: String,
          notify: true
        },
        _connected: Boolean
      };
    }
    connectedCallback() {
      super.connectedCallback();
      this._connected = true;
    }
    static get observers() {
      return ["_filterChanged(path, value, _connected)"];
    }
    ready() {
      super.ready();
      const child = this.firstElementChild;
      if (child && child.getAttribute("slot") !== "filter") {
        console.warn('Make sure you have assigned slot="filter" to the child elements of <vaadin-grid-filter>');
        child.setAttribute("slot", "filter");
      }
    }
    _filterChanged(path, value, connected) {
      if (path === void 0 || value === void 0 || !connected) {
        return;
      }
      if (this._previousValue === void 0 && value === "") {
        return;
      }
      this._previousValue = value;
      this._debouncerFilterChanged = Debouncer.debounce(this._debouncerFilterChanged, timeOut.after(200), () => {
        this.dispatchEvent(new CustomEvent("filter-changed", { bubbles: true }));
      });
    }
    focus() {
      this.$.filter.focus();
    }
  };
  customElements.define(GridFilter.is, GridFilter);

  // node_modules/@vaadin/grid/src/vaadin-grid-filter-column.js
  var GridFilterColumn = class extends GridColumn {
    static get is() {
      return "vaadin-grid-filter-column";
    }
    static get properties() {
      return {
        path: String,
        header: String
      };
    }
    static get observers() {
      return ["_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header, _filterValue)"];
    }
    constructor() {
      super();
      this.__boundOnFilterValueChanged = this.__onFilterValueChanged.bind(this);
    }
    _defaultHeaderRenderer(root2, _column) {
      let filter2 = root2.firstElementChild;
      let textField = filter2 ? filter2.firstElementChild : void 0;
      if (!filter2) {
        filter2 = document.createElement("vaadin-grid-filter");
        textField = document.createElement("vaadin-text-field");
        textField.setAttribute("slot", "filter");
        textField.setAttribute("theme", "small");
        textField.setAttribute("style", "max-width: 100%;");
        textField.setAttribute("focus-target", "");
        textField.addEventListener("value-changed", this.__boundOnFilterValueChanged);
        filter2.appendChild(textField);
        root2.appendChild(filter2);
      }
      filter2.path = this.path;
      filter2.value = this._filterValue;
      textField.__rendererValue = this._filterValue;
      textField.value = this._filterValue;
      textField.label = this.__getHeader(this.header, this.path);
    }
    _computeHeaderRenderer() {
      return this._defaultHeaderRenderer;
    }
    __onFilterValueChanged(e9) {
      if (e9.detail.value === e9.target.__rendererValue) {
        return;
      }
      this._filterValue = e9.detail.value;
    }
    __getHeader(header, path) {
      if (header) {
        return header;
      }
      if (path) {
        return this._generateHeader(path);
      }
    }
  };
  customElements.define(GridFilterColumn.is, GridFilterColumn);

  // node_modules/@vaadin/grid/src/vaadin-grid-selection-column.js
  var GridSelectionColumn = class extends GridColumn {
    static get is() {
      return "vaadin-grid-selection-column";
    }
    static get properties() {
      return {
        width: {
          type: String,
          value: "58px"
        },
        flexGrow: {
          type: Number,
          value: 0
        },
        selectAll: {
          type: Boolean,
          value: false,
          notify: true
        },
        autoSelect: {
          type: Boolean,
          value: false
        },
        __indeterminate: Boolean,
        __previousActiveItem: Object,
        __selectAllHidden: Boolean
      };
    }
    static get observers() {
      return [
        "__onSelectAllChanged(selectAll)",
        "_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header, selectAll, __indeterminate, __selectAllHidden)"
      ];
    }
    constructor() {
      super();
      this.__boundOnActiveItemChanged = this.__onActiveItemChanged.bind(this);
      this.__boundOnDataProviderChanged = this.__onDataProviderChanged.bind(this);
      this.__boundOnSelectedItemsChanged = this.__onSelectedItemsChanged.bind(this);
    }
    disconnectedCallback() {
      this._grid.removeEventListener("active-item-changed", this.__boundOnActiveItemChanged);
      this._grid.removeEventListener("data-provider-changed", this.__boundOnDataProviderChanged);
      this._grid.removeEventListener("filter-changed", this.__boundOnSelectedItemsChanged);
      this._grid.removeEventListener("selected-items-changed", this.__boundOnSelectedItemsChanged);
      super.disconnectedCallback();
    }
    connectedCallback() {
      super.connectedCallback();
      if (this._grid) {
        this._grid.addEventListener("active-item-changed", this.__boundOnActiveItemChanged);
        this._grid.addEventListener("data-provider-changed", this.__boundOnDataProviderChanged);
        this._grid.addEventListener("filter-changed", this.__boundOnSelectedItemsChanged);
        this._grid.addEventListener("selected-items-changed", this.__boundOnSelectedItemsChanged);
      }
    }
    _defaultHeaderRenderer(root2, _column) {
      let checkbox = root2.firstElementChild;
      if (!checkbox) {
        checkbox = document.createElement("vaadin-checkbox");
        checkbox.setAttribute("aria-label", "Select All");
        checkbox.classList.add("vaadin-grid-select-all-checkbox");
        checkbox.addEventListener("checked-changed", this.__onSelectAllCheckedChanged.bind(this));
        root2.appendChild(checkbox);
      }
      const checked = this.__isChecked(this.selectAll, this.__indeterminate);
      checkbox.__rendererChecked = checked;
      checkbox.checked = checked;
      checkbox.hidden = this.__selectAllHidden;
      checkbox.indeterminate = this.__indeterminate;
    }
    _defaultRenderer(root2, _column, { item, selected }) {
      let checkbox = root2.firstElementChild;
      if (!checkbox) {
        checkbox = document.createElement("vaadin-checkbox");
        checkbox.setAttribute("aria-label", "Select Row");
        checkbox.addEventListener("checked-changed", this.__onSelectRowCheckedChanged.bind(this));
        root2.appendChild(checkbox);
      }
      checkbox.__item = item;
      checkbox.__rendererChecked = selected;
      checkbox.checked = selected;
    }
    __onSelectAllChanged(selectAll) {
      if (selectAll === void 0 || !this._grid) {
        return;
      }
      if (!this.__selectAllInitialized) {
        this.__selectAllInitialized = true;
        return;
      }
      if (this._selectAllChangeLock) {
        return;
      }
      if (selectAll && this.__hasArrayDataProvider()) {
        this.__withFilteredItemsArray((items) => {
          this._grid.selectedItems = items;
        });
      } else {
        this._grid.selectedItems = [];
      }
    }
    __arrayContains(a3, b2) {
      return Array.isArray(a3) && Array.isArray(b2) && b2.every((i5) => a3.includes(i5));
    }
    __onSelectAllCheckedChanged(e9) {
      if (e9.target.checked === e9.target.__rendererChecked) {
        return;
      }
      this.selectAll = this.__indeterminate || e9.target.checked;
    }
    __onSelectRowCheckedChanged(e9) {
      if (e9.target.checked === e9.target.__rendererChecked) {
        return;
      }
      if (e9.target.checked) {
        this._grid.selectItem(e9.target.__item);
      } else {
        this._grid.deselectItem(e9.target.__item);
      }
    }
    __isChecked(selectAll, indeterminate) {
      return indeterminate || selectAll;
    }
    __onActiveItemChanged(e9) {
      const activeItem = e9.detail.value;
      if (this.autoSelect) {
        const item = activeItem || this.__previousActiveItem;
        if (item) {
          this._grid._toggleItem(item);
        }
      }
      this.__previousActiveItem = activeItem;
    }
    __hasArrayDataProvider() {
      return Array.isArray(this._grid.items) && !!this._grid.dataProvider;
    }
    __onSelectedItemsChanged() {
      this._selectAllChangeLock = true;
      if (this.__hasArrayDataProvider()) {
        this.__withFilteredItemsArray((items) => {
          if (!this._grid.selectedItems.length) {
            this.selectAll = false;
            this.__indeterminate = false;
          } else if (this.__arrayContains(this._grid.selectedItems, items)) {
            this.selectAll = true;
            this.__indeterminate = false;
          } else {
            this.selectAll = false;
            this.__indeterminate = true;
          }
        });
      }
      this._selectAllChangeLock = false;
    }
    __onDataProviderChanged() {
      this.__selectAllHidden = !Array.isArray(this._grid.items);
    }
    __withFilteredItemsArray(callback) {
      const params = {
        page: 0,
        pageSize: Infinity,
        sortOrders: [],
        filters: this._grid._mapFilters()
      };
      this._grid.dataProvider(params, (items) => callback(items));
    }
  };
  customElements.define(GridSelectionColumn.is, GridSelectionColumn);

  // node_modules/@vaadin/grid/theme/lumo/vaadin-grid-sorter-styles.js
  registerStyles(
    "vaadin-grid-sorter",
    i`
    :host {
      justify-content: flex-start;
      align-items: baseline;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: var(--lumo-clickable-cursor);
    }

    [part='content'] {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [part='indicators'] {
      margin-left: var(--lumo-space-s);
    }

    [part='indicators']::before {
      transform: scale(0.8);
    }

    :host(:not([direction]):not(:hover)) [part='indicators'] {
      color: var(--lumo-tertiary-text-color);
    }

    :host([direction]) {
      color: var(--lumo-primary-text-color);
    }

    [part='order'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='indicators'] {
      margin-right: var(--lumo-space-s);
      margin-left: 0;
    }
  `,
    { moduleId: "lumo-grid-sorter" }
  );

  // node_modules/@vaadin/grid/src/vaadin-grid-sorter.js
  var template2 = document.createElement("template");
  template2.innerHTML = `
  <style>
    @font-face {
      font-family: 'vaadin-grid-sorter-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;
  document.head.appendChild(template2.content);
  var GridSorter = class extends ThemableMixin(DirMixin(PolymerElement)) {
    static get template() {
      return html`
      <style>
        :host {
          display: inline-flex;
          cursor: pointer;
          max-width: 100%;
        }

        [part='content'] {
          flex: 1 1 auto;
        }

        [part='indicators'] {
          position: relative;
          align-self: center;
          flex: none;
        }

        [part='order'] {
          display: inline;
          vertical-align: super;
        }

        [part='indicators']::before {
          font-family: 'vaadin-grid-sorter-icons';
          display: inline-block;
        }

        :host(:not([direction])) [part='indicators']::before {
          content: '\\e901';
        }

        :host([direction='asc']) [part='indicators']::before {
          content: '\\e900';
        }

        :host([direction='desc']) [part='indicators']::before {
          content: '\\e902';
        }
      </style>

      <div part="content">
        <slot></slot>
      </div>
      <div part="indicators">
        <span part="order">[[_getDisplayOrder(_order)]]</span>
      </div>
    `;
    }
    static get is() {
      return "vaadin-grid-sorter";
    }
    static get properties() {
      return {
        path: String,
        direction: {
          type: String,
          reflectToAttribute: true,
          notify: true,
          value: null
        },
        _order: {
          type: Number,
          value: null
        },
        _isConnected: {
          type: Boolean,
          observer: "__isConnectedChanged"
        }
      };
    }
    static get observers() {
      return ["_pathOrDirectionChanged(path, direction)"];
    }
    ready() {
      super.ready();
      this.addEventListener("click", this._onClick.bind(this));
    }
    connectedCallback() {
      super.connectedCallback();
      this._isConnected = true;
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this._isConnected = false;
      if (!this.parentNode && this._grid) {
        this._grid.__removeSorters([this]);
      }
    }
    _pathOrDirectionChanged() {
      this.__dispatchSorterChangedEvenIfPossible();
    }
    __isConnectedChanged(newValue, oldValue) {
      if (oldValue === false) {
        return;
      }
      this.__dispatchSorterChangedEvenIfPossible();
    }
    __dispatchSorterChangedEvenIfPossible() {
      if (this.path === void 0 || this.direction === void 0 || !this._isConnected) {
        return;
      }
      this.dispatchEvent(new CustomEvent("sorter-changed", { bubbles: true, composed: true }));
    }
    _getDisplayOrder(order) {
      return order === null ? "" : order + 1;
    }
    _onClick(e9) {
      const activeElement = this.getRootNode().activeElement;
      if (this !== activeElement && this.contains(activeElement)) {
        return;
      }
      e9.preventDefault();
      if (this.direction === "asc") {
        this.direction = "desc";
      } else if (this.direction === "desc") {
        this.direction = null;
      } else {
        this.direction = "asc";
      }
    }
  };
  customElements.define(GridSorter.is, GridSorter);

  // node_modules/@vaadin/grid/src/vaadin-grid-sort-column.js
  var GridSortColumn = class extends GridColumn {
    static get is() {
      return "vaadin-grid-sort-column";
    }
    static get properties() {
      return {
        path: String,
        direction: {
          type: String,
          notify: true
        }
      };
    }
    static get observers() {
      return ["_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header, direction)"];
    }
    constructor() {
      super();
      this.__boundOnDirectionChanged = this.__onDirectionChanged.bind(this);
    }
    _defaultHeaderRenderer(root2, _column) {
      let sorter = root2.firstElementChild;
      if (!sorter) {
        sorter = document.createElement("vaadin-grid-sorter");
        sorter.addEventListener("direction-changed", this.__boundOnDirectionChanged);
        root2.appendChild(sorter);
      }
      sorter.path = this.path;
      sorter.__rendererDirection = this.direction;
      sorter.direction = this.direction;
      sorter.textContent = this.__getHeader(this.header, this.path);
    }
    _computeHeaderRenderer() {
      return this._defaultHeaderRenderer;
    }
    __onDirectionChanged(e9) {
      if (e9.detail.value === e9.target.__rendererDirection) {
        return;
      }
      this.direction = e9.detail.value;
    }
    __getHeader(header, path) {
      if (header) {
        return header;
      }
      if (path) {
        return this._generateHeader(path);
      }
    }
  };
  customElements.define(GridSortColumn.is, GridSortColumn);

  // node_modules/@vaadin/grid/theme/lumo/vaadin-grid-tree-toggle-styles.js
  registerStyles(
    "vaadin-grid-tree-toggle",
    i`
    :host {
      --vaadin-grid-tree-toggle-level-offset: 2em;
      align-items: center;
      vertical-align: middle;
      transform: translateX(calc(var(--lumo-space-s) * -1));
      -webkit-tap-highlight-color: transparent;
    }

    :host(:not([leaf])) {
      cursor: default;
    }

    [part='toggle'] {
      display: inline-block;
      font-size: 1.5em;
      line-height: 1;
      width: 1em;
      height: 1em;
      text-align: center;
      color: var(--lumo-contrast-50pct);
      cursor: var(--lumo-clickable-cursor);
      /* Increase touch target area */
      padding: calc(1em / 3);
      margin: calc(1em / -3);
    }

    :host(:not([dir='rtl'])) [part='toggle'] {
      margin-right: 0;
    }

    @media (hover: hover) {
      :host(:hover) [part='toggle'] {
        color: var(--lumo-contrast-80pct);
      }
    }

    [part='toggle']::before {
      font-family: 'lumo-icons';
      display: inline-block;
      height: 100%;
    }

    :host(:not([expanded])) [part='toggle']::before {
      content: var(--lumo-icons-angle-right);
    }

    :host([expanded]) [part='toggle']::before {
      content: var(--lumo-icons-angle-right);
      transform: rotate(90deg);
    }

    /* Experimental support for hierarchy connectors, using an unsupported selector */
    :host([theme~='connectors']) #level-spacer {
      position: relative;
      z-index: -1;
      font-size: 1em;
      height: 1.5em;
    }

    :host([theme~='connectors']) #level-spacer::before {
      display: block;
      content: '';
      margin-top: calc(var(--lumo-space-m) * -1);
      height: calc(var(--lumo-space-m) + 3em);
      background-image: linear-gradient(
        to right,
        transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px),
        var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px)
      );
      background-size: var(--vaadin-grid-tree-toggle-level-offset) var(--vaadin-grid-tree-toggle-level-offset);
      background-position: calc(var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px) 0;
    }

    /* RTL specific styles */

    :host([dir='rtl']) {
      margin-left: 0;
      margin-right: calc(var(--lumo-space-s) * -1);
    }

    :host([dir='rtl']) [part='toggle'] {
      margin-left: 0;
    }

    :host([dir='rtl'][expanded]) [part='toggle']::before {
      transform: rotate(-90deg);
    }

    :host([dir='rtl'][theme~='connectors']) #level-spacer::before {
      background-image: linear-gradient(
        to left,
        transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px),
        var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px)
      );
      background-position: calc(100% - (var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px)) 0;
    }

    :host([dir='rtl']:not([expanded])) [part='toggle']::before,
    :host([dir='rtl'][expanded]) [part='toggle']::before {
      content: var(--lumo-icons-angle-left);
    }
  `,
    { moduleId: "lumo-grid-tree-toggle" }
  );

  // node_modules/@vaadin/grid/src/vaadin-grid-tree-toggle.js
  var template3 = document.createElement("template");
  template3.innerHTML = `
  <style>
    @font-face {
      font-family: "vaadin-grid-tree-icons";
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQkAA0AAAAABrwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAECAAAABoAAAAcgHwa6EdERUYAAAPsAAAAHAAAAB4AJwAOT1MvMgAAAZQAAAA/AAAAYA8TBIJjbWFwAAAB8AAAAFUAAAFeGJvXWmdhc3AAAAPkAAAACAAAAAgAAAAQZ2x5ZgAAAlwAAABLAAAAhIrPOhFoZWFkAAABMAAAACsAAAA2DsJI02hoZWEAAAFcAAAAHQAAACQHAgPHaG10eAAAAdQAAAAZAAAAHAxVAgBsb2NhAAACSAAAABIAAAASAIAAVG1heHAAAAF8AAAAGAAAACAACgAFbmFtZQAAAqgAAAECAAACTwflzbdwb3N0AAADrAAAADYAAABZQ7Ajh3icY2BkYGAA4twv3Vfi+W2+MnCzMIDANSOmbGSa2YEZRHEwMIEoAAoiB6sAeJxjYGRgYD7w/wADAwsDCDA7MDAyoAI2AFEEAtIAAAB4nGNgZGBg4GBgZgDRDAxMDGgAAAGbABB4nGNgZp7JOIGBlYGBaSbTGQYGhn4IzfiawZiRkwEVMAqgCTA4MDA+38d84P8BBgdmIAapQZJVYGAEAGc/C54AeJxjYYAAxlAIzQTELAwMBxgZGB0ACy0BYwAAAHicY2BgYGaAYBkGRgYQiADyGMF8FgYbIM3FwMHABISMDArP9/3/+/8/WJXC8z0Q9v8nEp5gHVwMMMAIMo+RDYiZoQJMQIKJARUA7WBhGN4AACFKDtoAAAAAAAAAAAgACAAQABgAJgA0AEIAAHichYvBEYBADAKBVHBjBT4swl9KS2k05o0XHd/yW1hAfBFwCv9sIlJu3nZaNS3PXAaXXHI8Lge7DlzF7C1RgXc7xkK6+gvcD2URmQB4nK2RQWoCMRiFX3RUqtCli65yADModOMBLLgQSqHddRFnQghIAnEUvEA3vUUP0LP0Fj1G+yb8R5iEhO9/ef/7FwFwj28o9EthiVp4hBlehcfUP4Ur8o/wBAv8CU+xVFvhOR7UB7tUdUdlVRJ6HnHWTnhM/V24In8JT5j/KzzFSi2E53hUz7jCcrcIiDDwyKSW1JEct2HdIPH1DFytbUM0PofWdNk5E5oUqb/Q6HHBiVGZpfOXkyUMEj5IyBuNmYZQjBobfsuassvnkKLe1OuBBj0VQ8cRni2xjLWsHaM0jrjx3peYA0/vrdmUYqe9iy7bzrX6eNP7Jh1SijX+AaUVbB8AAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSruZMzlHaB0q4A76kLlwAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKxJigiD6mhFTNowGACmcA/8AAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;
  document.head.appendChild(template3.content);
  var GridTreeToggle = class extends ThemableMixin(DirMixin(PolymerElement)) {
    static get template() {
      return html`
      <style>
        :host {
          display: inline-flex;
          align-items: baseline;
          max-width: 100%;

          /* CSS API for :host */
          --vaadin-grid-tree-toggle-level-offset: 1em;
          --_collapsed-icon: '\\e7be\\00a0';
        }

        :host([dir='rtl']) {
          --_collapsed-icon: '\\e7bd\\00a0';
        }

        :host([hidden]) {
          display: none !important;
        }

        :host(:not([leaf])) {
          cursor: pointer;
        }

        #level-spacer,
        [part='toggle'] {
          flex: none;
        }

        #level-spacer {
          display: inline-block;
          width: calc(var(---level, '0') * var(--vaadin-grid-tree-toggle-level-offset));
        }

        [part='toggle']::before {
          font-family: 'vaadin-grid-tree-icons';
          line-height: 1em; /* make icon font metrics not affect baseline */
        }

        :host(:not([expanded])) [part='toggle']::before {
          content: var(--_collapsed-icon);
        }

        :host([expanded]) [part='toggle']::before {
          content: '\\e7bc\\00a0'; /* icon glyph + single non-breaking space */
        }

        :host([leaf]) [part='toggle'] {
          visibility: hidden;
        }

        slot {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>

      <span id="level-spacer"></span>
      <span part="toggle"></span>
      <slot></slot>
    `;
    }
    static get is() {
      return "vaadin-grid-tree-toggle";
    }
    static get properties() {
      return {
        level: {
          type: Number,
          value: 0,
          observer: "_levelChanged"
        },
        leaf: {
          type: Boolean,
          value: false,
          reflectToAttribute: true
        },
        expanded: {
          type: Boolean,
          value: false,
          reflectToAttribute: true,
          notify: true
        }
      };
    }
    ready() {
      super.ready();
      this.addEventListener("click", (e9) => this._onClick(e9));
    }
    _onClick(e9) {
      if (this.leaf) {
        return;
      }
      if (isFocusable(e9.target)) {
        return;
      }
      e9.preventDefault();
      this.expanded = !this.expanded;
    }
    _levelChanged(level) {
      const value = Number(level).toString();
      this.style.setProperty("---level", value);
    }
  };
  customElements.define(GridTreeToggle.is, GridTreeToggle);

  // node_modules/@vaadin/grid/src/vaadin-grid-tree-column.js
  var GridTreeColumn = class extends GridColumn {
    static get is() {
      return "vaadin-grid-tree-column";
    }
    static get properties() {
      return {
        path: String,
        itemHasChildrenPath: {
          type: String,
          observer: "_itemHasChildrenPathChanged"
        }
      };
    }
    static get observers() {
      return ["_onRendererOrBindingChanged(_renderer, _cells, _cells.*, path, itemHasChildrenPath)"];
    }
    constructor() {
      super();
      this.__boundOnExpandedChanged = this.__onExpandedChanged.bind(this);
    }
    __defaultRenderer(root2, _column, { item, expanded, level }) {
      let toggle = root2.firstElementChild;
      if (!toggle) {
        toggle = document.createElement("vaadin-grid-tree-toggle");
        toggle.addEventListener("expanded-changed", this.__boundOnExpandedChanged);
        root2.appendChild(toggle);
      }
      toggle.__item = item;
      toggle.__rendererExpanded = expanded;
      toggle.expanded = expanded;
      toggle.leaf = this.__isLeafItem(item, this._grid.itemHasChildrenPath);
      toggle.textContent = this.__getToggleContent(this.path, item);
      toggle.level = level;
    }
    _computeRenderer() {
      return this.__defaultRenderer;
    }
    _itemHasChildrenPathChanged(itemHasChildrenPath) {
      if (itemHasChildrenPath) {
        console.warn(
          `WARNING: Since Vaadin 23, itemHasChildrenPath on <vaadin-grid-tree-column> is deprecated. Please set this property on the <vaadin-grid> instead.`
        );
        if (this._grid) {
          this._grid.itemHasChildrenPath = itemHasChildrenPath;
        }
      }
    }
    __onExpandedChanged(e9) {
      if (e9.detail.value === e9.target.__rendererExpanded) {
        return;
      }
      if (e9.detail.value) {
        this._grid.expandItem(e9.target.__item);
      } else {
        this._grid.collapseItem(e9.target.__item);
      }
    }
    __isLeafItem(item, itemHasChildrenPath) {
      return !item || !item[itemHasChildrenPath];
    }
    __getToggleContent(path, item) {
      return path && this.get(path, item);
    }
  };
  customElements.define(GridTreeColumn.is, GridTreeColumn);

  // src/Grid.ts
  var Grid2 = class extends s4 {
    constructor() {
      super(...arguments);
      this.gridOptsJson = "";
    }
    render() {
      console.log("json:");
      console.dir(this.gridOptsJson);
      const gridOpts = JSON.parse(this.gridOptsJson);
      const cols = gridOpts.Columns;
      const items = gridOpts.Rows.map((row) => {
        const rowMap = {};
        row.forEach((cellValue, i5) => {
          const col = cols[i5];
          rowMap[col] = cellValue;
        });
        return rowMap;
      });
      console.log("items:");
      console.dir(items);
      return y`
    <vaadin-grid .items="${items}">
      ${cols.map((col) => y`<vaadin-grid-column path="${col}"></vaadin-grid-column>`)}
    </vaadin-grid>`;
    }
  };
  __decorateClass([
    e5()
  ], Grid2.prototype, "gridOptsJson", 2);
  Grid2 = __decorateClass([
    e4("itk-grid")
  ], Grid2);

  // node_modules/@vaadin/form-layout/theme/lumo/vaadin-form-layout-styles.js
  registerStyles(
    "vaadin-form-layout",
    i`
    :host {
      --vaadin-form-layout-column-spacing: var(--lumo-space-l);
    }
  `,
    { moduleId: "lumo-form-layout" }
  );

  // node_modules/@vaadin/form-layout/src/vaadin-form-layout.js
  var FormLayout = class extends ResizeMixin(ElementMixin2(ThemableMixin(PolymerElement))) {
    static get template() {
      return html`
      <style>
        :host {
          display: block;
          max-width: 100%;
          animation: 1ms vaadin-form-layout-appear;
          /* CSS API for host */
          --vaadin-form-item-label-width: 8em;
          --vaadin-form-item-label-spacing: 1em;
          --vaadin-form-item-row-spacing: 1em;
          --vaadin-form-layout-column-spacing: 2em; /* (default) */
          align-self: stretch;
        }

        @keyframes vaadin-form-layout-appear {
          to {
            opacity: 1 !important; /* stylelint-disable-line keyframe-declaration-no-important */
          }
        }

        :host([hidden]) {
          display: none !important;
        }

        #layout {
          display: flex;

          align-items: baseline; /* default \`stretch\` is not appropriate */

          flex-wrap: wrap; /* the items should wrap */
        }

        #layout ::slotted(*) {
          /* Items should neither grow nor shrink. */
          flex-grow: 0;
          flex-shrink: 0;

          /* Margins make spacing between the columns */
          margin-left: calc(0.5 * var(--vaadin-form-layout-column-spacing));
          margin-right: calc(0.5 * var(--vaadin-form-layout-column-spacing));
        }

        #layout ::slotted(br) {
          display: none;
        }
      </style>
      <div id="layout">
        <slot id="slot"></slot>
      </div>
    `;
    }
    static get is() {
      return "vaadin-form-layout";
    }
    static get properties() {
      return {
        responsiveSteps: {
          type: Array,
          value() {
            return [
              { minWidth: 0, columns: 1, labelsPosition: "top" },
              { minWidth: "20em", columns: 1 },
              { minWidth: "40em", columns: 2 }
            ];
          },
          observer: "_responsiveStepsChanged"
        },
        _columnCount: {
          type: Number
        },
        _labelsOnTop: {
          type: Boolean
        }
      };
    }
    static get observers() {
      return ["_invokeUpdateLayout(_columnCount, _labelsOnTop)"];
    }
    ready() {
      this._styleElement = document.createElement("style");
      this.appendChild(this._styleElement);
      this._styleElement.textContent = " ";
      super.ready();
      this.addEventListener("animationend", this.__onAnimationEnd);
    }
    connectedCallback() {
      super.connectedCallback();
      requestAnimationFrame(() => this._selectResponsiveStep());
      requestAnimationFrame(() => this._updateLayout());
      this._observeChildrenColspanChange();
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.__mutationObserver.disconnect();
      this.__childObserver.disconnect();
    }
    _observeChildrenColspanChange() {
      const mutationObserverConfig = { attributes: true };
      this.__mutationObserver = new MutationObserver((mutationRecord) => {
        mutationRecord.forEach((mutation) => {
          if (mutation.type === "attributes" && (mutation.attributeName === "colspan" || mutation.attributeName === "hidden")) {
            this._updateLayout();
          }
        });
      });
      this.__childObserver = new FlattenedNodesObserver(this, (info) => {
        const addedNodes = this._getObservableNodes(info.addedNodes);
        const removedNodes = this._getObservableNodes(info.removedNodes);
        addedNodes.forEach((child) => {
          this.__mutationObserver.observe(child, mutationObserverConfig);
        });
        if (addedNodes.length > 0 || removedNodes.length > 0) {
          this._updateLayout();
        }
      });
    }
    _getObservableNodes(nodeList) {
      const ignore = ["template", "style", "dom-repeat", "dom-if"];
      return Array.from(nodeList).filter(
        (node) => node.nodeType === Node.ELEMENT_NODE && ignore.indexOf(node.localName.toLowerCase()) === -1
      );
    }
    _naturalNumberOrOne(n6) {
      if (typeof n6 === "number" && n6 >= 1 && n6 < Infinity) {
        return Math.floor(n6);
      }
      return 1;
    }
    _isValidCSSLength(value) {
      if (value === "inherit" || value === "normal") {
        return false;
      }
      this._styleElement.firstChild.nodeValue = `#styleElement { word-spacing: ${value}; }`;
      if (!this._styleElement.sheet) {
        return true;
      }
      return ["", null].indexOf(this._styleElement.sheet.cssRules[0].style.getPropertyValue("word-spacing")) < 0;
    }
    _responsiveStepsChanged(responsiveSteps, oldResponsiveSteps) {
      try {
        if (!Array.isArray(responsiveSteps)) {
          throw new Error('Invalid "responsiveSteps" type, an Array is required.');
        }
        if (responsiveSteps.length < 1) {
          throw new Error('Invalid empty "responsiveSteps" array, at least one item is required.');
        }
        responsiveSteps.forEach((step) => {
          if (this._naturalNumberOrOne(step.columns) !== step.columns) {
            throw new Error(`Invalid 'columns' value of ${step.columns}, a natural number is required.`);
          }
          if (step.minWidth !== void 0 && !this._isValidCSSLength(step.minWidth)) {
            throw new Error(`Invalid 'minWidth' value of ${step.minWidth}, a valid CSS length required.`);
          }
          if (step.labelsPosition !== void 0 && ["aside", "top"].indexOf(step.labelsPosition) === -1) {
            throw new Error(
              `Invalid 'labelsPosition' value of ${step.labelsPosition}, 'aside' or 'top' string is required.`
            );
          }
        });
      } catch (e9) {
        if (oldResponsiveSteps && oldResponsiveSteps !== responsiveSteps) {
          console.warn(`${e9.message} Using previously set 'responsiveSteps' instead.`);
          this.responsiveSteps = oldResponsiveSteps;
        } else {
          console.warn(`${e9.message} Using default 'responsiveSteps' instead.`);
          this.responsiveSteps = [
            { minWidth: 0, columns: 1, labelsPosition: "top" },
            { minWidth: "20em", columns: 1 },
            { minWidth: "40em", columns: 2 }
          ];
        }
      }
      this._selectResponsiveStep();
    }
    __onAnimationEnd(e9) {
      if (e9.animationName.indexOf("vaadin-form-layout-appear") === 0) {
        this._selectResponsiveStep();
      }
    }
    _selectResponsiveStep() {
      let selectedStep;
      const tmpStyleProp = "background-position";
      this.responsiveSteps.forEach((step) => {
        this.$.layout.style.setProperty(tmpStyleProp, step.minWidth);
        const stepMinWidthPx = parseFloat(getComputedStyle(this.$.layout).getPropertyValue(tmpStyleProp));
        if (stepMinWidthPx <= this.offsetWidth) {
          selectedStep = step;
        }
      });
      this.$.layout.style.removeProperty(tmpStyleProp);
      if (selectedStep) {
        this._columnCount = selectedStep.columns;
        this._labelsOnTop = selectedStep.labelsPosition === "top";
      }
    }
    _invokeUpdateLayout() {
      this._updateLayout();
    }
    updateStyles(properties = {}) {
      console.warn(
        `WARNING: Since Vaadin 23, updateStyles() is deprecated. Use the native element.style.setProperty API to set custom CSS property values.`
      );
      Object.entries(properties).forEach(([key, value]) => {
        this.style.setProperty(key, value);
      });
      this._updateLayout();
    }
    _updateLayout() {
      const style2 = getComputedStyle(this);
      const columnSpacing = style2.getPropertyValue("--vaadin-form-layout-column-spacing");
      const direction = style2.direction;
      const marginStartProp = `margin-${direction === "ltr" ? "left" : "right"}`;
      const marginEndProp = `margin-${direction === "ltr" ? "right" : "left"}`;
      const containerWidth = this.offsetWidth;
      let col = 0;
      Array.from(this.children).filter((child) => child.localName === "br" || getComputedStyle(child).display !== "none").forEach((child, index, children) => {
        if (child.localName === "br") {
          col = 0;
          return;
        }
        let colspan;
        colspan = this._naturalNumberOrOne(parseFloat(child.getAttribute("colspan")));
        colspan = Math.min(colspan, this._columnCount);
        const childRatio = colspan / this._columnCount;
        child.style.width = `calc(${childRatio * 99.9}% - ${1 - childRatio} * ${columnSpacing})`;
        if (col + colspan > this._columnCount) {
          col = 0;
        }
        if (col === 0) {
          child.style.setProperty(marginStartProp, "0px");
        } else {
          child.style.removeProperty(marginStartProp);
        }
        const nextIndex = index + 1;
        const nextLineBreak = nextIndex < children.length && children[nextIndex].localName === "br";
        if (col + colspan === this._columnCount) {
          child.style.setProperty(marginEndProp, "0px");
        } else if (nextLineBreak) {
          const colspanRatio = (this._columnCount - col - colspan) / this._columnCount;
          child.style.setProperty(
            marginEndProp,
            `calc(${colspanRatio * containerWidth}px + ${colspanRatio} * ${columnSpacing})`
          );
        } else {
          child.style.removeProperty(marginEndProp);
        }
        col = (col + colspan) % this._columnCount;
        if (child.localName === "vaadin-form-item") {
          if (this._labelsOnTop) {
            if (child.getAttribute("label-position") !== "top") {
              child.__useLayoutLabelPosition = true;
              child.setAttribute("label-position", "top");
            }
          } else if (child.__useLayoutLabelPosition) {
            delete child.__useLayoutLabelPosition;
            child.removeAttribute("label-position");
          }
        }
      });
    }
    _onResize() {
      this._selectResponsiveStep();
    }
  };
  customElements.define(FormLayout.is, FormLayout);

  // node_modules/@vaadin/button/theme/lumo/vaadin-button-styles.js
  var button = i`
  :host {
    /* Sizing */
    --lumo-button-size: var(--lumo-size-m);
    min-width: calc(var(--lumo-button-size) * 2);
    height: var(--lumo-button-size);
    padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius-m) / 2);
    margin: var(--lumo-space-xs) 0;
    box-sizing: border-box;
    /* Style */
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 500;
    color: var(--_lumo-button-color, var(--lumo-primary-text-color));
    background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Set only for the internal parts so we don’t affect the host vertical alignment */
  [part='label'],
  [part='prefix'],
  [part='suffix'] {
    line-height: var(--lumo-line-height-xs);
  }

  [part='label'] {
    padding: calc(var(--lumo-button-size) / 6) 0;
  }

  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-button-size: var(--lumo-size-s);
  }

  :host([theme~='large']) {
    font-size: var(--lumo-font-size-l);
    --lumo-button-size: var(--lumo-size-l);
  }

  /* For interaction states */
  :host::before,
  :host::after {
    content: '';
    /* We rely on the host always being relative */
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
  }

  /* Hover */

  @media (any-hover: hover) {
    :host(:hover)::before {
      opacity: 0.02;
    }
  }

  /* Active */

  :host::after {
    transition: opacity 1.4s, transform 0.1s;
    filter: blur(8px);
  }

  :host([active])::before {
    opacity: 0.05;
    transition-duration: 0s;
  }

  :host([active])::after {
    opacity: 0.1;
    transition-duration: 0s, 0s;
    transform: scale(0);
  }

  /* Keyboard focus */

  :host([focus-ring]) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  :host([theme~='primary'][focus-ring]) {
    box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
  }

  /* Types (primary, tertiary, tertiary-inline */

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    background-color: transparent !important;
    min-width: 0;
  }

  :host([theme~='tertiary']) {
    padding: 0 calc(var(--lumo-button-size) / 6);
  }

  :host([theme~='tertiary-inline'])::before {
    display: none;
  }

  :host([theme~='tertiary-inline']) {
    margin: 0;
    height: auto;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
  }

  :host([theme~='tertiary-inline']) [part='label'] {
    padding: 0;
    overflow: visible;
    line-height: inherit;
  }

  :host([theme~='primary']) {
    background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
    color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
    font-weight: 600;
    min-width: calc(var(--lumo-button-size) * 2.5);
  }

  :host([theme~='primary'])::before {
    background-color: black;
  }

  @media (any-hover: hover) {
    :host([theme~='primary']:hover)::before {
      opacity: 0.05;
    }
  }

  :host([theme~='primary'][active])::before {
    opacity: 0.1;
  }

  :host([theme~='primary'][active])::after {
    opacity: 0.2;
  }

  /* Colors (success, error, contrast) */

  :host([theme~='success']) {
    color: var(--lumo-success-text-color);
  }

  :host([theme~='success'][theme~='primary']) {
    background-color: var(--lumo-success-color);
    color: var(--lumo-success-contrast-color);
  }

  :host([theme~='error']) {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  :host([theme~='contrast']) {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Disabled state. Keep selectors after other color variants. */

  :host([disabled]) {
    pointer-events: none;
    color: var(--lumo-disabled-text-color);
  }

  :host([theme~='primary'][disabled]) {
    background-color: var(--lumo-contrast-30pct);
    color: var(--lumo-base-color);
  }

  :host([theme~='primary'][disabled]) [part] {
    opacity: 0.7;
  }

  /* Icons */

  [part] ::slotted(vaadin-icon),
  [part] ::slotted(iron-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
  [part] ::slotted(vaadin-icon[icon^='vaadin:']),
  [part] ::slotted(iron-icon[icon^='vaadin:']) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  [part='prefix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  [part='suffix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  /* Icon-only */

  :host([theme~='icon']:not([theme~='tertiary-inline'])) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([theme~='icon']) [part='prefix'],
  :host([theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='prefix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  :host([dir='rtl']) [part='suffix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host([dir='rtl'][theme~='icon']) [part='prefix'],
  :host([dir='rtl'][theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }
`;
  registerStyles("vaadin-button", button, { moduleId: "lumo-button" });

  // node_modules/@vaadin/button/src/vaadin-button-mixin.js
  var ButtonMixin = (superClass) => class ButtonMixinClass extends ActiveMixin(TabindexMixin(FocusMixin(superClass))) {
    static get properties() {
      return {
        tabindex: {
          value: 0
        }
      };
    }
    get _activeKeys() {
      return ["Enter", " "];
    }
    ready() {
      super.ready();
      if (!this.hasAttribute("role")) {
        this.setAttribute("role", "button");
      }
    }
    _onKeyDown(event) {
      super._onKeyDown(event);
      if (this._activeKeys.includes(event.key)) {
        event.preventDefault();
        this.click();
      }
    }
  };

  // node_modules/@vaadin/button/src/vaadin-button.js
  var Button2 = class extends ButtonMixin(ElementMixin2(ThemableMixin(PolymerElement))) {
    static get is() {
      return "vaadin-button";
    }
    static get template() {
      return html`
      <style>
        :host {
          display: inline-block;
          position: relative;
          outline: none;
          white-space: nowrap;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Aligns the button with form fields when placed on the same line.
          Note, to make it work, the form fields should have the same "::before" pseudo-element. */
        .vaadin-button-container::before {
          content: '\\2003';
          display: inline-block;
          width: 0;
          max-height: 100%;
        }

        .vaadin-button-container {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          width: 100%;
          height: 100%;
          min-height: inherit;
          text-shadow: inherit;
        }

        [part='prefix'],
        [part='suffix'] {
          flex: none;
        }

        [part='label'] {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>
      <div class="vaadin-button-container">
        <span part="prefix">
          <slot name="prefix"></slot>
        </span>
        <span part="label">
          <slot></slot>
        </span>
        <span part="suffix">
          <slot name="suffix"></slot>
        </span>
      </div>
    `;
    }
  };
  customElements.define(Button2.is, Button2);

  // node_modules/@vaadin/progress-bar/theme/lumo/vaadin-progress-bar-styles.js
  registerStyles(
    "vaadin-progress-bar",
    i`
    :host {
      height: calc(var(--lumo-size-l) / 10);
      margin: var(--lumo-space-s) 0;
    }

    [part='bar'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
    }

    [part='value'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-primary-color);
      /* Use width instead of transform to preserve border radius */
      transform: none;
      width: calc(var(--vaadin-progress-value) * 100%);
      will-change: width;
      transition: 0.1s width linear;
    }

    /* Indeterminate mode */
    :host([indeterminate]) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      width: 100%;
      background-color: transparent !important;
      background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      opacity: 0.75;
      will-change: transform;
      animation: vaadin-progress-indeterminate 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-indeterminate {
      0% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    :host(:not([aria-valuenow])) [part='value']::before,
    :host([indeterminate]) [part='value']::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: var(--lumo-primary-color);
      will-change: opacity;
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-pulse3 {
      0% {
        opacity: 1;
      }

      10% {
        opacity: 0;
      }

      40% {
        opacity: 0;
      }

      50% {
        opacity: 1;
      }

      50.1% {
        opacity: 1;
      }

      60% {
        opacity: 0;
      }

      90% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    /* Contrast color */
    :host([theme~='contrast']) [part='value'],
    :host([theme~='contrast']) [part='value']::before {
      background-color: var(--lumo-contrast-80pct);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error']) [part='value'],
    :host([theme~='error']) [part='value']::before {
      background-color: var(--lumo-error-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success']) [part='value'],
    :host([theme~='success']) [part='value']::before {
      background-color: var(--lumo-success-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }

    /* RTL specific styles */
    :host([indeterminate][dir='rtl']) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      animation: vaadin-progress-indeterminate-rtl 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    :host(:not([aria-valuenow])[dir='rtl']) [part='value']::before,
    :host([indeterminate][dir='rtl']) [part='value']::before {
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    @keyframes vaadin-progress-indeterminate-rtl {
      0% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    /* Contrast color */
    :host([theme~='contrast'][dir='rtl']) [part='value'],
    :host([theme~='contrast'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error'][dir='rtl']) [part='value'],
    :host([theme~='error'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success'][dir='rtl']) [part='value'],
    :host([theme~='success'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }
  `,
    { moduleId: "lumo-progress-bar" }
  );
  var template4 = document.createElement("template");
  template4.innerHTML = `
  <style>
    @keyframes vaadin-progress-pulse3 {
      0% { opacity: 1; }
      10% { opacity: 0; }
      40% { opacity: 0; }
      50% { opacity: 1; }
      50.1% { opacity: 1; }
      60% { opacity: 0; }
      90% { opacity: 0; }
      100% { opacity: 1; }
    }
  </style>
`;
  document.head.appendChild(template4.content);

  // node_modules/@vaadin/progress-bar/src/vaadin-progress-mixin.js
  var ProgressMixin = (superClass) => class VaadinProgressMixin extends superClass {
    static get properties() {
      return {
        value: {
          type: Number,
          observer: "_valueChanged"
        },
        min: {
          type: Number,
          value: 0,
          observer: "_minChanged"
        },
        max: {
          type: Number,
          value: 1,
          observer: "_maxChanged"
        },
        indeterminate: {
          type: Boolean,
          value: false,
          reflectToAttribute: true
        }
      };
    }
    static get observers() {
      return ["_normalizedValueChanged(value, min, max)"];
    }
    ready() {
      super.ready();
      this.setAttribute("role", "progressbar");
    }
    _normalizedValueChanged(value, min, max) {
      const newNormalizedValue = this._normalizeValue(value, min, max);
      this.style.setProperty("--vaadin-progress-value", newNormalizedValue);
    }
    _valueChanged(newV) {
      this.setAttribute("aria-valuenow", newV);
    }
    _minChanged(newV) {
      this.setAttribute("aria-valuemin", newV);
    }
    _maxChanged(newV) {
      this.setAttribute("aria-valuemax", newV);
    }
    _normalizeValue(value, min, max) {
      let nV;
      if (!value && value !== 0) {
        nV = 0;
      } else if (min >= max) {
        nV = 1;
      } else {
        nV = (value - min) / (max - min);
        nV = Math.min(Math.max(nV, 0), 1);
      }
      return nV;
    }
  };

  // node_modules/@vaadin/progress-bar/src/vaadin-progress-bar.js
  var ProgressBar = class extends ElementMixin2(ThemableMixin(ProgressMixin(PolymerElement))) {
    static get template() {
      return html`
      <style>
        :host {
          display: block;
          width: 100%; /* prevent collapsing inside non-stretching column flex */
          height: 8px;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='bar'] {
          height: 100%;
        }

        [part='value'] {
          height: 100%;
          transform-origin: 0 50%;
          transform: scaleX(var(--vaadin-progress-value));
        }

        /* RTL specific styles */

        :host([dir='rtl']) [part='value'] {
          transform-origin: 100% 50%;
        }
      </style>

      <div part="bar">
        <div part="value"></div>
      </div>
    `;
    }
    static get is() {
      return "vaadin-progress-bar";
    }
  };
  customElements.define(ProgressBar.is, ProgressBar);
})();
/*! showdown v 2.1.0 - 21-04-2022 */
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
