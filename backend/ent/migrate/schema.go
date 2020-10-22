// Code generated by entc, DO NOT EDIT.

package migrate

import (
	"github.com/facebookincubator/ent/dialect/sql/schema"
	"github.com/facebookincubator/ent/schema/field"
)

var (
	// DiseasesColumns holds the columns for the "diseases" table.
	DiseasesColumns = []*schema.Column{
		{Name: "id", Type: field.TypeInt, Increment: true},
		{Name: "disease_name", Type: field.TypeString},
	}
	// DiseasesTable holds the schema information for the "diseases" table.
	DiseasesTable = &schema.Table{
		Name:        "diseases",
		Columns:     DiseasesColumns,
		PrimaryKey:  []*schema.Column{DiseasesColumns[0]},
		ForeignKeys: []*schema.ForeignKey{},
	}
	// EmployeesColumns holds the columns for the "employees" table.
	EmployeesColumns = []*schema.Column{
		{Name: "id", Type: field.TypeInt, Increment: true},
		{Name: "employee_name", Type: field.TypeString},
		{Name: "employee_email", Type: field.TypeString},
		{Name: "employee_password", Type: field.TypeString},
	}
	// EmployeesTable holds the schema information for the "employees" table.
	EmployeesTable = &schema.Table{
		Name:        "employees",
		Columns:     EmployeesColumns,
		PrimaryKey:  []*schema.Column{EmployeesColumns[0]},
		ForeignKeys: []*schema.ForeignKey{},
	}
	// GendersColumns holds the columns for the "genders" table.
	GendersColumns = []*schema.Column{
		{Name: "id", Type: field.TypeInt, Increment: true},
		{Name: "gender_name", Type: field.TypeString},
	}
	// GendersTable holds the schema information for the "genders" table.
	GendersTable = &schema.Table{
		Name:        "genders",
		Columns:     GendersColumns,
		PrimaryKey:  []*schema.Column{GendersColumns[0]},
		ForeignKeys: []*schema.ForeignKey{},
	}
	// MedicalCaresColumns holds the columns for the "medical_cares" table.
	MedicalCaresColumns = []*schema.Column{
		{Name: "id", Type: field.TypeInt, Increment: true},
		{Name: "medicalcare_name", Type: field.TypeString},
	}
	// MedicalCaresTable holds the schema information for the "medical_cares" table.
	MedicalCaresTable = &schema.Table{
		Name:        "medical_cares",
		Columns:     MedicalCaresColumns,
		PrimaryKey:  []*schema.Column{MedicalCaresColumns[0]},
		ForeignKeys: []*schema.ForeignKey{},
	}
	// PatientsColumns holds the columns for the "patients" table.
	PatientsColumns = []*schema.Column{
		{Name: "id", Type: field.TypeInt, Increment: true},
		{Name: "patient_id", Type: field.TypeString, Unique: true},
		{Name: "patient_name", Type: field.TypeString},
		{Name: "patient_card_id", Type: field.TypeString},
		{Name: "patient_address", Type: field.TypeString},
		{Name: "patient_tel", Type: field.TypeString},
		{Name: "patient_age", Type: field.TypeInt},
		{Name: "patient_birthday", Type: field.TypeTime},
		{Name: "disease_id", Type: field.TypeInt, Nullable: true},
		{Name: "employee_id", Type: field.TypeInt, Nullable: true},
		{Name: "gender_id", Type: field.TypeInt, Nullable: true},
		{Name: "medicalcare_id", Type: field.TypeInt, Nullable: true},
	}
	// PatientsTable holds the schema information for the "patients" table.
	PatientsTable = &schema.Table{
		Name:       "patients",
		Columns:    PatientsColumns,
		PrimaryKey: []*schema.Column{PatientsColumns[0]},
		ForeignKeys: []*schema.ForeignKey{
			{
				Symbol:  "patients_diseases_patients",
				Columns: []*schema.Column{PatientsColumns[8]},

				RefColumns: []*schema.Column{DiseasesColumns[0]},
				OnDelete:   schema.SetNull,
			},
			{
				Symbol:  "patients_employees_patients",
				Columns: []*schema.Column{PatientsColumns[9]},

				RefColumns: []*schema.Column{EmployeesColumns[0]},
				OnDelete:   schema.SetNull,
			},
			{
				Symbol:  "patients_genders_patients",
				Columns: []*schema.Column{PatientsColumns[10]},

				RefColumns: []*schema.Column{GendersColumns[0]},
				OnDelete:   schema.SetNull,
			},
			{
				Symbol:  "patients_medical_cares_patients",
				Columns: []*schema.Column{PatientsColumns[11]},

				RefColumns: []*schema.Column{MedicalCaresColumns[0]},
				OnDelete:   schema.SetNull,
			},
		},
	}
	// Tables holds all the tables in the schema.
	Tables = []*schema.Table{
		DiseasesTable,
		EmployeesTable,
		GendersTable,
		MedicalCaresTable,
		PatientsTable,
	}
)

func init() {
	PatientsTable.ForeignKeys[0].RefTable = DiseasesTable
	PatientsTable.ForeignKeys[1].RefTable = EmployeesTable
	PatientsTable.ForeignKeys[2].RefTable = GendersTable
	PatientsTable.ForeignKeys[3].RefTable = MedicalCaresTable
}