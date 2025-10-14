import { Hono } from 'npm:hono@4';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';
import * as kv from './kv_store.tsx';

const app = new Hono();

app.use('*', cors());
app.use('*', logger(console.log));

// Health check
app.get('/make-server-d360d7d2/hello', (c) => {
  return c.json({ message: 'Portfolio API Server Running' });
});

// Get all projects
app.get('/make-server-d360d7d2/projects', async (c) => {
  try {
    const projects = await kv.getByPrefix('project:');
    return c.json({ success: true, data: projects });
  } catch (error) {
    console.log('Error fetching projects:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Get all experience
app.get('/make-server-d360d7d2/experience', async (c) => {
  try {
    const experience = await kv.getByPrefix('experience:');
    return c.json({ success: true, data: experience });
  } catch (error) {
    console.log('Error fetching experience:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Get all education
app.get('/make-server-d360d7d2/education', async (c) => {
  try {
    const education = await kv.getByPrefix('education:');
    return c.json({ success: true, data: education });
  } catch (error) {
    console.log('Error fetching education:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Get all certifications
app.get('/make-server-d360d7d2/certifications', async (c) => {
  try {
    const certifications = await kv.getByPrefix('certification:');
    return c.json({ success: true, data: certifications });
  } catch (error) {
    console.log('Error fetching certifications:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Submit contact form
app.post('/make-server-d360d7d2/contact', async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return c.json({ success: false, error: 'All fields are required' }, 400);
    }

    const timestamp = new Date().toISOString();
    const contactId = `contact:${Date.now()}`;
    
    await kv.set(contactId, {
      name,
      email,
      message,
      timestamp,
      read: false,
    });

    console.log('Contact form submission saved:', contactId);
    return c.json({ success: true, message: 'Contact form submitted successfully' });
  } catch (error) {
    console.log('Error submitting contact form:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Get all contact submissions
app.get('/make-server-d360d7d2/contacts', async (c) => {
  try {
    const contacts = await kv.getByPrefix('contact:');
    return c.json({ success: true, data: contacts });
  } catch (error) {
    console.log('Error fetching contacts:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Initialize database with seed data
app.post('/make-server-d360d7d2/seed', async (c) => {
  try {
    // Seed Projects
    await kv.set('project:1', {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/pateelpavan',
      demo: '#',
      order: 1,
    });

    await kv.set('project:2', {
      title: 'AI Task Manager',
      description: 'Intelligent task management app with AI-powered prioritization and smart scheduling features.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800',
      technologies: ['Next.js', 'Python', 'TensorFlow', 'PostgreSQL'],
      github: 'https://github.com/pateelpavan',
      demo: '#',
      order: 2,
    });

    await kv.set('project:3', {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for tracking social media metrics across multiple platforms with beautiful visualizations.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      technologies: ['Vue.js', 'D3.js', 'Express', 'Redis'],
      github: 'https://github.com/pateelpavan',
      demo: '#',
      order: 3,
    });

    await kv.set('project:4', {
      title: 'Real-time Chat Application',
      description: 'Secure messaging platform with end-to-end encryption, group chats, and file sharing capabilities.',
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800',
      technologies: ['React', 'Socket.io', 'Node.js', 'AWS'],
      github: 'https://github.com/pateelpavan',
      demo: '#',
      order: 4,
    });

    // Seed Experience
    await kv.set('experience:1', {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company Inc.',
      period: '2022 - Present',
      description: 'Lead developer for multiple high-impact projects. Architected scalable solutions and mentored junior developers.',
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS'],
      order: 1,
    });

    await kv.set('experience:2', {
      title: 'Full Stack Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description: 'Developed and maintained web applications for various clients. Collaborated with designers and product teams.',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
      order: 2,
    });

    await kv.set('experience:3', {
      title: 'Frontend Developer',
      company: 'Startup Co.',
      period: '2018 - 2020',
      description: 'Built responsive user interfaces and improved website performance. Implemented modern design systems.',
      technologies: ['React', 'JavaScript', 'CSS', 'REST APIs'],
      order: 3,
    });

    // Seed Education
    await kv.set('education:1', {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'JNTUH College of Engineering',
      location: 'Hyderabad, Telangana',
      period: '2018 - 2022',
      grade: 'CGPA: 8.5/10',
      description: 'Specialized in Software Engineering and Web Development. Completed major projects in full-stack development.',
      achievements: [
        "Dean's List for Academic Excellence",
        'Best Project Award for Final Year Project',
        'Active member of Tech Club',
      ],
      order: 1,
    });

    await kv.set('education:2', {
      degree: 'Higher Secondary Education',
      institution: 'Sri Chaitanya Junior College',
      location: 'Hyderabad, Telangana',
      period: '2016 - 2018',
      grade: 'Percentage: 92%',
      description: 'Focused on Mathematics, Physics, and Computer Science.',
      achievements: [
        'School Topper in Computer Science',
        'Participated in State Level Science Fair',
      ],
      order: 2,
    });

    // Seed Certifications
    await kv.set('certification:1', {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2024',
      credentialId: 'ABC123XYZ',
      skills: ['Cloud Architecture', 'AWS Services', 'Security', 'Scalability'],
      order: 1,
    });

    await kv.set('certification:2', {
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2023',
      credentialId: 'GCP456DEF',
      skills: ['GCP', 'Kubernetes', 'CI/CD', 'Microservices'],
      order: 2,
    });

    await kv.set('certification:3', {
      title: 'Meta Front-End Developer',
      issuer: 'Meta',
      date: '2023',
      credentialId: 'META789GHI',
      skills: ['React', 'JavaScript', 'UI/UX', 'Responsive Design'],
      order: 3,
    });

    await kv.set('certification:4', {
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: '2022',
      credentialId: 'MDB012JKL',
      skills: ['NoSQL', 'Database Design', 'Aggregation', 'Performance'],
      order: 4,
    });

    await kv.set('certification:5', {
      title: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      date: '2022',
      credentialId: 'DCK345MNO',
      skills: ['Containerization', 'Docker', 'DevOps', 'Orchestration'],
      order: 5,
    });

    await kv.set('certification:6', {
      title: 'Certified Scrum Master',
      issuer: 'Scrum Alliance',
      date: '2021',
      credentialId: 'CSM678PQR',
      skills: ['Agile', 'Scrum', 'Team Leadership', 'Project Management'],
      order: 6,
    });

    return c.json({ success: true, message: 'Database seeded successfully' });
  } catch (error) {
    console.log('Error seeding database:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

Deno.serve(app.fetch);
