export default class RTFParagraph {
  style: any;
  content: any[];

  constructor(opts?) {
    if (!opts) opts = {};
    this.style = opts.style || {};
    this.content = [];
  }
}
