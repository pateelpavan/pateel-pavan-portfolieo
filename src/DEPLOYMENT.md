# Deployment Guide

## Deploying to Netlify

### Step 1: Prepare Your Repository

1. Initialize git repository (if not already done):
```bash
git init
git add .
git commit -m "Initial commit - Portfolio website"
```

2. Create a new repository on GitHub and push your code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Netlify

1. Go to [Netlify](https://app.netlify.com)
2. Sign in with your GitHub account
3. Click "Add new site" → "Import an existing project"
4. Select "Deploy with GitHub"
5. Authorize Netlify to access your repositories
6. Select your portfolio repository
7. Configure build settings (already set in netlify.toml):
   - Build command: `npm run build`
   - Publish directory: `dist`
8. Click "Deploy site"

### Step 3: Wait for Deployment

Netlify will automatically build and deploy your site. This usually takes 2-3 minutes.

### Step 4: Initialize Database

Once your site is deployed:

1. Visit your deployed site URL (e.g., `https://your-site-name.netlify.app`)
2. After the coin flip animation, you'll see a "Seed Database" button in the bottom-right corner
3. Click the button to populate the database with sample content
4. Refresh the page to see your projects, experience, education, and certifications

### Step 5: Custom Domain (Optional)

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Follow the instructions to configure your domain DNS

## Database Structure

Your portfolio uses Supabase's Key-Value store with the following structure:

### Projects
- Key: `project:1`, `project:2`, etc.
- Fields: title, description, image, technologies, github, demo, order

### Experience
- Key: `experience:1`, `experience:2`, etc.
- Fields: title, company, period, description, technologies, order

### Education
- Key: `education:1`, `education:2`, etc.
- Fields: degree, institution, location, period, grade, description, achievements, order

### Certifications
- Key: `certification:1`, `certification:2`, etc.
- Fields: title, issuer, date, credentialId, skills, order

### Contact Submissions
- Key: `contact:timestamp`
- Fields: name, email, message, timestamp, read

## Updating Content

To update your portfolio content:

1. Access the Supabase dashboard
2. Navigate to the Table Editor → kv_store_d360d7d2
3. Edit the values directly or use the API endpoints
4. Changes will be reflected immediately on your site

## API Endpoints

Your portfolio server provides these endpoints:

- `GET /projects` - Fetch all projects
- `GET /experience` - Fetch all experience entries
- `GET /education` - Fetch all education entries
- `GET /certifications` - Fetch all certifications
- `POST /contact` - Submit contact form
- `GET /contacts` - View all contact submissions
- `POST /seed` - Seed database with sample data

## Environment Variables

This basic setup doesn't require environment variables. The Supabase connection details are automatically configured through the Figma Make platform.

## Troubleshooting

### Build Fails
- Check the Netlify build logs
- Ensure all dependencies are listed in package.json
- Verify that netlify.toml is in the root directory

### Database Not Working
- Make sure you clicked the "Seed Database" button
- Check browser console for API errors
- Verify Supabase service is running

### Contact Form Not Working
- Check browser console for errors
- Verify the API endpoint is accessible
- Test with simple data first

## Support

For issues or questions:
- Email: pateelpavan64@gmail.com
- Check the README.md for more information
