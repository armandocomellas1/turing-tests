import { v4 as uuid } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    console.log(`Users in the database: ${users}`);

    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;

    users.push({...user, id: uuid(), name: '', Email: ''});

    console.log(`User [${user.username}] added to the database.`);
};

export const getUser = (req, res) => {
    res.send(req.params.id)
};

export const deleteUser = (req, res) => {
    console.log(`user with id ${req.params.id} has been deleted`);

    users = users.filter((user) => user.id !== req.params.id);
};

export const updateUser =  (req,res) => {
    const user = users.find((user) => user.id === req.params.id);

    user.id = req.body.id;
    user.name = req.body.name;
    user.email = req.body.email;

    console.log(`username has been updated to ${req.body.name}.age has been updated to ${req.body.email}`)
};