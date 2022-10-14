import React from 'react';

function Footer() {
  return (
    <footer className="border-t mt-10 py-10 px-2 flex justify-around max-w-screen-lg mx-auto">
      <div className="w=2/5">
        <div>
          <h6 className="font-semibold text-green-400 mb-4">Company</h6>
          <ul>
            <li>
              <a href="#" className="py-3 px-5 border-b-2 border-transparent text-gray-400 hover:underline decoration-4 decoration-green-500 underline-offset-2">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="py-3 px-5 border-b-2 border-transparent text-gray-400 hover:underline decoration-4 decoration-green-500 underline-offset-2">
                About us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w=2/5">
        <h6 className="font-semibold text-green-400 mb-4">Content</h6>
        <ul>
          <li>
            <a href="#" className="py-3 px-5 border-b-2 border-transparent text-gray-400 hover:underline decoration-4 decoration-green-500 underline-offset-2">
              Block
            </a>
          </li>
          <li>
            <a href="#" className="py-3 px-5 border-b-2 border-transparent text-gray-400 hover:underline decoration-4 decoration-green-500 underline-offset-2">
              Policy
            </a>
          </li>
          <li>
            <a href="#" className="py-3 px-5 border-b-2 border-transparent text-gray-400 hover:underline decoration-4 decoration-green-500 underline-offset-2">
              Documentation
            </a>
          </li>
        </ul>
      </div>

      <div className="w-1/5">
        <h6 className="font-semibold text-green-400 mb-1">Contact us</h6>
        <ul>
          <li className="inline-block">
            <a href="#" className="py-3 px-5 border-b-2 border-transparent text-gray-400 hover:underline decoration-4 decoration-green-500 underline-offset-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 ml-3">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
            </a>
          </li>
          <li className="inline-block">
            <a href="#" className="py-3 px-5 border-b-2 border-transparent text-gray-400 hover:underline decoration-4 decoration-green-500 underline-offset-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 ml-3">
                <path
                  stroke-linecap="round"
                  d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                />
              </svg>
            </a>
          </li>
          <li className="inline-block">
            <a href="#" className="py-3 px-5 border-b-2 border-transparent text-gray-400 hover:underline decoration-4 decoration-green-500 underline-offset-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 ml-3">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
