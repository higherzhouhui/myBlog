import {NextResponse} from "next/server";

export async function GET() {
  const response = await fetch('/mydata.json')
  const data = await response.json()
  return NextResponse.json(data);
}

