import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "next-i18next";
import { BASE_CSS } from "@/utils/baseCss";
import styled from "styled-components";
import { useInterval } from "@/architecture/application/useInterval";

interface Props {
  time: string;
  now: number;
}

const convertDateTime = (date: number) => {
  const time = date - 1000;
  const sec = Math.floor(time / 1000) % 60;
  const min = Math.floor(time / 1000 / 60) % 60;
  const hours = Math.floor(time / 1000 / 60 / 60) % 24;
  const days = Math.floor(time / 1000 / 60 / 60 / 24);
  return `${days}日 - ${hours}時間 - ${min}分 - ${sec}秒`;
};

const EcTimeReflection: React.FC<Props> = ({ time, now }) => {
  const { t } = useTranslation("common");
  const [isTime, setIsTime] = useState(new Date(time).getTime() - now);
  const [timeReflection, setTimeReflection] = useState(() => {
    return convertDateTime(isTime);
  });

  useInterval({
    onUpdate: () => {
      const reload = 0;
      if (isTime === reload) {
        history.go(0);
      }

      const time = isTime - 1000;
      const convert = convertDateTime(time);

      setIsTime(time);
      setTimeReflection(convert);
    },
  });

  return (
    <>
      <FlexElement>
        {isTime >= 1 && (
          <p>
            <span>{t("common.vote.message.beforeDate")} / </span>
            {timeReflection}
          </p>
        )}
      </FlexElement>
    </>
  );
};

export default EcTimeReflection;

const FlexElement = styled.div`
  display: flex;
  justify-content: center;
`;
