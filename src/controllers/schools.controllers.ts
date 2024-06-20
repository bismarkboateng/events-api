import { Request, Response } from "express";
import { connectToDatabase } from "../database";
import School from "../database/models/school.model";

export const getAllSchools = async (request: Request, response: Response) => {
    
    try {
        await connectToDatabase()
        const schools = await School.find().exec()

        if (!schools) {
            return response.status(404).send({
                message: "No Schools found!"
            })
        }

        return response.status(200).send(schools)
    } catch (error) {
        throw error
    }
}

export const listSchool = async (request: Request, response: Response) => {
    const { id } = request.params

    try {
        await connectToDatabase()
        const school = await School.find({ schoolId: id })

        if (!school) {
            return response.status(404).send({
                message: "School not found!"
            })
        }

        return response.status(200).send(school)
    } catch (error) {
        throw error
    }
}

export const create = async (request: Request, response: Response) => {
    const data = request.body
    
    try {
        await connectToDatabase()
        const createdSchool = await School.create(data)

        if (!createdSchool) {
            return response.status(500).send({
                message: "Could not create school"
            })
        }

        return response.status(200).send(createdSchool)
    } catch (error) {
        throw error
    }
}

export const updateSchool = async (request: Request, response: Response) => {
    const { id, name } = request.body

    if (!id || !name) {
        return response.status(400).send({ error: "id and name are required" });
    }

    try {
        await connectToDatabase()

        const updatedSchool = await School.findOneAndUpdate(
            { schoolId: id },
            { name: name },
            { new: true }
        );

        if (!updatedSchool) {
            return response.status(404).send({ error: "School not found!" });
        }

        return response.status(200).send(updatedSchool);
    } catch (error) {
        throw error
    }
}


export const deleteSchool = async (request: Request, response: Response) => {
    const { id } = request.body;

    try {
        await connectToDatabase()

        const deletedSchool = await School.findOneAndDelete({ schoolId: id });

        if (!deletedSchool) {
            return response.status(404).send({ error: "School not found"});
        }

        return response.status(200).send({ message: "School deleted successfully", school: deletedSchool });

    } catch (error) {
        throw error
    }
}