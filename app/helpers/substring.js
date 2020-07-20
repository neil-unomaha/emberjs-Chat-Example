import { helper } from '@ember/component/helper';

function substring([string, start, end]) {
  return string.substring(start, end);
}

export default helper(substring);
