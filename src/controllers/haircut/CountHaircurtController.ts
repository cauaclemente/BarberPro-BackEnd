import { Request, Response } from "express";
import { CountHaircurtService } from "../../services/haircut/CountHaircurtService";

class CountHaircurtController{
  async handle(req: Request, res: Response){
    const user_id = req.user_id;

    const countHaircut = new CountHaircurtService();

    const count = await countHaircut.execute({
      user_id
    })

    return res.json(count);
    
  }
}

export { CountHaircurtController}