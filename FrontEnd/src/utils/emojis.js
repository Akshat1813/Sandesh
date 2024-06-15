export const emojiList = [
    '😀', '😂', '🤣', '😊', '😍', '😘', '😜', '🤔', '🤗', '😎', '😏', '😒', '😔', '😷', '🤒',
    '🤕', '🙄', '😩', '😡', '😱', '😴', '🥳', '🥺', '🤓', '🥴', '🤖', '👻', '👽', '💀', '👾',
    '🤡', '👹', '👺', '👿', '🦊', '🐻', '🐼', '🐨', '🐸', '🐤', '🦄', '🐝', '🐞', '🦋', '🐍',
    '🐙', '🦑', '🦀', '🐡', '🐬', '🦈', '🐋', '🐊', '🐆', '🐅', '🦓', '🦍', '🦧', '🦏', '🦛',
    '🐘', '🐪', '🦙', '🦥', '🦦', '🐿️', '🦢', '🦩', '🦚', '🦜', '🦉', '🦢', '🦃', '🐕', '🐩'
  ];
  
  export const getRandomEmoji = () => {
    const randomIndex = Math.floor(Math.random() * emojiList.length);
    return emojiList[randomIndex];
  };
  

  