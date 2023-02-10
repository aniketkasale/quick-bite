import image from "../assets/ContactUs.svg";

const ContactUs = () => {
  return (
    <div className="h-full w-auto flex flex-wrap justify-center my-10 mx-auto">
      <div>
        <img className="h-[76vh]" src={image} alt="Contact Us" />
      </div>
    </div>
  );
};

export default ContactUs;
