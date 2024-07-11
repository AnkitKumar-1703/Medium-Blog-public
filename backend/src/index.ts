import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";
import { userRouter } from "./routes/user";
import { postRouter } from "./routes/blog";
import { cors } from 'hono/cors'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_TOKEN: string;
  },
  Variables : {
		userId: any
	}
}>();
app.use('/api/*', cors())
app.route('/api/v1/user',userRouter)
app.route('/api/v1/post',postRouter)









// app.post("/api/v1/blog", (c) => {
//   return c.text("Hello Hono! ankit");
// });

// app.put("/api/v1/blog", (c) => {
//   return c.text("asd");
// });

// app.get("/api/v1/blog/:id", (c) => {
//   const id = c.req.param("id");
//   console.log(id);

//   return c.text("Hello Hono! ankit");
// });

// app.get("/api/v1/blog/bulk", (c) => {
//   return c.text("Hello Hono! ankit");
// });

export default app;
