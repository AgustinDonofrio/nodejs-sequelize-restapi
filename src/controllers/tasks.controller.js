import {Task} from '../models/Task.js'

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.status(200).json(tasks);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const getTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByPk(id);

        if(!task)
            return res.status(404).json({message: "Task doesn't exist"});

        res.status(200).json(task);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const createTask = async (req, res) => {
    const {name, done, projectId} = req.body;

    try {
        const newTask = await Task.create({
            name,
            done,
            projectId
        });
        res.status(200).json(newTask);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;

        const task = await Task.findByPk(id);
        task.set(req.body); // Otro enfoque similar al que use en el "updateProjects"
        await task.save();
        
        res.status(200).json(task);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }    
};

export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        await Task.destroy({
            where: {
                id
            }
        });
        res.sendStatus(204); // 204: Todo OK, pero no muestra ningún mensaje
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};