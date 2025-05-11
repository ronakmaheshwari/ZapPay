import { NextResponse } from "next/server";
import {client}  from "@repo/db/client";

export async function GET() {
    await client.user.create({
        data:{
            email:"jedi@gmail.com",
            password:"hyperbeast"
        }
    })
    return NextResponse.json({
        message: "User Successfully created"
    }, { status: 200 });
}