import Image from "next/image";
import { assets } from "@/assets/assets";
import { useState } from "react";
import { motion } from "motion/react";

interface ContactProps {
  isDarkMode: boolean;
}

const Contact = ({ isDarkMode }: ContactProps) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "1ba76054-52f0-4d21-be3c-adac4673e61d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div 
    initial ={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}} 
    id="contact" className="w-full px-[12%] py-10 scroll-mt-20 relative">
      {!isDarkMode && (
        <Image
          src="/footer-bg-color.png"
          alt="Footer Background"
          layout="fill"
          objectFit="cover"
          className="z-[-1]"
        />
      )}
      <motion.h4 
      initial ={{opacity:0,y:-20}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.5, delay:0.3}} 
      className="text-center mb-2 text-lg font-ovo">Connect with me</motion.h4>
      <motion.h2 
      initial ={{opacity:0,y:-20}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.7, delay:0.5}}
      className="text-center text-5xl font-ovo">Get in touch</motion.h2>
      <motion.p 
      initial ={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.5, delay:0.3}}
      className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        Feel free to reach out with any questions or inquiries!
      </motion.p>
      <motion.form 
      initial ={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.5, delay:0.9}}
      onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
          <motion.input
            initial ={{opacity:0,x:-50}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.6, delay:1.1}}
            type="text"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-[#2a004a]/30 dark:border-white/90"
            name="name"
          />
          <motion.input
           initial ={{opacity:0,x:50}}
           whileInView={{opacity:1,x:0}}
           transition={{duration:0.6, delay:1.2}}
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white  dark:bg-[#2a004a]/30 dark:border-white/90"
            name="email"
          />
        </div>
        <motion.textarea
           initial ={{opacity:0,y:100}}
           whileInView={{opacity:1,y:0}}
           transition={{duration:0.6, delay:1.3}}
          rows={6}
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6  dark:bg-[#2a004a]/30 dark:border-white/90"
          name="message"
        ></motion.textarea>
        <motion.button
          whileHover={{scale:1.05}}
          transition={{duration:0.3}}
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer dark:bg-transparent dark:border-[0.5px] dark:hover:bg-[#2a004a]"
          type="submit"
        >
          Submit Now
          <Image src={assets.right_arrow_white} alt="right arrow" className="w-4" />
        </motion.button>
        <p className="mt-4">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
