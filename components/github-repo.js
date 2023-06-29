class GithubRepo extends HTMLElement {
  constructor() {
    super();
    const url = "https://github.com/curiosdevcookie/JS-Journey";
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        #github-icon {
          position: absolute;
          top: calc(1rem + 1vw);
          right: calc(1rem + 1vw);
          width: calc(1rem + 1vw);
          height: auto;
          fill: var(--color-headings);
          animation: grow-shrink 2s linear;
        }

        #github-icon:hover {
          fill: var(--color-accent);
        }

        @keyframes grow-shrink {
          0% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.5);
          }

          100% {
            transform: scale(1);
          }
        }
      </style>

      <a href="${url}" title="View on GitHub" target="_blank" rel="noopener">
        <svg id="github-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 0a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.6.1-.6.1-.6 1.2.1 1.8 1.2 1.8 1.2 1 1.7 2.6 1.2 3.3.9.1-.7.4-1.2.8-1.5-2.7-.3-5.6-1.3-5.6-5.8 0-1.3.5-2.3 1.3-3.2 0 0 1-.3 3.3 1.2a11.7 11.7 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1 .9 1.8.9 3.2 0 4.5-2.9 5.5-5.6 5.8.4.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6A12 12 0 0012 0z" />
        </svg>
      </a >
      `;
  }
}

customElements.define('github-repo', GithubRepo);