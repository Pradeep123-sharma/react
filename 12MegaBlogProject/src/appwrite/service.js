import config from "../config/config.js";
import { Client, ID, TablesDB, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    tablesDB;
    storage;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.tablesDB = new TablesDB(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({title, slug, featuredImage, content, status, userId} = {}) {
        // ensure we use a valid rowId: prefer provided slug (string), otherwise generate one
        const rowId = (typeof slug === "string" && slug.trim()) ? slug.trim() : ID.unique();
        try {
            return await this.tablesDB.createRow(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                rowId,
                {
                    title: (typeof title === "string" ? title : String(title || "")).slice(0, 255),
                    content: content || "",
                    featuredImage: featuredImage || "",
                    status: status || "active",
                    userId: userId || "",
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error = ", error);
            return false;
        }
    }

    async updatePost(slug, {title, featuredImage, content, status}) {
        try {
            return await this.tablesDB.updateRow(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error = ", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.tablesDB.deleteRow(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error = ", error);
            return false
        }
    }

    async getPost(slug) {
        try {
            // normalize incoming parameter: accept either a string id or an object containing $id / id / slug
            let rowId = slug;
            if (typeof slug === "object" && slug !== null) {
                rowId = slug.$id ?? slug.id ?? slug.slug ?? null;
            }
            if (!rowId || typeof rowId !== "string" || rowId === "[object Object]") {
                console.warn("Appwrite service :: getPost :: invalid rowId:", rowId);
                return false;
            }
            return await this.tablesDB.getRow(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                rowId
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error = ", error);
            return false
        }
    }

    /* 
        So here in this fun 'queries' is a variable name and real query is written in square brackets. We can pass multiple queries as an array.
        So here we are passing a default query to get only active posts. We can filter posts on basise of status because we have defined status as an index in our table.
        We can only do queries if we have defined indexes in our table. Here 'status' is a key.
    */
    async getAllPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.tablesDB.listRows(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite service :: getAllPosts :: error = ", error);
            return false
        }
    }

// ****************************************************************************************************************
    // FILE UPLOADING SERVICES
    async uploadFile(file) {
        try {
            return await this.storage.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error = ", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.storage.deleteFile(
                config.appwriteBucketId,
                fileId
            );
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error = ", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        console.log(fileId)

        const url = this.storage.getFilePreview(config.appwriteBucketId, fileId);
        console.log("Service url: ",url);
        
        return url.href
    }
}

const service = new Service();

export default service