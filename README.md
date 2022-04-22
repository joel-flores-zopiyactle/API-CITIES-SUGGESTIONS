# api-cities-suggestions
# Documentación del API REST de sugerencias de ciudades

El siguiente endpoint permite obtener una lista de ciudades por nombre o una palabra que coincida con los nombres de las ciudades, además de poder limitar una búsqueda más concreta como buscar por nombre, latitud y longitud haciendo más específico la búsqueda de una ciudad.

El API está desarrollado con NODE JS y con una estructura  MVC. lo que hace más fácil de mantener y tener una aplicación más ordenada y escalable. Si se necesita implementar más endpoints solo hay que ir agregando los archivos a su carpeta correspondiente.

## Instalación

```sh
npm install o npm i
```

## Comandos para ejecutar la aplicación

Ejecutar la aplicación con node
```sh
npm run start
```

Ejecutar la aplicación con nodemon
```sh
npm run dev
```

Ejecutan los test de la aplicación
```sh
npm run test	
```

### Endpoint
```sh
localhost:3000/api/v1/cities/search
```

#### Parámetros a enviar
##### Obligatorio
##### - q = Nombre de la ciudad o palabra clave

#### Opcionales
##### - latitude = Latitude de la ciudad a buscar 
##### - longitude = Longitud de la ciudad a buscar

Endpoint para buscar sugerencia de ciudades 
```sh
localhost:3000/api/v1/cities/search?q=London
```
La respuesta es un array con las ciudades encontradas con el match de q y ordenados de mayor a menor puntuación. 

Respuesta

```sh
{
    "search": [
        {
            "name": "Londontowne, US",
            "latitude": "38.93345",
            "longitude": "-76.54941",
            "score": 0.8
        },
        {
            "name": "London, US",
            "latitude": "39.88645",
            "longitude": "-83.44825",
            "score": 0.5
        },
        {
            "name": "New London, US",
            "latitude": "41.35565",
            "longitude": "-72.09952",
            "score": 0.4
        },
        {
            "name": "Londonderry, US",
            "latitude": "42.86509",
            "longitude": "-71.37395",
            "score": 0.4
        },
        {
            "name": "London, US",
            "latitude": "37.12898",
            "longitude": "-84.08326",
            "score": 0.2
        }
    ]
}
```

Endpoint final para una búsqueda más específica con los parámetros de q, latitud y longitud

```sh
localhost:3000/api/v1/cities/search?q=Ma&latitude=45.43338&longitude=-73.16585
```
Respuesta 

```sh
{
    "search": [
        {
            "name": "Marieville, CA",
            "latitude": "45.43338",
            "longitude": "-73.16585",
            "score": 0.3
        }
    ]
}
```

Si no hay resultados de la búsqueda el endpoint regresar un array vacío
```sh
localhost:3000/api/v1/cities/search?q=Mixtla
```
Respuesta 
```sh
{
    "search": []
}
```

Si no se envía el parámetro “q” en la URL recibes un respuesta con un mensaje de error

Respuesta 

```sh
{
    "error": "Falta el parámetro \"q\" para realizar la consulta y no puede ser vacía"
} 

```



