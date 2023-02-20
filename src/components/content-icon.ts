import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

const componentStyle = css`
  .avatar {
    width: 50px;
    border-radius: 50%;
    box-shadow: 0px 13px 10px -7px rgb(0 0 0 / 10%);
  }
`;

@customElement("content-icon")
class ContentIcon extends LitElement {
  static styles = [componentStyle];

  @property()
  image!: string;

  render() {
    return html` <img class="contentIcon" src="${this.image}" /> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "content-icon": ContentIcon;
  }
}