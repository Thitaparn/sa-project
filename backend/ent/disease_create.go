// Code generated by entc, DO NOT EDIT.

package ent

import (
	"context"
	"errors"
	"fmt"

	"github.com/TP/app/ent/disease"
	"github.com/TP/app/ent/patient"
	"github.com/facebookincubator/ent/dialect/sql/sqlgraph"
	"github.com/facebookincubator/ent/schema/field"
)

// DiseaseCreate is the builder for creating a Disease entity.
type DiseaseCreate struct {
	config
	mutation *DiseaseMutation
	hooks    []Hook
}

// SetDiseaseName sets the disease_name field.
func (dc *DiseaseCreate) SetDiseaseName(s string) *DiseaseCreate {
	dc.mutation.SetDiseaseName(s)
	return dc
}

// AddPatientIDs adds the patients edge to Patient by ids.
func (dc *DiseaseCreate) AddPatientIDs(ids ...int) *DiseaseCreate {
	dc.mutation.AddPatientIDs(ids...)
	return dc
}

// AddPatients adds the patients edges to Patient.
func (dc *DiseaseCreate) AddPatients(p ...*Patient) *DiseaseCreate {
	ids := make([]int, len(p))
	for i := range p {
		ids[i] = p[i].ID
	}
	return dc.AddPatientIDs(ids...)
}

// Mutation returns the DiseaseMutation object of the builder.
func (dc *DiseaseCreate) Mutation() *DiseaseMutation {
	return dc.mutation
}

// Save creates the Disease in the database.
func (dc *DiseaseCreate) Save(ctx context.Context) (*Disease, error) {
	if _, ok := dc.mutation.DiseaseName(); !ok {
		return nil, &ValidationError{Name: "disease_name", err: errors.New("ent: missing required field \"disease_name\"")}
	}
	if v, ok := dc.mutation.DiseaseName(); ok {
		if err := disease.DiseaseNameValidator(v); err != nil {
			return nil, &ValidationError{Name: "disease_name", err: fmt.Errorf("ent: validator failed for field \"disease_name\": %w", err)}
		}
	}
	var (
		err  error
		node *Disease
	)
	if len(dc.hooks) == 0 {
		node, err = dc.sqlSave(ctx)
	} else {
		var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
			mutation, ok := m.(*DiseaseMutation)
			if !ok {
				return nil, fmt.Errorf("unexpected mutation type %T", m)
			}
			dc.mutation = mutation
			node, err = dc.sqlSave(ctx)
			mutation.done = true
			return node, err
		})
		for i := len(dc.hooks) - 1; i >= 0; i-- {
			mut = dc.hooks[i](mut)
		}
		if _, err := mut.Mutate(ctx, dc.mutation); err != nil {
			return nil, err
		}
	}
	return node, err
}

// SaveX calls Save and panics if Save returns an error.
func (dc *DiseaseCreate) SaveX(ctx context.Context) *Disease {
	v, err := dc.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

func (dc *DiseaseCreate) sqlSave(ctx context.Context) (*Disease, error) {
	d, _spec := dc.createSpec()
	if err := sqlgraph.CreateNode(ctx, dc.driver, _spec); err != nil {
		if cerr, ok := isSQLConstraintError(err); ok {
			err = cerr
		}
		return nil, err
	}
	id := _spec.ID.Value.(int64)
	d.ID = int(id)
	return d, nil
}

func (dc *DiseaseCreate) createSpec() (*Disease, *sqlgraph.CreateSpec) {
	var (
		d     = &Disease{config: dc.config}
		_spec = &sqlgraph.CreateSpec{
			Table: disease.Table,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeInt,
				Column: disease.FieldID,
			},
		}
	)
	if value, ok := dc.mutation.DiseaseName(); ok {
		_spec.Fields = append(_spec.Fields, &sqlgraph.FieldSpec{
			Type:   field.TypeString,
			Value:  value,
			Column: disease.FieldDiseaseName,
		})
		d.DiseaseName = value
	}
	if nodes := dc.mutation.PatientsIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   disease.PatientsTable,
			Columns: []string{disease.PatientsColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeInt,
					Column: patient.FieldID,
				},
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges = append(_spec.Edges, edge)
	}
	return d, _spec
}
