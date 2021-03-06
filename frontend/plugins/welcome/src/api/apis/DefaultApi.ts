/* tslint:disable */
/* eslint-disable */
/**
 * SUT SA Example API
 * This is a sample server for SUT SE 2563
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    EntDisease,
    EntDiseaseFromJSON,
    EntDiseaseToJSON,
    EntEmployee,
    EntEmployeeFromJSON,
    EntEmployeeToJSON,
    EntGender,
    EntGenderFromJSON,
    EntGenderToJSON,
    EntMedicalCare,
    EntMedicalCareFromJSON,
    EntMedicalCareToJSON,
    EntPatient,
    EntPatientFromJSON,
    EntPatientToJSON,
} from '../models';

export interface CreateDiseaseRequest {
    disease: EntDisease;
}

export interface CreateEmployeeRequest {
    employee: EntEmployee;
}

export interface CreateGenderRequest {
    gender: EntGender;
}

export interface CreateMedicalcareRequest {
    medicalcare: EntMedicalCare;
}

export interface CreatePatientRequest {
    patient: EntPatient;
}

export interface GetDiseaseRequest {
    id: number;
}

export interface GetEmployeeRequest {
    id: number;
}

export interface GetGenderRequest {
    id: number;
}

export interface GetMedicalCareRequest {
    id: number;
}

export interface GetPatientRequest {
    id: number;
}

export interface ListDiseaseRequest {
    limit?: number;
    offset?: number;
}

export interface ListEmployeeRequest {
    limit?: number;
    offset?: number;
}

export interface ListGenderRequest {
    limit?: number;
    offset?: number;
}

export interface ListMedicalcareRequest {
    limit?: number;
    offset?: number;
}

export interface ListPatientRequest {
    limit?: number;
    offset?: number;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Create disease
     * Create disease
     */
    async createDiseaseRaw(requestParameters: CreateDiseaseRequest): Promise<runtime.ApiResponse<EntDisease>> {
        if (requestParameters.disease === null || requestParameters.disease === undefined) {
            throw new runtime.RequiredError('disease','Required parameter requestParameters.disease was null or undefined when calling createDisease.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/diseases`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EntDiseaseToJSON(requestParameters.disease),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntDiseaseFromJSON(jsonValue));
    }

    /**
     * Create disease
     * Create disease
     */
    async createDisease(requestParameters: CreateDiseaseRequest): Promise<EntDisease> {
        const response = await this.createDiseaseRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create employee
     * Create employee
     */
    async createEmployeeRaw(requestParameters: CreateEmployeeRequest): Promise<runtime.ApiResponse<EntEmployee>> {
        if (requestParameters.employee === null || requestParameters.employee === undefined) {
            throw new runtime.RequiredError('employee','Required parameter requestParameters.employee was null or undefined when calling createEmployee.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/employees`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EntEmployeeToJSON(requestParameters.employee),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntEmployeeFromJSON(jsonValue));
    }

    /**
     * Create employee
     * Create employee
     */
    async createEmployee(requestParameters: CreateEmployeeRequest): Promise<EntEmployee> {
        const response = await this.createEmployeeRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create gender
     * Create gender
     */
    async createGenderRaw(requestParameters: CreateGenderRequest): Promise<runtime.ApiResponse<EntGender>> {
        if (requestParameters.gender === null || requestParameters.gender === undefined) {
            throw new runtime.RequiredError('gender','Required parameter requestParameters.gender was null or undefined when calling createGender.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/genders`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EntGenderToJSON(requestParameters.gender),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntGenderFromJSON(jsonValue));
    }

    /**
     * Create gender
     * Create gender
     */
    async createGender(requestParameters: CreateGenderRequest): Promise<EntGender> {
        const response = await this.createGenderRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create medicalcare
     * Create medicalcare
     */
    async createMedicalcareRaw(requestParameters: CreateMedicalcareRequest): Promise<runtime.ApiResponse<EntMedicalCare>> {
        if (requestParameters.medicalcare === null || requestParameters.medicalcare === undefined) {
            throw new runtime.RequiredError('medicalcare','Required parameter requestParameters.medicalcare was null or undefined when calling createMedicalcare.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/medicalcares`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EntMedicalCareToJSON(requestParameters.medicalcare),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntMedicalCareFromJSON(jsonValue));
    }

    /**
     * Create medicalcare
     * Create medicalcare
     */
    async createMedicalcare(requestParameters: CreateMedicalcareRequest): Promise<EntMedicalCare> {
        const response = await this.createMedicalcareRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create patient
     * Create patient
     */
    async createPatientRaw(requestParameters: CreatePatientRequest): Promise<runtime.ApiResponse<EntPatient>> {
        if (requestParameters.patient === null || requestParameters.patient === undefined) {
            throw new runtime.RequiredError('patient','Required parameter requestParameters.patient was null or undefined when calling createPatient.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/patients`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EntPatientToJSON(requestParameters.patient),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntPatientFromJSON(jsonValue));
    }

    /**
     * Create patient
     * Create patient
     */
    async createPatient(requestParameters: CreatePatientRequest): Promise<EntPatient> {
        const response = await this.createPatientRaw(requestParameters);
        return await response.value();
    }

    /**
     * get disease by ID
     * Get a disease entity by ID
     */
    async getDiseaseRaw(requestParameters: GetDiseaseRequest): Promise<runtime.ApiResponse<EntDisease>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getDisease.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/diseases/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntDiseaseFromJSON(jsonValue));
    }

    /**
     * get disease by ID
     * Get a disease entity by ID
     */
    async getDisease(requestParameters: GetDiseaseRequest): Promise<EntDisease> {
        const response = await this.getDiseaseRaw(requestParameters);
        return await response.value();
    }

    /**
     * get employee by ID
     * Get a employee entity by ID
     */
    async getEmployeeRaw(requestParameters: GetEmployeeRequest): Promise<runtime.ApiResponse<EntEmployee>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getEmployee.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/employees/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntEmployeeFromJSON(jsonValue));
    }

    /**
     * get employee by ID
     * Get a employee entity by ID
     */
    async getEmployee(requestParameters: GetEmployeeRequest): Promise<EntEmployee> {
        const response = await this.getEmployeeRaw(requestParameters);
        return await response.value();
    }

    /**
     * get gender by ID
     * Get a gender entity by ID
     */
    async getGenderRaw(requestParameters: GetGenderRequest): Promise<runtime.ApiResponse<EntGender>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getGender.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/genders/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntGenderFromJSON(jsonValue));
    }

    /**
     * get gender by ID
     * Get a gender entity by ID
     */
    async getGender(requestParameters: GetGenderRequest): Promise<EntGender> {
        const response = await this.getGenderRaw(requestParameters);
        return await response.value();
    }

    /**
     * get MedicalCare by ID
     * Get a MedicalCare entity by ID
     */
    async getMedicalCareRaw(requestParameters: GetMedicalCareRequest): Promise<runtime.ApiResponse<EntMedicalCare>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getMedicalCare.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/medicalcares/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntMedicalCareFromJSON(jsonValue));
    }

    /**
     * get MedicalCare by ID
     * Get a MedicalCare entity by ID
     */
    async getMedicalCare(requestParameters: GetMedicalCareRequest): Promise<EntMedicalCare> {
        const response = await this.getMedicalCareRaw(requestParameters);
        return await response.value();
    }

    /**
     * get patient by ID
     * Get a patient entity by ID
     */
    async getPatientRaw(requestParameters: GetPatientRequest): Promise<runtime.ApiResponse<EntPatient>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getPatient.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/patients/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntPatientFromJSON(jsonValue));
    }

    /**
     * get patient by ID
     * Get a patient entity by ID
     */
    async getPatient(requestParameters: GetPatientRequest): Promise<EntPatient> {
        const response = await this.getPatientRaw(requestParameters);
        return await response.value();
    }

    /**
     * list disease entities
     * List disease entities
     */
    async listDiseaseRaw(requestParameters: ListDiseaseRequest): Promise<runtime.ApiResponse<Array<EntDisease>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/diseases`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EntDiseaseFromJSON));
    }

    /**
     * list disease entities
     * List disease entities
     */
    async listDisease(requestParameters: ListDiseaseRequest): Promise<Array<EntDisease>> {
        const response = await this.listDiseaseRaw(requestParameters);
        return await response.value();
    }

    /**
     * list employee entities
     * List employee entities
     */
    async listEmployeeRaw(requestParameters: ListEmployeeRequest): Promise<runtime.ApiResponse<Array<EntEmployee>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/employees`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EntEmployeeFromJSON));
    }

    /**
     * list employee entities
     * List employee entities
     */
    async listEmployee(requestParameters: ListEmployeeRequest): Promise<Array<EntEmployee>> {
        const response = await this.listEmployeeRaw(requestParameters);
        return await response.value();
    }

    /**
     * list gender entities
     * List gender entities
     */
    async listGenderRaw(requestParameters: ListGenderRequest): Promise<runtime.ApiResponse<Array<EntGender>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/genders`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EntGenderFromJSON));
    }

    /**
     * list gender entities
     * List gender entities
     */
    async listGender(requestParameters: ListGenderRequest): Promise<Array<EntGender>> {
        const response = await this.listGenderRaw(requestParameters);
        return await response.value();
    }

    /**
     * list medicalcare entities
     * List medicalcare entities
     */
    async listMedicalcareRaw(requestParameters: ListMedicalcareRequest): Promise<runtime.ApiResponse<Array<EntMedicalCare>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/medicalcares`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EntMedicalCareFromJSON));
    }

    /**
     * list medicalcare entities
     * List medicalcare entities
     */
    async listMedicalcare(requestParameters: ListMedicalcareRequest): Promise<Array<EntMedicalCare>> {
        const response = await this.listMedicalcareRaw(requestParameters);
        return await response.value();
    }

    /**
     * list patient entities
     * List patient entities
     */
    async listPatientRaw(requestParameters: ListPatientRequest): Promise<runtime.ApiResponse<Array<EntPatient>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/patients`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EntPatientFromJSON));
    }

    /**
     * list patient entities
     * List patient entities
     */
    async listPatient(requestParameters: ListPatientRequest): Promise<Array<EntPatient>> {
        const response = await this.listPatientRaw(requestParameters);
        return await response.value();
    }

}
