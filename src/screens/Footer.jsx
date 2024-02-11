import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="contact" className="p-10 bg-gray-900 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between">
        {/* Contact Section */}
        <div className="flex flex-col text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
          <ul className="text-white text-sm">
            <li className="mb-2">
              <span className="font-semibold">Mohammed Razi:</span>{" "}
              +919562002459
            </li>
            <li>
              <span className="font-semibold">Aakamsh PM:</span> +919847584237
            </li>
          </ul>
        </div>

        {/* Logo Section */}
        <div className=" md:text-left mb-8 md:mb-0 ">
          <h1 className="text-xl text-center font-bold text-white">Socials</h1>
          <div className="flex justify-evenly mt-4 -space-x-10 md:space-x-6">
            <a href="http://instagram.com/" target="_blank">
              <FaInstagram color="#fff" className="text-xl" />
            </a>
            <a href="http://wa.me/+919847584237" target="_blank">
              <FaWhatsapp color="#fff" className="text-xl" />
            </a>
            <a href="#" target="_blank">
              <FaFacebook color="#fff" className="text-xl" />
            </a>
          </div>
        </div>

        {/* Location Section */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold text-white mb-4">Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.483978030902!2d75.25995617478183!3d12.078983933819757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba46b712a0bbf7b%3A0xacc715a81834e190!2sSt.Joseph&#39;s%20College%20Pilathara!5e0!3m2!1sen!2sin!4v1707651679782!5m2!1sen!2sin"
            width="300"
            height="150"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <p className="text-white mt-3">St Joseph's College, Pilathara</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
