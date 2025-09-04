# Instafy

A next-generation social media app engineered with state-of-the-art technologies—designed for effortless connections, engaging content sharing, and smooth user experiences.

## Features
- **User Authentication**  
  Secure signup/login
- **Post Management**  
  Create, like, save, edit, delete posts
- **Responsive Design**  
  Mobile-first approach with adaptive layouts
- **Explore Feed**  
  Discover trending content with infinite scroll
- **Profile Customization**  
  Update profile details and avatar photo


## Tech Stack
**Frontend:**  
- React
- TypeScript  
- Vite 
- Tailwind CSS 
- Shadcn/ui  
- Tanstack query formerly known as React Query (they added other frameworks)
- React Router
- zod (TypeScript-first schema validation library)
- react-dropzone (for file uploading via drag and drop)
- react-intersection-observer (useInView hook for indicating whether the element is currently in view)

**Backend:**  
Appwrite BaaS (Database, Storage, Auth)  

### Configuration
Update Appwrite config in `.env`:
```ini
VITE_APPWRITE_URL
VITE_APPWRITE_PROJECT_ID
VITE_APPWRITE_DATABASE_ID
VITE_APPWRITE_STORAGE_ID 
VITE_APPWRITE_USERS_COLLECTION_ID
VITE_APPWRITE_POSTS_COLLECTION_ID
VITE_APPWRITE_SAVES_COLLECTION_ID
```

## Project Structure
```
social-media/
├── public/          # Static assets
├── src/
│   ├── _auth/       # Authentication flows
│   ├── _root/       # Main app layout and routes
│   ├── components/  # Reusable UI components
│   ├── lib/         # Appwrite API config
│   └── types/       # TypeScript definitions
```

## Acknowledgements
- [Google ai studio](https://ai.google.dev/gemini-api/docs/ai-studio-quickstart) for creating the logo and login/signup side image
- [Appwrite docs](https://appwrite.io/docs/tutorials/react/step-1) for backend and db

## Deployment
- [Vercel](https://instafy-eta.vercel.app/)
