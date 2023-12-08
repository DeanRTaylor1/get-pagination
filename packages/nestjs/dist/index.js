"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPagination = void 0;
const common_1 = require("@nestjs/common");
const GetPagination = (_options) => {
    return (0, common_1.createParamDecorator)((data, ctx) => {
        var _a, _b;
        const request = ctx.switchToHttp().getRequest();
        const query = request.query;
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
    })();
};
exports.GetPagination = GetPagination;
//# sourceMappingURL=index.js.map