import { planetAnimation } from "../css/planetAnimation.js";
import "./BasePlanet.js";

class SatellitePlanet extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      .moon {
        --texture: #666;
        --size: 50px;

        display: inline-block;
        transform-origin: 25% 125%;
        animation: rotate 5s linear infinite;
      }

      ${planetAnimation}
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${SatellitePlanet.styles}</style>
    <div class="container">
      <base-planet class="moon"></base-planet>
      <base-planet></base-planet>
    </div>`;
  }
}

customElements.define("satellite-planet", SatellitePlanet);
