import React from 'react';
import './Skills.css';

const skillsData = [
    {
      category: "Frontend Technologies",
      skills: [
        { name: "HTML", logo: "https://cdn.worldvectorlogo.com/logos/html5.svg" },
        { name: "CSS", logo: "https://cdn.worldvectorlogo.com/logos/css3.svg" },
        { name: "JavaScript", logo: "https://cdn.worldvectorlogo.com/logos/javascript.svg" },
        { name: "TailwindCSS", logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
        { name: "DaisyUI", logo: "https://daisyui.com/images/logo/daisyui-logo.svg" },
        { name: "ReactJS", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
        { name: "React Router DOM", logo: "https://cdn.worldvectorlogo.com/logos/react-router.svg" },
        { name: "Axios", logo: "https://avatars.githubusercontent.com/u/32372333?s=200&v=4" },
        { name: "Styled-Components", logo: "https://styled-components.com/logo.png" },
        { name: "Material-UI (MUI)", logo: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg" },
        { name: "Ant Design", logo: "https://cdn.worldvectorlogo.com/logos/ant-design.svg" },
        { name: "SASS/SCSS", logo: "https://cdn.worldvectorlogo.com/logos/sass-1.svg" },
        { name: "Redux", logo: "https://cdn.worldvectorlogo.com/logos/redux.svg" },
        { name: "Redux Toolkit", logo: "https://redux-toolkit.js.org/img/redux-logo-landscape.png" }
      ]
    },
    {
      category: "Backend Technologies",
      skills: [
        { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
        { name: "Express.js", logo: "https://cdn.worldvectorlogo.com/logos/express-109.svg" },
        { name: "CORS", logo: "https://avatars.githubusercontent.com/u/40952965?s=200&v=4" },
        { name: "Nodemon", logo: "https://avatars.githubusercontent.com/u/3495307?s=200&v=4" },
        { name: "Bcrypt.js", logo: "https://raw.githubusercontent.com/dcodeIO/bcrypt.js/master/bcrypt.png" },
        { name: "Passport.js", logo: "https://cdn.worldvectorlogo.com/logos/passport.svg" },
        { name: "Socket.io", logo: "https://cdn.worldvectorlogo.com/logos/socket-io.svg" },
        { name: "Multer", logo: "https://avatars.githubusercontent.com/u/25306512?s=200&v=4" },
        { name: "Express Validator", logo: "https://avatars.githubusercontent.com/u/27005054?s=200&v=4" },
        { name: "Rate Limiting", logo: "https://rate-limiter-flexible.readthedocs.io/en/master/_images/logo.svg" }
      ]
    },
    {
      category: "Security",
      skills: [
        { name: "JWT", logo: "https://cdn.worldvectorlogo.com/logos/jwt-3.svg" },
        { name: "Helmet.js", logo: "https://avatars.githubusercontent.com/u/14580462?s=200&v=4" },
        { name: "OAuth", logo: "https://cdn.worldvectorlogo.com/logos/oauth-2.svg" },
        { name: "CSRF Protection", logo: "https://avatars.githubusercontent.com/u/3591786?s=200&v=4" },
        { name: "Env Variables", logo: "https://cdn.worldvectorlogo.com/logos/envoy.svg" }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "MongoDB", logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
        { name: "Mongoose", logo: "https://cdn.worldvectorlogo.com/logos/mongoose-1.svg" },
        { name: "MongoDB Atlas", logo: "https://cdn.worldvectorlogo.com/logos/mongodb.svg" },
        { name: "Robo 3T", logo: "https://cdn.worldvectorlogo.com/logos/robo-3t.svg" },
        { name: "Aggregation Pipelines", logo: "https://www.mongodb.com/assets/images/global/favicon.ico" },
        { name: "GridFS", logo: "https://cdn.worldvectorlogo.com/logos/mongodb.svg" }
      ]
    },
    {
      category: "Deployment & Hosting",
      skills: [
        { name: "Firebase", logo: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" },
        { name: "Vercel", logo: "https://cdn.worldvectorlogo.com/logos/vercel.svg" },
        { name: "Netlify", logo: "https://cdn.worldvectorlogo.com/logos/netlify.svg" },
        { name: "Heroku", logo: "https://cdn.worldvectorlogo.com/logos/heroku-4.svg" },
        { name: "DigitalOcean", logo: "https://cdn.worldvectorlogo.com/logos/digitalocean-2.svg" },
        { name: "AWS", logo: "https://cdn.worldvectorlogo.com/logos/aws.svg" },
        { name: "NGINX", logo: "https://cdn.worldvectorlogo.com/logos/nginx-1.svg" }
      ]
    },
    {
      category: "Package Management & Tools",
      skills: [
        { name: "NPM", logo: "https://cdn.worldvectorlogo.com/logos/npm-2.svg" },
        { name: "Yarn", logo: "https://cdn.worldvectorlogo.com/logos/yarn.svg" },
        { name: "Webpack", logo: "https://cdn.worldvectorlogo.com/logos/webpack.svg" },
        { name: "Babel", logo: "https://cdn.worldvectorlogo.com/logos/babel-10.svg" },
        { name: "ESLint", logo: "https://cdn.worldvectorlogo.com/logos/eslint.svg" },
        { name: "Prettier", logo: "https://cdn.worldvectorlogo.com/logos/prettier-2.svg" },
        { name: "Parcel", logo: "https://parceljs.org/favicon.ico" }
      ]
    },
    {
      category: "Testing & Debugging",
      skills: [
        { name: "Jest", logo: "https://cdn.worldvectorlogo.com/logos/jest.svg" },
        { name: "Mocha", logo: "https://cdn.worldvectorlogo.com/logos/mocha.svg" },
        { name: "Chai", logo: "https://cdn.worldvectorlogo.com/logos/chai.svg" },
        { name: "Supertest", logo: "https://avatars.githubusercontent.com/u/319678?s=200&v=4" },
        { name: "Postman", logo: "https://cdn.worldvectorlogo.com/logos/postman.svg" },
        { name: "Mongoose Testing Libraries", logo: "https://cdn.worldvectorlogo.com/logos/mongoose.svg" }
      ]
    },
    {
      category: "Version Control & Collaboration",
      skills: [
        { name: "Git", logo: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
        { name: "GitHub", logo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" },
        { name: "Bitbucket", logo: "https://cdn.worldvectorlogo.com/logos/bitbucket.svg" },
        { name: "GitLab", logo: "https://cdn.worldvectorlogo.com/logos/gitlab.svg" },
        { name: "CI/CD Tools", logo: "https://cdn.worldvectorlogo.com/logos/circleci.svg" }
      ]
    },
    {
      category: "DevOps & Monitoring",
      skills: [
        { name: "Docker", logo: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
        { name: "Kubernetes", logo: "https://cdn.worldvectorlogo.com/logos/kubernetes.svg" },
        { name: "PM2", logo: "https://pm2.io/static/logo-3a59bebe1b3f207f420ccfaefbc03a7b.png" },
        { name: "NGINX", logo: "https://cdn.worldvectorlogo.com/logos/nginx-1.svg" },
        { name: "New Relic", logo: "https://cdn.worldvectorlogo.com/logos/new-relic.svg" },
        { name: "LogRocket", logo: "https://cdn.worldvectorlogo.com/logos/logrocket.svg" },
        { name: "Sentry", logo: "https://cdn.worldvectorlogo.com/logos/sentry-3.svg" }
      ]
    },
    {
      category: "Build & Project Management",
      skills: [
        { name: "Create React App", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
        { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/nextjs-3.svg" },
        { name: "CRA", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
        { name: "TypeScript", logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
        { name: "Storybook", logo: "https://cdn.worldvectorlogo.com/logos/storybook-icon.svg" },
        { name: "JIRA", logo: "https://cdn.worldvectorlogo.com/logos/jira-1.svg" }
      ]
    },
    {
      category: "Cloud Services & APIs",
      skills: [
        { name: "AWS S3", logo: "https://cdn.worldvectorlogo.com/logos/aws-s3.svg" },
        { name: "GCP", logo: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg" },
        { name: "Twilio", logo: "https://cdn.worldvectorlogo.com/logos/twilio-icon.svg" },
        { name: "Stripe", logo: "https://cdn.worldvectorlogo.com/logos/stripe.svg" },
        { name: "SendGrid", logo: "https://cdn.worldvectorlogo.com/logos/sendgrid.svg" },
        { name: "Cloudinary", logo: "https://cdn.worldvectorlogo.com/logos/cloudinary-icon.svg" }
      ]
    },
    {
      category: "Authentication & Authorization",
      skills: [
        { name: "Firebase Authentication", logo: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" },
        { name: "Auth0", logo: "https://cdn.worldvectorlogo.com/logos/auth0.svg" },
        { name: "Session-based Auth", logo: "https://cdn.worldvectorlogo.com/logos/session.svg" },
        { name: "OAuth 2.0", logo: "https://cdn.worldvectorlogo.com/logos/oauth-2.svg" }
      ]
    }
  ];
  
  

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
    <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">My Skills</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skillsData.map((category, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">{category.category}</h2>
          <div className="grid grid-cols-2 gap-4">
            {category.skills.map((skill, i) => (
              <div key={i} className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <button className="skill-btn">{skill.name}</button>
                  </div>
                  <div className="flip-card-back">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default SkillsPage;
