import MailIcon from "@/vectors/mail.svg";
import PhoneIcon from "@/vectors/phone.svg";
import FacebookIcon from "@/vectors/facebook.svg";
import InstagramIcon from "@/vectors/instagram.svg";
import TwitterIcon from "@/vectors/twitter.svg";
import YouTubeIcon from "@/vectors/youtube.svg";

export default function Footer() {
  return (
    <footer className="bg-branding-dark">
      <div className="center-container py-7 lg:space-y-4 font-secondary lg:items-start flex flex-col items-center space-y-6 text-white">
        {/* Copyright */}
        <p className="font-primary lg:text-base text-xl text-center">
          BURGER KING® DELIVERY
        </p>

        {/* Contact */}
        <div className="lg:space-y-0 lg:flex-row lg:space-x-4 lg:items-start flex flex-col items-center space-y-4">
          {/* Phone */}
          <p>
            <a className="font-primary lg:text-base text-xl" href="tel:1234567">
              <span>
                <PhoneIcon className="lg:w-4 lg:h-4 inline w-6 h-6 mr-2" />
              </span>
              15000 25
            </a>
          </p>

          {/* Email */}
          <p>
            <a href="mailto:dummy@example.com">
              <span>
                <MailIcon className="lg:w-4 lg:h-4 inline w-6 h-6 mr-2" />
              </span>
              guestservice@burgerking.co.id
            </a>
          </p>

          {/* Socials */}
          <ul>
            <li className="inline">
              <a href="#facebook">
                <FacebookIcon className="lg:w-4 lg:h-4 lg:mx-1 inline w-6 h-6 mx-2" />
              </a>
            </li>

            <li className="inline">
              <a href="#instagram">
                <InstagramIcon className="lg:w-4 lg:h-4 lg:mx-1 inline w-6 h-6 mx-2" />
              </a>
            </li>

            <li className="inline">
              <a href="#twitter">
                <TwitterIcon className="lg:w-4 lg:h-4 lg:mx-1 inline w-6 h-6 mx-2" />
              </a>
            </li>

            <li className="inline">
              <a href="#youtube">
                <YouTubeIcon className="lg:w-4 lg:h-4 lg:mx-1 inline w-6 h-6 mx-2" />
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:space-y-0 lg:flex-row lg:space-x-4 lg:text-sm lg:text-gray-500 flex flex-col items-center space-y-4">
          {/* Privacy Policy */}
          <a className="block" href="#kebijakan-privasi">
            Kebijakan Privasi
          </a>

          <span className="lg:inline hidden">|</span>

          {/* Terms of Service */}
          <a className="block" href="#tos">
            Syarat dan Ketentuan
          </a>

          <span className="lg:inline hidden">|</span>

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
