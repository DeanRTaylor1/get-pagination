export interface Pagination {
    skip: number;
    limit: number;
    sort?: Array<SortItem>;
    search?: Record<string, string>;
}
export type SortItem = {
    field: string;
    by: "ASC" | "DESC";
};
export type SearchItem = `${string}:${string}`;
export declare function GetPagination(options?: {
    required?: boolean;
}): (object: Object, method: string, index: number) => void;
//# sourceMappingURL=index.d.ts.map