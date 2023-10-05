import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { emailRegex, phoneRegex, signUpSchema, SignUpType } from "@/lib/zod";
import bcyrpt from "bcrypt";

export async function POST(req: NextRequest) {

  try {
    const data: SignUpType = await req.json();
    const result = signUpSchema.safeParse(data);

    if (!result.success) {
      console.log("[SIGNUP_POST] Invalid data received", data);
      return NextResponse.json("Invalid data received", {
        status: 400,
      });
    }

    const existingUsername = await db.user.findUnique({
      where: {
        username: data.username,
      },
    });

    if (existingUsername) {
      return new NextResponse("Username already exists!", { status: 400 });
    }

    const isPhone = data.login.match(phoneRegex);
    const isEmail = data.login.match(emailRegex);

    const hashedPassword = bcyrpt.hashSync(data.password, 10);

    if (isPhone) {
      const existingPhone = await db.user.findUnique({
        where: {
          phone_number: data.login,
        },
      });
      if (existingPhone) {
        return new NextResponse("Phone number already exists!", {
          status: 400,
        });
      }

      const user = await db.user.create({
        data: {
          profile_name: data.fullname,
          username: data.username,
          phone_number: data.login,
          hashed_password: hashedPassword,
        },
      });

      const response = NextResponse.json(user);
      response.cookies.set("JUNSU-AUTH", "some_secret");
      response.cookies.set("INSTAGRAM-CLONE-TOKEN", user.id);
      return response;
    }

    if (isEmail) {
      const existingEmail = await db.user.findUnique({
        where: {
          email: data.login,
        },
      });
      if (existingEmail) {
        return new NextResponse("Email already exists!", { status: 400 });
      }

      const user = await db.user.create({
        data: {
          profile_name: data.fullname,
          username: data.username,
          email: data.login,
          hashed_password: hashedPassword,
        },
      });
      const response = NextResponse.json(user);
      response.cookies.set("JUNSU-AUTH", "some_secret");
      response.cookies.set("INSTAGRAM-CLONE-TOKEN", user.id);
      return response;
    }
  } catch (error) {
    console.log("[SIGNUP_POST_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
