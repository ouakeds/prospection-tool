import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface Column<T> {
    label: string,
    key:  keyof T;
}

interface CustomizedTablesProps<T> {
    columns: Column<T>[]
    rows: T[],
    title?: string;
}

function StaticTable<T>({rows, columns, title}: CustomizedTablesProps<T>) {

    const formatRow = (row: T) => {
        return columns.map(({key}, columnKey) => {
            return (
                <TableCell key={columnKey}>
                    <>{row[key]}</>
                </TableCell>
            )
        })
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }}>
                <TableHead>                        
                    <TableRow>
                        {
                            columns.map((column, key) => (
                                <TableCell key={key} align="left">

                                    <b>
                                    {column.label}
                                    </b>
                                </TableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows?.map((row, rowKey) => {
                            return (
                                <TableRow key={rowKey}>
                                    { formatRow(row) }
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
  );
}

export default StaticTable;