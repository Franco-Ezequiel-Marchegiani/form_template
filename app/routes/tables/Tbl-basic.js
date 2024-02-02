import { useState } from 'react';

// material-ui
import { Grid, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// project imports
import Layout from 'layout';
import LAYOUT from 'constant';
import { gridSpacing } from 'store/constant';
import GridTable from 'components/forms/tables/GridTable';
import { CSVExport } from 'components/forms/tables/TableExports';
import { rows as Data, columns } from 'components/forms/tables/GridTable';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import MainCard from 'ui-component/cards/MainCard';

// table data
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9)
];

export const header = [
    { label: 'Dessert (100g serving)', key: 1 },
    { label: 'Calories (g)', key: 2 },
    { label: 'Carbs (g)', key: 3 },
    { label: 'Protein (g)', key: 4 },
    { label: 'Protein (g)', key: 5 },
    { label: 'Protein (g)', key: 6 }
];
// ==============================|| TABLE - BASIC ||============================== //

export default function TableBasic() {
    let headers = [];
    columns.map((item) => {
        return headers.push({ label: item.headerName, key: item.field });
    });

    const [selectedValue, setSelectedValue] = useState([]);
    const handlerClick = (data) => {
        setSelectedValue(data);
    };

    let NewValue = selectedValue.length > 0 ? selectedValue : Data;

    return (
        <Layout variant={LAYOUT.main}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <MainCard
                        content={false}
                        title="Basic Table"
                        secondary={
                            <Stack direction="row" spacing={2} alignItems="center">
                                <CSVExport data={rows} filename={'basic-table.csv'} header={header} />
                                <SecondaryAction link="https://next.material-ui.com/components/tables/" />
                            </Stack>
                        }
                    >
                        {/* table */}
                        <TableContainer>
                            <Table sx={{ minWidth: 350 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ pl: 3 }}>Dessert (100g serving)</TableCell>
                                        <TableCell align="right">Calories</TableCell>
                                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                        <TableCell align="right" sx={{ pr: 3 }}>
                                            Protein&nbsp;(g)
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow hover key={row.name}>
                                            <TableCell sx={{ pl: 3 }} component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.calories}</TableCell>
                                            <TableCell align="right">{row.fat}</TableCell>
                                            <TableCell align="right">{row.carbs}</TableCell>
                                            <TableCell align="right">{row.protein}</TableCell>
                                            <TableCell align="right">{row.protein}</TableCell>
                                            <TableCell align="right">{row.protein}</TableCell>
                                            <TableCell sx={{ pr: 3 }} align="right">
                                                {row.protein}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </MainCard>
                </Grid>
                <Grid item xs={12}>
                    <MainCard
                        content={false}
                        title="Data Grid"
                        secondary={
                            <Stack direction="row" spacing={2} alignItems="center">
                                <CSVExport data={NewValue} filename={'data-grid-table.csv'} header={headers} />
                                <SecondaryAction link="https://material-ui.com/components/data-grid/" />
                            </Stack>
                        }
                    >
                        {/* table data grid */}
                        <GridTable Selected={handlerClick} />
                    </MainCard>
                </Grid>
            </Grid>
        </Layout>
    );
}
