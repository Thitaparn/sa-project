import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { DefaultApi } from '../../api/apis';
import {EntPatient} from '../../api/models';
import moment from 'moment';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ComponentsTable() {
  const classes = useStyles();
  const api = new DefaultApi();
  const [patient, setPatient] = useState<EntPatient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      const res = await api.listPatient({ limit: 10, offset: 0 });
      setLoading(false);
      setPatient(res);
    };
    getUsers();
  }, [loading]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">No.</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Age</TableCell>
            <TableCell align="center">Tel.</TableCell>
            <TableCell align="center">BirthDay</TableCell>
            <TableCell align="center">Employee</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patient.map(item => (
            <TableRow key={item.id}>
              <TableCell align="center">{item.patientID}</TableCell>
              <TableCell align="center">{item.patientName}</TableCell>
              <TableCell align="center">{item.patientAge}</TableCell>
              <TableCell align="center">{item.patientTel}</TableCell>
              <TableCell align="center">{moment(item.patientBirthday).format('DD/MM/YYYY')}</TableCell>
              <TableCell align="center">{item.edges?.employee?.employeeName}</TableCell>
              <TableCell align="center">
                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
