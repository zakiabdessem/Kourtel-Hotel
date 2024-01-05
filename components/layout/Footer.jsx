import { clientURI } from "../../config/uri";

function Footer() {
  return (
    <footer className=" bg-white dark:bg-primary w-full">
      <div className="mx-auto w-full p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-8">
            <div className="mb-6 md:mb-0">
              <div className="flex flex-col items-center justify-center">
                <a
                  href={clientURI}
                  className="flex items-center justify-center">
                  <img src="/logo.png" className="h-10 hidden" alt="Logo" />
                  <span className="self-center text-2xl font-dancing font-light whitespace-nowrap text-white ml-2">
                    Hotel kourtel
                  </span>
                </a>
                <p className="text-center font-light text-sm">
                  The service at the Hotel Kourtel was exceptional. There was
                  absolutely no issue that was not addressed timely and with
                  satisfactory results.
                </p>
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                Quick links
              </h2>
              <ul className="text-white font-medium">
                <li>
                  <a href="#Rooms" className="hover:underline">
                    Rooms
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                Social media
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.instagram.com/hotel.kourtel/"
                    className="hover:underline ">
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100071282700388"
                    className="hover:underline">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                Company
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Refund policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-white uppercase">
                Newsletter
              </h2>
              <p className="font-light text-sm">
                Kindly subscribe to our newsletter.
              </p>
              <form className="max-w-sm mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    id="email-address-icon"
                    className="mt-2 bg-white text-gray-900 text-sm rounded-lg  block w-full ps-10 p-2.5  dark:bg-white placeholder-gray-400   "
                    placeholder="Enter your email"
                  />

                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16">
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href={clientURI} className="hover:underline">
              kortel™
            </a>
            . All Rights Reserved.
          </span>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center dark:text-gray-400">
            <a
              href="https://www.linkedin.com/in/zakaria-abdessemed-05405725a/"
              className="hover:underline mx-4 px-2"
              target="_blank">
              Developed by Zak
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
