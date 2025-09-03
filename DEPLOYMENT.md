# GitHub Pages Deployment Guide

This guide will help you deploy the Isumi Gayasha Portfolio to GitHub Pages.

## 📋 Prerequisites

1. GitHub account
2. Git installed on your computer
3. Node.js and npm installed

## 🚀 Step-by-Step Deployment

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click "New repository" or use [this link](https://github.com/new)
3. Repository settings:
   - **Repository name**: `my-portfolio` (or any name you prefer)
   - **Description**: "Personal portfolio website showcasing my projects and skills"
   - **Visibility**: Public
   - **Initialize**: Don't initialize with README, .gitignore, or license (we already have these)

### Step 2: Connect Local Project to GitHub

Open terminal in your project directory and run:

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio setup"

# Add GitHub repository as origin (replace YOUR_USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### Step 4: Automatic Deployment

The GitHub Actions workflow will automatically:

1. Trigger when you push to the `main` branch
2. Install dependencies
3. Build the project
4. Deploy to GitHub Pages

### Step 5: Access Your Live Portfolio

After successful deployment (usually takes 2-5 minutes):

- Your portfolio will be live at: `https://YOUR_USERNAME.github.io/my-portfolio/`
- Check the **Actions** tab to monitor deployment progress

## 🔄 Making Updates

To update your portfolio:

1. Make changes to your code
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```
3. GitHub Actions will automatically redeploy your site

## 🛠️ Custom Domain (Optional)

To use a custom domain (like `yourdomain.com`):

1. Add a `CNAME` file in the `public/` directory with your domain name
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use the custom domain

## 📊 Monitoring Deployment

- **Actions Tab**: View deployment logs and status
- **Environments**: See deployment history
- **Settings > Pages**: Check current deployment status

## 🐛 Troubleshooting

### Common Issues:

1. **Build Fails**: Check the Actions tab for error logs
2. **Images Not Loading**: Ensure image paths use `import.meta.env.BASE_URL`
3. **404 Error**: Verify the base URL in `vite.config.ts`
4. **Permissions Error**: Check repository permissions in Settings

### Getting Help:

1. Check the Actions tab for detailed error messages
2. Ensure all file paths are correct
3. Verify GitHub Pages is enabled in repository settings

## ✅ Success Checklist

- [ ] Repository created on GitHub
- [ ] Code pushed to `main` branch
- [ ] GitHub Pages enabled with "GitHub Actions" source
- [ ] Deployment action completed successfully
- [ ] Portfolio accessible at GitHub Pages URL
- [ ] All images and assets loading correctly

## 🎉 Congratulations!

Your portfolio is now live on GitHub Pages! Share your portfolio URL with potential employers, collaborators, and friends.

**Your Portfolio URL**: `https://YOUR_USERNAME.github.io/my-portfolio/`

---

For any issues or questions, refer to the main README.md or check the GitHub documentation on Pages deployment.
