import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

function FadeInSection({ children, delay = 0, duration = 350 }) {
  const [ref, inView] = useInView({
    triggerOnce: false, // Permite que a animação aconteça ao entrar e sair
    threshold: 0.3, // Ajuste conforme necessário
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0) scale(1)" : "translateY(7px) scale(0.99)", // De baixo para cima com zoom
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
