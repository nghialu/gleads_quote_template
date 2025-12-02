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
    <div className="page-break w-[210mm] h-[297mm] bg-white px-12 py-8 flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <div className="flex justify-between items-center border-b-2 border-blue-600 pb-3">
          <div>
            <h1 className="text-xl font-bold text-blue-600">GLEADS</h1>
            <p className="text-xs text-gray-600">Marketing & Communications Agency</p>
          </div>
          <div className="text-right text-xs text-gray-600">
            <p>Page 4</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
      {/* Service Notes */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
          <span className="bg-blue-600 text-white w-7 h-7 rounded-lg flex items-center justify-center text-xs mr-2">
            01
          </span>
          GHI CHÚ VỀ DỊCH VỤ
        </h3>
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
          <p className="text-gray-700 text-xs leading-relaxed whitespace-pre-line">{serviceNotes}</p>
        </div>
      </div>

      {/* Warranty Policy */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
          <span className="bg-green-600 text-white w-7 h-7 rounded-lg flex items-center justify-center text-xs mr-2">
            02
          </span>
          CHÍNH SÁCH BẢO HÀNH
        </h3>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
          <p className="text-gray-700 text-xs leading-relaxed whitespace-pre-line">{warrantyPolicy}</p>
        </div>
      </div>

      {/* Payment Terms */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
          <span className="bg-purple-600 text-white w-7 h-7 rounded-lg flex items-center justify-center text-xs mr-2">
            03
          </span>
          PHƯƠNG THỨC THANH TOÁN
        </h3>
        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
          <p className="text-gray-700 text-xs leading-relaxed whitespace-pre-line">{paymentTerms}</p>
        </div>
      </div>

      {/* Bank Information */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
          <span className="bg-orange-600 text-white w-7 h-7 rounded-lg flex items-center justify-center text-xs mr-2">
            04
          </span>
          THÔNG TIN TÀI KHOẢN NGÂN HÀNG
        </h3>
        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
          <p className="text-gray-700 text-xs leading-relaxed whitespace-pre-line font-mono">
            {bankInfo}
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
          <span className="bg-cyan-600 text-white w-7 h-7 rounded-lg flex items-center justify-center text-xs mr-2">
            05
          </span>
          THÔNG TIN LIÊN HỆ
        </h3>
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-blue-100 text-xs mb-1">CÔNG TY CỔ PHẦN GLEADS</p>
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
              <p>📞 +65 3138 1666</p>
              <p>🌐 www.gleadsglobal.com</p>
              <p className="mt-2 text-xs text-blue-200">
                UEN: 202231106G | ISO/IEC 27001
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Signature Section */}
      <div className="mt-6 pt-4 border-t-2 border-gray-300">
        <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
          XÁC NHẬN & KÝ KẾT
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
            <p className="font-bold text-gray-900 text-sm">ĐẠI DIỆN CÔNG TY CỔ PHẦN GLEADS</p>
            <p className="text-xs text-gray-600 mt-1">(Ký và đóng dấu)</p>
          </div>
        </div>
      </div>
      </div>

      {/* Footer */}
      <div className="mt-3 border-t-2 border-gray-200 pt-2">
        <div className="text-center text-xs text-gray-500">
          <p>© 2025 GLEADS Pte. Ltd. All rights reserved. | www.gleadsglobal.com</p>
        </div>
      </div>
    </div>
  );
}
