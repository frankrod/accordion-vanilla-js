import Accordion from "./Accordion";
import './styles.scss'
import {
  getNewSection
} from "./services/section";

document.addEventListener("DOMContentLoaded", async (event) => {
  const accordionElement = document.querySelector('.Accordion')
  const accordion = new Accordion(accordionElement);

  const {
    message: imgUrl
  } = await getNewSection()

  const title = imgUrl.split('/')[4]

  accordion.renderNewAccordionSection(`Dog breed - ${title}`, imgUrl)
  accordion.init()
});
