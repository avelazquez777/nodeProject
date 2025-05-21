const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../db/users.json');

const leerUsers = () => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]');
  }
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
};

let users = leerUsers();

const escribirUsers = (users) => {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};


const createUser = (req, res) => {
  const nuevoUser = req.body;

  if (!nuevoUser.nombre || !nuevoUser.email || !nuevoUser.edad) {
    return res.status(400).json({ status: 400, message: "Faltan campos obligatorios" });
  }

  nuevoUser.id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
  users.push(nuevoUser);
  escribirUsers(users);

  res.status(201).json({ data: nuevoUser, status: 201, message: "Usuario creado de forma exitosa" });
};


const getUser = (req, res) => {
  res.json({ data: users, status: 200, message: "Usuarios obtenidos de forma exitosa" });
};


const getUserElementById = (req, res) => {
  const user = users.find(item => item.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ status: 404, message: "Usuario no encontrado" });
  }
  res.json({ data: user, status: 200, message: "Usuario obtenido de forma exitosa" });
};

const updateUser = (req, res) => {
  const user = users.find(item => item.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ status: 404, message: "Usuario no encontrado" });
  }

  const { nombre, email, edad } = req.body;


  user.nombre = nombre ?? user.nombre;
  user.email = email ?? user.email;
  user.edad = edad ?? user.edad;

  escribirUsers(users);

  res.json({ data: user, status: 200, message: "Usuario editado de forma exitosa" });
};


const deleteUser = (req, res) => {
  const user = users.find(item => item.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ status: 404, message: "Usuario no encontrado" });
  }

  users = users.filter(item => item.id !== user.id);
  escribirUsers(users);

  res.json({ data: user, status: 200, message: "Usuario eliminado de forma exitosa" });
};

module.exports = {
  createUser,
  getUser,
  getUserElementById,
  updateUser,
  deleteUser
};
