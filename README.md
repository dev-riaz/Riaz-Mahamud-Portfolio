Riaz Mahamud — Personal Portfolio
A modern, responsive personal portfolio showcasing my skills, projects, and journey as an aspiring Full Stack Developer. Built with Next.js, React, Tailwind CSS, and Framer Motion, with a clean dark-navy and light-gray design.
🌐 Live Demo

- Portfolio: https://riaz-mahamud-portfolio.vercel.app/
  ✨ Features
- Responsive design for desktop, tablet, and mobile
- Animated hero and introduction sections
- About section
- Skills and technologies showcase
- Projects showcase
- Contact form powered by EmailJS
- Success and error feedback for contact form submissions
- Smooth animations and interactive hover effects
- Social media links
- Smooth scrolling and Back to Top button
  🛠️ Tech Stack
- Framework: Next.js
- UI Library: React
- Language: JavaScript
- Styling: Tailwind CSS
- Animations: Framer Motion
- Icons: React Icons
- Email Service: EmailJS
- Deployment: Vercel
- Version Control: Git and GitHub
  📁 Project Structure
  my-portfolio/
  ├── public/ # Images and static assets
  ├── src/
  │ ├── app/ # Next.js App Router pages and layouts
  │ └── components/ # Reusable UI components
  ├── .env.local # Local environment variables (do not commit)
  ├── package.json
  └── README.md
  Your actual file and folder names may vary depending on your project structure.
  🚀 Getting Started
  Prerequisites
- Node.js (LTS recommended)
- npm
- Git

1. Clone the repository
   Replace YOUR_REPOSITORY_URL with your actual GitHub repository URL.
   git clone YOUR_REPOSITORY_URL
2. Open the project folder
   cd my-portfolio
3. Install dependencies
   npm install
4. Configure EmailJS
   Create a .env.local file in the project root (the same directory as package.json) and add your EmailJS credentials:
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   Replace the example values with the correct values from your EmailJS dashboard. Make sure your EmailJS template uses the parameter names expected by your contact form.

Security note: Never commit .env.local or private credentials to GitHub. The EmailJS public key is designed for client-side use; do not expose any private key in frontend code.

After changing environment variables, restart the development server. 5. Run the development server
npm run dev
Open http://localhost:3000 in your browser. 6. Build for production
npm run build
npm start
📬 Contact

- Email: riazmahamud113@gmail.com
- GitHub: dev-riaz
- LinkedIn: Riaz Mahamud
- Facebook: Riaz Mahamud
  📄 License
  This project is a personal portfolio. You may explore the source code for learning and inspiration. Please ask permission before reusing my personal branding, photographs, or original assets.
  Designed and developed by Riaz Mahamud.
