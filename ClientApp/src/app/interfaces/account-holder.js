"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountHolder = void 0;
var AccountHolder = /** @class */ (function () {
    function AccountHolder(id, name, iban) {
        if (id === void 0) { id = null; }
        if (name === void 0) { name = ""; }
        if (iban === void 0) { iban = ""; }
        this.id = id;
        this.name = name;
        this.iban = iban;
    }
    return AccountHolder;
}());
exports.AccountHolder = AccountHolder;
//# sourceMappingURL=account-holder.js.map