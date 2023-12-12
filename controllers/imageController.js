const fsPromise=require('fs').promises;
const path=require('path');
const sharp=require('sharp');

const displayImage= async(req,res)=>{
    const {filename, width, height}=req.query;
    const image= await fsPromise.readFile(path.join(__dirname, "..","images", `${filename}.jpg`));
    const resizedImage= await sharp(image).resize(parseInt(width), parseInt(height)).toBuffer();
    res.contentType('image/jpeg');
    res.send(resizedImage);
}
module.exports={displayImage}