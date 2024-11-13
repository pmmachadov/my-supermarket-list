import convertToWord from './ConvertToWord';

const handleDownloadWord = async (products) => {
    const blob = await convertToWord(products.filter(product => product.quantity > 0));
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'productos.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export default handleDownloadWord;