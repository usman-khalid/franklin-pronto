import heroClasses from './hero.module.css';

export default async function decorate(block) {
  block.parentElement.parentElement.classList.add(heroClasses.heroContainer);
  block.classList.add(heroClasses.hero);
}
