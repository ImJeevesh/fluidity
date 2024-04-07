import React, { useCallback, useMemo, useState } from 'react';
import { getBEM } from '../../utils/bem.util';
import './VirtualTable.scss';

export interface VirtualTableProps {
  rows: Record<string, any>[];
  tableHeight?: number;
  rowHeight?: number;
}

const VirtualTable = ({
  rows,
  tableHeight = 200,
  rowHeight = 35,
}: VirtualTableProps): JSX.Element => {
  const { bem } = getBEM('virtual-table');

  const [startIndex, setStartIndex] = useState<number>(0);

  const totalHeight = rowHeight * rows.length;
  const columns = useMemo(() => Object.keys(rows[0]), [rows]);

  const onScroll = useCallback((event: React.UIEvent<HTMLTableElement>) => {
    setStartIndex(Math.floor((event.target as any).scrollTop / rowHeight));
  }, []);

  const findRowRangeInView = () => {
    const end = Math.min(
      startIndex + Math.ceil((tableHeight * 2) / rowHeight),
      rows.length,
    );
    // add offsets for accessibility
    return {
      start: Math.max(startIndex - 1, 0),
      end: Math.min(end + 1, rows.length),
    };
  };

  const generatedRows = useMemo(() => {
    const { start, end } = findRowRangeInView();
    const items = [];

    const onFocusAction = (props: Record<string, any>) => console.log(props);

    const cellContent = (
      index: number,
      column: string,
    ): JSX.Element | string => {
      if (column !== 'action') {
        return rows[index][column];
      }

      return (
        <button
          onFocus={() => onFocusAction({ ak: rows[index][column], index })}>
          {rows[index][column]}
        </button>
      );
    };

    for (let index = start; index < end; index++) {
      items.push(
        <tr
          key={index}
          className={bem('row', { odd: Boolean(index % 2) })}
          style={{ top: index * rowHeight }}>
          {columns.map((column) => (
            <td key={column}>{cellContent(index, column)}</td>
          ))}
        </tr>,
      );
    }

    return items;
  }, [rows, tableHeight, rowHeight, startIndex]);

  return (
    <div
      className={bem('wrapper')}
      style={
        {
          '--vt-prop-row-height': `${rowHeight}px`,
          '--vt-prop-table-height': `${tableHeight}px`,
          '--vt-prop-total-height': `${totalHeight}px`,
        } as React.CSSProperties
      }>
      <table className={bem('table', { header: true })}>
        <thead>
          <tr className={bem('row')}>
            {columns.map((name) => (
              <th key={name}>{name}</th>
            ))}
          </tr>
        </thead>
      </table>
      <table className={bem('table', { windowed: true })} onScroll={onScroll}>
        <tbody>{generatedRows}</tbody>
      </table>
    </div>
  );
};

export default VirtualTable;
