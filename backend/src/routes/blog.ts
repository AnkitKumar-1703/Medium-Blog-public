import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import {createPostInput,updatePostInput} from "../../common/src/zod"
export const postRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_TOKEN: string;
  };
  Variables: {
    userId: any;
  };
}>();

postRouter.use("/*", async (c, next) => {
  // get the haeders
  // verify the Headers
  // if the header is correct ,we need can proceed
  // if Notification,we return the user a 403 status code
  // console.log("inside middleware");
  try {
    const header = c.req.header("Authorization") || "";

    const token = header.split(" ")[1];
    // console.log(token);
    const response = (await verify(token, c.env.JWT_TOKEN)) || "";
    if (!response) {
      c.status(403);
      return c.json({ error: "unauthorized" });
    }

    c.set("userId", response.id);
    await next();
  } catch (error) {
    c.status(403);
    return c.json({
      msg: "Unauthorized",
      error,
    });
  }
});

postRouter.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const body = await c.req.json();
    const {success}=createPostInput.safeParse(body)

    if(!success){
      return c.json({
        msg:"Inputs are not correct"
      })
    }
    const post = await prisma.post.create({
      data: {
        content: body.content,
        title: body.title,
        authorId: c.get("userId"),
      
        //   author:c.get("userId")
      },
    });
    return c.json({
      id: post.id,
    });
  } catch (error) {
    return c.json({ error });
  }
});

postRouter.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const body = await c.req.json();
    const {success}=updatePostInput.safeParse(body)

    if(!success){
      return c.json({
        msg:"Inputs are not correct"
      })
    }
    const post = await prisma.post.update({
      where: {
        id: body.id,
      },
      data: {
        content: body.content,
        title: body.title,
      },
    });
    return c.json({
      id: post.id,
    });
  } catch (error) {
    return c.json({ error });
  }
});

postRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const posts = await prisma.post.findMany({
    select:{
      id:true,
      content:true,
      title:true,
      author:{
        select:{
          name:true
        }
      }
    }
  });
  return c.json({ msg: "All the posts", posts });
});

postRouter.get("/search/:key", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const keyword = c.req.param("key");
    const posts = await prisma.post.findMany({
      where: {
        title: {
          contains: keyword,
          mode: 'insensitive', // This makes the search case-insensitive
        },
      },
      include: {
        author: true, // Include the author information
      },
    });
    c.status(200)
    return c.json({posts});
  } catch (error) {
    console.error(error);
    return c.json({ error: 'Internal Server Error' }, 500);
  } finally {
    await prisma.$disconnect();
  }
});

postRouter.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const post_id = c.req.param("id");
    const post = await prisma.post.findFirst({
      where: {
        id: post_id,
      },
      select:{
        title:true,
        content:true,
        published:true,
        author:{
          select:{
            name:true
          }
        }
      }
    });
    return c.json({
      msg: "Post is",
      post,
    });
  } catch (error) {
    c.status(404);
    return c.json({
      msg: "Error while fetching post post",
      error,
    });
  }
});


