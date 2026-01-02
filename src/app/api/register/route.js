import { postUser } from "@/actions/server/auth";

export async function POST(req) {
  const payload = await req.json();

  const result = await postUser(payload);
  
  return Response.json(result);
}
