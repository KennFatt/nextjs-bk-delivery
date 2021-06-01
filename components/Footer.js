import MailIcon from "@/vectors/mail.svg";
import PhoneIcon from "@/vectors/phone.svg";
import FacebookIcon from "@/vectors/facebook.svg";
import InstagramIcon from "@/vectors/instagram.svg";
import TwitterIcon from "@/vectors/twitter.svg";
import YouTubeIcon from "@/vectors/youtube.svg";

export default function Footer() {
  return (
    <footer className="bg-branding-dark">
      <div className="flex flex-col items-center space-y-6 text-white center-container py-7 lg:space-y-4 font-secondary lg:items-start">
        {/* Copyright */}
        <p className="text-xl text-center font-primary lg:text-base">
          BURGER KING® DELIVERY
        </p>

        {/* Contact */}
        <div className="flex flex-col items-center space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4 lg:items-start">
          {/* Phone */}
          <p>
            <a className="text-xl font-primary lg:text-base" href="tel:1234567">
              <span>
                <PhoneIcon className="inline w-6 h-6 mr-2 lg:w-4 lg:h-4" />
              </span>
              15000 25
            </a>
          </p>

          {/* Email */}
          <p>
            <a href="mailto:dummy@example.com">
              <span>
                <MailIcon className="inline w-6 h-6 mr-2 lg:w-4 lg:h-4" />
              </span>
              guestservice@burgerking.co.id
            </a>
          </p>

          {/* Socials */}
          <ul>
            <li className="inline">
              <a href="#facebook">
                <FacebookIcon className="inline w-6 h-6 mx-2 lg:w-4 lg:h-4 lg:mx-1" />
              </a>
            </li>

            <li className="inline">
              <a href="#instagram">
                <InstagramIcon className="inline w-6 h-6 mx-2 lg:w-4 lg:h-4 lg:mx-1" />
              </a>
            </li>

            <li className="inline">
              <a href="#twitter">
                <TwitterIcon className="inline w-6 h-6 mx-2 lg:w-4 lg:h-4 lg:mx-1" />
              </a>
            </li>

            <li className="inline">
              <a href="#youtube">
                <YouTubeIcon className="inline w-6 h-6 mx-2 lg:w-4 lg:h-4 lg:mx-1" />
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4 lg:text-sm lg:text-gray-500">
          {/* Privacy Policy */}
          <a className="block" href="#kebijakan-privasi">
            Kebijakan Privasi
          </a>

          <span className="hidden lg:inline">|</span>

          {/* Terms of Service */}
          <a className="block" href="#tos">
            Syarat dan Ketentuan
          </a>

          <span className="hidden lg:inline">|</span>

          {/* Trademark */}
          <p className="text-center text-gray-500">
            TM & © 2021 Burger King Corporation. Used Under License. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
