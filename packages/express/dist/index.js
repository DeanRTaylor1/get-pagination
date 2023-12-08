"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPagination = void 0;
const routing_controllers_1 = require("routing-controllers");
function GetPagination(options) {
    var _a;
    return (0, routing_controllers_1.createParamDecorator)({
        required: (_a = options === null || options === void 0 ? void 0 : options.required) !== null && _a !== void 0 ? _a : false,
        value: (action) => {
            var _a, _b;
            const query = action.request.query;
            const paginationParams = {
                skip: parseInt((_a = query.skip) === null || _a === void 0 ? void 0 : _a.toString()) || 0,
                limit: parseInt((_b = query.limit) === null || _b === void 0 ? void 0 : _b.toString()) || 10,
            };
            if (query.sort) {
                const sortArray = query.sort.toString().split(",");
                paginationParams.sort = sortArray.map((sortItem) => {
                    const trimmedItem = sortItem.trim();
                    return {
                        field: trimmedItem.startsWith("-")
                            ? trimmedItem.slice(1)
                            : trimmedItem,
                        by: trimmedItem.startsWith("-") ? "ASC" : "DESC",
                    };
                });
            }
            if (query.search) {
                const searchArray = query.search.toString().split(",");
                paginationParams.search = {};
                searchArray.forEach((searchItem) => {
                    const [field, value] = searchItem.split(":");
                    if (field && value && !!paginationParams.search) {
                        paginationParams.search[field.trim()] = value.trim();
                    }
                });
            }
            return paginationParams;
        },
    });
}
exports.GetPagination = GetPagination;
//# sourceMappingURL=index.js.map