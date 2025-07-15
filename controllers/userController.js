import * as User from '../models/userModel.js';

export const getUsers = (req, res) => {
  res.json(User.getAll());
};

export const getUser = (req, res) => {
  const user = User.getById(req.params.id);
  user ? res.json(user) : res.status(404).json({ error: 'User not found' });
};

export const createUser = (req, res) => {
  const newUser = User.add(req.body);
  res.status(201).json(newUser);
};

export const updateUser = (req, res) => {
  const updated = User.update(req.params.id, req.body);
  updated ? res.json(updated) : res.status(404).json({ error: 'User not found' });
};

export const deleteUser = (req, res) => {
  const deleted = User.remove(req.params.id);
  deleted ? res.json({ message: 'User deleted' }) : res.status(404).json({ error: 'User not found' });
};
