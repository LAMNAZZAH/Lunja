import Image from 'next/image'

const Footer = () => (
    <div>
         <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span >
            <Image src="/landscapeLogo-01.jpg" alt="Vercel Logo" width={200} height={100} />
          </span>
        </a>
    </div>
); 

export default Footer; 