import HomeBody from "../components/HomeBody";
import NavLinks from "../components/NavLinks";
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
    <motion.div initial={{ y: 300, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 1.0 } }}>
      <HomeBody />
      </motion.div>
    </>
  );
};

export default Home;
