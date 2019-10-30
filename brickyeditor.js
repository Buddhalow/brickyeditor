"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("tsc/common/Common", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.str = {
        totalTrim: function (s) {
            return s !== undefined ? s.replace(/\s\s+/g, " ").trim() : "";
        },
        equalsInvariant: function (s1, s2) {
            if (!s1 || !s2) {
                return s1 === s2;
            }
            return s1.toLowerCase() === s2.toLowerCase();
        },
        startsWith: function (s1, s2) { return s1.indexOf(s2) === 0; },
    };
    var Common = (function () {
        function Common() {
        }
        Common.extend = function (out) {
            var extensions = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                extensions[_i - 1] = arguments[_i];
            }
            out = out || {};
            for (var i = 1; i < extensions.length; i++) {
                if (!extensions[i]) {
                    continue;
                }
                for (var key in extensions[i]) {
                    if (extensions[i].hasOwnProperty(key)) {
                        out[key] = extensions[i][key];
                    }
                }
            }
            return out;
        };
        Common.getSelectedText = function () {
            var text = "";
            var doc = document;
            if (window.getSelection) {
                text = window.getSelection().toString();
            }
            else if (doc.selection && doc.selection.type !== "Control") {
                text = doc.selection.createRange().text;
            }
            return text;
        };
        Common.propsEach = function (obj, func) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    var value = obj[key];
                    func(key, value);
                }
            }
        };
        Common.propsFilterKeys = function (obj, filter, payload) {
            var result = [];
            Common.propsEach(obj, function (key, value) {
                if (filter(key, value)) {
                    result.push(key);
                }
            });
            if (payload) {
                result.push(payload);
            }
            return result;
        };
        return Common;
    }());
    exports.Common = Common;
});
define("tsc/common/DOMHelpers", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $dom = (function () {
        function $dom() {
        }
        $dom.el = function (html) {
            var div = document.createElement("div");
            div.innerHTML = html;
            var el = div.firstElementChild;
            div.innerHTML = null;
            return el;
        };
        $dom.ons = function (el, events, listener) {
            var _this = this;
            events.split(" ").forEach(function (ev) {
                _this.on(el, ev, listener);
            });
        };
        $dom.on = function (el, event, listener) {
            if (el.attachEvent)
                return el.attachEvent("on" + event, listener);
            else {
                return el.addEventListener(event, listener, false);
            }
        };
        $dom.offset = function (el) {
            var rect = el.getBoundingClientRect();
            var $body = document.body;
            return {
                top: rect.top + $body.scrollTop,
                left: rect.left + $body.scrollLeft,
            };
        };
        $dom.wrap = function (el, toEl) {
            el.parentElement.insertBefore(toEl, el);
            toEl.appendChild(el);
        };
        $dom.unwrap = function (el) {
            if (!el.parentElement)
                return;
            var parentsParent = el.parentElement.parentElement;
            if (parentsParent) {
                parentsParent.replaceChild(el, el.parentElement);
            }
            else {
                el.parentElement.innerHTML = el.innerHTML;
            }
        };
        $dom.hide = function (el) {
            el.style.display = "none";
        };
        $dom.show = function (el) {
            el.style.display = "block";
        };
        $dom.isHidden = function (el) {
            var style = window.getComputedStyle(el);
            return style.display === "none";
        };
        $dom.toggle = function (el, force) {
            var show = force ? force.valueOf() : this.isHidden(el);
            if (show) {
                this.show(el);
            }
            else {
                this.hide(el);
            }
        };
        $dom.before = function (el, elToInsert) {
            var _this = this;
            if (elToInsert instanceof HTMLElement) {
                el.parentNode.insertBefore(elToInsert, el);
            }
            else {
                elToInsert.forEach(function ($el) { return _this.before(el, $el); });
            }
        };
        $dom.after = function (el, elToInsert) {
            if (el.nextSibling) {
                el.parentNode.insertBefore(elToInsert, el);
            }
            else {
                el.parentNode.appendChild(elToInsert);
            }
        };
        $dom.hasClass = function (el, className) {
            if (el.classList) {
                return el.classList.contains(className);
            }
            else {
                return new RegExp("(^| )" + className + "( |$)", "gi").test(el.className);
            }
        };
        $dom.addClass = function (el, className) {
            if (this.hasClass(el, className)) {
                return;
            }
            if (el.classList) {
                el.classList.add(className);
            }
            else {
                el.className += " " + className;
            }
        };
        $dom.removeClass = function (el, className) {
            if (el.classList) {
                el.classList.remove(className);
            }
            else {
                el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
            }
        };
        $dom.toggleClass = function (el, className, force) {
            if (force) {
                if (force.valueOf()) {
                    this.addClass(el, className);
                }
                else {
                    this.removeClass(el, className);
                }
                return;
            }
            if (el.classList) {
                el.classList.toggle(className);
            }
            else {
                var classes = el.className.split(" ");
                var existingIndex = -1;
                for (var i = classes.length; i--;) {
                    if (classes[i] === className) {
                        existingIndex = i;
                    }
                }
                if (existingIndex >= 0) {
                    classes.splice(existingIndex, 1);
                }
                else {
                    classes.push(className);
                }
                el.className = classes.join(" ");
            }
        };
        $dom.windowScrollTop = function () {
            return window.pageYOffset !== undefined
                ? window.pageYOffset
                : ((document.documentElement ||
                    document.body.parentNode ||
                    document.body)).scrollTop;
        };
        $dom.replaceWith = function (from, to) {
            var parent = from.parentElement;
            if (parent) {
                parent.replaceChild(to, from);
            }
        };
        $dom.select = function (el, selector, addBack) {
            if (addBack === void 0) { addBack = false; }
            var elements = el.querySelectorAll(selector);
            var result = Array.prototype.slice.call(elements);
            if (addBack && addBack.valueOf() && $dom.matches(el, selector)) {
                result.push(el);
            }
            return result;
        };
        $dom.find = function (selector) {
            return document.querySelector(selector);
        };
        $dom.first = function (el, selector) {
            return el.querySelector(selector);
        };
        $dom.clone = function (el) {
            return el.cloneNode(true);
        };
        $dom.trigger = function (el, ev, data) {
            if (window.CustomEvent) {
                var event = new CustomEvent(ev, { detail: data });
            }
            else {
                var event = document.createEvent("CustomEvent");
                event.initCustomEvent(ev, true, true, data);
            }
            el.dispatchEvent(event);
        };
        $dom.matches = function (el, selector) {
            var matches = el.matches ||
                el.matchesSelector ||
                el.msMatchesSelector ||
                el.mozMatchesSelector ||
                el.webkitMatchesSelector ||
                el.oMatchesSelector;
            return matches.call(el, selector);
        };
        $dom.data = function (el, prop) {
            var json = el.dataset[prop];
            var data = null;
            try {
                data = JSON.parse(json);
            }
            catch (e) {
                if (e instanceof SyntaxError) {
                    json = json.replace(/'/g, '"');
                    try {
                        data = JSON.parse(json);
                    }
                    catch (_a) { }
                }
            }
            return data;
        };
        return $dom;
    }());
    exports.$dom = $dom;
});
define("tsc/block/BlockUIAction", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BlockUIAction = (function () {
        function BlockUIAction(icon, action, title) {
            this.icon = icon;
            this.action = action;
            this.title = title;
        }
        return BlockUIAction;
    }());
    exports.BlockUIAction = BlockUIAction;
});
define("tsc/ui/SelectionUtils", ["require", "exports", "tsc/common/DOMHelpers"], function (require, exports, DOMHelpers_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getSelectionRanges = function () {
        var selection = window.getSelection();
        if (selection === null) {
            return null;
        }
        var selectionRanges = [];
        for (var idx = 0; idx < selection.rangeCount; idx++) {
            selectionRanges.push(selection.getRangeAt(idx));
        }
        return selectionRanges;
    };
    exports.restoreSelection = function (selectionRanges) {
        if (selectionRanges === null || selectionRanges.length === 0) {
            return;
        }
        var selection = window.getSelection();
        if (selection !== null) {
            selection.removeAllRanges();
            selectionRanges.forEach(function (range) { return selection.addRange(range); });
        }
    };
    var SelectionUtils = (function () {
        function SelectionUtils() {
        }
        SelectionUtils.bindTextSelection = function ($el, handler) {
            var _this = this;
            if (!DOMHelpers_1.$dom.matches($el, "[contenteditable]")) {
                return;
            }
            DOMHelpers_1.$dom.on($el, "mouseup", function () {
                setTimeout(function () {
                    var rect = _this.getSelectionRect();
                    handler(rect);
                }, 0);
            });
            DOMHelpers_1.$dom.on($el, "keyup", function () {
                var rect = _this.getSelectionRect();
                handler(rect);
            });
        };
        SelectionUtils.getSelectionRect = function () {
            var selection = window.getSelection();
            if (selection === null) {
                return null;
            }
            var range = selection.getRangeAt(0);
            return range.getBoundingClientRect();
        };
        return SelectionUtils;
    }());
    exports.SelectionUtils = SelectionUtils;
});
define("tsc/helpers", ["require", "exports", "tsc/ui/SelectionUtils"], function (require, exports, SelectionUtils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var createElement = function (html) {
        var temp = document.createElement("div");
        temp.innerHTML = html;
        var result = temp.children[0];
        temp.innerHTML = "";
        return result;
    };
    var toggleVisibility = function (el, visible) {
        if (visible !== undefined) {
            el.style.display = visible ? "initial" : "none";
            return;
        }
        el.style.display = el.style.display !== "none" ? "none" : "initial";
    };
    var modalTemplate = "\n<div>\n  <div class=\"bre-modal\" style=\"display: block;\">\n    <div class=\"bre-modal-placeholder\">\n    </div>\n  </div>\n</div>";
    var showModal = function (props) {
        var selection = SelectionUtils_1.getSelectionRanges();
        var element = createElement(modalTemplate);
        var placeholder = element.getElementsByClassName("bre-modal-placeholder")[0];
        var closeModal = function () {
            element.remove();
            element = null;
            SelectionUtils_1.restoreSelection(selection);
        };
        var content = props.content, onOk = props.onOk, onCancel = props.onCancel;
        content.forEach(function (el) { return placeholder.appendChild(el); });
        if (onOk !== undefined) {
            var buttonOk = createElement("<button type=\"button\">Save</button>");
            buttonOk.addEventListener("click", function () {
                onOk();
                closeModal();
            });
            placeholder.appendChild(buttonOk);
        }
        var buttonCancel = createElement("<button type=\"button\">Cancel</button>");
        buttonCancel.addEventListener("click", function () {
            if (onCancel) {
                onCancel();
            }
            closeModal();
        });
        placeholder.appendChild(buttonCancel);
        document.body.appendChild(element);
    };
    exports.helpers = { createElement: createElement, showModal: showModal, toggleVisibility: toggleVisibility };
});
define("tsc/BlocksContainer", ["require", "exports", "tsc/block/Block", "tsc/common/DOMHelpers", "tsc/helpers"], function (require, exports, Block_1, DOMHelpers_2, helpers_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getContainerData = function (container, ignoreHtml) { return container.blocks.map(function (block) { return block.getData(ignoreHtml); }); };
    exports.getContainerHtml = function (container) {
        var html = container.blocks.map(function (block) { return block.getHtml(true); }).join("\n");
        var root = container.$element.cloneNode(false);
        root.innerHTML = html;
        return root.outerHTML;
    };
    var getDefaultPlaceholder = function () {
        return helpers_1.helpers.createElement('<i data-bre-placeholder="true">Click here to select this container...</i>');
    };
    var toggleContainerPlaceholderIfNeed = function (container) {
        if (container.usePlaceholder !== true) {
            return;
        }
        if (container.$placeholder !== undefined) {
            container.$placeholder.remove();
            container.$placeholder = undefined;
            return;
        }
        if (container.blocks.length === 0) {
            var $placeholder = getDefaultPlaceholder();
            container.$placeholder = $placeholder;
            container.$element.appendChild($placeholder);
        }
    };
    var BlocksContainer = (function () {
        function BlocksContainer($element, onAddBlock, onDeleteBlock, onSelectBlock, onDeselectBlock, onMoveBlock, onUpdateBlock, onUpload, usePlaceholder) {
            if (usePlaceholder === void 0) { usePlaceholder = false; }
            this.onAddBlock = onAddBlock;
            this.onDeleteBlock = onDeleteBlock;
            this.onSelectBlock = onSelectBlock;
            this.onDeselectBlock = onDeselectBlock;
            this.onMoveBlock = onMoveBlock;
            this.onUpdateBlock = onUpdateBlock;
            this.onUpload = onUpload;
            this.blocks = [];
            this.isContainer = true;
            this.$element = $element;
            this.usePlaceholder = usePlaceholder;
            toggleContainerPlaceholderIfNeed(this);
        }
        BlocksContainer.prototype.addBlock = function (name, html, data, idx, select) {
            var _this = this;
            if (select === void 0) { select = true; }
            var block = new Block_1.Block(name, html, false, data, {
                onDelete: this.deleteBlock,
                onSelect: this.selectBlock,
                onDeselect: this.deselectBlock,
                onCopy: this.copyBlock,
                onMove: function (b, offset) { return _this.moveBlock(b, offset); },
                onUpdate: this.onUpdateBlock,
                onUpload: this.onUpload,
            });
            this.insertBlock(block, idx);
            if (select) {
                block.select();
                block.scrollTo();
            }
        };
        BlocksContainer.prototype.insertBlock = function (block, idx) {
            idx = idx || this.blocks.length;
            if (this.selectedBlock) {
                idx = this.blocks.indexOf(this.selectedBlock) + 1;
            }
            this.blocks.splice(idx, 0, block);
            if (idx === 0) {
                this.$element.appendChild(block.ui.$editor);
            }
            else {
                DOMHelpers_2.$dom.after(this.blocks[idx - 1].ui.$editor, block.ui.$editor);
            }
            this.onAddBlock(block, idx);
            block.select(undefined);
            toggleContainerPlaceholderIfNeed(this);
        };
        BlocksContainer.prototype.deleteBlock = function (block) {
            var idx = this.blocks.indexOf(block);
            this.blocks.splice(idx, 1);
            block = null;
            if (idx < this.blocks.length) {
                this.blocks[idx].select();
            }
            else if (this.blocks.length > 0) {
                this.blocks[idx - 1].select();
            }
            else {
                this.selectedBlock = null;
            }
            this.onDeleteBlock(block, idx);
            toggleContainerPlaceholderIfNeed(this);
        };
        BlocksContainer.prototype.moveBlock = function (block, offset) {
            var idx = this.blocks.indexOf(block);
            var new_idx = idx + offset;
            if (new_idx >= this.blocks.length || new_idx < 0) {
                return;
            }
            var $anchorBlock = this.blocks[new_idx].ui.$editor;
            if (offset > 0) {
                DOMHelpers_2.$dom.after($anchorBlock, block.ui.$editor);
            }
            else if (offset < 0) {
                DOMHelpers_2.$dom.before($anchorBlock, block.ui.$editor);
            }
            this.blocks.splice(idx, 1);
            this.blocks.splice(new_idx, 0, block);
            this.onMoveBlock(block, idx, new_idx);
            block.scrollTo();
        };
        BlocksContainer.prototype.copyBlock = function (block) {
            var idx = this.blocks.indexOf(block) + 1;
            this.addBlock(block.name, block.html, block.getData().fields, idx, true);
        };
        BlocksContainer.prototype.selectBlock = function (block) {
            if (this.selectedBlock === block) {
                return;
            }
            if (this.selectedBlock) {
                this.selectedBlock.deselect();
            }
            this.selectedBlock = block;
            this.onSelectBlock(block);
        };
        BlocksContainer.prototype.deselectBlock = function (block) {
            this.selectedBlock = null;
            this.onDeselectBlock(block);
        };
        return BlocksContainer;
    }());
    exports.BlocksContainer = BlocksContainer;
});
define("tsc/defaults", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var defaultButtons = [
        { icon: "bold", command: "Bold", range: true },
        { icon: "italic", command: "Italic", range: true },
        { icon: "link", command: "CreateLink", range: true },
        {
            icon: "list-ul",
            command: "insertUnorderedList",
            range: true,
        },
        {
            icon: "list-ol",
            command: "insertOrderedList",
            range: true,
        },
        { icon: "undo", command: "Undo", range: false },
        { icon: "repeat", command: "Redo", range: false },
    ];
    exports.defaultOptions = {
        templatesUrl: "templates/bootstrap4.html",
        compactTools: false,
        compactToolsWidth: 768,
        ignoreHtml: true,
        onError: function (data) {
            console.log(data.message);
        },
        htmlToolsButtons: defaultButtons,
    };
});
define("tsc/EditorStrings", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EditorStrings = (function () {
        function EditorStrings() {
        }
        EditorStrings.embedFieldLinkTitle = "Link to embed media";
        EditorStrings.embedFieldLinkPlaceholder = "Link to instagram, youtube and etc.";
        EditorStrings.imageFieldLinkTitle = "Image link";
        EditorStrings.imageFieldLinkPlaceholder = "http://url-to-image.png";
        EditorStrings.imageFieldUploadTitle = "or Upload a file";
        EditorStrings.imageFieldUploadButton = "Select file";
        EditorStrings.imageFieldAltTitle = "Alt";
        EditorStrings.imageFieldAltPlaceholder = "Image 'alt' attribute value";
        EditorStrings.imageFieldUrlSubtitle = "Link to open on image click";
        EditorStrings.htmlEditorLinkUrlTitle = "Url";
        EditorStrings.htmlEditorLinkUrlPlaceholder = "http://put-your-link.here";
        EditorStrings.htmlEditorLinkTitleTitle = "Title";
        EditorStrings.htmlEditorLinkTitlePlaceholder = "Title attribute for link";
        EditorStrings.htmlEditorLinkTargetTitle = "Target";
        EditorStrings.htmlEditorLinkTargetBlank = "Blank";
        EditorStrings.htmlEditorLinkTargetSelf = "Self";
        EditorStrings.htmlEditorLinkTargetParent = "Parent";
        EditorStrings.htmlEditorLinkTargetTop = "Top";
        EditorStrings.buttonClose = "close";
        EditorStrings.buttonOk = "Ok";
        EditorStrings.buttonCancel = "Cancel";
        EditorStrings.defaultTemplatesGroupName = "Other templates";
        EditorStrings.errorBlocksFileNotFound = function (url) {
            return "Blocks file not found. Requested file: " + url + ".";
        };
        EditorStrings.errorTemplatesFileNotFound = function (url) {
            return "Templates file not found. Requested file: " + url + ".";
        };
        EditorStrings.errorBlockTemplateNotFound = function (templateName) {
            return "Template \"" + templateName + "\" not found.";
        };
        EditorStrings.errorTemplateParsing = function (name) {
            return "Template parsing error: " + name + ".";
        };
        return EditorStrings;
    }());
    exports.EditorStrings = EditorStrings;
});
define("tsc/httpTransport", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getRequest = function (url) {
        return new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();
            request.open("GET", url, true);
            request.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status >= 200 && this.status < 400) {
                        var data = null;
                        try {
                            data = JSON.parse(this.responseText);
                        }
                        catch (_a) {
                            data = this.responseText;
                        }
                        try {
                            resolve(data);
                        }
                        catch (ex) {
                            reject(ex);
                        }
                    }
                    else {
                        reject();
                    }
                }
            };
            request.send();
            request = null;
        });
    };
    exports.loadScript = function (url) {
        return new Promise(function (resolve, reject) {
            var script = document.createElement("script");
            var done = false;
            var scriptDocLoadedHandler = function () {
                debugger;
                var readyState = script.readyState;
                if (done === false &&
                    (readyState === undefined ||
                        readyState === "loaded" ||
                        readyState === "complete")) {
                    done = true;
                    resolve();
                }
                else {
                    reject();
                }
            };
            script.onload = scriptDocLoadedHandler;
            if (script.onreadystatechange !== undefined) {
                script.onreadystatechange = scriptDocLoadedHandler;
            }
            script.src = url;
            document.head.appendChild(script);
        });
    };
    exports.jsonp = function (url) {
        return new Promise(function (resolve, reject) {
            var id = "_" + Math.round(10000 * Math.random());
            var callbackName = "jsonp_callback_" + id;
            window[callbackName] = function (data) {
                delete window[callbackName];
                var element = document.getElementById(id);
                if (element !== null) {
                    element.remove();
                }
                resolve(data);
            };
            var src = url + "&callback=" + callbackName;
            var script = document.createElement("script");
            script.src = src;
            script.id = id;
            script.addEventListener("error", reject);
            (document.getElementsByTagName("head")[0] ||
                document.body ||
                document.documentElement).appendChild(script);
        });
    };
});
define("tsc/shared", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _ui = null;
    exports.setUI = function (ui) { return (_ui = ui); };
    exports.getUI = function () { return _ui; };
});
define("tsc/ui/Selectors", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Selectors = (function () {
        function Selectors() {
        }
        Selectors.attr = function (attr) {
            return "[" + attr + "]";
        };
        Selectors.attrContentEditable = "contenteditable";
        Selectors.selectorContentEditable = "contenteditable";
        Selectors.attrField = "data-bre-field";
        Selectors.selectorField = "[" + Selectors.attrField + "]";
        Selectors.classEditor = "bre-editor";
        Selectors.classTemplate = "bre-template";
        Selectors.selectorTemplate = "." + Selectors.classTemplate;
        Selectors.classTemplateGroup = "bre-template-group";
        Selectors.selectorTemplateGroup = "." + Selectors.classTemplateGroup;
        Selectors.selectorTemplatePreview = ".bre-template-preview";
        Selectors.classMobile = "brickyeditor-tools-mobile";
        Selectors.htmlToolsCommand = "data-bre-doc-command";
        Selectors.htmlToolsCommandRange = "data-bre-doc-command-range";
        Selectors.selectorFieldSelected = "bre-field-selected";
        Selectors.selectorFieldContainer = "bre-field-container";
        Selectors.selectorHtmlToolsCommand = Selectors.attr(Selectors.htmlToolsCommand);
        Selectors.selectorHtmlToolsCommandRange = Selectors.attr(Selectors.htmlToolsCommandRange);
        return Selectors;
    }());
    exports.Selectors = Selectors;
});
define("tsc/template", ["require", "exports", "tsc/block/Block", "tsc/common/Common", "tsc/common/DOMHelpers", "tsc/EditorStrings", "tsc/helpers", "tsc/httpTransport", "tsc/ui/Selectors"], function (require, exports, Block_2, Common_1, DOMHelpers_3, EditorStrings_1, helpers_2, httpTransport_1, Selectors_1) {
    "use strict";
    var _this = this;
    Object.defineProperty(exports, "__esModule", { value: true });
    var allTemplates = [];
    exports.getTemplate = function (templateName) {
        var template = allTemplates.find(function (x) {
            return Common_1.str.equalsInvariant(x.name, templateName);
        });
        return template || null;
    };
    exports.loadTemplatesAsync = function (url, $editor, onError) { return __awaiter(_this, void 0, void 0, function () {
        var grouppedTemplates, data, $data, $style, $groups, ungrouppedTemplates, ungrouppedTemplatesGroupName, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    grouppedTemplates = [];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4, httpTransport_1.getRequest(url)];
                case 2:
                    data = _a.sent();
                    $data = helpers_2.helpers.createElement("<div>" + data + "</div>");
                    $style = $data.querySelector("style");
                    if ($style !== null) {
                        DOMHelpers_3.$dom.before($editor, $style);
                    }
                    $groups = $data.querySelectorAll(Selectors_1.Selectors.selectorTemplateGroup);
                    $groups.forEach(function ($group) {
                        var name = $group.getAttribute("title");
                        var templates = parseTemplates($group, onError);
                        grouppedTemplates.push({ name: name, templates: templates });
                        $group.remove();
                        allTemplates = allTemplates.concat(templates);
                    });
                    ungrouppedTemplates = parseTemplates($data, onError);
                    ungrouppedTemplatesGroupName = grouppedTemplates.length > 0
                        ? EditorStrings_1.EditorStrings.defaultTemplatesGroupName
                        : "";
                    grouppedTemplates.push({
                        name: ungrouppedTemplatesGroupName,
                        templates: ungrouppedTemplates,
                    });
                    allTemplates = allTemplates.concat(ungrouppedTemplates);
                    return [2, grouppedTemplates];
                case 3:
                    err_1 = _a.sent();
                    onError(EditorStrings_1.EditorStrings.errorTemplatesFileNotFound(url));
                    throw err_1;
                case 4: return [2];
            }
        });
    }); };
    var parseTemplates = function ($el, onError) {
        var templates = [];
        var $templates = $el.querySelectorAll(Selectors_1.Selectors.selectorTemplate);
        $templates.forEach(function ($template) {
            var template = createTemplate($template, onError);
            if (template !== null) {
                templates.push(template);
            }
        });
        return templates;
    };
    exports.getTemplatePreview = function (template) {
        var $template = helpers_2.helpers.createElement("<div class='" + Selectors_1.Selectors.classTemplate + "'></div>");
        $template.appendChild(template.$preview);
        return $template;
    };
    var createTemplate = function ($template, onError) {
        var $html = $template;
        var name = $template.dataset.name || "";
        var $preview = $template.querySelector(Selectors_1.Selectors.selectorTemplatePreview);
        if ($preview !== null) {
            $template.removeChild($preview);
        }
        else {
            var block = new Block_2.Block(name, $html.innerHTML, true);
            var blockHtml = block.getHtml(true);
            if (blockHtml === null) {
                onError(EditorStrings_1.EditorStrings.errorTemplateParsing(name));
                return null;
            }
            $preview = helpers_2.helpers.createElement(blockHtml);
        }
        return {
            name: name,
            $html: $html,
            $preview: $preview,
        };
    };
});
define("tsc/Editor", ["require", "exports", "tsc/BlocksContainer", "tsc/common/Common", "tsc/common/DOMHelpers", "tsc/defaults", "tsc/EditorStrings", "tsc/Fields/Fields", "tsc/httpTransport", "tsc/shared", "tsc/template", "tsc/ui/Selectors", "tsc/ui/UI"], function (require, exports, BlocksContainer_1, Common_2, DOMHelpers_4, defaults_1, EditorStrings_2, Fields_1, httpTransport_2, shared_1, template_1, Selectors_2, UI_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Editor = (function () {
        function Editor($editor, options) {
            var _this = this;
            this.isLoaded = false;
            this.getData = function () {
                return BlocksContainer_1.getContainerData(_this.container, _this.options.ignoreHtml);
            };
            this.getHtml = function () { return BlocksContainer_1.getContainerHtml(_this.container); };
            this.onError = function (message, code) {
                if (code === void 0) { code = 0; }
                return _this.options.onError({ message: message, code: code });
            };
            Fields_1.BaseField.registerCommonFields();
            this.$editor = $editor;
            this.$editor.classList.add(Selectors_2.Selectors.classEditor);
            this.options = __assign({}, defaults_1.defaultOptions, options);
            this.container = this.createContainer();
            Editor.UI = new UI_1.UI(this);
            shared_1.setUI(Editor.UI);
            this.tryBindFormSubmit();
        }
        Editor.prototype.initAsync = function () {
            return __awaiter(this, void 0, void 0, function () {
                var editor, templates, blocks;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            editor = this;
                            Editor.UI.toggleToolsLoader(true);
                            return [4, template_1.loadTemplatesAsync(editor.options.templatesUrl, editor.$editor, editor.onError)];
                        case 1:
                            templates = _a.sent();
                            Editor.UI.toggleToolsLoader(false);
                            Editor.UI.setTemplates(templates);
                            return [4, this.tryLoadInitialBlocksAsync()];
                        case 2:
                            blocks = _a.sent();
                            if (blocks !== null) {
                                this.loadBlocks(blocks);
                            }
                            this.isLoaded = true;
                            this.trigger("onLoad", this);
                            return [2];
                    }
                });
            });
        };
        Editor.prototype.tryBindFormSubmit = function () {
            var editor = this;
            var $form = this.options.formSelector
                ? DOMHelpers_4.$dom.find(this.options.formSelector)
                : null;
            var $input = this.options.inputSelector
                ? DOMHelpers_4.$dom.find(this.options.inputSelector)
                : null;
            if (!$form || !$input || !($input instanceof HTMLInputElement)) {
                return;
            }
            DOMHelpers_4.$dom.on($form, "submit", function () {
                $input.value = JSON.stringify(editor.getData());
                return true;
            });
        };
        Editor.prototype.loadBlocks = function (blocks) {
            var _this = this;
            if (blocks && blocks.length) {
                blocks.forEach(function (block) {
                    var template = template_1.getTemplate(block.name);
                    if (template) {
                        _this.container.addBlock(template.name, template.$html.innerHTML, block.fields, undefined, false);
                    }
                    else {
                        var message = EditorStrings_2.EditorStrings.errorBlockTemplateNotFound(block.name);
                        _this.onError(message);
                    }
                });
            }
        };
        Editor.prototype.addBlock = function (template) {
            var container = this.getContainer(this.container);
            container.addBlock(template.name, template.$html.innerHTML, undefined, undefined, true);
        };
        Editor.prototype.createContainer = function () {
            var _this = this;
            var onAdd = function (block, idx) {
                if (_this.isLoaded) {
                    _this.trigger("onBlockAdd", { block: block, idx: idx });
                    _this.trigger("onChange", {
                        blocks: _this.getData(),
                        html: _this.getHtml(),
                    });
                }
            };
            var onDelete = function (block, idx) {
                _this.trigger("onBlockDelete", { block: block, idx: idx });
                _this.trigger("onChange", {
                    blocks: _this.getData(),
                    html: _this.getHtml(),
                });
            };
            var onUpdate = function (block, property, oldValue, newValue) {
                _this.trigger("onBlockUpdate", {
                    block: block,
                    property: property,
                    oldValue: oldValue,
                    newValue: newValue,
                });
                _this.trigger("onChange", {
                    blocks: _this.getData(),
                    html: _this.getHtml(),
                });
            };
            return new BlocksContainer_1.BlocksContainer(this.$editor, onAdd, onDelete, function (block) {
                _this.trigger("onBlockSelect", { block: block });
            }, function (block) {
                _this.trigger("onBlockDeselect", { block: block });
            }, function (block, from, to) {
                _this.trigger("onBlockMove", { block: block, from: from, to: to });
                _this.trigger("onChange", {
                    blocks: _this.getData(),
                    html: _this.getHtml(),
                });
            }, onUpdate, this.options.onUpload);
        };
        Editor.prototype.tryLoadInitialBlocksAsync = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url, editor;
                var _this = this;
                return __generator(this, function (_a) {
                    url = this.options.blocksUrl;
                    editor = this;
                    return [2, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                            var blocks, error_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(url !== undefined)) return [3, 5];
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 3, , 4]);
                                        return [4, httpTransport_2.getRequest(url)];
                                    case 2:
                                        blocks = _a.sent();
                                        resolve(blocks);
                                        return [3, 4];
                                    case 3:
                                        error_1 = _a.sent();
                                        editor.onError(EditorStrings_2.EditorStrings.errorBlocksFileNotFound(url));
                                        reject(error_1);
                                        return [3, 4];
                                    case 4: return [3, 6];
                                    case 5:
                                        if (this.options.blocks !== undefined) {
                                            resolve(this.options.blocks);
                                        }
                                        else {
                                            resolve(null);
                                        }
                                        _a.label = 6;
                                    case 6: return [2];
                                }
                            });
                        }); })];
                });
            });
        };
        Editor.prototype.getContainer = function (container) {
            if (container.selectedBlock && container.selectedBlock.isContainer()) {
                var field = container.selectedBlock.selectedField;
                if (field) {
                    return this.getContainer(field.container);
                }
            }
            return container;
        };
        Editor.prototype.trigger = function (event, data) {
            var editor = this;
            DOMHelpers_4.$dom.trigger(this.$editor, "bre." + event, data);
            Common_2.Common.propsEach(editor.options, function (key, value) {
                if (Common_2.str.equalsInvariant(key, event) && value) {
                    value(data);
                }
            });
        };
        return Editor;
    }());
    exports.Editor = Editor;
});
define("tsc/locales", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.locales = {
        errorBlocksFileNotFound: function (url) {
            return "Blocks file not found. Requested file: " + url + ".";
        },
        errorTemplatesFileNotFound: function (url) {
            return "Templates file not found. Requested file: " + url + ".";
        },
        errorBlockTemplateNotFound: function (templateName) {
            return "Template \"" + templateName + "\" not found.";
        },
        errorTemplateParsing: function (name) {
            return "Template parsing error: " + name + ".";
        },
        embedFieldLinkTitle: "Link to embed media",
        embedFieldLinkPlaceholder: "Link to instagram, youtube and etc.",
        prompt: {
            image: {
                link: {
                    title: "Image link",
                    placeholder: "http://url-to-image.png",
                },
                alt: {
                    title: "Image alt",
                    placeholder: "Image 'alt' attribute value",
                },
                upload: {
                    title: "or Upload a file",
                    placeholder: "select file",
                    button: "Select file",
                },
                url: {
                    subtitle: "Link to open on image click",
                },
            },
            embed: {
                url: {
                    title: "URL to media",
                    placeholder: "Paste link to youtube, instagram, etc.",
                },
            },
            link: {
                href: {
                    title: "Url",
                    placeholder: "https://put-your-link.here",
                },
                title: {
                    title: "Title",
                    placeholder: "Title attribute for link",
                },
                target: {
                    title: "Target",
                    blank: "Blank",
                    self: "Self",
                    parent: "Parent",
                    top: "Top",
                },
            },
        },
        htmlEditorLinkUrlTitle: "Url",
        htmlEditorLinkUrlPlaceholder: "http://put-your-link.here",
        htmlEditorLinkTitleTitle: "Title",
        htmlEditorLinkTitlePlaceholder: "Title attribute for link",
        htmlEditorLinkTargetTitle: "Target",
        htmlEditorLinkTargetBlank: "Blank",
        htmlEditorLinkTargetSelf: "Self",
        htmlEditorLinkTargetParent: "Parent",
        htmlEditorLinkTargetTop: "Top",
        buttonClose: "close",
        buttonOk: "Ok",
        buttonCancel: "Cancel",
        defaultTemplatesGroupName: "Other templates",
    };
});
define("tsc/prompt", ["require", "exports", "tsc/helpers", "tsc/locales"], function (require, exports, helpers_3, locales_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var textFieldEditor = function (_a) {
        var key = _a.key, p = _a.p, data = _a.data;
        var html = "<input type='text' name='" + key + "' placeholder='" + p.placeholder + "' value='" + (p.value || "") + "' />";
        var input = helpers_3.helpers.createElement(html);
        input.onchange = function () {
            data[key] = input.value;
        };
        return input;
    };
    var fileFieldEditor = function (_a) {
        var key = _a.key, p = _a.p, data = _a.data;
        var file = data[key];
        var filePreview = helpers_3.helpers.createElement("<img src=\"" + p.value + "\"/>");
        var fileInput = helpers_3.helpers.createElement("<input type=\"file\" id=\"bre-modal-modal-" + key + "\" class=\"bre-input\" placeholder=\"" + p.placeholder + "\">");
        var fileName = helpers_3.helpers.createElement("<span class='bre-image-input-filename'></span>");
        var updatePreview = function () {
            if (file === undefined || file === null) {
                fileName.innerText = "";
                filePreview.src = "//:0";
            }
            else {
                fileName.innerText = file.name;
                var reader = new FileReader();
                reader.onload = function (ev) {
                    if (ev.target !== null && ev.target.result !== null) {
                        filePreview.src = ev.target.result.toString();
                    }
                };
                reader.readAsDataURL(file);
            }
        };
        fileInput.onchange = function () {
            file = fileInput.files && fileInput.files[0];
            updatePreview();
            data[key] = file;
        };
        updatePreview();
        var editor = helpers_3.helpers.createElement("<div class='bre-image-input'>\n    <label for=\"bre-modal-modal-" + key + "\">\n      " + p.placeholder + "\n    </label>\n  </div>");
        editor.append(filePreview, fileInput, fileName);
        return editor;
    };
    var selectFieldEditor = function (_a) {
        var key = _a.key, p = _a.p, data = _a.data;
        if (p.options === undefined) {
            throw new Error("Empty options");
        }
        var options = p.options
            .map(function (o) {
            return "<option value=\"" + o.title + "\" " + (o.value === p.value ? "selected" : "") + ">" + o.title + "</option>";
        })
            .join("\n");
        var html = "<select name='" + key + "' placeholder='" + p.placeholder + "'>" + options + "</select>";
        var select = helpers_3.helpers.createElement(html);
        select.onchange = function () {
            data[key] = select.value;
        };
        return select;
    };
    var parameterEditors = {
        text: textFieldEditor,
        file: fileFieldEditor,
        select: selectFieldEditor,
    };
    exports.promptAsync = function (params) {
        return new Promise(function (resolve) {
            var result = {};
            var editors = Object.keys(params).map(function (key) {
                var p = params[key];
                var editor = parameterEditors[p.type || "text"]({
                    key: key,
                    p: p,
                    data: result,
                });
                return editor;
            });
            helpers_3.helpers.showModal({
                content: editors,
                onOk: function () { return resolve(result); },
                onCancel: function () { return resolve(null); },
            });
        });
    };
    exports.getLinkPromptParams = function (link) { return ({
        title: {
            title: locales_1.locales.prompt.link.title.title,
            placeholder: locales_1.locales.prompt.link.title.placeholder,
            value: link ? link.getAttribute("title") : "",
        },
        href: {
            title: locales_1.locales.prompt.link.href.title,
            placeholder: locales_1.locales.prompt.link.href.placeholder,
            value: link ? link.getAttribute("href") : "",
        },
        target: {
            type: "select",
            title: locales_1.locales.prompt.link.target.title,
            value: link ? link.getAttribute("target") : "",
            options: [
                { title: "", value: "" },
                { title: locales_1.locales.prompt.link.target.blank, value: "_blank" },
                { title: locales_1.locales.prompt.link.target.parent, value: "_parent" },
                { title: locales_1.locales.prompt.link.target.self, value: "_self" },
                { title: locales_1.locales.prompt.link.target.top, value: "_top" },
            ],
        },
    }); };
});
define("tsc/UI/htmlTools", ["require", "exports", "tsc/common/Common", "tsc/helpers", "tsc/prompt", "tsc/ui/Selectors"], function (require, exports, Common_3, helpers_4, prompt_1, Selectors_3) {
    "use strict";
    var _this = this;
    Object.defineProperty(exports, "__esModule", { value: true });
    var promptLinkParamsAsync = function (selection) { return __awaiter(_this, void 0, void 0, function () {
        var currentLink, promptParams;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (selection.anchorNode !== null &&
                        selection.anchorNode.parentNode !== null &&
                        Common_3.str.equalsInvariant(selection.anchorNode.parentNode.nodeName, "a")) {
                        currentLink = selection.anchorNode.parentNode;
                    }
                    promptParams = prompt_1.getLinkPromptParams(currentLink);
                    return [4, prompt_1.promptAsync(promptParams)];
                case 1: return [2, _a.sent()];
            }
        });
    }); };
    var renderButtonElement = function (_a) {
        var icon = _a.icon, command = _a.command, range = _a.range, aValueArgument = _a.aValueArgument;
        var $btn = helpers_4.helpers.createElement("<button type=\"button\" class=\"bre-btn\"><i class=\"fa fa-" + icon + "\"></i></button>");
        $btn.onclick = function () { return __awaiter(_this, void 0, void 0, function () {
            var selection, selectionRange, link, valueArgument;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        selection = window.getSelection();
                        if (selection === null) {
                            return [2];
                        }
                        selectionRange = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
                        if (range && !selectionRange) {
                            return [2];
                        }
                        if (!(command === "CreateLink")) return [3, 2];
                        return [4, promptLinkParamsAsync(selection)];
                    case 1:
                        link = _a.sent();
                        if (link === null) {
                            return [2];
                        }
                        if (link.href) {
                            document.execCommand(command, false, link.href);
                            if (selection.anchorNode !== null &&
                                selection.anchorNode.parentElement !== null) {
                                if (link.target) {
                                    selection.anchorNode.parentElement.setAttribute("target", link.target);
                                }
                                if (link.title) {
                                    selection.anchorNode.parentElement.setAttribute("title", link.title);
                                }
                            }
                        }
                        return [3, 3];
                    case 2:
                        valueArgument = void 0;
                        if (typeof aValueArgument === "string") {
                            valueArgument = aValueArgument.replace("%%SELECTION%%", selection.toString());
                        }
                        try {
                            document.execCommand(command, false, valueArgument);
                        }
                        catch (_b) {
                            wrapSelectionToContainer(selection);
                            document.execCommand(command, false, valueArgument);
                        }
                        _a.label = 3;
                    case 3: return [2, false];
                }
            });
        }); };
        return $btn;
    };
    var renderControl = function (buttons) {
        var $panel = helpers_4.helpers.createElement('<div class="bre-html-tools-panel"></div>');
        buttons.map(renderButtonElement).forEach(function ($btn) { return $panel.appendChild($btn); });
        var $controlRoot = helpers_4.helpers.createElement('<div class="bre-html-tools bre-btn-group"></div>');
        $controlRoot.appendChild($panel);
        helpers_4.helpers.toggleVisibility($controlRoot, false);
        return $controlRoot;
    };
    var wrapSelectionToContainer = function (selection) {
        if (selection.anchorNode === null) {
            return;
        }
        var $container = selection.anchorNode.parentElement;
        if ($container !== null) {
            var $wrapper = helpers_4.helpers.createElement("<div class=\"bre-temp-container\" contenteditable=\"true\">" + $container.innerHTML + "</div>");
            $container.innerHTML = "";
            $container.removeAttribute(Selectors_3.Selectors.attrContentEditable);
            $container.appendChild($wrapper);
            var range = document.createRange();
            range.selectNodeContents($wrapper);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    };
    var control;
    exports.initHtmlTools = function (_a) {
        var htmlToolsButtons = _a.htmlToolsButtons;
        control = renderControl(htmlToolsButtons);
        document.body.appendChild(control);
    };
    exports.toggleHtmlTools = function (rect) {
        if (rect !== null && rect.width > 1) {
            var top_1 = rect.top + rect.height;
            var left = rect.left;
            control.style.top = top_1 + "px";
            control.style.left = left + "px";
            helpers_4.helpers.toggleVisibility(control, true);
        }
        else {
            helpers_4.helpers.toggleVisibility(control, false);
        }
    };
});
define("tsc/ui/Modal", ["require", "exports", "tsc/common/DOMHelpers", "src/Prompt/Prompt"], function (require, exports, DOMHelpers_5, Prompt_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Modal = (function () {
        function Modal($control, $closeBtn, $form, $btns, $okBtn, $cancelBtn) {
            this.$control = $control;
            this.$closeBtn = $closeBtn;
            this.$form = $form;
            this.$btns = $btns;
            this.$okBtn = $okBtn;
            this.$cancelBtn = $cancelBtn;
            var modal = this;
            DOMHelpers_5.$dom.on($closeBtn, "click", function () {
                modal.hideModal();
            });
        }
        Modal.prototype.hideModal = function () {
            this.restoreSelection();
            DOMHelpers_5.$dom.hide(this.$control);
        };
        Modal.prototype.showModal = function ($html, showBtns) {
            if (showBtns === void 0) { showBtns = true; }
            this.saveSelection();
            DOMHelpers_5.$dom.toggle(this.$btns, showBtns);
            if ($html) {
                this.$form.appendChild($html);
                if (DOMHelpers_5.$dom.isHidden($html)) {
                    DOMHelpers_5.$dom.show($html);
                }
            }
            DOMHelpers_5.$dom.show(this.$control);
        };
        Modal.prototype.promptAsync = function (fields) {
            var _this = this;
            var modal = this;
            return new Promise(function (resolve, reject) {
                for (var i = 0; i < modal.$form.children.length; i++) {
                    var child = modal.$form.children[i];
                    if (child !== _this.$btns) {
                        modal.$form.removeChild(child);
                    }
                }
                fields.forEach(function (field) {
                    DOMHelpers_5.$dom.before(_this.$btns, field.$control);
                });
                DOMHelpers_5.$dom.on(modal.$okBtn, "click", function () {
                    fields.forEach(function (field) { return field.parseValue(); });
                    modal.hideModal();
                    var list = new Prompt_1.PromptParameterList(fields);
                    resolve(list);
                });
                DOMHelpers_5.$dom.on(modal.$cancelBtn, "click", function () {
                    modal.hideModal();
                    resolve(null);
                });
                modal.showModal();
            });
        };
        Modal.prototype.saveSelection = function () {
            var selection = window.getSelection();
            this.selectionRanges = [];
            for (var idx = 0; idx < selection.rangeCount; idx++) {
                this.selectionRanges.push(selection.getRangeAt(idx));
            }
        };
        Modal.prototype.restoreSelection = function () {
            if (!this.selectionRanges || this.selectionRanges.length === 0) {
                return;
            }
            var selection = window.getSelection();
            selection.removeAllRanges();
            this.selectionRanges.forEach(function (range) { return selection.addRange(range); });
        };
        return Modal;
    }());
    exports.Modal = Modal;
});
define("tsc/ui/UI", ["require", "exports", "tsc/common/DOMHelpers", "tsc/template", "tsc/UI/htmlTools", "tsc/ui/Selectors"], function (require, exports, DOMHelpers_6, template_2, htmlTools_1, Selectors_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UI = (function () {
        function UI(editor) {
            this.editor = editor;
            this.editor = editor;
            htmlTools_1.initHtmlTools(editor.options);
            this.setTools();
        }
        UI.initBtnDeck = function ($btnsDeck) {
            var $btns = DOMHelpers_6.$dom.select($btnsDeck, ".bre-btn");
            var $firstBtn = $btns[0];
            DOMHelpers_6.$dom.on($firstBtn, "click", function (ev) {
                UI.toggleBtnDeck($btnsDeck);
                ev.stopPropagation();
                return false;
            });
        };
        UI.toggleBtnDeck = function ($btnsDeck, isOn) {
            var $btns = DOMHelpers_6.$dom.select($btnsDeck, ".bre-btn");
            if (!$btns || $btns.length === 0) {
                return;
            }
            var $firstBtn = $btns[0];
            var size = 32;
            var gap = size / 6;
            isOn = isOn || $btnsDeck.dataset.isOn || false;
            if (isOn) {
                $btnsDeck.style.height = "0";
                $btnsDeck.style.width = "0";
                $btns.forEach(function ($btn, idx) {
                    if (idx === 0) {
                        return;
                    }
                    $btn.style.opacity = "0";
                    $btn.style.top = "0";
                    $btn.style.left = "0";
                });
            }
            else {
                $btns.forEach(function ($btn, idx) {
                    if (idx === 0) {
                        return;
                    }
                    $btn.style.opacity = "1";
                    $btn.style.left = (idx + 1) * (size + gap) + "px";
                });
                $btnsDeck.style.height = size + "px";
                $btnsDeck.style.width = (size + gap) * $btns.length - gap + "px";
            }
            DOMHelpers_6.$dom.toggleClass($firstBtn, "bre-btn-active", !isOn);
            $btnsDeck.dataset.isOn = String(!isOn);
        };
        UI.prototype.toggleToolsLoader = function (toggle) {
            DOMHelpers_6.$dom.toggle(this.$toolsLoader, toggle);
        };
        UI.prototype.setTemplates = function (templateGroups) {
            var _this = this;
            var editor = this.editor;
            templateGroups.forEach(function (group) {
                if (group.templates.length === 0) {
                    return;
                }
                var $header = DOMHelpers_6.$dom.el("<div class='" + Selectors_4.Selectors.classTemplateGroup + "'>" + group.name + "</div>");
                _this.$toolsTemplates.appendChild($header);
                var $group = DOMHelpers_6.$dom.el("<div></div>");
                group.templates.forEach(function (template) {
                    var $preview = template_2.getTemplatePreview(template);
                    $preview.setAttribute("title", template.name);
                    $preview.onclick = function (ev) {
                        editor.addBlock(template);
                        ev.stopPropagation();
                        return false;
                    };
                    $group.appendChild($preview);
                });
                DOMHelpers_6.$dom.on($header, "click", function () {
                    DOMHelpers_6.$dom.toggle($group);
                });
                _this.$toolsTemplates.appendChild($group);
            });
        };
        Object.defineProperty(UI.prototype, "isCompactTools", {
            get: function () {
                var compactTools = this.editor.options.compactTools;
                if (compactTools == null) {
                    return window.innerWidth < this.editor.options.compactToolsWidth;
                }
                else {
                    return compactTools.valueOf();
                }
            },
            enumerable: true,
            configurable: true
        });
        UI.prototype.setTools = function () {
            var _this = this;
            this.$tools = DOMHelpers_6.$dom.el('<div class="bre bre-tools" data-bricky-tools></div>');
            this.$toolsTemplates = DOMHelpers_6.$dom.el('<div class="bre-tools-templates"></div>');
            this.$toolsLoader = DOMHelpers_6.$dom.el('<div class="bre-tools-loader"><b>Loading...</b></div>');
            this.$toolsHideBtn = DOMHelpers_6.$dom.el('<button type="button" class="bre-tools-toggle"><div>►</div></button>');
            this.$tools.appendChild(this.$toolsHideBtn);
            this.$tools.appendChild(this.$toolsLoader);
            this.$tools.appendChild(this.$toolsTemplates);
            this.$toolsHideBtn.onclick = function (ev) { return _this.toggleTools(); };
            this.editor.$editor.appendChild(this.$tools);
            if (this.isCompactTools) {
                DOMHelpers_6.$dom.addClass(this.$tools, "bre-tools-templates-compact");
                this.toggleTools();
            }
        };
        UI.prototype.toggleTools = function () {
            DOMHelpers_6.$dom.toggleClass(this.$tools, "bre-tools-collapsed", !DOMHelpers_6.$dom.hasClass(this.$toolsHideBtn, "bre-tools-toggle-collapsed"));
            DOMHelpers_6.$dom.toggleClass(this.$toolsHideBtn, "bre-tools-toggle-collapsed");
        };
        return UI;
    }());
    exports.UI = UI;
});
define("tsc/block/BlockUI", ["require", "exports", "tsc/common/DOMHelpers", "tsc/ui/UI"], function (require, exports, DOMHelpers_7, UI_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BlockUI = (function () {
        function BlockUI($block, preview, actions, onSelect) {
            this.$block = $block;
            this.onSelect = onSelect;
            if (!preview) {
                this.buildEditorUI(actions);
            }
        }
        BlockUI.prototype.delete = function () {
            this.$editor.remove();
        };
        BlockUI.prototype.toggleSelection = function (isOn) {
            this.$editor.classList.toggle("bre-selected", isOn);
        };
        BlockUI.prototype.buildEditorUI = function (actions) {
            var _this = this;
            this.$tools = DOMHelpers_7.$dom.el('<div class="bre-block-tools bre-btn-deck"></div>');
            actions.forEach(function (action) {
                var $btn = _this.buildButton(action);
                _this.$tools.appendChild($btn);
            });
            UI_2.UI.initBtnDeck(this.$tools);
            this.$editor = DOMHelpers_7.$dom.el('<div class="bre-block-wrapper"></div>');
            this.$editor.appendChild(this.$tools);
            this.$editor.appendChild(this.$block);
            DOMHelpers_7.$dom.on(this.$editor, "mouseover", function () {
                _this.$editor.classList.add("bre-active");
            });
            DOMHelpers_7.$dom.on(this.$editor, "mouseout", function () {
                _this.$editor.classList.remove("bre-active");
            });
            DOMHelpers_7.$dom.on(this.$editor, "click", function () {
                _this.onSelect();
            });
        };
        BlockUI.prototype.buildButton = function (action) {
            var $el = DOMHelpers_7.$dom.el("<button type=\"button\" class=\"bre-btn\"><i class=\"fa fa-" + action.icon + "\"></i></button>");
            if (action.action) {
                $el.onclick = function (ev) {
                    action.action();
                    ev.stopPropagation();
                    return false;
                };
            }
            return $el;
        };
        return BlockUI;
    }());
    exports.BlockUI = BlockUI;
});
define("tsc/block/Block", ["require", "exports", "tsc/block/BlockUI", "tsc/block/BlockUIAction", "tsc/common/Common", "tsc/common/DOMHelpers", "tsc/Fields/Fields", "tsc/ui/Selectors"], function (require, exports, BlockUI_1, BlockUIAction_1, Common_4, DOMHelpers_8, Fields_2, Selectors_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Block = (function () {
        function Block(name, html, preview, data, events) {
            var _this = this;
            this.fields = [];
            this.name = name;
            this.html = html;
            this.events = events;
            var $block = DOMHelpers_8.$dom.el(html);
            this.bindFields($block, data);
            var actions = this.getActions();
            this.ui = new BlockUI_1.BlockUI($block, preview, actions, function () { return _this.select(); });
        }
        Block.prototype.isContainer = function () {
            if (!this.selectedField) {
                return false;
            }
            return this.selectedField instanceof Fields_2.ContainerField;
        };
        Block.prototype.delete = function () {
            this.ui.delete();
            this.events.onDelete(this);
        };
        Block.prototype.move = function (offset) {
            this.events.onMove(this, offset);
        };
        Block.prototype.clone = function () {
            this.events.onCopy(this);
        };
        Block.prototype.select = function (field) {
            if (field === this.selectedField) {
                return;
            }
            if (field === null) {
                field = this.fields[0];
            }
            if (this.selectedField) {
                this.selectedField.deselect();
            }
            this.selectedField = field;
            this.ui.toggleSelection(true);
            this.events.onSelect(this);
        };
        Block.prototype.deselect = function () {
            this.selectedField = null;
            this.fields.forEach(function (f) {
                f.deselect();
            });
            this.ui.toggleSelection(false);
            this.events.onDeselect(this);
        };
        Block.prototype.scrollTo = function () {
            var top = DOMHelpers_8.$dom.offset(this.ui.$editor).top - 100;
            top = top > 0 ? top : 0;
        };
        Block.prototype.getData = function (ignoreHtml) {
            var fieldsData = [];
            this.fields.forEach(function (field) {
                fieldsData.push(field.data);
            });
            var data = {
                template: this.name,
                fields: fieldsData,
            };
            if (!ignoreHtml) {
                data.html = this.getHtml(true);
            }
            return data;
        };
        Block.prototype.getHtml = function (trim) {
            var $html = DOMHelpers_8.$dom.el(this.html);
            var fieldsHtml = {};
            this.fields.forEach(function (field) {
                var name = field.name || field.data.name;
                fieldsHtml[name] = field.getEl();
            });
            DOMHelpers_8.$dom.select($html, Selectors_5.Selectors.selectorField, true).forEach(function ($elem) {
                var fieldData = DOMHelpers_8.$dom.data($elem, "breField");
                var name = fieldData.name;
                var $field = fieldsHtml[name];
                DOMHelpers_8.$dom.replaceWith($elem, $field);
            });
            var html = $html.outerHTML;
            if (!html) {
                return null;
            }
            return trim ? Common_4.str.totalTrim(html) : html;
        };
        Block.prototype.bindFields = function ($block, data) {
            var block = this;
            var $fields = DOMHelpers_8.$dom.select($block, Selectors_5.Selectors.selectorField, true);
            $fields.forEach(function ($elem) {
                var onUpdate = function (property, oldValue, newValue) {
                    if (block.events.onUpdate !== undefined) {
                        block.events.onUpdate(block, property, oldValue, newValue);
                    }
                };
                var onSelect = block.select;
                var field = Fields_2.BaseField.createField($elem, data, onSelect, onUpdate, block.events ? block.events.onUpload : undefined);
                block.fields.push(field);
            });
        };
        Block.prototype.getActions = function () {
            var block = this;
            var actions = [
                new BlockUIAction_1.BlockUIAction("ellipsis-h"),
                new BlockUIAction_1.BlockUIAction("trash-o", function () { return block.delete(); }),
                new BlockUIAction_1.BlockUIAction("copy", function () { return block.clone(); }),
                new BlockUIAction_1.BlockUIAction("angle-up", function () { return block.move(-1); }),
                new BlockUIAction_1.BlockUIAction("angle-down", function () { return block.move(1); }),
            ];
            return actions;
        };
        return Block;
    }());
    exports.Block = Block;
});
define("tsc/fields/BaseField", ["require", "exports", "tsc/common/Common", "tsc/common/DOMHelpers", "tsc/Fields/Fields", "tsc/ui/Selectors"], function (require, exports, Common_5, DOMHelpers_9, Fields_3, Selectors_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BaseField = (function () {
        function BaseField($field, data, onSelect, onUpdate, onUpload) {
            this.$field = $field;
            this.data = data;
            this.onSelect = onSelect;
            this.onUpdate = onUpdate;
            this.onUpload = onUpload;
            this.bind();
        }
        Object.defineProperty(BaseField, "type", {
            get: function () {
                var name = this.name;
                name = name.replace("Field", "");
                name = name.substring(0, 1).toLowerCase() + name.substring(1);
                return name;
            },
            enumerable: true,
            configurable: true
        });
        BaseField.registerCommonFields = function () {
            if (!this.commonFieldsRegistered) {
                Fields_3.HtmlField.registerField();
                Fields_3.ImageField.registerField();
                Fields_3.EmbedField.registerField();
                Fields_3.ContainerField.registerField();
            }
            this.commonFieldsRegistered = true;
        };
        BaseField.createField = function ($field, data, onSelect, onUpdate, onUpload) {
            var fieldData = DOMHelpers_9.$dom.data($field, "breField");
            if (!fieldData || !fieldData.name) {
                throw new Error("There is no data or data doesn't contains 'name' in field " + $field.innerHTML);
            }
            if (data !== undefined) {
                var addFieldData = {};
                for (var field in data) {
                    if (field.name.toLowerCase() === fieldData.name.toLowerCase()) {
                        addFieldData = field;
                        break;
                    }
                }
                if (addFieldData) {
                    fieldData = Common_5.Common.extend(fieldData, addFieldData);
                }
            }
            var type = fieldData.type;
            if (type != null) {
                if (!BaseField.commonFieldsRegistered) {
                    BaseField.registerCommonFields();
                }
                if (this._fields.hasOwnProperty(type)) {
                    var field = this._fields[type];
                    return new field($field, fieldData, onSelect, onUpdate, onUpload);
                }
                else {
                    throw new Error(type + " field not found");
                }
            }
            else {
                throw new Error("Field type not defined in data-bre-field attribute");
            }
        };
        BaseField.registerField = function () {
            if (this._fields.hasOwnProperty(this.type)) {
                delete this._fields[this.type];
            }
            this._fields[this.type] = this;
        };
        BaseField.prototype.deselect = function () {
            this.$field.classList.remove(Selectors_6.Selectors.selectorFieldSelected);
        };
        BaseField.prototype.getEl = function () {
            var $el = this.$field.cloneNode(true);
            $el.attributes.removeNamedItem(Selectors_6.Selectors.attrField);
            return $el;
        };
        BaseField.prototype.getSettingsEl = function () {
            return null;
        };
        BaseField.prototype.bind = function () {
        };
        BaseField.prototype.select = function () {
            this.$field.classList.add(Selectors_6.Selectors.selectorFieldSelected);
            this.onSelect(this);
        };
        BaseField.prototype.updateProperty = function (prop, value, fireUpdate) {
            if (fireUpdate === void 0) { fireUpdate = true; }
            var oldValue = this.data[prop];
            if (oldValue === value) {
                return;
            }
            this.data[prop] = value;
            if (fireUpdate) {
                this.onUpdate(prop, oldValue, value);
            }
        };
        BaseField.commonFieldsRegistered = false;
        BaseField._fields = {};
        return BaseField;
    }());
    exports.BaseField = BaseField;
});
define("tsc/fields/ContainerField", ["require", "exports", "tsc/BlocksContainer", "tsc/common/DOMHelpers", "tsc/fields/BaseField", "tsc/ui/Selectors"], function (require, exports, BlocksContainer_2, DOMHelpers_10, BaseField_1, Selectors_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContainerField = (function (_super) {
        __extends(ContainerField, _super);
        function ContainerField() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ContainerField.prototype.bind = function () {
            var _this = this;
            var field = this;
            var $field = this.$field;
            this.container = new BlocksContainer_2.BlocksContainer($field, function (block) {
                field.updateBlocks();
            }, function (block) {
                field.updateBlocks();
            }, function (block) {
                _this.select();
            }, function (block) {
            }, function (block) {
                field.updateBlocks();
            }, function (block) {
                field.updateBlocks();
            }, field.onUpload, true);
            DOMHelpers_10.$dom.addClass($field, Selectors_7.Selectors.selectorFieldContainer);
            DOMHelpers_10.$dom.on($field, "click", function (ev) {
                field.select();
                ev.stopPropagation();
                return false;
            });
        };
        ContainerField.prototype.updateBlocks = function () {
            var container = this.container;
            var data = BlocksContainer_2.getContainerData(container, true);
            this.updateProperty("blocks", data, true);
            var html = BlocksContainer_2.getContainerHtml(container);
            this.updateProperty("html", html, true);
        };
        ContainerField.prototype.deselect = function () {
            this.container.blocks.forEach(function (b) { return b.deselect(); });
            this.$field.classList.remove(Selectors_7.Selectors.selectorFieldSelected);
        };
        ContainerField.prototype.getEl = function () {
            var container = this.container;
            var html = BlocksContainer_2.getContainerHtml(container);
            return DOMHelpers_10.$dom.el(html);
        };
        return ContainerField;
    }(BaseField_1.BaseField));
    exports.ContainerField = ContainerField;
});
define("tsc/embed", ["require", "exports", "tsc/httpTransport"], function (require, exports, httpTransport_3) {
    "use strict";
    var _this = this;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.postProcessEmbed = function (provider) {
        switch (provider) {
            case "Instagram":
                var instgrm = window.instgrm;
                if (instgrm !== undefined) {
                    instgrm.Embeds.process();
                }
                break;
            default:
                break;
        }
    };
    exports.getEmbedAsync = function (embedUrl) {
        var url = "https://noembed.com/embed?url=" + embedUrl;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var data, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, httpTransport_3.jsonp(url)];
                    case 1:
                        data = _a.sent();
                        resolve(data);
                        return [3, 3];
                    case 2:
                        err_2 = _a.sent();
                        reject(err_2);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        }); });
    };
});
define("tsc/fields/EmbedField", ["require", "exports", "tsc/common/Common", "tsc/common/DOMHelpers", "tsc/embed", "tsc/fields/BaseField", "tsc/helpers", "tsc/httpTransport", "tsc/locales", "tsc/prompt"], function (require, exports, Common_6, DOMHelpers_11, embed_1, BaseField_2, helpers_5, httpTransport_4, locales_2, prompt_2) {
    "use strict";
    var _this = this;
    Object.defineProperty(exports, "__esModule", { value: true });
    var getPromptParams = function (_a) {
        var url = _a.url;
        return ({
            url: {
                value: url || "http://instagr.am/p/BO9VX2Vj4fF/",
                title: locales_2.locales.prompt.embed.url.title,
                placeholder: locales_2.locales.prompt.embed.url.placeholder,
            },
        });
    };
    var promptEmbedMediaUrl = function (field) { return __awaiter(_this, void 0, void 0, function () {
        var params, updated, url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    params = getPromptParams(field.data);
                    return [4, prompt_2.promptAsync(params)];
                case 1:
                    updated = _a.sent();
                    if (!(updated !== null)) return [3, 3];
                    url = updated.url;
                    if (!(url !== undefined)) return [3, 3];
                    field.setUrl(url);
                    return [4, field.loadMedia(true)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2];
            }
        });
    }); };
    var renderEmbedFieldSettingsUI = function ($field) {
        var $el = helpers_5.helpers.createElement("<div style=\"\n      position: absolute;\n      width: 100%; \n      height: 100px;\n      text-align: center;\n      font-weight: bold;\n      vertical-align: middle;\n      background: #333;\n      opacity: 0.2;\">\n      Change embed element link\n    </div>");
        DOMHelpers_11.$dom.before($field, $el);
        return $el;
    };
    var EmbedField = (function (_super) {
        __extends(EmbedField, _super);
        function EmbedField() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EmbedField.prototype.getSettingsEl = function () {
            return null;
        };
        EmbedField.prototype.bind = function () {
            var _this = this;
            var field = this;
            var $field = this.$field;
            DOMHelpers_11.$dom.on($field, "click", function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    promptEmbedMediaUrl(field);
                    return [2];
                });
            }); });
            field.loadMedia(false);
        };
        EmbedField.prototype.loadMedia = function (fireUpdate) {
            return __awaiter(this, void 0, void 0, function () {
                var field, json, $embed, $script, scriptSrc;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            field = this;
                            if (!field.data || !field.data.url) {
                                return [2];
                            }
                            return [4, embed_1.getEmbedAsync(field.data.url)];
                        case 1:
                            json = _a.sent();
                            field.setEmbed(json, fireUpdate);
                            $embed = DOMHelpers_11.$dom.el(json.html);
                            $script = DOMHelpers_11.$dom.first($embed, "script");
                            if (!$script) return [3, 3];
                            $script.remove();
                            scriptSrc = $script.src;
                            if (!Common_6.str.startsWith(scriptSrc, "//")) return [3, 3];
                            scriptSrc = "https:" + scriptSrc;
                            return [4, httpTransport_4.loadScript(scriptSrc)];
                        case 2:
                            _a.sent();
                            embed_1.postProcessEmbed(json.provider_name);
                            _a.label = 3;
                        case 3:
                            field.$field.innerHTML = "";
                            field.$field.removeAttribute("class");
                            field.$field.removeAttribute("style");
                            field.$field.appendChild($embed);
                            field.select();
                            return [2];
                    }
                });
            });
        };
        EmbedField.prototype.setEmbed = function (value, fireUpdate) {
            if (fireUpdate === void 0) { fireUpdate = true; }
            this.updateProperty("embed", value, fireUpdate);
        };
        EmbedField.prototype.setUrl = function (value) {
            this.updateProperty("url", value);
        };
        return EmbedField;
    }(BaseField_2.BaseField));
    exports.EmbedField = EmbedField;
});
define("tsc/fields/HtmlField", ["require", "exports", "tsc/common/DOMHelpers", "tsc/fields/BaseField", "tsc/UI/htmlTools", "tsc/ui/SelectionUtils", "tsc/ui/Selectors"], function (require, exports, DOMHelpers_12, BaseField_3, htmlTools_2, SelectionUtils_2, Selectors_8) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HtmlField = (function (_super) {
        __extends(HtmlField, _super);
        function HtmlField() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HtmlField.prototype.bind = function () {
            var _this = this;
            var field = this;
            var $field = this.$field;
            if (!DOMHelpers_12.$dom.matches($field, Selectors_8.Selectors.selectorContentEditable)) {
                $field.setAttribute(Selectors_8.Selectors.attrContentEditable, "true");
            }
            var html = this.data.html || this.$field.innerHTML;
            this.setHtml(html, false);
            $field.innerHTML = this.data.html;
            SelectionUtils_2.SelectionUtils.bindTextSelection($field, function (rect) {
                htmlTools_2.toggleHtmlTools(rect);
            });
            DOMHelpers_12.$dom.ons($field, "blur keyup paste input", function () {
                _this.setHtml($field.innerHTML);
            });
            DOMHelpers_12.$dom.on($field, "paste", function (e) {
                e.preventDefault();
                var ev = e.originalEvent;
                var text = ev.clipboardData.getData("text/plain");
                document.execCommand("insertHTML", false, text);
            });
            DOMHelpers_12.$dom.on($field, "click", function (ev) {
                field.select();
                ev.stopPropagation();
                return false;
            });
        };
        HtmlField.prototype.setHtml = function (value, fireUpdate) {
            if (fireUpdate === void 0) { fireUpdate = true; }
            value = value.trim();
            if (this.$field.innerHTML !== value) {
                this.$field.innerHTML = value;
            }
            this.updateProperty("html", value, fireUpdate);
        };
        HtmlField.prototype.getEl = function () {
            var $el = _super.prototype.getEl.call(this);
            $el.removeAttribute(Selectors_8.Selectors.attrContentEditable);
            return $el;
        };
        return HtmlField;
    }(BaseField_3.BaseField));
    exports.HtmlField = HtmlField;
});
define("tsc/fields/ImageField", ["require", "exports", "tsc/common/DOMHelpers", "tsc/fields/BaseField", "tsc/locales", "tsc/prompt"], function (require, exports, DOMHelpers_13, BaseField_4, locales_3, prompt_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getPromptParams = function (_a) {
        var src = _a.src, file = _a.file, alt = _a.alt;
        return ({
            src: {
                value: src,
                title: locales_3.locales.prompt.image.link.title,
                placeholder: locales_3.locales.prompt.image.link.placeholder,
            },
            file: {
                type: "file",
                value: file,
                title: locales_3.locales.prompt.image.upload.title,
                placeholder: locales_3.locales.prompt.image.upload.placeholder,
            },
            alt: {
                value: alt,
                title: locales_3.locales.prompt.image.alt.title,
                placeholder: locales_3.locales.prompt.image.alt.placeholder,
            },
        });
    };
    var ImageField = (function (_super) {
        __extends(ImageField, _super);
        function ImageField() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ImageField.prototype, "isImg", {
            get: function () {
                return (this._isImg =
                    this._isImg || this.$field.tagName.toLowerCase() === "img");
            },
            enumerable: true,
            configurable: true
        });
        ImageField.prototype.bind = function () {
            var _this = this;
            var field = this;
            this.setSrc(this.data.src, false);
            this.$field.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                var params, updated, file, src, alt;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            params = getPromptParams(this.data);
                            return [4, prompt_3.promptAsync(params)];
                        case 1:
                            updated = _a.sent();
                            if (updated !== null) {
                                file = updated.file, src = updated.src, alt = updated.alt;
                                if (file !== undefined) {
                                    if (field.onUpload) {
                                        field.onUpload(file, function (url) {
                                            field.setSrc(url);
                                            field.setFile(null);
                                        });
                                    }
                                    else {
                                        field.setFile(file);
                                        field.setSrc(null);
                                    }
                                }
                                else if (src) {
                                    field.setSrc(src);
                                    field.setFile(null);
                                }
                                field.setAlt(alt);
                            }
                            return [2];
                    }
                });
            }); });
        };
        ImageField.prototype.setSrc = function (src, fireUpdate) {
            if (fireUpdate === void 0) { fireUpdate = true; }
            if (src) {
                if (this.isImg) {
                    this.$field.setAttribute("src", src);
                }
                else {
                    this.$field.style.backgroundImage = "url(" + src;
                }
            }
            this.updateProperty("src", src, fireUpdate);
        };
        ImageField.prototype.setAlt = function (alt) {
            this.$field.setAttribute(this.isImg ? "alt" : "title", alt || "");
            this.updateProperty("alt", alt);
        };
        ImageField.prototype.setFile = function (file) {
            if (file !== null) {
                if (this.isImg) {
                    this.$field.setAttribute("src", file);
                }
                else {
                    this.$field.style.backgroundImage = "url(" + file + ")";
                }
            }
            this.updateProperty("file", file);
        };
        ImageField.prototype.setLink = function (url) {
            if (url && url.href) {
                if (!this.$link) {
                    this.$link = DOMHelpers_13.$dom.el("<a href='" + url.href + "' title='" + url.title + "' target='" + url.target + "'></a>");
                    DOMHelpers_13.$dom.on(this.$link, "click", function (ev) {
                        ev.stopPropagation();
                        return false;
                    });
                    DOMHelpers_13.$dom.wrap(this.$field, this.$link);
                }
                else {
                    this.$link.href = url.href.value;
                }
            }
            else if (this.$link) {
                DOMHelpers_13.$dom.unwrap(this.$field);
                this.$link = undefined;
                delete this.$link;
            }
            this.updateProperty("link", url);
        };
        ImageField.prototype.getEl = function () {
            var $el = _super.prototype.getEl.call(this);
            var link = this.data.link;
            if (link && link.href) {
                var $link = DOMHelpers_13.$dom.el("<a href='" + link.href + "' title='" + link.title + "' target='" + link.target + "'></a>");
                $link.appendChild($el);
                return $link;
            }
            return $el;
        };
        return ImageField;
    }(BaseField_4.BaseField));
    exports.ImageField = ImageField;
});
define("tsc/Fields/Fields", ["require", "exports", "tsc/fields/BaseField", "tsc/fields/ContainerField", "tsc/fields/EmbedField", "tsc/fields/HtmlField", "tsc/fields/ImageField"], function (require, exports, BaseField_5, ContainerField_1, EmbedField_1, HtmlField_1, ImageField_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(BaseField_5);
    __export(ContainerField_1);
    __export(EmbedField_1);
    __export(HtmlField_1);
    __export(ImageField_1);
});
define("test/tmplates.spec", ["require", "exports", "chai", "jsdom", "../tsc/Templates/Template", "mocha"], function (require, exports, chai_1, jsdom_1, Template_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var window = new jsdom_1.JSDOM().window;
    global.document = window.document;
    function getTemplateDiv() {
        var $el = window.document.createElement("div");
        $el.innerHTML =
            '<div class="bre-template" data-name="Display Heading 1">' +
                '<h1 data-bre-field=\'{ "name" : "text", "type": "html" }\'></h1>' +
                '</div>';
        return $el.children[0];
    }
    describe('Template', function () {
        var $template = getTemplateDiv();
        var template = new Template_1.Template($template);
        it('should be loaded', function () {
            chai_1.expect(template.loaded).is.true;
        });
        it('should has preview', function () {
            chai_1.expect(template.$preview).not.undefined.and.not.null;
        });
        it('preview should be valid html element', function () {
            chai_1.expect(template.$preview.tagName.toLowerCase()).is.equals("h1");
        });
    });
});
define("tsc/Block/BlockAction", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BlockAction = (function () {
        function BlockAction(icon, action, title) {
            this.icon = icon;
            this.action = action;
            this.title = title;
        }
        return BlockAction;
    }());
    exports.BlockAction = BlockAction;
});
define("tsc/UI/SelectionHelper", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SelectionHelper = (function () {
        function SelectionHelper() {
        }
        SelectionHelper.getSelectedText = function () {
            var sel = window.getSelection();
            return sel.getRangeAt(0).toString();
        };
        SelectionHelper.replaceSelectedText = function (replacement) {
            var sel, range;
            if (window.getSelection) {
                sel = window.getSelection();
                if (sel.rangeCount) {
                    range = sel.getRangeAt(0);
                    range.deleteContents();
                    range.insertNode(document.createTextNode(replacement));
                }
            }
        };
        return SelectionHelper;
    }());
    exports.SelectionHelper = SelectionHelper;
});