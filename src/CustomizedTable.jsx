import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./CustomizedTable.css";
import Circle from "./assets/Circle.png";
import Edit from './assets/Edit.png';
import Duplicate from './assets/Duplicate.png';
import Delete from './assets/Delete.png';
import Sort from './assets/Sort.png';
import { Pagination, Stack } from '@mui/material';


function createData(name, clientCode, country, region, business, status) {
  return { name, clientCode, country, region, business, status };
}

const rows = [
  createData('ANDREW', 908778, 'Nigeria', 'Africa', 'Broking Firm', 'In-Progress'),
  createData('ALEXANDAR', 237558, 'Nigeria', 'Africa', 'Broking Firm', 'In-Progress'),
  createData('CAMERON', 262321, 'Nigeria', 'Africa', 'Broking Firm', 'Active'),
  createData('HARRY', 305895, 'Nigeria', 'Africa', 'Broking Firm', 'In-Progress'),
  createData('JACOB', 356225, 'Nigeria', 'Africa', 'Broking Firm', 'Active'),
  createData('JOEL', 356951, 'Nigeria', 'Africa', 'Broking Firm', 'Active'),
  createData('DANISH', 325693, 'Nigeria', 'Africa', 'Broking Firm', 'Active'),
];

const rowsPerPage = 5;

export default function CustomizedTable() {
  const [page, setPage] = React.useState(1);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const paginatedRows = rows.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <>
    <TableContainer component={Paper} className="tableContainer">
      <Table className="table" aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell className="headCell">Client Name <img src={Sort} alt="Sort" className="sortIcon" /></TableCell>
            <TableCell className="headCell" align="left">Client Code <img src={Sort} alt="Sort" className="sortIcon" /></TableCell>
            <TableCell className="headCell" align="left">Country <img src={Sort} alt="Sort" className="sortIcon" /></TableCell>
            <TableCell className="headCell" align="left">Region <img src={Sort} alt="Sort" className="sortIcon" /></TableCell>
            <TableCell className="headCell" align="left">Business <img src={Sort} alt="Sort" className="sortIcon" /></TableCell>
            <TableCell className="headCell" align="leftt">Status <img src={Sort} alt="Sort" className="sortIcon" /></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.name}
              className={index % 2 === 0 ? 'evenRow' : ''}
            >
              <TableCell className="nameCell" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell className="bodyCell" align="left">{row.clientCode}</TableCell>
              <TableCell className="bodyCell" align="left">{row.country}</TableCell>
              <TableCell className="bodyCell" align="left">{row.region}</TableCell>
              <TableCell className="bodyCell" align="left">{row.business}</TableCell>
              <TableCell className="bodyCell" align="left">{row.status}</TableCell>
              <TableCell className="actionCell" align="left"> 
              <div className="circleContainer">
                  <div className="iconWrapper">
                    <img src={Circle} alt="Circle" className="circleIcon" />
                    <img src={Edit} alt="Edit" className="smallIcon" />
                  </div>
                  <div className="iconWrapper">
                    <img src={Circle} alt="Circle" className="circleIcon" />
                    <img src={Duplicate} alt="Duplicate" className="smallIcon" />
                  </div>
                  <div className="iconWrapper">
                    <img src={Circle} alt="Circle" className="circleIcon" />
                    <img src={Delete} alt="Delete" className="smallIcon" />
                  </div>
                </div>
              
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Stack spacing={2} className="pagination">
        <Pagination
          count={Math.ceil(rows.length / rowsPerPage)}
          page={page}
          onChange={handleChangePage}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </>
  );
}