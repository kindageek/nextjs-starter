export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    if (error.message === 'Bad Request') {
      return 'Something went wrong. Please try again.';
    }
    return error.message;
  }
  if (error && typeof error === 'object' && 'message' in error) {
    if (String(error.message) === 'Bad Request') {
      return 'Something went wrong. Please try again.';
    }
    return String(error.message);
  }
  if (typeof error === 'string') {
    if (error === 'Bad Request') {
      return 'Something went wrong. Please try again.';
    }
    return error;
  }
  return 'Unknown error';
}
