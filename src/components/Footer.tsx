import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter
} from "react-icons/fa"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-blue text-white py-8">
      <div className="container mx-auto text-center">
        <div className=" flex flex-col mb-4 items-center justify-center">
          <Image src={"/Logo Footer.png"} width={131.4} height={96.37} alt={"logo footer"} />
        </div>
        <div className="mb-4">
          <p className="text-xl">
            &copy; <span className="font-semibold">SoftOwn 2024</span>. Todos os direitos
            reservados.
          </p>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          <FaFacebookF className="text-white hover:text-gray-300" size={24} />
          <FaInstagram className="text-white hover:text-gray-300" size={24} />
          <FaLinkedinIn className="text-white hover:text-gray-300" size={24} />
          <FaTwitter className="text-white hover:text-gray-300" size={24} />
          <FaYoutube className="text-white hover:text-gray-300" size={24} />
        </div>
      </div>
    </footer>
  )
}
