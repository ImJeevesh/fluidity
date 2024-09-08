export interface VirtualTableProps {
    rows: Record<string, any>[];
    tableHeight?: number;
    rowHeight?: number;
}
declare const VirtualTable: ({ rows, tableHeight, rowHeight, }: VirtualTableProps) => JSX.Element;
export default VirtualTable;
