import gleadsLogo from '../assets/gleads logo.webp';

interface TermsPageProps {
  serviceNotes: string;
  warrantyPolicy: string;
  paymentTerms: string;
  bankInfo: string;
}

export default function TermsPage({
  serviceNotes,
  warrantyPolicy,
  paymentTerms,
  bankInfo,
}: TermsPageProps) {
  return (
    <div
      className="page-break terms-page w-[210mm] h-[297mm] bg-white"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'visible',
        padding: '48px',
        boxSizing: 'border-box',
        backgroundColor: '#FDFBF5',
      }}
    >
      {/* Content Wrapper */}
      <div style={{ flex: 1, overflow: 'hidden', paddingBottom: '50px' }}>
        {/* Header */}
        <div className="mb-6">
          <div className="flex justify-between items-center border-b-2 pb-3" style={{ borderBottomColor: '#F6581C' }}>
            <div>
              <img
                src={gleadsLogo}
                alt="Gleads Logo"
                className="h-8 w-auto"
              />
              {/* <p className="text-xs text-gray-600">Marketing & Communications Agency</p> */}
            </div>
            <div className="text-right text-xs text-gray-600">
              <p>Page 4</p>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900">ĐIỀU KHOẢN & CHÍNH SÁCH</h2>
          <p className="text-lg text-gray-600 mt-1">Terms & Policies</p>
        </div>

        {/* Content */}
        <div>
          {/* Service Notes */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
              <span className="bg-blue-600 text-white w-7 h-7 rounded-lg flex items-center justify-center text-xs mr-2">
                01
              </span>
              GHI CHÚ VỀ DỊCH VỤ.
            </h3>
            <p className="text-gray-700 text-xs leading-relaxed whitespace-pre-line">{serviceNotes}</p>
          </div>

          {/* Warranty Policy */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
              <span className="bg-green-600 text-white w-7 h-7 rounded-lg flex items-center justify-center text-xs mr-2">
                02
              </span>
              CHÍNH SÁCH BẢO HÀNH.
            </h3>
            <p className="text-gray-700 text-xs leading-relaxed whitespace-pre-line">{warrantyPolicy}</p>
          </div>

          {/* Payment Terms */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
              <span className="bg-purple-600 text-white w-7 h-7 rounded-lg flex items-center justify-center text-xs mr-2">
                03
              </span>
              PHƯƠNG THỨC THANH TOÁN.
            </h3>
            <p className="text-gray-700 text-xs leading-relaxed whitespace-pre-line">{paymentTerms}</p>
          </div>

          {/* Bank Information */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
              <span className="bg-orange-600 text-white w-7 h-7 rounded-lg flex items-center justify-center text-xs mr-2">
                04
              </span>
              THÔNG TIN TÀI KHOẢN NGÂN HÀNG.
            </h3>
            <p className="text-gray-700 text-xs leading-relaxed whitespace-pre-line font-mono">{bankInfo}</p>
          </div>

          {/* Contact Information */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
              <span className="bg-cyan-600 text-white w-7 h-7 rounded-lg flex items-center justify-center text-xs mr-2">
                05
              </span>
              THÔNG TIN LIÊN HỆ.
            </h3>
            <div style={{ background: 'linear-gradient(to right, #F6581C, #FF895C)' }} className="text-white p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs mb-1" style={{ color: '#FFE5D1' }}>CÔNG TY CỔ PHẦN GLEADS</p>
                  <p className="font-bold text-base mb-2">GLEADS PTE. LTD.</p>
                  <div className="space-y-1 text-xs">
                    <p>
                      📍 <strong>HQ:</strong> 9 Raffles Place, #29-05, Singapore 048619
                    </p>
                    <p>
                      📍 <strong>VN:</strong> 39-41 Ngo Thi Bi St., Ho Chi Minh City
                    </p>
                  </div>
                </div>
                <div className="space-y-1 text-xs">
                  <p>📧 service@gleadsglobal.com</p>
                  <p>📞 (+84)28 6272 2262</p>
                  <p>🌐 www.gleadsglobal.com</p>
                  <p className="mt-2 text-xs" style={{ color: '#FFE5D1' }}>
                    UEN: 202231106G | ISO/IEC 27001
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Signature Section */}
          <div className="mt-6 pt-4 border-t-2 border-gray-300">
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
              XÁC NHẬN và KÝ KẾT
            </h3>
            <div className="grid grid-cols-2 gap-8">
              {/* Client Signature */}
              <div className="text-center">
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 mb-3 h-28 flex items-center justify-center">
                  <p className="text-gray-400 text-sm">Chữ ký khách hàng</p>
                </div>
                <p className="font-bold text-gray-900 text-sm">XÁC NHẬN CỦA KHÁCH HÀNG</p>
                <p className="text-xs text-gray-600 mt-1">(Ký và ghi rõ họ tên)</p>
              </div>

              {/* Company Signature */}
              <div className="text-center">
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 mb-3 h-28 flex items-center justify-center">
                  <p className="text-gray-400 text-sm">Chữ ký & đóng dấu</p>
                </div>
                <p className="font-bold text-gray-900 text-sm">ĐẠI DIỆN NGƯỜI LÀM BÁO GIÁ</p>
                <p className="text-xs text-gray-600 mt-1">(Ký và đóng dấu)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Footer */}
      <div
        style={{
          position: 'absolute',
          bottom: '48px',
          left: '48px',
          right: '48px',
          zIndex: 10,
          backgroundColor: 'white',
        }}
      >
        <div className="border-t-2 border-gray-200 pt-2">
          <div className="text-center text-xs text-gray-500">
            <p>© 2025 GLEADS Pte. Ltd. All rights reserved. | www.gleadsglobal.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
