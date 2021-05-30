import MailIcon from "@/vectors/mail.svg";
import PhoneIcon from "@/vectors/phone.svg";
import FacebookIcon from "@/vectors/facebook.svg";
import InstagramIcon from "@/vectors/instagram.svg";
import TwitterIcon from "@/vectors/twitter.svg";
import YouTubeIcon from "@/vectors/youtube.svg";

export default function Footer() {
  return (
    <footer className="bg-branding-dark">
      <div className="mx-auto px-16 text-center text-white py-7 space-y-4 text-md font-secondary">
        {/* Copyright */}
        <p className="font-primary text-xl">BURGER KING® DELIVERY</p>

        {/* Phone */}
        <p>
          <a className="font-primary text-xl" href="tel:1234567">
            <span>
              <PhoneIcon className="w-6 h-6 inline mr-2" />
            </span>
            15000 25
          </a>
        </p>

        {/* Email */}
        <p>
          <a href="mailto:dummy@example.com">
            <span>
              <MailIcon className="w-6 h-6 inline mr-2" />
            </span>
            guestservice@burgerking.co.id
          </a>
        </p>

        {/* Socials */}
        <ul>
          <li className="inline">
            <a href="#facebook">
              <FacebookIcon className="w-6 h-6 inline mx-2" />
            </a>
          </li>

          <li className="inline">
            <a href="#instagram">
              <InstagramIcon className="w-6 h-6 inline mx-2" />
            </a>
          </li>

          <li className="inline">
            <a href="#twitter">
              <TwitterIcon className="w-6 h-6 inline mx-2" />
            </a>
          </li>

          <li className="inline">
            <a href="#youtube">
              <YouTubeIcon className="w-6 h-6 inline mx-2" />
            </a>
          </li>
        </ul>

        {/* Privacy Policy */}
        <a className="block" href="#kebijakan-privasi">
          Kebijakan Privasi
        </a>

        {/* Terms of Service */}
        <a className="block" href="#tos">
          Syarat dan Ketentuan
        </a>

        {/* Trademark */}
        <p className="text-gray-500">
          TM & © 2021 Burger King Corporation. Used Under License. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
