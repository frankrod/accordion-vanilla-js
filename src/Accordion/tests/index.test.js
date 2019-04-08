import Accordion from '../index'

test('when click on an accordion section it shows accordion content', () => {
  document.body.innerHTML = `<dl class="Accordion">
  <dt>Section 1</dt>
  <dd>
    <p>Section 1 Content...</p>
  </dd>
  <dt>Section 2</dt>
  <dd>
    <p>Section 2 Content...</p>
  </dd>
  <dt>Section 3</dt>
  <dd>
    <p>Section 3 Content...</p>
  </dd>
</dl>`

  const accordionElement = document.querySelector('.Accordion')
  const accordion = new Accordion(accordionElement)
  accordion.init()

  const sections = document.querySelectorAll("dt")
  const sectionsContent = document.querySelectorAll("dd")

  simulateClick(sections[0])

  const sectionContentOneIsExpanded = sectionsContent[0].className
  const sectionContentTwoIsHidden = sectionsContent[1].className
  const sectionContentThreeIsHidden = sectionsContent[2].className

  expect(sectionContentOneIsExpanded).toEqual('Accordion-content is-expanded')
  expect(sectionContentTwoIsHidden).toEqual('Accordion-content is-hidden')
  expect(sectionContentThreeIsHidden).toEqual('Accordion-content is-hidden')
});

function simulateClick(elem) {
  const evt = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  });
  const canceled = !elem.dispatchEvent(evt);
};
