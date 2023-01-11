import express from 'express';
import { deleteTask, fetchAllTasks, fetchCompletedTasks, fetchPendingTasks, markTaskAsCompleted, saveTask } from '../controllers/TaskController.js';

const taskRouter=express.Router();

taskRouter.post('/tasks',saveTask);
taskRouter.get('/tasks/all',fetchAllTasks);
taskRouter.get('/tasks/completed',fetchCompletedTasks);
taskRouter.get('/tasks/pending',fetchPendingTasks);
taskRouter.delete('/tasks/:id',deleteTask);
taskRouter.put('/tasks/:id/mark-completed',markTaskAsCompleted);

export default taskRouter;