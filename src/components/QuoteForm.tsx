import { Plus, Trash2, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Item {
  id: number;
  service: string;
  description: string;
  timeline: string;
  cost: number;
  discountType?: 'percentage' | 'fixed' | 'none';
  discountValue?: number;
}

interface QuoteFormProps {
  proposalTitle: string;
  setProposalTitle: (value: string) => void;
  solutionOverview: string;
  setSolutionOverview: (value: string) => void;
  clientCompany: string;
  setClientCompany: (value: string) => void;
  companyEmail: string;
  setCompanyEmail: (value: string) => void;
  quoteDate: string;
  setQuoteDate: (value: string) => void;
  validUntil: string;
  setValidUntil: (value: string) => void;
  items: Item[];
  updateItem: (id: number, field: string, value: string | number) => void;
  addItem: () => void;
  removeItem: (id: number) => void;
  serviceType: string;
  handleServiceTypeChange: (type: string) => void;
  aboutGleads: string;
  setAboutGleads: (value: string) => void;
  serviceNotes: string;
  setServiceNotes: (value: string) => void;
  warrantyPolicy: string;
  setWarrantyPolicy: (value: string) => void;
  paymentTerms: string;
  setPaymentTerms: (value: string) => void;
  bankInfo: string;
  setBankInfo: (value: string) => void;
  aboutPageTitle: string;
  setAboutPageTitle: (value: string) => void;
  quotePageTitle: string;
  setQuotePageTitle: (value: string) => void;
  termsPageTitle: string;
  setTermsPageTitle: (value: string) => void;
  paymentPageTitle: string;
  setPaymentPageTitle: (value: string) => void;
}

export default function QuoteForm({
  proposalTitle,
  setProposalTitle,
  solutionOverview,
  setSolutionOverview,
  clientCompany,
  setClientCompany,
  companyEmail,
  setCompanyEmail,
  quoteDate,
  setQuoteDate,
  validUntil,
  setValidUntil,
  items,
  updateItem,
  addItem,
  removeItem,
  serviceType,
  handleServiceTypeChange,
  aboutGleads,
  setAboutGleads,
  serviceNotes,
  setServiceNotes,
  warrantyPolicy,
  setWarrantyPolicy,
  paymentTerms,
  setPaymentTerms,
  bankInfo,
  setBankInfo,
  aboutPageTitle,
  setAboutPageTitle,
  quotePageTitle,
  setQuotePageTitle,
  termsPageTitle,
  setTermsPageTitle,
  paymentPageTitle,
  setPaymentPageTitle,
}: QuoteFormProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="space-y-6 print:hidden">
      {/* Language Toggle */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Globe className="w-6 h-6" />
            <div>
              <h2 className="text-xl font-bold">{t.form.language}</h2>
              <p className="text-sm text-blue-100 mt-1">
                {language === 'vi' ? 'Chuyển sang tiếng Anh để tạo proposal quốc tế' : 'Switch to Vietnamese for local proposals'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white bg-opacity-20 rounded-lg p-1">
            <button
              onClick={() => setLanguage('vi')}
              className={`px-6 py-2 rounded-md font-semibold transition-all ${language === 'vi'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-white hover:bg-white hover:bg-opacity-10'
                }`}
            >
              VN Tiếng Việt
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-6 py-2 rounded-md font-semibold transition-all ${language === 'en'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-white hover:bg-white hover:bg-opacity-10'
                }`}
            >
              EN English
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-blue-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-2">1</span>
          {t.form.proposalDetails}
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">{t.form.proposalTitle}</label>
            <input
              type="text"
              value={proposalTitle}
              onChange={(e) => setProposalTitle(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="VD: Digital Marketing Solution Proposal"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">{t.form.solutionOverview}</label>
            <textarea
              value={solutionOverview}
              onChange={(e) => setSolutionOverview(e.target.value)}
              rows={3}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
              placeholder="Mô tả tổng quan về giải pháp cung cấp cho khách hàng..."
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-purple-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span className="bg-purple-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-2">2</span>
          {t.form.pageHeadings}
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">{t.form.aboutPageTitle}</label>
            <input
              type="text"
              value={aboutPageTitle}
              onChange={(e) => setAboutPageTitle(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              placeholder="VỀ GLEADS"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">{t.form.quotePageTitle}</label>
            <input
              type="text"
              value={quotePageTitle}
              onChange={(e) => setQuotePageTitle(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              placeholder="BÁO GIÁ CHI TIẾT."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">{t.form.termsPageTitle}</label>
            <input
              type="text"
              value={termsPageTitle}
              onChange={(e) => setTermsPageTitle(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              placeholder="GHI CHÚ và CHÍNH SÁCH BẢO HÀNH."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">{t.form.paymentPageTitle}</label>
            <input
              type="text"
              value={paymentPageTitle}
              onChange={(e) => setPaymentPageTitle(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              placeholder="THANH TOÁN và XÁC NHẬN."
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-green-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span className="bg-green-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-2">3</span>
          {t.form.aboutGleads}
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              {t.form.serviceType} <span className="text-red-500">*</span>
            </label>
            <select
              value={serviceType}
              onChange={(e) => handleServiceTypeChange(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
            >
              <option value="custom">{t.form.custom}</option>
              <option value="content">{t.form.content}</option>
              <option value="design">{t.form.design}</option>
              <option value="website">{t.form.website}</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">
              ⚡ Chọn loại dịch vụ để tự động điền nội dung mẫu cho các trường bên dưới
            </p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-sm font-medium text-slate-700">
                Về GLEADS (Page 2)
              </label>
              <button
                onClick={() => setAboutGleads('')}
                className="text-gray-400 hover:text-red-500 transition-colors"
                title="Xóa nội dung"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <textarea
              value={aboutGleads}
              onChange={(e) => setAboutGleads(e.target.value)}
              rows={5}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-none"
              placeholder="Giới thiệu về công ty, năng lực và định hướng..."
            />
            <p className="text-xs text-gray-500 mt-1">
              📄 Hiển thị ở trang 2 - Về GLEADS
            </p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-sm font-medium text-slate-700">
                Ghi chú về dịch vụ (Page 4)
              </label>
              <button
                onClick={() => setServiceNotes('')}
                className="text-gray-400 hover:text-red-500 transition-colors"
                title="Xóa nội dung"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <textarea
              value={serviceNotes}
              onChange={(e) => setServiceNotes(e.target.value)}
              rows={3}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-none"
              placeholder="Cam kết và ghi chú về dịch vụ..."
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-sm font-medium text-slate-700">
                Chính sách bảo hành (Page 4)
              </label>
              <button
                onClick={() => setWarrantyPolicy('')}
                className="text-gray-400 hover:text-red-500 transition-colors"
                title="Xóa nội dung"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <textarea
              value={warrantyPolicy}
              onChange={(e) => setWarrantyPolicy(e.target.value)}
              rows={3}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-none"
              placeholder="Chi tiết chính sách bảo hành..."
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-blue-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-2">4</span>
          {t.form.clientInfo}
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">{t.form.clientCompany}</label>
            <input
              type="text"
              value={clientCompany}
              onChange={(e) => setClientCompany(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="ABC Corporation"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-orange-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span className="bg-orange-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-2">📧</span>
          {t.form.companyInfo}
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">{t.form.companyEmail}</label>
            <input
              type="email"
              value={companyEmail}
              onChange={(e) => setCompanyEmail(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
              placeholder="service@gleadsglobal.com"
            />
            <p className="text-xs text-gray-500 mt-1">Email này sẽ hiển thị ở footer của tất cả các trang trong PDF</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-blue-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-2">5</span>
          {t.form.quoteDetails}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">{t.form.quoteDate}</label>
            <input
              type="date"
              value={quoteDate}
              onChange={(e) => setQuoteDate(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">{t.form.validUntil}</label>
            <input
              type="date"
              value={validUntil}
              onChange={(e) => setValidUntil(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-blue-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center">
            <span className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-2">6</span>
            {t.form.serviceItems}
          </h2>
          <button
            onClick={addItem}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            <Plus className="w-4 h-4" />
            {t.form.addItem}
          </button>
        </div>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={item.id} className="border border-blue-200 rounded-lg p-4 space-y-3 bg-blue-50/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-blue-600">Dịch vụ {index + 1}</span>
                {items.length > 1 && (
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-600 hover:text-red-700 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{t.form.serviceName}</label>
                <input
                  type="text"
                  value={item.service}
                  onChange={(e) => updateItem(item.id, 'service', e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="VD: SEO Tổng Thể, Performance Ads..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{t.form.description}</label>
                <textarea
                  value={item.description}
                  onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                  rows={2}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  placeholder="Mô tả chi tiết về dịch vụ..."
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t.form.timeline}</label>
                  <input
                    type="text"
                    value={item.timeline}
                    onChange={(e) => updateItem(item.id, 'timeline', e.target.value)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="VD: 3 tháng, 6 tháng..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t.form.cost}</label>
                  <input
                    type="number"
                    min="0"
                    value={item.cost}
                    onChange={(e) => updateItem(item.id, 'cost', Number(e.target.value))}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="0"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t.form.discountType}</label>
                  <select
                    value={item.discountType || 'none'}
                    onChange={(e) => updateItem(item.id, 'discountType', e.target.value)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="none">{t.form.none}</option>
                    <option value="percentage">{t.form.percentage}</option>
                    <option value="fixed">{t.form.fixed}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    {t.form.discountValue}
                  </label>
                  <input
                    type="number"
                    min="0"
                    max={item.discountType === 'percentage' ? '100' : undefined}
                    value={item.discountValue || 0}
                    onChange={(e) => updateItem(item.id, 'discountValue', Number(e.target.value))}
                    disabled={!item.discountType || item.discountType === 'none'}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-orange-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span className="bg-orange-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-2">7</span>
          {t.form.termsAndConditions}
        </h2>
        <p className="text-xs text-gray-500 mb-4">
          ℹ️ Các thông tin này không phụ thuộc vào loại dịch vụ và sẽ hiển thị ở trang 4
        </p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">{t.form.paymentTerms}</label>
            <textarea
              value={paymentTerms}
              onChange={(e) => setPaymentTerms(e.target.value)}
              rows={3}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
              placeholder="Các đợt thanh toán..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">{t.form.bankInfo}</label>
            <textarea
              value={bankInfo}
              onChange={(e) => setBankInfo(e.target.value)}
              rows={4}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none font-mono text-sm"
              placeholder="Thông tin tài khoản ngân hàng..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
