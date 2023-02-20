import { html, LitElement } from "lit";
import "./components/sb-contents"
import { customElement, property } from "lit/decorators.js";

export interface contentsInterface {
  identifier: string;
  name: string;
  channel: string;
}


const globalStyles = `
<style>
  #content-list-wrapper {
    background-color: #868686;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 20px 0px;
    height: 400px;
    overflow: hidden;
    overflow-y: scroll;
  }
  </style>
`;

const DEFAULT_MAX_CONTENTS = 10;
@customElement("content-list")
class ContentList extends LitElement {
  @property({attribute: false})
  contentList: contentsInterface[] = [
    {"name":"Content One","identifier" :"do_123456789", "channel" : "Hello"},
    {"name":"Test","identifier" :"do_123456789", "channel" : "Hello"},
    {"name":"Test","identifier" :"do_123456789", "channel" : "Hello"},
    {"name":"Test","identifier" :"do_123456789", "channel" : "Hello"},
    {"name":"Test","identifier" :"do_123456789", "channel" : "Hello"},
    {"name":"Test","identifier" :"do_123456789", "channel" : "Hello"},
    {"name":"Test","identifier" :"do_123456789", "channel" : "Hello"},
    {"name":"Content Details","identifier" :"do_123456789", "channel" : "Hello"},
    {"name":"Content Details","identifier" :"do_123456789", "channel" : "Hello"},
    {"name":"Content Details","identifier" :"do_123456789", "channel" : "Hello"},
    {"name":"Content Details","identifier" :"do_123456789", "channel" : "Hello"}
  ];
  constructor() {
    super();
    this.innerHTML += globalStyles;
    // this.addEventListener('sb:content:clicked', (e: any) => alert(e.detail.name));
  }

  get hideButton() {
    return this.getAttribute("hideButton") !== null;
  }

  get maxContents() {
    const maxContents =
      this.getAttribute("maxContents") ?? DEFAULT_MAX_CONTENTS;
    return !isNaN(+maxContents) ? +maxContents : DEFAULT_MAX_CONTENTS;
  }

  createRenderRoot() {
    /**
     * Render template without shadow DOM. Note that shadow DOM features like
     * encapsulated CSS and slots are unavailable.
     */
    return this;
  }

  private _checkedHandler(e: CustomEvent) {
    alert(e.detail.name);
  }

  render() {
    return this.contentList
      ? html`
          <div id="content-list-wrapper" @sb:content:clicked=${this._checkedHandler}>
            <sb-contents
              .contents="${this.contentList}"
            ></sb-contents>
          </div>
        `
      : html``;
  }
}