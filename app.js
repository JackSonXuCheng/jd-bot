/**
 * 下载JD_DailyBonus.js，然后替换变量，进行执行
 */

const exec = require('child_process').execSync;
const fs = require('fs');
const fetch = require('node-fetch');
const FormData = require('form-data');

const form = new FormData();
const JSFile = 'JD_DailyBonus.js';

// 公共变量
const KEY = process.env.JD_COOKIE;
const serverJ = process.env.PUSH_KEY;
const DualKey = process.env.JD_COOKIE_2;

async function downloadJS() {
  console.log('开始下载代码...');
  const url_cdn = `https://cdn.jsdelivr.net/gh/NobyDa/Script@master/JD-DailyBonus/${JSFile}`;
  const url_raw = `https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/${JSFile}`;
  try {
    let res = await fetch(url_cdn);
    if (res.status !== 200) {
      throw Error(`${res.status} ${res.statusText} 从${url_cdn}下载代码失败`);
    }
    const data = await res.text();
    fs.writeFileSync(JSFile, data);
    console.log('下载代码完毕');
  } catch (err) {
    console.error(err);
    try {
      res = await fetch(url_raw);
      if (res.status !== 200) {
        throw Error(`${res.status} ${res.statusText} 从${url_raw}下载代码失败`);
      }
      const data = await res.text();
      fs.writeFileSync(JSFile, data);
      console.log('下载代码完毕');
    } catch (err) {
      console.error(err);
      console.log(`下载代码文件${JSFile}失败`);
    }
  }
}

function changeFile() {
  console.log('开始替换变量...');
  try {
    let content = fs.readFileSync(JSFile, 'utf8');
    content = content.replace(/var Key = ''/, `var Key = '${KEY}'`);
    try {
      if (DualKey) {
        content = content.replace(/var DualKey = ''/, `var DualKey = '${DualKey}'`);
      }
    } catch {
      console.error('未找到DualKey');
    }
    fs.writeFileSync(JSFile, content, 'utf8');
    console.log('替换变量完毕!');
  } catch {
    console.error('替换变量失败');
  }
}

async function sendNotify(title, desp) {
  console.log('开始执行...');
  const url = `https://sctapi.ftqq.com/${serverJ}.send`;
  try {
    form.append('title', title);
    form.append('desp', desp);
    const options = {
      method: 'POST',
      body: form,
    };
    const res = await fetch(url, options);
    console.log(res);
    console.log('执行完毕!');
  } catch {
    console.error('执行失败');
  }
}

async function start() {
  if (!KEY) {
    console.log('请填写 key 后在继续');
    return;
  }
  // 下载最新代码
  await downloadJS();

  // 替换变量
  await changeFile();

  // 执行
  await exec(`node ${JSFile} >> result.txt`);

  if (serverJ) {
    const path = './result.txt';
    let content = '';
    if (fs.existsSync(path)) {
      content = fs.readFileSync(path, 'utf8');
    }
    const t = content.match(/【签到概览】:\s+(.*)/);
    const res = t ? t[1] : '失败';
    const title = `${res} ${new Date().toLocaleDateString()}`;
    await sendNotify(title, content);
  }
}


start();
