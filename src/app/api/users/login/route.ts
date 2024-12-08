import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'

connect()

export async function POST(request: NextRequest) {
    try {
        const reqbody= await request.json()
        const {email, password}=reqbody
        console.log(reqbody)

        //check if user exists
        const user= await User.findOne({email})
        if (user!) {
            return NextResponse.json({error:"User doesnt exists"},
                {status:400}
            )
        }
    } catch (error: any) {
        return NextResponse.json({error: error.message},
            {status:400}
        )

    }
}