export const planetTextures = /* css */`
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
`;
