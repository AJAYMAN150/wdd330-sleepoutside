import { loadData } from './utils.mjs';

export default class Alert {
  constructor() {
    this.alerts = [];
  }

  async init() {
    this.alerts = await loadData('/json/alerts.json');

    if (!this.alerts || this.alerts.length === 0) {
      return;
    }

    this.renderAlerts();
  }

  renderAlerts() {
    const alertSection = document.createElement('section');
    alertSection.classList.add('alert-list');

    this.alerts.forEach((alert) => {
      const p = document.createElement('p');

      p.textContent = alert.message;
      p.style.backgroundColor = alert.background;
      p.style.color = alert.color;

      alertSection.appendChild(p);
    });

    const main = document.querySelector('main');
    main.prepend(alertSection);
  }
}