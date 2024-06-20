import { Request, Response } from "express";
import { connectToDatabase } from "../database";
import Category from "../database/models/categories.model";

export const getAllCategories = async (request: Request, response: Response) => {
    
    try {
        await connectToDatabase()
        const categories = await Category.find().exec()

        if (!categories) {
            return response.status(404).send({
                message: "No categories found!"
            })
        }

        return response.status(200).send(categories)
    } catch (error) {
        throw error
    }
}

export const listCategory = async (request: Request, response: Response) => {
    const { id } = request.params

    try {
        await connectToDatabase()
        const category = await Category.find({ categoryId: id })

        if (!category) {
            return response.status(404).send({
                message: "Category not found!"
            })
        }

        return response.status(200).send(category)
    } catch (error) {
        throw error
    }
}

export const create = async (request: Request, response: Response) => {
    const data = request.body
    
    try {
        await connectToDatabase()
        const createdCategory = await Category.create(data)

        if (!createdCategory) {
            return response.status(500).send({
                message: "Could not create category"
            })
        }

        return response.status(200).send(createdCategory)
    } catch (error) {
        throw error
    }
}

export const updateCategory = async (request: Request, response: Response) => {
    const { id, name } = request.body

    if (!id || !name) {
        return response.status(400).send({ error: "id and name are required" });
    }

    try {
        await connectToDatabase()

        const updatedCategory = await Category.findOneAndUpdate(
            { categoryId: id },
            { name: name },
            { new: true }
        );

        if (!updatedCategory) {
            return response.status(404).send({ error: "Category not found!" });
        }

        return response.status(200).send(updatedCategory);
    } catch (error) {
        throw error
    }
}


export const deleteCategory = async (request: Request, response: Response) => {
    const { id } = request.body;

    try {
        await connectToDatabase()

        const deletedCategory = await Category.findOneAndDelete({ categoryId: id });

        if (!deletedCategory) {
            return response.status(404).send({ error: "Category not found"});
        }

        return response.status(200).send({ message: "Category deleted successfully", category: deletedCategory });

    } catch (error) {
        throw error
    }
}