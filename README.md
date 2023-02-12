# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


**package.json**

  "devDependencies": {
    <!-- "@nuxt/postcss8": "^1.1.3", -->
    <!-- "@nuxtjs/tailwindcss": "^6.1.3", -->
    <!-- "autoprefixer": "^10.4.13", -->
    "nuxt": "3.0.0",
    <!-- "postcss": "^8.4.19", -->
    <!-- "tailwindcss": "^3.2.4" -->
    }
   *Подключена ссылка cdn на tailwind в /layouts*



.project-box {
 position: relative;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
}
.project-card {
 overflow: hidden;
 cursor: pointer;
}
.project-card img {
 width: 100%;
 transition: .5s;
}
.project-box:hover .project-card img {
 /* transform: rotate(-10deg) scale(1.3); */
 filter: blur(1px);
 opacity: .5;
}
.blocText {
 position: absolute;
 top: 30px;
 left: 30px;
 right: 30px;
 bottom: 30px;
}
.project-text {
 text-transform: uppercase;
 padding: 0 20px;
 opacity: 0;
 transition: .5s;
}
.project-text h2 {
 font-size: 25px;
}
.project-text h2 span {
 color: orange;
 padding-bottom: 3px;
}
.project-text p {
 position: absolute;
 top: 180px;
 width: 250px;
}
.project-box:hover .project-text {
 opacity: 1;
}
.blocText::before,
.blocText::after {
 content: '';
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 transition: .5s;
}
