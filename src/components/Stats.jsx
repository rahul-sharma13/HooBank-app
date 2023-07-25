import { stats } from "../constants";
import styles from "../style";
import Counter from "./common/Counter";

const Stats = () =>  (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20  mb-6`} >
      {stats.map((stat)=>(
        <div key={stat.id} className="flex-1 flex flex-row justify-start items-center m-3 ">
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white" >
            <Counter from={0}
              to={stat.value} 
              textBefore={stat.textBefore ? stat.textBefore : ""}
              textAfter={stat.text}
            />
          </h4>
          <p className="font-poppins text-gradient font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] ml-3 uppercase" >{stat.title}</p>
        </div>
      ))}
      
    </section>
  )

export default Stats