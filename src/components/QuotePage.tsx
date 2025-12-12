import gleadsLogo from '../assets/gleads logo.webp';

interface Item {
  id: number;
  service: string;
  description: string;
  timeline: string;
  cost: number;
  discountType?: 'percentage' | 'fixed' | 'none';
  discountValue?: number;
}

interface QuotePageProps {
  quoteDate: string;
  validUntil: string;
  items: Item[];
  total: number;
  clientCompany: string;
  pageTitle: string;
}

// Table header component for reuse across pages
const TableHeader = () => (
  <thead>
    <tr style={{ background: '#F6581C' }}>
      <th
        className="text-left p-3 font-bold border"
        style={{ width: '50%', borderColor: '#F6581C' }}
      >
        THÔNG TIN DỊCH VỤ
        {/* <div className="text-xs font-normal mt-0.5" style={{ color: '#FFE5D1' }}>Service Information</div> */}
      </th>
      <th
        className="text-center p-3 font-bold border"
        style={{ width: '25%', borderColor: '#F6581C' }}
      >
        THỜI GIAN
        {/* <div className="text-xs font-normal mt-0.5" style={{ color: '#FFE5D1' }}>Timeline</div> */}
      </th>
      <th
        className="text-right p-3 font-bold border"
        style={{ width: '25%', borderColor: '#F6581C' }}
      >
        CHI PHÍ (VNĐ)
        {/* <div className="text-xs font-normal mt-0.5" style={{ color: '#FFE5D1' }}>Cost</div> */}
      </th>
    </tr>
  </thead>
);

// Component for page header
const PageHeader = ({ pageNum }: { pageNum: number }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center border-b-2 border-blue-600 pb-3">
      <div>
        <img
          src={gleadsLogo}
          alt="Gleads Logo"
          className="h-8 w-auto"
        />
        {/* <p className="text-xs text-gray-600">Marketing & Communications Agency</p> */}
      </div>
      <div className="text-right text-xs text-gray-600">
        <p>Page {pageNum}</p>
      </div>
    </div>
  </div>
);

// Component for table row
const TableRow = ({ item, index }: { item: Item; index: number }) => (
  <tr className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} style={{ pageBreakInside: 'avoid', breakInside: 'avoid' }}>
    <td className="p-3 border border-gray-300 align-top" style={{ wordWrap: 'break-word', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
      <p className="font-bold text-gray-900 mb-1 text-sm" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
        {item.service || `Dịch vụ ${index + 1}`}
      </p>
      <p className="text-xs text-gray-600 leading-relaxed" style={{ wordWrap: 'break-word', overflowWrap: 'break-word', whiteSpace: 'pre-wrap' }}>
        {item.description || 'Mô tả dịch vụ chi tiết'}
      </p>
    </td>
    <td className="p-3 border border-gray-300 text-center align-top" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
      <p className="text-gray-900 text-sm">{item.timeline || 'Không có'}</p>
    </td>
    <td className="p-3 border border-gray-300 text-right align-top" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
      <p className="font-bold text-gray-900 text-sm">
        {Number(item.cost || 0).toLocaleString('vi-VN')}
      </p>
    </td>
  </tr>
);

export default function QuotePage({
  quoteDate,
  validUntil,
  items,
  total,
  clientCompany,
  pageTitle,
}: QuotePageProps) {
  // Constants for page layout (in mm)
  const PAGE_HEIGHT_MM = 297;
  const PADDING_MM = 12.7; // 48px ≈ 12.7mm
  const HEADER_HEIGHT_MM = 25;
  const FOOTER_HEIGHT_MM = 15; // Footer actual height: border + padding + text
  const TITLE_SECTION_HEIGHT_MM = 40; // Title + quote info on first page
  const TABLE_HEADER_HEIGHT_MM = 18;
  const NOTE_HEIGHT_MM = 22;
  const TOTAL_ROW_HEIGHT_MM = 18;
  const SAFETY_MARGIN_MM = 25; // Extra buffer to ensure footer fits

  // Available height for table rows - MUST leave room for footer
  const FIRST_PAGE_AVAILABLE_HEIGHT = PAGE_HEIGHT_MM - (PADDING_MM * 2) - HEADER_HEIGHT_MM - TITLE_SECTION_HEIGHT_MM - TABLE_HEADER_HEIGHT_MM - FOOTER_HEIGHT_MM - NOTE_HEIGHT_MM - TOTAL_ROW_HEIGHT_MM - SAFETY_MARGIN_MM;
  const OTHER_PAGE_AVAILABLE_HEIGHT = PAGE_HEIGHT_MM - (PADDING_MM * 2) - HEADER_HEIGHT_MM - TABLE_HEADER_HEIGHT_MM - FOOTER_HEIGHT_MM - SAFETY_MARGIN_MM;  // Estimate row height based on description length
  // More conservative estimate to avoid overflow
  const estimateRowHeight = (item: Item): number => {
    const serviceNameHeight = 10; // mm for service name + margin
    const description = item.description || '';
    // Count newlines and estimate wrapped lines
    const explicitLines = (description.match(/\n/g) || []).length + 1;
    const charsPerLine = 50; // Conservative estimate (lower than 60)
    const wrappedLines = Math.ceil(description.length / charsPerLine);
    const totalLines = Math.max(explicitLines, wrappedLines);
    const descriptionHeight = totalLines * 5.5; // 5.5mm per line (more spacing)
    const padding = 8; // top + bottom padding
    return serviceNameHeight + descriptionHeight + padding;
  };

  // Distribute items across pages
  const pages: { items: Item[]; isFirstPage: boolean; isLastPage: boolean }[] = [];
  let currentPageItems: Item[] = [];
  let currentPageHeight = 0;
  let availableHeight = FIRST_PAGE_AVAILABLE_HEIGHT;

  items.forEach((item) => {
    const rowHeight = estimateRowHeight(item);

    // Check if row fits in current page
    if (currentPageHeight + rowHeight > availableHeight && currentPageItems.length > 0) {
      // Save current page and start new page
      pages.push({
        items: currentPageItems,
        isFirstPage: pages.length === 0,
        isLastPage: false,
      });
      currentPageItems = [item];
      currentPageHeight = rowHeight;
      availableHeight = OTHER_PAGE_AVAILABLE_HEIGHT;
    } else {
      // Add to current page
      currentPageItems.push(item);
      currentPageHeight += rowHeight;
    }
  });

  // Add last page
  if (currentPageItems.length > 0) {
    pages.push({
      items: currentPageItems,
      isFirstPage: pages.length === 0,
      isLastPage: true,
    });
  }

  // Mark last page
  if (pages.length > 0) {
    pages[pages.length - 1].isLastPage = true;
  }

  const pageComponents = [];
  let itemIndexOffset = 0;

  for (let pageIndex = 0; pageIndex < pages.length; pageIndex++) {
    const page = pages[pageIndex];
    const isFirstPage = page.isFirstPage;
    const isLastPage = page.isLastPage;

    pageComponents.push(
      <div key={pageIndex} className={`page-break quote-page-start ${isFirstPage ? 'first-quote-page' : ''} w-[210mm] h-[297mm] bg-white`} style={{ position: 'relative', padding: '48px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', pageBreakInside: 'avoid', backgroundColor: '#FDFBF5' }}>
        {/* Page Header */}
        <PageHeader pageNum={3 + pageIndex} />

        {/* Title - Only on first page */}
        {isFirstPage && (
          <>
            <div className="mb-5">
              <h2 className="text-3xl font-bold text-gray-900">{pageTitle}</h2>
              {/* <p className="text-lg text-gray-600 mt-1">Detailed Quotation</p> */}
            </div>

            {/* Quote Info */}
            <div className="grid grid-cols-3 gap-4 mb-5">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-600 mb-1">Khách hàng</p>
                <p className="font-bold text-gray-900 text-sm">{clientCompany || 'Tên công ty'}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-600 mb-1">Ngày báo giá</p>
                <p className="font-bold text-gray-900 text-sm">
                  {new Date(quoteDate).toLocaleDateString('vi-VN', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  })}
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-600 mb-1">Hiệu lực đến</p>
                <p className="font-bold text-gray-900 text-sm">
                  {validUntil
                    ? new Date(validUntil).toLocaleDateString('vi-VN', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                    })
                    : 'Không có'}
                </p>
              </div>
            </div>
          </>
        )}

        {/* Content Wrapper - flex-1 to fill space */}
        <div className="quote-content-wrapper" style={{ flex: 1, overflow: 'visible' }}>
          {/* Quote Table */}
          <div className="mb-5">
            <table className="w-full border-collapse text-sm quote-table" style={{ tableLayout: 'fixed' }}>
              <TableHeader />
              <tbody>
                {page.items.map((item, index) => (
                  <TableRow key={item.id} item={item} index={itemIndexOffset + index} />
                ))}

                {/* Subtotal and Discount - Only on last page */}
                {isLastPage && (() => {
                  const subtotal = items.reduce((sum, i) => sum + (Number(i.cost) || 0), 0);
                  const totalDiscount = items.reduce((sum, i) => {
                    const cost = Number(i.cost) || 0;
                    let discount = 0;
                    if (i.discountType === 'percentage' && i.discountValue) {
                      discount = (cost * i.discountValue) / 100;
                    } else if (i.discountType === 'fixed' && i.discountValue) {
                      discount = i.discountValue;
                    }
                    return sum + discount;
                  }, 0);

                  return (
                    <>
                      {totalDiscount > 0 && (
                        <>
                          <tr className="bg-gray-50" style={{ pageBreakInside: 'avoid', breakInside: 'avoid' }}>
                            <td className="p-3 border border-gray-300 font-semibold text-gray-900" colSpan={2}>
                              Tổng trước chiết khấu
                              <div className="text-xs font-normal text-gray-600">Subtotal</div>
                            </td>
                            <td className="p-3 border border-gray-300 text-right">
                              <p className="font-semibold text-gray-900 text-sm">
                                {subtotal.toLocaleString('vi-VN')} VNĐ
                              </p>
                            </td>
                          </tr>
                          <tr className="bg-red-50" style={{ pageBreakInside: 'avoid', breakInside: 'avoid' }}>
                            <td className="p-3 border border-gray-300 font-semibold text-gray-900" colSpan={2}>
                              Chiết khấu
                              <div className="text-xs font-normal text-gray-600">Discount</div>
                            </td>
                            <td className="p-3 border border-gray-300 text-right">
                              <p className="font-semibold text-red-600 text-sm">
                                -{totalDiscount.toLocaleString('vi-VN')} VNĐ
                              </p>
                            </td>
                          </tr>
                        </>
                      )}
                      <tr className="bg-gradient-to-r from-blue-50 to-indigo-50 total-row" style={{ pageBreakInside: 'avoid', breakInside: 'avoid' }}>
                        <td className="p-3 border border-gray-300 font-bold text-gray-900" colSpan={2}>
                          TỔNG CHI PHÍ DỰ KIẾN
                          {/* <div className="text-xs font-normal text-gray-600">Total Estimated Cost</div> */}
                        </td>
                        <td className="p-3 border border-gray-300 text-right">
                          <p className="text-xl font-bold text-black">
                            {total.toLocaleString('vi-VN')} VNĐ
                          </p>
                        </td>
                      </tr>
                    </>
                  );
                })()}
              </tbody>
            </table>
          </div>

          {/* Note removed as requested */}

        </div>
        {/* End Content Wrapper */}

        {/* Footer - At bottom of flex container */}
        <div
          className="quote-footer"
          style={{
            marginTop: 'auto',
            borderTop: '2px solid #e5e7eb',
            paddingTop: '12px',
            pageBreakInside: 'avoid',
            breakInside: 'avoid',
          }}
        >
          <div className="flex justify-between items-center text-xs text-gray-600">
            <p>© 2025 GLEADS Pte. Ltd. All rights reserved.</p>
            <p>www.gleadsglobal.com | service@gleadsglobal.com</p>
          </div>
        </div>
      </div>
    );

    itemIndexOffset += page.items.length;
  }

  return <>{pageComponents}</>;
}
