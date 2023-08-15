export default function createDoubleClick(cb : Function) {
  let interval = false;
  let timer: NodeJS.Timeout;
  return function doubleClick() {
    clearTimeout(timer);
    if (interval) {
      cb();
      return;
    }
    interval = true;
    timer = setTimeout(() => {
      interval = false;
    }, 500);
  }
}

