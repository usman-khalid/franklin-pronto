import heroClasses from './hero.module.css';

export default async function decorate(block) {
  block.classList.add(heroClasses.hero);
}
