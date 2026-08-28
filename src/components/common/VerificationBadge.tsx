import React from 'react';
import { CheckCircle2, Building2, ExternalLink, HelpCircle, AlertCircle } from 'lucide-react';
import { VerificationStatus } from '../../types/knowledge';
import { useLanguage } from '../../context/LanguageContext';

interface VerificationBadgeProps {
  status: VerificationStatus;
  size?: 'sm' | 'md';
}

export const VerificationBadge: React.FC<VerificationBadgeProps> = ({ status, size = 'sm' }) => {
  const { isArabic } = useLanguage();

  const configMap: Record<
    VerificationStatus,
    { labelEn: string; labelAr: string; bg: string; text: string; border: string; dot: string; icon: React.ReactNode }
  > = {
    VERIFIED: {
      labelEn: 'VERIFIED SOURCE',
      labelAr: 'مصدر موثق رسمي',
      bg: 'bg-[#2D3A31]/10',
      text: 'text-[#1F2922]',
      border: 'border-[#2D3A31]/30',
      dot: 'bg-[#2D3A31]',
      icon: <CheckCircle2 className="w-3 h-3 text-[#2D3A31]" />,
    },
    'COMPANY CONFIRMED': {
      labelEn: 'COMPANY CONFIRMED',
      labelAr: 'مؤكد من إدارة الشركة',
      bg: 'bg-[#8C5835]/10',
      text: 'text-[#613B22]',
      border: 'border-[#8C5835]/30',
      dot: 'bg-[#8C5835]',
      icon: <Building2 className="w-3 h-3 text-[#8C5835]" />,
    },
    'FOUNDER-CONFIRMED': {
      labelEn: 'FOUNDER-CONFIRMED',
      labelAr: 'مؤكد شخصياً من المؤسس',
      bg: 'bg-[#8C5835]/15',
      text: 'text-[#54321B]',
      border: 'border-[#8C5835]/40',
      dot: 'bg-[#8C5835]',
      icon: <CheckCircle2 className="w-3 h-3 text-[#8C5835]" />,
    },
    'FOUNDER-CONFIRMED / FIRST-PARTY': {
      labelEn: 'FOUNDER-CONFIRMED / FIRST-PARTY',
      labelAr: 'مصدر أولي مؤكد من المؤسس',
      bg: 'bg-[#8C5835]/15',
      text: 'text-[#54321B]',
      border: 'border-[#8C5835]/40',
      dot: 'bg-[#8C5835]',
      icon: <CheckCircle2 className="w-3 h-3 text-[#8C5835]" />,
    },
    'EXTERNAL VERIFIED': {
      labelEn: 'EXTERNAL CORROBORATED',
      labelAr: 'موثق بمصادر خارجية مستقلة',
      bg: 'bg-[#223344]/10',
      text: 'text-[#1B2B3A]',
      border: 'border-[#223344]/30',
      dot: 'bg-[#223344]',
      icon: <ExternalLink className="w-3 h-3 text-[#223344]" />,
    },
    'PENDING VERIFICATION': {
      labelEn: 'PENDING VERIFICATION',
      labelAr: 'قيد التحقق الرسمي من الشركة',
      bg: 'bg-[#856404]/10',
      text: 'text-[#664D03]',
      border: 'border-[#856404]/30',
      dot: 'bg-[#856404]',
      icon: <HelpCircle className="w-3 h-3 text-[#856404]" />,
    },
    'DO NOT PUBLISH': {
      labelEn: 'INTERNAL RESTRICTED',
      labelAr: 'سري / داخلي فقط',
      bg: 'bg-[#721C24]/10',
      text: 'text-[#5A141A]',
      border: 'border-[#721C24]/30',
      dot: 'bg-[#721C24]',
      icon: <AlertCircle className="w-3 h-3 text-[#721C24]" />,
    },
  };

  const cfg = configMap[status] || configMap['VERIFIED'];

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-bold uppercase tracking-[0.18em] border font-mono ${cfg.bg} ${cfg.text} ${cfg.border} ${
        size === 'sm' ? 'px-2 py-0.5 text-[9px]' : 'px-2.5 py-1 text-[10px]'
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-none ${cfg.dot}`}></span>
      <span>{isArabic ? cfg.labelAr : cfg.labelEn}</span>
    </span>
  );
};
