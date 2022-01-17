const { generateText, checkAndGenerate } = require("./util");

// --------------------------unit test----------------------------------

test("should output name and age", () => {
  const text = generateText("Meliodas", 18);
  expect(text).toBe("Meliodas (18 years old)");

  const text2 = generateText("King", 200);
  expect(text2).toBe("King (200 years old)");
});

test("should output data-less text", () => {
  const text = generateText("", null);
  expect(text).toBe(" (null years old)");

  const text2 = generateText();
  expect(text2).toBe("undefined (undefined years old)");
});

// --------------------------integration test----------------------------------

test("should generate a valid text output", () => {
  const text = checkAndGenerate("Merlin", 200);
  expect(text).toBe("Merlin (200 years old)");
});

// --------------------------end to end test------------------------------------

const puppeteer = require("puppeteer");
require("dotenv").config({ path: "./env" });

test("should create an element with text and correct class", async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ["--windows-size=1920,1080"],
  });
  const page = await browser.newPage();
  await page.goto(process.env.PATH_HTML_ON_YOUR_DEVICE);
  await page.click("input#name");
  await page.type("input#name", "Fulan");
  await page.click("input#age");
  await page.type("input#age", "25");
  await page.click("#btnAddUser");

  const finalText = await page.$eval(".user-item", (el) => el.textContent);
  expect(finalText).toBe("Fulan (25 years old)");
}, 10000);
