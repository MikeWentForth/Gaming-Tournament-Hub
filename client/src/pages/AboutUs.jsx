import './aboutUs.css'
import { motion } from 'framer-motion';

const AboutUs = () => {

  return (
    <>
      <motion.section initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }}>
        <section className="about-us-info">
          <h1>More information about us...</h1>
          <h3 className="h3-underline">Justin</h3>
          <p>My name is Justin...<a href="https://github.com/CJFeagin33">Click here</a> to see my Github portfolio. </p>
          <h3 className="h3-underline">Mike</h3>
          <p>My name is Mike Wallace. I'm a full stack web developer that specializes on front end web applications. I also have a have a passion for playing and recording music for film and television. For any web design or music needs, please contact me at themikewallace@gmail.com. Also please <a href="https://github.com/MikeWentForth">Click here</a>to see my Github portfolio. </p>
          <h3 className="h3-underline">Matthew</h3>
          <p>My name is Matthew...<a href="https://github.com/matthkang">Click here</a> to see my Github portfolio. </p>
          <h3 className="h3-underline">Phillip</h3>
          <p>My name is Phillip, I'm passionate about playing games, especially things related to Fighting, Souls-like or Dungeons and Dragons. I also love building PCs and customizing them. When I'm not gaming or building PCs, I like to read manga or watch anime. I'm always looking for new ways to have fun and explore the world of gaming and making new friends along the way. No matter what I do, my goal is to make sure that everyone around me is having a good time.<a href="https://github.com/Pixls112">Click here</a> to see my Github portfolio. </p>
          <h3 className="h3-underline">Javier</h3>
          <p>My name is Javier. I have a strong passion for both gaming and basketball. Currently, I am actively engaged in the realm of competitive online gaming, particularly within the titles of League of Legends and Apex Legends. Moreover, during weekends, I participate in organized basketball leagues alongside a close-knit group of friends, adding an element of physical recreation and camaraderie to my leisure pursuits. In a recent discovery, I have found a profound interest in the art of coding. This newfound passion has significantly impacted my approach to problem-solving and my capacity to address various challenges, particularly those encountered within coding projects and during the completion of tasks within my coding bootcamp. It has underscored the importance of meticulous and strategic thinking in my problem-solving endeavors, thereby enhancing my capabilities in the coding domain.<a href="https://github.com/JavierBurgara">Click here</a> to see my Github portfolio. </p>
        </section>
      </motion.section>
    </>
  );
};

export default AboutUs;

//Header - Learn About Us