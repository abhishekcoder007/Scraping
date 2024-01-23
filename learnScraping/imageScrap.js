

const axios=require("axios")
const cheerio = require("cheerio");
const imageList = [];


const getImages = async (url) => {
	const {data} = await axios.get(`${url}`);
	// console.log(data);
    const $ = cheerio.load(data);
  
      
  try{
    $('img').each((i, image) => {
        const imageUrl = $(image).attr('src');
        if (imageUrl) {
          imageList.push(imageUrl);
        }
      });
    //   console.log(imageList)
      return imageList;
    } catch (err) {
     console.log(err)
    }
   


};

module.exports={getImages}