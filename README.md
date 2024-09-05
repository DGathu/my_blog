# 📝 Simple Blog App with Next.js, Prisma, and React Query

Welcome to my Simple Blog App! This project demonstrates how to build a basic blog application using Next.js, Prisma as an ORM to interact with a PostgreSQL database, and Tanstack's React Query for performing CRUD operations. Additionally, I've integrated React Hook Form to create user-friendly post forms.

## 🚀 Features

- **Create, Read, Update, Delete (CRUD)** posts.
- **User-friendly forms** for creating and editing posts using React Hook Form.
- **Efficient data fetching** and caching with Tanstack's React Query.
- **Database interaction** using Prisma with PostgreSQL.
- **Responsive design** for a seamless experience across devices.

## 🛠️ Technologies Used

- **Next.js**: A React framework for building server-rendered applications.
- **Prisma**: An ORM for Node.js and TypeScript that simplifies database interactions.
- **PostgreSQL**: A powerful, open-source relational database.
- **Tanstack React Query**: A library for managing server state and caching.
- **React Hook Form**: A library for building performant and flexible forms.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

## 🔧 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yDGathu/my_blog.git
   cd my_blog
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up your environment variables**:
   Create a `.env` file in the root directory and add the following:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/blogdb"
   ```

4. **Set up the database**:
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Run the development server**:
   ```bash
   npm run dev
   ```

6. **Open your browser**:
   Visit `http://localhost:3000` to see the app in action.

## 📝 Usage

### Creating a New Post

1. Navigate to the "New Post" page.
2. Fill out the form with the post title and content.
3. Click "Submit" to create the post.

### Viewing Posts

- The homepage displays a list of all posts.
- Click on a post to view its details.

### Editing a Post

1. Navigate to the post you want to edit.
2. Click the "Edit" button.
3. Update the form and click "Submit" to save changes.

### Deleting a Post

1. Navigate to the post you want to delete.
2. Click the "Delete" button.
3. Confirm the deletion.

## 📊 Database Schema

The database schema is defined in the `prisma/schema.prisma` file. The main model is the `Post` model:

```prisma
model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 📚 API Routes

The API routes are defined in the `pages/api/posts` directory:

- `GET /api/posts`: Fetch all posts.
- `GET /api/posts/[id]`: Fetch a single post by ID.
- `POST /api/posts`: Create a new post.
- `PATCH /api/posts/[id]`: Update a post by ID.
- `DELETE /api/posts/[id]`: Delete a post by ID.
