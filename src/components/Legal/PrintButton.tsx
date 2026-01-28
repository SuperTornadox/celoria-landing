'use client';

interface PrintButtonProps {
  label?: string;
  className?: string;
}

export function PrintButton({ label = 'Print This Page', className = '' }: PrintButtonProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className={`px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors print:hidden ${className}`}
    >
      🖨️ {label}
    </button>
  );
}
