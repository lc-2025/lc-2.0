'use client';

import AnimationTypedList from '../Animation/AnimationTypedList';
import { useStateContext } from '@/hooks/State';
import { setInitial, isLightTheme } from '@/utilities/utils';
import { TAnimationList } from '@/types/components/AnimationTypedList';

/**
 * @description List component
 * @author Luca Cattide
 * @date 03/07/2025
 * @returns {*}  {React.ReactNode}
 */
const List = ({ list, speed, delay }: TAnimationList): React.ReactNode => {
  // Hooks
  const { theme } = useStateContext();

  return (
    // List Start

    <ul
      className={`menu__entries p-6 ${isLightTheme(theme) && 'leading-mobile lg:leading-desktop'}`}
    >
      {list.map((entry, i) => (
        <AnimationTypedList
          key={crypto.randomUUID() + i}
          speed={speed}
          delay={delay ? delay + i * 700 : i * 700}
          content={[
            `${setInitial(entry)}`,
          ]}
        />
      ))}
    </ul>
    // List End
  );
};

export default List;
