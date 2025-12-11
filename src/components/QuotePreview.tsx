import { forwardRef } from 'react';
import CoverPage from './CoverPage';
import AboutPage from './AboutPage';
import QuotePage from './QuotePage';
import TermsPage1 from './TermsPage1';
import TermsPage2 from './TermsPage2';
import ContactPage from './ContactPage';

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
  aboutGleads: string;
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
  aboutGleads,
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
      <AboutPage aboutGleads={aboutGleads} />

      {/* Page 3: Quote Details */}
      <QuotePage
        quoteNumber={quoteNumber}
        quoteDate={quoteDate}
        validUntil={validUntil}
        items={items}
        total={total}
        clientCompany={clientCompany}
      />

      {/* Page 4: Terms and Policies - Part 1 */}
      <TermsPage1
        serviceNotes={serviceNotes}
        warrantyPolicy={warrantyPolicy}
      />

      {/* Page 5: Terms and Policies - Part 2 */}
      <TermsPage2
        paymentTerms={paymentTerms}
        bankInfo={bankInfo}
      />

      {/* Page 6: Contact Information */}
      <ContactPage />
    </div>
  );
});

export default QuotePreview;
