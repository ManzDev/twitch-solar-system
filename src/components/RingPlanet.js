import { planetAnimation } from "../css/planetAnimation.js";
import "./BasePlanet.js";

class RingPlanet extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --size: 150px;
      }

      /* Rings */

      .container::before,
      .container::after {
        --multiplier: 0.15;
        --border-size: calc(var(--size) * var(--multiplier));
        --border-width: 4px;

        content: "";
        display: inline-block;
        border: var(--border-size) solid #966D4F;
        position: absolute;
        inset: 0 0 0 0;
        border-radius: 50%;
        width: calc(var(--size) * calc(1 + calc(var(--multiplier) * 2)));
        height: var(--size);
        transform: translate(-20%, -10%) scaleY(0.5);
      }

      .container::before {
        clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
      }

      .container::after {
        clip-path: polygon(100% 50%, 0 50%, 0 100%, 100% 100%);
      }

      ${planetAnimation}
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${RingPlanet.styles}</style>
    <div class="container">
      <base-planet></base-planet>
    </div>`;
  }
}

customElements.define("ring-planet", RingPlanet);
