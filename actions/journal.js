"use server"
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

// Func designed to create a journal entry for an authenticated user. It uses Clerk for authentication and Prisma (db) for database operations.
export async function createJournalEntry(data) {
    try {

        const { userId } = await auth()
        if (!userId) throw new error("Unauthorised")
        const user = await db.user.findUnique({
            where: { clerkUserId: userId },
        });
        if (!user) {
            throw new error("User Not Found")
        }

    }
    catch (error) {
        throw new error(error.message);
    }

}
