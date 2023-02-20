import { customElement, property } from "lit/decorators.js";
import { html, css, LitElement } from "lit";
import "../components/content-card"

const componentStyles = css`
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

@customElement("sb-contents")
export class ContentsComponent extends LitElement {
  @property()
  contents: any[] = [];
  static styles = componentStyles;

  render() {
    return html`
      <section class="cards">
        ${this.contents.map(
          (content: any) =>
            html`<content-card
              .content="${content}"
            ></content-card>`
        )}
      </section>
    `;
  }
}