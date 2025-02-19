import { LoaderCircle } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <LoaderCircle size={40} className='animate-spin text-primary' />
    </div>
  );
}
