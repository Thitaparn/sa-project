// Code generated by entc, DO NOT EDIT.

package patient

const (
	// Label holds the string label denoting the patient type in the database.
	Label = "patient"
	// FieldID holds the string denoting the id field in the database.
	FieldID = "id"
	// FieldPatientID holds the string denoting the patient_id field in the database.
	FieldPatientID = "patient_id"
	// FieldPatientName holds the string denoting the patient_name field in the database.
	FieldPatientName = "patient_name"
	// FieldPatientCardID holds the string denoting the patient_cardid field in the database.
	FieldPatientCardID = "patient_card_id"
	// FieldPatientAddress holds the string denoting the patient_address field in the database.
	FieldPatientAddress = "patient_address"
	// FieldPatientTel holds the string denoting the patient_tel field in the database.
	FieldPatientTel = "patient_tel"
	// FieldPatientAge holds the string denoting the patient_age field in the database.
	FieldPatientAge = "patient_age"
	// FieldPatientBirthday holds the string denoting the patient_birthday field in the database.
	FieldPatientBirthday = "patient_birthday"

	// EdgeGender holds the string denoting the gender edge name in mutations.
	EdgeGender = "gender"
	// EdgeMedicalcare holds the string denoting the medicalcare edge name in mutations.
	EdgeMedicalcare = "medicalcare"
	// EdgeEmployee holds the string denoting the employee edge name in mutations.
	EdgeEmployee = "employee"
	// EdgeDisease holds the string denoting the disease edge name in mutations.
	EdgeDisease = "disease"

	// Table holds the table name of the patient in the database.
	Table = "patients"
	// GenderTable is the table the holds the gender relation/edge.
	GenderTable = "patients"
	// GenderInverseTable is the table name for the Gender entity.
	// It exists in this package in order to avoid circular dependency with the "gender" package.
	GenderInverseTable = "genders"
	// GenderColumn is the table column denoting the gender relation/edge.
	GenderColumn = "gender_id"
	// MedicalcareTable is the table the holds the medicalcare relation/edge.
	MedicalcareTable = "patients"
	// MedicalcareInverseTable is the table name for the MedicalCare entity.
	// It exists in this package in order to avoid circular dependency with the "medicalcare" package.
	MedicalcareInverseTable = "medical_cares"
	// MedicalcareColumn is the table column denoting the medicalcare relation/edge.
	MedicalcareColumn = "medicalcare_id"
	// EmployeeTable is the table the holds the employee relation/edge.
	EmployeeTable = "patients"
	// EmployeeInverseTable is the table name for the Employee entity.
	// It exists in this package in order to avoid circular dependency with the "employee" package.
	EmployeeInverseTable = "employees"
	// EmployeeColumn is the table column denoting the employee relation/edge.
	EmployeeColumn = "employee_id"
	// DiseaseTable is the table the holds the disease relation/edge.
	DiseaseTable = "patients"
	// DiseaseInverseTable is the table name for the Disease entity.
	// It exists in this package in order to avoid circular dependency with the "disease" package.
	DiseaseInverseTable = "diseases"
	// DiseaseColumn is the table column denoting the disease relation/edge.
	DiseaseColumn = "disease_id"
)

// Columns holds all SQL columns for patient fields.
var Columns = []string{
	FieldID,
	FieldPatientID,
	FieldPatientName,
	FieldPatientCardID,
	FieldPatientAddress,
	FieldPatientTel,
	FieldPatientAge,
	FieldPatientBirthday,
}

// ForeignKeys holds the SQL foreign-keys that are owned by the Patient type.
var ForeignKeys = []string{
	"disease_id",
	"employee_id",
	"gender_id",
	"medicalcare_id",
}

var (
	// PatientIDValidator is a validator for the "patient_ID" field. It is called by the builders before save.
	PatientIDValidator func(string) error
	// PatientNameValidator is a validator for the "patient_name" field. It is called by the builders before save.
	PatientNameValidator func(string) error
	// PatientCardIDValidator is a validator for the "patient_cardID" field. It is called by the builders before save.
	PatientCardIDValidator func(string) error
	// PatientAddressValidator is a validator for the "patient_address" field. It is called by the builders before save.
	PatientAddressValidator func(string) error
	// PatientTelValidator is a validator for the "patient_tel" field. It is called by the builders before save.
	PatientTelValidator func(string) error
)