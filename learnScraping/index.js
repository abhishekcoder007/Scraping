const axios=require("axios")
const cheerio = require("cheerio");
const pretty = require("pretty");
const imageList = [];
const {getImages}=require("./imageScrap.js")
// const getReddit = async () => {
// 	const {data} = await axios.get('https://reddit.com/');
// 	// console.log(data);
//     const $ = cheerio.load(data);
  
      
//   try{
//     $('img').each((i, image) => {
//         const imageUrl = $(image).attr('src');
//         if (imageUrl) {
//           imageList.push(imageUrl);
//         }
//       });
//       console.log(imageList)
//       return imageList;
//     } catch (error) {
//       throw new Error(`Error fetching images from : ${error.message}`);
//     }
   


// };

async function  getData(){
let data=await getImages('https://reddit.com/')
console.log(data)
}

getData()


