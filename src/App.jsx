import React from "react";
import styles from "./style"; //to import some basic styles to implement on page.
import { Navbar , Hero, Billing, Business, CardDeal, CTA, Clients, Testimonials, Stats, Footer,
} from "./components"; //as we moved all the components to a file in components folder.

// when react functional Component simply returns JSX then we can remove the return statement.
const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      {/*   tagged templates used */}
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats /> 
        <Business /> 
        <Billing /> 
        <CardDeal /> 
        <Testimonials /> 
        <Clients /> 
        <CTA /> 
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
