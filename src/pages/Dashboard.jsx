import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Dashboard() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");
        setRows(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="admin-panel">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 600 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>User Name</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Contact No.</StyledTableCell>
                <StyledTableCell>State</StyledTableCell>
                <StyledTableCell>Age</StyledTableCell>
                <StyledTableCell>Gender</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row._id}>
                  <StyledTableCell component="th" scope="row">
                    {row.firstName} {row.lastName}
                  </StyledTableCell>
                  <StyledTableCell>{row.email}</StyledTableCell>
                  <StyledTableCell>{row.contactNo}</StyledTableCell>
                  <StyledTableCell>{row.state}</StyledTableCell>
                  <StyledTableCell>{row.age}</StyledTableCell>
                  <StyledTableCell>{row.gender}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default Dashboard;
