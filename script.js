class Person {
  constructor(name, number){
    this.name = name;
    this.number = number;
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'contact';
    this.element.innerHTML = (
      `
      <div class="contact__avatar contact__avatar--female"></div>
        <div class="contact__body">
          <div class="contact__name">
            ${this.name}
          </div>
          <div class="contact__phone">
            ${this.number}
          </div>
       </div>
      <button class="contact__callbtn"></button>
      `
    )

    return this.element
  }

  mount(parent) {
    parent.appendChild(this.render());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const contacts = document.querySelector('.contacts')

  const contact = new Person('Lyuben Tenekedzhiev', '42number4-42number42number4-33');
  const contact2 = new Person('Phoebe Father', '42number4-42number42number4-33');
  const contact3 = new Person('Benedict Cucumberdach', '42number4-42number42number4-33');
  const contact4 = new Person('Bendyoursnitch Commonman', '42number4-42number42number4-33');

  contact.mount(contacts);
  contact2.mount(contacts);
  contact3.mount(contacts);
  contact4.mount(contacts);
});


{/* <div class="contact">
      <div class="contact__avatar contact__avatar--female"></div>
      <div class="contact__body">
        <div class="contact__name">
          Patsy Gillan
        </div>
        <div class="contact__phone">
          334-343-2987
        </div>
      </div>
      <button class="contact__callbtn"></button>
    </div> */}