import { useEffect, useRef, useState } from "react";
import CountUp, { useCountUp } from "react-countup"

interface ChartElementProps {
    title: string
    counter: string
    description: string
}

export default function ChartElement(props: ChartElementProps){
    const {title, counter, description} = props
    const countUpRef = useRef(null);
    const [isIn, setIsIn] = useState(false)
    const { start, pauseResume, reset, update } = useCountUp({
        ref: countUpRef,
        end: parseInt(counter),
        prefix: parseInt(counter) < 10 ? "0" : "",
        duration: 2.75,
      });

      useEffect(() => {
        const checkPosition = () => {
          const chartDiv = document.getElementById('chart');
          const rectChart = chartDiv!.getBoundingClientRect();
          
          if (rectChart.top <= 200 && rectChart.top >= 0) {
            if(!isIn) {
                setIsIn(true)
            }
          }
          else {
            if(isIn) {
                setIsIn(false)
            }
          }
        };
      
        checkPosition();
      
        const handleScroll = () => {
          checkPosition();
        };
      
        window.addEventListener("scroll", handleScroll);
      
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [isIn]);

      useEffect(() => {
        if(isIn) {
            start()
        } else {
          console.log('Hors du container');
        }
      })

    return (
        <div className="flex flex-col mr-auto md:mr-0 md:items-center pt-16">
            <span className="block text-dark-gray dark:text-blue-gray text-xl">{title}</span>
            <span className="block text-primary dark:text-white text-8xl" ref={countUpRef}>
                {/* <CountUp end={parseInt(counter)} delay={5} duration={3.75} prefix={parseInt(counter) < 10 ? "0" : ""}/> */}
            </span>
            <span className="block text-primary dark:text-white text-xl">{description}</span>
        </div>
    )
}