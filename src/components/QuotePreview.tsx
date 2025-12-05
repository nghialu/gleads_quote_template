import { forwardRef } from 'react';
import CoverPage from './CoverPage';
import AboutPage from './AboutPage';
import QuotePage from './QuotePage';
import TermsPage from './TermsPage';

interface Item {
  id: number;
  service: string;
  description: string;
  timeline: string;
  cost: number;
}

interface QuotePreviewProps {
  proposalTitle: string;
  solutionOverview: string;
  clientName: string;
  clientCompany: string;
  clientAddress: string;
  clientEmail: string;
  clientPhone: string;
  quoteNumber: string;
  quoteDate: string;
  validUntil: string;
  items: Item[];
  total: number;
  serviceNotes: string;
  warrantyPolicy: string;
  paymentTerms: string;
  bankInfo: string;
}

const QuotePreview = forwardRef<HTMLDivElement, QuotePreviewProps>(function QuotePreview({
  proposalTitle,
  solutionOverview,
  clientName,
  clientCompany,
  clientAddress,
  clientEmail,
  clientPhone,
  quoteNumber,
  quoteDate,
  validUntil,
  items,
  total,
  serviceNotes,
  warrantyPolicy,
  paymentTerms,
  bankInfo,
}, ref) {
  return (
    <div ref={ref} className="w-full mx-auto bg-white" style={{ width: '210mm' }}>
      {/* Page 1: Cover Page */}
      <CoverPage
        proposalTitle={proposalTitle}
        solutionOverview={solutionOverview}
        clientCompany={clientCompany}
        clientName={clientName}
        quoteDate={quoteDate}
      />

      {/* Page 2: About Gleads */}
      <AboutPage />

      {/* Page 3: Quote Details */}
      <QuotePage
        quoteNumber={quoteNumber}
        quoteDate={quoteDate}
        validUntil={validUntil}
        items={items}
        total={total}
        clientCompany={clientCompany}
      />

      {/* Page 4: Terms and Signature */}
      <TermsPage
        serviceNotes={serviceNotes}
        warrantyPolicy={warrantyPolicy}
        paymentTerms={paymentTerms}
        bankInfo={bankInfo}
      />
    </div>
  );
});

export default QuotePreview;
