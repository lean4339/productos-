let process = require("process");
let app = require("./ejercicio");

let comando = process.argv[2];

switch(comando){
    case "listar":
        app.listar();
        break;
    case "agregar":
        let titulo = process.argv[3];
        let precio = process.argv[4];
        app.agregar(titulo, precio);
        break;
    case "filtrar":
        let minimo = Number(process.argv[3]);
        let maximo = Number(process.argv[4]);
        app.filtrar(minimo,maximo);
        break;
    case "cambiar":
        let producto = process.argv[3];
        let precio = Number(process.argv[4]);
        app.cambiarPrecio(producto, precio);
        break;
    case "buscar":
        let producto = process.argv[3];
        app.buscar(producto);
        break;
    case "eliminar":
        let producto = process.argv[3];
        let id = Number(process.argv[4]);
        app.eliminar(producto, id);
        break;
}