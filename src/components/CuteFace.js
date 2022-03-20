class CuteFace extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --border-width: calc(var(--size, 150px) * 0.02);
        --width: calc(var(--size, 150px) * 0.35);
        --height: calc(var(--size, 150px) * 0.2);
        --surprise-mouth-shape: 75% / 100%;
        --happy-mouth-shape: 0 0 50% 50% / 0 0 100% 100%;
        --current-shape: var(--happy-mouth-shape);
      }

      .container {
        width: var(--width);
        height: var(--height);
        position: absolute;
        inset: 30% 0 0 30%;
        display: flex;
        flex-direction: column;
        gap: 15%;
      }

      .eyes {
        display: flex;
        justify-content: space-around;
      }

      .eye {
        width: calc(var(--size, 150px) * 0.1);
        height: calc(var(--size, 150px) * 0.1);
        background: #000;
        border-radius: 50%;
        position: relative;
        transition: clip-path 1s ease-in-out;
        box-sizing: border-box;
      }

      .eye.blink {
        background: transparent;
        border: var(--border-width) solid #000;
        clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
      }

      .eye.blink::before { content: none }

      .eye::before {
        content: "";
        background: #fff;
        border-radius: 50%;
        position: absolute;
        inset: 15% 0 0 45%;
        width: calc(var(--size, 150px) * 0.03);
        height: calc(var(--size, 150px) * 0.03);
      }

      .expression {
        display: flex;
        justify-content: space-around;
      }

      .mouth {
        width: calc(var(--size, 150px) * 0.1);
        height: calc(var(--size, 150px) * 0.05);
        background: #000;
        border-radius: var(--current-shape);
        overflow: hidden;
      }

      .tongue {
        content: "";
        background: #d0262e;
        border-radius: 50%;
        transform: translate(50%, 45%);
        width: calc(var(--size, 150px) * 0.05);
        height: calc(var(--size, 150px) * 0.05);
      }

      .blush {
        width: calc(var(--size, 150px) * 0.06);
        height: calc(var(--size, 150px) * 0.04);
        background: #f396a699;
        border-radius: 50%;
      }
    `;
  }

  connectedCallback() {
    this.render();
    const time = 2000 + Math.floor(Math.random() * 5000);
    setInterval(() => this.blink(), time);

    const mood = ~~(Math.random() * 10);
    this.style.setProperty("--current-shape", mood ? "var(--happy-mouth-shape)" : "var(--surprise-mouth-shape)");
  }

  blink() {
    const eyes = this.shadowRoot.querySelectorAll(".eye");
    eyes.forEach(eye => {
      eye.classList.add("blink");
      setTimeout(() => eye.classList.remove("blink"), 1000);
    });
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CuteFace.styles}</style>
    <div class="container">
      <div class="eyes">
        <div class="left eye"></div>
        <div class="right eye"></div>
      </div>
      <div class="expression">
        <div class="blush"></div>
        <div class="mouth">
          <div class="tongue"></div>
        </div>
        <div class="blush"></div>
      </div>
    </div>`;
  }
}

customElements.define("cute-face", CuteFace);
