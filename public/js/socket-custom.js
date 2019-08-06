var socket = io();
socket.on('connect', function () {
    console.log('conectado con el servidor');
});
//escuchar succesos
socket.on('disconnect', function () {
    console.log('Perdimos conexion con el servidor');
});
//enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'jassmanni',
    mensaje: 'Hola mundo'
}, function (resp) {
    console.log('Respuesta SERVER: ', resp);
});

//escuchar informacion
socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor: ', mensaje);
});