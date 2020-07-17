export default class RTFSpan {
  value: any;
  style: any;

  constructor(opts) {
    if (!opts) opts = {};
    this.value = opts.value;
    this.style = opts.style || {};
  }
}
