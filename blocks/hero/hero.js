import heroClasses from './hero.module.css';

export default async function decorate(block) {
  block.closest('.section').classList.add(heroClasses.heroContainer);
  block.classList.add(heroClasses.hero);
}
