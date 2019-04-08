import section from './Section'

class Accordion {
  constructor(accordionElement) {
    this.accordionElement = accordionElement
    this.handleClickSection = this.handleClickSection.bind(this);
  }

  async init() {
    const accordionSections = this.accordionElement.querySelectorAll("dt");
    const accordionSectionsContent = this.accordionElement.querySelectorAll("dd");

    accordionSections.forEach(section => {
      this.addClassName(section, ["Accordion-section"]);
      section.addEventListener("click", this.handleClickSection);
    });

    accordionSectionsContent.forEach(sectionContent =>
      this.addClassName(sectionContent, ["Accordion-content", "is-hidden"])
    );
  }

  renderNewAccordionSection(title, content) {
    const sectionHTML = section(title, content)
    this.accordionElement.insertAdjacentHTML('beforeend', sectionHTML)
  }

  addClassName(element, classNames) {
    element.classList.add(...classNames);
  }

  toggleClassName(element, className) {
    element.classList.toggle(className);
  }

  handleClickSection(e) {
    const accordionSectionsContent = this.accordionElement.querySelectorAll("dd");

    accordionSectionsContent.forEach(sectionContent => {
      if (e.target === sectionContent.previousElementSibling) {
        this.toggleClassName(sectionContent, "is-hidden");
        this.toggleClassName(sectionContent, "is-expanded");
      }
    });
  }
}

export default Accordion;
