import convertToPDF from './ConvertToPDF';

const handleDownloadPDF = async (products) => {
    const blob = await convertToPDF(products.filter(product => product.quantity > 0));
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'productos.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export default handleDownloadPDF;