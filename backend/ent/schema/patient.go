package schema

import (
	//"time"
	"github.com/facebookincubator/ent"
	"github.com/facebookincubator/ent/schema/edge"
	"github.com/facebookincubator/ent/schema/field"
)

// Patient holds the schema definition for the Patient entity.
type Patient struct {
	ent.Schema
}

// Fields of the Patient.
func (Patient) Fields() []ent.Field {
	return []ent.Field{
		field.String("patient_ID").NotEmpty().Unique(),
		field.String("patient_name").NotEmpty(),
		field.String("patient_cardID").NotEmpty(),
		field.String("patient_address").NotEmpty(),
		field.String("patient_tel").NotEmpty(),
		field.Int("patient_age"),
		field.Time("patient_birthday"),
	}
}

// Edges of the Patient.
func (Patient) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("gender", Gender.Type).Ref("patients").Unique(),          
		edge.From("medicalcare", MedicalCare.Type).Ref("patients").Unique(), 
		edge.From("employee", Employee.Type).Ref("patients").Unique(),     
		edge.From("disease", Disease.Type).Ref("patients").Unique(),   
	}

}
