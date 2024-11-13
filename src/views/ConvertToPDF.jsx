import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

const convertToPDF = async (products) => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 800]);
    const { width, height } = page.getSize();
    const fontSize = 12;
    const titleFontSize = 24;

    const title = "Resumen de Productos";
    const titleFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const textFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    page.drawText(title, {
        x: 50,
        y: height - 50,
        size: titleFontSize,
        font: titleFont,
        color: rgb(0, 0, 0),
    });

    let yPosition = height - 100;

    for (const product of products) {
        page.drawText(`ID: ${product.id?.toString() || ''}`, {
            x: 50,
            y: yPosition,
            size: fontSize,
            font: textFont,
            color: rgb(0, 0, 0),
        });
        yPosition -= 20;

        page.drawText(`Nombre: ${product.name || ''}`, {
            x: 50,
            y: yPosition,
            size: fontSize,
            font: textFont,
            color: rgb(0, 0, 0),
        });
        yPosition -= 20;

        page.drawText(`Cantidad: ${product.quantity?.toString() || ''} ${product.unitType || ''}`, {
            x: 50,
            y: yPosition,
            size: fontSize,
            font: textFont,
            color: rgb(0, 0, 0),
        });
        yPosition -= 20;

        if (product.image) {
            const imageUrl = `public/${product.image}`;
            const imageBytes = await fetch(imageUrl).then(res => res.arrayBuffer());
            const image = await pdfDoc.embedJpg(imageBytes);
            const imageDims = image.scale(0.5);

            page.drawImage(image, {
                x: 50,
                y: yPosition - imageDims.height,
                width: imageDims.width,
                height: imageDims.height,
            });

            yPosition -= imageDims.height + 20;
        } else {
            yPosition -= 40;
        }
    }

    const pdfBytes = await pdfDoc.save();
    return new Blob([pdfBytes], { type: 'application/pdf' });
};

export default convertToPDF;
