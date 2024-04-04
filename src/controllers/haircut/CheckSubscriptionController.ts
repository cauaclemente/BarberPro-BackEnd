import { Request, Response } from "express";
import { CheckSubscriptionService } from "../../services/haircut/CheckSubscriptionService";

class CheckSubscriptionController{
  async handle(req: Request, res: Response){
    const user_id = req.user_id;

    const check = new CheckSubscriptionService();

    const status = await check.execute({
      user_id,
    })

    return res.json(status);
    
  }
}

export { CheckSubscriptionController}