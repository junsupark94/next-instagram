import { NextRequest, NextResponse } from "next/server";
import bcyrpt from "bcrypt";
import { db } from "@/lib/db";
import { SignInType, emailRegex, phoneRegex } from "@/lib/zod";
import { User } from "@prisma/client";

export async function POST(req: NextRequest) {
  try {
    const data: SignInType = await req.json();

    let field = "";

    const isPhone = data.login.match(phoneRegex);
    const isEmail = data.login.match(emailRegex);

    if (isPhone) {
      field = "phone_number";
    } else if (isEmail) {
      field = "email";
    } else {
      field = "username";
    }

    const user = await db.user.findFirst({
      where: {
        [field]: data.login,
      },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 400 });
    }

    const isCorrectPassword = bcyrpt.compareSync(
      data.password,
      user.hashed_password,
    );

    if (!isCorrectPassword) {
      return new NextResponse("Wrong password", { status: 400 });
    }

    const response = new NextResponse();
    response.cookies.set("JUNSU-AUTH", "some_secret");
    response.cookies.set("INSTAGRAM-CLONE-TOKEN", user.id);
    return response;
  } catch (error) {
    console.log("[SIGNIN_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
