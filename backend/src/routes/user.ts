import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";
import {signupInput ,signinInput} from "../../common/src/zod"
export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_TOKEN: string;
  },
  Variables : {
		userId: any
	}
}>();

// interface signup {
//     email: string;
//     name?: string;
//     password: string;
//   }
  userRouter.post("/signup", async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body= await c.req.json();

    const {success}=signupInput.safeParse(body)

    if(!success){
      alert("Inputs are not correct plz check")
      return c.json({
        msg:"Inputs are not correct plz check"
      })
    }
  
    try {
      const newUser = await prisma.user.create({
        data: {
          password: body.password,
          email: body.email,
          name: body.name,
        },
      });
      console.log(newUser);
      const token = await sign({ id: newUser.id }, c.env.JWT_TOKEN);
      return c.json({
        jwt: token,
      });
    } catch (error) {
      c.status(400)
      return c.json({
        msg: "user has already existed", 
        error,
      });
    }
  });
  
  // interface signin {
  //   email: string;
  //   password: string;
  // }
  
  userRouter.post("/signin", async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body= await c.req.json();
    try {
      const {success}=signinInput.safeParse(body)

    if(!success){
      c.status(400)
      return c.json({
        msg:"Inputs are not correct"
      })
    }
    } catch (error) {
      c.status(500)
      return c.json({error})
    }
    
    try {
      const user = await prisma.user.findUnique({
        where: {
          email: body.email,
          password: body.password,
        },
      });
      // console.log(user);
      if(!user){
        c.status(404)
        throw new Error('User not found');
      }
      const token = await sign({ id: user?.id }, c.env.JWT_TOKEN);
      return c.json({
        jwt: token,
      });
    } catch (e) {
      c.status(500)
      return c.json({
        msg:"invailid cridentials",
      })
    }
  });

  userRouter.get('/name',async(c)=>{
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
      const header = c.req.header("Authorization") || "";
  
      const token = header.split(" ")[1];
      // console.log(token);
      const response = (await verify(token, c.env.JWT_TOKEN)) || "";
      if (!response) {
        c.status(403);
        return c.json({ error: "unauthorized" });
      }
  
      // c.set("userId", response.id);
      const author=await prisma.user.findFirst({
        where:{
          id:response.id ||""
        }
      })
      c.status(200);
      return c.json({author})

    
    } catch (error) {
      c.status(403);
      return c.json({
        msg: "Unauthorized",
        error,
      });
    }
  })

  userRouter.get('/profile',async(c)=>{
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
      const header = c.req.header("Authorization") || "";
  
      const token = header.split(" ")[1];
      // console.log(token);
      const response = (await verify(token, c.env.JWT_TOKEN)) || "";
      if (!response) {
        c.status(403);
        return c.json({ error: "unauthorized" });
      }
  
      // c.set("userId", response.id);
      const author=await prisma.user.findFirst({
        where:{
          id:response.id ||""
        }
      })
      const posts=await prisma.post.findMany({
        where:{
          authorId:response.id ||""
        },
        select:{
          id:true,
          title:true
        }
      })
      c.status(200);
      return c.json({author,posts})

    
    } catch (error) {
      c.status(403);
      return c.json({
        msg: "Unauthorized",
        error,
      });
    }
  })