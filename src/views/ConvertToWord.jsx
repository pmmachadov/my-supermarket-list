import { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType } from 'docx';

const convertToWord = (products) => {
    const doc = new Document({
        sections: [
            {
                properties: {},
                children: [
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "Resumen de Productos",
                                bold: true,
                                size: 32,
                            }),
                        ],
                        alignment: "center",
                    }),
                    new Table({
                        rows: [
                            new TableRow({
                                children: [
                                    new TableCell({
                                        children: [new Paragraph("ID")],
                                        width: { size: 10, type: WidthType.PERCENTAGE },
                                    }),
                                    new TableCell({
                                        children: [new Paragraph("Nombre")],
                                        width: { size: 30, type: WidthType.PERCENTAGE },
                                    }),
                                    new TableCell({
                                        children: [new Paragraph("Cantidad")],
                                        width: { size: 20, type: WidthType.PERCENTAGE },
                                    }),
                                    new TableCell({
                                        children: [new Paragraph("Tipo de Unidad")],
                                        width: { size: 20, type: WidthType.PERCENTAGE },
                                    }),
                                    new TableCell({
                                        children: [new Paragraph("Imagen")],
                                        width: { size: 20, type: WidthType.PERCENTAGE },
                                    }),
                                ],
                            }),
                            ...products.map(product => new TableRow({
                                children: [
                                    new TableCell({
                                        children: [new Paragraph(product.id.toString())],
                                    }),
                                    new TableCell({
                                        children: [new Paragraph(product.name)],
                                    }),
                                    new TableCell({
                                        children: [new Paragraph(product.quantity.toString())],
                                    }),
                                    new TableCell({
                                        children: [new Paragraph(product.unitType)],
                                    }),
                                    new TableCell({
                                        children: [new Paragraph(product.image)],
                                    }),
                                ],
                            })),
                        ],
                    }),
                ],
            },
        ],
    });

    return Packer.toBlob(doc);
};

export default convertToWord;
