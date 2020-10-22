import React, { FC, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Content, Header, Page, pageTheme } from '@backstage/core';
import SaveIcon from '@material-ui/icons/Save'; // icon save
import { Link as RouterLink } from 'react-router-dom';
import Swal from 'sweetalert2'; // alert


import {
  Container,
  Grid,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  TextField,
  Link,
  Button,
} from '@material-ui/core';
import { DefaultApi } from '../../api/apis'; // Api Gennerate From Command
import { EntGender } from '../../api/models/EntGender'; // import interface Gender
import { EntMedicalCare } from '../../api/models/EntMedicalCare'; // import interface MedicalCare
import { EntEmployee } from '../../api/models/EntEmployee'; // import interface Employee
import { EntDisease } from '../../api/models/EntDisease'; // import interface Disease

// header css
const HeaderCustom = {
  minHeight: '50px',
};

// css style
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  formControl: {
    width: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 300,
  },
}));

interface savePatient {
  PatientID: String;
  PatientName: String;
  PatientCardID: String;
  Gender: number;
  PatientAddress: String;
  PatientTel: String;
  PatientBirthday: String;
  PatientAge: number;
  Medicalcare: number;
  Employee: number;
  Disease: number;

}

const SavePatient: FC<{}> = () => {
  const classes = useStyles();
  const http = new DefaultApi();

  const [patient, setPatient] = React.useState<Partial<savePatient>>({});
  const [genders, setGenders] = React.useState<EntGender[]>([]);
  const [medicalcares, setMedicalCares] = React.useState<EntMedicalCare[]>([]);
  const [employees, setEmployees] = React.useState<EntEmployee[]>([]);
  const [diseases, setDiseases] = React.useState<EntDisease[]>([]);

  // alert setting
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: toast => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  const getGender = async () => {
    const res = await http.listGender({ limit: 2, offset: 0 });
    setGenders(res);
  };

  const getMedicalCare = async () => {
    const res = await http.listMedicalcare({ limit: 4, offset: 0 });
    setMedicalCares(res);
  };

  const getEmployee = async () => {
    const res = await http.listEmployee({ limit: 2, offset: 0 });
    setEmployees(res);
  };

  const getDisease = async () => {
    const res = await http.listDisease({ limit: 10, offset: 0 });
    setDiseases(res);
  };

  // Lifecycle Hooks
  useEffect(() => {
    getMedicalCare();
    getGender();
    getEmployee();
    getDisease();
  }, []);

  // set data to object patient
  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>,) => {
    const name = event.target.name as keyof typeof patient;
    const { value } = event.target;
    setPatient({ ...patient, [name]: value });
    console.log(patient);
  };

  const handleNumberChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>,) => {
    const name = event.target.name as keyof typeof patient;
    const { value } = event.target;
    setPatient({ ...patient, [name]: +value });
    console.log(patient);
  };

  // clear input form
  function clear() {
    setPatient({});
  }

  // function save data
  function save() {
    const apiUrl = 'http://localhost:8080/api/v1/patients';
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(patient),
    };

    console.log(JSON.stringify(patient)); // log ดูข้อมูล สามารถ Inspect ดูข้อมูลได้ F12 เลือก Tab Console

    fetch(apiUrl, requestOptions)
      .then(response => response.json())
      .then(data => {console.log(data.save)
        console.log(requestOptions)
        if (data.status === true) {
          clear();
          Toast.fire({
            icon: 'success',
            title: 'บันทึกข้อมูลสำเร็จ',
          });
        } else {
          Toast.fire({
            icon: 'error',
            title: 'บันทึกข้อมูลไม่สำเร็จ',
          });
        }
      });
  }

  return (
    <Page theme={pageTheme.service}>
      <Header style={HeaderCustom} title={`บันทึกประวัติผู้ป่วย`}>
      </Header>
      <Content>
        <Container maxWidth="sm">
          <Grid container spacing={3}>
            <Grid item xs={12}></Grid>
            
            <Grid item xs={12}>
            <FormControl
                  fullWidth
                  className={classes.formControl}
                  variant="outlined">
                  <TextField
                    label="เลขประจำตัวผู้ป่วย"
                    name="PatientID"
                    variant="outlined"
                    size="medium"
                    value={patient.PatientID || ''}
                    onChange={handleChange}
                  />
                </FormControl>
            </Grid>

            <Grid item xs={12}>
            <FormControl
                  fullWidth
                  className={classes.formControl}
                  variant="outlined">
            <TextField
                  name="PatientName"
                  label="ชื่อ - นามสกุล"
                  variant="outlined"
                    size="medium"
                    value={patient.PatientName || ''}
                    onChange={handleChange}
            />
            </FormControl>
            </Grid>
            
            <Grid item xs={10}>
            <FormControl
                  fullWidth
                  className={classes.formControl}
                  variant="outlined">
            <TextField
                  name="PatientCardID"
                  label="เลขบัตรประจำตัวประชาชน"
                  variant="outlined"
                    size="medium"
                    value={patient.PatientCardID || ''}
                    onChange={handleChange}
            />
            </FormControl>
            </Grid>

            <Grid item xs={9}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>เพศ</InputLabel>
                <Select
                  name="Gender"
                  label="เพศ"
                  value={patient.Gender || ''} // (undefined || '') = ''
                  onChange={handleChange}
                >
                  {genders.map(item => {
                    return (
                      <MenuItem key={item.id} value={item.id}>
                        {item.genderName}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl
                   fullWidth
                   className={classes.formControl}
                   variant="outlined">
                <TextField
                   label="ที่อยู่"
                   name="PatientAddress"
                   multiline
                   rows={6}
                   variant="outlined"
                   value={patient.PatientAddress || ''}
                   onChange={handleChange}
            />
            </FormControl>
            </Grid>
            
            <Grid item xs={12}>
              <FormControl
                   fullWidth
                   className={classes.formControl}
                   variant="outlined">
                <TextField
                   name="PatientTel"
                   label="เบอร์โทรศัพท์"
                   variant="outlined"
                     size="medium"
                     value={patient.PatientTel || ''}
                     onChange={handleChange}
            />
            </FormControl>
            </Grid>
         
            <Grid item xs={9}>
              <form className={classes.container} noValidate>
                <TextField
                  label="วันเดือนปีเกิด"
                  name="PatientBirthday"
                  type="date"
                  value={patient.PatientBirthday || ''} // (undefined || '') = ''
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleChange}
                />
              </form>
            </Grid>

            <Grid item xs={12}>
            <FormControl
                  fullWidth
                  className={classes.formControl}
                  variant="outlined">
            <TextField
                  name="PatientAge"
                  label="อายุ"
                  type="Number"
                  variant="outlined"
                    size="medium"
                    value={patient.PatientAge || ''}
                    onChange={handleNumberChange}
            />
            </FormControl>
            </Grid>

            <Grid item xs={9}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>โรคประจำตัว</InputLabel>
                <Select
                  label="โรคประจำตัว"
                  name="Disease"
                  value={patient.Disease || ''} // (undefined || '') = ''
                  onChange={handleChange}
                >
                  {diseases.map(item => {
                    return (
                      <MenuItem key={item.id} value={item.id}>
                        {item.diseaseName}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={9}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>สิทธิในการรักษา</InputLabel>
                <Select
                  label="สิทธิในการรักษา"
                  name="Medicalcare"
                  value={patient.Medicalcare || ''} // (undefined || '') = ''
                  onChange={handleChange}
                >
                  {medicalcares.map(item => {
                    return (
                      <MenuItem key={item.id} value={item.id}>
                        {item.medicalcareName}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={9}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>พนักงานผู้บันทึก</InputLabel>
                <Select
                  label="พนักงานผู้บันทึก"
                  name="Employee"
                  value={patient.Employee || ''} // (undefined || '') = ''
                  onChange={handleChange}
                >
                  {employees.map(item => {
                    return (
                      <MenuItem key={item.id} value={item.id}>
                        {item.employeeName}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={3}></Grid>
            <Grid item xs={9}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SaveIcon />}
                onClick={save}
              >
                บันทึกข้อมูล
              </Button>
              &emsp;
              <Link component={RouterLink} to="/MenuTab">
              <Button
                variant="contained"
                color="default"
                size="large"
                style={{ marginLeft: 5 }}
              >
                กลับ
              </Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Content>
    </Page>
  );
};

export default SavePatient;
