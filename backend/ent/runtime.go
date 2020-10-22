// Code generated by entc, DO NOT EDIT.

package ent

import (
	"github.com/TP/app/ent/disease"
	"github.com/TP/app/ent/employee"
	"github.com/TP/app/ent/gender"
	"github.com/TP/app/ent/medicalcare"
	"github.com/TP/app/ent/patient"
	"github.com/TP/app/ent/schema"
)

// The init function reads all schema descriptors with runtime
// code (default values, validators or hooks) and stitches it
// to their package variables.
func init() {
	diseaseFields := schema.Disease{}.Fields()
	_ = diseaseFields
	// diseaseDescDiseaseName is the schema descriptor for disease_name field.
	diseaseDescDiseaseName := diseaseFields[0].Descriptor()
	// disease.DiseaseNameValidator is a validator for the "disease_name" field. It is called by the builders before save.
	disease.DiseaseNameValidator = diseaseDescDiseaseName.Validators[0].(func(string) error)
	employeeFields := schema.Employee{}.Fields()
	_ = employeeFields
	// employeeDescEmployeeName is the schema descriptor for employee_name field.
	employeeDescEmployeeName := employeeFields[0].Descriptor()
	// employee.EmployeeNameValidator is a validator for the "employee_name" field. It is called by the builders before save.
	employee.EmployeeNameValidator = employeeDescEmployeeName.Validators[0].(func(string) error)
	// employeeDescEmployeeEmail is the schema descriptor for employee_email field.
	employeeDescEmployeeEmail := employeeFields[1].Descriptor()
	// employee.EmployeeEmailValidator is a validator for the "employee_email" field. It is called by the builders before save.
	employee.EmployeeEmailValidator = employeeDescEmployeeEmail.Validators[0].(func(string) error)
	// employeeDescEmployeePassword is the schema descriptor for employee_password field.
	employeeDescEmployeePassword := employeeFields[2].Descriptor()
	// employee.EmployeePasswordValidator is a validator for the "employee_password" field. It is called by the builders before save.
	employee.EmployeePasswordValidator = employeeDescEmployeePassword.Validators[0].(func(string) error)
	genderFields := schema.Gender{}.Fields()
	_ = genderFields
	// genderDescGenderName is the schema descriptor for gender_name field.
	genderDescGenderName := genderFields[0].Descriptor()
	// gender.GenderNameValidator is a validator for the "gender_name" field. It is called by the builders before save.
	gender.GenderNameValidator = genderDescGenderName.Validators[0].(func(string) error)
	medicalcareFields := schema.MedicalCare{}.Fields()
	_ = medicalcareFields
	// medicalcareDescMedicalcareName is the schema descriptor for medicalcare_name field.
	medicalcareDescMedicalcareName := medicalcareFields[0].Descriptor()
	// medicalcare.MedicalcareNameValidator is a validator for the "medicalcare_name" field. It is called by the builders before save.
	medicalcare.MedicalcareNameValidator = medicalcareDescMedicalcareName.Validators[0].(func(string) error)
	patientFields := schema.Patient{}.Fields()
	_ = patientFields
	// patientDescPatientID is the schema descriptor for patient_ID field.
	patientDescPatientID := patientFields[0].Descriptor()
	// patient.PatientIDValidator is a validator for the "patient_ID" field. It is called by the builders before save.
	patient.PatientIDValidator = patientDescPatientID.Validators[0].(func(string) error)
	// patientDescPatientName is the schema descriptor for patient_name field.
	patientDescPatientName := patientFields[1].Descriptor()
	// patient.PatientNameValidator is a validator for the "patient_name" field. It is called by the builders before save.
	patient.PatientNameValidator = patientDescPatientName.Validators[0].(func(string) error)
	// patientDescPatientCardID is the schema descriptor for patient_cardID field.
	patientDescPatientCardID := patientFields[2].Descriptor()
	// patient.PatientCardIDValidator is a validator for the "patient_cardID" field. It is called by the builders before save.
	patient.PatientCardIDValidator = patientDescPatientCardID.Validators[0].(func(string) error)
	// patientDescPatientAddress is the schema descriptor for patient_address field.
	patientDescPatientAddress := patientFields[3].Descriptor()
	// patient.PatientAddressValidator is a validator for the "patient_address" field. It is called by the builders before save.
	patient.PatientAddressValidator = patientDescPatientAddress.Validators[0].(func(string) error)
	// patientDescPatientTel is the schema descriptor for patient_tel field.
	patientDescPatientTel := patientFields[4].Descriptor()
	// patient.PatientTelValidator is a validator for the "patient_tel" field. It is called by the builders before save.
	patient.PatientTelValidator = patientDescPatientTel.Validators[0].(func(string) error)
}