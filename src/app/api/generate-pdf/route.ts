import chromium from "@sparticuz/chromium";
import { NextResponse } from "next/server";
import puppeteer from "puppeteer-core";

export async function POST(request: Request) {
  try {
    console.log("process.env.NODE_ENV", process.env.NODE_ENV);

    const requestPayload = await request.json();
    const browser = await puppeteer.launch({
      args: chromium.args,
      headless: true,
      defaultViewport: chromium.defaultViewport,
      executablePath:
        process.env.NODE_ENV === "development"
          ? process.env.PUPPETEER_EXECUTABLE_PATH
          : await chromium.executablePath(),
    });
    const page = await browser.newPage();

    await page.evaluateOnNewDocument((requestPayload) => {
      if (requestPayload) {
        localStorage.setItem("cv-content", JSON.stringify(requestPayload));
      }
    }, requestPayload);

    await page.goto(`${process.env.SITE_URL}/preview`, {
      waitUntil: "networkidle0",
    });

    await page.emulateMediaType("print");
    const scaleDownRate = 0.89;
    const pdfBuffer = await page.pdf({
      scale: scaleDownRate,
      format: "a4",
      printBackground: true,
      margin: {
        top: 40 * scaleDownRate,
        right: 40 * scaleDownRate,
        bottom: 40 * scaleDownRate,
        left: 40 * scaleDownRate,
      },
    });

    await browser.close();

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="generated.pdf"',
      },
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: JSON.stringify(error) }, { status: 500 });
  }
}
