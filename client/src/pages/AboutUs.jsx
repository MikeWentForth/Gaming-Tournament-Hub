import './aboutUs.css'
import { motion } from 'framer-motion';

const AboutUs = () => {

    return (
      <>
        <motion.section initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }}>
      <section className="about-us-info">
      <h1>More information about us...</h1>
        <h3 className="h3-underline">Justin</h3>
        <p>My name is Justin...<a href= "https://github.com/CJFeagin33">Click here</a> to see my Github portfolio. </p>
        <h3 className="h3-underline">Mike</h3>
        <p>My name is Mike Wallace. I'm a full stack web developer that specializes on front end web applications. Please contact me at themikewallace@gmail.com for any web design needs. Also please <a href="https://github.com/MikeWentForth">Click here</a>to see my Github portfolio. </p>
        <h3 className="h3-underline">Matthew</h3>
        <p>My name is Matthew...<a href="https://github.com/matthkang">Click here</a> to see my Github portfolio. </p>
        <h3 className="h3-underline">Phillip</h3>
        <p>My name is Phillip...<a href="https://github.com/Pixls112">Click here</a> to see my Github portfolio. </p>
        <h3 className="h3-underline">Javier</h3>
        <p>My name is Javier...<a href="https://github.com/JavierBurgara">Click here</a> to see my Github portfolio. </p>
      </section>
      </motion.section>
      </>
    );
  };
  
  export default AboutUs;

  //Header - Learn About Us