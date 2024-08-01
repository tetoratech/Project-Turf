import React from 'react';
import Logo from '../assets/images/logo.png'
const Footer = () => {
  return (
    <footer className="bg-primaryColor">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="" className="flex items-center">
              <img src={Logo} className="h-8 me-3" alt=" Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Padeling</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                </li>
                <li>
                  <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-white sm:mx-auto  lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center ">
            © 2024 <a href="https://flowbite.com/" className="hover:underline">Padeling Turf</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-white dark:hover:text-white">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-white dark:hover:text-white ms-5">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
              </svg>
              <span className="sr-only">Discord community</span>
            </a>
            <a href="#" className="text-white dark:hover:text-white ms-5">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd"/>
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-white dark:hover:text-white ms-5">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 .049C4.484.049 0 4.535 0 10.051c0 5.012 3.657 9.158 8.438 9.95.616.113.844-.267.844-.596 0-.293-.012-1.268-.012-2.303 0 0-3.44.749-4.166-1.471 0 0-.561-1.42-1.371-1.79 0 0-1.125-.769.08-.755 0 0 1.213.093 1.85 1.245 1.08 1.85 2.875 1.318 3.582 1.002.105-.789.42-1.318.764-1.622-2.75-.309-5.625-1.368-5.625-6.073 0-1.318.469-2.396 1.245-3.243-.132-.308-.561-1.582.132-3.293 0 0 1.031-.329 3.374 1.245.98-.273 2.03-.42 3.08-.42s2.099.14 3.08.42c2.343-1.574 3.374-1.245 3.374-1.245.693 1.711.264 2.985.132 3.293.776.849 1.245 1.925 1.245 3.243 0 4.711-2.875 5.764-5.625 6.073.428.368.8 1.096.8 2.233 0 1.622-.012 2.93-.012 3.334 0 .329.229.716.844.596C16.344 19.204 20 15.063 20 10.05 20 4.535 15.516.05 10 .05Z" clipRule="evenodd"/>
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
            <a href="#" className="text-white dark:hover:text-white ms-5">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0c-5.511 0-10 4.489-10 10s4.489 10 10 10 10-4.489 10-10S15.511 0 10 0Zm3.337 10.257h-2.11v5.568h-2.688v-5.568h-1.17V8.229h1.17v-1.3c0-1.56.903-2.415 2.287-2.415.66 0 1.354.122 1.354.122v1.488h-.763c-.75 0-.982.466-.982.943v1.162h1.747l-.545 2.028Z" clipRule="evenodd"/>
              </svg>
              <span className="sr-only">Instagram page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
