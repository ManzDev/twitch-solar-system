const f=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&u(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};f();const n=`
:host {
  animation: orbit 5s linear infinite;
  transform-origin: 0% -25%;
  display: inline-block;
}

.container {
  animation: rotate 5s linear infinite;
}

@keyframes orbit {
  to{
    transform: rotate(1turn);
  }
}

@keyframes rotate {
  to{
    transform: rotate(-1turn);
  }
}
`,b=`
  :host-context(.mars) {
    --texture: radial-gradient(
      40% 22% at 10% 10%,
      #B45006 80%,
      #C96802 92% 100%,
      #0000 110%),
    radial-gradient(
      5% 15% at 24% 75%,
      #B45006 60%,
      #C96802 72% 140%,
      #0000 180%),
    radial-gradient(
      at 20% 0%,
      #0000 50%,
      #C96802 60% 70%,
      #B45006 75%
    ),
    radial-gradient(
      30% 30% at 60% 50%,
      #C96802 60%,
      #D77F09 72%
    );
  }

  :host-context(.saturn) {
    --texture: radial-gradient(
      150% 100% at 50% 105%,
      #9F6F52 10% 11.5%,
      #CCA388 12% 16.5%,
      #E8B878 17% 31.5%,
      #E7AF55 32% 34.5%,
      #F7BE5B 35% 61.5%,
      #E8AC5A 62% 86.5%,
      #E4B788 87% 97.5%,
      #C7A68F 98%
    );
  }

  :host-context(.jupiter) {
    --texture: radial-gradient(
      210% 100% at 50% 95%,
      #A4A091 10%,
      #BBAD96 12% 22%,
      #CEC3B7 27% 30%,
      #DDDAD2 32% 33%,
      #CEC3B7 34% 40%,
      #DDDAD2 42% 50%,
      #CEC3B7 52% 58%,
      #BEB1A1 60% 70%,
      #C1AE97 72% 82%,
      #ABA590 84%
    );
  }

  :host-context(.uranus) {
    --texture: radial-gradient(
      200% 100% at 50% 105%,
      #81ADA8 10%,
      #28B0E2 15% 30%,
      #25BEF5 35% 75%,
      #28B0E2 80% 88%,
      #81ADA8 100%
    );
  }

  :host-context(.earth) {
    --texture: radial-gradient(
      60% 40% at 0% 40%,
      #7C9772 71%,
      #C0BFA6 80%,
      #007DB7 82% 94%,
      #0000 95%),
      radial-gradient(
        at 0% 80%,
        #0000 70%,
        #7C9772 71%,
        #C0BFA6 80%
      ),
      radial-gradient(
        20% 12% at 95% 80%,
        #7C9772 55%,
        #C0BFA6 80% 90%,
        #0000 95%
      ),
      radial-gradient(
        210% 100% at 50% 100%,
      #F2F9FB 10%,
        #007DB7 15% 84%
      );
    }

    :host-context(.neptune) {
      --texture: radial-gradient(
        200% 100% at 50% 105%,
        #226EA0 10%,
        #165E98 15% 30%,
        #2C87BD 35% 75%,
        #165E98 80% 88%,
        #226EA0 100%
      );
    }

    :host-context(.mercury) {
      --texture: radial-gradient(
        #999393,
        #6b6969
      )
    }

    :host-context(.venus) {
      --texture: radial-gradient(
        60% 30% at 50% 100%,
        #ece1d3 30%,
        transparent 80%
      ),
      linear-gradient(
        #d1b99a,
        #dfc5a3
      )
    }

    :host-context(.sun) {
      --texture: #fbbc05;
    }

    :host-context(.sun)::before {
      content: "";
      display: block;
      width: 200%;
      height: 200%;
      position: absolute;
      inset: 0;
      animation: shine 6s ease-in-out infinite alternate;

      background-image: repeating-conic-gradient(gold 0 2%, #0000 2% 5%);
      border-radius: 50%;
      -webkit-mask-image: radial-gradient(#000 25%, #0000 55%, transparent 70%);
    }

    @keyframes shine {
      0% {
        transform: translate(-25%, -25%) rotate(0);
      }

      100% {
        transform: translate(-25%, -25%) rotate(160deg);
      }
    }
  }
`;class i extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render();const a=2e3+Math.floor(Math.random()*5e3);setInterval(()=>this.blink(),a);const s=~~(Math.random()*10);this.style.setProperty("--current-shape",s?"var(--happy-mouth-shape)":"var(--surprise-mouth-shape)")}blink(){this.shadowRoot.querySelectorAll(".eye").forEach(s=>{s.classList.add("blink"),setTimeout(()=>s.classList.remove("blink"),1e3)})}render(){this.shadowRoot.innerHTML=`
    <style>${i.styles}</style>
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
    </div>`}}customElements.define("cute-face",i);class o extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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

      ${b}
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${o.styles}</style>
    <div class="container">
      <cute-face></cute-face>
    </div>`}}customElements.define("base-planet",o);class l extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      ${n}
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${l.styles}</style>
    <div class="container">
      <base-planet></base-planet>
    </div>`}}customElements.define("only-planet",l);class c extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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

      ${n}
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${c.styles}</style>
    <div class="container">
      <base-planet></base-planet>
    </div>`}}customElements.define("ring-planet",c);class d extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      .moon {
        --texture: #666;
        --size: 50px;

        display: inline-block;
        transform-origin: 25% 125%;
        animation: rotate 5s linear infinite;
      }

      ${n}
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${d.styles}</style>
    <div class="container">
      <base-planet class="moon"></base-planet>
      <base-planet></base-planet>
    </div>`}}customElements.define("satellite-planet",d);class p extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {

      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${p.styles}</style>
    <div class="container">
      <base-planet></base-planet>
    </div>`}}customElements.define("sun-star",p);class h extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}addPlanet(a){}render(){this.shadowRoot.innerHTML=`
    <style>${h.styles}</style>
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
    </div>`}}customElements.define("solar-system",h);
