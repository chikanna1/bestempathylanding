import Image from "next/image";

import MailchimpSubscribe from "react-mailchimp-subscribe";

import SignUpForm from "@/components/signup-form";

import Header from "@/components/Header";
import { useState } from "react";
import banner1 from "../assets/images/banner-health-seeklogo.com.svg";
import banner2 from "../assets/images/WHO_logo.svg";
import banner3 from "../assets/images/samaritan-health-systems-seeklogo.com.svg";
import Footer from "@/components/Footer";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsersViewfinder,
  faMagnifyingGlass,
  faEarthAmericas,
  faFaceSmileBeam,
} from "@fortawesome/free-solid-svg-icons";

import diversityImage from "../assets/images/diversity.jpg";
import therapyImage from "../assets/images/therapy.jpg";
import worldWideImage from "../assets/images/world-wide-therapists.jpg";
import PhotoGallery from "../components/photogallery";

const images = [worldWideImage, diversityImage, therapyImage];

const subscribeToEmailList = () => {
  alert("Thank You, for Subscribing");
};

export default function Home() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    classification: {},
  });

  const [open, setOpen] = useState(1);
  const handleOpen = (value) => {
    setDisplayImage(images[value - 1]);
    setOpen(open === value ? 0 : value);
  };

  const [displayImage, setDisplayImage] = useState(diversityImage);

  return (
    <div>
      <Header />
      <div>
        <div className="w-[100vw] h-[100vh] bg-[url('../../public/assets/images/bestempathylandingshowcase.jpg')] bg-[position:100%_60%] bg-no-repeat">
          <div className="w-full h-full backdrop-brightness-50">
            <div className="flex flex-col items-center lg:items-start justify-center mx-[8%] pt-[3.5%]">
              <p className="text-[40px] text-white lg:w-[40%] text-center">
                Therapy. Without. Stress
              </p>
              <p className="text-white text-[16px] w-[90%] md:w-[70%] lg:w-[40%] text-center font-bold ">
                For Those Seeking Therapy/Therapists
              </p>
              <p className="text-[18px] text-white w-[40%] mb-5 lg:mb-0 text-center">
                Coming Soon
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-start justify-center pt-[3%] lg:mx-[8%]">
              <p className="text-white text-[18px] w-[90%] md:w-[70%] lg:w-[40%] text-center font-bold ">
                For Therapists and Other Mental Health Counselors
              </p>
              <p className="text-[20px] text-white capitalize w-[90%] md:w-[70%] lg:w-[40%] text-center">
                Sign Up for More Info on how to get a premium yearly listing
                free ($299 value yearly)
              </p>
              {/* Signup Form */}
              <div className="w-[90%] md:w-[70%] lg:w-[40%]">
                <SignUpForm values={values} setValues={setValues} />
              </div>
            </div>
          </div>
        </div>
        {/* Why Best Empathy */}
        <div className="flex flex-col lg:flex-row px-[10%] justify-between mt-[2.5%]">
          {/* Accordion */}
          <div className="lg:w-[45%] h-[500px]">
            <p className="text-[20px] font-semibold ml-2 my-5 ">
              Why Best Empathy
            </p>
            <Accordion
              open={open === 1}
              className="mb-2 rounded-lg border border-blue-gray-100 px-4"
            >
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className={`py-[25px] border-b-0 transition-colors ${
                  open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
                }`}
              >
                <div className="flex flex-row">
                  <div>
                    <FontAwesomeIcon
                      className={``}
                      icon={faEarthAmericas}
                      size="1x"
                    />
                  </div>
                  <div>
                    <p className="mx-3 capitalize">
                      Find therapists from every corner on earth
                    </p>
                  </div>
                </div>
              </AccordionHeader>
              <AccordionBody className="pt-0 text-base font-normal">
                <div className="text-justify">
                  Best Empathy provides global access to empathetic therapists,
                  using advanced algorithms to match users with culturally
                  aligned specialists. It fosters universal empathy and support
                  through diverse perspectives.
                </div>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 2}
              className="mb-2 rounded-lg border border-blue-gray-100 px-4"
            >
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className={`py-[25px] border-b-0 transition-colors ${
                  open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
                }`}
              >
                <div className="flex flex-row">
                  <div>
                    <FontAwesomeIcon
                      className={``}
                      icon={faMagnifyingGlass}
                      size="1x"
                    />
                  </div>
                  <div>
                    <p className="mx-3 capitalize">Simple Search Process</p>
                  </div>
                </div>
              </AccordionHeader>
              <AccordionBody className="pt-0 text-base font-normal">
                <div className="text-justify">
                  Best Empathy delivers a personalized therapist-matching
                  experience, enabling users to find specialists aligned with
                  their preferences. The platform's advanced algorithms ensure
                  tailored and effective matches for individual well-being.
                </div>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 3}
              className="rounded-lg border border-blue-gray-100 px-4"
            >
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className={`py-[25px] border-b-0 transition-colors ${
                  open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
                }`}
              >
                <div className="flex flex-row">
                  <div>
                    <FontAwesomeIcon
                      className={``}
                      icon={faFaceSmileBeam}
                      size="1x"
                    />
                  </div>
                  <div>
                    <p className="mx-3 capitalize">Why join as a therapist?</p>
                  </div>
                </div>
              </AccordionHeader>
              <AccordionBody className="pt-0 text-base font-normal">
                <div className="text-justify">
                  Best Empathy serves as a lifeline and resource for mental
                  health professionals, offering global visibility,
                  trust-building, and a supportive community for growth and
                  development.
                </div>
              </AccordionBody>
            </Accordion>
          </div>
          <div className="w-[100%] h-[100%] lg:w-[45%] mb-[5%]">
            <Image
              className={`w-[100%] h-[100%]`}
              src={displayImage}
              alt="Badge"
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* Badges */}
        <div className="flex justify-between px-[20%] bg-blue-gray-300 ">
          <Image className="w-[100px] h-[150px]" src={banner1} alt="Badge" />
          <Image className="w-[100px] h-[150px]" src={banner2} alt="Badge" />
          <Image className="w-[100px] h-[150px]" src={banner3} alt="Badge" />
        </div>

        {/* Image Gallery of Therapists */}
        <div className="flex flex-row justify-center mt-[50px] w-[100%] px-[10%]">
          <PhotoGallery />
        </div>

        {/* Find Therapists from around the world */}

        <div className="mx-[10%] p-[5%] mt-[50px] h-[50vh] bg-blue-gray-500 text-center flex flex-col items-center justify-center">
          <h1 className="text-[30px]">
            Find a Therapist that suits <span className=" italic">your</span>{" "}
            exact needs and preferences
          </h1>
          <div className="text-[20px] mt-10">
            <p>The therapist you chose is key to getting the help you need.</p>
            <p>
              You deserve to have a say in which therapist will accomapny you on
              this journey to better health
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
