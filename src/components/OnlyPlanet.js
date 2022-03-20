import { planetAnimation } from "../css/planetAnimation.js";
import "./BasePlanet.js";

class OnlyPlanet extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      ${planetAnimation}
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${OnlyPlanet.styles}</style>
    <div class="container">
      <base-planet></base-planet>
    </div>`;
  }
}

customElements.define("only-planet", OnlyPlanet);
