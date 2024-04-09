import { Request, Response } from "express";
import { NewScheduleServise } from "../../services/schedule/NewScheduleServise";

class NewScheduleController{
  async handle(req: Request, res: Response){
    const { haircut_id, customer } = req.body;
    const user_id = req.user_id;

    const newSchedule = new NewScheduleServise();

    const schedule = await newSchedule.execute({
      customer,
      haircut_id,
      user_id,
    })

    return res.json(schedule);
  }
}

export { NewScheduleController }