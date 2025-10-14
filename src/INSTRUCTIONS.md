# Portfolio Setup Instructions

## Quick Start Guide

### 1. First Time Setup

After deploying your portfolio, you'll see a **"Seed Database"** button in the bottom-right corner of the screen.

**Click this button to:**
- Populate your database with sample projects
- Add sample work experience entries
- Add sample education records
- Add sample certifications

The button will:
1. Show "Seeding..." while loading
2. Display "Database seeded! Refreshing..." when complete
3. Automatically refresh the page to show your data
4. **Disappear completely** after successful seeding

### 2. Database Structure

Your portfolio uses Supabase's Key-Value store to manage content:

#### Projects (project:1, project:2, etc.)
- title
- description
- image (URL)
- technologies (array)
- github (URL)
- demo (URL)
- order (for sorting)

#### Experience (experience:1, experience:2, etc.)
- title
- company
- period
- description
- technologies (array)
- order

#### Education (education:1, education:2, etc.)
- degree
- institution
- location
- period
- grade
- description
- achievements (array)
- order

#### Certifications (certification:1, certification:2, etc.)
- title
- issuer
- date
- credentialId
- skills (array)
- order

#### Contact Submissions (contact:timestamp)
- name
- email
- message
- timestamp
- read (boolean)

### 3. Contact Form

When visitors fill out your contact form, their information is automatically saved to the database with:
- Name, email, and message
- Timestamp of submission
- Read status (false by default)

The form will:
- Show "Sending..." while submitting
- Display success message with green styling
- Confirm data was stored in database
- Reset the form for new entries

### 4. Viewing Contact Submissions

To view all contact form submissions, you can:
1. Access the Supabase dashboard
2. Navigate to the kv_store_d360d7d2 table
3. Filter by keys starting with "contact:"

Or use the API endpoint:
```
GET https://{projectId}.supabase.co/functions/v1/make-server-d360d7d2/contacts
```

### 5. Updating Content

To update your portfolio content:

**Option 1: Direct Database Edit**
- Access Supabase dashboard
- Find the kv_store_d360d7d2 table
- Edit the JSON values directly

**Option 2: Via API**
- Use the provided API endpoints
- Update records programmatically

### 6. API Endpoints

All endpoints are prefixed with:
`/make-server-d360d7d2`

Available endpoints:
- `GET /projects` - Fetch all projects
- `GET /experience` - Fetch all experience
- `GET /education` - Fetch all education
- `GET /certifications` - Fetch all certifications
- `POST /contact` - Submit contact form
- `GET /contacts` - View all contact submissions
- `POST /seed` - Seed database (triggered by button)

### 7. Loading States

Each section shows:
- "Loading [section]..." while fetching data
- "No [section] found. Click the seed button..." if database is empty
- Actual content once loaded

### 8. Personal Information

Your personal details are already set:
- **Name:** Pateel Pavan
- **Email:** pateelpavan64@gmail.com
- **Phone:** +91 7416472177
- **Location:** Hyderabad, Telangana, India

### 9. Resume Download

The "Download Resume" button in the About section downloads `/public/resume.pdf`

**To use your own resume:**
1. Replace the file at `/public/resume.pdf` with your actual resume
2. Keep the same filename or update the link in About.tsx

### 10. Troubleshooting

**Button doesn't disappear?**
- Wait 3 seconds after successful seeding
- It will auto-refresh the page

**Data not showing?**
- Make sure you clicked "Seed Database"
- Check browser console for errors
- Verify Supabase service is running

**Contact form not saving?**
- Check browser console for API errors
- Ensure all fields are filled
- Look for success message after submit

### 11. Deployment Checklist

Before deploying:
- ✅ Database seeding works
- ✅ All sections load from database
- ✅ Contact form saves to database
- ✅ Resume file is updated
- ✅ Personal information is correct
- ✅ Social media links are updated
- ✅ All images load properly

After deployment:
1. Visit your deployed site
2. Click "Seed Database" button
3. Wait for auto-refresh
4. Verify all sections show data
5. Test contact form submission
6. Test resume download

## Support

For questions or issues:
- Email: pateelpavan64@gmail.com
- Check README.md for more details
- Review DEPLOYMENT.md for deployment help
