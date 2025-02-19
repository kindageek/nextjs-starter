import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex min-h-screen items-center px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16'>
      <div className='w-full space-y-6 text-center'>
        <div className='space-y-3'>
          <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl'>
            404
          </h1>
          <p className='text-gray-500'>
            Oops, it looks like the page you&apos;re looking for doesn&apos;t
            exist.
          </p>
        </div>
        <Button size='lg' asChild>
          <Link href='/'>Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
