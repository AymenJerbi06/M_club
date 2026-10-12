import { expect, test } from "@playwright/test";

const routes = ["/", "/training", "/training/gallery", "/piscine", "/spa", "/classes", "/coaches", "/kids", "/sports", "/cantine", "/events", "/membership", "/facilities", "/about", "/location", "/contact", "/cantine/menu"];

test.beforeEach(async ({ page }) => {
  await page.route("https://www.google.com/maps**", route => route.abort());
  await page.addInitScript(() => {
    if (window === window.top && location.protocol === "http:") localStorage.setItem("mclub-cookie-choice", "saved");
  });
});

for (const route of routes) {
  test(`${route} fits the viewport`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", error => errors.push(error.message));
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await page.evaluate(() => document.fonts.ready);
    await page.waitForFunction(() => Boolean(document.documentElement.style.getPropertyValue("--mclub-live-chrome-offset")));
    await page.waitForTimeout(500);
    const gap = await page.evaluate(() => {
      const selector = ".page-video-hero, .page-hero, .gymx-hero, .swim-hero, .section-hero-home";
      const first = document.querySelector("main")?.firstElementChild;
      const hero = (first?.matches(selector) ? first : first?.querySelector(selector))?.getBoundingClientRect();
      const header = document.querySelector(".site-header")?.getBoundingClientRect();
      const offer = document.querySelector(".offer-banner")?.getBoundingClientRect();
      return hero ? hero.top - Math.max(header?.bottom ?? 0, offer?.bottom ?? 0) : 0;
    });
    expect(gap, "Hero should meet the header without a blank strip").toBeGreaterThanOrEqual(-2);
    expect(gap).toBeLessThanOrEqual(4);

    for (let y = 0; y < await page.evaluate(() => document.documentElement.scrollHeight); y += 900) {
      await page.evaluate(top => scrollTo({ top, behavior: "instant" }), y);
      await page.waitForTimeout(40);
    }
    const layout = await page.evaluate(() => ({
      overflow: document.documentElement.scrollWidth > innerWidth + 1,
      clipped: [...document.querySelectorAll<HTMLElement>("main h1, main h2, main h3, main button, main .hp-button, main input, main select, main textarea")]
        .filter(el => el.getClientRects().length && !el.closest('[aria-hidden="true"]') && el.clientWidth > 0 && el.scrollWidth > el.clientWidth + 2)
        .map(el => `${el.tagName}: ${el.textContent?.trim() || el.getAttribute("name")}`),
      zoomingInputs: [...document.querySelectorAll<HTMLInputElement>("main input:not([type='radio']):not([type='checkbox']), main select, main textarea")]
        .filter(el => el.getClientRects().length && parseFloat(getComputedStyle(el).fontSize) < 16)
        .map(el => el.getAttribute("name") || el.id),
    }));
    expect(layout.overflow).toBe(false);
    expect(layout.clipped).toEqual([]);
    expect(layout.zoomingInputs, "Form text should not trigger iOS focus zoom").toEqual([]);
    expect(errors).toEqual([]);
  });
}

test("mobile menu scrolls, traps focus and closes with Escape", async ({ page }, info) => {
  test.skip(info.project.name === "desktop");
  await page.goto("/classes");
  const toggle = page.getByRole("button", { name: "Open menu", exact: true });
  await toggle.click();
  const dialog = page.getByRole("dialog", { name: "Menu", exact: true });
  await expect(dialog).toBeVisible();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  for (let i = 0; i < 18; i++) {
    await page.keyboard.press("Tab");
    expect(await dialog.evaluate(el => el.contains(document.activeElement))).toBe(true);
  }
  await page.keyboard.press("Escape");
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(toggle).toBeFocused();
  await expect(page.locator(".nav-drawer")).toHaveAttribute("inert", "");
});

test("class filters and parent questions work on touch", async ({ page }) => {
  await page.goto("/classes");
  await page.getByRole("tab", { name: "Aquatics", exact: true }).click();
  await expect(page.locator(".schedule-row")).toHaveCount(3);
  await page.getByRole("tab", { name: "All", exact: true }).click();
  await expect(page.locator(".schedule-row")).toHaveCount(8);
  await page.goto("/kids");
  const question = page.locator(".kids-question-list details").first();
  await question.locator("summary").click();
  await expect(question).toHaveAttribute("open", "");
});

test("portrait header and compact footer remain usable", async ({ page }, info) => {
  await page.goto("/");
  if (info.project.name !== "desktop") {
    await expect(page.getByRole("button", { name: "Open search", exact: true })).toBeHidden();
    const brand = await page.locator(".brand-mark").boundingBox();
    expect(brand?.x).toBeLessThanOrEqual(24);
  }
  await page.locator("footer").scrollIntoViewIfNeeded();
  const footer = await page.locator("footer").boundingBox();
  expect(footer?.height).toBeLessThan(info.project.name.includes("phone") ? 950 : 600);
});

test("phone home hero leaves room for the footage", async ({ page }, info) => {
  test.skip(!["small-phone", "phone", "webkit-phone"].includes(info.project.name));
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  const logo = await page.locator(".hero-content-logo").boundingBox();
  expect(logo?.width).toBe(144);
  const hero = await page.locator(".section-hero-home").boundingBox();
  const content = await page.locator(".hero-content-btm").boundingBox();
  const groupCenter = (logo!.y + content!.y + content!.height) / 2;
  expect(Math.abs(groupCenter - (hero!.y + hero!.height / 2))).toBeLessThan(2);
  expect(Math.abs(hero!.y + hero!.height - page.viewportSize()!.height)).toBeLessThan(2);
  const buttons = await page.locator(".hero-content-btm .button").all();
  const first = await buttons[0].boundingBox();
  const second = await buttons[1].boundingBox();
  expect(first?.height).toBeGreaterThanOrEqual(44);
  expect(first?.width).toBeLessThan(170);
  expect(Math.abs((first?.y ?? 0) - (second?.y ?? 0))).toBeLessThan(2);
  const copy = await page.locator(".hero-content-btm .heading-small").boundingBox();
  const arrow = await page.locator(".hero-content-home .arrow-down").boundingBox();
  expect((arrow?.y ?? 0) - ((copy?.y ?? 0) + (copy?.height ?? 0))).toBeGreaterThan(8);
});

test("the menu contains navigation without unrelated class promos", async ({ page }, info) => {
  test.skip(info.project.name === "desktop");
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu", exact: true }).click();
  const menu = page.getByRole("dialog", { name: "Menu", exact: true });
  await expect(menu.locator(".drawer-nav a")).toHaveCount(10);
  await expect(menu.locator(".drawer-feature")).toHaveCount(0);
  await expect(menu).not.toContainText("Ride the Room");
  await expect(menu).not.toContainText("Step Freestyle");
  await expect(menu.getByRole("link", { name: "Book by phone" })).toBeVisible();
});

test("home media and page chrome reach the viewport edges", async ({ page }) => {
  await page.goto("/");
  await page.waitForFunction(() => Boolean(document.documentElement.style.getPropertyValue("--mclub-live-chrome-offset")));
  const edges = await page.evaluate(() => {
    const selectors = [".site-header", ".offer-banner", ".section-hero-home"];
    return selectors.map(selector => {
      const rect = document.querySelector(selector)!.getBoundingClientRect();
      return { left: rect.left, right: rect.right, width: innerWidth };
    });
  });
  for (const edge of edges) {
    expect(edge.left).toBe(0);
    expect(edge.right).toBe(edge.width);
  }
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).backgroundColor)).toBe("rgb(29, 27, 22)");
  expect(await page.locator(".nav-scrim").evaluate(el => getComputedStyle(el).borderWidth)).toBe("0px");
  await page.getByRole("button", { name: "Close offer banner" }).click();
  await expect.poll(() => page.evaluate(() => {
    const hero = document.querySelector(".section-hero-home")!.getBoundingClientRect();
    const header = document.querySelector(".site-header")!.getBoundingClientRect();
    return Math.abs(hero.top - header.bottom);
  })).toBeLessThanOrEqual(1);
});

test("home keeps its original clip and frames out the encoded black bands", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  const video = page.locator(".home-hero-video");
  await expect(video).toHaveAttribute("data-video-original", "/mclub/classes-motion.mp4");
  await expect.poll(() => video.evaluate(el => (el as HTMLVideoElement).currentTime), { timeout: 20000 }).toBeGreaterThan(0.2);
  const framing = await video.evaluate(el => {
    const frame = el.parentElement!.getBoundingClientRect();
    const media = el.getBoundingClientRect();
    return { ratio: media.height / frame.height, centerDelta: Math.abs(media.y + media.height / 2 - frame.y - frame.height / 2) };
  });
  expect(framing.ratio).toBeGreaterThan(3.15);
  expect(framing.centerDelta).toBeLessThan(1);
});

test("the original home Join video plays on phones and desktop", async ({ browser, baseURL }, info) => {
  test.skip(!["phone", "desktop", "webkit-phone"].includes(info.project.name));
  const context = await browser.newContext({ ...info.project.use, reducedMotion: "no-preference" });
  try {
    const page = await context.newPage();
    await page.goto(`${baseURL}/`);
    const video = page.locator(".hp-info-media video");
    await expect(video).toHaveAttribute("data-video-original", "/mclub/media/join-club-preview.mp4");
    await video.evaluate(el => scrollTo({ top: el.getBoundingClientRect().top + scrollY - 150, behavior: "instant" }));
    await expect.poll(() => video.evaluate(el => (el as HTMLVideoElement).currentTime), { timeout: 20000 }).toBeGreaterThan(0.2);
    await expect.poll(() => video.evaluate(el => (el as HTMLVideoElement).paused)).toBe(false);
  } finally {
    await context.close();
  }
});

test("videos load near the viewport, play in view and pause off-screen", async ({ browser, baseURL }, info) => {
  test.skip(!["phone", "desktop", "webkit-phone"].includes(info.project.name));
  const context = await browser.newContext({ ...info.project.use, reducedMotion: "no-preference" });
  const page = await context.newPage();
  try {
    await page.goto(`${baseURL}/classes`);
    const hero = page.locator(".page-video-hero video");
    await expect.poll(() => hero.evaluate(video => !(video as HTMLVideoElement).paused), { timeout: 15000 }).toBe(true);
    const source = await hero.getAttribute("src");
    expect(source).toMatch(/\/optimized\/.*\.mp4$/);
    expect(source).toContain(info.project.name === "desktop" ? "desktop" : "mobile");
    const firstCard = page.locator(".reshape-class-card video").first();
    expect(await firstCard.getAttribute("src")).toBeNull();
    await firstCard.evaluate(el => scrollTo({ top: el.getBoundingClientRect().top + scrollY - 180, behavior: "instant" }));
    await expect.poll(() => firstCard.evaluate(video => !(video as HTMLVideoElement).paused), { timeout: 15000 }).toBe(true);
    await expect.poll(() => hero.evaluate(video => (video as HTMLVideoElement).paused)).toBe(true);
    await page.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
    await expect.poll(() => firstCard.evaluate(video => (video as HTMLVideoElement).paused)).toBe(true);
  } finally {
    await context.close();
  }
});

test("reduced motion and data saving keep poster-only video", async ({ page, browser, baseURL }, info) => {
  test.skip(info.project.name !== "phone");
  await page.goto("/classes");
  await page.waitForTimeout(500);
  await expect(page.locator(".page-video-hero video")).not.toHaveAttribute("src");
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: "no-preference" });
  await context.addInitScript(() => Object.defineProperty(navigator, "connection", { value: { saveData: true } }));
  const saver = await context.newPage();
  try {
    await saver.goto(`${baseURL}/classes`);
    await saver.waitForTimeout(500);
    await expect(saver.locator(".page-video-hero video")).not.toHaveAttribute("src");
    await expect(saver.locator(".page-video-hero video")).toHaveAttribute("poster", /\.jpg$/);
  } finally {
    await context.close();
  }
});
