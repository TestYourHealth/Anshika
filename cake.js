
// JavaScript code

const colors = ['#ef8d22', '#feff28', '#2bd8ff', '#fc85e1'];
const particles = 50;
const width = 500;
const height = 500;

const boxShadow = [];
const boxShadow2 = [];

for (let i = 0; i <= particles; i++) {
  const boxShadowValue = `${Math.random() * width - width / 2}px ${Math.random() * height - height / 1.2}px hsl(${Math.random() * 360}, 100%, 50%)`;
  const boxShadow2Value = '0 0 #fff';

  boxShadow.push(boxShadowValue);
  boxShadow2.push(boxShadow2Value);
}

function keyframes(animationName, content) {
  const keyframes = `@-webkit-keyframes ${animationName} { ${content} }
                    @-moz-keyframes ${animationName} { ${content} }
                    @-o-keyframes ${animationName} { ${content} }
                    @-ms-keyframes ${animationName} { ${content} }
                    @keyframes ${animationName} { ${content} }`;

  return keyframes;
}

function animationDelay(settings) {
  return `-moz-animation-delay: ${settings};
          -webkit-animation-delay: ${settings};
          -o-animation-delay: ${settings};
          -ms-animation-delay: ${settings};
          animation-delay: ${settings};`;
}

function animationDuration(settings) {
  return `-moz-animation-duration: ${settings};
          -webkit-animation-duration: ${settings};
          -o-animation-duration: ${settings};
          -ms-animation-duration: ${settings};
          animation-duration: ${settings};`;
}

function animation(settings) {
  return `-moz-animation: ${settings};
          -webkit-animation: ${settings};
          -o-animation: ${settings};
          -ms-animation: ${settings};
          animation: ${settings};`;
}

function transform(settings) {
  return `transform: ${settings};
          -moz-transform: ${settings};
          -webkit-transform: ${settings};
          -o-transform: ${settings};
          -ms-transform: ${settings};`;
}
