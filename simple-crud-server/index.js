const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 4000;

// middleware
app.use(cors());
app.use(express.json());

// password: gpuqz9GSGKn80GAL
// userName: simpleDBUser
const uri =
  "mongodb+srv://simpleDBUser:gpuqz9GSGKn80GAL@cluster0.phhktud.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.get("/", (req, res) => {
  res.send("simple crud server is running");
});

async function run() {
  try {
    await client.connect();
    const usersDB = client.db("usersDB");
    const usersCollection = usersDB.collection("users");

    app.get("/users", async (req, res) => {
      const cursor = usersCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/users/:id", async (req, res) => {
      const id = req.params.id;
      console.log("need user with id", id);
      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.findOne(query);
      res.send(result);
    });

    //     ass database related apis here
    app.post("/users", async (req, res) => {
      // console.log("hitting the users post api");
      const newUser = req.body;
      console.log("user info", newUser);
      const result = await usersCollection.insertOne(newUser);
      res.send(result);
    });

    app.delete("/users/:id", async (req, res) => {
      console.log(req.params.id);
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.deleteOne(query);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    //   await client.close()
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`simple crud server is running on port : ${port}`);
});

/*
 *1. at least ine user
 *2. set uri with userId and password
 *3. create a mongodb client
 *4. ass a run function to connect to the database
 *5. use try finally inside it ti connect the client
 *6. ping the database to see server is alive or not
 *
 *
 */
