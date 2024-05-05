import conf from "../conf/conf";
import { Client, Databases, Storage } from "appwrite";

class Service {
    constructor() {
        this.client = new Client()
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}) {
        try {
            const result = await this.databases.createDocument(
                conf.appwriteCollectionId,
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            );
            return result;
        } catch (error) {
            throw error;
        }
    }

    async updatePost( slug , {title,  content, featuredImage, status, userId}){
        try {
            return await this,this.databases.updateDocument(
                conf.appwriteCollectionId,
                conf.appwriteDatabaseId,
                slug,
                {
                    title,
                    content,
                    status,
                }
            )
            
        } catch (error) {
          console.log("appwrite error ::updatepost", error);  
        }

    }

    async detetePost( slug ){
        try {
            await this.databases.deleteDocoment(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId

            )
            return true
        } catch (error) {
            console.log("appwrite Service :: delepost erroe ", error);
            return false
        }
    }
}

const service = new Service();

export default service;
