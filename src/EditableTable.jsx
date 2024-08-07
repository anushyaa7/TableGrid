import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Select, MenuItem, TextField, Paper,
  Pagination,
  Stack,
  styled
} from '@mui/material';
import Sort from './assets/Sort.png';
import Circle from './assets/Circle.png';
import Delete from './assets/Delete.png';
import './EditableTable.css';
import { Checkbox as MuiCheckbox } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';



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
    createData('Question 7', '', '', '', '', '', ''),
    createData('Question 8', '', '', '', '', '', ''),
    createData('Question 9', '', '', '', '', '', ''),
    createData('Question 10', '', '', '', '', '', ''),
  ];


  const Checkbox = () => {
    return (
      <MuiCheckbox
        icon={<span className="custom-checkbox-icon" />}
        checkedIcon={<span className="custom-checkbox-checked-icon" />}
      />
    );
  };

  const CustomSelect = styled(Select)({
    '&.MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'c4c6cb', 
      },
      '& .MuiSelect-select': {
        color: '#c4c6cb',
        fontSize: '0.9rem', 
      },
      borderRadius: '7px'
    },
    '& .MuiSelect-icon': {
    fontSize: '1.1rem',
    color: '#64748B',
  },
  });

  return (
    <>
    <TableContainer component={Paper}>
    <Table className="custom-table">
      <TableHead className="custom-table-head">
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
              <Checkbox className="custom-checkbox" />
              <span className="question-text">{row.question}</span>
            </TableCell>
            <TableCell className="table-cell-fixed">
              <CustomSelect value={row.answerType} displayEmpty className="custom-select" IconComponent={ExpandMore}>
                <MenuItem value="" disabled className="placeholder">
                 Select
                </MenuItem>
                <MenuItem value="Type 1">Type 1</MenuItem>
                <MenuItem value="Type 2">Type 2</MenuItem>
              </CustomSelect>
            </TableCell>
            <TableCell>
              <CustomSelect value={row.mandatory} displayEmpty className="custom-select" IconComponent={ExpandMore}>
                <MenuItem value="" disabled className="placeholder" >
                  Select
                </MenuItem>
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </CustomSelect>
            </TableCell>
            <TableCell>
              <TextField value={row.answerRemarks} placeholder="Placeholder" className="custom-textfield" />
            </TableCell>
            <TableCell>
              <CustomSelect value={row.severity} displayEmpty className="custom-select" IconComponent={ExpandMore}>
                <MenuItem value="" disabled className="placeholder">
                  Select
                </MenuItem>
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
              </CustomSelect>
            </TableCell>
            <TableCell>
              <CustomSelect value={row.category} displayEmpty className="custom-select" IconComponent={ExpandMore}>
                <MenuItem value="" disabled className="placeholder">
                  Select
                </MenuItem>
                <MenuItem value="Category 1">Category 1</MenuItem>
                <MenuItem value="Category 2">Category 2</MenuItem>
              </CustomSelect>
            </TableCell>
            <TableCell>
              <CustomSelect value={row.section} displayEmpty className="custom-select" IconComponent={ExpandMore}>
                <MenuItem value="" disabled className="placeholder">
                  Select
                </MenuItem>
                <MenuItem value="Section 1">Section 1</MenuItem>
                <MenuItem value="Section 2">Section 2</MenuItem>
              </CustomSelect>
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