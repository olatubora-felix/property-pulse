import connectDB from "@/config/database";
import Property from "@/models/PropertyMoel";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    await connectDB();
    const properties = await Property.find({});
    return new Response(JSON.stringify(properties), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
