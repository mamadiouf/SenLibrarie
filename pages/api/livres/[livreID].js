import Livre from "../../../models/livre";
import dbConnection from "../../../connection/dbConnection";

dbConnect();

export default async function handler(req, res) {
    const {method} = req;
    const {livreID} = req.query;

    switch (method) {
        case "PUT":
            try {
                const { name,auteur } = req.body;
                if((!name,!auteur)) throw "invalid data";
                await Livre.updateOne({_id:livreID},{name,auteur});
                res.status(200).json({success:true});
                
            } catch (error) {
                console.log(error);
                res.status(500).json({success:false,error})
            }
            break;
        case "DELETE":
            try {
                await Livre.deleteOne({_id:livreID});
                res.status(200).json({success:true});
            } catch (error) {
                console.log(error);
                res.status(500).json({success:false,error});
            }
            break;
        default:
            res.status(400).json({ success: false })
            break;
    }
}