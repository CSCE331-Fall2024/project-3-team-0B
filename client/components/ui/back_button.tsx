// components/BackButton.tsx
import React from 'react';
import { buttonStyle } from '@/utils/tableStyles';
import { useRouter } from 'next/router';
import { ArrowBigLeft } from 'lucide-react';

const BackButton: React.FC = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} style={buttonStyle}>
      <ArrowBigLeft size={24}/>
    </button>
  );
};

export default BackButton;
