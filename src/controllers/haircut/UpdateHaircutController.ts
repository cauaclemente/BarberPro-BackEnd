import { Request, Response } from "express";
import { UpdateHaircutService } from "../../services/haircut/UpdateHaircutService";

class UpdateHaircutController{
  async handle( req: Request, res: Response){
    const user_id = req.user_id;
    const { name, price, status, haircut_id} = req.body
    
    const updateHaircut = new UpdateHaircutService();

    const update = await updateHaircut.execute({
      haircut_id,
      name,
      price,
      status,
      user_id
    })
    
    return res.json( update );
    
  }
}

export { UpdateHaircutController}