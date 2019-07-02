'use strict';

const spinner = ['\r|   ','\r/   ','\r-   ','\r\\   '];

const displayString = (arr,count,repeat) => {
  setTimeout(() => {
    process.stdout.write(arr[count % 4]);
    if (count < repeat) displayString(arr,++count,repeat);
  }, 100);
};

displayString(spinner, 0, 100);