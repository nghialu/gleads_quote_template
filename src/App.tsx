import { useState, useRef } from 'react';
import { FileText, Download } from 'lucide-react';
import html2pdf from 'html2pdf.js';
import QuoteForm from './components/QuoteForm';
import QuotePreview from './components/QuotePreview';

function App() {
  // Proposal Details
  const [proposalTitle, setProposalTitle] = useState('DIGITAL MARKETING SOLUTION PROPOSAL');
  const [solutionOverview, setSolutionOverview] = useState('Comprehensive digital marketing strategy to elevate your brand presence and drive sustainable business growth through SEO, Performance Ads, Content Marketing, and Creative Design.');
  
  // Client Information
  const [clientName, setClientName] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  // Quote Details
  const [quoteNumber, setQuoteNumber] = useState('BGT-2025-001');
  const [quoteDate, setQuoteDate] = useState(new Date().toISOString().split('T')[0]);
  const [validUntil, setValidUntil] = useState('');

  // Service Items
  const [items, setItems] = useState([
    { id: 1, service: '', description: '', timeline: '', cost: 0 }
  ]);

  // Terms and Conditions
  const [serviceNotes, setServiceNotes] = useState('GLEADS cam kết cung cấp dịch vụ chuyên nghiệp, minh bạch và hiệu quả cao. Đội ngũ chuyên gia của chúng tôi sẽ đồng hành cùng doanh nghiệp trong suốt quá trình thực hiện dự án.');
  const [warrantyPolicy, setWarrantyPolicy] = useState('- Bảo hành kỹ thuật trong vòng 12 tháng\n- Hỗ trợ sửa lỗi và cập nhật miễn phí\n- Tư vấn và training sử dụng');
  const [paymentTerms, setPaymentTerms] = useState('- Đợt 1: 40% khi ký hợp đồng\n- Đợt 2: 30% khi hoàn thành 50% dự án\n- Đợt 3: 30% khi nghiệm thu và bàn giao');
  const [bankInfo, setBankInfo] = useState('Ngân hàng: TMCP Ngoại Thương Việt Nam (Vietcombank)\nTên tài khoản: CÔNG TY CỔ PHẦN GLEADS\nSố tài khoản: 0123456789\nChi nhánh: TP. Hồ Chí Minh');

  const addItem = () => {
    setItems([
      ...items,
      { id: Date.now(), service: '', description: '', timeline: '', cost: 0 }
    ]);
  };

  const removeItem = (id: number) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const updateItem = (id: number, field: string, value: string | number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    }));
  };

  const total = items.reduce((sum, item) => sum + Number(item.cost || 0), 0);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    if (!previewRef.current) return;

    const element = previewRef.current;
    
    const opt = {
      margin: 0,
      filename: `GLEADS_Proposal_${quoteNumber}_${new Date().toLocaleDateString('vi-VN').replace(/\//g, '-')}.pdf`,
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        y: 0,
        x: 0,
        scrollY: 0,
        scrollX: 0,
        width: element.scrollWidth,
        height: element.scrollHeight
      },
      jsPDF: { 
        unit: 'mm' as const, 
        format: 'a4' as const, 
        orientation: 'portrait' as const
      },
      pagebreak: { 
        mode: 'css',
        avoid: '.page-break'
      }
    };

    try {
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Có lỗi khi tạo PDF. Vui lòng thử lại.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 border-b border-blue-800 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="w-8 h-8 text-white" />
              <div>
                <h1 className="text-2xl font-bold text-white">GLEADS Proposal Generator</h1>
                <p className="text-blue-100 text-sm">Professional Marketing Proposal Template</p>
              </div>
            </div>
            <button
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 px-6 py-2.5 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium shadow-lg"
            >
              <Download className="w-5 h-5" />
              Tải PDF
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <QuoteForm
            proposalTitle={proposalTitle}
            setProposalTitle={setProposalTitle}
            solutionOverview={solutionOverview}
            setSolutionOverview={setSolutionOverview}
            clientName={clientName}
            setClientName={setClientName}
            clientCompany={clientCompany}
            setClientCompany={setClientCompany}
            clientAddress={clientAddress}
            setClientAddress={setClientAddress}
            clientEmail={clientEmail}
            setClientEmail={setClientEmail}
            clientPhone={clientPhone}
            setClientPhone={setClientPhone}
            quoteNumber={quoteNumber}
            setQuoteNumber={setQuoteNumber}
            quoteDate={quoteDate}
            setQuoteDate={setQuoteDate}
            validUntil={validUntil}
            setValidUntil={setValidUntil}
            items={items}
            updateItem={updateItem}
            addItem={addItem}
            removeItem={removeItem}
            serviceNotes={serviceNotes}
            setServiceNotes={setServiceNotes}
            warrantyPolicy={warrantyPolicy}
            setWarrantyPolicy={setWarrantyPolicy}
            paymentTerms={paymentTerms}
            setPaymentTerms={setPaymentTerms}
            bankInfo={bankInfo}
            setBankInfo={setBankInfo}
          />

          <QuotePreview
            ref={previewRef}
            proposalTitle={proposalTitle}
            solutionOverview={solutionOverview}
            clientName={clientName}
            clientCompany={clientCompany}
            clientAddress={clientAddress}
            clientEmail={clientEmail}
            clientPhone={clientPhone}
            quoteNumber={quoteNumber}
            quoteDate={quoteDate}
            validUntil={validUntil}
            items={items}
            total={total}
            serviceNotes={serviceNotes}
            warrantyPolicy={warrantyPolicy}
            paymentTerms={paymentTerms}
            bankInfo={bankInfo}
          />
        </div>
      </main>

      <style>{`
        /* Normal view styles */
        .page-break {
          margin-bottom: 2rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          position: relative;
          background: white;
        }
        
        /* Ensure all colors and backgrounds render correctly */
        * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          color-adjust: exact !important;
        }
        
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          body {
            margin: 0;
            padding: 0;
          }
          
          .print\\:hidden {
            display: none !important;
          }
          
          .lg\\:grid-cols-2 {
            grid-template-columns: 1fr !important;
          }
          
          .lg\\:grid-cols-2 > *:first-child {
            display: none !important;
          }
          
          .page-break {
            page-break-after: always;
            break-after: page;
            page-break-before: auto;
            break-before: auto;
            margin: 0 !important;
            box-shadow: none !important;
            display: block;
            position: relative;
            overflow: visible;
          }
          
          @page {
            margin: 0;
            size: A4 portrait;
          }
          
          /* Prevent page breaks inside important elements */
          .mb-8, .mb-12, .space-y-4 > div, .space-y-6 > div,
          table, tr, .border, .rounded-lg, .rounded-xl, .rounded-2xl,
          .bg-gradient-to-br, .bg-gradient-to-r,
          [class*="border-l-4"] {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          
          /* Keep service boxes together */
          .grid > div {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          
          /* Keep table rows together */
          tbody tr {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          
          /* Keep sections together */
          h2, h3, h4 {
            page-break-after: avoid !important;
            break-after: avoid !important;
          }
          
          /* Keep signature section together */
          .grid-cols-2 {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          
          /* Ensure gradients and backgrounds print correctly */
          [class*="bg-gradient"],
          [class*="bg-blue"],
          [class*="bg-indigo"],
          [class*="bg-purple"],
          [class*="bg-green"],
          [class*="bg-orange"],
          [class*="bg-cyan"],
          [class*="bg-gray"],
          [class*="bg-yellow"] {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          /* Ensure text colors print correctly */
          [class*="text-white"],
          [class*="text-blue"],
          [class*="text-gray"] {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
