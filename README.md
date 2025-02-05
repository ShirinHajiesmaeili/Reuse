# README Client Project

## Client Project configuration

```bash
   npm create vite@latest
   npm install
   echo '"type":"module",' >> package.json

   ## Utility-first CSS framework (Bootstrap alternative)
   ## https://www.npmjs.com/package/tailwindcss
   ## https://tailwindcss.com/docs/guides/vite
   npm install -D tailwind postcss autoprefixer
   npx tailwindcss init -p

   ## UI component library (Flowbite alternative)
   ## https://www.npmjs.com/package/daisyui/
   ## https://daisyui.com/docs/install
   npm install -D daisyui@latest

   ## Popular icons (Font Awesome alternative)
   ## https://www.npmjs.com/package/react-icons/
   ## https://react-icons.github.io/react-icons/
   npm install react-icons

   ## Animation library
   ## https://www.npmjs.com/package/framer-motion
```

## Server Project configuration

```bash
   npm init -y
   npm install
   npm install express cors cookie-parser bcrypt mongoose
   npm install dotenv nodeamon

   npm install jsonwebtoken
```

[JSON Web Tokens - an open, industry standard based on RFC 7519](https://jwt.io)
