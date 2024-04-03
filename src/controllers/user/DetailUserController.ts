import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailUserController{
  async handle(req: Request, res: Response){

    const detaileUserService = new DetailUserService();

    const datailUser = await detaileUserService.execute();
  
    return res.json(datailUser)
  }
}

export { DetailUserController }