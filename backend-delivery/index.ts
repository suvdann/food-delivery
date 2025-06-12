import express, { request, Request, response, Response } from "express";
import mongoose, { connect, Schema, model } from "mongoose";
import bcrypt, { hash } from "bcrypt";
import cors from "cors";
import jwt from "jsonwebtoken";
const databaseConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://merdenesuwd2021:89866282@cluster0.cbgfjcq.mongodb.net/foodDelivery"
    );
    console.log("Successfully db connencted");
  } catch (err) {
    console.log(err);
  }
};
const Users = new Schema({
  email: { type: String, require: true },
  password: { type: String, require: true },

  createsAt: { type: Date, default: Date.now, immutable: true }, //immutable: true  data ni daraa ni oorchlogdohgui
  updatedAt: { type: Date, default: Date.now },
});
const UserModel = model("Users", Users);

const app = express();
app.use(cors());
app.use(express.json());

databaseConnect();
app.post("/signup", async (request: Request, response: Response) => {
  const { email, password } = request.body;
  const isEmailExisted = await UserModel.findOne({ email });
  console.log(isEmailExisted);

  if (!isEmailExisted) {
    const hashedPAssword = await bcrypt.hashSync(password, 10);
    await UserModel.create({ email, password: hashedPAssword });
    response.send({ message: "Successfully registered" });
    return;
  }

  response.status(400).send({ message: "User already existed" });
});

app.post("/login", async (request: Request, response: Response) => {
 try{ const { email, password } = request.body;
  const isEmailExisted = await UserModel.findOne({ email });
  if (!isEmailExisted) {
    response.status(400).send({ message: "User doesn't existed " });
    return;
  } else {
    const hashedPAssword = await bcrypt.compareSync(
      password,
      isEmailExisted?.password!
    );
    const tokenPassword = "foodDelivery";
    if (hashedPAssword) {
      // , {expiresIn:300000}
      const token = jwt.sign({ userId: isEmailExisted._id }, tokenPassword);
      response.send({ message: "Successfully registered", token: token });
      return;
    } else {
      response.status(401).send({ message: "Wrong password, try again " });
      return;
    }
  }
}catch(err){
  // response.status(401).send({message:""})
  console.log(err)
}
});
app.post("/verify", async (request: Request, response: Response) => {
  const { token } = request.body;

  const tokenPassword = "foodDelivery";
  try {
    const isValid = jwt.verify(token, tokenPassword);
    console.log(token)
    if (isValid) {
      const destructToken = jwt.decode(token);
      //{userId:}
      response.send({ destructToken });
      console.log({ destructToken });
      return;
    } else {
      response.status(401).send({ message: "token is not valid" });
      return;
    }
  } catch (err) {
    response.status(401).send({ message: "token is not valid " });
    return;
  }
});

app.listen(8000, () => {
  console.log("running on http://localhost:8000");
});
