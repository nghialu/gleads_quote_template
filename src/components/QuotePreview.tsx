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
  clientCompany: string;
  quoteDate: string;
  validUntil: string;
  items: Item[];
  total: number;
  aboutGleads: string;
  serviceNotes: string;
  warrantyPolicy: string;
  paymentTerms: string;
  bankInfo: string;
  companyEmail: string;
  serviceType: string;
  aboutPageTitle: string;
  quotePageTitle: string;
  termsPageTitle: string;
  paymentPageTitle: string;
}

const QuotePreview = forwardRef<HTMLDivElement, QuotePreviewProps>(function QuotePreview({
  proposalTitle,
  solutionOverview,
  clientCompany,
  quoteDate,
  validUntil,
  items,
  total,
  aboutGleads,
  serviceNotes,
  warrantyPolicy,
  paymentTerms,
  bankInfo,
  companyEmail,
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
        quoteDate={quoteDate}
      />

      {/* Page 2: About Gleads - Only show if content exists */}
      {aboutGleads && <AboutPage aboutGleads={aboutGleads} pageTitle={aboutPageTitle} companyEmail={companyEmail} />}

      {/* Page 3: Quote Details */}
      <QuotePage
        quoteDate={quoteDate}
        validUntil={validUntil}
        items={items}
        total={total}
        clientCompany={clientCompany}
        pageTitle={quotePageTitle}
        companyEmail={companyEmail}
      />

      {/* Page 4: Terms and Policies - Part 1 */}
      <TermsPage1
        serviceNotes={serviceNotes}
        warrantyPolicy={warrantyPolicy}
        serviceType={serviceType}
        pageTitle={termsPageTitle}
        companyEmail={companyEmail}
      />

      {/* Page 5: Terms and Policies - Part 2 */}
      <TermsPage2
        paymentTerms={paymentTerms}
        bankInfo={bankInfo}
        pageTitle={paymentPageTitle}
        companyEmail={companyEmail}
      />

      {/* Page 6: Contact Information */}
      <ContactPage companyEmail={companyEmail} />
    </div>
  );
});

export default QuotePreview;
