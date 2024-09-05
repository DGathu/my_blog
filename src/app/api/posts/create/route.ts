import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log(body);

        // Validate the request body
        const { title, content, tagId } = body;
        if (!title || !content || !tagId) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        const post = await db.post.create({
            data: {
                title,
                content,
                tagId,
            },
        });
        return NextResponse.json(post, { status: 200 });
    } catch (error) {
        console.error('Error creating post:', error);
        return NextResponse.json({ message: 'Could not create post' }, { status: 500 });
    }
}