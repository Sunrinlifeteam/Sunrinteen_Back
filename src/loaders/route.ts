import express from 'express';
import { attachControllers } from '@decorators/express';
import { AuthController } from '../controllers/auth';
import { ScheduleController } from '../controllers/schedule';
import { SchoolNoticeController } from '../controllers/schoolNotice';
import { IntranetNoticeController } from '../controllers/intranetNotice';
import { UploadController } from '../controllers/upload';
import { CalendarController } from '../controllers/calendar';

export default async (app: express.Application) => {
    attachControllers(app, [UploadController]);
    attachControllers(app, [AuthController]);
    attachControllers(app, [ScheduleController, CalendarController]);
    attachControllers(app, [IntranetNoticeController, SchoolNoticeController]);
};
