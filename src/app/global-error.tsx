'use client';
import { Button } from '@/components/ui/button';

// Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <div className='flex min-h-screen items-center px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16'>
          <div className='w-full space-y-6 text-center'>
            <div className='space-y-3'>
              <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl'>
                Something went wrong!
              </h1>
              <p className='text-gray-500'>Please try again!</p>
            </div>
            <div className='flex items-center justify-center gap-2'>
              <Button
                size='lg'
                onClick={
                  // Attempt to recover by trying to re-render the segment
                  () => reset()
                }
              >
                Try again
              </Button>
              <Button size='lg' variant='outline' asChild>
                <Link href='/'>Return Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
