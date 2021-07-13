import React, { useMemo } from "react";
import {GlobalFilter} from "./GlobalFilter";
import { useTable} from "react-table";
import "./table.css";

export const Table = ({ submissions, columnNames }) => {
    console.log(submissions);
    const columns = useMemo(() => columnNames, [columnNames]);
    const data = useMemo(() => submissions, [submissions]);

    const tableInstance = useTable(
        {
            columns,
            data,
        },
        useGlobalFilter
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        
        prepareRow,
        state,
        setGlobalFilter,
    } = tableInstance;

    const { globalFilter } = state;

    return (
        <div>
            {submissions !== null ? (
                <div>
                    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
                    <div className="table-container">
                        <table className="submissions-table" {...getTableProps()}>
                            <thead>
                            {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps()}>
                                            {column.render("Header")}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                            </thead>
                            <tbody {...getTableBodyProps()}>
                            {page.map((row) => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map((cell) => {
                                            return (
                                                <td {...cell.getCellProps()}>
                                                    {cell.render("Cell")}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <h1>Hi</h1>
            )}
        </div>
    );
};
