import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

function FadeInSection({ children, delay = 0, duration = 1000, direction = "left" }) {
  const [ref, inView, entry] = useInView({
    triggerOnce: false, // Permite que a animação aconteça ao entrar e sair
    threshold: 0.1, // Ajuste conforme necessário
  });

  const fromX = direction === "left" ? "-100px" : "100px"; // Direção de onde o conteúdo entra e sai

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0) scale(1)" : `translateX(${fromX}) scale(0.8)`,
    config: { duration },
    delay: inView ? delay : 0,
  });

  return (
    <animated.div ref={ref} style={animation}>
      {children}
    </animated.div>
  );
}

export default FadeInSection;
