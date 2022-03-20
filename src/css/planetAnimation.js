export const planetAnimation = /* css */`
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
`;
