import gleadsLogo from '../assets/gleads logo.webp';
import { useLanguage } from '../contexts/LanguageContext';

interface AboutPageProps {
  aboutGleads: string;
  pageTitle: string;
  companyEmail: string;
}

export default function AboutPage({ aboutGleads, pageTitle, companyEmail }: AboutPageProps) {
  const { t } = useLanguage();

  return (
    <div className="page-break w-[210mm] h-[297mm] bg-white" style={{ position: 'relative', padding: '48px', boxSizing: 'border-box', overflow: 'visible', display: 'flex', flexDirection: 'column', backgroundColor: '#FDFBF5' }}>
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
            <p>{t.aboutPage.pageNumber} 2</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflow: 'hidden', paddingBottom: '50px' }}>
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900">{pageTitle}</h2>
          {/* <p className="text-lg text-gray-600 mt-1">Comprehensive Communications & Marketing Agency</p> */}
        </div>

        {/* Company Introduction - Dynamic Content with Rich Typography */}
        <div className="mb-5 content-section">
          <div
            className="text-sm text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: aboutGleads
                .split('\n\n')
                .map(paragraph => {
                  const trimmed = paragraph.trim();

                  // H1: ALL CAPS lines at start of paragraph
                  if (trimmed.match(/^[A-ZĐÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÈÉẺẼẸÊỀẾỂỄỆÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴ\s,\.]+$/)) {
                    return `<h3 class="text-lg font-black text-gray-700 mb-3 mt-5 tracking-wide">${trimmed}</h3>`;
                  }

                  // H2: Lines starting with uppercase and ending with specific patterns
                  if (trimmed.match(/^[A-ZĐÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÈÉẺẼẸÊỀẾỂỄỆ].+[a-zđàáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵ]$/m) && trimmed.split('\n').length === 1 && trimmed.length < 100) {
                    return `<h4 class="text-base font-bold text-gray-900 mb-2 mt-4">${trimmed}</h4>`;
                  }

                  // Bullet points with •
                  if (trimmed.includes('•')) {
                    const items = trimmed.split('•').filter(item => item.trim());
                    return '<ul class="space-y-2 mb-3">' +
                      items.map(item => {
                        const [title, ...rest] = item.split('.');
                        if (rest.length > 0) {
                          return `<li class="flex gap-2"><span class="text-blue-600 font-bold flex-shrink-0">•</span><div><span class="font-semibold text-gray-900">${title.trim()}.</span> <span class="text-gray-700">${rest.join('.').trim()}</span></div></li>`;
                        }
                        return `<li class="flex gap-2"><span class="text-blue-600 font-bold flex-shrink-0">•</span><span class="text-gray-700">${item.trim()}</span></li>`;
                      }).join('') +
                      '</ul>';
                  }

                  // Regular paragraphs
                  return `<p class="mb-3 text-gray-700 leading-relaxed">${trimmed}</p>`;
                })
                .join('')
            }}
          />
        </div>

      </div>

      {/* Footer - Fixed at bottom */}
      <div style={{ position: 'absolute', bottom: '48px', left: '48px', right: '48px', borderTop: '2px solid #e5e7eb', paddingTop: '12px', zIndex: 10 }}>
        <div className="flex justify-between items-center text-xs text-gray-600">
          <p>{t.footer.copyright}</p>
          <p>{t.footer.websiteAndEmail} | {companyEmail}</p>
        </div>
      </div>
    </div>
  );
}
