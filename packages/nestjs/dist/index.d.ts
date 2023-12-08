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
export declare const GetPagination: (_options?: {
    required?: boolean;
}) => ParameterDecorator;
//# sourceMappingURL=index.d.ts.map