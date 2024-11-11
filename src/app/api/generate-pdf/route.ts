import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function POST() {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("http://localhost:3000/preview", {
      waitUntil: "networkidle0",
    });

    await page.emulateMediaType("screen");
    const pdfBuffer = await page.pdf({
      scale: 0.9,
      format: "a4",
      // margin: {
      //   top: 10,
      //   right: 10,
      //   bottom: 10,
      //   left: 10,
      // },
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
    return NextResponse.json(
      { error: "Error on generating PDF" },
      { status: 500 }
    );
  }
}
