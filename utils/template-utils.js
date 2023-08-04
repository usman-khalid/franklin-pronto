import { getMetadata } from './page-utils.js';
import { toClassName } from './string-utils.js';

/**
 * Set template (page structure) and theme (page styles).
 */
// eslint-disable-next-line import/prefer-default-export
export function decorateTemplateAndTheme() {
  const addClasses = (element, classes) => {
    classes.split(',').forEach((c) => {
      element.classList.add(toClassName(c.trim()));
    });
  };
  const template = getMetadata('template');
  if (template) addClasses(document.body, template);
  const theme = getMetadata('theme');
  if (theme) addClasses(document.body, theme);
}
