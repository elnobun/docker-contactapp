# docker-contactapp
A Simple Nodejs contact list application with mongo database, dockerfile and docker-compose

## Description
The application is a simple API for user contact list.
Application image is already uploaded to dockerhub. 
The docker-compose.yaml file will pull the app image and the mongodb image, and run both simultenously. 
This mean there is no need for special configuration on your local machine.

### Endpoints

**GET**
```
/api/users
```

**POST**
```
/api/users/create
```

**PATCH**
```
/api/user/:id
```

**DELETE**
```
/api/user/:id
```


### Requirements:
- **postman**: to run the endpoints

### Run App
In your terminal simple run

```
docker-compose up
```

### Stop running instance

```
ctl+c
```

### Destroy running instance

```
docker-compose down
```
