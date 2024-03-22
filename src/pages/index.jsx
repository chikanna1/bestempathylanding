import Image from "next/image";

import MailchimpSubscribe from "react-mailchimp-subscribe";

import SignUpForm from "@/components/signup-form";

import Header from "@/components/Header";
import { useEffect, useState } from "react";
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
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

import diversityImage from "../assets/images/diversity.jpg";
import therapyImage from "../assets/images/therapy.jpg";
import worldWideImage from "../assets/images/world-wide-therapists.jpg";
import PhotoGallery from "../components/photogallery";
import {
  therapistSpecialties,
  therapistPreviews,
} from "../assets/datapoints/therapist-data-types";

import therapistPreviewImage1 from "../assets/images/therapist-profile-image-1.jpg";
import therapistPreviewImage2 from "../assets/images/therapist-profile-image-2.jpg";
import therapistPreviewImage3 from "../assets/images/therapist-profile-image-3.jpg";
import therapistPreviewImage4 from "../assets/images/therapist-profile-image-4.jpg";
import therapistPreviewImage5 from "../assets/images/therapist-profile-image-5.jpg";
import therapistPreviewImage6 from "../assets/images/therapist-profile-image-6.jpg";
import therapistPreviewImage7 from "../assets/images/therapist-profile-image-7.jpg";

const therapistPreviewImages = [
  therapistPreviewImage1,
  therapistPreviewImage2,
  therapistPreviewImage3,
  therapistPreviewImage4,
  therapistPreviewImage5,
  therapistPreviewImage6,
  therapistPreviewImage7,
];
const images = [worldWideImage, diversityImage, therapyImage];
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

const url =
  "https://bestempathy.us22.list-manage.com/subscribe/post?u=f20d7300142d70522b902497c";

const subscribeToEmailList = () => {
  alert("Thank You, for Subscribing");
};

export default function Home() {
  const serviceId = "service_luicwh2";
  const templateId = "template_7cg5coj";
  const pubKey = "HR-Nxrd8UyH-c-oU0";

  const updateFormValue = (key, value) => {
    console.log(key);
    console.log(value);
    setValues({
      ...values,
      [key]: value,
    });
  };

  const validateEmail = () => {
    const emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
    if (!emailRegex.test(values.email)) {
      console.log("Email not Valid");
      toast.error("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const validateFormFields = () => {
    console.log(values);
    const hasEmptyFields = Object.values(values).some(
      (element) => element === ""
    );

    if (hasEmptyFields) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);

    const validForm = validateFormFields();

    if (validForm) {
      const validEmail = validateEmail();
      if (!validEmail) {
        alert("Please Enter a Valid Email Address");
        return;
      }
    } else {
      alert("Please fill in all fields");
      return;
    }

    // Send Email

    const templateParams = {
      from_firstName: values.firstName,
      from_lastName: values.lastName,
      from_emailAddress: values.email,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey: pubKey,
      });
      console.log("SUCCESS!");
      alert("Thank You For Subscribing!");
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        console.log("EMAILJS FAILED...", err);
        return;
      }

      console.log("ERROR", err);
      alert("Error - We are Working on this issue");
    }
  };

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [open, setOpen] = useState(1);
  const [openFaqs, setOpenFaqs] = useState(1);

  const handleOpen = (value) => {
    setDisplayImage(images[value - 1]);
    setOpen(open === value ? 0 : value);
  };

  const handleOpenFaqs = (value) => {
    setOpenFaqs(openFaqs === value ? 0 : value);
  };

  const [displayImage, setDisplayImage] = useState(diversityImage);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === therapistPreviews.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 10000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          id === open ? "rotate-90" : ""
        } h-5 w-5 transition-transform`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
      </svg>
    );
  }

  return (
    <div>
      <Header />
      {/* Top Level Div */}
      <div>
        <section className="w-[100vw] h-[90vh] md:h-[95vh] bg-[url('../../public/assets/images/bestempathylandingshowcase.jpg')] bg-[position:100%_60%] bg-no-repeat ">
          <div className="w-full h-full backdrop-brightness-50">
            <div className="flex flex-col items-center lg:items-start justify-center mx-[8%] pt-[3.5%]">
              <p className="text-[30px] md:text-[35px] lg:text-[40px] text-white lg:w-[40%] text-center">
                Therapy Without Stress
              </p>
              <p className="text-white text-[12px] md:text-[14px] lg:text-[16px] w-[90%] md:w-[70%] lg:w-[40%] text-center font-bold ">
                For Those Seeking Therapy/Therapists
              </p>
              <p className="text-[13px] md:text-[15px] lg:text-[18px] text-white w-[40%] mb-5 lg:mb-0 text-center">
                Coming Soon
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-start justify-center pt-[3%] lg:mx-[8%]">
              <p className="text-white text-[16px] italic lg:text-[18px] w-[90%] md:w-[70%] lg:w-[40%] text-center  lg:font-bold ">
                For Therapists and Other Mental Health Counselors
              </p>
              <p className="text-[16px] md:text-[18px] lg:text-[20px] text-white capitalize w-[90%] md:w-[70%] lg:w-[40%] text-center font-bold">
                Sign Up for More Info on how to get a premium yearly listing
                free ($299 value yearly)
              </p>
              {/* Signup Form */}
              <div className="w-[90%] md:w-[70%] lg:w-[40%] mt-[15%] md:mt-[5%] lg:mt-[0px]">
                <SignUpForm
                  values={values}
                  updateFormValue={updateFormValue}
                  handleSubmit={handleSubmit}
                />
              </div>
            </div>
          </div>
        </section>
        {/* Why Best Empathy */}
        <section className="flex flex-col lg:flex-row px-[10%] justify-between mt-[2.5%]">
          {/* Accordion */}
          <div className="lg:w-[45%] lg:h-[500px] py-[50px] lg:py-0">
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
                  open === 1
                    ? " text-mint-tulip-500 hover:text-mint-tulip-400"
                    : ""
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
                  open === 2
                    ? "text-mint-tulip-500 hover:text-mint-tulip-400"
                    : ""
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
                  open === 3
                    ? "text-mint-tulip-500 hover:text-mint-tulip-400"
                    : ""
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
        </section>

        {/* Badges */}
        <section className="flex justify-between px-[20%]  bg-mint-tulip-500 ">
          <Image className="w-[100px] h-[150px]" src={banner1} alt="Badge" />
          <Image className="w-[100px] h-[150px]" src={banner2} alt="Badge" />
          <Image className="w-[100px] h-[150px]" src={banner3} alt="Badge" />
        </section>

        {/* Image Gallery of Therapists */}
        <section className="px-[12.5%] mt-[50px] w-[100%] ">
          <PhotoGallery />
        </section>

        {/* Find Therapists from around the world */}

        <section className="mx-[10%] p-[5%] mt-[100px] h-[60vh] bg-mint-tulip-100 text-center flex flex-col items-center justify-center">
          <div className="mx-[20%] ">
            <h1 className="text-[25px] lg:text-[35px] font-medium">
              Find a Therapist that suits <span className=" italic">your</span>{" "}
              exact needs and preferences
            </h1>
            <div className="text-[17px] lg:text-[20px] mt-10">
              <p className="hidden md:flex items-center justify-center my-5">
                The right therapist is fundamental to receiving the support you
                need.
              </p>
              <p>
                Take control of your journey to better health by choosing the
                therapist who best suits your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Meet the Best Empathy Therapists */}
        <section className="flex flex-col lg:flex-row w-[100%] justify-center mt-[300px] md:mt-[200px]  lg:mt-[50px] px-[2.5%] h-[80vh] items-center">
          <div className="lg:w-[50%]">
            <div className="mb-[50px]  text-center lg:text-left lg:w-[70%]">
              <h1 className="text-[30px] text-mint-tulip-700">
                Meet the Therapists on
              </h1>
              <h1 className="text-[32px] font-semibold text-mint-tulip-700 mt-[-10px]">
                Best Empathy
              </h1>
              <p className="text-[17px] mt-4">
                Our network of therapists and psychiatric providers have
                specialization in 150+ conditions, treatment approaches, and
                mental health needs.
              </p>
            </div>

            {/* Specialties */}
            <div className="grid grid-cols-2 lg:grid-cols-3">
              {therapistSpecialties.map((specialty, idx) =>
                idx % 3 == 0 ? (
                  <div className="flex flex-row items-center">
                    <FontAwesomeIcon
                      className=" text-green-700 mx-2 border-white border-[2px] font-bold"
                      icon={faCheck}
                      size="1x"
                    />
                    <p className=" font-semibold">{specialty.label}</p>
                  </div>
                ) : (
                  ""
                )
              )}
              <p className="ml-[20px] font-semibold mt-3">...and much more</p>
            </div>
          </div>

          {/* Changing Image */}
          <div className="lg:w-[30%] flex justify-center">
            {/* Image Background */}

            <div className="h-[400px] w-[400px] mt-[30px]">
              <div className="absolute -z-10 brightness-50 ">
                <Image
                  src={therapistPreviewImages[currentIndex]}
                  objectFit="cover"
                  quality={100}
                  width={400}
                  height={400}
                  className="rounded-3xl"
                />
              </div>
              <div className="h-full flex flex-col justify-end ml-[5%] pb-[5%]">
                <div className="text-white">
                  <p className="text-[12px]">Therapist on Best Empathy</p>
                  <p>
                    {`${therapistPreviews[currentIndex].firstName}` +
                      ` ` +
                      therapistPreviews[currentIndex].lastName +
                      `, ` +
                      therapistPreviews[currentIndex].title}
                  </p>
                  <p className="w-[70%] font-semibold text-[13px]">
                    {therapistPreviews[currentIndex].specialties.map(
                      (specialty, idx) =>
                        specialty.label + (idx < 2 ? ", " : "")
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-[300px] lg:mt-[100px]">
          <div className="flex flex-col lg:flex-row px-[12.5%] mt-[50px] bg-mint-tulip-500 py-[50px] lg:py-[100px]">
            <div className="text-[36px] lg:w-[50%] mb-[25px] font-semibold text-white">
              <h1>Frequently</h1>
              <h1>Asked Questions</h1>
            </div>

            {/* FAQs */}
            <div className="lg:w-[50%]">
              <Accordion
                open={openFaqs === 4}
                className="mb-5 rounded-lg  border-blue-gray-100 border-[2px] px-4 text-white"
                icon={<Icon id={4} open={openFaqs} />}
              >
                <AccordionHeader
                  onClick={() => handleOpenFaqs(4)}
                  className={`text-white py-[25px] border-b-0 transition-colors hover:underline hover:text-white${
                    openFaqs === 4 ? "text-gray-200 hover:underline" : ""
                  }`}
                >
                  <p className="mx-3 capitalize">
                    How much does Therapy on Best Empathy Cost?
                  </p>
                </AccordionHeader>
                <AccordionBody className="pt-0 text-base font-normal">
                  <div className="text-justify text-white">
                    Therapy sessions are priced starting at 10 USD per session,
                    with rates varying upwards depending on the therapist and/or
                    insurance. This variability is due to our diverse team of
                    therapists located across the globe, with their prices
                    reflecting the cost of living in their respective regions.
                    We believe in offering accessible mental health support
                    while respecting the economic realities of different
                    locations, ensuring that individuals can find affordable
                    therapy options tailored to their needs and financial
                    circumstances.
                  </div>
                </AccordionBody>
              </Accordion>
              <Accordion
                open={openFaqs === 5}
                className="mb-5 rounded-lg  border-blue-gray-100 border-[2px] px-4 text-white"
                icon={<Icon id={5} open={openFaqs} />}
              >
                <AccordionHeader
                  onClick={() => handleOpenFaqs(5)}
                  className={`text-white py-[25px] border-b-0 transition-colors hover:underline hover:text-white${
                    openFaqs === 5 ? "text-gray-200 hover:underline" : ""
                  }`}
                >
                  <p className="mx-3 capitalize">
                    Can I use insurance for Therapy Sessions?
                  </p>
                </AccordionHeader>
                <AccordionBody className="pt-0 text-base font-normal">
                  <div className="text-justify text-white">
                    Numerous therapists in our community of Mental Health
                    Counselors readily accept insurance as a payment method for
                    sessions, enhancing accessibility to mental health care for
                    individuals seeking support. Clients interested in utilizing
                    insurance are encouraged to explore therapists located in
                    their local area, as they are more likely to accommodate
                    insurance payments. This approach ensures smoother
                    processing and greater coverage for therapy sessions,
                    aligning with our commitment to facilitating convenient and
                    inclusive mental health services for all.
                  </div>
                </AccordionBody>
              </Accordion>
              <Accordion
                open={openFaqs === 6}
                className="mb-5 rounded-lg  border-blue-gray-100 border-[2px] px-4 text-white"
                icon={<Icon id={6} open={openFaqs} />}
              >
                <AccordionHeader
                  onClick={() => handleOpenFaqs(6)}
                  className={`text-white py-[25px] border-b-0 transition-colors hover:underline hover:text-white${
                    openFaqs === 6 ? "text-gray-200 hover:underline" : ""
                  }`}
                >
                  <p className="mx-3 capitalize">How do I find a Therapist?</p>
                </AccordionHeader>
                <AccordionBody className="pt-0 text-base font-normal">
                  <div className="text-justify text-white">
                    Locating a therapist is effortless through our user-friendly
                    interface. Simply navigate to the "Find a Therapist" page,
                    where you can input your desired location and reason for
                    therapy. Instantly, you'll be presented with a comprehensive
                    list of therapists matching your criteria in the specified
                    area. Utilize our intelligent filters to narrow down your
                    options further, filtering based on factors such as gender,
                    religious preference, languages spoken by the therapist, and
                    more. This streamlined process ensures that you find your
                    perfect match, tailored to your specific preferences and
                    needs, fostering a supportive and personalized therapeutic
                    journey.
                  </div>
                </AccordionBody>
              </Accordion>
              <Accordion
                open={openFaqs === 7}
                className="mb-5 rounded-lg  border-blue-gray-100 border-[2px] px-4 text-white"
                icon={<Icon id={7} open={openFaqs} />}
              >
                <AccordionHeader
                  onClick={() => handleOpenFaqs(7)}
                  className={`text-white py-[25px] border-b-0 transition-colors hover:underline hover:text-white${
                    openFaqs === 7 ? "text-gray-200 hover:underline" : ""
                  }`}
                >
                  <p className="mx-3 capitalize">
                    Why don't you guys choose a therapist for me?
                  </p>
                </AccordionHeader>
                <AccordionBody className="pt-0 text-base font-normal">
                  <div className="text-justify text-white">
                    We prioritize your autonomy and empowerment in navigating
                    your therapy journey. That's why we don't subject you to the
                    conventional practice of filling out a short form to get
                    matched with a therapist. We understand that such forms
                    often fail to capture the nuances of your internal
                    experiences, preferences, and emotions. Moreover, we
                    recognize that therapy is a deeply personal journey, and the
                    dynamic between therapist and client plays a crucial role.
                    By refraining from automated matching, we grant you full
                    control over selecting a therapist who resonates with you on
                    a deeper level. This approach ensures that you're not just
                    assigned a therapist but actively choose someone with whom
                    you feel comfortable and connected, fostering a more
                    meaningful and effective therapeutic relationship tailored
                    to your unique needs and goals.
                  </div>
                </AccordionBody>
              </Accordion>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
