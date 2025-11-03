import config from '../config/config.js'
import { Client, Account, ID } from "appwrite"

/* So this is our future proof code where even if we use any other services in future then we make changes only and only in this file. We don't have to change frontend part. */
export class AuthService {
    client = new Client();
    account;

    /* To humne yaha par constructor isliye banaya hai kyunki jab koi bhi user is object ko banaye tab uska client banna chahiye aur fir properly uska account bane. */
    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
         this.account = new Account(this.client)
    }

    /* 
        So we'll make a method 'createAccount' which under the hood implements the logic for appwrite but we don't  want to show to users, so user will simply call this method to create account but bts he don't knows which service logic we are using.
        So actually inside we are implementing the appwrite logic but if we want to change the service(eg- firebase) in future we can simply change the logic inside this method and constructor without changing anything outside. So this is the main purpose of service layer.
    */
    async createAccount(email, password, name) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name,
            )
            if (userAccount) {
                // We''ll call another method of login.
                return this.login(email, password)
            } else {
                return userAccount
            }
        } catch (error) {
            throw error
        }
    }

    async login(email, password) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error
        }
    }

    async getAccount() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error = ", error);
        }

        // If any error occurs in even try catch block also, then also it returns null.
        return null
    }

    async logout() {
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: logout :: error = ", error);
        }
    }

}

// Here 'authService' is an object.
const authService = new AuthService()

export default authService