"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateInvoices = exports.INITIAL_INVOICE = exports.InvoiceStatus = exports.INITIAL_INVOICE_ITEM = exports.INVOICE_LIMIT = void 0;
const uuid_1 = require("uuid");
exports.INVOICE_LIMIT = 10;
exports.INITIAL_INVOICE_ITEM = {
    id: (0, uuid_1.v4)(),
    name: '',
    amount: 0,
};
var InvoiceStatus;
(function (InvoiceStatus) {
    InvoiceStatus["UNPAYED"] = "UNPAYED";
    InvoiceStatus["CASH"] = "CASH";
    InvoiceStatus["CARD"] = "CARD";
    InvoiceStatus["BANK"] = "BANK";
})(InvoiceStatus = exports.InvoiceStatus || (exports.InvoiceStatus = {}));
exports.INITIAL_INVOICE = {
    id: undefined,
    childId: undefined,
    shortId: undefined,
    intentId: undefined,
    description: undefined,
    uid: '',
    absences: 0,
    total: 0,
    items: [exports.INITIAL_INVOICE_ITEM],
    status: InvoiceStatus.UNPAYED,
    payedAt: undefined,
    date: new Date().toISOString().slice(0, 10),
    timestamp: new Date(),
    createdAt: '',
    updatedAt: '',
    receiptUrl: null,
    stripeId: null,
};
const ABSENCES = 0;
const generateInvoices = (user, tax) => {
    return user.children.map((ch) => {
        const tier = tax.tiers.find((t) => t.group === ch.group && t.schedule === ch.schedule);
        if (!tier) {
            return Object.assign(Object.assign({}, exports.INITIAL_INVOICE), { createdAt: (0, uuid_1.v4)(), uid: user.uid, childId: ch.id });
        }
        return Object.assign(Object.assign({}, exports.INITIAL_INVOICE), { childId: ch.id, uid: user.uid, description: user.children.length > 1
                ? `${ch.firstName} ${ch.lastName} • ${tax.description}`
                : tax.description, createdAt: (0, uuid_1.v4)(), items: [
                {
                    id: (0, uuid_1.v4)(),
                    name: `Masa`,
                    amount: tier.meal * (tax.days - ABSENCES),
                },
                {
                    id: (0, uuid_1.v4)(),
                    name: `Taxa`,
                    amount: tier.tuition,
                },
            ] });
    });
};
exports.generateInvoices = generateInvoices;
