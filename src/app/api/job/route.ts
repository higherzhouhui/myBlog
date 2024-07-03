import {NextRequest, NextResponse} from "next/server";
import fs from 'fs'
import { APIURL } from '@/service/config'
import { JobListInterface } from "@/interface/job";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const allSearchParams = Object.fromEntries(searchParams);
  const page = allSearchParams.page
  const response = await fetch(`https://svc.eleduck.com/api/v1/posts?page=${page}`)
  const data = await response.json()
  const list = data.posts.filter((item: JobListInterface) => {
    return item.category.id !== 14
  })
  return NextResponse.json({
    code: 200,
    data: {
      list: list,
      backObj: data.pager,
    },
  });
}

// 更新和新增
export async function POST(request: NextRequest) {
  const response = await fetch(`${APIURL}/mydata.json`)
  const data = await response.json()
  const allSearchParams = await request.json();
  let new_data = data
  let sameIndex: any = ''
  try {
      if (allSearchParams?.id) {
        new_data.map((item: any, index: number) => {
          if (item.id == allSearchParams.id) {
            sameIndex = index
          }
        })
        if (typeof sameIndex == 'number') {
          new_data[sameIndex] = allSearchParams
        } else {
          new_data.push(allSearchParams)
        }
      } else {
        new_data.push(allSearchParams)
      }
  } catch (err) {
    new_data = err
  }
  const to_string = JSON.stringify(new_data)
  fs.writeFileSync(`${process.cwd()}\\public\\mydata.json`, to_string, 'utf-8');
  return NextResponse.json({
    code: 200,
    data: new_data,
    msg: '操作成功！',
  });
}

// 删除
export async function DELETE(request: NextRequest) {
  const response = await fetch(`${APIURL}/mydata.json`)
  const data = await response.json()
  const allSearchParams = await request.json();
  let new_data = data
  if (data && data.length) {
    if (allSearchParams.id) {
      let sameIndex: any = ''
      new_data.map((item: any, index: number) => {
        if (item.id == allSearchParams.id) {
          sameIndex = index
        }
      })
      new_data.splice(sameIndex, 1)
    }
  }
  const to_string = JSON.stringify(new_data)
  fs.writeFileSync(`${process.cwd()}\\public\\mydata.json`, to_string, 'utf-8');
  return NextResponse.json({
    code: 200,
    data: allSearchParams.id,
    msg: '操作成功！',
  });}
