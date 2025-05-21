const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname ,'../db/productos.json')


const leerProductos = () => {
    const data = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(data)
}

let productos = leerProductos()

const escribirProductos = (productos) => {
  fs.writeFileSync(filePath, JSON.stringify(productos, null, 2))
}



const createProduct = (req, res) => {
    const nuevoProducto = req.body
    nuevoProducto.id = productos.length + 1
    productos.push(nuevoProducto)
    escribirProductos(productos)
    res.status(201).json({ data: nuevoProducto, status: 201, message: "Producto creado de forma exitosa" })
  }
  
const getProduct = (req, res) => {
    res.json({ data: productos, status: 200, message: "Productos obtenidos de forma exitosa" })
  }
  
const getElementById =  (req, res) => {
    const producto = productos.find(item => item.id === parseInt(req.params.id))
    if (!producto) {
      return res.status(404).json({ status: 404, message: "Producto no encontrado" })
    }
    res.json({ data: producto, status: 200, message: "Producto obtenido de forma exitosa" })
  }
  
  const updateProduct = (req, res) => {
    if (!req.body) {
      return res.status(400).json({ status: 400, message: "El cuerpo de la solicitud está vacío o mal formateado" })
    }
  
    const producto = productos.find(item => item.id === parseInt(req.params.id))
    if (!producto) {
      return res.status(404).json({ status: 404, message: "Producto no encontrado" })
    }
  
    const { nombre, precio } = req.body
  
    producto.nombre = nombre || producto.nombre
    producto.precio = precio || producto.precio
  
    escribirProductos(productos)
  
    res.json({ data: producto, status: 201, message: "Producto editado de forma exitosa" })
  }
  
  
  
const deleteProduct = (req, res) => {
      let producto = productos.find(item => item.id === parseInt(req.params.id))
      if (!producto) {
        return res.status(404).json({ status: 404, message: "Producto no encontrado" })
      }  
      productos = productos.filter(item => item.id === parseInt(req.params.id))
      
      escribirProductos(productos)

      res.json({ data: producto, status: 201, message: "Producto eliminado de forma exitosa" })
  
  }


  module.exports = {
    createProduct,
    getProduct,
    getElementById,
    updateProduct,
    deleteProduct
  }
  