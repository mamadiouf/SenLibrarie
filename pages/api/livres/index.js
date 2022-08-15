import Livre from "../../../models/livre";
import dbConnection from "../../../connection/dbConnection";

dbConnection();

export default async function handler(req,res){
    const {method} = req

    switch(method){
        case "GET":
            try {
                const livres = await Livre.find({});
                res.status(200).json({success:true, data:livres})
            } catch (error) {
                console.log(error);
                res.status(500).json({success:false,error})
            }
        case "POST":
                try {
                    const {name ,auteur } = req.body;
                    if((!name,!auteur)) throw "invalid data";
                    const livre = await Livre.create({name ,auteur});
                    res.status(201).json({ success: true, data: livre });
                } catch (error) {
                    console.log(error);
                    res.status(500).json({ success: false, error });
                }
                break;
            default:
                res.status(500).json({ success: false });
                break;
    }
}