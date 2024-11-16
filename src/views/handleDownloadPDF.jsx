import { pdf } from '@react-pdf/renderer';
import ProductSummaryPDF from './ProductSummaryPDF';

const handleDownloadPDF = async (products) => {
    const blob = await pdf(<ProductSummaryPDF products={ products } />).toBlob();
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'productos.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export default handleDownloadPDF;