const BANNER_MESSAGE = "Don\u2019t miss! June 9 BHB Special Focus Meeting";
const LINK_URL = "";
const COOKIE_NAME = "banner-dismissed";
const DISMISS_PATH = "/__dismiss-banner";
const COOKIE_MAX_AGE = 2592000; // 30 days

const bannerHTML = () => {
  const messageContent = LINK_URL
    ? `<a href="${LINK_URL}" style="color:#171717;text-decoration:underline;">${BANNER_MESSAGE}</a>`
    : BANNER_MESSAGE;

  return `<style>
body { margin-top: 48px !important; }
.announcement-banner {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px 48px 12px 16px;
  background-color: #2bdcd2;
  color: #171717;
  font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  text-align: center;
  box-sizing: border-box;
}
.announcement-banner a {
  color: #171717;
  text-decoration: underline;
}
.announcement-banner a:hover {
  opacity: 0.8;
}
.banner-dismiss {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
}
.banner-dismiss button {
  background: transparent;
  border: none;
  color: #171717;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  padding: 4px 8px;
  line-height: 1;
  font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
  opacity: 0.7;
}
.banner-dismiss button:hover {
  opacity: 1;
}
</style>
<div class="announcement-banner" role="banner">
  <span>${messageContent}</span>
  <form method="POST" action="${DISMISS_PATH}" class="banner-dismiss">
    <button type="submit" aria-label="Dismiss banner">&times;</button>
  </form>
</div>`;
};

export default async (req, context) => {
  const url = new URL(req.url);

  // Handle dismiss POST
  if (url.pathname === DISMISS_PATH && req.method === "POST") {
    const referer = req.headers.get("referer") || "/";
    return new Response(null, {
      status: 303,
      headers: {
        Location: referer,
        "Set-Cookie": `${COOKIE_NAME}=1; Path=/; HttpOnly; SameSite=Lax; Max-Age=${COOKIE_MAX_AGE}`,
      },
    });
  }

  // Only process GET requests for page navigation
  if (req.method !== "GET") {
    return;
  }

  // Skip if banner already dismissed
  const cookies = req.headers.get("cookie") || "";
  if (cookies.includes(COOKIE_NAME + "=")) {
    return;
  }

  const response = await context.next();
  const contentType = response.headers.get("content-type") || "";

  // Only inject into HTML responses
  if (!contentType.includes("text/html")) {
    return response;
  }

  const html = await response.text();
  const bodyMatch = html.match(/<body[^>]*>/i);
  if (!bodyMatch) {
    return response;
  }

  const insertIndex = bodyMatch.index + bodyMatch[0].length;
  const modifiedHTML =
    html.slice(0, insertIndex) + bannerHTML() + html.slice(insertIndex);

  return new Response(modifiedHTML, {
    status: response.status,
    headers: response.headers,
  });
};

export const config = {
  path: "/*",
  excludedPath: ["/favicon.ico", "/_next/*", "/images/*"],
};
