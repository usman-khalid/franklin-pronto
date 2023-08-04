import columnsClasses from './columns.module.css';

export default function decorate(block) {
  block.classList.add(columnsClasses.columns);
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add(columnsClasses.columnsImgCol);
        }
      }
    });
  });
}
