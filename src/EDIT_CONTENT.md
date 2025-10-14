# How to Edit Your Portfolio Content

All portfolio content is now hardcoded in the component files for easy editing. Simply open the file and modify the data arrays at the top of each file.

## 📝 Where to Edit

### 1. Projects (`/components/Projects.tsx`)
Look for the `projects` array at the top of the file:

```typescript
const projects = [
  {
    title: "Your Project Title",
    description: "Project description...",
    image: "https://image-url.com/image.jpg",
    technologies: ["React", "Node.js", "etc"],
    github: "https://github.com/yourusername/repo",
    demo: "https://your-demo-link.com",
  },
  // Add more projects...
];
```

### 2. Experience (`/components/Experience.tsx`)
Look for the `experiences` array:

```typescript
const experiences = [
  {
    title: "Your Job Title",
    company: "Company Name",
    period: "2022 - Present",
    description: "What you did in this role...",
    technologies: ["Tech", "Stack", "Used"],
  },
  // Add more experience...
];
```

### 3. Education (`/components/Education.tsx`)
Look for the `education` array:

```typescript
const education = [
  {
    degree: "Your Degree",
    institution: "University/School Name",
    location: "City, Country",
    period: "2018 - 2022",
    grade: "CGPA: X.X/10 or Percentage: XX%",
    description: "What you studied...",
    achievements: [
      "Achievement 1",
      "Achievement 2",
    ],
  },
  // Add more education...
];
```

### 4. Certifications (`/components/Certifications.tsx`)
Look for the `certifications` array:

```typescript
const certifications = [
  {
    title: "Certification Name",
    issuer: "Issuing Organization",
    date: "2024",
    credentialId: "YOUR-ID-123",
    skills: ["Skill 1", "Skill 2", "Skill 3"],
  },
  // Add more certifications...
];
```

### 5. Personal Information (`/components/About.tsx`)
Update your personal details in multiple places:

- **Name:** Line ~93 - Change "Pateel Pavan"
- **Job Title:** Line ~101 - Change "Full Stack Developer"
- **Description:** Line ~113 - Change the bio text
- **Social Links:** Lines ~6-10 - Update GitHub, LinkedIn, Email URLs
- **Skills:** Lines ~12-30 - Modify skill categories and technologies

### 6. Contact Information (`/components/Contact.tsx`)
Update contact details in the `contactInfo` array (~line 23):

```typescript
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
  },
  // Phone and Location...
];
```

### 7. Resume (`/public/resume.pdf`)
Replace the PDF file with your actual resume:
1. Name your resume file `resume.pdf`
2. Place it in the `/public` folder
3. It will be automatically downloadable from the About page

## 🎨 Adding/Removing Items

### Add a New Item
Simply add a new object to the array:

```typescript
const projects = [
  // Existing projects...
  {
    title: "New Project",
    description: "Description...",
    // ... rest of fields
  },
];
```

### Remove an Item
Delete the entire object from the array.

### Reorder Items
Cut and paste objects within the array to change their display order.

## 💾 Contact Form (Database)

The contact form **does save to database**. When visitors submit the form:
- Their name, email, and message are saved to Supabase
- You can view submissions via the Supabase dashboard
- Access the kv_store_d360d7d2 table
- Look for keys starting with `contact:`

## 🚀 After Making Changes

1. Save the file
2. The preview will auto-reload with your changes
3. Push to GitHub to deploy changes to Netlify
4. Netlify will automatically rebuild and deploy

## 📦 Deployment

Your portfolio is ready to deploy to Netlify:
1. Push code to GitHub
2. Connect repository to Netlify
3. Netlify will auto-deploy on every push
4. See `DEPLOYMENT.md` for detailed instructions

## 🎯 Quick Reference

| Content Type | File Location | What to Edit |
|-------------|---------------|--------------|
| Projects | `/components/Projects.tsx` | `projects` array (line ~7) |
| Experience | `/components/Experience.tsx` | `experiences` array (line ~7) |
| Education | `/components/Education.tsx` | `education` array (line ~7) |
| Certifications | `/components/Certifications.tsx` | `certifications` array (line ~7) |
| About/Personal | `/components/About.tsx` | Multiple sections |
| Contact Info | `/components/Contact.tsx` | `contactInfo` array (line ~23) |
| Footer | `/components/Footer.tsx` | Name (line ~17) |
| Resume | `/public/resume.pdf` | Replace the PDF file |

## 💡 Tips

- Always keep the same structure when editing
- Images should be URLs (use Unsplash or your own hosting)
- Technologies/skills are arrays of strings
- Test locally before deploying
- Keep descriptions concise and impactful

## ❓ Need Help?

- Check the component files for examples
- All fields are clearly labeled
- Follow the existing format
- Contact: pateelpavan64@gmail.com
