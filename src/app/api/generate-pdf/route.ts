import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function POST(request: Request) {
  try {
    const requestPayload = await request.json();
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.evaluateOnNewDocument((requestPayload) => {
      if (requestPayload) {
        localStorage.setItem("cv-content", JSON.stringify(requestPayload));
      }
    }, requestPayload);

    await page.goto(`${process.env.NEXT_PUBLIC_SITE_URL}/preview`, {
      waitUntil: "networkidle0",
    });

    await page.emulateMediaType("print");
    const scaleDownRate = 0.82;
    const pdfBuffer = await page.pdf({
      scale: scaleDownRate,
      format: "a4",
      printBackground: true,
      margin: {
        top: 40 * scaleDownRate,
        bottom: 40 * scaleDownRate,
        left: 20 * scaleDownRate,
        right: 20 * scaleDownRate,
      },
    });

    await browser.close();

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="generated.pdf"',
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { error: JSON.stringify({ ...error, executablePath, nodeEnv }) },
      { status: 500 }
    );
  }
}
