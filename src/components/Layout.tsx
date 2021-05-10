import React, { ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';
import { FaAlgolia } from 'react-icons/fa';

type Props = {
  children: ReactNode;
  search: ReactNode;
  stats: ReactNode;
  filters: ReactNode;
};

const Layout = ({ children, search, filters, stats }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="header h-20v bg-blue-300 flex items-center px-4 py-8">
        <div className="flex flex-col w-full items-center">
          <h1 className="text-4xl text-yellow-600 font-semibold rounded-xl p-2 text-center hidden md:block">
            <FormattedMessage id="header.title" />
          </h1>
          <div className="w-2/3">{search}</div>
        </div>
      </header>
      <main className="h-75v">
        <div className="h-full w-screen flex flex-col flex-grow px-8 py-4">
          <div className="ml-auto h-16">{stats}</div>
          <div className="h-full flex flex-col md:flex-row from-blue-300 pb-4">
            <div className="inline-block border-b-4 md:border-r-4 md:border-b-0 border-blue-300 mb-4 md:mb-0">
              {filters}
            </div>
            <div className="overflow-y-auto scrollbar scrollbar-thumb-red-600 scrollbar-track-blue-50 w-full">
              {children}
            </div>
          </div>
        </div>
      </main>
      <footer className="h-5v bg-blue-300 py-4 flex justify-center items-center h-16">
        <p>
          <FormattedMessage id="footer.search.by" />
        </p>
        <a
          className="h-full"
          target="_blank"
          href="https://www.algolia.com/"
          rel="noreferrer">
          <FaAlgolia className="pl-2 w-auto h-full" />
        </a>
      </footer>
    </div>
  );
};

export default Layout;
