import { Plus, Trash2 } from 'lucide-react';

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
  clientName: string;
  setClientName: (value: string) => void;
  clientCompany: string;
  setClientCompany: (value: string) => void;
  clientAddress: string;
  setClientAddress: (value: string) => void;
  clientEmail: string;
  setClientEmail: (value: string) => void;
  clientPhone: string;
  setClientPhone: (value: string) => void;
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
  clientName,
  setClientName,
  clientCompany,
  setClientCompany,
  clientAddress,
  setClientAddress,
  clientEmail,
  setClientEmail,
  clientPhone,
  setClientPhone,
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
  return (
    <div className="space-y-6 print:hidden">
      <div className="bg-white rounded-xl shadow-sm border border-blue-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-2">1</span>
          Thông Tin Proposal
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Tiêu đề Proposal</label>
            <input
              type="text"
              value={proposalTitle}
              onChange={(e) => setProposalTitle(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="VD: Digital Marketing Solution Proposal"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Tổng quan giải pháp</label>
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
          <span className="bg-purple-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-2">📝</span>
          Tiêu Đề Các Trang
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Tiêu đề Page 2 - Về GLEADS</label>
            <input
              type="text"
              value={aboutPageTitle}
              onChange={(e) => setAboutPageTitle(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              placeholder="VỀ GLEADS"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Tiêu đề Page 3 - Báo giá</label>
            <input
              type="text"
              value={quotePageTitle}
              onChange={(e) => setQuotePageTitle(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              placeholder="BÁO GIÁ CHI TIẾT."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Tiêu đề Page 4 - Ghi chú & Bảo hành</label>
            <input
              type="text"
              value={termsPageTitle}
              onChange={(e) => setTermsPageTitle(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              placeholder="GHI CHÚ và CHÍNH SÁCH BẢO HÀNH."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Tiêu đề Page 5 - Thanh toán</label>
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
          Thông Tin Công Ty (Custom theo loại dịch vụ)
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Loại dịch vụ <span className="text-red-500">*</span>
            </label>
            <select
              value={serviceType}
              onChange={(e) => handleServiceTypeChange(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
            >
              <option value="custom">Tùy chỉnh (nhập thủ công)</option>
              <option value="content">Dịch vụ nội dung số</option>
              <option value="design">Dịch vụ thiết kế </option>
              <option value="website">Dịch vụ thiết kế website</option>
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
          Thông Tin Khách Hàng
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Tên công ty khách hàng</label>
            <input
              type="text"
              value={clientCompany}
              onChange={(e) => setClientCompany(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="ABC Corporation"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Tên người liên hệ</label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Nguyễn Văn A"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Địa chỉ</label>
            <input
              type="text"
              value={clientAddress}
              onChange={(e) => setClientAddress(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="123 Đường ABC, Quận XYZ, TP. HCM"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input
                type="email"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="contact@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Số điện thoại</label>
              <input
                type="text"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="0912 345 678"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-blue-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-2">5</span>
          Chi Tiết Báo Giá
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Ngày báo giá</label>
            <input
              type="date"
              value={quoteDate}
              onChange={(e) => setQuoteDate(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Hiệu lực đến</label>
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
            <span className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-2">4</span>
            Dịch Vụ
          </h2>
          <button
            onClick={addItem}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            <Plus className="w-4 h-4" />
            Thêm Dịch Vụ
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
                <label className="block text-sm font-medium text-slate-700 mb-1">Tên dịch vụ</label>
                <input
                  type="text"
                  value={item.service}
                  onChange={(e) => updateItem(item.id, 'service', e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="VD: SEO Tổng Thể, Performance Ads..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Mô tả chi tiết</label>
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
                  <label className="block text-sm font-medium text-slate-700 mb-1">Thời gian thực hiện</label>
                  <input
                    type="text"
                    value={item.timeline}
                    onChange={(e) => updateItem(item.id, 'timeline', e.target.value)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="VD: 3 tháng, 6 tháng..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Chi phí (VNĐ)</label>
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
                  <label className="block text-sm font-medium text-slate-700 mb-1">Loại chiết khấu</label>
                  <select
                    value={item.discountType || 'none'}
                    onChange={(e) => updateItem(item.id, 'discountType', e.target.value)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="none">Không chiết khấu</option>
                    <option value="percentage">Phần trăm (%)</option>
                    <option value="fixed">Số tiền cố định (VNĐ)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    {item.discountType === 'percentage' ? 'Giá trị (%)' : 'Giá trị (VNĐ)'}
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
          <span className="bg-orange-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-2">6</span>
          Thông Tin Chung (Page 4)
        </h2>
        <p className="text-xs text-gray-500 mb-4">
          ℹ️ Các thông tin này không phụ thuộc vào loại dịch vụ và sẽ hiển thị ở trang 4
        </p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Phương thức thanh toán.</label>
            <textarea
              value={paymentTerms}
              onChange={(e) => setPaymentTerms(e.target.value)}
              rows={3}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
              placeholder="Các đợt thanh toán..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Thông tin tài khoản ngân hàng</label>
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
