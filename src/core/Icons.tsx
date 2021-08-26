import React from 'react';

import LikeSvg from '../assets/like.svg';
import HeartSvg from '../assets/heart.svg';
import LaughSvg from '../assets/haha.svg';
import YaySvg from '../assets/yay.svg';
import WowSvg from '../assets/wow.svg';
import SadSvg from '../assets/sad.svg';
import AngrySvg from '../assets/angry.svg';

export const LikeEmoji = props => (
  <LikeSvg
    width={props.width ? props.width : 40}
    height={props.height ? props.height : 35}
  />
);

export const HeartEmoji = props => (
  <HeartSvg
    width={props.width ? props.width : 40}
    height={props.height ? props.height : 35}
  />
);

export const LaughEmoji = props => (
  <LaughSvg
    width={props.width ? props.width : 40}
    height={props.height ? props.height : 35}
  />
);

export const YayEmoji = props => (
  <YaySvg
    width={props.width ? props.width : 40}
    height={props.height ? props.height : 35}
  />
);

export const WowEmoji = props => (
  <WowSvg
    width={props.width ? props.width : 40}
    height={props.height ? props.height : 35}
  />
);

export const SadEmoji = props => (
  <SadSvg
    width={props.width ? props.width : 40}
    height={props.height ? props.height : 35}
  />
);

export const AngryEmoji = props => (
  <AngrySvg
    width={props.width ? props.width : 40}
    height={props.height ? props.height : 35}
  />
);
