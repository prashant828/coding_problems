function dialer(nums) {
    let map = {'2': ['a', 'b', 'c'], '3': ['d', 'e', 'f', 'g']};
    let index = 0;
    let str = '';
    for (let i = 0; i < nums.length; i++) {
      let curr = nums[i];
      if (curr == nums[i + 1]) {
        index = index + 1 < map[curr].length ? index + 1 : 0;
      } else {
        // let alIndex = Math.floor(map[curr].length /index
        str += map[curr][index];
        index = 0;
      }
    }
    return str;
  }
