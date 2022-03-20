import { planetTextures } from "../css/planetTextures.js";
import "./CuteFace.js";

class BasePlanet extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --texture: #485456;
        --border-width: calc(var(--size, 150px) * 0.06);
      }

      .container {
        width: var(--size, 150px);
        height: var(--size, 150px);
        background: var(--texture);
        box-shadow:
          30px 0px 0 #0003 inset,
          5px 5px 10px #0006;
        border: var(--border-width) solid #fff;
        border-radius: 50%;
        position: relative;
        box-sizing: border-box;
      }

      .container::before {
        --width: calc(var(--size, 150px) * 0.05);
        --height: calc(var(--size, 150px) * 0.05);
        inset: 15% 0 0 77%;
      }

      .container::after {
        --width: calc(var(--size, 150px) * 0.12);
        --height: calc(var(--size, 150px) * 0.06);
        inset: 9% 0 0 65%;
        transform: rotate(25deg);
      }

      .container::before,
      .container::after {
        content: "";
        background: #fff4;
        border-radius: 50%;
        position: absolute;
        width: var(--width);
        height: var(--height);
      }

      ${planetTextures}
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${BasePlanet.styles}</style>
    <div class="container">
      <cute-face></cute-face>
    </div>`;
  }
}

customElements.define("base-planet", BasePlanet);
