import connectDB from "@/config/database";
import Property from "@/models/PropertyMoel";
import { NextRequest } from "next/server";
export const GET = async (
  request: NextRequest,
  context: { params: paramsProps }
) => {
  try {
    await connectDB();
    const id = context?.params?.id;
    const property = await Property.findById(id);
    if (!property) {
      return new Response("Property not found", { status: 404 });
    }
    return new Response(JSON.stringify(property), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
type paramsProps = {
  id: string;
};
