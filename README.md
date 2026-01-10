NOTE: THIS README IS FOR PRACTICE DON"T CONSIDER WHY? IS IT SO

# Recipe Organizer

A Full-stack recipe management app where you can browse, search,add, edit and view detailed recipes.<br>
Build with React frontend, Express/Node backend, MongoDb database adn JWT-based authentication(if)

---

## Demo Link

[Live Demo](https://cartzilla-three.vercel.app/)

---

## Login

> **Guest**</br>
> Username: `guest_user`</br>
> Password: `guest_pass`

---

## Quick Start

```
git clone https://github.com/Sourabhpande532/cartzilla.git
cd <your-repo/foldername>
npm install
npm run dev # or `npm start` / `yarn dev`

```

---

## Technologies

- React Js
- React Router
- Node JS
- Express
- Mongo DB
- JWT / Auth (If Case)
- RESTful API's

---

## Demo Video

Watch a walkthrough (5-7 minutes) of all the major features of this app:

[Google Drive Video]()

---

## Features

**Home**

- Display a list of all recipes
- Search recipes by title
- Paginated recipe list
- Add New REcipe button opens a form

**Recipe Details**

- View full recipe information (ingredients, instruction, images)
- Edit Recipe to update title, ingredients, steps.

**Authentication**

- User Signup and ogin with JWT
- Protected Routes for adding/editing recipes

---

## API Reference

### **GET /api/recipes**

List all recipes <br>

Sample Response:

```
[{_id, title,summary, recipe_img},...]
```

### **GET /api/recipes/:id**

Get Details for one recipe <br>

Sample Response:</br>

```
{_id,title,summar,recipe_img}
```

### **POST /api/recipes**

Create a new recipe <br>

Sample Response: <br>

```
{_id,title,summar,recipe_img}

```

### **PUT /api/auth/signup**

Register a new user <br>

Sample Response: <br>

```
{userId, token}
```

---

### **DELETE /api/auth/delete**

Delete a existing user <br>
Sample Response: <br>

```
{receipeId, success:true, message: "Delete Order successfully"}

```

---

## Contact

For bugs or features request, Please reach out to [email](sourabhpande43@gmail.com)

---

> TASK IS DONE!
