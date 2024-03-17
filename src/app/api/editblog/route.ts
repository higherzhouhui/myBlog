import {NextResponse} from "next/server";

const fs = require('fs');
 
// 要写入的数据对象
const data = {
  name: 'John Doe',
  age: 30,
  email: 'john@example.com'
};
 
// 将数据转换为JSON字符串
const jsonData = JSON.stringify(data, null, 2);
 
function readLocalJsonFile(url: string, callback: (c: any) => void) {
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var json = JSON.parse(xhr.responseText);
      callback(json);
    }
  };
  xhr.send(null);
}

export const updateBlogList = () => {
  // 写入文件
  fs.writeFile('/mydata.json', jsonData, (err: any) => {
    if (err) {
      console.error(err);
      return;
    }
    return NextResponse.json({code: 200});
  });
}


export async function GET() {
  try {
    readLocalJsonFile('../../data/mydata.json', (e) => {
      return NextResponse.json(e);
    })
  } catch (err) {
    console.error(err)
  }

}