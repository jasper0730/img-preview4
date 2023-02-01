import OPTIONS from './options.js';
class ImgPreview4 extends HTMLElement {
    constructor() {
      super();
    }
    // static get observedAttributes() {
    //   return [];
    // }
    // attributeChangedCallback(attr, oldVal, newVal) {}
    // connectedCallback() {
    //   if (!this.classList.contains('ip4-initialize')) this.#create();
    // }
    #create() {
      const options = {
        group: this.getAttribute('group') || OPTIONS.SETTINGS.group, //群組名稱 (type: String)
        sizeLimit: Number(this.getAttribute('size-limit')) || OPTIONS.SETTINGS.sizeLimit, //大小限制 (type: Number 單位: MB)
        previewSize: this.getAttribute('preview-size') || OPTIONS.SETTINGS.group, //縮圖形式 (type: String 'contain' || 'cover')
        compress: Number(this.getAttribute('compress')) || OPTIONS.SETTINGS.compress, //壓縮品質 (type: Number 0~1 || false)
      };
    }
  }

  Object.assign(ImgPreview4.prototype, SHARED);

  customElements.define('img-preview4', ImgPreview4)

export default ImgPreview4;