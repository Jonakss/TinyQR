module.exports = (input) => {
    let hs = '';
    let s = 'YSzh2T9fcXEtyMLn1qwGN0FxwJ4Psg5rZ3e6KUBupoOQDbH8vk7mRVilAdaCIj'.split('');
    while (input > 0) {
        hs = s[input % 62] + hs;
        input = Math.floor(input/62);
    }
    return hs;
};