import { Request, Response } from "express";
import { FinishScheduleService } from "../../services/schedule/FinishScheduleService";

class FinishScheduleController{
  async handle(req: Request, res: Response){
    const user_id = req.user_id;
    const schedule_id = req.query.schedule_id as string;

    const FinishSchedule = new FinishScheduleService();

    const schedule = await FinishSchedule.execute({
      schedule_id,
      user_id,
    })

    return res.json(schedule)

  }
}

export { FinishScheduleController }