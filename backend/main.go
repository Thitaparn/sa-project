package main

import (
	"context"
	"log"

	"github.com/TP/app/controllers"
	_ "github.com/TP/app/docs"
	"github.com/TP/app/ent"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/mattn/go-sqlite3"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

type Employees struct {
	Employee []Employee
}

type Employee struct {
	EmployeeName     string
	EmployeeEmail    string
	EmployeePassword string
}

type Medicalcares struct {
	Medicalcare []Medicalcare
}

type Medicalcare struct {
	MedicalcareName string
}

type Genders struct {
	Gender []Gender
}

type Gender struct {
	GenderName string
}

type Diseases struct {
	Disease []Disease
}

type Disease struct {
	DisaeseName string
}

// @title SUT SA Example API
// @version 1.0
// @description This is a sample server for SUT SE 2563
// @termsOfService http://swagger.io/terms/

// @contact.name API Support
// @contact.url http://www.swagger.io/support
// @contact.email support@swagger.io
// @license.name Apache 2.0
// @license.url http://www.apache.org/licenses/LICENSE-2.0.html

// @host localhost:8080
// @BasePath /api/v1

// @securityDefinitions.basic BasicAuth

// @securityDefinitions.apikey ApiKeyAuth
// @in header
// @name Authorization

// @securitydefinitions.oauth2.application OAuth2Application
// @tokenUrl https://example.com/oauth/token
// @scope.write Grants write access
// @scope.admin Grants read and write access to administrative information

// @securitydefinitions.oauth2.implicit OAuth2Implicit
// @authorizationUrl https://example.com/oauth/authorize
// @scope.write Grants write access
// @scope.admin Grants read and write access to administrative information

// @securitydefinitions.oauth2.password OAuth2Password
// @tokenUrl https://example.com/oauth/token
// @scope.read Grants read access
// @scope.write Grants write access
// @scope.admin Grants read and write access to administrative information

// @securitydefinitions.oauth2.accessCode OAuth2AccessCode
// @tokenUrl https://example.com/oauth/token
// @authorizationUrl https://example.com/oauth/authorize
// @scope.admin Grants read and write access to administrative information
func main() {
	router := gin.Default()
	router.Use(cors.Default())

	client, err := ent.Open("sqlite3", "file:ent.db?cache=shared&_fk=1")
	if err != nil {
		log.Fatalf("fail to open sqlite3: %v", err)
	}
	defer client.Close()

	if err := client.Schema.Create(context.Background()); err != nil {
		log.Fatalf("failed creating schema resources: %v", err)
	}

	v1 := router.Group("/api/v1")
	controllers.NewPatientController(v1, client)
	controllers.NewMedicalCareController(v1, client)
	controllers.NewGenderController(v1, client)
	controllers.NewEmployeeController(v1, client)
	controllers.NewDiseaseController(v1, client)

	// Set Employees Data
	employees := Employees{
		Employee: []Employee{
			Employee{"ประกิต สมรศรี", "youandi@gmail.com", "poppy98"},
			Employee{"สามารถ เพิ่มพูน", "badboy@gmail.com", "youknow7"},
		},
	}
	for _, e := range employees.Employee {
		client.Employee.
			Create().
			SetEmployeeName(e.EmployeeName).
			SetEmployeeEmail(e.EmployeeEmail).
			SetEmployeePassword(e.EmployeePassword).
			Save(context.Background())
	}

	// Set MedicalCare Data
	medicalcares := Medicalcares{
		Medicalcare: []Medicalcare{
			Medicalcare{"ไม่ระบุ"},
			Medicalcare{"สิทธิข้าราชการ"},
			Medicalcare{"สิทธิประกันสังคม"},
			Medicalcare{"สิทธิบัตรทอง"},
		},
	}
	for _, m := range medicalcares.Medicalcare {
		client.MedicalCare.
			Create().
			SetMedicalcareName(m.MedicalcareName).
			Save(context.Background())
	}

	// Set Gender Data
	genders := Genders{
		Gender: []Gender{
			Gender{"ชาย"},
			Gender{"หญิง"},
		},
	}
	for _, g := range genders.Gender {
		client.Gender.
			Create().
			SetGenderName(g.GenderName).
			Save(context.Background())
	}

	// Set Disease Data
	diseases := Diseases{
		Disease: []Disease{
			Disease{"ไม่ระบุ"},
			Disease{"โรคหัวใจ"},
			Disease{"โรคลมบ้าหมูหรือลมชัก"},
			Disease{"โรคไต"},
			Disease{"โรคหอบหืด"},
			Disease{"โรคภูมิแพ้"},
			Disease{"โรคไมเกรน"},
			Disease{"โรคไทรอยด์"},
			Disease{"โรคโลหิตจาง"},
			Disease{"โรคความดันโลหิตต่ำ"},
			Disease{"โรคความดันโลหิตสูง"},
		},
	}
	for _, d := range diseases.Disease {
		client.Disease.
			Create().
			SetDiseaseName(d.DisaeseName).
			Save(context.Background())
	}

	router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
	router.Run()
}
