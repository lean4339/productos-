let fs = require("fs");

module.exports = app = {
    archivo : "./stock.json",
    leerJSON: function leer(){
        let listaProductos = fs.readFileSync(this.archivo, "utf-8")
        return JSON.parse(listaProductos)
    },
    guardarJSON: function guardar(datos){
        let nuevoJSON = JSON.stringify(datos);
        fs.writeFileSync(this.archivo,nuevoJSON, "utf-8");
    },
    listar : function listar(){
        listaProductos = this.leerJSON()
        for (let i = 0; i < listaProductos.length; i++){
           console.log(listaProductos[i].name);
        }
        
    },
    agregar: function agregar(titulo,precio){
        let listaProductos = this.leerJSON()
        let id = Number((listaProductos.length)) + 1
        let nuevo = {
            id: id,
            name : titulo,
            price : precio,
        }
        listaProductos = this.leerJSON()
        listaProductos.push(nuevo)
        this.guardarJSON(listaProductos)
    },
    filtrar: function filtrar(minimo,maximo){
        let filtrados = [];
        let listaProductos = this.leerJSON();
        for(let i = 0; i < listaProductos.length; i++){
                if(listaProductos[i].price >= minimo && listaProductos[i].price <= maximo){
                    let producto = {
                        nombre : listaProductos[i].name,
                        precio : listaProductos[i].price
                    }
                      filtrados.push(producto)
                }
        }
        for(let i = 0; i < filtrados.length; i++){
            console.log(`Producto: ${filtrados[i].nombre} precio: ${filtrados[i].precio}`)
        }
    },
    cambiarPrecio : function cambiar(producto,precio){
        let listaProductos = this.leerJSON()
        for(let i = 0; i < listaProductos.length; i++){
            if(listaProductos[i].name == producto){
                listaProductos[i].price = precio;
            }
        }
        this.guardarJSON(listaProductos);
        console.log(`Se ha cambiado el precio de ${producto} a : ${precio}`)

    },
    buscar: function buscar(producto){
        let booleano = true;
        let listaProductos = this.leerJSON()
        for(let i = 0; i < listaProductos.length; i++){
            if(listaProductos[i].name === producto){
                booleano = true;
                console.log(`Se ha encontrado el producto con id: ${listaProductos[i].id} , nombre de producto: ${listaProductos[i].name} y Precio: ${listaProductos[i].price}`)
    
                     }
        }
        if(booleano === true){
                }
        else{
            console.log("No se encuentra el producto")
        }

    },
    eliminar : function eliminar(producto, id){
        let listaProductos = this.leerJSON()
        for(let i = 0; i < listaProductos.length; i++){
            if(listaProductos[i].name=== producto && listaProductos[i].id === id){
                let indice = listaProductos.indexOf(i);
                listaProductos.splice(indice, 1);
                this.guardarJSON(listaProductos)
                console.log('Se ha eliminado el producto: ' +producto);
            }
        }
    }

}



