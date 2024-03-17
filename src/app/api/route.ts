import {NextResponse} from "next/server";

export async function GET() {
  const response = await fetch('https://github.com/higherzhouhui/myBlog/blob/main/public/mydata.json')
  const data = await response.json()
  return NextResponse.json(data);
}

