import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox,
  Select, MenuItem, TextField, Paper,
  Pagination,
  Stack
} from '@mui/material';
import Sort from './assets/Sort.png';
import Circle from './assets/Circle.png';
import Delete from './assets/Delete.png';
import './EditableTable.css';



const EditableTable = () => {
  const createData = (question, answerType, mandatory, answerRemarks, severity, category, section) => {
    return { question, answerType, mandatory, answerRemarks, severity, category, section };
  };

  const rows = [
    createData('Question 1', '', '', '', '', '', ''),
    createData('Question 2', '', '', '', '', '', ''),
    createData('Question 3', '', '', '', '', '', ''),
    createData('Question 4', '', '', '', '', '', ''),
    createData('Question 5', '', '', '', '', '', ''),
    createData('Question 6', '', '', '', '', '', ''),
  ];


  return (
    <>
    <TableContainer component={Paper}>
    <Table className="custom-table">
      <TableHead>
        <TableRow>
          <TableCell align="right">Question <img src={Sort} alt="Sort" className="sortIcon" /></TableCell>
          <TableCell align="left">Answer Type <img src={Sort} alt="Sort" className="sortIcon" /></TableCell>
          <TableCell align="left">Mandatory <img src={Sort} alt="Sort" className="sortIcon" /></TableCell>
          <TableCell align="left">Answer Remarks <img src={Sort} alt="Sort" className="sortIcon" /></TableCell>
          <TableCell align="left">Severity <img src={Sort} alt="Sort" className="sortIcon" /></TableCell>
          <TableCell align="left">Category <img src={Sort} alt="Sort" className="sortIcon" /></TableCell>
          <TableCell align="left">Section <img src={Sort} alt="Sort" className="sortIcon" /></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={index}>
            <TableCell>
              <Checkbox />
              {row.question}
            </TableCell>
            <TableCell className="table-cell-fixed">
              <Select value={row.answerType} displayEmpty className="custom-select">
                <MenuItem value="" disabled className="placeholder">
                 Select
                </MenuItem>
                <MenuItem value="Type 1">Type 1</MenuItem>
                <MenuItem value="Type 2">Type 2</MenuItem>
              </Select>
            </TableCell>
            <TableCell>
              <Select value={row.mandatory} displayEmpty className="custom-select">
                <MenuItem value="" disabled className="placeholder">
                  Select
                </MenuItem>
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </TableCell>
            <TableCell>
              <TextField value={row.answerRemarks} placeholder="Placeholder" className="custom-textfield" />
            </TableCell>
            <TableCell>
              <Select value={row.severity} displayEmpty className="custom-select">
                <MenuItem value="" disabled className="placeholder">
                  Select
                </MenuItem>
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
              </Select>
            </TableCell>
            <TableCell>
              <Select value={row.category} displayEmpty className="custom-select">
                <MenuItem value="" disabled className="placeholder">
                  Select
                </MenuItem>
                <MenuItem value="Category 1">Category 1</MenuItem>
                <MenuItem value="Category 2">Category 2</MenuItem>
              </Select>
            </TableCell>
            <TableCell>
              <Select value={row.section} displayEmpty className="custom-select">
                <MenuItem value="" disabled className="placeholder">
                  Select
                </MenuItem>
                <MenuItem value="Section 1">Section 1</MenuItem>
                <MenuItem value="Section 2">Section 2</MenuItem>
              </Select>
            </TableCell>
            <TableCell>
              <div className="circleContainer">
                  <img src={Circle} alt="Circle" className="circleIcon" />
                  <img src={Delete} alt="Delete" className="deleteIcon" />
               </div>
              </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  <Stack spacing={2} className='pagination'>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Stack>
</>
  );
};

export default EditableTable;
