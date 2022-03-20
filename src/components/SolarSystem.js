import "./OnlyPlanet.js";
import "./RingPlanet.js";
import "./SatellitePlanet.js";
import "./SunStar.js";

class SolarSystem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: 640px;
        --height: 480px;
      }

      .container {
        width: var(--width);
        height: var(--height);
        /* background: #1114; */
        position: relative;
      }

      .container > * {
        position: absolute;
      }

      .mercury { --size: 100px; }
      .mars { --size: 110px; }
      .venus { --size: 125px; }
      .earth { --size: 150px; }
      .neptune { --size: 160px; }
      .uranus { --size: 170px; }
      .saturn { --size: 200px; }
      .jupiter { --size: 225px; }
      .sun { --size: 400px; }

      .saturn {
        left: 20%;
        top: 20%;
        inset: 75% 0 0 50%;
      }

      .neptune {
        left: 44%;
        top: 30%;
      }

      .mercury {
        left: 80%;
        top: 90%;
      }

      .venus {
        left: 100%;
        top: 60%;
      }

      .mars {
        inset: 100% 0 0 75%;
      }

      .earth {
        left: 50%;
        top: 40%;
      }

      .jupiter {
        top: 50%;
        left: 30%;
      }

      .uranus {
        left: 80%;
        top: 50%;
      }

      .sun {
        left: 25%;
        top: 20%;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  addPlanet(planet) {
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${SolarSystem.styles}</style>
    <div class="container">
      <sun-star class="sun"></sun-star>
      <only-planet class="jupiter"></only-planet>
      <only-planet class="mars"></only-planet>
      <only-planet class="uranus"></only-planet>
      <only-planet class="neptune"></only-planet>
      <ring-planet class="saturn"></ring-planet>
      <only-planet class="venus"></only-planet>
      <only-planet class="mercury"></only-planet>
      <satellite-planet class="earth"></satellite-planet>
    </div>`;
  }
}

customElements.define("solar-system", SolarSystem);
