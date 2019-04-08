function section(title, imgSrc) {
  return `<dt>${title}</dt>
  <dd>
    <figure>
      <img src=${imgSrc} width="200">
    </figure>
  </dd>`
}

export default section;
