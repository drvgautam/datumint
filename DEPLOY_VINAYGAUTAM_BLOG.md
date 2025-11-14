# Deploy vinaygautam-blog to Cloudflare Pages

## Repository Information
- **Repository**: `drvgautam/vinaygautam-blog`
- **Visibility**: Public
- **Domain**: `www.vinaygautam.com`
- **Build Output**: `dist`

## Step-by-Step Deployment Instructions

### Step 1: Access Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Sign in with your account
3. Click on **"Workers & Pages"** in the left sidebar
4. Click **"Create application"** button
5. Select **"Pages"** tab
6. Click **"Connect to Git"**

### Step 2: Connect GitHub Repository

1. **Select Git Provider**: Choose **GitHub**
2. **Authorize Cloudflare** (if not already done):
   - Click "Authorize Cloudflare"
   - Grant necessary permissions
   - You may need to install the Cloudflare Pages GitHub app

3. **Select Repository**:
   - Search for or select: `vinaygautam-blog`
   - Click on the repository

### Step 3: Configure Build Settings

1. **Project name**: `vinaygautam-blog` (or your preferred name)

2. **Production branch**: `main`

3. **Build settings**:
   - **Framework preset**: `Astro` (or leave as "None")
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: (leave empty - it's at the root)
   - **Environment variables**: (none needed for this project)

4. Click **"Save and Deploy"**

### Step 4: Wait for Initial Build

- Cloudflare will automatically:
  - Install dependencies (`npm install`)
  - Run the build (`npm run build`)
  - Deploy to a preview URL (e.g., `vinaygautam-blog.pages.dev`)

- Monitor the build in the Cloudflare dashboard
- Wait for the build to complete (usually 2-5 minutes)

### Step 5: Add Custom Domain

1. **Go to Custom domains**:
   - In your Pages project, click on **"Custom domains"** tab
   - Click **"Set up a custom domain"**

2. **Add Domain**:
   - Enter: `www.vinaygautam.com`
   - Click **"Continue"**

3. **Verify DNS**:
   - Cloudflare will show you the DNS records needed
   - Ensure you have a CNAME record:
     - **Name**: `www`
     - **Target**: Your Cloudflare Pages URL (e.g., `vinaygautam-blog.pages.dev`)
     - **Proxy status**: Proxied (orange cloud)

4. **SSL/TLS**:
   - Cloudflare will automatically provision an SSL certificate
   - This may take a few minutes to 24 hours
   - Check status in **SSL/TLS** → **Edge Certificates**

### Step 6: Set Up Redirect (non-www to www)

1. **Go to Cloudflare Dashboard**:
   - Select your domain `vinaygautam.com`
   - Go to **"Rules"** → **"Redirect Rules"** (or **"Page Rules"**)

2. **Create Redirect Rule**:
   - Click **"Create rule"**
   - **Name**: `Redirect non-www to www`
   - **If**: `vinaygautam.com/*`
   - **Then**: `https://www.vinaygautam.com/$1`
   - **Status code**: `301 - Permanent Redirect`
   - Click **"Deploy"**

### Step 7: Verify Deployment

1. **Check Build Status**:
   - Go to Pages project → **"Deployments"** tab
   - Verify latest deployment shows "Success"

2. **Test the Site**:
   - Visit `https://www.vinaygautam.com`
   - Verify all pages load correctly
   - Test navigation links
   - Check that DatumInt link opens `https://www.datumint.no`

3. **Verify SSL**:
   - Check that the site loads with HTTPS
   - SSL certificate should be active

## Build Configuration Summary

```
Repository: drvgautam/vinaygautam-blog
Branch: main
Build command: npm run build
Output directory: dist
Node version: Auto-detected (or specify if needed)
```

## Troubleshooting

### Build Fails

1. **Check build logs** in Cloudflare Pages dashboard
2. **Common issues**:
   - Missing dependencies → Check `package.json`
   - Build errors → Check Astro configuration
   - Node version → May need to specify in build settings

### Domain Not Working

1. **Check DNS records**:
   - Verify CNAME record exists
   - Ensure it points to correct Pages URL
   - Check proxy status (should be orange cloud)

2. **Check SSL certificate**:
   - Go to SSL/TLS → Edge Certificates
   - Wait for certificate provisioning (up to 24 hours)
   - Ensure "Always Use HTTPS" is enabled

### Site Not Updating

1. **Trigger new deployment**:
   - Push a new commit to `main` branch
   - Or manually trigger rebuild in Cloudflare dashboard

2. **Clear cache**:
   - Go to Caching → Configuration
   - Click "Purge Everything"

## Important Notes

- The repository is **public**, so all blog/portfolio content is visible
- The consultancy site (`datumint-consultancy`) is in a **separate private repository**
- Both sites are deployed independently on Cloudflare Pages
- The DatumInt link in the navbar points to the external consultancy site

## Verification Checklist

- [ ] Repository connected to Cloudflare Pages
- [ ] Build completes successfully
- [ ] Custom domain `www.vinaygautam.com` added
- [ ] DNS records configured correctly
- [ ] SSL certificate active
- [ ] Site accessible at `https://www.vinaygautam.com`
- [ ] Redirect from `vinaygautam.com` to `www.vinaygautam.com` works
- [ ] All pages load correctly
- [ ] DatumInt link works (opens external site)

## Support

If you encounter any issues:
1. Check Cloudflare Pages build logs
2. Verify DNS settings in Cloudflare dashboard
3. Check SSL/TLS certificate status
4. Review Astro build output locally: `npm run build`

