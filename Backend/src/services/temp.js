// Resume Data
// ✅ Convert the object to a readable string for the AI
const resumeText = `
Name: Tarun Rajput
Location: Gwalior, Madhya Pradesh, India
Contact: rajputtarun698@gmail.com | +91 8871747013

Professional Summary:
Full Stack Developer experienced in building scalable web applications using React.js, Node.js, Express.js, and MongoDB. Skilled in REST API development, JWT authentication, and responsive UI design using Tailwind CSS and Material UI.

Skills:
- Languages: JavaScript (ES6+), TypeScript, C++, HTML5, CSS3
- Frontend: React.js, Redux Toolkit, Context API, React Router, Tailwind CSS, Material UI
- Backend: Node.js, Express.js, MongoDB, Mongoose, REST API Design, JWT Authentication
- Tools: AWS (EC2, S3), Cloudinary, Git, GitHub, Postman, Vercel, Render

Experience:
1. SNS System Software Developer | Full Stack Developer | Sep 2025 – Present
   - Developed React.js frontend for OpenEMR using Redux Toolkit and Axios
   - Built dashboards supporting 500+ concurrent users
   - Implemented role-based access control
   - Optimized performance using lazy loading and code splitting

2. Aether AI | Full Stack Developer Intern | Apr 2025 – Aug 2025
   - Built analytics dashboards and client portals using React.js
   - Implemented JWT-based authentication and route protection
   - Optimized API performance with debouncing and caching

Projects:
1. StudyNotion – E-Learning Platform (React.js, Redux Toolkit, Tailwind CSS, Cloudinary, Razorpay)
2. Employee Task Management (React.js, Keycloak, Context API)
3. Paste Application (React.js, Local Storage)

Education:
B.Tech in Computer Science and Engineering | Medi-Caps University | 2021–2025 | GPA: 7.36/10

Certifications:
- MERN Stack Developer Certification
- Git and GitHub Certification
- React.js Certification
`;



// Self Description (for interviews / AI analysis)
const selfDescription = `
I am Tarun Rajput, a Full Stack Developer specializing in the MERN stack.
I have experience building scalable web applications using React.js, Node.js,
Express.js, and MongoDB. I enjoy designing clean user interfaces and building
efficient backend APIs.

During my professional experience and internships, I worked on real-world
projects including healthcare dashboards, analytics platforms, and e-learning
systems. I focus on writing maintainable code, optimizing performance, and
building secure applications with authentication and role-based access control.

I am passionate about learning new technologies, improving system performance,
and solving complex problems in modern web development.
`;



// Job Description (example MERN / Full Stack Developer role)
const jobDescription = `
We are looking for a Full Stack Developer with strong experience in the MERN stack
(MongoDB, Express.js, React.js, Node.js). The candidate will be responsible for
developing scalable web applications, designing RESTful APIs, and implementing
modern user interfaces.

Responsibilities:
- Build responsive frontend applications using React.js.
- Develop backend APIs using Node.js and Express.js.
- Design and manage MongoDB databases.
- Implement authentication and authorization using JWT.
- Optimize application performance and scalability.
- Collaborate with cross-functional teams to deliver high-quality software.

Required Skills:
- Strong JavaScript and React.js knowledge
- Experience with Node.js and Express.js
- MongoDB and database design
- REST API development
- Git and version control
- Understanding of cloud deployment and CI/CD

Preferred:
- Experience with AWS or cloud platforms
- Knowledge of Redux or global state management
- Familiarity with modern UI frameworks like Tailwind CSS or Material UI
`;


module.exports={
    resumeText,
    selfDescription,
    jobDescription
}