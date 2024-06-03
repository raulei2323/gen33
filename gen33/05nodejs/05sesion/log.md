HTTP 
Hypertext Transfer Protocol

EL Modelo Cliente Servidor
(request, response)


Cliente-----------------------------------------Servidor
                        HTTP                            


En este modelo el cliente es el que inicia la conversacion y manda una peticion, el servidor la procesa y da una respuesta.

<!-- ? -->
Mensajes HTTP

Headers----Informacion general del mensaje,metadatos
Body-------El body siempre va en texto,
<!-- ? -->
Content-Type, le da al server el formato que debera leer para poder interpretar el contenido enviado.

Content-Type: <tipo>/<formato>

mime type para ver las tablas de como se ponen los diferentes content type 
  METODOS HTTP (tambien llamados verbos HTTP )
GET Obtiene informacion

PUT sobreescribe cierta info

PATCH agrega info sin borrar nada ni sobreescribirlo

HEAD y OPTIONS son para informacion general 
<!-- ?-------------------------------------------- -->
HTTP response.status

1xx informativos
2xx exito
3xx redirecciones
4xx error del cliente
5xx error del servidor
<!-- ?------------------------------------------------ -->
Status common

200
201

307
308

400
401
402
403
404
405
409

500
505
