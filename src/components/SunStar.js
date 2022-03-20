import "./BasePlanet.js";

class SunStar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {

      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${SunStar.styles}</style>
    <div class="container">
      <base-planet></base-planet>
    </div>`;
  }
}

customElements.define("sun-star", SunStar);
