const servidorweb = require("express");
const app = servidorweb();
const puerto = 3001;

app.get('/',( req,res ) => {
    res.send("Estás consultando la raíz de la API");
});

app.get('/personas',( req,res ) => {
    let persona = (
        "nombre" = "Juan Carlos",
        "apellido" = "Zambrano",
        "estado civil" = "Casado",
        "edad" = 30,
        "tiene hijos" = true
    )
    res.send(persona);
});


app.listen(puerto,()=> (
    console.log("el servidor está en ejecución en el puerto " + puerto)
));