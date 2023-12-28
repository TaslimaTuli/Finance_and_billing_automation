import Link from 'next/link';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4 text-red-500">404 - Not Found</h1>
      <p className="text-lg mb-4 text-gray-600">
        Sorry, the page you are looking for does not exist :\
      </p>
      <Link href="/signin" className="text-blue-500 hover:underline">
        Go back to the signin page 
      </Link>
    </div>
  ); 
};

export default NotFoundPage;