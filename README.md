# Birthday Surprise Website 🎂💖

A personalized, interactive digital birthday gift built with pure **HTML5**, **CSS3**, and **Vanilla JavaScript** — ready to deploy on **GitHub Pages** or **Vercel**.

## ✨ Customize Everything in One Place
Open [`script.js`](./script.js) and edit the `SURPRISE_CONFIG` object at the top of the file:
- `recipientName` & `senderName`
- `password`, `passwordPrompt`, and `passwordHint`
- `birthdayDate` (set to a future date to show a live countdown timer, or today/past to show a celebration banner)
- `music` (place your legally obtained `rangulu-ranguley.mp3` in `assets/music/`; the file path and display credits are in `script.js`)
- `timeline` photos (`assets/images/`)
- `letter` paragraphs & signature
- `quiz` personalized questions and answer options
- the final surprise letters and ending in Section 7 of `index.html`

## 📧 Quiz Answer Emails
The quiz accepts any selected option and emails the answers through EmailJS after the final question. Before deploying:
1. Create an EmailJS email service and template.
2. Set the template's **To Email** to `mounikabodollu2006@gmail.com` and include `{{quiz_answers}}` in the email body. The template can also use `{{submitted_at}}`.
3. Add the EmailJS **Service ID**, **Template ID**, and browser **Public Key** to `quizEmail` near the top of `script.js`.
4. Allow your website's origin in EmailJS security settings. For local testing, also allow the exact localhost origin shown in the browser address bar (for example, `http://localhost:3000`).
5. If delivery fails, inspect the EmailJS **Email History** for the failure reason.

The official EmailJS Browser SDK is loaded when the quiz is submitted, with jsDelivr and unpkg CDN fallbacks. If loading or sending fails, **Retry sending answers** retries the request using the already selected answers; it does not restart the quiz. The submission is guarded against overlapping clicks.

## 🚀 Deploy
- **GitHub Pages**: Push the contents of `birthday-surprise/` to a GitHub repository and enable **Settings → Pages → Deploy from branch (`main` / root)**.
- **Vercel**: Import the repository (or drag & drop the `birthday-surprise/` folder in Vercel) with **Framework Preset: Other** and **Output Directory: `.`**.

## 💻 Run Locally
From the workspace root (the folder containing `birthday-surprise/`), run:
```bash
npm run dev
```

The audio-only player starts when the visitor selects **Open Your Surprise**.
The audio element stays mounted as the visitor moves through the sections, so
playback does not restart.
