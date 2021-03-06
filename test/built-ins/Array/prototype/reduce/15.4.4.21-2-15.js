// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-2-15
description: Array.prototype.reduce - 'length' is property of the global object
---*/

        function callbackfn(prevVal, curVal, idx, obj) {
            return (obj.length === 2);
        }

            this[0] = 12;
            this[1] = 11;
            this[2] = 9;
            this.length = 2;

assert.sameValue(Array.prototype.reduce.call(this, callbackfn, 1), true, 'Array.prototype.reduce.call(this, callbackfn, 1)');
