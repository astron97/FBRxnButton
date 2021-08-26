import React, {useState, memo} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  PanResponder,
  Animated,
} from 'react-native';
import {
  LikeEmoji,
  LaughEmoji,
  HeartEmoji,
  YayEmoji,
  SadEmoji,
  WowEmoji,
  AngryEmoji,
} from '../core/Icons';

const HomeScreen = () => {
  const touchThreshold = 5;
  const [isPressAndDrag, setIsPressAndDrag] = useState(false);
  const [emoji, setEmoji] = useState('');
  const [likeAnim, setlikeAnim] = useState({width: 45, height: 50});
  const [heartAnim, setheartAnim] = useState({width: 45, height: 50});
  const [laughAnim, setlaughAnim] = useState({width: 45, height: 50});
  const [yayAnim, setyayAnim] = useState({width: 45, height: 50});
  const [wowAnim, setwowAnim] = useState({width: 45, height: 50});
  const [sadAnim, setsadAnim] = useState({width: 45, height: 50});
  const [angryAnim, setangryAnim] = useState({width: 45, height: 50});

  const onEmojiHover = (x, y) => {
    if (x >= -15 && x <= 38 && y <= -33 && y >= -72) {
      setEmoji('like');
      setlikeAnim({
        width: 50,
        height: 55,
      });
    } else {
      setlikeAnim({
        width: 45,
        height: 50,
      });
    }
    if (x >= 33 && x <= 73 && y <= -33 && y >= -72) {
      setEmoji('heart');
      setheartAnim({
        width: 50,
        height: 55,
      });
    } else {
      setheartAnim({
        width: 45,
        height: 50,
      });
    }
    if (x >= 77 && x <= 117 && y <= -33 && y >= -72) {
      setEmoji('laugh');
      setlaughAnim({
        width: 50,
        height: 55,
      });
    } else {
      setlaughAnim({
        width: 45,
        height: 50,
      });
    }
    if (x >= 125 && x <= 166 && y <= -33 && y >= -72) {
      setEmoji('yay');
      setyayAnim({
        width: 50,
        height: 55,
      });
    } else {
      setyayAnim({
        width: 45,
        height: 50,
      });
    }
    if (x >= 183 && x <= 223 && y <= -33 && y >= -72) {
      setEmoji('wow');
      setwowAnim({
        width: 50,
        height: 55,
      });
    } else {
      setwowAnim({
        width: 45,
        height: 50,
      });
    }
    if (x >= 229 && x <= 265 && y <= -33 && y >= -72) {
      setEmoji('sad');
      setsadAnim({
        width: 50,
        height: 55,
      });
    } else {
      setsadAnim({
        width: 45,
        height: 50,
      });
    }
    if (x >= 277 && x <= 317 && y <= -33 && y >= -72) {
      setEmoji('angry');
      setangryAnim({
        width: 50,
        height: 55,
      });
    } else {
      setangryAnim({
        width: 45,
        height: 50,
      });
    }
    if (x <= -15 && x >= 319 && y >= -33 && y <= -72) {
      setIsPressAndDrag(false);
    }
  };
  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => false,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        const {dx, dy} = gestureState;
        return Math.abs(dx) > touchThreshold || Math.abs(dy) > touchThreshold;
      },
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        setIsPressAndDrag(true);
      },
      onPanResponderMove: (evt, gestureState) => {
        const {dx, dy} = gestureState;
        onEmojiHover(dx, dy);
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        setIsPressAndDrag(false);
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        return true;
      },
    }),
  ).current;

  return (
    <View style={[{flex: 1, justifyContent: 'center'}]}>
      <View
        {...panResponder.panHandlers}
        style={[
          {
            justifyContent: 'flex-end',
            height: 100,
          },
        ]}>
        {isPressAndDrag ? (
          <View
            style={[
              {
                flexDirection: 'row',
                position: 'absolute',
                borderColor: '#f2f2f2',
                backgroundColor: '#f2f2f2',
                padding: 5,
                top: 1,
                left: 5,
                borderWidth: 1,
                borderRadius: 50,
                height: 65,
                maxWidth: '100%',
                justifyContent: 'space-around',
              },
            ]}>
            <Animated.View key={'like'} style={[{paddingHorizontal: 3}]}>
              <LikeEmoji width={likeAnim.width} height={likeAnim.height} />
            </Animated.View>
            <Animated.View key={'heart'} style={[{paddingHorizontal: 3}]}>
              <HeartEmoji width={heartAnim.width} height={heartAnim.height} />
            </Animated.View>
            <Animated.View key={'laugh'} style={[{paddingHorizontal: 3}]}>
              <LaughEmoji width={laughAnim.width} height={laughAnim.height} />
            </Animated.View>
            <Animated.View key={'yay'} style={[{paddingHorizontal: 3}]}>
              <YayEmoji width={yayAnim.width} height={yayAnim.height} />
            </Animated.View>
            <Animated.View key={'wow'} style={[{paddingHorizontal: 3}]}>
              <WowEmoji width={wowAnim.width} height={wowAnim.height} />
            </Animated.View>
            <Animated.View key={'sad'} style={[{paddingHorizontal: 3}]}>
              <SadEmoji width={sadAnim.width} height={sadAnim.height} />
            </Animated.View>
            <Animated.View key={'angry'} style={[{paddingHorizontal: 3}]}>
              <AngryEmoji width={angryAnim.width} height={angryAnim.height} />
            </Animated.View>
          </View>
        ) : null}
        <TouchableHighlight
          onPress={() => {
            emoji === '' ? setEmoji('like') : setEmoji('');
          }}
          activeOpacity={0.5}
          underlayColor="#DDDDDD"
          style={[
            {
              borderColor: 'black',
              borderWidth: 1,
              maxHeight: 65,
              maxWidth: 70,
            },
          ]}>
          <View
            style={[{flexDirection: 'row', padding: 2, alignSelf: 'center'}]}>
            {emoji === 'like' ? (
              <LikeEmoji width={25} height={20} />
            ) : emoji === 'heart' ? (
              <HeartEmoji width={25} height={20} />
            ) : emoji === 'laugh' ? (
              <LaughEmoji width={25} height={20} />
            ) : emoji === 'yay' ? (
              <YayEmoji width={25} height={20} />
            ) : emoji === 'wow' ? (
              <WowEmoji width={25} height={20} />
            ) : emoji === 'sad' ? (
              <SadEmoji width={25} height={20} />
            ) : emoji === 'angry' ? (
              <AngryEmoji width={25} height={20} />
            ) : (
              <LikeEmoji width={25} height={20} />
            )}
            <Text
              style={[
                {
                  textAlign: 'center',
                  color: emoji ? '#3399ff' : 'black',
                },
              ]}>
              {emoji === 'like'
                ? 'Like'
                : emoji === 'heart'
                ? 'Heart'
                : emoji === 'laugh'
                ? 'Laugh'
                : emoji === 'yay'
                ? 'Yay'
                : emoji === 'wow'
                ? 'Wow'
                : emoji === 'sad'
                ? 'Sad'
                : emoji === 'angry'
                ? 'Angry'
                : 'Like'}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default memo(HomeScreen);
