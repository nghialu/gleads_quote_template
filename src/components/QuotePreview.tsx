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
  discountType?: 'percentage' | 'fixed' | 'none';
  discountValue?: number;
}

interface QuotePreviewProps {
  proposalTitle: string;
  solutionOverview: string;
  clientName: string;
  clientCompany: string;
  clientAddress: string;
  clientEmail: string;
  clientPhone: string;
  quoteDate: string;
  validUntil: string;
  items: Item[];
  total: number;
  aboutGleads: string;
  serviceNotes: string;
  warrantyPolicy: string;
  paymentTerms: string;
  bankInfo: string;
  serviceType: string;
  aboutPageTitle: string;
  quotePageTitle: string;
  termsPageTitle: string;
  paymentPageTitle: string;
}

const QuotePreview = forwardRef<HTMLDivElement, QuotePreviewProps>(function QuotePreview({
  proposalTitle,
  solutionOverview,
  clientName,
  clientCompany,
  clientAddress,
  clientEmail,
  clientPhone,
  quoteDate,
  validUntil,
  items,
  total,
  aboutGleads,
  serviceNotes,
  warrantyPolicy,
  paymentTerms,
  bankInfo,
  serviceType,
  aboutPageTitle,
  quotePageTitle,
  termsPageTitle,
  paymentPageTitle,
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

      {/* Page 2: About Gleads - Only show if content exists */}
      {aboutGleads && <AboutPage aboutGleads={aboutGleads} serviceType={serviceType} pageTitle={aboutPageTitle} />}

      {/* Page 3: Quote Details */}
      <QuotePage
        quoteDate={quoteDate}
        validUntil={validUntil}
        items={items}
        total={total}
        clientCompany={clientCompany}
        pageTitle={quotePageTitle}
      />

      {/* Page 4: Terms and Policies - Part 1 */}
      <TermsPage1
        serviceNotes={serviceNotes}
        warrantyPolicy={warrantyPolicy}
        serviceType={serviceType}
        pageTitle={termsPageTitle}
      />

      {/* Page 5: Terms and Policies - Part 2 */}
      <TermsPage2
        paymentTerms={paymentTerms}
        bankInfo={bankInfo}
        pageTitle={paymentPageTitle}
      />

      {/* Page 6: Contact Information */}
      <ContactPage />
    </div>
  );
});

export default QuotePreview;
