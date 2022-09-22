# 44-graphQL

### dependencias

```
>npm i graphql express-graphql @graphql-tools/schema --save
```

### Flujo

schema
🔽
resolver
🔽
controllers
🔽
services
🔽
productDao + model product

### Interfaz gráfica

> http://localhost:8080/graphql

```
query {
	getAllProducts {
	  _id
	  nombre
	  descripcion
    codigo
	  thumbnail
	  precio
	  stock
	}
}
```

```
mutation{
  addProduct(input:{
        nombre: "Iphone X 2",
        descripcion: "Pantalla de 6.5 pulgadas",
        codigo: "24567",
        thumbnail: "https://user-images.githubusercontent.com/63796774/175106135-03263dff-9b33-4b1c-9835-4e23c2e47ccf.jpeg",
        precio: 145000,
        stock: 23
  }){
    _id
    nombre
  }
}
```

```
mutation {
	deleteProduct(id:"63279be60d1d80898bce6398"){
    _id
    nombre
  }
}
```

```

mutation{
  updateProduct( id: "63279bdf0d1d80898bce6396", input:{
        nombre: "Iphone X upd",
        descripcion: "Pantalla de 6.5 pulgadas",
        codigo: "24567",
        thumbnail: "https://user-images.githubusercontent.com/63796774/175106135-03263dff-9b33-4b1c-9835-4e23c2e47ccf.jpeg",
        precio: 145000,
        stock: 23
  }){
    _id
    nombre
  }
}
```

### Crear .env y completar variables:

- MONGO_USER
- MONGO_PASS
- DB_NAME
