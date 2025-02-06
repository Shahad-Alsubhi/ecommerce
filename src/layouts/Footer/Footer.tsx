import Image from "../../components/Image";
import Navbar from "../../components/Navbar";

const Footer = () => {
  return (
    <footer className="Container bg-[#101010] pb-11 pt-16 flex flex-col max-md:items-center relative ">
      <div className="md:flex justify-between  ">
        <Image src="/images/logo.svg" alt="logo" customStyle="mb-11" />
        <Navbar customStyle="max-md:flex-col max-md:items-center " />
      </div>
      <div className="md:flex justify-between md:items-end md:mb-12 ">
        <p className="lg:max-w-[50%] text-[#7d7d7d] text-base leading-6 max-md:text-center max-md:my-10">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <section className="*:hover:fill-[#D87D4A] flex gap-3 max-lg:absolute max-md:bottom-11 max-md:left-[50%] max-md:-translate-x-[50%] max-lg:bottom-11 md:right-8">
          <Image src="/images/icon-facebook.svg" alt="facebook" />
          <Image src="/images/icon-instagram.svg" alt="instagram" />
          <Image src="/images/icon-twitter.svg" alt="twitter" />
        </section>
      </div>
      <h5 className="text-[#7d7d7d] max-md:mb-18 ">
        Copyright 2025. All Rights Reserved
      </h5>
    </footer>
  );
};

export default Footer;
