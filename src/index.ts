import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors';


type Post = {
  id: string;
  title: string;
};

const posts: Post[] = [
  { id: "1", title: "Getting Started with TypeScript" },
  { id: "2", title: "Building a Blog with Next.js and MDX" },
  { id: "3", title: "Understanding React Server Components" },
  { id: "4", title: "Styling in Tailwind CSS: A Beginner’s Guide" },
  { id: "5", title: "Top 10 VS Code Extensions for Web Devs" },
];

const allRoutes = new Hono()
allRoutes.use(cors({ origin: 'http://localhost:3000' }))


allRoutes.get('/posts', (c) => {
 return c.json(posts, 200)
});

serve(allRoutes, ({ port }) =>{
  console.log(`\t Running @ http://localhost:${port}`)
})