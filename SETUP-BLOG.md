# Britney's Blog — Setup & How It Works

Britney writes at **northatlantarealtor.homes/admin/** in a Word-like Decap CMS editor. Publishing commits a Markdown file to `_posts/`; GitHub Pages (Jekyll) rebuilds the site and the post appears at `/blog/post-slug/`, is listed automatically on `/blog.html`, and is included in `sitemap.xml`.

## Add this package to the repo
Copy the contents of this ZIP into the root of `Westyn3/britney-javens-realtor`, replacing `blog.html` and `sitemap.xml` if prompted. The package does not replace the rest of Britney's existing site.

## One-time setup

### 1. GitHub access for Britney
Britney needs a free GitHub account. Add that account as a collaborator on `Westyn3/britney-javens-realtor` with Write access. She only uses GitHub as the secure CMS login.

### 2. Create a GitHub OAuth App
In GitHub: Settings → Developer settings → OAuth Apps → New OAuth App.

- Application name: `Britney Blog Editor`
- Homepage URL: `https://northatlantarealtor.homes`
- Authorization callback URL: `https://<YOUR-WORKER>.workers.dev/callback`

Save the Client ID and generate a Client Secret.

### 3. Deploy the Cloudflare Worker
Cloudflare → Workers & Pages → Create Worker. A good name is `britney-blog-auth`. Paste `worker/decap-oauth-worker.js` and deploy it.

Under Worker Settings → Variables and Secrets add:
- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`

Copy the deployed Worker URL and update the GitHub OAuth App callback to `<worker-url>/callback`.

### 4. Point Decap CMS to the Worker
Edit `admin/config.yml` and replace:

`base_url: https://REPLACE-ME.workers.dev`

with Britney's deployed Worker URL.

### 5. Test
Open `https://northatlantarealtor.homes/admin/` → Login with GitHub → authorize → New Blog Post. Add a title, date, topic, description, optional image, and post body. Publish and allow GitHub Pages a minute or two to rebuild. Confirm the post appears on `/blog.html` and its individual `/blog/post-slug/` page.

## Scheduling
Future-dated posts commit immediately but Jekyll keeps them hidden because `future: false`. The included GitHub Action requests a Pages rebuild every day at approximately 8 AM Eastern so scheduled posts become visible. It can also be run manually from Actions → Publish scheduled posts.

## CMS fields
- Title
- Publish Date
- Area / Topic
- Short Description
- Header Image (optional)
- Post (Markdown editor)

Topics are tailored to Britney's North Atlanta market: Alpharetta, Milton, Roswell, Johns Creek, Cumming, Buckhead, Sandy Springs, Brookhaven, Chamblee, Norcross, Duluth, Buying, Selling, Luxury, Relocation, and Market Update.

## Notes
- Post images upload to `/blog-images/`.
- Existing static site pages remain intact.
- `worker/` and this setup file are excluded from the built site.
- The included `blog.html` removes the Blogger iframe and lists native Jekyll posts instead.
