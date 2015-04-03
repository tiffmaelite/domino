/*
 * Copyright (C) 2014 Deltamation Software. All rights reserved.
 * @author Jared Wiltshire
 */
module.exports = SVGElement;

var Element = require('./Element');
var CSSStyleDeclaration = require('./CSSStyleDeclaration');

function SVGElement() {
    Element.apply(this, arguments);
}

SVGElement.prototype = Object.create(Element.prototype, {
    style: { get: function() {
        if (!this._style)
          this._style = new CSSStyleDeclaration(this);
        return this._style;
    }},
});
