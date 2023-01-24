const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyBT5JkL640BVj_CEXNVTf2i4KhCKDUqkYM",
  authDomain: "proyectx-87d79.firebaseapp.com",
  projectId: "proyectx-87d79",
});

const db = firebase.firestore();

app.get("/api/products", (req, res) => {
  // Aquí es donde deberías obtener la lista de productos desde Firestore
  db.collection("products")
    .get()
    .then((querySnapshot) => {
      let products = [];
      querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, data: doc.data() });
      });
      return res.status(200).send(products);
    })
    .catch((error) => {
      return res.status(500).send(error);
    });
});
