// @ts-check
import { encodeObject, decodeObject } from "../services/helper";
import { customElement, property } from "lit/decorators.js";
import { html, css, LitElement } from "lit";
import { styleMap } from "lit-html/directives/style-map.js";

const componentStyle = css`
  :host {
    max-width: 100%;
  }
  .card {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
    width: 320px;
    border-radius: 12px;
    transform: scale(0.95, 0.95);
    overflow: hidden;
    box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
  }
  .card:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1, 1);
    z-index: 2;
  }
  
  
  .card-info {
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 16px 24px 16px 24px;
    height: 155px;
  }
  .card-title {
    margin-top: 5px;
    margin-bottom: 10px;
    font-family: "Roboto Slab", serif;
    text-decoration: none;
    color: black;
  }
  
  medium-category-chips {
    margin-top: auto;
  }
  @media only screen and (max-width: 580px) {
    .card {
      width: 100%;
      transform: scale(1, 1);
      border-radius: 0;
      margin-top: 10px;
    }
  }
`;

@customElement("content-card")
class ContentCardComponent extends LitElement {
  static styles = [componentStyle];

  @property()
  content!: any;
  
  private _onclick(e: Event) {
    const options = {
      detail: this.content,
      bubbles: true,
      composed: true
    };
    this.dispatchEvent(new CustomEvent('sb:content:clicked', options));
  }

  render() {
    return html`
      <article class="card card--1" @click="${this._onclick}">
        <div class="card-info">
          <div class="card-title">
            ${this.content.name}
          </div>
        </div>
      </article>
    `;
  }
}