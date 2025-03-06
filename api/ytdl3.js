const ytdl = require('ytdl-core');
const {getBuffer} = require('./myfunc.js')
const regexYT = /(?<=[=\/&\%3D&])[a-zA-Z0-9_\-]{11}(?=[=\/&?#%\n\r]|$)/

const mp3 = async (url) => {
let vid = regexYT.exec(url)[0]
let url2 = `https://youtube.com/watch?v=${vid}`
let audioStream = ytdl(url, { filter: 'audioonly'});
return new Promise((resolve, reject) => {
      const chunks = [];
      audioStream.on('data', (chunk) => {
        chunks.push(chunk);
      });
      audioStream.on('end', () => {
        const audioBuffer = Buffer.concat(chunks);
        resolve(audioBuffer);
      });
      audioStream.on('error', (error) => {
        reject(error);
      }); 
    });
}

module.exports = mp3;
module.exports = {mp3,mp3v1,mp3v2,mp3v3,mp3v4,mp4,mp4v1}
