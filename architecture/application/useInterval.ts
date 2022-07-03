import { useEffect, useReducer, useRef } from "react";

type Params = {
  onUpdate: () => void;
};

type OnUpdate = () => void;

export const useInterval = ({ onUpdate }: Params) => {
  const onUpdateRef = useRef<OnUpdate>(() => {});
  useEffect(() => {
    onUpdateRef.current = onUpdate;
  }, [onUpdate]);
  useEffect(() => {
    const timerId = setInterval(() => onUpdateRef.current(), 1000);
    return () => clearInterval(timerId);
  }, []);
};

export default useInterval;
