import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children, title = 'CYBERSCOPE' }) => {
  return (
    <div className='layout'>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='header'>
        <Link href='/' passHref>
          <a>
            <svg
              width='675'
              height='375'
              viewBox='0 0 675 375'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='coin_logo'
            >
              <path
                d='M217 125.5L446.5 5L666.5 125.5L446.5 250L217 125.5Z'
                stroke='#11FFFF'
                strokeWidth='8'
              />
              <path
                d='M9 125.5L238.5 5L458.5 125.5L238.5 250L9 125.5Z'
                stroke='#11FFFF'
                strokeWidth='8'
              />
              <line
                x1='9'
                y1='125'
                x2='660'
                y2='125'
                stroke='#11FFFF'
                strokeWidth='6'
              />
              <defs>
                <linearGradient
                  id='paint0_linear'
                  x1='348.75'
                  y1='5'
                  x2='348.75'
                  y2='250'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#fff' />
                  <stop offset='1' stopColor='#000000' />
                </linearGradient>
              </defs>
            </svg>
          </a>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;